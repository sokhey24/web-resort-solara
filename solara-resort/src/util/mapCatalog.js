import { resolveStorageUrl } from './media.js';

/** Neutral placeholder when the API omits media (not a catalogue fixture). */
export const CATALOG_IMAGE_PLACEHOLDER = null;

function facilityNames(facilities) {
  if (!Array.isArray(facilities)) return [];
  return facilities.map((f) => f?.name).filter(Boolean);
}

function roomDisplayName(room) {
  const typeName = room?.room_type?.name || room?.roomType?.name || 'Room';
  const num = room?.room_number;
  return num ? `${typeName} · ${num}` : typeName;
}

function primaryRoomImage(room) {
  const images = room?.images || [];
  const primary = images.find((img) => img.is_primary) || images[0];
  return primary?.url || resolveStorageUrl(primary?.image_path) || CATALOG_IMAGE_PLACEHOLDER;
}

function roomGallery(room) {
  const images = room?.images || [];
  return images.map((img) => img.url || resolveStorageUrl(img.image_path)).filter(Boolean);
}

export function mapResortFromApi(row) {
  if (!row) return null;

  const startingPrice = Number(row.price_from ?? row.starting_price ?? 0);
  const startingPriceOriginal = Number(row.price_from_original ?? startingPrice);
  const startingPriceDiscountPercent = Number(row.price_from_discount_percent ?? 0);
  const hasStartingDiscount =
    startingPriceDiscountPercent > 0 &&
    startingPriceOriginal > 0 &&
    startingPrice < startingPriceOriginal - 0.001;
  const rating = Number(row.rating ?? 0);
  const reviewsCount = Number(row.review_count ?? row.reviews_count ?? 0);

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description || row.tagline || '',
    tagline: row.tagline || row.description || '',
    destination: row.city || '',
    location: [row.city, row.country].filter(Boolean).join(', ') || row.address || '',
    address: row.address,
    contactPhone: row.phone,
    contactEmail: row.email,
    featuredImage:
      row.cover_image_url || resolveStorageUrl(row.cover_image) || CATALOG_IMAGE_PLACEHOLDER,
    logoUrl: row.logo_url || resolveStorageUrl(row.logo),
    startingPrice,
    startingPriceOriginal,
    startingPriceDiscountPercent,
    hasStartingDiscount,
    rating,
    reviewsCount,
    badge: row.promo_tag || (row.featured ? 'Featured' : null),
    amenities: facilityNames(row.facilities),
    stars: row.stars,
    resortType: row.resort_type,
    freeCancellation: row.free_cancellation,
    breakfastOptions: row.breakfast_options,
    roomsCount: Number(row.rooms_count ?? 0),
    roomTypeCount: Number(row.room_type_count ?? 0),
    availableRoomsCount: Number(row.available_rooms_count ?? 0),
    raw: row,
  };
}

export function mapResortDetailFromApi(data, galleryPhotos = []) {
  const base = mapResortFromApi(data);
  if (!base) return null;

  const galleryFromApi = (galleryPhotos || [])
    .map((p) => resolveStorageUrl(p.path))
    .filter(Boolean);

  const startingPrice = Number(data.price_from ?? base.startingPrice ?? 0);

  const gallery = [base.featuredImage, base.logoUrl, ...galleryFromApi].filter(
    (url, idx, arr) => url && arr.indexOf(url) === idx
  );

  return {
    ...base,
    startingPrice,
    gallery,
    branches: data.branches || [],
    facilities: facilityNames(data.facilities),
  };
}

export function mapRoomFromApi(room) {
  if (!room) return null;

  const type = room.room_type || room.roomType || {};
  const resort = room.resort || {};
  const listPricePerNight = Number(room.price_per_night ?? type.base_price ?? 0);
  const pricePerNight = Number(
    room.discounted_price_per_night ??
      room.price_per_night ??
      type.discounted_base_price ??
      listPricePerNight
  );
  const discountPercent = Number(room.effective_discount_percent ?? 0);
  const hasDiscount =
    discountPercent > 0 &&
    listPricePerNight > 0 &&
    pricePerNight < listPricePerNight - 0.001;
  const sizeSqm = Number(type.size_sqm ?? 0);
  const maxOccupancy = Number(type.max_occupancy ?? 2);

  const mapped = {
    id: room.id,
    resortId: room.resort_id ?? resort.id,
    resortName: resort.name || '',
    name: roomDisplayName(room),
    type: type.name || 'Room',
    description: type.description || room.notes || '',
    featuredImage: primaryRoomImage(room),
    gallery: roomGallery(room),
    pricePerNight,
    listPricePerNight,
    discountPercent,
    hasDiscount,
    capacity: {
      adults: maxOccupancy,
      children: 0,
    },
    bedType: type.bed_type || '—',
    sizeSqm,
    view: room.view || '—',
    amenities: Array.isArray(type.amenities) ? type.amenities : [],
    /** Operational room status from PMS — not stay availability for arbitrary dates. */
    operationalStatus: room.status,
    stayAvailable: room.stay_available,
    resortSnapshot: {
      id: resort.id ?? room.resort_id,
      name: resort.name || '',
    },
    raw: room,
  };

  return mapped;
}

export function buildDestinationTiles(resorts) {
  const byCity = new Map();

  resorts.forEach((resort) => {
    const city = resort.destination || resort.location?.split(',')[0]?.trim();
    if (!city) return;

    if (!byCity.has(city)) {
      byCity.set(city, {
        name: city,
        resorts: [],
        startingPrice: Number.POSITIVE_INFINITY,
        image: resort.featuredImage,
        subtitle: '',
      });
    }

    const tile = byCity.get(city);
    tile.resorts.push(resort);
    tile.startingPrice = Math.min(tile.startingPrice, resort.startingPrice || Number.POSITIVE_INFINITY);
    if (!tile.subtitle && resort.description) {
      tile.subtitle = resort.description;
    }
    if (!tile.image && resort.featuredImage) {
      tile.image = resort.featuredImage;
    }
  });

  return Array.from(byCity.values()).map((tile) => ({
    name: tile.name,
    image: tile.image || CATALOG_IMAGE_PLACEHOLDER,
    subtitle: tile.subtitle,
    resortsCount: tile.resorts.length,
    startingPrice:
      tile.startingPrice === Number.POSITIVE_INFINITY ? 0 : tile.startingPrice,
  }));
}

export function buildCityFilterOptions(resorts, allLabel) {
  const cities = new Set();
  resorts.forEach((r) => {
    if (r.destination) cities.add(r.destination);
  });

  return [
    { value: '', label: allLabel, count: resorts.length },
    ...Array.from(cities)
      .sort((a, b) => a.localeCompare(b))
      .map((city) => ({
        value: city,
        label: city,
        count: resorts.filter((r) => r.destination === city).length,
      })),
  ];
}

export const mapSortToApi = (sort) => {
  const map = {
    recommended: 'recommended',
    'price-asc': 'price_asc',
    'price-desc': 'price_desc',
    rating: 'rating',
  };
  return map[sort] || 'recommended';
};

export function sortResortsClient(resorts, sort) {
  const list = [...resorts];
  if (sort === 'price-asc') {
    return list.sort((a, b) => a.startingPrice - b.startingPrice);
  }
  if (sort === 'price-desc') {
    return list.sort((a, b) => b.startingPrice - a.startingPrice);
  }
  if (sort === 'rating') {
    return list.sort((a, b) => b.rating - a.rating);
  }
  return list.sort((a, b) => b.reviewsCount - a.reviewsCount);
}
