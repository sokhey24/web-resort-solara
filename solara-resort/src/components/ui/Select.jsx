import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Select = forwardRef(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      children,
      className = '',
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-medium tracking-wide text-text-secondary"
          >
            {label} {required && <span className="text-gold">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 pointer-events-none text-muted shrink-0">
              {leftIcon}
            </div>
          )}
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            className={`w-full appearance-none rounded-[var(--radius-input)] bg-surface border border-border text-text text-sm px-3.5 py-2.5 pr-10 transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-50 disabled:cursor-not-allowed ${
              leftIcon ? 'pl-10' : ''
            } ${error ? 'border-error focus:border-error focus:ring-error' : ''} ${className}`}
            {...props}
          >
            {children}
          </select>
          <div className="absolute right-3.5 pointer-events-none text-muted shrink-0">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && <p className="text-xs text-error font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-muted">{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
