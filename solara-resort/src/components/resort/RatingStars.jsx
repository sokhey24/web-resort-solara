import React from 'react';
import { Star } from 'lucide-react';

export function RatingStars({ rating = 0, max = 5, className = '' }) {
  const value = Math.max(0, Math.min(max, Number(rating) || 0));
  const full = Math.round(value);

  return (
    <div className={`flex items-center gap-0.5 text-gold ${className}`} aria-label={`${value} out of ${max} stars`}>
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < full ? 'fill-gold text-gold' : 'text-gold/30'}`}
        />
      ))}
    </div>
  );
}
