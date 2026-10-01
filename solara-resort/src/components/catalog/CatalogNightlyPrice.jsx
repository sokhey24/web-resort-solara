import React from 'react';
import { useApp } from '../../context/AppContext.jsx';
import { formatCurrency } from '../../util/currency.js';

const sizeClasses = {
  sm: { sale: 'text-xl', strike: 'text-sm', badge: 'text-[10px] px-1.5 py-0.5' },
  md: { sale: 'text-2xl', strike: 'text-sm', badge: 'text-[10px] px-2 py-0.5' },
  lg: { sale: 'text-3xl', strike: 'text-base', badge: 'text-[11px] px-2 py-0.5' },
};

/**
 * Informational catalogue pricing (authoritative totals come from booking quote API).
 */
export function CatalogNightlyPrice({
  salePrice = 0,
  listPrice,
  discountPercent = 0,
  currency,
  size = 'sm',
  align = 'start',
  showPerNight = true,
  className = '',
}) {
  const { currency: appCurrency, t } = useApp();
  const resolvedCurrency = currency ?? appCurrency;
  const list = listPrice ?? salePrice;
  // Same rule as dashboard PriceWithDiscount: strikethrough whenever a discount applies.
  const showStrike = discountPercent > 0;
  const showBadge = discountPercent > 0;
  const sizes = sizeClasses[size] || sizeClasses.sm;
  const alignClass = align === 'end' ? 'items-end text-right' : 'items-start text-left';

  if (!salePrice && !list) {
    return (
      <span className={`text-xs text-muted ${className}`}>
        {t('catalog.ratesOnRequest', 'Rates on request')}
      </span>
    );
  }

  return (
    <div className={`flex flex-col gap-1 ${alignClass} ${className}`}>
      {showBadge && (
        <span
          className={`inline-flex ${align === 'end' ? 'self-end' : 'self-start'} font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 rounded ${sizes.badge}`}
        >
          {t('catalog.savePercent', 'Save {percent}%')
            .replace('{percent}', String(Math.round(discountPercent)))}
        </span>
      )}
      <div
        className={`flex flex-wrap items-baseline gap-x-2 gap-y-0.5 ${
          align === 'end' ? 'justify-end' : 'justify-start'
        }`}
      >
        {showStrike && (
          <span className={`${sizes.strike} text-muted line-through font-medium`}>
            {formatCurrency(list, resolvedCurrency)}
          </span>
        )}
        <span className={`${sizes.sale} font-bold font-serif text-gold`}>
          {formatCurrency(salePrice, resolvedCurrency)}
        </span>
        {showPerNight && (
          <span className="text-xs text-muted">{t('common.perNight', '/ night')}</span>
        )}
      </div>
    </div>
  );
}
