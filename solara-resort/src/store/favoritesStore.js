const FAVORITES_KEY = 'solara_favorites';

const EMPTY = { resorts: [], rooms: [] };

export function normalizeFavorites(input) {
  const src = input && typeof input === 'object' ? input : {};
  const resorts = Array.isArray(src.resorts) ? src.resorts.map(String) : [];
  const rooms = Array.isArray(src.rooms) ? src.rooms.map(String) : [];
  return {
    resorts: [...new Set(resorts)].slice(0, 200),
    rooms: [...new Set(rooms)].slice(0, 200),
  };
}

export function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return { ...EMPTY };
    return normalizeFavorites(JSON.parse(raw));
  } catch {
    return { ...EMPTY };
  }
}

export function saveFavorites(favorites) {
  const next = normalizeFavorites(favorites);
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  } catch {
    // ignore quota errors
  }
  return next;
}

export function mergeFavorites(a, b) {
  const left = normalizeFavorites(a);
  const right = normalizeFavorites(b);
  return normalizeFavorites({
    resorts: [...left.resorts, ...right.resorts],
    rooms: [...left.rooms, ...right.rooms],
  });
}

export function toggleFavoriteId(list, id) {
  const key = String(id);
  const set = new Set(Array.isArray(list) ? list.map(String) : []);
  if (set.has(key)) {
    set.delete(key);
  } else {
    set.add(key);
  }
  return [...set];
}
