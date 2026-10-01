import { useCallback, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useApp } from '../context/AppContext.jsx';
import { catalogKeys } from '../features/catalog/queryKeys.js';
import { queryResortsPage } from '../features/catalog/catalogQueries.js';
import { usePaginationMeta, useResorts } from './useCatalog.js';
import {
  applySearchCriteria,
  buildResortsSearchPath,
  parseSearchCriteria,
} from '../util/searchParams.js';
import { buildCityFilterOptions, mapSortToApi, sortResortsClient } from '../util/mapCatalog.js';

/**
 * Resolved criteria: URL wins; dates/guests fall back to booking draft on marketing pages.
 */
export function useSearchCriteria() {
  const [searchParams] = useSearchParams();
  const { bookingDraft } = useApp();

  return useMemo(() => {
    const fromUrl = parseSearchCriteria(searchParams);
    return {
      destination: fromUrl.destination,
      checkIn: fromUrl.checkIn || bookingDraft.checkIn || '',
      checkOut: fromUrl.checkOut || bookingDraft.checkOut || '',
      adults: fromUrl.adults || bookingDraft.adults || 2,
      children: fromUrl.children ?? bookingDraft.children ?? 0,
      rooms: fromUrl.rooms || bookingDraft.roomsCount || 1,
    };
  }, [searchParams, bookingDraft]);
}

export function useSearchDestinationOptions() {
  const { t } = useApp();
  const query = useQuery({
    queryKey: catalogKeys.resorts({ per_page: 50, facet: 'destinations' }),
    queryFn: () => queryResortsPage({ per_page: 50 }),
    staleTime: 5 * 60_000,
  });

  const options = useMemo(() => {
    const resorts = query.data?.rows ?? [];
    return buildCityFilterOptions(resorts, t('search.allDestinations', 'All Destinations')).filter(
      (opt) => opt.value
    );
  }, [query.data?.rows, t]);

  return {
    destinationOptions: options,
    loading: query.isLoading,
    error: query.isError,
  };
}

export function useSearch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const criteria = useSearchCriteria();
  const { updateBookingDraft } = useApp();
  const { destinationOptions, loading: destinationsLoading } = useSearchDestinationOptions();

  const persistDraft = useCallback(
    (next) => {
      updateBookingDraft({
        checkIn: next.checkIn,
        checkOut: next.checkOut,
        adults: next.adults,
        children: next.children,
        roomsCount: next.rooms,
      });
    },
    [updateBookingDraft]
  );

  const submitSearch = useCallback(
    (partial) => {
      const nextCriteria = {
        destination: partial.destination ?? criteria.destination,
        checkIn: partial.checkIn ?? criteria.checkIn,
        checkOut: partial.checkOut ?? criteria.checkOut,
        adults: partial.adults ?? partial.guests ?? criteria.adults,
        children: partial.children ?? criteria.children,
        rooms: partial.rooms ?? criteria.rooms,
      };

      persistDraft(nextCriteria);

      const mergedParams = applySearchCriteria(searchParams, nextCriteria);
      const path = buildResortsSearchPath(nextCriteria, mergedParams);

      if (window.location.pathname.startsWith('/resorts')) {
        setSearchParams(mergedParams);
      } else {
        navigate(path);
      }

      return nextCriteria;
    },
    [criteria, navigate, persistDraft, searchParams, setSearchParams]
  );

  return {
    criteria,
    destinationOptions,
    destinationsLoading,
    submitSearch,
    status: destinationsLoading ? 'loading' : 'idle',
  };
}

/**
 * Resort search results (server: destination/city only; dates/guests are draft + informational).
 */
export function useResortSearchResults({
  page,
  sort,
  maxPrice,
  minRating,
}) {
  const criteria = useSearchCriteria();

  const apiParams = useMemo(
    () => ({
      page,
      per_page: 12,
      ...(criteria.destination
        ? { city: criteria.destination, destination: criteria.destination }
        : {}),
      sort: mapSortToApi(sort),
    }),
    [page, criteria.destination, sort]
  );

  const { resorts, meta, loading, error, reload, isFetching } = useResorts(apiParams);
  const { total } = usePaginationMeta(meta);

  const filteredResorts = useMemo(() => {
    const list = resorts.filter((r) => {
      if (r.startingPrice > maxPrice) return false;
      if (minRating > 0 && (r.rating ?? 0) < minRating) return false;
      return true;
    });
    return sortResortsClient(list, sort);
  }, [resorts, maxPrice, minRating, sort]);

  const status = useMemo(() => {
    if (loading) return 'loading';
    if (error) return 'error';
    if (filteredResorts.length === 0) return 'empty';
    return 'results';
  }, [loading, error, filteredResorts.length]);

  return {
    criteria,
    resorts: filteredResorts,
    total,
    meta,
    status,
    loading,
    isFetching,
    error,
    reload,
  };
}
