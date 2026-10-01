import React, { useState } from 'react';
import { HeroSection } from '../components/ui/HeroSection.jsx';
import { Modal } from '../components/ui/Modal.jsx';
import { MARKETING_IMAGES } from '../constants/marketingImages.js';
import { Eye } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export const GalleryPage = () => {
  const { t, language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      id: 'gal-1',
      src: MARKETING_IMAGES.hero,
      title: 'Ocean Sanctuary at Twilight',
      title_km: 'រមណីយដ្ឋានមាត់សមុទ្រពេលព្រលប់',
      category: 'Resort & Ocean',
      category_km: 'សំណង់រមណីយដ្ឋាន',
      caption: 'The main tier infinity pool overlooking the sunset waters of Koh Rong.',
      caption_km: 'អាងហែលទឹកធំមើលឃើញផ្ទៃសមុទ្រពេលថ្ងៃលិចនៅកោះរ៉ុង។'
    },
    {
      id: 'gal-2',
      src: MARKETING_IMAGES.villa,
      title: 'Oceanfront Royal Pool Villa',
      title_km: 'វីឡាអាងហែលទឹកមាត់សមុទ្រ រ៉ូយ៉ាល់',
      category: 'Villas & Suites',
      category_km: 'បន្ទប់ និងវីឡា',
      caption: 'Handcrafted teak furnishings and private plunge pool hovering above the tides.',
      caption_km: 'គ្រឿងសង្ហារិមឈើប្រណីតធ្វើដោយដៃ និងអាងហែលទឹកឯកជនលើផ្ទៃទឹកសមុទ្រ។'
    },
    {
      id: 'gal-3',
      src: MARKETING_IMAGES.dining,
      title: 'The Azure Wave Coastal Restaurant',
      title_km: 'ភោជនីយដ្ឋានមាត់សមុទ្រ អាសួរ វ៉េវ',
      category: 'Dining & Wine',
      category_km: 'ភោជនីយដ្ឋាន & ម្ហូបអាហារ',
      caption: 'Candlelit oceanfront tables serving fresh line-caught seafood and vintage champagnes.',
      caption_km: 'តុអាហារអុជទៀនមាត់សមុទ្រ បម្រើគ្រឿងសមុទ្រស្រស់ៗ និងស្រាសំប៉ាញល្បីៗ។'
    },
    {
      id: 'gal-4',
      src: MARKETING_IMAGES.spa,
      title: 'Celestial Lotus Spa Sanctuary',
      title_km: 'ជម្រកស្ប៉ាផ្កាឈូកទិព្វ',
      category: 'Wellness & Spa',
      category_km: 'ស្ប៉ា & សម្រាកកាយ',
      caption: 'Natural stone reflection pools and restorative herbal therapy sala.',
      caption_km: 'អាងទឹកថ្មធម្មជាតិ និងសាលាព្យាបាលដោយឱសថបុរាណ។'
    },
    {
      id: 'gal-5',
      src: MARKETING_IMAGES.villa,
      title: 'Angkor Heritage Pavilion Suite',
      title_km: 'បន្ទប់ស្វីតពន្លាបេតិកភណ្ឌអង្គរ',
      category: 'Villas & Suites',
      category_km: 'បន្ទប់ និងវីឡា',
      caption: 'Hand-carved sandstone details surrounded by ancient banyan canopy in Siem Reap.',
      caption_km: 'ចម្លាក់ថ្មភក់ធ្វើដោយដៃ កណ្តាលម្លប់ដើមជ្រៃបុរាណនៅសៀមរាប។'
    },
    {
      id: 'gal-6',
      src: MARKETING_IMAGES.hero,
      title: 'Private Twin-Hull Catamaran Expedition',
      title_km: 'ដំណើរកម្សាន្តទូកកាតាម៉ារ៉ានឯកជន',
      category: 'Resort & Ocean',
      category_km: 'សំណង់រមណីយដ្ឋាន',
      caption: 'Setting sail across the protected coral reefs and remote island atolls.',
      caption_km: 'ជិះទូកកម្សាន្តកាត់ផ្កាថ្មធម្មជាតិ និងកោះនានាក្នុងសមុទ្រកម្ពុជា។'
    },
    {
      id: 'gal-7',
      src: MARKETING_IMAGES.spa,
      title: 'Bokor Mountain Cloud Deck',
      title_km: 'រានហាលទស្សនាពពកលើភ្នំបូកគោ',
      category: 'Wellness & Spa',
      category_km: 'ស្ប៉ា & សម្រាកកាយ',
      caption: 'Panoramic mist-shrouded observation platform at 1,075m elevation.',
      caption_km: 'ទីតាំងមើលទេសភាពអ័ព្ទត្រជាក់កម្ពស់ ១,០៧៥ ម៉ែត្រលើភ្នំបូកគោ។'
    },
    {
      id: 'gal-8',
      src: MARKETING_IMAGES.dining,
      title: 'Saffron & Spice Royal Khmer Banquet',
      title_km: 'ពិធីលៀងសាយភោជន៍ព្រះរាជវាំងខ្មែរ',
      category: 'Dining & Wine',
      category_km: 'ភោជនីយដ្ឋាន & ម្ហូបអាហារ',
      caption: 'Traditional clay-oven gastronomy and organic farm herb pairings.',
      caption_km: 'ម្ហូបចម្អិនដោយឡដីឥដ្ឋបុរាណ ជាមួយបន្លែឱសថសរីរាង្គ។'
    }
  ];

  const categories = [
    { value: 'All', label: t('gallery.all', 'All Collections') },
    { value: 'Resort & Ocean', label: t('gallery.sanctuaries', 'Sanctuary Architecture') },
    { value: 'Villas & Suites', label: t('gallery.villas', 'Villas & Suites') },
    { value: 'Dining & Wine', label: t('gallery.dining', 'Gastronomy') },
    { value: 'Wellness & Spa', label: t('gallery.wellness', 'Spa & Wellness') },
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full pb-24">
      <HeroSection
        image={MARKETING_IMAGES.hero}
        badge={language === 'km' ? 'វិចិត្រសាលរូបភាព' : 'Visual Sanctuary'}
        title={t('gallery.pageTitle', 'The Solara Photography Collection')}
        subtitle={t('gallery.pageSubtitle', 'A visual homage to our sanctuaries across Cambodia’s turquoise atolls, ancient rainforests, and cloud-veiled highlands.')}
        heightClass="min-h-[440px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-[var(--radius-button)] text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-gold text-slate-950 font-semibold shadow-sm'
                  : 'bg-surface border border-border text-text-secondary hover:text-text hover:bg-surface-hover'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative aspect-square rounded-[var(--radius-card)] overflow-hidden bg-slate-900 border border-border cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.src}
                alt={language === 'km' ? item.title_km : item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-gold-light font-semibold mb-1">
                  {language === 'km' ? item.category_km : item.category}
                </span>
                <h4 className="text-base font-serif font-bold text-white mb-1">
                  {language === 'km' ? item.title_km : item.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                  {language === 'km' ? item.caption_km : item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-gold font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t('gallery.clickEnlarge', 'Click to view full image')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <Modal
          isOpen={true}
          onClose={() => setActiveImage(null)}
          title={language === 'km' ? activeImage.title_km : activeImage.title}
          subtitle={language === 'km' ? activeImage.caption_km : activeImage.caption}
          maxWidth="4xl"
        >
          <div className="w-full aspect-[16/10] overflow-hidden rounded-[var(--radius-button)] bg-slate-950">
            <img
              src={activeImage.src}
              alt={language === 'km' ? activeImage.title_km : activeImage.title}
              className="w-full h-full object-cover"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
