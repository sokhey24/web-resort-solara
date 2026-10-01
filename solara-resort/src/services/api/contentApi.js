import axiosClient from './axiosClient.js';

export async function fetchWebsiteContent() {
  const { data } = await axiosClient.get('website-content');
  return data?.data ?? data ?? {};
}
