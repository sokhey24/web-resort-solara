<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

/**
 * Reports module: admin, resort/restaurant managers, or users with admin.reports.view.
 */
class ReportsAccessMiddleware
{
    public function handle(Request $request, Closure $next): mixed
    {
        $user = $request->user();

        if (! $user) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        if ($user->roles()->whereIn('name', ['admin', 'resort_manager', 'restaurant_manager'])->exists()) {
            return $next($request);
        }

        if (in_array('admin.reports.view', $user->permissions(), true)) {
            return $next($request);
        }

        return response()->json(['message' => 'Forbidden. You do not have permission to perform this action.'], 403);
    }
}
