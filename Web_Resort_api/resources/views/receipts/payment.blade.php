<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Invoice — {{ $doc['invoice']['invoice_number'] ?? $data['payment_id'] ?? '' }}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: DejaVu Sans, Helvetica, Arial, sans-serif; font-size: 11px; color: #0f172a; background: #fff; }
  .wrap { max-width: 400px; margin: 0 auto; border-radius: 8px; overflow: hidden; page-break-inside: avoid; }
  .header { background: #0b1a2e; color: #fff; padding: 12px 14px; }
  .header-table { width: 100%; border-collapse: collapse; }
  .brand-cell { vertical-align: middle; }
  .logo { width: 40px; height: 40px; border-radius: 6px; object-fit: cover; border: 2px solid #c9a22788; }
  .brand { font-size: 14px; font-weight: bold; color: #c9a227; text-transform: uppercase; }
  .sub { font-size: 8px; color: #cbd5e1; letter-spacing: 0.12em; margin-top: 3px; }
  .amount-label { font-size: 9px; color: #94a3b8; text-align: right; }
  .amount { font-size: 18px; font-weight: bold; color: #c9a227; text-align: right; }
  .status-bar { padding: 7px 14px; border-bottom: 1px solid #e2c96b88; }
  .status-bar-table { width: 100%; }
  .status { font-size: 10px; font-weight: bold; text-align: right; text-transform: uppercase; }
  .status-paid { color: #15803d; }
  .status-pending { color: #a16207; }
  .body { padding: 2px 14px 14px; }
  .section { background: #f8fafc; margin: 10px -14px 4px; padding: 6px 14px; font-size: 9px; font-weight: bold; color: #64748b; text-transform: uppercase; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; }
  .row { width: 100%; padding: 6px 0; border-bottom: 1px solid #e2c96b55; }
  .row-table { width: 100%; border-collapse: collapse; }
  .label { color: #1e293b; font-size: 10px; }
  .value { text-align: right; font-size: 10px; font-weight: 500; }
  .value-bold { font-weight: bold; }
  .total-line { border-bottom: 2px solid #0f172a; margin: 6px 0 2px; height: 0; }
  .balance-box { background: #faf3d4; border: 1px solid #e2c96b99; border-radius: 6px; padding: 8px 10px; margin-top: 4px; }
  .balance-table { width: 100%; }
  .balance-label { font-weight: bold; color: #0b1a2e; font-size: 10px; }
  .balance-value { font-size: 14px; font-weight: bold; color: #c9a227; text-align: right; }
  .footer { margin-top: 12px; padding-top: 8px; border-top: 1px dashed #cbd5e1; text-align: center; font-size: 8px; color: #94a3b8; line-height: 1.55; }
</style>
</head>
<body>
@php
  $fmt = fn ($v) => '$' . number_format((float) ($v ?? 0), 2);
  $inv = $doc['invoice'] ?? [];
  $booking = $doc['booking'] ?? [];
  $guest = $doc['guest'] ?? [];
  $stay = $doc['stay'] ?? [];
  $bd = $doc['breakdown'] ?? [];
  $resort = $booking['resort'] ?? [];
  $brand = strtoupper($resort['name'] ?? 'Resort');
  $status = strtolower($inv['status'] ?? 'pending');
  $statusLabel = match ($status) {
    'paid' => 'PAID',
    'partial' => 'PARTIAL',
    'pending' => 'PENDING',
    default => strtoupper($status),
  };
  $statusClass = $status === 'paid' ? 'status-paid' : 'status-pending';
  $issued = !empty($inv['issued_at']) ? \Carbon\Carbon::parse($inv['issued_at']) : null;
  $issuedStr = $issued ? $issued->format('M j, Y') . ' • ' . $issued->format('H:i') : '—';
  $account = !empty($guest['name'])
    ? $guest['name'] . (!empty($guest['id']) ? ' - ID ' . $guest['id'] : '')
    : '—';
  $payMethod = $doc['payments'][0]['payment_method'] ?? ($data['payment_method'] ?? '—');
  $paidBefore = max(0, (float)($bd['paid'] ?? 0) - (float)($doc['payments'][0]['amount'] ?? $data['amount'] ?? 0));
  $supportEmail = $resort['email'] ?? 'info@resort.com';
  $fmtDate = fn ($v) => $v ? \Carbon\Carbon::parse($v)->format('M j, Y') : '—';
  $logoPath = $doc['logo_path'] ?? null;
@endphp
<div class="wrap">
  <div class="header">
    <table class="header-table">
      <tr>
        <td class="brand-cell">
          <table><tr>
            @if($logoPath && file_exists($logoPath))
            <td style="padding-right:8px;vertical-align:middle;"><img class="logo" src="{{ $logoPath }}" alt=""></td>
            @endif
            <td style="vertical-align:middle;">
              <div class="brand">{{ $brand }}</div>
              <div class="sub">INVOICE RECEIPT</div>
            </td>
          </tr></table>
        </td>
        <td style="vertical-align:top;">
          <div class="amount-label">Amount</div>
          <div class="amount">{{ $fmt($bd['total'] ?? 0) }}</div>
        </td>
      </tr>
    </table>
  </div>
  <div class="status-bar">
    <table class="status-bar-table">
      <tr>
        <td><strong>Invoice</strong></td>
        <td class="status {{ $statusClass }}">{{ $statusLabel }}</td>
      </tr>
    </table>
  </div>
  <div class="body">
    <div class="section">Transaction details</div>
    <div class="row"><table class="row-table"><tr><td class="label">Transaction no.</td><td class="value value-bold">{{ $inv['invoice_number'] ?? '—' }}</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Transaction type</td><td class="value">Stay / Accommodation</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Date &amp; time</td><td class="value">{{ $issuedStr }}</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Account</td><td class="value">{{ $account }}</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Booking code</td><td class="value">{{ $booking['booking_code'] ?? '—' }}</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Payment method</td><td class="value">{{ $payMethod }}</td></tr></table></div>

    @if(!empty($stay['check_in']) || !empty($stay['check_out']))
    <div class="section">Stay details</div>
    <div class="row"><table class="row-table"><tr><td class="label">Check-in</td><td class="value">{{ $fmtDate($stay['check_in'] ?? null) }}</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Check-out</td><td class="value">{{ $fmtDate($stay['check_out'] ?? null) }}</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Nights</td><td class="value">{{ $stay['nights'] ?? '—' }}</td></tr></table></div>
    @endif

    <div class="section">Payment summary</div>
    <div class="row"><table class="row-table"><tr><td class="label">Subtotal</td><td class="value">{{ $fmt($bd['subtotal'] ?? 0) }}</td></tr></table></div>
    @if(($bd['room_discount_total'] ?? 0) > 0)
    <div class="row"><table class="row-table"><tr><td class="label">Room discount</td><td class="value">- {{ $fmt($bd['room_discount_total']) }}</td></tr></table></div>
    @endif
    @if(($bd['coupon_discount'] ?? 0) > 0)
    <div class="row"><table class="row-table"><tr><td class="label">Coupon</td><td class="value">- {{ $fmt($bd['coupon_discount']) }}</td></tr></table></div>
    @endif
    <div class="row"><table class="row-table"><tr><td class="label">Tax</td><td class="value">{{ $fmt($bd['tax'] ?? 0) }}</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Service charge</td><td class="value">{{ $fmt($bd['service_charge'] ?? 0) }}</td></tr></table></div>
    <div class="row"><table class="row-table"><tr><td class="label">Service fee</td><td class="value">{{ $fmt(0) }}</td></tr></table></div>
    <div class="total-line"></div>
    <div class="row"><table class="row-table"><tr><td class="label"><strong>Total</strong></td><td class="value value-bold">{{ $fmt($bd['total'] ?? 0) }}</td></tr></table></div>

    <div class="section">Balance</div>
    <div class="row"><table class="row-table"><tr><td class="label">Previous balance</td><td class="value">{{ $fmt($paidBefore) }}</td></tr></table></div>
    <div class="balance-box">
      <table class="balance-table">
        <tr>
          <td class="balance-label">Current balance</td>
          <td class="balance-value">{{ $fmt($bd['balance'] ?? 0) }}</td>
        </tr>
      </table>
    </div>
    <div class="row"><table class="row-table"><tr><td class="label">Total paid</td><td class="value">{{ $fmt($bd['paid'] ?? 0) }}</td></tr></table></div>

    <div class="footer">
      <div>Questions? Contact support at {{ $supportEmail }}</div>
      <div style="margin-top:4px;font-style:italic;">Computer generated receipt — no signature required</div>
    </div>
  </div>
</div>
</body>
</html>
