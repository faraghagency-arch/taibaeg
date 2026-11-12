/**
 * TAIBA | طيبة - Core TypeScript Definitions
 */

export type Language = 'ar' | 'en' | 'fr' | 'es' | 'de';

export type BankLocation = 'east_bank' | 'west_bank' | 'surroundings';

export type TreasureCategory =
  | 'east_temple'
  | 'west_temple'
  | 'kings_tomb'
  | 'queens_tomb'
  | 'nobles_tomb'
  | 'workers_tomb'
  | 'other_necropolis'
  | 'museum'
  | 'surrounding_site';

export type AvailabilityStatus = 'open' | 'closed' | 'permit_required';

export interface LocalizedString {
  ar: string;
  en: string;
  fr: string;
  es: string;
  de: string;
}

export interface Treasure {
  id: string;
  name: LocalizedString;
  shortDesc: LocalizedString;
  fullHistory: LocalizedString;
  story: LocalizedString;
  category: TreasureCategory;
  bank: BankLocation;
  epoch: LocalizedString;
  pharaoh: LocalizedString;
  architecturalHighlights: LocalizedString[];
  mustSee: LocalizedString[];
  mainImage: string;
  galleryImages: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceFromCenterKm: number;
  openingHours: LocalizedString;
  ticketPrice: LocalizedString;
  status: AvailabilityStatus;
  featured?: boolean;
  order: number;
  nearbyMonumentIds?: string[];
}

export interface Experience {
  id: string;
  title: LocalizedString;
  category: 'air' | 'river' | 'culture' | 'heritage' | 'safari' | 'family';
  duration: LocalizedString;
  priceNote: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  location: LocalizedString;
  image: string;
  gallery: string[];
  bestTime: LocalizedString;
  included: LocalizedString[];
  featured?: boolean;
}

export interface Restaurant {
  id: string;
  name: LocalizedString;
  type: LocalizedString;
  atmosphere: LocalizedString;
  description: LocalizedString;
  location: LocalizedString;
  bank: BankLocation;
  specialtyDishes: LocalizedString[];
  priceRange: string;
  image: string;
  contact: string;
  coordinates: { lat: number; lng: number };
}

export interface Hotel {
  id: string;
  name: LocalizedString;
  category: 'luxury' | 'boutique' | 'riverside' | 'historic' | 'eco_heritage' | 'budget';
  stars: number;
  bank: BankLocation;
  description: LocalizedString;
  features: LocalizedString[];
  priceRange: string;
  image: string;
  gallery: string[];
  location: LocalizedString;
  contact: string;
  coordinates: { lat: number; lng: number };
}

export interface Article {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  category: LocalizedString;
  coverImage: string;
  readTimeMin: number;
  author: LocalizedString;
  publishedDate: string;
  tags: string[];
}

export interface EventItem {
  id: string;
  title: LocalizedString;
  date: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  image: string;
  accessInfo: LocalizedString;
}

export interface GalleryItem {
  id: string;
  title: LocalizedString;
  category: 'temples' | 'tombs' | 'nile' | 'nature' | 'culture' | 'aerial' | 'videos';
  imageUrl: string;
  videoUrl?: string;
  location: LocalizedString;
  caption: LocalizedString;
  aspect?: string;
}

export interface SiteSettings {
  siteTitle: LocalizedString;
  slogan: LocalizedString;
  description: LocalizedString;
  heroImage: string;
  heroVideoUrl?: string;
  primaryColor: string; // #F7F2E8
  secondaryColor: string; // #183B56
  accentColor: string; // #C99A42
  logoUrl: string;
  logoWidth?: number;
  showBrandText?: boolean;
  heroTitle?: LocalizedString;
  heroSubtitle?: LocalizedString;
  heroBadge?: LocalizedString;
  discoverTitle?: LocalizedString;
  discoverDesc?: LocalizedString;
  eastBankDesc?: LocalizedString;
  westBankDesc?: LocalizedString;
  showWeatherInNav?: boolean;
  contactEmail: string;
  contactPhone: string;
  emergencyTouristPolice: string;
  // Travel Guide customization
  guideTitle?: LocalizedString;
  guideDesc?: LocalizedString;
  guideTransitAirport?: LocalizedString;
  guideTransitTrain?: LocalizedString;
  guideTransitCruise?: LocalizedString;
  guideLocalFerry?: LocalizedString;
  guideLocalTaxi?: LocalizedString;
  guideLocalBicycle?: LocalizedString;
  guideTipsSun?: LocalizedString;
  guideTipsPhoto?: LocalizedString;
  // Trip Planner customization
  plannerTitle?: LocalizedString;
  plannerDesc?: LocalizedString;
  plannerAdvice?: LocalizedString;
  // Section Titles & Subtitles Customization
  eastBankTitle?: LocalizedString;
  westBankTitle?: LocalizedString;
  treasuresTitle?: LocalizedString;
  treasuresSubtitle?: LocalizedString;
  experiencesTitle?: LocalizedString;
  experiencesSubtitle?: LocalizedString;
  natureTitle?: LocalizedString;
  natureSubtitle?: LocalizedString;
  cultureTitle?: LocalizedString;
  cultureSubtitle?: LocalizedString;
  tasteTitle?: LocalizedString;
  tasteSubtitle?: LocalizedString;
  stayTitle?: LocalizedString;
  staySubtitle?: LocalizedString;
  mapTitle?: LocalizedString;
  mapSubtitle?: LocalizedString;
  talesTitle?: LocalizedString;
  talesSubtitle?: LocalizedString;
  eventsTitle?: LocalizedString;
  eventsSubtitle?: LocalizedString;
  galleryTitle?: LocalizedString;
  gallerySubtitle?: LocalizedString;
}

export interface MediaFile {
  id: string;
  name: string;
  url: string;
  sizeBytes: number;
  mimeType: string;
  uploadedAt: string;
  altText: LocalizedString;
  folder: string;
  usedIn?: string[];
}
