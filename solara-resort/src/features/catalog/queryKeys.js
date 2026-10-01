export const catalogKeys = {
  all: ['catalog'],
  resorts: (params) => ['catalog', 'resorts', params],
  resort: (id) => ['catalog', 'resort', id],
  resortRooms: (resortId, params) => ['catalog', 'resort-rooms', resortId, params],
  resortGallery: (resortId) => ['catalog', 'resort-gallery', resortId],
  rooms: (params) => ['catalog', 'rooms', params],
  room: (id) => ['catalog', 'room', id],
  roomTypes: (params) => ['catalog', 'room-types', params],
};
