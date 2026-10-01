/**
 * Shareable guest search state in the URL.
 * Resort list API supports: destination / city / search (not dates or guest counts).
 * Room list API supports: check_in, check_out, resort_id, room_type_id, include_booked.
 */

export function parseSearchCriteria(searchParams) {
  const adultsRaw = searchParams.get('adults');
  const childrenRaw = searchParams.get('children');
  const guestsLegacy = searchParams.get('guests');

  let adults = 2;
  if (adultsRaw) {
    adults = Number(adultsRaw) || 2;
  } else if (guestsLegacy) {
    adults = Number(guestsLegacy) || 2;
  }

  return {
    destination: searchParams.get('destination') || '',
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    adults,
    children: childrenRaw ? Number(childrenRaw) || 0 : 0,
    rooms: Number(searchParams.get('rooms')) || 1,
  };
}

export function applySearchCriteria(baseParams, criteria) {
  const next = new URLSearchParams(baseParams);

  const setOrDelete = (key, value) => {
    if (value === undefined || value === null || value === '') {
      next.delete(key);
    } else {
      next.set(key, String(value));
    }
  };

  setOrDelete('destination', criteria.destination);
  setOrDelete('checkIn', criteria.checkIn);
  setOrDelete('checkOut', criteria.checkOut);
  setOrDelete('adults', criteria.adults);
  setOrDelete('children', criteria.children > 0 ? criteria.children : '');
  setOrDelete('rooms', criteria.rooms);

  next.delete('guests');

  return next;
}

export function buildResortsSearchPath(criteria, existingParams = '') {
  const base =
    existingParams instanceof URLSearchParams
      ? existingParams
      : new URLSearchParams(existingParams || '');
  const next = applySearchCriteria(base, criteria);
  const qs = next.toString();
  return qs ? `/resorts?${qs}` : '/resorts';
}

/** Room catalogue query (snake_case for Laravel). */
export function roomCatalogParamsFromCriteria(criteria, extra = {}) {
  const out = { ...extra };
  if (criteria.checkIn) out.check_in = criteria.checkIn;
  if (criteria.checkOut) out.check_out = criteria.checkOut;
  if (criteria.checkIn && criteria.checkOut) {
    out.include_booked = 1;
  }
  return out;
}

export function buildRoomsSearchPath(criteria) {
  const next = applySearchCriteria(new URLSearchParams(), criteria);
  const qs = next.toString();
  return qs ? `/rooms?${qs}` : '/rooms';
}
