const DEFAULT_AFTER_LOGIN = '/account';

/**
 * Only allow same-origin relative paths (no protocol-relative or external URLs).
 */
export function resolveSafeInternalPath(next, fallback = DEFAULT_AFTER_LOGIN) {
  const raw = typeof next === 'string' ? next.trim() : '';
  if (!raw) return fallback;

  if (raw.startsWith('//') || /^https?:\/\//i.test(raw)) {
    return fallback;
  }

  let path = raw;
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  if (path.includes('\\') || path.includes('@')) {
    return fallback;
  }

  try {
    const resolved = new URL(path, window.location.origin);
    if (resolved.origin !== window.location.origin) {
      return fallback;
    }
    const out = `${resolved.pathname}${resolved.search}${resolved.hash}`;
    return out.startsWith('/') ? out : fallback;
  } catch {
    return fallback;
  }
}

export default resolveSafeInternalPath;
