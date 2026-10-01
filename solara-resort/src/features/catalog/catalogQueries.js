import {
  fetchResort,
  fetchResortGallery,
  fetchResorts,
  fetchRoom,
  fetchRooms,
  fetchRoomTypes,
} from '../../services/api/catalogApi.js';
import {
  mapResortDetailFromApi,
  mapResortFromApi,
  mapRoomFromApi,
} from '../../util/mapCatalog.js';

export async function queryResortsPage(params) {
  const payload = await fetchResorts(params);
  const rows = (payload?.data ?? []).map(mapResortFromApi).filter(Boolean);
  return { rows, meta: payload };
}

export async function queryResortDetailBundle(resortId) {
  const [resortRow, roomsPayload, gallery] = await Promise.all([
    fetchResort(resortId),
    fetchRooms({ resort_id: resortId, per_page: 50 }),
    fetchResortGallery(resortId).catch(() => []),
  ]);

  const mappedResort = mapResortDetailFromApi(resortRow, gallery);
  const mappedRooms = (roomsPayload?.data ?? []).map(mapRoomFromApi).filter(Boolean);

  return { resort: mappedResort, rooms: mappedRooms };
}

export async function queryRoomsPage(params) {
  const payload = await fetchRooms(params);
  const rows = (payload?.data ?? []).map(mapRoomFromApi).filter(Boolean);
  return { rows, meta: payload };
}

export async function queryRoomDetail(roomId) {
  const row = await fetchRoom(roomId);
  return mapRoomFromApi(row);
}

export async function queryRoomTypes(params) {
  const payload = await fetchRoomTypes(params);
  return payload?.data ?? [];
}
