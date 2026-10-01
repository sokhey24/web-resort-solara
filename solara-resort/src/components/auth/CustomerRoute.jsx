import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export function CustomerRoute() {
  const { user, authStatus } = useApp();
  const location = useLocation();

  if (authStatus === 'loading') {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center px-4 bg-bg">
        <div className="w-10 h-10 rounded-full border-2 border-gold/30 border-t-gold animate-spin" aria-hidden />
        <p className="mt-4 text-xs text-muted">Loading your session…</p>
      </div>
    );
  }

  if (!user) {
    const next = `${location.pathname}${location.search}`;
    return <Navigate to={`/login?next=${encodeURIComponent(next)}`} replace />;
  }

  return <Outlet />;
}
