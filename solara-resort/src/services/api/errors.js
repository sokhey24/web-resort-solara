export function getApiErrorMessage(error, fallback = 'Something went wrong. Please try again.') {
  const response = error?.response;
  if (!response) {
    return error?.message === 'Network Error'
      ? 'Cannot connect to the server. Please check your connection and try again.'
      : fallback;
  }

  const data = response.data;
  if (data?.message && typeof data.message === 'string') {
    return data.message;
  }

  if (data?.errors && typeof data.errors === 'object') {
    const firstKey = Object.keys(data.errors)[0];
    const first = firstKey ? data.errors[firstKey] : null;
    if (Array.isArray(first) && first[0]) return first[0];
    if (typeof first === 'string') return first;
  }

  if (response.status === 401) return 'Invalid email or password.';
  if (response.status === 403) return 'You do not have permission to sign in here.';
  if (response.status === 422) return 'Please check your information and try again.';
  if (response.status === 429) return 'Too many attempts. Please wait and try again.';

  return fallback;
}

export function getValidationFieldErrors(error) {
  const errors = error?.response?.data?.errors;
  if (!errors || typeof errors !== 'object') return {};
  const out = {};
  Object.keys(errors).forEach((key) => {
    const val = errors[key];
    out[key] = Array.isArray(val) ? val[0] : val;
  });
  return out;
}
