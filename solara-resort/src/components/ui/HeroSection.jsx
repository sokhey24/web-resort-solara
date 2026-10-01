import React from 'react';

export const HeroSection = ({
  image,
  title,
  subtitle,
  badge,
  children,
  heightClass = 'min-h-[580px] lg:min-h-[640px]',
}) => {
  return (
    <section className={`relative w-full ${heightClass} flex flex-col justify-center items-center overflow-hidden pt-20 pb-16`}>
      <div className="absolute inset-0 z-0 bg-slate-950">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-slate-950/75 to-slate-950/40" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {badge && (
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold-light bg-gold/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-gold/40">
            <span>{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.15] max-w-4xl text-balance drop-shadow-sm mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl text-balance leading-relaxed mb-8 font-light">
            {subtitle}
          </p>
        )}

        {children && <div className="w-full max-w-6xl mt-2">{children}</div>}
      </div>
    </section>
  );
};
