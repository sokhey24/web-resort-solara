const trimTrailingSlash = (url) => String(url || '').replace(/\/+$/, '');

const apiRoot = trimTrailingSlash(
  import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api'
);

export const config = {
  apiUrl: `${apiRoot}/`,
  imageUrl: trimTrailingSlash(
    import.meta.env.VITE_IMAGE_URL ?? 'http://localhost:8000/storage'
  ),
};

export default config;
