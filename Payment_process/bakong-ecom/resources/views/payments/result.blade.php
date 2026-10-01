@extends('layouts.app')

@section('content')
    <div class="payment-page">
        @if($payment && $payment->isPaid())
            <div class="payment-card payment-card--success" role="status" aria-live="polite">
                <div class="payment-success-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                </div>

                <h2 class="payment-card__title">Payment Successful</h2>
                <p class="payment-card__subtitle">
                    Thank you for your payment. Your order is being processed.
                </p>

                <hr class="payment-card__divider" />

                <dl class="payment-details">
                    <div class="payment-details__row">
                        <dt>Amount Paid</dt>
                        <dd>${{ number_format($payment->amount, 2) }} {{ $payment->currency }}</dd>
                    </div>
                    <div class="payment-details__row">
                        <dt>Payment Method</dt>
                        <dd>KHQR (Bakong)</dd>
                    </div>
                    <div class="payment-details__row">
                        <dt>Date &amp; Time</dt>
                        <dd>
                            @if($payment->paid_at)
                                {{ $payment->paid_at->format('F j, Y') }} at {{ $payment->paid_at->format('g:i A') }}
                            @else
                                —
                            @endif
                        </dd>
                    </div>
                    @if($payment->product)
                        <div class="payment-details__row">
                            <dt>Product</dt>
                            <dd>{{ $payment->product->name }}</dd>
                        </div>
                    @endif
                </dl>

                <a href="{{ route('home') }}" class="btn btn-primary">Continue Shopping</a>
            </div>
        @elseif($payment)
            <div class="payment-card payment-card--muted">
                <h2 class="payment-card__title">Payment Not Confirmed</h2>
                <p class="payment-card__subtitle">
                    This order is currently <strong>{{ $payment->status }}</strong>.
                    Please try again or contact support if you were charged.
                </p>
                <a href="{{ route('home') }}" class="btn btn-primary">Back to Home</a>
            </div>
        @else
            <div class="payment-card payment-card--muted">
                <h2 class="payment-card__title">Unknown Payment</h2>
                <p class="payment-card__subtitle">We could not find that payment reference.</p>
                <a href="{{ route('home') }}" class="btn btn-primary">Back to Home</a>
            </div>
        @endif
    </div>
@endsection
