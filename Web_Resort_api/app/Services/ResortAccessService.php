<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

/**
 * Central resort data visibility: admins (and admin-panel permissions) see all resorts;
 * assigned resort staff see only their resort(s).
 */
class ResortAccessService
{
    public function bypassesResortScope(?User $user): bool
    {
        if (! $user) {
            return true;
        }

        if ($user->isAdmin()) {
            return true;
        }

        return $user->hasPermission('admin.dashboard.view')
            || $user->hasPermission('admin.resorts.view');
    }

    /** @return int[] */
    public function assignedResortIds(?User $user): array
    {
        if (! $user) {
            return [];
        }

        return $user->assignedResortIds();
    }

    /**
     * Restrict a query with a direct resort_id column.
     */
    public function applyResortColumnScope(
        Builder $query,
        ?User $user,
        string $column = 'resort_id',
        mixed $filterResortId = null
    ): void {
        $filterId = $filterResortId ? (int) $filterResortId : null;

        if ($this->bypassesResortScope($user)) {
            if ($filterId) {
                $query->where($column, $filterId);
            }

            return;
        }

        $assigned = $this->assignedResortIds($user);
        if ($assigned === []) {
            $query->whereRaw('1 = 0');

            return;
        }

        $query->whereIn($column, $assigned);

        if ($filterId) {
            if (in_array($filterId, $assigned, true)) {
                $query->where($column, $filterId);
            } else {
                $query->whereRaw('1 = 0');
            }
        }
    }

    public function assertResortAccessible(?User $user, int $resortId): void
    {
        if ($this->bypassesResortScope($user)) {
            return;
        }

        $assigned = $this->assignedResortIds($user);
        if ($assigned === [] || ! in_array($resortId, $assigned, true)) {
            abort(403, 'You cannot access data for this resort.');
        }
    }
}
