<?php

namespace App\Http\Controllers\Api\Guest;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class GuestController extends Controller
{
    /**
     * Website guests (users with the customer role) for dashboard lists and booking pickers.
     */
    public function index(): JsonResponse
    {
        $users = User::query()
            ->with([
                'roles',
                'latestBooking.rooms:id,room_number',
            ])
            ->whereHas('roles', fn ($q) => $q->where('name', 'customer'))
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (User $user) => $this->formatGuestUser($user));

        return response()->json(['data' => $users]);
    }

    public function show(User $guest): JsonResponse
    {
        abort_unless($guest->isCustomer(), 404);

        $guest->load(['bookings', 'roles', 'latestBooking.rooms:id,room_number']);

        return response()->json(['data' => $this->formatGuestUser($guest)]);
    }

    private function formatGuestUser(User $user): array
    {
        $data = $user->toArray();
        $data['profile_image_url'] = $user->profile_image
            ? Storage::disk('public')->url($user->profile_image)
            : null;

        $booking = $user->latestBooking;
        $data['latest_booking_id'] = $booking?->id;
        $data['resort_id'] = $booking?->resort_id;
        $data['room_ids'] = $booking
            ? $booking->rooms->pluck('id')->map(fn ($id) => (int) $id)->values()->all()
            : [];
        $data['room_numbers'] = $booking
            ? $booking->rooms->pluck('room_number')->filter()->unique()->values()->all()
            : [];
        $data['check_in'] = $booking?->check_in?->toDateString();
        $data['check_out'] = $booking?->check_out?->toDateString();
        $data['payment_status'] = $booking?->payment_status;

        unset($data['latest_booking']);

        return $data;
    }
}
