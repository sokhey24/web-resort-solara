import { useCallback, useEffect, useRef, useState } from 'react';
import { getApiErrorMessage } from '../services/api/errors.js';
import { createBookingKhqr, verifyKhqrByMd5, verifyKhqrPayment } from '../services/api/paymentApi.js';
import { formatCountdown, mountKhqrQr, normalizeKhqrPayment } from '../util/khqr.js';

const POLL_MS = 3000;

export function useKhqrSession(bookingId, { enabled = true, gateway = 'aba-khqr', onPaid } = {}) {
  const [phase, setPhase] = useState('idle');
  const [payment, setPayment] = useState(null);
  const [countdown, setCountdown] = useState('05:00');
  const [error, setError] = useState(null);

  const qrHostRef = useRef(null);
  const pollRef = useRef(null);
  const timerRef = useRef(null);
  const verifyBusy = useRef(false);
  const stopped = useRef(false);
  const onPaidRef = useRef(onPaid);
  onPaidRef.current = onPaid;

  const cleanup = useCallback(() => {
    stopped.current = true;
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    verifyBusy.current = false;
  }, []);

  const startTimer = useCallback(
    (seconds) => {
      if (timerRef.current) clearInterval(timerRef.current);
      let remaining = Math.max(0, Number(seconds) || 300);
      const tick = () => {
        setCountdown(formatCountdown(remaining));
        if (remaining <= 0) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          cleanup();
          setPhase('expired');
          return;
        }
        remaining -= 1;
      };
      tick();
      timerRef.current = setInterval(tick, 1000);
    },
    [cleanup]
  );

  const verifyOnce = useCallback(
    async (pay) => {
      if (stopped.current || verifyBusy.current || !pay) return;
      verifyBusy.current = true;
      try {
        const res = pay.khqrMd5
          ? await verifyKhqrByMd5(pay.khqrMd5)
          : await verifyKhqrPayment(pay.id);

        if (stopped.current) return;

        if (res?.paid) {
          cleanup();
          setPhase('paid');
          onPaidRef.current?.(res);
          return;
        }

        if (res?.status === 'api_error') {
          setError(res?.message || 'Could not reach Bakong. Retrying…');
          return;
        }

        if (['expired', 'failed', 'invalid'].includes(res?.status)) {
          cleanup();
          setPhase('expired');
          setError(res?.message || 'This payment session has ended.');
        }
      } catch (err) {
        if (!stopped.current) {
          const body = err?.response?.data;
          if (body?.status === 'invalid') {
            cleanup();
            setPhase('expired');
            setError(body.message || 'This payment reference is not recognised.');
            return;
          }
          if (body?.status === 'api_error') {
            setError(body.message || 'Could not reach Bakong. Retrying…');
            return;
          }
          setError(getApiErrorMessage(err));
        }
      } finally {
        verifyBusy.current = false;
      }
    },
    [cleanup]
  );

  const startPoll = useCallback(
    (pay) => {
      if (pollRef.current) clearInterval(pollRef.current);
      stopped.current = false;
      pollRef.current = setInterval(() => verifyOnce(pay), POLL_MS);
      verifyOnce(pay);
    },
    [verifyOnce]
  );

  const beginSession = useCallback(
    (raw) => {
      const normalized = normalizeKhqrPayment(raw);
      const hasQr =
        normalized?.qrPayload ||
        (normalized?.qrSvg && String(normalized.qrSvg).includes('<svg'));

      if (!normalized || !hasQr) {
        setError('Unable to generate payment QR code. Please try again.');
        setPhase('error');
        return null;
      }

      setPayment(normalized);
      setError(null);
      setPhase('waiting');
      requestAnimationFrame(() => mountKhqrQr(qrHostRef.current, normalized));
      startTimer(normalized.secondsRemaining || 300);
      startPoll(normalized);
      return normalized;
    },
    [startPoll, startTimer]
  );

  const generateQr = useCallback(async () => {
    if (!bookingId) return;
    cleanup();
    stopped.current = false;
    setPhase('loading');
    setError(null);
    setPayment(null);

    try {
      const raw = await createBookingKhqr(bookingId, gateway);
      beginSession(raw);
    } catch (err) {
      setPhase('error');
      setError(getApiErrorMessage(err, 'Unable to generate payment QR code.'));
    }
  }, [beginSession, bookingId, cleanup, gateway]);

  useEffect(() => {
    if (!enabled || !bookingId) {
      cleanup();
      setPhase('idle');
      return undefined;
    }

    let cancelled = false;
    (async () => {
      cleanup();
      stopped.current = false;
      setPhase('loading');
      setError(null);
      setPayment(null);
      try {
        const raw = await createBookingKhqr(bookingId, gateway);
        if (!cancelled) beginSession(raw);
      } catch (err) {
        if (!cancelled) {
          setPhase('error');
          setError(getApiErrorMessage(err, 'Unable to generate payment QR code.'));
        }
      }
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [bookingId, enabled, gateway, beginSession, cleanup]);

  useEffect(() => {
    if (payment && qrHostRef.current && phase === 'waiting') {
      mountKhqrQr(qrHostRef.current, payment);
    }
  }, [payment, phase]);

  return {
    phase,
    payment,
    countdown,
    error,
    qrHostRef,
    generateQr,
    cleanup,
  };
}
