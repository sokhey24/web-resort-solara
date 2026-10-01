export const KHR_RATE = 4100;

/** Match dashboard `formatMoney` (roomHelpers.js): always two USD decimals. */
export function formatMoneyUsd(amount) {
  return `$${(Number(amount) || 0).toFixed(2)}`;
}

export function formatCurrency(amountUSD, currency = 'USD') {
  const amount = Number(amountUSD) || 0;
  if (currency === 'KHR') {
    const khr = Math.round(amount * KHR_RATE);
    return `៛${khr.toLocaleString()}`;
  }
  return formatMoneyUsd(amount);
}

export function calculateNights(checkIn, checkOut) {
  try {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return diff > 0 ? Math.round(diff) : 1;
  } catch {
    return 1;
  }
}
