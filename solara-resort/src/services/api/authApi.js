import axiosClient from './axiosClient.js';

export async function loginRequest(credentials) {
  const { data } = await axiosClient.post('auth/login', credentials);
  return data;
}

export async function registerRequest(payload) {
  const { data } = await axiosClient.post('auth/register', payload);
  return data;
}

export async function logoutRequest() {
  const { data } = await axiosClient.post('auth/logout');
  return data;
}

export async function meRequest() {
  const { data } = await axiosClient.get('auth/me');
  return data;
}

export async function twoFactorChallengeRequest(payload) {
  const { data } = await axiosClient.post('auth/two-factor/challenge', payload);
  return data;
}

export async function sendPasswordResetOtp(email) {
  const { data } = await axiosClient.post('auth/forgot-password/send-otp', { email });
  return data;
}

export async function verifyPasswordResetOtp(payload) {
  const { data } = await axiosClient.post('auth/forgot-password/verify-otp', payload);
  return data;
}

export async function resendPasswordResetOtp(email) {
  const { data } = await axiosClient.post('auth/forgot-password/resend-otp', { email });
  return data;
}

export async function resetPasswordWithToken(payload) {
  const { data } = await axiosClient.post('auth/forgot-password/reset', payload);
  return data;
}

/** POST /api/auth/profile — legacy profile update on auth prefix */
export async function updateAuthProfileRequest(payload) {
  const { data } = await axiosClient.post('auth/profile', payload);
  return data;
}
