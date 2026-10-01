<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Services\GuestProfileService;
use App\Services\ProfileService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse as SymfonyRedirectResponse;

class SocialAuthController extends Controller
{
    private const PROVIDERS = ['google', 'facebook'];

    public static function isConfigured(string $provider): bool
    {
        if (!in_array($provider, self::PROVIDERS, true)) {
            return false;
        }

        $config = config('services.' . $provider, []);

        return filled($config['client_id'] ?? null) && filled($config['client_secret'] ?? null);
    }

    public static function providersStatus(): array
    {
        return [
            'google'   => self::isConfigured('google'),
            'facebook' => self::isConfigured('facebook'),
        ];
    }

    public function __construct(
        protected GuestProfileService $guestProfiles,
        protected ProfileService $profileService,
    ) {}

    public function redirect(Request $request, string $provider): RedirectResponse|SymfonyRedirectResponse
    {
        $this->assertProvider($provider);

        if (!self::isConfigured($provider)) {
            $label = ucfirst($provider);
            return $this->guestErrorRedirect(
                "{$label} sign-in is not set up on the server. Add {$label}_CLIENT_ID and {$label}_CLIENT_SECRET to Web_Resort_api/.env, then run: php artisan config:clear"
            );
        }

        $request->session()->put('oauth_intent', $request->query('intent', 'guest'));
        $request->session()->put('oauth_next', $this->sanitizeNext($request->query('next')));

        return Socialite::driver($provider)->redirect();
    }

    public function callback(Request $request, string $provider): RedirectResponse
    {
        $this->assertProvider($provider);

        if ($request->filled('error')) {
            return $this->guestErrorRedirect('Social sign-in was cancelled or failed.');
        }

        try {
            $socialUser = Socialite::driver($provider)->user();
        } catch (\Throwable) {
            return $this->guestErrorRedirect('Social sign-in was cancelled or failed.');
        }

        if (!$socialUser->getEmail()) {
            return $this->guestErrorRedirect('We could not read an email from your social account.');
        }

        $user = $this->findOrCreateSocialUser($provider, $socialUser);
        if ($user->status === 'inactive') {
            return $this->guestErrorRedirect('Your account is inactive. Please contact the resort.');
        }

        $intent = (string) $request->session()->pull('oauth_intent', 'guest');
        $next = $this->sanitizeNext($request->session()->pull('oauth_next'));

        if ($intent === 'guest') {
            if ($user->isGuestAccount()) {
                $this->guestProfiles->syncFromUser($user);
            }
            $this->profileService->recordLogin($user);
            $token = $user->createToken('oauth_' . $provider)->plainTextToken;
            $base = rtrim((string) config('app.guest_web_url'), '/');
            $query = $next !== 'account.html' ? '?next=' . rawurlencode($next) : '';
            $fragment = http_build_query(['access_token' => $token], '', '&', PHP_QUERY_RFC3986);

            return redirect()->away("{$base}/login.html{$query}#{$fragment}");
        }

        Auth::login($user);
        $dashboardBase = rtrim((string) config('app.frontend_url'), '/');

        return redirect()->away("{$dashboardBase}/dashboard");
    }

    private function findOrCreateSocialUser(string $provider, $socialUser): User
    {
        $email = strtolower(trim((string) $socialUser->getEmail()));
        $name = $socialUser->getName() ?: Str::before($email, '@');

        $user = User::whereRaw('LOWER(email) = ?', [$email])->first();

        if ($user) {
            $user->name = $name;
            $user->email_verified_at = $user->email_verified_at ?? now();
            if (!$user->getRawOriginal('password')) {
                $user->password = Hash::make(Str::password(32));
            }
            $this->applyProviderMeta($user, $provider, $socialUser);
            $user->save();
        } else {
            $user = User::create([
                'name'     => $name,
                'email'    => $email,
                'password' => Hash::make(Str::password(32)),
            ]);
            $user->email_verified_at = now();
            $this->applyProviderMeta($user, $provider, $socialUser);
            $user->save();

            $customerRole = Role::where('name', 'customer')->first();
            if ($customerRole) {
                $user->roles()->syncWithoutDetaching([$customerRole->id]);
            }
        }

        $user->load('roles');

        return $user;
    }

    private function applyProviderMeta(User $user, string $provider, $socialUser): void
    {
        if ($provider !== 'google') {
            return;
        }

        $user->google_id = $socialUser->getId();
        $user->google_token = $socialUser->token;
        $user->is_google_account = true;
    }

    private function guestErrorRedirect(string $message): RedirectResponse
    {
        $base = rtrim((string) config('app.guest_web_url'), '/');
        $fragment = http_build_query(['error' => $message], '', '&', PHP_QUERY_RFC3986);

        return redirect()->away("{$base}/login.html#{$fragment}");
    }

    private function sanitizeNext(?string $next): string
    {
        $next = trim((string) $next);
        if ($next === '') {
            return 'account.html';
        }
        if (!preg_match('/^[a-z0-9\-]+\.html(\?[-a-z0-9_.=&%]*)?$/i', $next)) {
            return 'account.html';
        }

        return $next;
    }

    private function assertProvider(string $provider): void
    {
        if (!in_array($provider, self::PROVIDERS, true)) {
            abort(404);
        }
    }
}
