export const HERO_IMAGE = '/src/assets/images/hero_solara_resort_1790692958491.jpg';
export const VILLA_IMAGE = '/src/assets/images/villa_ocean_luxury_1790692975563.jpg';
export const DINING_IMAGE = '/src/assets/images/dining_azure_restaurant_1790692987799.jpg';
export const SPA_IMAGE = '/src/assets/images/wellness_spa_sanctuary_1790692998602.jpg';

export const DESTINATIONS = [
  {
    name: 'Koh Rong',
    name_km: 'កោះរ៉ុង',
    subtitle: 'Turquoise Waters & Private Atolls',
    subtitle_km: 'ផ្ទៃទឹកសមុទ្រខៀវស្រងាត់ & កោះឯកជនដ៏ស្ងប់ស្ងាត់',
    resortsCount: 2,
    startingPrice: 320,
    image: HERO_IMAGE,
    description: 'Pristine white sand beaches, secluded coves, and bioluminescent bays on Cambodia’s premier island sanctuary.',
    description_km: 'ឆ្នេរខ្សាច់សក្បុស ឆ្នេរសមុទ្រឯកជន និងទឹកសមុទ្របញ្ចេញពន្លឺភ្លឺផ្លេកនាពេលរាត្រី នៅលើកោះដ៏ល្បីល្បាញបំផុតនៃប្រទេសកម្ពុជា។'
  },
  {
    name: 'Siem Reap',
    name_km: 'សៀមរាប',
    subtitle: 'Ancient Temples & Tropical Heritage',
    subtitle_km: 'ប្រាសាទបុរាណ & បេតិកភណ្ឌកណ្តាលព្រៃត្រូពិក',
    resortsCount: 1,
    startingPrice: 240,
    image: VILLA_IMAGE,
    description: 'Spiritual tranquility amidst century-old banyan trees, lotus lagoons, and timeless Khmer craftsmanship.',
    description_km: 'ភាពស្ងប់ស្ងាត់នៃផ្លូវចិត្ត កណ្តាលដើមជ្រៃរាប់រយឆ្នាំ បឹងផ្កាឈូក និងស្នាដៃចម្លាក់ខ្មែរដ៏ល្អឯកមិនចេះសាបសូន្យ។'
  },
  {
    name: 'Bokor',
    name_km: 'ភ្នំបូកគោ',
    subtitle: 'Highland Mist & Cloud Valleys',
    subtitle_km: 'អ័ព្ទត្រជាក់លើខ្ពង់រាប & ជ្រលងពពកបាំងភ្នំ',
    resortsCount: 1,
    startingPrice: 195,
    image: SPA_IMAGE,
    description: 'Refreshing alpine breezes, French colonial heritage, and panoramic views over the Gulf of Thailand.',
    description_km: 'ខ្យល់អាកាសត្រជាក់បរិសុទ្ធលើកំពូលភ្នំ បេតិកភណ្ឌស្ថាបត្យកម្មបារាំង និងទេសភាពសមុទ្រដ៏ធំល្វឹងល្វើយ។'
  },
  {
    name: 'Kep',
    name_km: 'ឆ្នេរកែប',
    subtitle: 'Sunset Riviera & Crab Coast',
    subtitle_km: 'ឆ្នេរសមុទ្រថ្ងៃលិច & កំពង់ផែក្តាមដ៏ល្បីល្បាញ',
    resortsCount: 1,
    startingPrice: 210,
    image: DINING_IMAGE,
    description: 'Quiet oceanfront romance, lush pepper plantations, and historic coastal architecture overlooking the bay.',
    description_km: 'បរិយាកាសមនោសញ្ចេតនាមាត់សមុទ្រ ចម្ការម្រេចដ៏ល្បីល្បាញ និងស្ថាបត្យកម្មឆ្នេរសមុទ្រដ៏ស្រស់ស្អាត។'
  }
];

export const RESORTS = [
  {
    id: 'solara-grand-ocean',
    name: 'Solara Grand Ocean Sanctuary',
    name_km: 'សូឡារ៉ា ហ្គ្រេនអូសិន (កោះរ៉ុង)',
    tagline: 'Private island serenity with limitless azure ocean panoramas',
    tagline_km: 'ជម្រកកោះឯកជនដ៏ស្ងប់ស្ងាត់ ជាមួយទេសភាពមហាសមុទ្រខៀវស្រងាត់គ្មានទីបញ្ចប់',
    description: 'Perched along the emerald shores of Koh Rong, Solara Grand Ocean Sanctuary delivers an uncompromising standard of barefoot ultra-luxury. Featuring cliffside infinity pools, starlight overwater pavilions, and bespoke butler service, every moment is an invitation to unwind.',
    description_km: 'ស្ថិតនៅតាមបណ្តោយឆ្នេរសមុទ្រដ៏ស្រស់ស្អាតនៃកោះរ៉ុង រមណីយដ្ឋាន សូឡារ៉ា ហ្គ្រេនអូសិន ផ្តល់ជូននូវបដិសណ្ឋារកិច្ចលំដាប់ផ្កាយប្រាំដ៏ល្អឥតខ្ចោះ ជាមួយអាងហែលទឹកលើច្រាំងថ្ម អាគារលើទឹកក្រោមពន្លឺផ្កាយ និងសេវាជំនួយការផ្ទាល់ខ្លួន ២៤ម៉ោង។',
    location: 'Koh Rong Sanloem Island, Sihanoukville Coast',
    location_km: 'កោះរ៉ុងសន្លឹម, ឆ្នេរសមុទ្រខេត្តព្រះសីហនុ',
    destination: 'Koh Rong',
    rating: 4.96,
    reviewsCount: 342,
    startingPrice: 320,
    featuredImage: HERO_IMAGE,
    gallery: [
      HERO_IMAGE,
      VILLA_IMAGE,
      SPA_IMAGE,
      DINING_IMAGE
    ],
    amenities: [
      'Private Coral Beach',
      'Infinity Ocean Pool',
      'Lotus Flower Spa',
      'Michelin-Caliber Dining',
      'Speedboat Airport Transfer',
      '24/7 Personal Butler',
      'Water Sports & Scuba',
      'High-Speed Wi-Fi'
    ],
    amenities_km: [
      'ឆ្នេរផ្កាថ្មឯកជន',
      'អាងហែលទឹកមើលឃើញមហាសមុទ្រ',
      'ស្ប៉ាផ្កាឈូកទិព្វ',
      'ភោជនីយដ្ឋានលំដាប់ពិភពលោក',
      'សេវាអូប័រល្បឿនលឿនពីព្រលានយន្តហោះ',
      'ជំនួយការផ្ទាល់ខ្លួន ២៤ម៉ោង/៧ថ្ងៃ',
      'កីឡាលើទឹក & មុជទឹកមើលផ្កាថ្ម',
      'Wi-Fi ល្បឿនលឿន'
    ],
    badge: 'Signature Flagship',
    badge_km: 'រមណីយដ្ឋានឆ្នើមប្រចាំឆ្នាំ',
    address: 'Sok San Bay, Koh Rong, Sihanoukville, Cambodia',
    contactEmail: 'ocean.sanctuary@solararesorts.com',
    contactPhone: '+855 (0) 34 933 800'
  },
  {
    id: 'solara-siem-reap',
    name: 'Solara Heritage Forest Retreat',
    name_km: 'សូឡារ៉ា ហេរីថេច ហ្វ័ររ៉េស (សៀមរាប)',
    tagline: 'A sanctuary of Khmer artistry and ancient rainforest serenity',
    tagline_km: 'ជម្រកសិល្បៈវប្បធម៌ខ្មែរ និងសេចក្តីស្ងប់ក្នុងព្រៃព្រឹក្សាដ៏ពិសិដ្ឋ',
    description: 'Surrounded by four hectares of private botanical forest just minutes from the temples of Angkor, this architectural marvel harmonizes handcrafted sandstone courtyards, reflection pools, and traditional wooden pavilion suites with contemporary five-star indulgence.',
    description_km: 'ហ៊ុមព័ទ្ធដោយព្រៃឈើធម្មជាតិទំហំ ៤ ហិកតា ត្រឹមតែប៉ុន្មាននាទីពីប្រាសាទអង្គរវត្ត ស្នាដៃស្ថាបត្យកម្មដ៏ល្អឯកនេះរួមបញ្ចូលគ្នានូវទីធ្លាថ្មភក់ឆ្លាក់ដោយដៃ ស្រះទឹកឆ្លុះស្រមោល និងវីឡាឈើបុរាណខ្មែរប្រកបដោយផាសុកភាពខ្ពស់។',
    location: 'Angkor Heritage Corridor, Siem Reap',
    location_km: 'តំបន់បេតិកភណ្ឌអង្គរ, ខេត្តសៀមរាប',
    destination: 'Siem Reap',
    rating: 4.92,
    reviewsCount: 289,
    startingPrice: 240,
    featuredImage: VILLA_IMAGE,
    gallery: [
      VILLA_IMAGE,
      SPA_IMAGE,
      HERO_IMAGE,
      DINING_IMAGE
    ],
    amenities: [
      'Botanical Saltwater Pool',
      'Holistic Herbal Spa',
      'Royal Khmer Gastronomy',
      'Private Temple Guides',
      'Lotus Pond Pavilion',
      'Bicycle Excursions',
      'Yoga Sala',
      'Chauffeur Service'
    ],
    amenities_km: [
      'អាងហែលទឹកទឹកប្រៃកណ្តាលព្រៃ',
      'ស្ប៉ាឱសថបុរាណធម្មជាតិ',
      'ម្ហូបព្រះរាជវាំងខ្មែរពិតៗ',
      'មគ្គុទ្ទេសក៍ឯកជនទស្សនាប្រាសាទ',
      'សាលាលើបឹងផ្កាឈូក',
      'ដំណើរកម្សាន្តជិះកង់',
      'សាលាហាត់យូហ្គា & សមាធិ',
      'សេវារថយន្ត VIP ជាមួយតៃកុង'
    ],
    badge: 'Cultural Sanctuary',
    badge_km: 'ជម្រកវប្បធម៌បេតិកភណ្ឌ',
    address: 'Charles de Gaulle Boulevard, Siem Reap, Cambodia',
    contactEmail: 'heritage@solararesorts.com',
    contactPhone: '+855 (0) 63 963 888'
  },
  {
    id: 'solara-bokor-sky',
    name: 'Solara Mountain Sky Pavilion',
    name_km: 'សូឡារ៉ា ម៉ោនធែន ស្កាយ (បូកគោ)',
    tagline: 'French-colonial elegance perched high above the clouds',
    tagline_km: 'ភាពប្រណីតនៃស្ថាបត្យកម្មបារាំងបុរាណ លើកំពូលភ្នំពពកបាំងត្រជាក់ស្រឹប',
    description: 'Elevated 1,075 meters above sea level on Bokor Mountain, Solara Mountain Sky Pavilion blends early 20th-century colonial nostalgia with modern architectural sophistication. Enjoy crisp highland air, roaring stone fireplaces, and cliff-edge sunset vistas.',
    description_km: 'កម្ពស់ ១,០៧៥ ម៉ែត្រលើនីវ៉ូទឹកសមុទ្រនៅលើភ្នំបូកគោ រមណីយដ្ឋាននេះរួមបញ្ចូលគ្នានូវរចនាបថបារាំងដើមសតវត្សរ៍ទី២០ ជាមួយភាពទាន់សម័យ។ រីករាយជាមួយខ្យល់អាកាសត្រជាក់បរិសុទ្ធ ចង្ក្រានកម្តៅថ្ម និងទិដ្ឋភាពថ្ងៃលិចពីមាត់ជ្រោះ។',
    location: 'Bokor National Highland, Kampot Province',
    location_km: 'ឧទ្យានជាតិព្រះមុនីវង្សបូកគោ, ខេត្តកំពត',
    destination: 'Bokor',
    rating: 4.88,
    reviewsCount: 176,
    startingPrice: 195,
    featuredImage: SPA_IMAGE,
    gallery: [
      SPA_IMAGE,
      HERO_IMAGE,
      DINING_IMAGE,
      VILLA_IMAGE
    ],
    amenities: [
      'Heated Panoramic Indoor Pool',
      'Alpine Fireplace Lounge',
      'Sommelier Wine Cellar',
      'Highland Trekking Guides',
      'Cloud Observation Deck',
      'Wellness Hydrotherapy',
      'Organic Farm-to-Table Dining'
    ],
    amenities_km: [
      'អាងហែលទឹកទឹកក្តៅក្នុងអគារ',
      'បន្ទប់សម្រាកកម្តៅភ្លើងលើភ្នំ',
      'បន្ទប់រក្សាស្រាទំពាំងបាយជូរល្បីៗ',
      'មគ្គុទ្ទេសក៍ដើរព្រៃលើភ្នំ',
      'រានហាលទស្សនាជ្រលងពពក',
      'សេវាសម្រួលសុខភាពដោយកម្លាំងទឹក',
      'អាហារស្រស់ពីចម្ការសរីរាង្គ'
    ],
    badge: 'Highland Retreat',
    badge_km: 'ជម្រកលំហែកាយលើខ្ពង់រាប',
    address: 'Bokor Mountain Plateau, Kampot, Cambodia',
    contactEmail: 'highlands@solararesorts.com',
    contactPhone: '+855 (0) 33 932 770'
  },
  {
    id: 'solara-kep-bay',
    name: 'Solara Kep Bay Seaside Villas',
    name_km: 'សូឡារ៉ា កែបបេយ៍ ស៊ីសាយ (ឆ្នេរកែប)',
    tagline: 'Quiet coastal glamour where sea breeze meets pepper estates',
    tagline_km: 'ភាពទាក់ទាញមាត់សមុទ្រដ៏ស្ងប់ស្ងាត់ ជាកន្លែងដែលខ្យល់សមុទ្រជួបជាមួយចម្ការម្រេច',
    description: 'An intimate haven of twelve private pool villas nestled between the gentle waters of the Gulf and the emerald jungle of Kep National Park. Renowned for its seafood cuisine and sun-drenched terraced gardens.',
    description_km: 'វីឡាអាងហែលទឹកឯកជនចំនួន ១២ ខ្នង ស្ថិតនៅចន្លោះផ្ទៃសមុទ្រដ៏ស្ងប់ស្ងាត់ និងព្រៃឈើបៃតងខ្ចីនៃឧទ្យានជាតិកែប។ ល្បីល្បាញដោយសារមុខម្ហូបគ្រឿងសមុទ្រស្រស់ៗ និងសួនផ្ការំលេចតាមជម្រាលភ្នំ។',
    location: 'Kep Seaside Promenade, Kep Province',
    location_km: 'ផ្លូវមាត់សមុទ្រកែប, ខេត្តកែប',
    destination: 'Kep',
    rating: 4.90,
    reviewsCount: 215,
    startingPrice: 210,
    featuredImage: DINING_IMAGE,
    gallery: [
      DINING_IMAGE,
      VILLA_IMAGE,
      HERO_IMAGE,
      SPA_IMAGE
    ],
    amenities: [
      'Private Plunge Pools',
      'Fresh Seafood Bar',
      'Sea Kayaking',
      'Sunset Pier Lounge',
      'Organic Pepper Tour',
      'Herbal Steam Baths',
      'Complimentary Sunset Cruise'
    ],
    amenities_km: [
      'អាងហែលទឹកឯកជនក្នុងវីឡា',
      'បារគ្រឿងសមុទ្រស្រស់ៗ',
      'ទូកកាយ៉ាក់លេងលើសមុទ្រ',
      'រានហាលលើស្ពានឈើថ្ងៃលិច',
      'ដំណើរទស្សនកិច្ចចម្ការម្រេចសរីរាង្គ',
      'ស្ទីមឱសថបុរាណខ្មែរ',
      'ដំណើរកម្សាន្តទូកថ្ងៃលិចដោយឥតគិតថ្លៃ'
    ],
    badge: 'Coastal Gem',
    badge_km: 'ត្បូងពេជ្រមាត់សមុទ្រ',
    address: 'Kep Seaside Road, Kep, Cambodia',
    contactEmail: 'kep.bay@solararesorts.com',
    contactPhone: '+855 (0) 36 934 550'
  },
  {
    id: 'solara-mekong-oasis',
    name: 'Solara Mekong Royal Estate',
    name_km: 'សូឡារ៉ា មេគង្គ រ៉ូយ៉ាល់ (ភ្នំពេញ)',
    tagline: 'Urban palatial oasis where the great rivers converge',
    tagline_km: 'វិមានលំហែកាយមាត់ទន្លេ ជាទីប្រសព្វនៃទន្លេទាំងបួន',
    description: 'Situated along the gentle currents of the Tonle Sap and Mekong confluence, Solara Mekong Royal Estate offers a discreet, peaceful haven away from the bustling capital, complete with private river cruisers and royal garden dining.',
    description_km: 'ស្ថិតនៅតាមបណ្តោយទន្លេសាប និងទន្លេមេគង្គ រមណីយដ្ឋាននេះជាជម្រកដ៏ស្ងប់ស្ងាត់ និងប្រណីតបំផុតនៅរាជធានីភ្នំពេញ ដែលមានកប៉ាល់ឯកជនសម្រាប់ជិះកម្សាន្តតាមដងទន្លេ និងភោជនីយដ្ឋានកណ្តាលសួនផ្កាព្រះរាជវាំង។',
    location: 'Chroy Changvar Riverfront, Phnom Penh',
    location_km: 'មាត់ទន្លេជ្រោយចង្វារ, រាជធានីភ្នំពេញ',
    destination: 'Phnom Penh',
    rating: 4.89,
    reviewsCount: 198,
    startingPrice: 260,
    featuredImage: HERO_IMAGE,
    gallery: [
      HERO_IMAGE,
      DINING_IMAGE,
      VILLA_IMAGE,
      SPA_IMAGE
    ],
    amenities: [
      'Private Luxury River Yacht',
      'Olympic-Length Riverfront Pool',
      'Starlight Cocktail Skybar',
      'Presidential Meeting Salon',
      'Royal Spa Sanctuary',
      'Helipad Access',
      'Chauffeur Limousine'
    ],
    amenities_km: [
      'កប៉ាល់យ៉ាតឯកជនជិះលើទន្លេ',
      'អាងហែលទឹកប្រវែងវែងមាត់ទន្លេ',
      'ស្កាយបារក្រឡុកស្រាក្រោមពន្លឺផ្កាយ',
      'បន្ទប់ប្រជុំកម្រិតប្រធានាធិបតី',
      'ស្ប៉ាព្រះរាជវាំង',
      'ចំណតឧទ្ធម្ភាគចក្រ',
      'សេវារថយន្តទំនើប Limousine'
    ],
    badge: 'Riverfront Oasis',
    badge_km: 'ជម្រកលំហែកាយមាត់ទន្លេ',
    address: 'Riverfront Boulevard, Chroy Changvar, Phnom Penh, Cambodia',
    contactEmail: 'mekong.estate@solararesorts.com',
    contactPhone: '+855 (0) 23 999 123'
  }
];

export const ROOMS = [
  {
    id: 'room-grand-ocean-villa',
    resortId: 'solara-grand-ocean',
    resortName: 'Solara Grand Ocean Sanctuary',
    resortName_km: 'សូឡារ៉ា ហ្គ្រេនអូសិន (កោះរ៉ុង)',
    name: 'Oceanfront Royal Pool Villa',
    name_km: 'វីឡាអាងហែលទឹកមាត់សមុទ្រ រ៉ូយ៉ាល់',
    type: 'Villa',
    type_km: 'វីឡាឯកជន',
    pricePerNight: 580,
    capacity: { adults: 2, children: 1 },
    bedType: '1 King Bed (Handcrafted Teak)',
    bedType_km: 'គ្រែស្តេច King Size ១ (ឈើប្រណីត)',
    sizeSqm: 145,
    view: 'Unobstructed Panoramic Ocean View',
    view_km: 'ទិដ្ឋភាពមហាសមុទ្រទូលាយ ១៨០ ដឺក្រេ',
    featuredImage: VILLA_IMAGE,
    gallery: [VILLA_IMAGE, HERO_IMAGE, SPA_IMAGE],
    amenities: [
      'Private 8m Infinity Plunge Pool',
      'Expansive Teak Sun Deck with Loungers',
      'Outdoor Rainforest Double Shower',
      'Oversized Terrazzo Soaking Tub',
      'Dedicated Butler Service',
      'Complimentary Artisanal Mini-Bar',
      'Nespresso Coffee System',
      'Sonos High-Fidelity Audio'
    ],
    amenities_km: [
      'អាងហែលទឹកឯកជនប្រវែង ៨ ម៉ែត្រ',
      'រានហាលឈើធំទូលាយសម្រាប់ហាលថ្ងៃ',
      'បន្ទប់ទឹកផ្កាឈូកភ្លោះក្រៅផ្ទះ',
      'អាងត្រាំទឹកថ្មម៉ាបទំហំធំ',
      'សេវាជំនួយការផ្ទាល់ខ្លួនប្រចាំការ',
      'មីនីបារសិប្បកម្មឥតគិតថ្លៃ',
      'ម៉ាស៊ីនឆុងកាហ្វេ Nespresso',
      'ប្រព័ន្ធបំពងសំឡេង Sonos កម្រិតខ្ពស់'
    ],
    description: 'The pinnacle of island seclusion. Perched directly above the tidal sands with an expansive private deck, infinity edge plunge pool, and floor-to-ceiling glass sliding doors framing the endless sunset horizon.',
    description_km: 'ភាពស្ងប់ស្ងាត់ឯកជនកម្រិតកំពូលលើកោះ។ ស្ថិតនៅផ្ទាល់លើឆ្នេរខ្សាច់ ជាមួយរានហាលឯកជនធំទូលាយ អាងហែលទឹកមាត់សមុទ្រ និងទ្វារកញ្ចក់ធំល្វឹងល្វើយសម្រាប់គយគន់ថ្ងៃលិចដ៏ស្រស់ត្រកាល។',
    availableCount: 3
  },
  {
    id: 'room-overwater-bungalow',
    resortId: 'solara-grand-ocean',
    resortName: 'Solara Grand Ocean Sanctuary',
    resortName_km: 'សូឡារ៉ា ហ្គ្រេនអូសិន (កោះរ៉ុង)',
    name: 'Lagoon Overwater Bungalow',
    name_km: 'បឹងហ្គាឡូលើទឹកឡាហ្គូន',
    type: 'Bungalow',
    type_km: 'បឹងហ្គាឡូ',
    pricePerNight: 460,
    capacity: { adults: 2, children: 0 },
    bedType: '1 King Canopy Bed',
    bedType_km: 'គ្រែស្តេច King Size បុរាណ ១',
    sizeSqm: 110,
    view: 'Direct Turquoise Lagoon & Coral Reef',
    view_km: 'ទិដ្ឋភាពផ្ទាល់លើទឹកសមុទ្រខៀវថ្លា & ផ្កាថ្ម',
    featuredImage: HERO_IMAGE,
    gallery: [HERO_IMAGE, VILLA_IMAGE, DINING_IMAGE],
    amenities: [
      'Glass Floor Under-Sea Marine Portal',
      'Direct Lagoon Access Stairway',
      'Overwater Sun Netting Hammock',
      'Deep Marble Soaking Tub',
      'Sunset Cocktail Service Daily',
      'High-Speed Satellite Wi-Fi'
    ],
    amenities_km: [
      'កម្រាលកញ្ចក់ថ្លាមើលឃើញត្រីហែលក្រោមទឹក',
      'ជណ្តើរចុះផ្ទាល់ទៅក្នុងទឹកសមុទ្រ',
      'អង្រឹងសំណាញ់លើទឹកសម្រាប់គេងលេង',
      'អាងត្រាំទឹកថ្មម៉ាបជ្រៅ',
      'សេវាក្រឡុកស្រាពេលថ្ងៃលិចប្រចាំថ្ងៃ',
      'Wi-Fi ផ្កាយរណបល្បឿនលឿន'
    ],
    description: 'Hovering serenely above crystalline waters, this overwater bungalow features a glass floor portal to view tropical marine life below, an overwater lounging net, and private steps leading directly into the ocean.',
    description_km: 'សង់លើផ្ទៃទឹកសមុទ្រថ្លាដូចកញ្ចក់ បឹងហ្គាឡូនេះមានកម្រាលកញ្ចក់ថ្លាសម្រាប់ទស្សនាជីវិតសត្វសមុទ្រ អង្រឹងសំណាញ់លើទឹក និងជណ្តើរឯកជនចុះហែលទឹកសមុទ្រភ្លាមៗ។',
    availableCount: 4
  },
  {
    id: 'room-grand-beachfront-suite',
    resortId: 'solara-grand-ocean',
    resortName: 'Solara Grand Ocean Sanctuary',
    resortName_km: 'សូឡារ៉ា ហ្គ្រេនអូសិន (កោះរ៉ុង)',
    name: 'Azure Beachfront Suite',
    name_km: 'បន្ទប់ស្វីតមាត់ឆ្នេរ អាសួរ',
    type: 'Suite',
    type_km: 'បន្ទប់ស្វីត',
    pricePerNight: 320,
    capacity: { adults: 3, children: 1 },
    bedType: '1 King or 2 Queen Beds',
    bedType_km: 'គ្រែស្តេច King ១ ឬ គ្រែ Queen ២',
    sizeSqm: 88,
    view: 'Tropical Gardens & Powder Beach',
    view_km: 'សួនផ្កាត្រូពិក & ឆ្នេរខ្សាច់សក្បុស',
    featuredImage: VILLA_IMAGE,
    gallery: [VILLA_IMAGE, SPA_IMAGE],
    amenities: [
      'Private Ocean-Facing Veranda',
      'Double Rain Head Shower',
      'Handwoven Organic Cotton Linens',
      'Beachside Dedicated Cabana',
      'In-Room Wellness Bar'
    ],
    amenities_km: [
      'យ៉រឯកជនបែរមុខទៅមហាសមុទ្រ',
      'បន្ទប់ទឹកផ្កាឈូកភ្លោះ',
      'កម្រាលពូកកប្បាសសរីរាង្គត្បាញដោយដៃ',
      'ខ្ចុះសម្រាកឯកជនមាត់ឆ្នេរ',
      'បារសុខភាពក្នុងបន្ទប់'
    ],
    description: 'Steps away from the soft powdery sand, this spacious suite merges natural raw teak, woven silks, and wide sliding doors opening onto your personal shaded beachfront patio.',
    description_km: 'ត្រឹមតែប៉ុន្មានជំហានពីឆ្នេរខ្សាច់ បន្ទប់ស្វីតធំទូលាយនេះរួមបញ្ចូលឈើប្រណីត សូត្រខ្មែរត្បាញដោយដៃ និងទ្វារកញ្ចក់រុញបើកទៅកាន់រានហាលមាត់ឆ្នេរផ្ទាល់ខ្លួន។',
    availableCount: 6
  },
  {
    id: 'room-siem-reap-pavilion',
    resortId: 'solara-siem-reap',
    resortName: 'Solara Heritage Forest Retreat',
    resortName_km: 'សូឡារ៉ា ហេរីថេច ហ្វ័ររ៉េស (សៀមរាប)',
    name: 'Lotus Garden Pavilion Suite',
    name_km: 'បន្ទប់ស្វីតពន្លាផ្កាឈូក (សៀមរាប)',
    type: 'Pavilion',
    type_km: 'ពន្លាព្រះរាជវាំង',
    pricePerNight: 340,
    capacity: { adults: 2, children: 1 },
    bedType: '1 King Heritage Four-Poster Bed',
    bedType_km: 'គ្រែស្តេចបុរាណខ្មែរ ១',
    sizeSqm: 115,
    view: 'Lush Botanical Water Gardens & Lotus Lagoon',
    view_km: 'សួនទឹកធម្មជាតិ & បឹងផ្កាឈូក',
    featuredImage: VILLA_IMAGE,
    gallery: [VILLA_IMAGE, SPA_IMAGE],
    amenities: [
      'Private Courtyard Reflection Pool',
      'Hand-Carved Stone Bath Tub',
      'Private Meditation Balcony',
      'Traditional Aromatherapy Setup',
      'Daily Temple Blessing Ritual Included',
      'Organic Herbal Tea Apothecary'
    ],
    amenities_km: [
      'អាងទឹកឆ្លុះស្រមោលឯកជនក្នុងទីធ្លា',
      'អាងត្រាំទឹកថ្មឆ្លាក់ដោយដៃ',
      'យ៉រឯកជនសម្រាប់ធ្វើសមាធិ',
      'ឧបករណ៍ប្រេងក្រអូបបុរាណ',
      'ពិធីស្រោចទឹកសុំសេចក្តីសុខប្រចាំថ្ងៃ',
      'តែឱសថរុក្ខជាតិសរីរាង្គ'
    ],
    description: 'Immersed in indigenous Cambodian fauna, this pavilion features private walled gardens, an ancient stone soaking tub, and traditional open-timber cathedral ceilings.',
    description_km: 'ស្ថិតនៅកណ្តាលព្រៃឈើធម្មជាតិខ្មែរ ពន្លានេះមានសួនផ្កាឯកជនព័ទ្ធជុំវិញដោយជញ្ជាំងថ្ម អាងត្រាំទឹកថ្មបុរាណ និងដំបូលឈើខ្ពស់ស្រឡះតាមក្បួនបុរាណ។',
    availableCount: 5
  },
  {
    id: 'room-siem-reap-royal-villa',
    resortId: 'solara-siem-reap',
    resortName: 'Solara Heritage Forest Retreat',
    resortName_km: 'សូឡារ៉ា ហេរីថេច ហ្វ័ររ៉េស (សៀមរាប)',
    name: 'Angkor Royal Pool Residence',
    name_km: 'វិឡារាជវាំងអង្គរ អាងហែលទឹកឯកជន',
    type: 'Villa',
    type_km: 'វិឡារាជវាំង',
    pricePerNight: 680,
    capacity: { adults: 4, children: 2 },
    bedType: '2 King Master Bedrooms',
    bedType_km: 'បន្ទប់គេងមេគ្រែស្តេច ២ បន្ទប់',
    sizeSqm: 240,
    view: 'Private Forest Canopy & Waterfall Pond',
    view_km: 'ព្រៃឈើធម្មជាតិ & ទឹកធ្លាក់ឯកជន',
    featuredImage: HERO_IMAGE,
    gallery: [HERO_IMAGE, SPA_IMAGE, VILLA_IMAGE],
    amenities: [
      'Private 12m Saltwater Lap Pool',
      'Two Independent Master En-Suites',
      'Open-Air Living & Dining Sala',
      'Private Chef Available Upon Request',
      'Personal Chauffeur and Concierge',
      'Complimentary 60-Min Daily Spa Treatment'
    ],
    amenities_km: [
      'អាងហែលទឹកទឹកប្រៃប្រវែង ១២ ម៉ែត្រ',
      'បន្ទប់គេងមេឯករាជ្យធំៗចំនួន ២',
      'សាលាទទួលភ្ញៀវ & បរិភោគអាហារលំហអាកាស',
      'ចុងភៅផ្ទាល់ខ្លួនតាមការស្នើសុំ',
      'តៃកុងរថយន្ត & ជំនួយការផ្ទាល់ខ្លួន',
      'សេវាស្ប៉ា ៦០ នាទីឥតគិតថ្លៃរាល់ថ្ងៃ'
    ],
    description: 'Designed for discerning families and private groups, featuring double master bedrooms, an expansive emerald pool, and a private Khmer dining pavilion surrounded by ancient flora.',
    description_km: 'រចនាឡើងសម្រាប់គ្រួសារ និងក្រុមភ្ញៀវកិត្តិយស មានបន្ទប់គេងមេធំៗចំនួន ២ អាងហែលទឹកពណ៌បៃតងត្បូងមរកត និងពន្លាពិសារអាហារឯកជនហ៊ុមព័ទ្ធដោយធម្មជាតិ។',
    availableCount: 2
  },
  {
    id: 'room-bokor-penthouse',
    resortId: 'solara-bokor-sky',
    resortName: 'Solara Mountain Sky Pavilion',
    resortName_km: 'សូឡារ៉ា ម៉ោនធែន ស្កាយ (បូកគោ)',
    name: 'Highland Cloud Penthouse',
    name_km: 'បន្ទប់ផេនហោស៍ជ្រលងពពក (បូកគោ)',
    type: 'Penthouse',
    type_km: 'ផេនហោស៍',
    pricePerNight: 420,
    capacity: { adults: 2, children: 0 },
    bedType: '1 King Feather-Top Bed',
    bedType_km: 'គ្រែស្តេច King Size រោមសត្វទន់ល្មើយ ១',
    sizeSqm: 130,
    view: 'Panoramic Cloud Valley & Gulf Coast',
    view_km: 'ជ្រលងពពក & ឆ្នេរសមុទ្រពីលើកំពូលភ្នំ',
    featuredImage: SPA_IMAGE,
    gallery: [SPA_IMAGE, HERO_IMAGE],
    amenities: [
      'Real Wood-Burning Brick Fireplace',
      'Panoramic Heated Jacuzzi on Terrace',
      'Cashmere Blankets & Warm Throws',
      'Private Telescope for Stargazing',
      'Artisanal Whiskey & Cognac Decanter',
      'Floor Heating in Marble Bathroom'
    ],
    amenities_km: [
      'ចង្ក្រានកម្តៅដុតអុសពិតប្រាកដ',
      'អាង Jacuzzi ទឹកក្តៅលើរានហាលមើលពពក',
      'ភួយរោមចៀម Cashmere ដ៏កក់ក្តៅ',
      'តេឡេទស្សន៍ឯកជនសម្រាប់មើលផ្កាយ',
      'ស្រាវីស្គី & កូញាក់សិប្បកម្ម',
      'ប្រព័ន្ធកម្តៅកម្រាលបន្ទប់ទឹកថ្មម៉ាប'
    ],
    description: 'Perched on the highest wing of the historic pavilion, featuring wrap-around balcony vistas, an outdoor heated jacuzzi, and a crackling fireplace to warm crisp mountain evenings.',
    description_km: 'ស្ថិតនៅលើជាន់ខ្ពស់បំផុតនៃអគារប្រវត្តិសាស្ត្រ មានយ៉រព័ទ្ធជុំវិញទស្សនាពពក អាងទឹកក្តៅ Jacuzzi ក្រៅផ្ទះ និងចង្ក្រានអុសកក់ក្តៅសម្រាប់រាត្រីដ៏ត្រជាក់លើភ្នំ។',
    availableCount: 3
  },
  {
    id: 'room-kep-pool-villa',
    resortId: 'solara-kep-bay',
    resortName: 'Solara Kep Bay Seaside Villas',
    resortName_km: 'សូឡារ៉ា កែបបេយ៍ ស៊ីសាយ (ឆ្នេរកែប)',
    name: 'Sunset Coastline Pool Villa',
    name_km: 'វីឡាអាងហែលទឹកមាត់ឆ្នេរថ្ងៃលិច (កែប)',
    type: 'Villa',
    type_km: 'វីឡាឯកជន',
    pricePerNight: 390,
    capacity: { adults: 2, children: 1 },
    bedType: '1 King Bed',
    bedType_km: 'គ្រែស្តេច King Size ១',
    sizeSqm: 125,
    view: 'Direct Sunset Bay & Islands',
    view_km: 'ទិដ្ឋភាពថ្ងៃលិចលើសមុទ្រ & កោះនានា',
    featuredImage: DINING_IMAGE,
    gallery: [DINING_IMAGE, VILLA_IMAGE],
    amenities: [
      'Private Infinity Sunset Pool',
      'Shaded Daybed Pergola',
      'Al-Fresco Dining Terrace',
      'Outdoor Stone Tub Overlooking Sea',
      'Complimentary Daily Oyster & Wine Sunset Hour'
    ],
    amenities_km: [
      'អាងហែលទឹកឯកជនមើលឃើញថ្ងៃលិច',
      'គ្រែគេងលំហែកាយក្រោមម្លប់ pergola',
      'រានហាលទទួលទានអាហារលំហអាកាស',
      'អាងត្រាំទឹកថ្មក្រៅផ្ទះមើលឃើញសមុទ្រ',
      'កម្មវិធីស្រា & គ្រំសមុទ្រពេលថ្ងៃលិចឥតគិតថ្លៃ'
    ],
    description: 'Facing due west toward the golden Cambodian sunset, this private villa offers an intimate pool sanctuary surrounded by fragrant frangipani and night-blooming jasmine.',
    description_km: 'បែរមុខទៅទិសខាងលិចចំទិដ្ឋភាពថ្ងៃលិចពណ៌មាស វីឡាឯកជននេះផ្តល់ជូនអាងហែលទឹកដ៏ស្ងប់ស្ងាត់ ព័ទ្ធជុំវិញដោយក្លិនក្រអូបនៃផ្កាចម្ប៉ា និងផ្កាម្លិះ។',
    availableCount: 4
  },
  {
    id: 'room-mekong-suite',
    resortId: 'solara-mekong-oasis',
    resortName: 'Solara Mekong Royal Estate',
    resortName_km: 'សូឡារ៉ា មេគង្គ រ៉ូយ៉ាល់ (ភ្នំពេញ)',
    name: 'Riverside Diplomatic Suite',
    name_km: 'បន្ទប់ស្វីតការទូតមាត់ទន្លេ (ភ្នំពេញ)',
    type: 'Suite',
    type_km: 'បន្ទប់ស្វីត',
    pricePerNight: 350,
    capacity: { adults: 2, children: 1 },
    bedType: '1 King Master Bed',
    bedType_km: 'គ្រែស្តេច King Master ១',
    sizeSqm: 98,
    view: 'Mekong River Confluence & City Skyline',
    view_km: 'ទន្លេមេគង្គ & ទិដ្ឋភាពទីក្រុងភ្នំពេញ',
    featuredImage: HERO_IMAGE,
    gallery: [HERO_IMAGE, DINING_IMAGE],
    amenities: [
      'Private Riverfront Terrace',
      'Executive Working Study',
      'Italian Marble Dual Vanity & Tub',
      'Club Lounge Access with Canapes',
      'VIP Airport Limousine Transfer'
    ],
    amenities_km: [
      'យ៉រឯកជនទស្សនាទន្លេមេគង្គ',
      'បន្ទប់ធ្វើការប្រណីតកម្រិតថ្នាក់ដឹកនាំ',
      'បន្ទប់ទឹកថ្មម៉ាបអ៊ីតាលីជាមួយអាងត្រាំទឹក',
      'សិទ្ធិចូលប្រើ Club Lounge ជាមួយអាហារសម្រន់',
      'សេវាជូនដំណើរពីព្រលានយន្តហោះដោយរថយន្ត VIP'
    ],
    description: 'An elegant retreat for travelers seeking quiet luxury near the capital, featuring private riverfront balconies, tailored workspace, and bespoke butler service.',
    description_km: 'កន្លែងសម្រាកដ៏ប្រណីតសម្រាប់ភ្ញៀវដែលស្វែងរកភាពស្ងប់ស្ងាត់នៅក្បែររាជធានី មានយ៉រមាត់ទន្លេឯកជន បន្ទប់ធ្វើការ និងសេវាជំនួយការផ្ទាល់ខ្លួន។',
    availableCount: 5
  }
];

export const ACTIVITIES = [
  {
    id: 'act-catamaran-sunset',
    title: 'Private Catamaran Sunset Cruise',
    title_km: 'ដំណើរកម្សាន្តជិះទូកកាតាម៉ារ៉ានឯកជនពេលថ្ងៃលិច',
    category: 'Ocean & Water',
    category_km: 'សមុទ្រ & ទឹក',
    duration: '3.5 Hours',
    duration_km: '៣ ម៉ោងកន្លះ',
    pricePerPerson: 110,
    description: 'Sail the calm waters of the Gulf of Thailand aboard Solara’s private twin-hull yacht, complete with chilled champagne, fresh oysters, and golden hour views.',
    description_km: 'ជិះទូកកាតាម៉ារ៉ានភ្លោះឯកជនលើផ្ទៃសមុទ្រដ៏ស្ងប់ស្ងាត់ រីករាយជាមួយស្រាសំប៉ាញត្រជាក់ គ្រំសមុទ្រស្រស់ៗ និងទិដ្ឋភាពថ្ងៃលិចពណ៌មាស។',
    image: HERO_IMAGE,
    schedule: 'Daily at 4:30 PM',
    schedule_km: 'រៀងរាល់ថ្ងៃ ម៉ោង ៤:៣០ រសៀល'
  },
  {
    id: 'act-angkor-sunrise',
    title: 'Secret Angkor Dawn & Temple Meditation',
    title_km: 'ទស្សនាថ្ងៃរះនៅអង្គរ & ពិធីសមាធិមុខប្រាសាទបុរាណ',
    category: 'Culture & Culinary',
    category_km: 'វប្បធម៌ & ម្ហូបអាហារ',
    duration: '4 Hours',
    duration_km: '៤ ម៉ោង',
    pricePerPerson: 95,
    description: 'Experience Angkor Wat as the first rays of light touch the ancient spires, followed by a monk water blessing and champagne picnic breakfast in the forest.',
    description_km: 'គយគន់សម្រស់ប្រាសាទអង្គរវត្តពេលពន្លឺព្រះអាទិត្យដំបូងចាំងលើកំពូលប្រាសាទ បន្តដោយពិធីស្រោចទឹកសុំសេចក្តីសុខពីព្រះសង្ឃ និងអាហារពេលព្រឹកកណ្តាលព្រៃ។',
    image: VILLA_IMAGE,
    schedule: 'Daily at 5:00 AM',
    schedule_km: 'រៀងរាល់ថ្ងៃ ម៉ោង ៥:០០ ព្រឹក'
  },
  {
    id: 'act-coral-dive',
    title: 'Pristine Atoll Snorkel & Coral Safari',
    title_km: 'មុជទឹកមើលផ្កាថ្មធម្មជាតិ & ជីវិតសត្វសមុទ្រកម្រ',
    category: 'Ocean & Water',
    category_km: 'សមុទ្រ & ទឹក',
    duration: '3 Hours',
    duration_km: '៣ ម៉ោង',
    pricePerPerson: 75,
    description: 'Guided by our resident marine biologist, explore protected coral gardens teeming with seahorses, sea turtles, and vibrant schools of tropical fish.',
    description_km: 'ដឹកនាំដោយអ្នកជំនាញជីវសាស្ត្រសមុទ្រ រុករកសួនផ្កាថ្មធម្មជាតិដែលសំបូរទៅដោយសេះសមុទ្រ អណ្តើកសមុទ្រ និងហ្វូងត្រីចម្រុះពណ៌។',
    image: HERO_IMAGE,
    schedule: 'Tues, Thurs, Sat at 9:30 AM',
    schedule_km: 'អង្គារ, ព្រហស្បតិ៍, សៅរ៍ ម៉ោង ៩:៣០ ព្រឹក'
  },
  {
    id: 'act-khmer-culinary',
    title: 'Royal Khmer Masterclass with Executive Chef',
    title_km: 'រៀនធ្វើម្ហូបព្រះរាជវាំងខ្មែរជាមួយមេចុងភៅជំនាញ',
    category: 'Culture & Culinary',
    category_km: 'វប្បធម៌ & ម្ហូបអាហារ',
    duration: '3 Hours',
    duration_km: '៣ ម៉ោង',
    pricePerPerson: 85,
    description: 'Harvest fresh herbs from the organic estate gardens, pound authentic lemongrass paste (kroeung), and prepare traditional fish amok and banana blossom salad.',
    description_km: 'បេះបន្លែស្រស់ៗពីចម្ការសរីរាង្គ បុកគ្រឿងស្លឹកគ្រៃខ្មែរពិតៗ និងរៀនចម្អិនអាម៉ុកត្រីបែបបុរាណព្រមទាំងញាំផ្កាចេក។',
    image: DINING_IMAGE,
    schedule: 'Daily at 10:30 AM',
    schedule_km: 'រៀងរាល់ថ្ងៃ ម៉ោង ១០:៣០ ព្រឹក'
  },
  {
    id: 'act-sound-bath',
    title: 'Tibetan Singing Bowl & Lotus Sound Bath',
    title_km: 'សម្រួលអារម្មណ៍ដោយរលកសំឡេងត្រែទីបេលើបឹងឈូក',
    category: 'Wellness & Spa',
    category_km: 'សុខុមាលភាព & ស្ប៉ា',
    duration: '90 Minutes',
    duration_km: '៩០ នាទី',
    pricePerPerson: 55,
    description: 'Realign your mind and spirit with harmonic resonance frequencies beside a tranquil lotus pool, led by our certified mindfulness master.',
    description_km: 'សម្រួលចិត្ត និងស្មារតីជាមួយរលកសំឡេងរំញ័រដ៏ពិរោះរណ្តំក្បែរបឹងផ្កាឈូក ដឹកនាំដោយគ្រូជំនាញកម្មវិធីសមាធិ។',
    image: SPA_IMAGE,
    schedule: 'Mon, Wed, Fri, Sun at 5:30 PM',
    schedule_km: 'ចន្ទ, ពុធ, សុក្រ, អាទិត្យ ម៉ោង ៥:៣០ ល្ងាច'
  },
  {
    id: 'act-mountain-trek',
    title: 'Bokor Mist Waterfall & Forest Canopy Trek',
    title_km: 'ដើរព្រៃទស្សនាទឹកធ្លាក់ & អ័ព្ទត្រជាក់លើភ្នំបូកគោ',
    category: 'Expedition',
    category_km: 'ដំណើរផ្សងព្រេង',
    duration: '4.5 Hours',
    duration_km: '៤ ម៉ោងកន្លះ',
    pricePerPerson: 65,
    description: 'A moderate guided nature trek discovering hidden mountain waterfalls, rare pitcher plants, and historic French hill-station viewpoints.',
    description_km: 'ដំណើរដើរព្រៃកម្សាន្តទស្សនាទឹកធ្លាក់លាក់ខ្លួនលើកំពូលភ្នំ រុក្ខជាតិកម្រ និងចំណុចមើលទេសភាពប្រវត្តិសាស្ត្រសម័យបារាំង។',
    image: SPA_IMAGE,
    schedule: 'Wed & Sat at 8:00 AM',
    schedule_km: 'ពុធ & សៅរ៍ ម៉ោង ៨:០០ ព្រឹក'
  }
];

export const SERVICES = [
  {
    id: 'srv-spa',
    title: 'Celestial Lotus Spa & Wellness Sanctuary',
    title_km: 'ស្ប៉ាផ្កាឈូកទិព្វ & ជម្រកសុខុមាលភាព',
    tagline: 'Ancient Khmer herbal remedies meet contemporary holistic therapies',
    tagline_km: 'ឱសថបុរាណខ្មែររួមបញ្ចូលជាមួយការព្យាបាលសុខភាពបែបទំនើប',
    description: 'Our world-renowned wellness sanctuary harnesses cold-pressed coconut oils, organic wild turmeric, and centuries-old therapeutic traditions across private open-air treatment pavilions.',
    description_km: 'ជម្រកស្ប៉ាលំដាប់ពិភពលោករបស់យើងប្រើប្រាស់ប្រេងដូងត្រជាក់ រមៀតព្រៃសរីរាង្គ និងក្បួនម៉ាស្សាបុរាណខ្មែររាប់រយឆ្នាំ នៅក្នុងពន្លាព្យាបាលលំហអាកាសឯកជន។',
    iconName: 'Sparkles',
    image: SPA_IMAGE,
    features: [
      'Signature 90-minute Herbal Compress Massage',
      'Private Couples Spa Suites with Outdoor Baths',
      'Detoxifying Himalayan Salt Sauna',
      'Organic Botanical Facial Treatments'
    ],
    features_km: [
      'ម៉ាស្សាស្អំស្មៅឱសថបុរាណ ៩០ នាទី',
      'បន្ទប់ស្ប៉ាគូស្នេហ៍ឯកជនជាមួយអាងត្រាំទឹកក្រៅផ្ទះ',
      'បន្ទប់សូណាអំបិលហិម៉ាល័យបន្សាបជាតិពុល',
      'ថែរក្សាស្បែកមុខដោយរុក្ខជាតិសរីរាង្គ'
    ]
  },
  {
    id: 'srv-butler',
    title: 'Dedicated Butler & Concierge Guild',
    title_km: 'ជំនួយការផ្ទាល់ខ្លួន & ក្រុមសម្របសម្រួល VIP',
    tagline: 'Attentive, discreet, and anticipatory service at all hours',
    tagline_km: 'សេវាកម្មរហ័សទាន់ចិត្ត យកចិត្តទុកដាក់ និងគិតគូរជាមុនគ្រប់ពេលវេលា',
    description: 'Every villa and suite is paired with an expertly trained personal butler to unpack luggage, arrange private dining, prepare sunset baths, and curate seamless excursions.',
    description_km: 'រាល់វីឡា និងបន្ទប់ស្វីតនីមួយៗសុទ្ធតែមានជំនួយការផ្ទាល់ខ្លួនប្រចាំការ ដើម្បីរៀបចំវ៉ាលីស រៀបចំអាហារឯកជន ត្រៀមអាងទឹកពេលថ្ងៃលិច និងរៀបចំដំណើរកម្សាន្ត។',
    iconName: 'Bell',
    image: VILLA_IMAGE,
    features: [
      '24-Hour Instant WhatsApp / In-Room Butler Access',
      'Unpacking & Garment Pressing Upon Arrival',
      'Bespoke Itinerary & Private Transport Coordination',
      'Private In-Villa Candlelight Dinners'
    ],
    features_km: [
      'ទាក់ទងជំនួយការផ្ទាល់ខ្លួនតាម WhatsApp ២៤ ម៉ោង',
      'ជួយរៀបចំអីវ៉ាន់ & អ៊ុតសម្លៀកបំពាក់ពេលមកដល់',
      'រៀបចំកាលវិភាគកម្សាន្ត & មធ្យោបាយធ្វើដំណើរឯកជន',
      'រៀបចំអាហារពេលល្ងាចរ៉ូមែនទិកអុជទៀនក្នុងវីឡា'
    ]
  },
  {
    id: 'srv-transfer',
    title: 'VIP Chauffeur & High-Speed Yacht Fleet',
    title_km: 'សេវារថយន្ត VIP & កងអូប័រល្បឿនលឿនឯកជន',
    tagline: 'Your arrival begins the second you touch down in Cambodia',
    tagline_km: 'ការស្វាគមន៍ចាប់ផ្តើមតាំងពីវិនាទីដំបូងដែលលោកអ្នកមកដល់កម្ពុជា',
    description: 'From luxury Mercedes-Benz airport transfers to our high-speed private maritime fleet, transit between city, airport, and island is as relaxing as the stay itself.',
    description_km: 'ចាប់ពីរថយន្តទំនើប Mercedes-Benz ទទួលពីព្រលានយន្តហោះ រហូតដល់កងអូប័រល្បឿនលឿនឯកជន ការធ្វើដំណើរទៅកាន់រមណីយដ្ឋានគឺប្រកបដោយផាសុកភាពខ្ពស់បំផុត។',
    iconName: 'Compass',
    image: HERO_IMAGE,
    features: [
      'Fast-Track VIP Airport Immigration Escort',
      'Climate-Controlled Luxury Fleet with Wi-Fi & Refreshments',
      'High-Speed Private Speedboat Island Connections',
      'Helicopter Charter Connections on Request'
    ],
    features_km: [
      'សេវាសម្រួលទិដ្ឋាការ VIP នៅព្រលានយន្តហោះ',
      'រថយន្តទំនើបមាន Wi-Fi និងភេសជ្ជៈសម្រន់',
      'អូប័រល្បឿនលឿនឯកជនទៅមកកោះ',
      'សេវាជួលឧទ្ធម្ភាគចក្រតាមការស្នើសុំ'
    ]
  },
  {
    id: 'srv-dining',
    title: 'Bespoke Destination & Beach Dining',
    title_km: 'អាហាររ៉ូមែនទិកមាត់ឆ្នេរ & កន្លែងពិសេសៗ',
    tagline: 'Dining elevated to an unforgettable sensorial experience',
    tagline_km: 'លើកកម្ពស់រសជាតិអាហារទៅជាបទពិសោធន៍ដែលមិនអាចបំភ្លេចបាន',
    description: 'Whether a candlelit table setup directly on the sandbar under the Milky Way or a private banquet beside ancient temple ruins, our culinary team creates magic.',
    description_km: 'មិនថាជាការរៀបចំតុអាហារអុជទៀនផ្ទាល់លើឆ្នេរខ្សាច់ក្រោមមេឃស្រឡះ ឬពិធីលៀងសាយភោជន៍ឯកជនក្បែរប្រាសាទបុរាណ ក្រុមមេចុងភៅរបស់យើងនឹងបង្កើតទិដ្ឋភាពដ៏អស្ចារ្យ។',
    iconName: 'UtensilsCrossed',
    image: DINING_IMAGE,
    features: [
      'Sandbank Twilight Dinners with Private Chef',
      'Starlight Champagne & Caviar Tastings',
      'Organic Farm-to-Table Tasting Menus',
      'Sommelier-Curated Vintage Cellar Pairings'
    ],
    features_km: [
      'អាហារពេលល្ងាចលើវាលខ្សាច់ជាមួយចុងភៅផ្ទាល់ខ្លួន',
      'ពិសាសំប៉ាញ & ពងត្រីកាវីយ៉ាក្រោមពន្លឺផ្កាយ',
      'មុខម្ហូបពិសេសច្នៃពីបន្លែសរីរាង្គស្រស់ៗ',
      'ស្រាក្រហម & ស្រាសល្បីៗផ្គួបជាមួយមុខម្ហូប'
    ]
  }
];

export const DINING_VENUES = [
  {
    id: 'dine-azure',
    name: 'The Azure Wave Coastal Grill',
    name_km: 'ភោជនីយដ្ឋាន អាសួរ វ៉េវ (មាត់សមុទ្រ)',
    cuisine: 'Modern Seafood & Contemporary Coastal',
    cuisine_km: 'គ្រឿងសមុទ្រទំនើប & ម្ហូបឆ្នេរអន្តរជាតិ',
    hours: '12:00 PM – 10:30 PM',
    hours_km: '១២:០០ ថ្ងៃត្រង់ – ១០:៣០ យប់',
    dressCode: 'Resort Elegant',
    dressCode_km: 'សម្លៀកបំពាក់សមរម្យបែបវិស្សមកាល',
    description: 'Directly overlooking the moonlit ocean, The Azure Wave showcases line-caught Andaman and Gulf seafood grilled over native coconut husk coals, paired with vintage champagnes and chilled crisp whites.',
    description_km: 'មើលឃើញផ្ទាល់ទៅកាន់មហាសមុទ្រក្រោមពន្លឺព្រះច័ន្ទ ភោជនីយដ្ឋាននេះផ្តល់ជូនគ្រឿងសមុទ្រស្រស់ៗអាំងលើធ្យូងស្រកីដូងធម្មជាតិ ជាមួយស្រាសំប៉ាញល្បីៗ។',
    image: DINING_IMAGE,
    signatureDish: 'Whole Roasted Kampot Red Snapper in Banana Leaf with Lemongrass & Green Pepper Jus',
    signatureDish_km: 'ត្រីក្រហមដុតស្លឹកចេកគ្រឿងស្លឹកគ្រៃ និងទឹកជ្រលក់ម្រេចខ្ចីកំពត',
    priceLevel: '$$$'
  },
  {
    id: 'dine-saffron',
    name: 'Saffron & Spice Royal Pavilion',
    name_km: 'ភោជនីយដ្ឋាន សាព្រ៉ុន & ស្ប៉ាយស៍ (ព្រះរាជវាំង)',
    cuisine: 'Authentic Heritage Khmer & Indochine',
    cuisine_km: 'ម្ហូបព្រះរាជវាំងបុរាណខ្មែរ & ឥណ្ឌូចិន',
    hours: '6:30 AM – 11:00 AM | 6:00 PM – 10:00 PM',
    hours_km: '៦:៣០ ព្រឹក – ១១:០០ ព្រឹក | ៦:០០ ល្ងាច – ១០:០០ យប់',
    dressCode: 'Smart Casual',
    dressCode_km: 'សម្លៀកបំពាក់សមរម្យ',
    description: 'A culinary homage to Cambodia’s royal courts. Traditional clay-oven techniques, fresh pressed coconut milk, wild mountain herbs, and time-honored recipes passed down through generations.',
    description_km: 'ការចម្អិនផ្ចិតផ្ចង់តាមរូបមន្តព្រះបរមរាជវាំងខ្មែរ ដោយប្រើឡដីដុតបុរាណ ខ្ទិះដូងច្របាច់ស្រស់ៗ គ្រឿងផ្សំឱសថព្រៃ និងរូបមន្តដូនតាដែលរក្សាទុកច្រើនជំនាន់។',
    image: VILLA_IMAGE,
    signatureDish: 'Steamed Wild River Fish Amok in Young Coconut with Kaffir Lime & Turmeric Caviar',
    signatureDish_km: 'អាម៉ុកត្រីដងទន្លេក្នុងផ្លែដូងខ្ចី ជាមួយស្លឹកក្រូចសើច និងរមៀតស្រស់',
    priceLevel: '$$$'
  },
  {
    id: 'dine-horizon',
    name: 'Horizon Starlight Cocktail Lounge',
    name_km: 'ហោរ៉ាយហ្សុន ស្កាយបារ (ថ្ងៃលិច & ផ្កាយ)',
    cuisine: 'Artisanal Mixology, Raw Bar & Tapas',
    cuisine_km: 'ស្រាក្រឡុកសិប្បកម្ម, អាហារសម្រន់ & Tapas',
    hours: '4:00 PM – 12:00 AM',
    hours_km: '៤:០០ រសៀល – ១២:០០ យប់',
    dressCode: 'Resort Casual',
    dressCode_km: 'សម្លៀកបំពាក់ស្រួលៗ',
    description: 'The premier sunset viewing lounge, where master mixologists blend native botanicals, aged rums, and infused syrups with 360-degree views of the sea and starlit sky.',
    description_km: 'កន្លែងគយគន់ថ្ងៃលិចដ៏ល្បីល្បាញ ដែលអ្នកក្រឡុកស្រាជំនាញច្នៃស្រាពីផ្កាព្រៃធម្មជាតិ ស្រារ៉ុម និងទឹកស៊ីរ៉ូពិសេស ជាមួយទេសភាព ៣៦០ ដឺក្រេនៃផ្ទៃសមុទ្រ។',
    image: HERO_IMAGE,
    signatureDish: 'Kep Crab & Avocado Brioche with Kaffir-Lime Ponzu & Handcrafted Tamarind Smoked Negroni',
    signatureDish_km: 'នំបុ័ងសាច់ក្តាមកែប & ផ្លែប៊ឺ ជាមួយស្រាក្រឡុកអំពិលទុំផ្សែងក្រអូប',
    priceLevel: '$$'
  },
  {
    id: 'dine-botanica',
    name: 'Botanica Poolside Bistro',
    name_km: 'បូតានីកា ប៊ីស្ត្រូ (មាត់អាងហែលទឹក)',
    cuisine: 'Wood-fired Flatbreads, Bowls & Cold-Pressed Elixirs',
    cuisine_km: 'នំភីហ្សាឡអុស, សាឡាដ & ទឹកផ្លែឈើស្រស់',
    hours: '10:00 AM – 7:00 PM',
    hours_km: '១០:០០ ព្រឹក – ៧:០០ យប់',
    dressCode: 'Swimwear with Cover-up',
    dressCode_km: 'សម្លៀកបំពាក់ហែលទឹកជាមួយអាវក្រៅ',
    description: 'Casual, sunny dining on cushioned teak loungers beside the infinity pool. Fresh wood-fired sourdough pizzas, crisp organic salads, and restorative tropical fruit elixirs.',
    description_km: 'អាហារសម្រន់ក្បែរអាងហែលទឹក ជាមួយនំភីហ្សាដុតឡអុសក្តៅៗ សាឡាដបន្លែស្រស់ៗ និងទឹកផ្លែឈើស្រស់ត្រជាក់បំបាត់ការស្រេកទឹក។',
    image: SPA_IMAGE,
    signatureDish: 'Wood-Oven Burrata & Fig Flatbread with Kampot Black Pepper Honey',
    signatureDish_km: 'នំបុ័ងដុតឡអុសជាមួយឈីស Burrata ផ្លែល្វា និងទឹកឃ្មុំម្រេចកំពត',
    priceLevel: '$$'
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Eleanor & Marcus Vance',
    country: 'United Kingdom',
    country_km: 'ចក្រភពអង់គ្លេស',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'February 2026',
    title: 'A transformative paradise beyond imagination',
    title_km: 'ឋានសួគ៌ដ៏អស្ចារ្យលើសពីការរំពឹងទុក',
    comment: 'From the moment our private speedboat arrived at Solara Grand Ocean, we were spellbound. The overwater bungalow is sheer architectural poetry. Waking up to the turquoise sea and having our butler Chan arrange a sunset picnic made our 15th anniversary unforgettable.',
    comment_km: 'ចាប់ពីពេលដែលអូប័រឯកជនរបស់យើងមកដល់រមណីយដ្ឋាន សូឡារ៉ា យើងពិតជាភ្ញាក់ផ្អើលយ៉ាងខ្លាំង។ បឹងហ្គាឡូលើទឹកគឺដូចជាស្នាដៃកំណាព្យ។ ភ្ញាក់ឡើងឃើញទឹកសមុទ្រខៀវស្រងាត់ និងមានជំនួយការផ្ទាល់ខ្លួនរៀបចំអាហារថ្ងៃលិច ធ្វើឱ្យខួបអាពាហ៍ពិពាហ៍ ១៥ ឆ្នាំរបស់យើងមិនអាចបំភ្លេចបាន។',
    stayType: 'Couple · Romantic Retreat · 5 Nights',
    stayType_km: 'គូស្នេហ៍ · ដំណើរកម្សាន្តរ៉ូមែនទិក · ៥ យប់'
  },
  {
    id: 'rev-2',
    author: 'Jean-Luc Dubois',
    country: 'France',
    country_km: 'ប្រទេសបារាំង',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'January 2026',
    title: 'Exceptional gastronomy and soulful tranquility',
    title_km: 'ម្ហូបអាហារឆ្ងាញ់ពិសា និងភាពស្ងប់ស្ងាត់នៃផ្លូវចិត្ត',
    comment: 'The balance between world-class culinary finesse at The Azure Wave and the spiritual peace of the Lotus Spa is unmatched. The staff anticipate your every desire with genuine warmth.',
    comment_km: 'ភាពស៊ីសង្វាក់គ្នារវាងរសជាតិម្ហូបដ៏ឆ្ងាញ់នៅភោជនីយដ្ឋាន និងភាពស្ងប់ស្ងាត់នៅស្ប៉ាផ្កាឈូកទិព្វ គឺគ្មានកន្លែងណាប្រៀបបានឡើយ។ បុគ្គលិកទាំងអស់បម្រើសេវាកម្មដោយស្នាមញញឹម និងការយកចិត្តទុកដាក់ខ្ពស់។',
    stayType: 'Solo Traveler · Wellness Stay · 4 Nights',
    stayType_km: 'ភ្ញៀវម្នាក់ឯង · ថែទាំសុខភាព · ៤ យប់'
  },
  {
    id: 'rev-3',
    author: 'David & Sophia Chen',
    country: 'Singapore',
    country_km: 'ប្រទេសសិង្ហបុរី',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'March 2026',
    title: 'The gold standard of Southeast Asian luxury',
    title_km: 'ស្តង់ដារមាសនៃបដិសណ្ឋារកិច្ចប្រណីតនៅអាស៊ីអាគ្នេយ៍',
    comment: 'We stayed at both the Siem Reap Heritage Forest and the Koh Rong Ocean Sanctuary. Seamless transfers, immaculate villas, and the private temple dawn meditation will stay with our family forever.',
    comment_km: 'យើងបានស្នាក់នៅទាំងនៅសៀមរាប និងនៅកោះរ៉ុង។ ការធ្វើដំណើរងាយស្រួល វីឡាស្អាតឥតខ្ចោះ និងកម្មវិធីសមាធិមុខប្រាសាទបុរាណពេលព្រឹកព្រលឹម នឹងដក់ជាប់ក្នុងបេះដូងក្រុមគ្រួសារយើងជារៀងរហូត។',
    stayType: 'Family Vacation · 7 Nights',
    stayType_km: 'វិស្សមកាលគ្រួសារ · ៧ យប់'
  }
];

export const SAMPLE_BOOKINGS = [
  {
    id: 'SOL-882914',
    bookingDate: '2026-09-12',
    resortId: 'solara-grand-ocean',
    resortName: 'Solara Grand Ocean Sanctuary',
    roomId: 'room-grand-ocean-villa',
    roomName: 'Oceanfront Royal Pool Villa',
    roomImage: VILLA_IMAGE,
    checkIn: '2026-10-15',
    checkOut: '2026-10-18',
    nights: 3,
    guests: { adults: 2, children: 0, rooms: 1 },
    pricing: {
      baseRate: 580,
      nightsTotal: 1740,
      serviceFee: 174,
      tax: 191.4,
      totalUSD: 2105.4,
      totalKHR: 8632140
    },
    guestInfo: {
      firstName: 'Sokhy',
      lastName: 'Vann',
      email: 'sokhyvann29@gmail.com',
      phone: '+855 12 345 678',
      specialRequests: 'High floor villa with sunset orientation, please arrange airport speedboat pickup.',
      arrivalTime: '14:00'
    },
    paymentMethod: 'khqr',
    paymentStatus: 'paid',
    status: 'confirmed'
  },
  {
    id: 'SOL-614092',
    bookingDate: '2026-08-04',
    resortId: 'solara-siem-reap',
    resortName: 'Solara Heritage Forest Retreat',
    roomId: 'room-siem-reap-pavilion',
    roomName: 'Lotus Garden Pavilion Suite',
    roomImage: VILLA_IMAGE,
    checkIn: '2026-11-20',
    checkOut: '2026-11-23',
    nights: 3,
    guests: { adults: 2, children: 1, rooms: 1 },
    pricing: {
      baseRate: 340,
      nightsTotal: 1020,
      serviceFee: 102,
      tax: 112.2,
      totalUSD: 1234.2,
      totalKHR: 5060220
    },
    guestInfo: {
      firstName: 'Sokhy',
      lastName: 'Vann',
      email: 'sokhyvann29@gmail.com',
      phone: '+855 12 345 678',
      specialRequests: 'Include early sunrise monk water blessing ceremony.',
      arrivalTime: '15:30'
    },
    paymentMethod: 'card',
    paymentStatus: 'paid',
    status: 'confirmed'
  }
];

export const SAMPLE_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'Speedboat Transfer Scheduled',
    title_km: 'កាលវិភាគអូប័រល្បឿនលឿនត្រូវបានរៀបចំ',
    message: 'Your private maritime transfer for Koh Rong sanctuary residency is confirmed for 14:00 from Sihanoukville Port.',
    message_km: 'ការធ្វើដំណើរតាមផ្លូវទឹកឯកជនទៅកាន់រមណីយដ្ឋានកោះរ៉ុង ត្រូវបានកំណត់ម៉ោង ២:០០ រសៀល ពីកំពង់ផែខេត្តព្រះសីហនុ។',
    date: '2 hours ago',
    date_km: '២ ម៉ោងមុន',
    read: false,
    type: 'travel'
  },
  {
    id: 'notif-2',
    title: 'Gold Tier Privilege Unlocked',
    title_km: 'ទទួលបានអត្ថប្រយោជន៍សមាជិក Gold VIP',
    message: 'Complimentary 60-minute couples massage credit has been loaded to your resident folio.',
    message_km: 'សិទ្ធិម៉ាស្សាគូស្នេហ៍ ៦០ នាទីឥតគិតថ្លៃ ត្រូវបានបញ្ចូលទៅក្នុងគណនីសមាជិករបស់អ្នក។',
    date: '1 day ago',
    date_km: '១ ថ្ងៃមុន',
    read: true,
    type: 'privilege'
  }
];

export { KHR_RATE, formatCurrency, calculateNights } from '../util/currency.js';

/**
 * Universal localizer helper for resorts, rooms, activities, services, dining, and reviews
 */
export function localize(item, lang = 'en') {
  if (!item || lang !== 'km') return item;
  
  const mapped = { ...item };
  if (item.name_km) mapped.name = item.name_km;
  if (item.title_km) mapped.title = item.title_km;
  if (item.tagline_km) mapped.tagline = item.tagline_km;
  if (item.description_km) mapped.description = item.description_km;
  if (item.subtitle_km) mapped.subtitle = item.subtitle_km;
  if (item.location_km) mapped.location = item.location_km;
  if (item.destination_km) mapped.destination = item.destination_km;
  if (item.badge_km) mapped.badge = item.badge_km;
  if (item.type_km) mapped.type = item.type_km;
  if (item.bedType_km) mapped.bedType = item.bedType_km;
  if (item.view_km) mapped.view = item.view_km;
  if (item.cuisine_km) mapped.cuisine = item.cuisine_km;
  if (item.category_km) mapped.category = item.category_km;
  if (item.duration_km) mapped.duration = item.duration_km;
  if (item.schedule_km) mapped.schedule = item.schedule_km;
  if (item.hours_km) mapped.hours = item.hours_km;
  if (item.signatureDish_km) mapped.signatureDish = item.signatureDish_km;
  if (item.dressCode_km) mapped.dressCode = item.dressCode_km;
  if (item.amenities_km && Array.isArray(item.amenities_km)) mapped.amenities = item.amenities_km;
  if (item.features_km && Array.isArray(item.features_km)) mapped.features = item.features_km;
  if (item.comment_km) mapped.comment = item.comment_km;
  if (item.stayType_km) mapped.stayType = item.stayType_km;
  if (item.country_km) mapped.country = item.country_km;
  if (item.resortName_km) mapped.resortName = item.resortName_km;
  if (item.message_km) mapped.message = item.message_km;
  return mapped;
}

export function getLocalizedDestinations(lang) {
  return DESTINATIONS.map((d) => localize(d, lang));
}

export function getLocalizedResorts(lang) {
  return RESORTS.map((r) => localize(r, lang));
}

export function getLocalizedRooms(lang) {
  return ROOMS.map((r) => localize(r, lang));
}

export function getLocalizedActivities(lang) {
  return ACTIVITIES.map((a) => localize(a, lang));
}

export function getLocalizedServices(lang) {
  return SERVICES.map((s) => localize(s, lang));
}

export function getLocalizedDining(lang) {
  return DINING_VENUES.map((d) => localize(d, lang));
}

export function getLocalizedReviews(lang) {
  return REVIEWS.map((r) => localize(r, lang));
}
