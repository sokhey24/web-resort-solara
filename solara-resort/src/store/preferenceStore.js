const PREFS_KEY = 'solara_prefs';

const DEFAULT_PREFS = {
  theme: 'dark',
  currency: 'USD',
  lang: 'en',
};

export function loadPreferences() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return { ...DEFAULT_PREFS };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PREFS, ...parsed };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

export function savePreferences(updates) {
  try {
    const current = loadPreferences();
    const next = { ...current, ...updates };
    localStorage.setItem(PREFS_KEY, JSON.stringify(next));
    return next;
  } catch {
    return loadPreferences();
  }
}
