import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Star, RotateCcw } from 'lucide-react';
import { HeroSection } from '../components/ui/HeroSection.jsx';
import { ResortCard } from '../components/resort/ResortCard.jsx';
import { EmptyState } from '../components/ui/EmptyState.jsx';
import { ErrorState } from '../components/ui/ErrorState.jsx';
import { ResortCardSkeleton } from '../components/ui/Skeleton.jsx';
import { formatCurrency } from '../util/currency.js';
import { useApp } from '../context/AppContext.jsx';
import { useSearchDestinationOptions, useResortSearchResults } from '../hooks/useSearch.js';
import { SearchWidget } from '../features/search/components/SearchWidget.jsx';
import { SearchStayNotice } from '../features/search/components/SearchStayNotice.jsx';
import { Pagination } from '../components/common/Pagination.jsx';
import { usePaginationMeta } from '../hooks/useCatalog.js';
import heroImage from '../assets/images/hero_solara_resort_1790692958491.jpg';

export const ResortsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currency, t, language } = useApp();

  const sortParam = searchParams.get('sort') || 'recommended';
  const maxPriceParam = Number(searchParams.get('maxPrice')) || 1000;
  const ratingParam = Number(searchParams.get('minRating')) || 0;

  const [sort, setSort] = useState(sortParam);
  const [maxPrice, setMaxPrice] = useState(maxPriceParam);
  const [minRating, setMinRating] = useState(ratingParam);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [page, setPage] = useState(1);

  const {
    criteria,
    resorts: filteredResorts,
    total,
    meta,
    status,
    error,
    reload,
  } = useResortSearchResults({ page, sort, maxPrice, minRating });

  const { page: currentPage, lastPage } = usePaginationMeta(meta);
  const { destinationOptions: filterDestinationOptions } = useSearchDestinationOptions();

  const destinationOptions = useMemo(
    () => [
      { value: '', label: t('search.allDestinations', 'All Destinations'), count: total || filteredResorts.length },
      ...filterDestinationOptions.map((opt) => ({
        ...opt,
        count: opt.count ?? 0,
      })),
    ],
    [filterDestinationOptions, filteredResorts.length, total, t]
  );

  const destination = criteria.destination;

  useEffect(() => {
    setSort(sortParam);
    setMaxPrice(maxPriceParam);
    setMinRating(ratingParam);
    setPage(1);
  }, [sortParam, maxPriceParam, ratingParam, criteria.destination, criteria.checkIn, criteria.checkOut]);

  const getDestinationDisplay = (destVal) => {
    const found = destinationOptions.find((opt) => opt.value === destVal);
    return found ? found.label : destVal;
  };

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const handleClearFilters = () => {
    setSort('recommended');
    setMaxPrice(1000);
    setMinRating(0);
    setPage(1);
    setSearchParams(new URLSearchParams());
  };

  const syncDestinationFilter = (value) => {
    setPage(1);
    updateParam('destination', value);
  };

  return (
    <div className="w-full pb-24">
      <HeroSection
        image={heroImage}
        badge={t('brand.sub', 'Bespoke Hospitality')}
        title={t('resorts.pageTitle', 'Luxury Sanctuaries & Retreats')}
        subtitle={t(
          'resorts.pageSubtitle',
          "Discover Solara's curated collection of five-star island sanctuaries, mountain hideaways, and heritage pavilions."
        )}
        heightClass="min-h-[420px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <SearchWidget />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <SearchStayNotice criteria={criteria} />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
          <div>
            <h2 className="text-xl font-serif font-bold text-text">
              {destination
                ? `${getDestinationDisplay(destination)}`
                : t('resorts.pageTitle', 'All Solara Sanctuaries')}
            </h2>
            <p className="text-xs text-muted mt-0.5">
              {status === 'loading'
                ? t('search.loadingResults', 'Searching sanctuaries…')
                : language === 'km'
                  ? `បង្ហាញ ${filteredResorts.length} នៃ ${total || filteredResorts.length} រមណីយដ្ឋាន`
                  : `Showing ${filteredResorts.length} on this page · ${total || filteredResorts.length} total`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-[var(--radius-button)] bg-surface border border-border text-xs text-text cursor-pointer"
            >
              <Filter className="w-4 h-4 text-gold" />
              <span>{t('resorts.filterTitle', 'Filters')}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted hidden sm:inline">{t('resorts.sort', 'Sort')}:</span>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  updateParam('sort', e.target.value);
                }}
                className="bg-surface border border-border text-text text-xs rounded-[var(--radius-button)] px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="recommended">{t('resorts.recommended', 'Recommended')}</option>
                <option value="price-asc">{t('resorts.priceAsc', 'Price: Low to High')}</option>
                <option value="price-desc">{t('resorts.priceDesc', 'Price: High to Low')}</option>
                <option value="rating">{t('resorts.ratingDesc', 'Highest Guest Rating')}</option>
              </select>
            </div>
          </div>
        </div>

        {status === 'error' && (
          <ErrorState
            title={t('resorts.loadErrorTitle', 'Unable to load resorts')}
            message={error}
            onRetry={reload}
          />
        )}

        {status === 'loading' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResortCardSkeleton />
            <ResortCardSkeleton />
            <ResortCardSkeleton />
            <ResortCardSkeleton />
          </div>
        )}

        {(status === 'results' || status === 'empty') && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className={`lg:block ${mobileFilterOpen ? 'block' : 'hidden'} space-y-6 lg:col-span-1`}>
              <div className="bg-surface border border-border p-6 rounded-[var(--radius-card)] space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text font-serif">
                    {t('resorts.filterTitle', 'Filter Sanctuaries')}
                  </span>
                  {(destination || minRating > 0 || maxPrice < 1000) && (
                    <button
                      onClick={handleClearFilters}
                      className="text-xs text-gold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{t('common.reset', 'Reset')}</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2.5">
                  <label className="text-xs font-medium text-text block">
                    {t('search.destination', 'Destination')}
                  </label>
                  <div className="space-y-1.5 text-xs text-text-secondary">
                    {destinationOptions.map((opt) => (
                      <button
                        key={opt.value || 'all'}
                        type="button"
                        onClick={() => syncDestinationFilter(opt.value)}
                        className={`w-full text-left px-2.5 py-1.5 rounded transition-colors flex items-center justify-between cursor-pointer ${
                          destination === opt.value
                            ? 'bg-gold/15 text-gold font-medium border border-gold/30'
                            : 'hover:bg-surface-hover text-muted hover:text-text'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {opt.count != null && (
                          <span className="text-[11px] opacity-70">{opt.count}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-text">{t('resorts.budget', 'Nightly Budget')}</span>
                    <span className="text-gold font-semibold font-serif">
                      {t('rooms.upTo', 'Up to')} {formatCurrency(maxPrice, currency)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="1000"
                    step="50"
                    value={maxPrice}
                    onChange={(e) => {
                      setMaxPrice(Number(e.target.value));
                      updateParam('maxPrice', e.target.value);
                    }}
                    className="w-full accent-gold cursor-pointer"
                  />
                  <p className="text-[10px] text-muted">
                    {t('search.clientFilterHint', 'Budget and rating filters apply to loaded results (informational).')}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-border">
                  <label className="text-xs font-medium text-text block">
                    {t('resorts.minRating', 'Minimum Rating')}
                  </label>
                  <div className="space-y-1.5">
                    {[0, 4.8, 4.9, 4.95].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => {
                          setMinRating(rate);
                          updateParam('minRating', rate > 0 ? String(rate) : '');
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center gap-2 cursor-pointer ${
                          minRating === rate
                            ? 'bg-gold/15 text-gold font-medium border border-gold/30'
                            : 'hover:bg-surface-hover text-muted hover:text-text'
                        }`}
                      >
                        <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                        <span>
                          {rate === 0
                            ? t('resorts.anyRating', 'Any Rating')
                            : `${rate}+ ${t('resorts.stars', 'Stars')}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-3 space-y-6">
              {status === 'empty' ? (
                <EmptyState
                  title={t('resorts.noFoundTitle', 'No Sanctuaries Match Your Criteria')}
                  description={t(
                    'resorts.noFoundDesc',
                    "We couldn't find any resorts matching your current filters. Try resetting the filters or widening your price parameters."
                  )}
                  actionText={t('resorts.resetAll', 'Reset All Filters')}
                  onAction={handleClearFilters}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResorts.map((resort) => (
                    <ResortCard key={resort.id} resort={resort} />
                  ))}
                </div>
              )}

              {status === 'results' && lastPage > 1 && (
                <Pagination
                  className="pt-8"
                  page={currentPage}
                  totalPages={lastPage}
                  onPageChange={setPage}
                />
              )}
            </main>
          </div>
        )}
      </div>
    </div>
  );
};
