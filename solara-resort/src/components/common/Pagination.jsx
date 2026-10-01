import React from 'react';
import { Button } from '../ui/Button.jsx';

export function Pagination({
  page = 1,
  totalPages = 1,
  onPageChange,
  className = '',
}) {
  if (totalPages <= 1) return null;

  const prev = () => onPageChange?.(Math.max(1, page - 1));
  const next = () => onPageChange?.(Math.min(totalPages, page + 1));

  return (
    <nav
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-label="Pagination"
    >
      <Button variant="outline" size="sm" disabled={page <= 1} onClick={prev}>
        Previous
      </Button>
      <span className="text-xs text-muted">
        Page {page} of {totalPages}
      </span>
      <Button variant="outline" size="sm" disabled={page >= totalPages} onClick={next}>
        Next
      </Button>
    </nav>
  );
}
