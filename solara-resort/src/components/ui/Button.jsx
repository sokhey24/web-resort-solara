import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export const Button = forwardRef(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer tracking-wide rounded-[var(--radius-button)]';

    const variantStyles = {
      primary:
        'bg-primary text-white hover:bg-primary-hover active:scale-[0.99] shadow-sm',
      gold:
        'bg-gold text-slate-950 font-semibold hover:bg-gold-hover active:scale-[0.99] shadow-sm hover:shadow-md',
      secondary:
        'bg-surface-elevated text-text hover:bg-surface-hover active:scale-[0.99] border border-border',
      outline:
        'border border-border text-text hover:border-gold hover:text-gold active:scale-[0.99] bg-transparent',
      ghost:
        'text-text hover:bg-surface-hover hover:text-gold bg-transparent',
      danger:
        'bg-error text-white hover:bg-red-700 active:scale-[0.99]',
    };

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[34px]',
      md: 'text-sm px-5 py-2.5 gap-2 min-h-[42px]',
      lg: 'text-base px-7 py-3.5 gap-2.5 min-h-[50px] font-semibold',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span className="whitespace-nowrap truncate">{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
