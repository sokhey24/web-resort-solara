import React from 'react';
import { Loader2 } from 'lucide-react';

export function Spinner({ className = '', label = 'Loading' }) {
  return (
    <span className={`inline-flex items-center gap-2 text-muted ${className}`} role="status">
      <Loader2 className="w-5 h-5 animate-spin text-gold" aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  );
}
