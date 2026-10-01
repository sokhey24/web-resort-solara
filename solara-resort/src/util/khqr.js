export function secondsUntil(iso) {
  if (!iso) return 300;
  const end = new Date(iso).getTime();
  if (Number.isNaN(end)) return 300;
  return Math.max(0, Math.floor((end - Date.now()) / 1000));
}

export function formatCountdown(totalSeconds) {
  const remaining = Math.max(0, Number(totalSeconds) || 0);
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Normalise KHQR initiate / payment-show payloads (same fields as dashboard KhqrPaymentModal).
 * Supports nested `khqr` and Payment_process-style `md5` alias.
 */
export function normalizeKhqrPayment(raw) {
  if (!raw) return null;
  const nested = raw.khqr && typeof raw.khqr === 'object' ? raw.khqr : {};
  const khqrMd5 = raw.khqr_md5 ?? nested.md5 ?? raw.md5 ?? null;
  const qrPayload = raw.qr_payload ?? nested.qr_payload ?? nested.qr ?? null;
  const expiresAt = raw.expires_at ?? nested.expires_at ?? null;

  return {
    id: raw.id,
    paymentId: raw.payment_id,
    amount: Number(raw.amount ?? 0),
    currency: (raw.currency || nested.currency || 'USD').toUpperCase(),
    status: raw.status,
    khqrMd5: khqrMd5 ? String(khqrMd5).toLowerCase() : null,
    qrPayload,
    qrSvg: raw.qr_svg,
    expiresAt,
    secondsRemaining: raw.seconds_remaining ?? secondsUntil(expiresAt),
    bookingId: raw.booking_id,
  };
}

/** Settlement label aligned with dashboard `fmtAmt`. */
export function formatKhqrAmount(amount, currency = 'USD') {
  const n = Number(amount) || 0;
  if (String(currency).toUpperCase() === 'KHR') {
    return `៛${Math.round(n).toLocaleString()}`;
  }
  return `$${n.toFixed(2)}`;
}

export function mountKhqrQr(host, payment) {
  if (!host || !payment) return;
  const svg = payment.qrSvg;
  const payload = payment.qrPayload;
  if (svg && typeof svg === 'string' && svg.includes('<svg')) {
    host.innerHTML = `<div class="khqr-svg-wrap flex items-center justify-center">${svg}</div>`;
    const el = host.querySelector('svg');
    if (el) {
      el.setAttribute('width', '220');
      el.setAttribute('height', '220');
      el.style.maxWidth = '100%';
      el.style.height = 'auto';
    }
    return;
  }
  if (payload) {
    host.innerHTML = `<p class="text-[10px] font-mono break-all text-slate-800 p-2">${payload}</p>`;
    return;
  }
  host.innerHTML = '<p class="text-xs text-muted">QR unavailable</p>';
}
