import React, { useRef, useState } from 'react';
import { Button } from '../components/ui/Button.jsx';
import { Modal } from '../components/ui/Modal.jsx';
import { MARKETING_IMAGES } from '../constants/marketingImages.js';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

const GULF_KITCHEN = {
  id: 'gulf-kitchen',
  name: 'Gulf Kitchen',
  cuisine: 'Khmer',
  hours: '06:30–22:00',
};

const MEAL_PERIODS = [
  { id: 'breakfast', en: 'Breakfast', km: 'អាហារពេលព្រឹក', hours: '06:30–10:30', icon: Sun },
  { id: 'lunch', en: 'Lunch', km: 'អាហារថ្ងៃត្រង់', hours: '12:00–15:00', icon: Sun },
  { id: 'dinner', en: 'Dinner', km: 'អាហារពេលល្ងាច', hours: '18:00–22:00', icon: Moon },
];

const GULF_MENU = [
  { id: 'nom-banh-chok', meal: 'breakfast', popular: true, name: 'Nom Banh Chok', price: 6, description: 'Kampot pepper, steamed fish.', image: MARKETING_IMAGES.dining },
  { id: 'bai-sach-chrouk', meal: 'breakfast', popular: false, name: 'Bai Sach Chrouk', price: 7, description: 'Kampot pepper, steamed fish.', image: MARKETING_IMAGES.villa },
  { id: 'kuy-teav', meal: 'breakfast', popular: false, name: 'Kuy Teav', price: 8, description: 'Pork broth, rice noodles, herbs.', image: MARKETING_IMAGES.hero },
  { id: 'beef-lok-lak', meal: 'lunch', popular: true, name: 'Beef Lok Lak', price: 14, description: 'Wok-seared beef, lime and Kampot pepper dip.', image: MARKETING_IMAGES.dining },
  { id: 'samlor-machu', meal: 'lunch', popular: false, name: 'Samlor Machu Trey', price: 12, description: 'Sour fish soup, pineapple, lemongrass.', image: MARKETING_IMAGES.spa },
  { id: 'khmer-red-curry', meal: 'lunch', popular: false, name: 'Khmer Red Curry', price: 11, description: 'Coconut curry, lemongrass, local herbs.', image: MARKETING_IMAGES.villa },
  { id: 'pepper-crab', meal: 'dinner', popular: true, name: 'Pepper Crab', price: 28, description: 'Kampot pepper, steamed bun.', image: MARKETING_IMAGES.dining },
  { id: 'beef-steak', meal: 'dinner', popular: false, name: 'Beef Steak', price: 24, description: 'Kampot pepper, grilled local beef.', image: MARKETING_IMAGES.hero },
  { id: 'amok-fish', meal: 'dinner', popular: false, name: 'Amok Fish', price: 16, description: 'Coconut curry steamed in banana leaf.', image: MARKETING_IMAGES.spa },
];

export const DiningPage = () => {
  const { addToast, t, language } = useApp();
  const menuRef = useRef(null);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [menuFilter, setMenuFilter] = useState('all');
  const [date, setDate] = useState('2026-10-16');
  const [time, setTime] = useState('19:30');
  const [partySize, setPartySize] = useState(2);
  const [notes, setNotes] = useState('');

  const km = language === 'km';
  const visibleDishes = GULF_MENU.filter((dish) => {
    if (menuFilter === 'all') return true;
    if (menuFilter === 'popular') return dish.popular;
    return dish.meal === menuFilter;
  });
  const visiblePeriods = MEAL_PERIODS.filter(
    (period) => menuFilter === 'all' || menuFilter === 'popular' || menuFilter === period.id
  );

  const scrollToMenu = (filter) => {
    if (filter) setMenuFilter(filter);
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
      <section className="relative min-h-[520px] flex items-end overflow-hidden">
        <img
          src={MARKETING_IMAGES.dining}
          alt={km ? 'អាហារនៅសូឡារ៉ា' : 'Dining at Solara'}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/10" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-xl text-white">
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              <span className="h-0.5 w-8 bg-gold" />
              {km ? 'អាហារនៅសូឡារ៉ា' : 'Dining at Solara'}
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-[1.15] text-balance">
              {km
                ? 'អាហារសមុទ្រពីផ្សារ និងម្ហូបខ្មែរបុរាណ ចម្អិនតាមរបៀបកម្ពុជា។'
                : 'Market seafood and Khmer classics, cooked the way Cambodia cooks.'}
            </h1>
            <p className="mt-4 max-w-md text-sm sm:text-base text-white/85 leading-relaxed font-light">
              {km
                ? 'បីពេលក្នុងមួយថ្ងៃនៅ Gulf Kitchen ចម្អិនតែតាមរូបមន្តខ្មែរ និងគ្រឿងផ្សារព្រឹកថ្ងៃនោះ។'
                : 'Three meals a day at Gulf Kitchen, made only with Khmer recipes and whatever came in from the market that morning.'}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedVenue(GULF_KITCHEN)}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary-hover"
              >
                {km ? 'ស្នើសុំតុ' : 'Ask for a table'}
              </button>
              <button
                type="button"
                onClick={() => scrollToMenu()}
                className="rounded-full border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20"
              >
                {km ? 'មើលម៉ឺនុយ' : 'See the menu'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f7f6f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 -mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {MEAL_PERIODS.map((period) => {
            const Icon = period.icon;
            const active = menuFilter === period.id;
            return (
              <button
                key={period.id}
                type="button"
                onClick={() => scrollToMenu(period.id)}
                className={`flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 text-left shadow-md transition ${
                  active ? 'border-primary' : 'border-slate-200 hover:border-primary/40'
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">{km ? period.km : period.en}</span>
                  <span className="block text-xs text-slate-500">{period.hours}</span>
                </span>
              </button>
            );
          })}
        </div>

        <section ref={menuRef} className="scroll-mt-24 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-slate-900">Gulf Kitchen</h2>
            <p className="mt-2 text-sm text-slate-500">
              {km
                ? 'មានតែម្ហូបខ្មែរពិត។ ជ្រើសពេលអាហារ ដើម្បីមើលមុខម្ហូបថ្ងៃនេះ។'
                : "Authentic Khmer dishes only. Pick a meal to see what's on today."}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', en: 'All menu', km: 'ម៉ឺនុយទាំងអស់' },
              { id: 'popular', en: 'Popular', km: 'ពេញនិយម' },
              ...MEAL_PERIODS.map((period) => ({ id: period.id, en: period.en, km: period.km })),
            ].map((filter) => {
              const active = menuFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setMenuFilter(filter.id)}
                  className={`rounded-full px-4 py-1.5 text-sm transition ${
                    active
                      ? 'bg-primary text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-primary/40'
                  }`}
                >
                  {km ? filter.km : filter.en}
                </button>
              );
            })}
          </div>

          <div className={`mt-8 grid grid-cols-1 gap-5 ${visiblePeriods.length > 1 ? 'lg:grid-cols-3' : ''}`}>
            {visiblePeriods.map((period) => {
              const dishes = visibleDishes.filter((dish) => dish.meal === period.id);
              if (dishes.length === 0) return null;
              return (
                <div key={period.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-900">{km ? period.km : period.en}</h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-500">{period.hours}</span>
                  </div>
                  <ul className="space-y-3">
                    {dishes.map((dish) => (
                      <li key={dish.id} className="flex gap-3">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="h-14 w-14 shrink-0 rounded-xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium text-slate-900">{dish.name}</p>
                            <p className="shrink-0 text-sm font-semibold text-slate-900">${dish.price.toFixed(2)}</p>
                          </div>
                          <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{dish.description}</p>
                          <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-success">
                            <span className="h-1.5 w-1.5 rounded-full bg-success" />
                            {km ? 'មាន' : 'Available'}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => scrollToMenu('all')}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              {km ? 'មើលម៉ឺនុយទាំងអស់' : 'View all menu'}
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </section>
      </div>
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
