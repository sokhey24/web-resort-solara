import React, { useState } from 'react';
import { HeroSection } from '../components/ui/HeroSection.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Modal } from '../components/ui/Modal.jsx';
import { formatCurrency } from '../util/currency.js';
import { MARKETING_IMAGES } from '../constants/marketingImages.js';
import { useApp } from '../context/AppContext.jsx';
import { useWebsiteContent } from '../hooks/useWebsiteContent.js';
import { EmptyState } from '../components/ui/EmptyState.jsx';
import { Spinner } from '../components/common/Spinner.jsx';
import { Calendar, Clock } from 'lucide-react';

export const ActivitiesPage = () => {
  const { currency, addToast, t, localize, language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [bookingDate, setBookingDate] = useState('2026-10-16');
  const [guestCount, setGuestCount] = useState(2);

  const categories = [
    { value: 'All', label: t('activities.categoryAll', 'All') },
    { value: 'Ocean & Water', label: t('activities.categoryWater', 'Ocean & Water') },
    { value: 'Wellness & Spa', label: t('activities.categoryWellness', 'Wellness & Spa') },
    { value: 'Culture & Culinary', label: t('activities.categoryCulture', 'Culture & Culinary') },
    { value: 'Expedition', label: t('activities.categoryExpedition', 'Expedition') },
  ];

  const { activities: cmsActivities, loading: contentLoading } = useWebsiteContent();
  const localizedActivities = cmsActivities.map((a) => (localize ? localize(a) : a));

  const filtered = selectedCategory === 'All'
    ? localizedActivities
    : localizedActivities.filter((a) => a.category === selectedCategory || (selectedCategory === 'Ocean & Water' && a.category_km === 'សមុទ្រ & ទឹក'));

  const handleBookActivity = (e) => {
    e.preventDefault();
    if (!selectedActivity) return;
    addToast(
      t('activities.inquirySuccess', 'Activity inquiry submitted successfully. Our concierge will confirm within 2 hours.'),
      'success'
    );
    setSelectedActivity(null);
  };

  return (
    <div className="w-full pb-24">
      <HeroSection
        image={MARKETING_IMAGES.hero}
        badge={t('home.activitiesTag', 'Unforgettable Journeys')}
        title={t('activities.pageTitle', 'Curated Adventures & Cultural Encounters')}
        subtitle={t('activities.pageSubtitle', 'Sail private catamarans, meditate before ancient stone temples at dawn, or master the ancient art of royal Khmer gastronomy.')}
        heightClass="min-h-[440px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-[var(--radius-button)] text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-gold text-slate-950 font-semibold shadow-sm'
                  : 'bg-surface border border-border text-text-secondary hover:text-text hover:bg-surface-hover'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {contentLoading ? (
          <div className="flex justify-center py-16">
            <Spinner label={t('common.loading', 'Loading')} />
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            title={t('activities.emptyTitle', 'Experiences coming soon')}
            description={t(
              'activities.emptyDesc',
              'Our concierge team is preparing curated activities. Please check back shortly.'
            )}
          />
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((act) => (
            <div
              key={act.id}
              className="group bg-surface border border-border hover:border-gold/40 rounded-[var(--radius-card)] overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-gold-light px-2.5 py-1 rounded border border-gold/30">
                    {act.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{act.duration}</span>
                    </span>
                    <span className="font-bold font-serif text-gold text-sm">
                      {formatCurrency(act.pricePerPerson, currency)} {t('common.perPerson', '/ person')}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-semibold text-text group-hover:text-gold transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed font-light line-clamp-3">
                    {act.description}
                  </p>

                  <div className="pt-2 text-xs text-text-secondary flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{act.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  variant="gold"
                  size="sm"
                  className="w-full shadow-sm"
                  onClick={() => setSelectedActivity(act)}
                >
                  {t('activities.reserveExp', 'Reserve Experience')}
                </Button>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {selectedActivity && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedActivity(null)}
          title={`${t('activities.reserveExp', 'Reserve')}: ${selectedActivity.title}`}
          subtitle={`${t('activities.schedule', 'Schedule')}: ${selectedActivity.schedule} · ${t('activities.duration', 'Duration')}: ${selectedActivity.duration}`}
        >
          <form onSubmit={handleBookActivity} className="space-y-4">
            <div className="p-3 rounded-[var(--radius-button)] bg-bg border border-border text-xs flex justify-between items-center">
              <span>{language === 'km' ? 'តម្លៃក្នុងម្នាក់៖' : 'Price per guest:'}</span>
              <span className="font-serif font-bold text-gold text-sm">
                {formatCurrency(selectedActivity.pricePerPerson, currency)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-muted font-medium block">
                  {t('activities.preferredDate', 'Preferred Date')}
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                  className="w-full bg-surface border border-border text-text rounded-[var(--radius-input)] p-2 text-xs focus:outline-none focus:border-gold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-muted font-medium block">
                  {t('search.guestsRooms', 'Guests')}
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-surface border border-border text-text rounded-[var(--radius-input)] p-2 text-xs focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value={1}>1 {t('search.guest', 'Guest')}</option>
                  <option value={2}>2 {t('search.guests', 'Guests')}</option>
                  <option value={3}>3 {t('search.guests', 'Guests')}</option>
                  <option value={4}>4 {t('search.guests', 'Guests')}</option>
                  <option value={6}>6+ {t('search.guests', 'Guests')}</option>
                </select>
              </div>
            </div>

            <div className="p-3 rounded bg-surface/50 border border-border flex justify-between text-xs font-semibold">
              <span>{t('common.totalDue', 'Estimated Total')}:</span>
              <span className="text-gold font-serif text-sm">
                {formatCurrency(selectedActivity.pricePerPerson * guestCount, currency)}
              </span>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedActivity(null)}
              >
                {t('common.cancel', 'Cancel')}
              </Button>
              <Button
                type="submit"
                variant="gold"
                size="sm"
              >
                {t('activities.confirmExp', 'Confirm Experience')}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
