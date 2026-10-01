@extends('layouts.app')

@section('content')
    <div>
        <h2>{{ $product->name }}</h2>

        <img src="{{ asset($product->image) }}" alt="{{ $product->name }}">

        <p>{{ $product->description }}</p>

        <div>
            ${{ number_format($payment->amount, 2) }} {{ $payment->currency }}
        </div>

        <div>
            {!! QrCode::size(250)->margin(4)->generate($qr) !!}

            <p>Scan with the Bakong app to pay.</p>
            <p>Expires in <span id="seconds">{{ $payment->secondsRemaining() }}</span> seconds.</p>
            <p id="payment-status">Waiting for payment…</p>
            <div id="payment-success-message" class="payment-inline-success" hidden>
                <div class="payment-success-icon payment-success-icon--sm" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                </div>
                <p class="payment-inline-success__title">Payment Successful</p>
                <p class="payment-inline-success__text">Thank you for your payment. Redirecting to your confirmation…</p>
            </div>
        </div>

        <a href="{{ route('home') }}" class="btn btn-primary" style="margin-top: 16px;">Back</a>
    </div>

    <script>
        (function () {
            const endpoint = @json(route('verify.transaction'));
            const token = document.querySelector('meta[name="csrf-token"]').content;
            const md5 = @json($payment->md5);

            const secondsEl = document.getElementById('seconds');
            const statusEl = document.getElementById('payment-status');
            const successEl = document.getElementById('payment-success-message');

            let timeLeft = {{ $payment->secondsRemaining() }};
            let stopped = false;

            function stop(message) {
                stopped = true;
                clearInterval(ticker);
                clearInterval(poller);
                statusEl.textContent = message;
            }

            // The backend is the only thing that decides whether a payment succeeded.
            async function check() {
                if (stopped) return;

                try {
                    const res = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': token,
                        },
                        body: JSON.stringify({ md5: md5 }),
                    });

                    const data = await res.json();

                    if (data.paid && data.redirect) {
                        stopped = true;
                        clearInterval(ticker);
                        clearInterval(poller);
                        statusEl.hidden = true;
                        if (successEl) {
                            successEl.hidden = false;
                        }
                        window.setTimeout(function () {
                            window.location.href = data.redirect;
                        }, 1200);
                        return;
                    }

                    if (data.status === 'expired' || data.status === 'failed' || data.status === 'invalid') {
                        stop(data.message);
                        return;
                    }

                    statusEl.textContent = data.status === 'api_error'
                        ? data.message
                        : 'Waiting for payment…';
                } catch (error) {
                    statusEl.textContent = 'Network problem while checking payment.';
                }
            }

            const ticker = setInterval(function () {
                timeLeft -= 1;
                secondsEl.textContent = Math.max(0, timeLeft);

                if (timeLeft <= 0) {
                    check().then(function () {
                        if (!stopped) stop('This QR has expired. Please start again.');
                    });
                }
            }, 1000);

            const poller = setInterval(check, 3000);

            check();
        })();
    </script>
@endsection
