const TOKEN_KEY = 'solara_access_token';

export function getAccessToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setAccessToken(token) {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  } catch {
    // ignore quota / private mode
  }
}

export function clearAccessToken() {
  setAccessToken(null);
}
