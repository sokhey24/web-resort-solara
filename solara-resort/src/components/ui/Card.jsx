import React, { forwardRef } from 'react';

export const Card = forwardRef(
  ({ children, className = '', variant = 'default', noPadding = false, ...props }, ref) => {
    const baseStyles = 'rounded-[var(--radius-card)] transition-all duration-200 overflow-hidden';

    const variantStyles = {
      default: 'bg-surface border border-border text-text',
      outlined: 'bg-transparent border border-border text-text',
      elevated: 'bg-surface-elevated border border-border/80 shadow-md text-text',
      interactive:
        'bg-surface border border-border text-text hover:border-gold/40 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer',
      overlay:
        'relative bg-slate-950/80 backdrop-blur-md border border-white/10 text-white',
    };

    const paddingStyle = noPadding ? '' : 'p-6';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${paddingStyle} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`mb-4 flex items-center justify-between gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex-1 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`mt-6 pt-4 border-t border-border flex items-center justify-between gap-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
