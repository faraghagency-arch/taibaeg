import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  Treasure,
  Experience,
  Restaurant,
  Hotel,
  Article,
  EventItem,
  GalleryItem,
  SiteSettings,
  MediaFile,
} from '../types';
import { INITIAL_TREASURES } from '../data/treasures';
import { INITIAL_EXPERIENCES } from '../data/experiences';
import { INITIAL_RESTAURANTS, INITIAL_HOTELS } from '../data/hospitality';
import { INITIAL_ARTICLES, INITIAL_EVENTS } from '../data/articlesAndEvents';
import { INITIAL_SETTINGS, INITIAL_GALLERY, INITIAL_MEDIA_FILES } from '../data/galleryAndSettings';
import { UI_TRANSLATIONS } from '../data/translations';

interface DataContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  treasures: Treasure[];
  setTreasures: React.Dispatch<React.SetStateAction<Treasure[]>>;
  experiences: Experience[];
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  hotels: Hotel[];
  setHotels: React.Dispatch<React.SetStateAction<Hotel[]>>;
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  events: EventItem[];
  setEvents: React.Dispatch<React.SetStateAction<EventItem[]>>;
  gallery: GalleryItem[];
  setGallery: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
  media: MediaFile[];
  setMedia: React.Dispatch<React.SetStateAction<MediaFile[]>>;
  settings: SiteSettings;
  setSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
  customRoute: string[];
  addToRoute: (id: string) => void;
  removeFromRoute: (id: string) => void;
  clearRoute: () => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  activeModal: { type: 'treasure' | 'experience' | 'article' | 'hotel' | 'restaurant'; id: string } | null;
  setActiveModal: (modal: { type: 'treasure' | 'experience' | 'article' | 'hotel' | 'restaurant'; id: string } | null) => void;
  lightboxItem: GalleryItem | null;
  setLightboxItem: (item: GalleryItem | null) => void;
  experiencesHubTab: 'experiences' | 'nature' | 'culture';
  setExperiencesHubTab: (tab: 'experiences' | 'nature' | 'culture') => void;
  planningHubTab: 'planner' | 'map' | 'guide';
  setPlanningHubTab: (tab: 'planner' | 'map' | 'guide') => void;
  mediaHubTab: 'tales' | 'events' | 'gallery';
  setMediaHubTab: (tab: 'tales' | 'events' | 'gallery') => void;
  tasteStayTab: 'taste' | 'stay';
  setTasteStayTab: (tab: 'taste' | 'stay') => void;
  navigateToTab: (target: 'experiences' | 'nature' | 'culture' | 'taste' | 'stay' | 'planner' | 'map' | 'guide' | 'tales' | 'events' | 'gallery') => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  uploadMediaFile: (file: File, folder?: string) => Promise<MediaFile>;
  resetToDefaults: () => void;
}

const DataContext = createContext<DataContextType | null>(null);

const STORAGE_KEYS = {
  LANG: 'taiba_language',
  TREASURES: 'taiba_treasures_v1',
  EXPERIENCES: 'taiba_experiences_v1',
  RESTAURANTS: 'taiba_restaurants_v1',
  HOTELS: 'taiba_hotels_v1',
  ARTICLES: 'taiba_articles_v1',
  EVENTS: 'taiba_events_v1',
  GALLERY: 'taiba_gallery_v1',
  MEDIA: 'taiba_media_v1',
  SETTINGS: 'taiba_settings_v1',
  ROUTE: 'taiba_custom_route_v1',
  AUTH: 'taiba_admin_auth_v1',
  THEME: 'taiba_theme_v1',
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('taiba_theme_v1') as 'light' | 'dark') || 'light';
  });

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('taiba_theme_v1', next);
      return next;
    });
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    return (saved as Language) || 'ar';
  });

  const [treasures, setTreasures] = useState<Treasure[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TREASURES);
      return saved ? JSON.parse(saved) : INITIAL_TREASURES;
    } catch {
      return INITIAL_TREASURES;
    }
  });

  const [experiences, setExperiences] = useState<Experience[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EXPERIENCES);
      return saved ? JSON.parse(saved) : INITIAL_EXPERIENCES;
    } catch {
      return INITIAL_EXPERIENCES;
    }
  });

  const [restaurants, setRestaurants] = useState<Restaurant[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RESTAURANTS);
      if (!saved) return INITIAL_RESTAURANTS;
      const parsed: Restaurant[] = JSON.parse(saved);
      return parsed.map((r) => {
        if (/^\$+$/.test((r.priceRange || '').trim()) || r.priceRange === 'mid') {
          const match = INITIAL_RESTAURANTS.find((ir) => ir.id === r.id);
          return { ...r, priceRange: match ? match.priceRange : '220 - 450 ج.م للفرد' };
        }
        return r;
      });
    } catch {
      return INITIAL_RESTAURANTS;
    }
  });

  const [hotels, setHotels] = useState<Hotel[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HOTELS);
      if (!saved) return INITIAL_HOTELS;
      const parsed: Hotel[] = JSON.parse(saved);
      return parsed.map((h) => {
        if (/^\$+$/.test((h.priceRange || '').trim()) || h.priceRange === 'mid') {
          const match = INITIAL_HOTELS.find((ih) => ih.id === h.id);
          return { ...h, priceRange: match ? match.priceRange : 'تبدأ من 2,500 ج.م / ليلة' };
        }
        return h;
      });
    } catch {
      return INITIAL_HOTELS;
    }
  });

  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ARTICLES);
      return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
    } catch {
      return INITIAL_ARTICLES;
    }
  });

  const [events, setEvents] = useState<EventItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
      return saved ? JSON.parse(saved) : INITIAL_EVENTS;
    } catch {
      return INITIAL_EVENTS;
    }
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return saved ? JSON.parse(saved) : INITIAL_GALLERY;
    } catch {
      return INITIAL_GALLERY;
    }
  });

  const [media, setMedia] = useState<MediaFile[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MEDIA);
      return saved ? JSON.parse(saved) : INITIAL_MEDIA_FILES;
    } catch {
      return INITIAL_MEDIA_FILES;
    }
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_SETTINGS,
          ...parsed,
          westBankDesc: (parsed.westBankDesc && parsed.westBankDesc.ar && parsed.westBankDesc.ar.trim()) ? parsed.westBankDesc : INITIAL_SETTINGS.westBankDesc,
          eastBankDesc: (parsed.eastBankDesc && parsed.eastBankDesc.ar && parsed.eastBankDesc.ar.trim()) ? parsed.eastBankDesc : INITIAL_SETTINGS.eastBankDesc,
        };
      }
      return INITIAL_SETTINGS;
    } catch {
      return INITIAL_SETTINGS;
    }
  });

  const [customRoute, setCustomRoute] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ROUTE);
      return saved ? JSON.parse(saved) : ['karnak_complex', 'luxor_temple', 'tomb_tutankhamun_kv62', 'hatshepsut_deir_el_bahari'];
    } catch {
      return ['karnak_complex', 'luxor_temple', 'tomb_tutankhamun_kv62', 'hatshepsut_deir_el_bahari'];
    }
  });

  const [isAdmin, setIsAdminState] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
  });

  const [activeModal, setActiveModal] = useState<{
    type: 'treasure' | 'experience' | 'article' | 'hotel' | 'restaurant';
    id: string;
  } | null>(null);

  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Unified Hubs Tab States
  const [experiencesHubTab, setExperiencesHubTab] = useState<'experiences' | 'nature' | 'culture'>('experiences');
  const [planningHubTab, setPlanningHubTab] = useState<'planner' | 'map' | 'guide'>('planner');
  const [mediaHubTab, setMediaHubTab] = useState<'tales' | 'events' | 'gallery'>('tales');
  const [tasteStayTab, setTasteStayTab] = useState<'taste' | 'stay'>('taste');

  const navigateToTab = (target: 'experiences' | 'nature' | 'culture' | 'taste' | 'stay' | 'planner' | 'map' | 'guide' | 'tales' | 'events' | 'gallery') => {
    let sectionId = '';
    if (target === 'experiences' || target === 'nature' || target === 'culture') {
      setExperiencesHubTab(target);
      sectionId = 'experiences';
    } else if (target === 'taste' || target === 'stay') {
      setTasteStayTab(target);
      sectionId = 'taste';
    } else if (target === 'planner' || target === 'map' || target === 'guide') {
      setPlanningHubTab(target);
      sectionId = 'planner';
    } else if (target === 'tales' || target === 'events' || target === 'gallery') {
      setMediaHubTab(target);
      sectionId = 'tales';
    }

    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Sync hash with corresponding tab
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['experiences', 'nature', 'culture'].includes(hash)) {
        setExperiencesHubTab(hash as any);
      } else if (['taste', 'stay'].includes(hash)) {
        setTasteStayTab(hash as any);
      } else if (['planner', 'map', 'guide'].includes(hash)) {
        setPlanningHubTab(hash as any);
      } else if (['tales', 'events', 'gallery'].includes(hash)) {
        setMediaHubTab(hash as any);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Sync language with HTML dir and lang
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setIsAdmin = (val: boolean) => {
    setIsAdminState(val);
    localStorage.setItem(STORAGE_KEYS.AUTH, val ? 'true' : 'false');
  };

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TREASURES, JSON.stringify(treasures));
    } catch (e) {
      console.warn('Storage quota limit reached', e);
    }
  }, [treasures]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EXPERIENCES, JSON.stringify(experiences));
    } catch {}
  }, [experiences]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RESTAURANTS, JSON.stringify(restaurants));
    } catch {}
  }, [restaurants]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.HOTELS, JSON.stringify(hotels));
    } catch {}
  }, [hotels]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
    } catch {}
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
    } catch {}
  }, [events]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
    } catch {}
  }, [gallery]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(media));
    } catch {}
  }, [media]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch {}
  }, [settings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ROUTE, JSON.stringify(customRoute));
    } catch {}
  }, [customRoute]);

  const t = (key: string): string => {
    const dict = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
    return dict[key] || UI_TRANSLATIONS.en[key] || key;
  };

  const addToRoute = (id: string) => {
    if (!customRoute.includes(id)) {
      setCustomRoute([...customRoute, id]);
    }
  };

  const removeFromRoute = (id: string) => {
    setCustomRoute(customRoute.filter((item) => item !== id));
  };

  const clearRoute = () => {
    setCustomRoute([]);
  };

  const resetToDefaults = () => {
    setTreasures(INITIAL_TREASURES);
    setExperiences(INITIAL_EXPERIENCES);
    setRestaurants(INITIAL_RESTAURANTS);
    setHotels(INITIAL_HOTELS);
    setArticles(INITIAL_ARTICLES);
    setEvents(INITIAL_EVENTS);
    setGallery(INITIAL_GALLERY);
    setMedia(INITIAL_MEDIA_FILES);
    setSettings(INITIAL_SETTINGS);
  };

  // Upload file helper (reads file as DataURL for instant local availability and media library registration)
  const uploadMediaFile = async (file: File, folder = 'Uploads'): Promise<MediaFile> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result as string;
        const newFile: MediaFile = {
          id: `media_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          name: file.name,
          url,
          sizeBytes: file.size,
          mimeType: file.type || 'image/jpeg',
          uploadedAt: new Date().toISOString().split('T')[0],
          altText: {
            ar: file.name.replace(/\.[^/.]+$/, ''),
            en: file.name.replace(/\.[^/.]+$/, ''),
            fr: file.name.replace(/\.[^/.]+$/, ''),
            es: file.name.replace(/\.[^/.]+$/, ''),
            de: file.name.replace(/\.[^/.]+$/, ''),
          },
          folder,
          usedIn: [],
        };
        setMedia((prev) => [newFile, ...prev]);
        resolve(newFile);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <DataContext.Provider
      value={{
        language,
        setLanguage,
        t,
        treasures,
        setTreasures,
        experiences,
        setExperiences,
        restaurants,
        setRestaurants,
        hotels,
        setHotels,
        articles,
        setArticles,
        events,
        setEvents,
        gallery,
        setGallery,
        media,
        setMedia,
        settings,
        setSettings,
        customRoute,
        addToRoute,
        removeFromRoute,
        clearRoute,
        isAdmin,
        setIsAdmin,
        activeModal,
        setActiveModal,
        lightboxItem,
        setLightboxItem,
        experiencesHubTab,
        setExperiencesHubTab,
        planningHubTab,
        setPlanningHubTab,
        mediaHubTab,
        setMediaHubTab,
        tasteStayTab,
        setTasteStayTab,
        navigateToTab,
        theme,
        toggleTheme,
        uploadMediaFile,
        resetToDefaults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};
