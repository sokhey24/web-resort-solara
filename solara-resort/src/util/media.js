import config from './config.js';

export function resolveStorageUrl(pathOrUrl) {
  if (!pathOrUrl) return null;
  if (typeof pathOrUrl === 'string' && /^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const path = String(pathOrUrl).replace(/^\/+/, '');
  return `${config.imageUrl}/${path}`;
}

/** Primary room photo from API room payload (catalog + booking relations). */
export function resolveRoomFeaturedImage(room) {
  if (!room) return null;
  const images = room.images || [];
  const primary = images.find((img) => img.is_primary) || images[0];
  return primary?.url || resolveStorageUrl(primary?.image_path) || null;
}

export function resolveResortFeaturedImage(resort) {
  if (!resort) return null;
  return resort.cover_image_url || resolveStorageUrl(resort.cover_image) || null;
}
