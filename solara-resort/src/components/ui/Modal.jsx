import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'lg',
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className={`relative w-full ${maxWidthStyles[maxWidth] || maxWidthStyles.lg} bg-surface border border-border rounded-[var(--radius-modal)] shadow-2xl p-6 sm:p-8 z-10 my-8 transition-all animate-in fade-in zoom-in-95 duration-200`}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            {title && (
              <h3 className="text-xl font-semibold text-text tracking-tight font-serif">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-muted mt-1 leading-relaxed">{subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-surface-hover transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-text">{children}</div>
      </div>
    </div>
  );
};
