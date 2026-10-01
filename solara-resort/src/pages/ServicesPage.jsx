import React from 'react';
import { HeroSection } from '../components/ui/HeroSection.jsx';
import { Button } from '../components/ui/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { MARKETING_IMAGES } from '../constants/marketingImages.js';
import { useWebsiteContent } from '../hooks/useWebsiteContent.js';
import { EmptyState } from '../components/ui/EmptyState.jsx';
import { Spinner } from '../components/common/Spinner.jsx';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export const ServicesPage = () => {
  const navigate = useNavigate();
  const { addToast, t, localize, language } = useApp();

  const { services: cmsServices, loading: contentLoading } = useWebsiteContent();
  const localizedServices = cmsServices.map((s) => (localize ? localize(s) : s));

  const handleInquiry = (serviceTitle) => {
    addToast(
      language === 'km'
        ? `សំណើសួរអំពី ${serviceTitle} ត្រូវបានផ្ញើទៅកាន់ក្រុមជំនួយការ សូឡារ៉ា។`
        : `Inquiry for ${serviceTitle} sent to Solara Concierge. We will assist you shortly.`,
      'success'
    );
  };

  return (
    <div className="w-full pb-24">
      <HeroSection
        image={MARKETING_IMAGES.spa}
        badge={t('home.servicesTag', 'Holistic Hospitality')}
        title={t('services.pageTitle', 'Celestial Lotus Spa & Sanctuary Services')}
        subtitle={t('services.pageSubtitle', 'Every detail curated for quiet restoration, bespoke culinary discovery, and uncompromising personal attention.')}
        heightClass="min-h-[440px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium block">
            {t('services.solaraStandard', 'The Solara Standard')}
          </span>
          <h2 className="text-3xl font-serif font-bold text-text">
            {t('services.anticipatoryCare', 'Anticipatory Care Around the Clock')}
          </h2>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
            {t('services.anticipatoryDesc', 'Our discreet team ensures every moment of your residency is tailored to your rhythms, from arrival transfers to bespoke destination dining.')}
          </p>
        </div>

        {contentLoading ? (
          <div className="flex justify-center py-16">
            <Spinner label={t('common.loading', 'Loading')} />
          </div>
        ) : localizedServices.length === 0 ? (
          <EmptyState
            title={t('services.emptyTitle', 'Services coming soon')}
            description={t(
              'services.emptyDesc',
              'Sanctuary services will appear here once published by our resort team.'
            )}
          />
        ) : (
        <div className="space-y-12">
          {localizedServices.map((srv, idx) => (
            <div
              key={srv.id}
              className={`bg-surface border border-border rounded-[var(--radius-card)] overflow-hidden shadow-sm flex flex-col ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 items-stretch`}
            >
              <div className="lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-900 min-h-[300px]">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded border border-gold/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('services.signatureService', 'Solara Signature Service')}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-text">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-gold-light italic">
                    {srv.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    {srv.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {(srv.features || []).map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-wrap items-center gap-4">
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => handleInquiry(srv.title)}
                  >
                    {t('services.inquireConcierge', 'Inquire with Concierge')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/booking')}
                  >
                    {t('services.bookPerks', 'Reserve Room with Privileges')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};
