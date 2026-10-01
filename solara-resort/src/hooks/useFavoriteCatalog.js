import { useEffect, useState } from 'react';
import { fetchResort, fetchRoom } from '../services/api/catalogApi.js';
import { mapResortFromApi, mapRoomFromApi } from '../util/mapCatalog.js';

export function useFavoriteCatalog(favoriteResortIds, favoriteRoomIds) {
  const [resorts, setResorts] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const resortKey = (favoriteResortIds || []).join(',');
  const roomKey = (favoriteRoomIds || []).join(',');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const resortIds = favoriteResortIds || [];
      const roomIds = favoriteRoomIds || [];

      if (!resortIds.length && !roomIds.length) {
        setResorts([]);
        setRooms([]);
        setLoading(false);
        return;
      }

      setLoading(true);

      const [resortResults, roomResults] = await Promise.all([
        Promise.allSettled(
          resortIds.map(async (id) => {
            const row = await fetchResort(id);
            return mapResortFromApi(row);
          })
        ),
        Promise.allSettled(
          roomIds.map(async (id) => {
            const row = await fetchRoom(id);
            return mapRoomFromApi(row);
          })
        ),
      ]);

      if (cancelled) return;

      setResorts(
        resortResults
          .filter((r) => r.status === 'fulfilled' && r.value)
          .map((r) => r.value)
      );
      setRooms(
        roomResults
          .filter((r) => r.status === 'fulfilled' && r.value)
          .map((r) => r.value)
      );
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [resortKey, roomKey]);

  return { resorts, rooms, loading };
}
