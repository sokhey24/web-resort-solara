<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

/**
 * Admin dashboard API: system admins or users with admin.dashboard.view only.
 */
class DashboardAccessMiddleware
{
    public function handle(Request $request, Closure $next): mixed
    {
        $user = $request->user();

        if (! $user) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        if ($user->isAdmin()) {
            return $next($request);
        }

        if (in_array('admin.dashboard.view', $user->permissions(), true)) {
            return $next($request);
        }

        return response()->json(['message' => 'Forbidden. You do not have permission to perform this action.'], 403);
    }
}
