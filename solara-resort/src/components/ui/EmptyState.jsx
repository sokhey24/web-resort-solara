import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from './Button.jsx';

export const EmptyState = ({
  title = 'No resorts found',
  description = 'Try adjusting your destination, date range, or search filters to find available sanctuaries.',
  actionText = 'Clear Filters',
  onAction,
  icon,
}) => {
  return (
    <div className="w-full text-center py-16 px-4 bg-surface/50 border border-border/60 rounded-[var(--radius-card)] my-6">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-surface-hover flex items-center justify-center text-gold">
        {icon || <SearchX className="w-7 h-7" />}
      </div>
      <h3 className="text-lg font-semibold text-text mb-2 font-serif">{title}</h3>
      <p className="text-sm text-muted max-w-md mx-auto mb-6 leading-relaxed">{description}</p>
      {onAction && actionText && (
        <Button variant="outline" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
