import { create } from "zustand";
import { request } from "../util/request";
import { asList } from "../util/asList";

const CACHE_TTL_MS = 5 * 60 * 1000;
const ROOM_TYPES_QUERY = "admin/room-types?per_page=200";

const initialState = {
  resorts: [],
  branches: [],
  roomTypes: [],
  facilities: [],
  loading: false,
  loadedAt: null,
  error: null,
};

async function fetchList(url) {
  const res = await request(url, "get");
  if (res?.errors) {
    return { ok: false, message: res.errors.message ?? "Request failed.", rows: [] };
  }
  return { ok: true, rows: asList(res) };
}

export const useCatalogStore = create((set, get) => ({
  ...initialState,

  reset: () => set({ ...initialState }),

  fetchCatalog: async (force = false) => {
    const { loading, loadedAt } = get();
    if (loading) return;
    if (!force && loadedAt && Date.now() - loadedAt < CACHE_TTL_MS) return;

    set({ loading: true, error: null });

    const [resortsRes, branchesRes, typesRes, facilitiesRes] = await Promise.all([
      fetchList("admin/resorts"),
      fetchList("admin/branches"),
      fetchList(ROOM_TYPES_QUERY),
      fetchList("admin/facilities"),
    ]);

    const errors = [resortsRes, branchesRes, typesRes, facilitiesRes]
      .filter((r) => !r.ok)
      .map((r) => r.message);

    set({
      resorts: resortsRes.rows,
      branches: branchesRes.rows,
      roomTypes: typesRes.rows,
      facilities: facilitiesRes.rows,
      loading: false,
      loadedAt: Date.now(),
      error: errors.length ? errors.join(" ") : null,
    });
  },

  refreshResorts: async () => {
    const res = await fetchList("admin/resorts");
    if (res.ok) set({ resorts: res.rows, loadedAt: Date.now() });
  },

  refreshBranches: async () => {
    const res = await fetchList("admin/branches");
    if (res.ok) set({ branches: res.rows, loadedAt: Date.now() });
  },

  refreshRoomTypes: async () => {
    const res = await fetchList(ROOM_TYPES_QUERY);
    if (res.ok) set({ roomTypes: res.rows, loadedAt: Date.now() });
  },

  refreshFacilities: async () => {
    const res = await fetchList("admin/facilities");
    if (res.ok) set({ facilities: res.rows, loadedAt: Date.now() });
  },

  invalidate: () => set({ loadedAt: null }),
}));
