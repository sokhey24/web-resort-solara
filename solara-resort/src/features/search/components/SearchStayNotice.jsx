import React from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { useApp } from '../../../context/AppContext.jsx';
import { buildRoomsSearchPath } from '../../../util/searchParams.js';

/**
 * Informational only — stay availability is confirmed via booking quote API.
 */
export function SearchStayNotice({ criteria }) {
  const { t, language } = useApp();

  if (!criteria?.checkIn || !criteria?.checkOut) {
    return null;
  }

  const roomsHref = buildRoomsSearchPath(criteria);

  return (
    <div
      className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-[var(--radius-card)] bg-gold/5 border border-gold/25 text-xs text-text-secondary"
      role="status"
    >
      <div className="flex items-start gap-2 flex-1">
        <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden />
        <p className="leading-relaxed">
          {language === 'km'
            ? `ការស្វែងរករបស់អ្នក៖ ${criteria.checkIn} → ${criteria.checkOut} · ${criteria.adults} ភ្ញៀវ${
                criteria.children > 0 ? `, ${criteria.children} កុមារ` : ''
              } · ${criteria.rooms} បន្ទប់។ លទ្ធភាពពិតប្រាកដត្រូវបានផ្ទៀងផ្ទាត់នៅពេលកក់ ។`
            : `Your search: ${criteria.checkIn} → ${criteria.checkOut} · ${criteria.adults} adult${
                criteria.adults === 1 ? '' : 's'
              }${criteria.children > 0 ? `, ${criteria.children} child${criteria.children === 1 ? '' : 'ren'}` : ''} · ${
                criteria.rooms
              } room${criteria.rooms === 1 ? '' : 's'}. Final availability and pricing are confirmed when you book .`}
        </p>
      </div>
      <Link
        to={roomsHref}
        className="text-gold font-medium hover:underline whitespace-nowrap shrink-0"
      >
        {t('search.browseRoomsForDates', 'Browse rooms for these dates')}
      </Link>
    </div>
  );
}
