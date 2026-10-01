import React, { useState } from 'react';
import { HeroSection } from '../components/ui/HeroSection.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Modal } from '../components/ui/Modal.jsx';
import { MARKETING_IMAGES } from '../constants/marketingImages.js';
import { useWebsiteContent } from '../hooks/useWebsiteContent.js';
import { EmptyState } from '../components/ui/EmptyState.jsx';
import { Spinner } from '../components/common/Spinner.jsx';
import { Clock } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export const DiningPage = () => {
  const { addToast, t, localize, language } = useApp();
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [date, setDate] = useState('2026-10-16');
  const [time, setTime] = useState('19:30');
  const [partySize, setPartySize] = useState(2);
  const [notes, setNotes] = useState('');

  const { diningVenues: cmsDining, loading: contentLoading } = useWebsiteContent();
  const localizedVenues = cmsDining.map((v) => (localize ? localize(v) : v));

  const handleTableReservation = (e) => {
    e.preventDefault();
    if (!selectedVenue) return;
    addToast(
      language === 'km'
        ? `សំណើកក់តុអាហារនៅ ${selectedVenue.name} សម្រាប់ភ្ញៀវ ${partySize} នាក់ ត្រូវបានបញ្ជូនដោយជោគជ័យ។`
        : `Table reservation requested at "${selectedVenue.name}" for ${partySize} guests on ${date} at ${time}. Confirmation email sent.`,
      'success'
    );
    setSelectedVenue(null);
  };

  return (
    <div className="w-full pb-24">
      <HeroSection
        image={MARKETING_IMAGES.dining}
        badge={t('home.diningTag', 'Epicurean Artistry')}
        title={t('dining.pageTitle', 'Gastronomy by the Sea & Forest')}
        subtitle={t('dining.pageSubtitle', 'Savor fresh line-caught seafood, heirloom Royal Khmer recipes, and sunset mixology crafted from indigenous botanicals.')}
        heightClass="min-h-[440px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium block">
            {language === 'km' ? 'ភោជនីយដ្ឋាន & បារ' : 'Our Culinary Venues'}
          </span>
          <h2 className="text-3xl font-serif font-bold text-text">
            {language === 'km' ? 'រសជាតិអាហារ ៤ ទម្រង់បែបប្រណីត' : 'Four Unique Dining Expressions'}
          </h2>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
            {language === 'km'
              ? 'ចាប់ពីអាហារសម្រន់ស្រាលៗមាត់អាងហែលទឹក រហូតដល់អាហារពេលល្ងាចអុជទៀនមាត់ឆ្នេរ មេចុងភៅរបស់យើងផ្តល់នូវរសជាតិខ្មែរពិតៗជាមួយបច្ចេកទេសទំនើប។'
              : 'From relaxed poolside bites to multi-course candlelit beachfront tasting menus, our kitchens honor native Cambodian ingredients with modern technique.'}
          </p>
        </div>

        {contentLoading ? (
          <div className="flex justify-center py-16">
            <Spinner label={t('common.loading', 'Loading')} />
          </div>
        ) : localizedVenues.length === 0 ? (
          <EmptyState
            title={t('dining.emptyTitle', 'Dining venues coming soon')}
            description={t(
              'dining.emptyDesc',
              'Restaurant and bar listings will appear here once published.'
            )}
          />
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {localizedVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-surface border border-border hover:border-gold/40 rounded-[var(--radius-card)] overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-gold-light px-2.5 py-1 rounded border border-gold/30">
                    {venue.cuisine}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-xs font-serif font-bold text-gold px-2.5 py-0.5 rounded">
                    {venue.priceLevel}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{venue.hours}</span>
                    </span>
                    <span>{t('dining.dressCode', 'Dress Code')}: {venue.dressCode}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-text">
                    {venue.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    {venue.description}
                  </p>

                  <div className="p-3.5 rounded-[var(--radius-button)] bg-bg/70 border border-border text-xs space-y-1">
                    <span className="text-[10px] font-semibold text-gold uppercase tracking-wider block">
                      {t('dining.signatureDish', 'Signature Creation')}:
                    </span>
                    <p className="text-text font-serif italic text-xs">
                      {venue.signatureDish}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Button
                  variant="gold"
                  size="sm"
                  className="w-full shadow-sm"
                  onClick={() => setSelectedVenue(venue)}
                >
                  {t('dining.reserveTable', 'Reserve Table')}
                </Button>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {selectedVenue && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedVenue(null)}
          title={`${t('dining.reserveTable', 'Reserve a Table')}: ${selectedVenue.name}`}
          subtitle={`${t('dining.cuisine', 'Cuisine')}: ${selectedVenue.cuisine} · ${t('common.hours', 'Hours')}: ${selectedVenue.hours}`}
        >
          <form onSubmit={handleTableReservation} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-muted font-medium block">{t('common.date', 'Reservation Date')}</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-surface border border-border text-text rounded-[var(--radius-input)] p-2 text-xs focus:outline-none focus:border-gold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-muted font-medium block">{t('common.time', 'Seating Time')}</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full bg-surface border border-border text-text rounded-[var(--radius-input)] p-2 text-xs focus:outline-none focus:border-gold"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-muted font-medium block">{t('dining.partySize', 'Party Size')}</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full bg-surface border border-border text-text rounded-[var(--radius-input)] p-2 text-xs focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value={1}>1 {t('search.guest', 'Guest')}</option>
                <option value={2}>2 {t('search.guests', 'Guests (Intimate Table)')}</option>
                <option value={3}>3 {t('search.guests', 'Guests')}</option>
                <option value={4}>4 {t('search.guests', 'Guests (Family Table)')}</option>
                <option value={6}>6 {t('search.guests', 'Guests (Group Dining)')}</option>
                <option value={8}>8+ {t('search.guests', 'Guests (Private Salon Request)')}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-muted font-medium block">
                {t('dining.dietaryNotes', 'Dietary Notes & Occasions')}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder={language === 'km' ? 'ឧ. ខួបអាពាហ៍ពិពាហ៍, មិនញ៉ាំសាច់គោ, អាឡែកស៊ី...' : 'e.g., Anniversary celebration, pescatarian, shellfish allergy...'}
                className="w-full bg-surface border border-border text-text rounded-[var(--radius-input)] p-2.5 text-xs focus:outline-none focus:border-gold"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedVenue(null)}
              >
                {t('common.cancel', 'Cancel')}
              </Button>
              <Button
                type="submit"
                variant="gold"
                size="sm"
              >
                {t('dining.confirmTable', 'Confirm Reservation Request')}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
