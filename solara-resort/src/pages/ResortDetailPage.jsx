import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  MapPin,
  Star,
  Phone,
  Mail,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { RoomCard } from '../components/room/RoomCard.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Modal } from '../components/ui/Modal.jsx';
import { ErrorState } from '../components/ui/ErrorState.jsx';
import { PageSkeleton } from '../components/ui/Skeleton.jsx';
import { CatalogNightlyPrice } from '../components/catalog/CatalogNightlyPrice.jsx';
import { useApp } from '../context/AppContext.jsx';
import { useResortDetail } from '../hooks/useCatalog.js';
import { FavoriteButton } from '../components/catalog/FavoriteButton.jsx';

export const ResortDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currency, addToast, t, language } = useApp();

  const { resort, rooms: resortRooms, loading, error, reload } = useResortDetail(id);

  const [activePhoto, setActivePhoto] = useState('');
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  useEffect(() => {
    if (resort?.gallery?.[0]) {
      setActivePhoto(resort.gallery[0]);
    }
  }, [resort?.id, resort?.gallery]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast(t('toast.linkCopied', 'Resort link copied to clipboard'), 'success');
    }
  };

  if (loading) {
    return (
      <div className="w-full pb-24 pt-24">
        <PageSkeleton />
      </div>
    );
  }

  if (error || !resort) {
    return (
      <div className="w-full pb-24 pt-28 max-w-3xl mx-auto px-4">
        <ErrorState
          title={t('resorts.detailErrorTitle', 'Resort unavailable')}
          message={error || t('resorts.detailNotFound', 'This sanctuary could not be found.')}
          onRetry={reload}
        />
        <div className="text-center mt-6">
          <Button variant="outline" size="sm" onClick={() => navigate('/resorts')}>
            {t('resorts.backToList', 'Back to all resorts')}
          </Button>
        </div>
      </div>
    );
  }

  const gallery = (resort.gallery?.length ? resort.gallery : [resort.featuredImage]).filter(
    Boolean
  );

  return (
    <div className="w-full pb-24">
      <section className="pt-24 pb-8 bg-bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-muted mb-2">
                <Link to="/resorts" className="hover:text-gold transition-colors">
                  {t('nav.resorts', 'Resorts')}
                </Link>
                <span>/</span>
                <span className="text-text-secondary">{resort.destination}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text tracking-tight">
                {resort.name}
              </h1>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted flex-wrap">
                {(resort.reviewsCount ?? 0) > 0 && (
                  <>
                    <div className="flex items-center gap-1 text-gold font-semibold">
                      <Star className="w-3.5 h-3.5 fill-gold" />
                      <span>{Number(resort.rating || 0).toFixed(2)}</span>
                      <span className="text-muted font-normal">
                        ({resort.reviewsCount} {language === 'km' ? 'ការពិនិត្យ' : 'reviews'})
                      </span>
                    </div>
                    <span>·</span>
                  </>
                )}
                {resort.location && (
                  <div className="flex items-center gap-1 text-text-secondary">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{resort.location}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FavoriteButton kind="resort" id={resort.id} size="lg" />
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                leftIcon={<Share2 className="w-4 h-4" />}
              >
                {t('resorts.share', 'Share')}
              </Button>
              <Button
                variant="gold"
                size="md"
                onClick={() => {
                  const targetElement = document.getElementById('available-rooms');
                  targetElement?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('resorts.selectRoom', 'Select Room')}
              </Button>
            </div>
          </div>

          {gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-[var(--radius-card)] overflow-hidden shadow-lg border border-border">
            <div
              className="md:col-span-2 md:row-span-2 aspect-[16/10] md:aspect-auto h-full min-h-[360px] relative overflow-hidden bg-slate-900 cursor-pointer group"
              onClick={() => {
                setActivePhoto(gallery[0]);
                setPhotoModalOpen(true);
              }}
            >
              <img
                src={gallery[0]}
                alt={resort.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {gallery.slice(1, 4).map((img, i) => (
              <div
                key={i}
                className="hidden md:block aspect-[4/3] relative overflow-hidden bg-slate-900 cursor-pointer group"
                onClick={() => {
                  setActivePhoto(img);
                  setPhotoModalOpen(true);
                }}
              >
                <img
                  src={img}
                  alt={`${resort.name} gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium block">
                {t('resorts.overview', 'Sanctuary Overview')}
              </span>
              <h2 className="text-2xl font-serif font-bold text-text">
                {resort.tagline}
              </h2>
              <p className="text-sm text-muted leading-relaxed font-light">
                {resort.description}
              </p>
            </div>

            {(resort.amenities || []).length > 0 && (
            <div className="space-y-4 pt-8 border-t border-border">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium block">
                {t('resorts.inclusions', 'Sanctuary Inclusions')}
              </span>
              <h3 className="text-xl font-serif font-semibold text-text">
                {t('resorts.featuresPrivileges', 'Resort Features & Privileges')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {(resort.amenities || []).map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 p-3 rounded-[var(--radius-button)] bg-surface border border-border/60 text-xs text-text"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            )}

            <div id="available-rooms" className="space-y-6 pt-8 border-t border-border">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium block mb-1">
                  {t('rooms.allQuarters', 'Private Accommodations')}
                </span>
                <h3 className="text-2xl font-serif font-bold text-text">
                  {t('resorts.availableRooms', 'Available Accommodations')} - {resort.name}
                </h3>
              </div>

              {resortRooms.length === 0 ? (
                <p className="text-xs text-muted">
                  {language === 'km'
                    ? 'មិនមានបន្ទប់សម្រាប់បង្ហាញនៅពេលនេះ។'
                    : 'No rooms are listed for this sanctuary yet.'}
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {resortRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-28 bg-surface border border-border p-6 rounded-[var(--radius-card)] shadow-xl space-y-6">
              {resort.startingPrice > 0 && (
                <div>
                  <span className="text-xs text-muted block mb-1">
                    {t('resorts.directRatesFrom', 'Direct Sanctuary Rates From')}
                  </span>
                  <CatalogNightlyPrice
                    salePrice={resort.startingPrice}
                    listPrice={resort.startingPriceOriginal}
                    discountPercent={resort.startingPriceDiscountPercent}
                    currency={currency}
                    size="lg"
                  />
                </div>
              )}

              <div className="space-y-3 pt-4 border-t border-border text-xs text-muted">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{resort.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>{resort.contactPhone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span className="truncate">{resort.contactEmail}</span>
                </div>
              </div>

              <div className="p-4 rounded-[var(--radius-button)] bg-bg/60 border border-border/80 text-xs space-y-2">
                <div className="flex items-center gap-2 text-text font-medium">
                  <Star className="w-4 h-4 text-gold shrink-0" />
                  <span>{t('resorts.directBookingPerks', 'Solara Direct Booking Privileges:')}</span>
                </div>
                <ul className="text-muted space-y-1 text-[11px] list-disc list-inside">
                  <li>{t('resorts.perk1', 'Best rate guarantee always')}</li>
                  <li>{t('resorts.perk2', 'Daily organic Champagne breakfast')}</li>
                  <li>{t('resorts.perk3', 'Speedboat or VIP luxury transfer')}</li>
                  <li>{t('resorts.perk4', 'Early check-in & late departure priority')}</li>
                </ul>
              </div>

              <Button
                variant="gold"
                size="lg"
                className="w-full shadow-md"
                onClick={() => {
                  const targetElement = document.getElementById('available-rooms');
                  targetElement?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('resorts.chooseAccommodation', 'Choose Accommodation')}
              </Button>
            </div>
          </aside>
        </div>
      </div>

      <Modal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        maxWidth="4xl"
      >
        <div className="w-full aspect-[16/10] overflow-hidden rounded-[var(--radius-button)] bg-slate-950">
          <img
            src={activePhoto}
            alt="Solara full view"
            className="w-full h-full object-cover"
          />
        </div>
      </Modal>
    </div>
  );
};
