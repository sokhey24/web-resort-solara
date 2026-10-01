import React, { forwardRef } from 'react';

export const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className = '',
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
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
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            className={`w-full rounded-[var(--radius-input)] bg-surface border border-border text-text placeholder:text-muted/60 text-sm px-3.5 py-2.5 transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-50 disabled:cursor-not-allowed ${
              leftIcon ? 'pl-10' : ''
            } ${rightIcon ? 'pr-10' : ''} ${error ? 'border-error focus:border-error focus:ring-error' : ''} ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 text-muted shrink-0 flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-xs text-error font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-muted">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
