import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import {
  Treasure,
  Experience,
  Restaurant,
  Hotel,
  Article,
  EventItem,
  GalleryItem,
  SiteSettings,
  MediaFile,
  Language,
  LocalizedString,
} from '../types';
import {
  Shield,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Save,
  Upload,
  Image as ImageIcon,
  Globe,
  Settings,
  Database,
  Search,
  Check,
  Compass,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Utensils,
  Hotel as HotelIcon,
  BookOpen,
  Calendar,
  Camera,
  Phone,
  MapPin,
  Star,
  X,
  Home,
  Sliders,
} from 'lucide-react';

interface AdminDashboardProps {
  onBackToSite: () => void;
}

const createLocal = (ar: string, en?: string): LocalizedString => ({
  ar,
  en: en || ar,
  fr: en || ar,
  es: en || ar,
  de: en || ar,
});

/**
 * Reusable Image Upload Control
 * Allows uploading any file from the computer directly (read as DataURL)
 * or entering an image URL manually, with instant live preview.
 */
const ImageUploadControl: React.FC<{
  currentUrl: string;
  onImageChanged: (url: string) => void;
  label?: string;
  language: Language;
}> = ({ currentUrl, onImageChanged, label, language }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      onImageChanged(dataUrl);
      setIsProcessing(false);
    };
    reader.onerror = () => setIsProcessing(false);
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-xs font-semibold block text-stone-700">
          {label}
        </label>
      )}
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#E8DFD0] bg-stone-100 shrink-0 relative shadow-inner">
          {currentUrl ? (
            <img src={currentUrl} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-stone-400 text-[10px]">
              {language === 'ar' ? 'بلا صورة' : 'No image'}
            </div>
          )}
        </div>

        <div className="flex-1 space-y-1.5">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFile}
            accept="image/*"
            className="hidden"
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={isProcessing}
              onClick={() => fileInputRef.current?.click()}
              className="px-3.5 py-1.5 rounded-xl bg-[#C99A42] hover:bg-[#b08432] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>
                {isProcessing
                  ? (language === 'ar' ? 'جارٍ المعالجة...' : 'Processing...')
                  : (language === 'ar' ? 'رفع صورة من جهازك 💻' : 'Upload from device 💻')}
              </span>
            </button>
            <span className="text-[10px] text-stone-400">
              {language === 'ar' ? 'أو أدخل الرابط أدناه:' : 'or direct link:'}
            </span>
          </div>

          <input
            type="text"
            value={currentUrl}
            onChange={(e) => onImageChanged(e.target.value)}
            placeholder="https://... or /src/assets/..."
            className="w-full text-[11px] font-mono px-3 py-1.5 rounded-lg border border-[#E8DFD0] bg-white text-stone-700 focus:outline-hidden focus:border-[#C99A42]"
          />
        </div>
      </div>
    </div>
  );
};

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToSite }) => {
  const {
    language,
    t,
    isAdmin,
    setIsAdmin,
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
    uploadMediaFile,
    resetToDefaults,
  } = useData();

  // Login form state
  const [loginEmail, setLoginEmail] = useState('admin@taiba.eg');
  const [loginPassword, setLoginPassword] = useState('TaibaLuxor2026!');
  const [loginError, setLoginError] = useState('');

  // Active admin tab
  const [activeTab, setActiveTab] = useState<
    'overview' | 'homepage' | 'navbar_settings' | 'treasures' | 'experiences' | 'hospitality' | 'articles_events' | 'gallery' | 'media' | 'guide' | 'planner' | 'settings' | 'backup'
  >('overview');

  // Sub-tabs
  const [hospitalitySubTab, setHospitalitySubTab] = useState<'restaurants' | 'hotels'>('restaurants');
  const [articlesEventsSubTab, setArticlesEventsSubTab] = useState<'articles' | 'events'>('articles');

  // Search & edit state
  const [treasureSearch, setTreasureSearch] = useState('');
  const [editingTreasure, setEditingTreasure] = useState<Treasure | null>(null);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(null);
  const [editingHotel, setEditingHotel] = useState<Hotel | null>(null);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);

  // New gallery item state
  const [newGalleryTitle, setNewGalleryTitle] = useState('');
  const [newGalleryCategory, setNewGalleryCategory] = useState<'temples' | 'tombs' | 'nile' | 'nature' | 'culture' | 'aerial' | 'videos'>('temples');
  const [newGalleryUrl, setNewGalleryUrl] = useState('');

  // Media upload input reference
  const batchFileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  // Status toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail === 'admin@taiba.eg' && loginPassword === 'TaibaLuxor2026!') {
      setIsAdmin(true);
      setLoginError('');
      showToast(language === 'ar' ? 'تم تسجيل الدخول بنجاح كمدير للمنصة' : 'Signed in successfully as Administrator');
    } else {
      setLoginError(language === 'ar' ? 'بيانات غير صحيحة. يرجى استخدام: admin@taiba.eg / TaibaLuxor2026!' : 'Invalid credentials. Use admin@taiba.eg / TaibaLuxor2026!');
    }
  };

  const handleBatchFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        await uploadMediaFile(files[i]);
      }
      showToast(language === 'ar' ? `تم رفع ${files.length} ملف بنجاح إلى مكتبة الوسائط` : `Uploaded ${files.length} file(s)`);
    } catch {
      showToast('Error uploading file');
    } finally {
      setIsUploading(false);
      if (batchFileInputRef.current) batchFileInputRef.current.value = '';
    }
  };

  // Quick direct image swap for any monument from device
  const handleQuickTreasureImageUpload = (id: string, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setTreasures((prev) =>
        prev.map((t) => (t.id === id ? { ...t, mainImage: dataUrl } : t))
      );
      showToast(language === 'ar' ? 'تم استبدال صورة المعلم بنجاح من جهازك' : 'Treasure photo updated from device');
    };
    reader.readAsDataURL(file);
  };

  // Save Handlers
  const handleSaveTreasure = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTreasure) return;
    setTreasures((prev) =>
      prev.map((item) => (item.id === editingTreasure.id ? editingTreasure : item))
    );
    setEditingTreasure(null);
    showToast(language === 'ar' ? 'تم حفظ تعديلات المعلم بنجاح' : 'Treasure updated successfully');
  };

  const handleSaveExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExperience) return;
    setExperiences((prev) =>
      prev.map((item) => (item.id === editingExperience.id ? editingExperience : item))
    );
    setEditingExperience(null);
    showToast(language === 'ar' ? 'تم حفظ تعديلات التجربة السياحية' : 'Experience updated successfully');
  };

  const handleSaveRestaurant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRestaurant) return;
    setRestaurants((prev) =>
      prev.map((item) => (item.id === editingRestaurant.id ? editingRestaurant : item))
    );
    setEditingRestaurant(null);
    showToast(language === 'ar' ? 'تم حفظ بيانات المطعم بنجاح' : 'Restaurant updated successfully');
  };

  const handleSaveHotel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingHotel) return;
    setHotels((prev) =>
      prev.map((item) => (item.id === editingHotel.id ? editingHotel : item))
    );
    setEditingHotel(null);
    showToast(language === 'ar' ? 'تم حفظ بيانات الفندق بنجاح' : 'Hotel updated successfully');
  };

  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;
    setArticles((prev) =>
      prev.map((item) => (item.id === editingArticle.id ? editingArticle : item))
    );
    setEditingArticle(null);
    showToast(language === 'ar' ? 'تم حفظ المقال التوثيقي' : 'Article updated successfully');
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEvent) return;
    setEvents((prev) =>
      prev.map((item) => (item.id === editingEvent.id ? editingEvent : item))
    );
    setEditingEvent(null);
    showToast(language === 'ar' ? 'تم حفظ بيانات الفعالية' : 'Event updated successfully');
  };

  const handleAddGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalleryUrl) {
      showToast(language === 'ar' ? 'يرجى رفع أو اختيار صورة أولاً' : 'Please upload or provide an image');
      return;
    }
    const newItem: GalleryItem = {
      id: `gal_${Date.now()}`,
      title: createLocal(newGalleryTitle || 'مشهد طيبة الساحر', newGalleryTitle || 'Theban Scene'),
      category: newGalleryCategory,
      imageUrl: newGalleryUrl,
      location: createLocal('الأقصر، مصر', 'Luxor, Egypt'),
      caption: createLocal('لقطة فوتوغرافية لمعالم وسحر طيبة الخالدة', 'Photographic capture of timeless Theban majesty'),
    };
    setGallery([newItem, ...gallery]);
    setNewGalleryTitle('');
    setNewGalleryUrl('');
    showToast(language === 'ar' ? 'تمت إضافة الصورة إلى المعرض البانورامي' : 'Added image to gallery');
  };

  const handleExportBackup = () => {
    const fullState = {
      treasures,
      experiences,
      restaurants,
      hotels,
      articles,
      events,
      gallery,
      media,
      settings,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(fullState, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `taiba_luxor_full_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast(language === 'ar' ? 'تم تصدير نسخة احتياطية كاملة لجميع المحتويات' : 'Exported JSON backup');
  };

  // If not authenticated, render Login Screen
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#F7F2E8] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#E8DFD0] shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-[#183B56] border border-[#C99A42]/50 mx-auto flex items-center justify-center text-[#C99A42] font-cinzel font-bold text-2xl shadow-inner">
              𓋹
            </div>
            <h1 className="text-xl font-bold font-cinzel text-[#183B56]">
              {language === 'ar' ? 'لوحة تحكم منصة طيبة الشاملة' : 'Taiba Admin Portal'}
            </h1>
            <p className="text-xs text-stone-500">
              {language === 'ar' ? 'تحكم كامل في كافة معالم وصور وتجارب ومحتوى الموقع' : 'Full control over all monuments, photos, and site content'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700 block">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Admin Email'}
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full bg-[#F7F2E8]/50 border border-[#E8DFD0] rounded-xl px-4 py-2.5 text-xs text-[#183B56] focus:outline-hidden focus:border-[#C99A42]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700 block">
                {language === 'ar' ? 'كلمة المرور' : 'Password'}
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full bg-[#F7F2E8]/50 border border-[#E8DFD0] rounded-xl px-4 py-2.5 text-xs text-[#183B56] focus:outline-hidden focus:border-[#C99A42]"
              />
            </div>

            {loginError && (
              <p className="text-xs text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#183B56] hover:bg-[#102738] text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              {language === 'ar' ? 'تسجيل الدخول للوحة التحكم' : 'Sign In'}
            </button>
          </form>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <button
              onClick={onBackToSite}
              className="hover:text-[#C99A42] flex items-center gap-1 cursor-pointer font-semibold"
            >
              ← {language === 'ar' ? 'العودة للموقع' : 'Return to Site'}
            </button>
            <span className="font-mono text-[10px] text-stone-400">admin@taiba.eg</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#183B56] flex flex-col font-cairo">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 end-6 z-50 bg-[#183B56] text-white text-xs px-4 py-2.5 rounded-xl shadow-xl border border-[#C99A42] animate-in fade-in slide-in-from-top-4 flex items-center gap-2">
          <Check className="w-4 h-4 text-[#C99A42]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Admin Top Bar */}
      <header className="bg-white border-b border-[#E8DFD0] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="p-2 rounded-lg hover:bg-stone-100 text-stone-600 hover:text-[#183B56] transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
              title={language === 'ar' ? 'الرجوع للموقع' : 'Back to website'}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'ar' ? 'الرجوع للموقع' : 'Back'}</span>
            </button>

            <span className="font-cinzel font-bold text-lg text-[#183B56]">
              TAIBA <span className="text-[#C99A42] font-cairo">| لوحة إدارة المحتوى الكاملة</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdmin(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 hover:bg-rose-50 hover:text-rose-600 text-xs text-stone-600 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t('logout')}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-2 border-t border-stone-100 py-2 scrollbar-none text-xs font-semibold">
          {[
            { id: 'overview', label: language === 'ar' ? 'نظرة عامة' : 'Overview', icon: Layers },
            { id: 'homepage', label: language === 'ar' ? 'الصفحة الأولى والهيرو' : 'Homepage & Hero', icon: Home },
            { id: 'navbar_settings', label: language === 'ar' ? 'شريط المهام والشعار' : 'Taskbar & Logo', icon: Sliders },
            { id: 'treasures', label: language === 'ar' ? 'كنوز طيبة (55+)' : 'Treasures', icon: Compass },
            { id: 'experiences', label: language === 'ar' ? 'التجارب والأنشطة' : 'Experiences', icon: Sparkles },
            { id: 'hospitality', label: language === 'ar' ? 'المطاعم والفنادق' : 'Taste & Stay', icon: Utensils },
            { id: 'articles_events', label: language === 'ar' ? 'الحكايات والفعاليات' : 'Tales & Events', icon: BookOpen },
            { id: 'planner', label: language === 'ar' ? 'مخطط الرحلات الذكي' : 'Trip Planner', icon: Calendar },
            { id: 'guide', label: language === 'ar' ? 'دليل المسافر والتنقل' : 'Travel Guide', icon: MapPin },
            { id: 'gallery', label: language === 'ar' ? 'معرض الصور' : 'Gallery', icon: Camera },
            { id: 'media', label: language === 'ar' ? 'مكتبة الوسائط' : 'Media Library', icon: ImageIcon },
            { id: 'settings', label: language === 'ar' ? 'إعدادات الموقع' : 'Site Settings', icon: Settings },
            { id: 'backup', label: language === 'ar' ? 'النسخ الاحتياطي' : 'Backup', icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-[#183B56] text-white shadow-xs'
                    : 'text-stone-600 hover:bg-[#F7F2E8] hover:text-[#183B56]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#C99A42]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Admin Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        
        {/* ============================================================== */}
        {/* OVERVIEW TAB                                                   */}
        {/* ============================================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-1">
                <span className="text-xs font-semibold text-stone-500 uppercase">{t('treasures')}</span>
                <p className="text-3xl font-extrabold text-[#183B56] font-mono">{treasures.length}</p>
                <span className="text-[11px] text-emerald-600">{language === 'ar' ? 'معالم موثقة بالبرين' : 'Verified Monuments'}</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-1">
                <span className="text-xs font-semibold text-stone-500 uppercase">{t('experiences')}</span>
                <p className="text-3xl font-extrabold text-[#183B56] font-mono">{experiences.length}</p>
                <span className="text-[11px] text-[#C99A42]">{language === 'ar' ? 'تجارب وأنشطة حية' : 'Active Tours'}</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-1">
                <span className="text-xs font-semibold text-stone-500 uppercase">{language === 'ar' ? 'مطاعم وفنادق' : 'Hospitality'}</span>
                <p className="text-3xl font-extrabold text-[#183B56] font-mono">{restaurants.length + hotels.length}</p>
                <span className="text-[11px] text-stone-500">{language === 'ar' ? 'إقامة وتذوق' : 'Dining & Stays'}</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-1">
                <span className="text-xs font-semibold text-stone-500 uppercase">{language === 'ar' ? 'معرض الصور والوسائط' : 'Media & Photos'}</span>
                <p className="text-3xl font-extrabold text-[#183B56] font-mono">{gallery.length + media.length}</p>
                <span className="text-[11px] text-emerald-600">{language === 'ar' ? 'أصول بصرية مستقلة' : 'Visual Assets'}</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] space-y-4">
              <div className="flex items-center gap-2 text-[#C99A42]">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'نظام إدارة محتوى طيبة الفعّال' : 'Taiba Content & Asset Management'}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {language === 'ar'
                  ? 'يمكنك من هنا تعديل وإضافة وحذف أي عنصر على الموقع: المعالم الأثرية، التجارب، الفنادق، المطاعم، المقالات، والفعاليات. ميزة الرفع المباشر تسمح لك باختيار أي صورة من جهاز الكمبيوتر الخاص بك لتحل محل الصورة الحالية فورياً وتُحفظ في النظام تلقائياً.'
                  : 'Full control to edit, add, or delete any site content. Upload local images directly from your computer to replace any photo across the platform.'}
              </p>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* HOMEPAGE & HERO SECTION MANAGEMENT TAB                         */}
        {/* ============================================================== */}
        {activeTab === 'homepage' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] space-y-6 animate-in fade-in max-w-4xl shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <Home className="w-5 h-5 text-[#C99A42]" />
                <div>
                  <h3 className="text-base font-bold text-[#183B56] font-cairo">
                    {language === 'ar' ? 'إدارة محتوى الصفحة الأولى والقسم الترحيبي (Hero & Discover)' : 'Homepage & Hero Content Manager'}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {language === 'ar' ? 'تحكم كامل في نصوص وعناوين وصورة الصفحة الأولى واكتشف الأقصر' : 'Full control over titles, description, and hero banner'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => showToast(language === 'ar' ? 'تم حفظ تعديلات الصفحة الأولى بنجاح ✓' : 'Homepage updated successfully ✓')}
                className="px-5 py-2 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs transition-colors font-cairo"
              >
                <Save className="w-4 h-4 text-[#C99A42]" />
                <span>{t('save_changes')}</span>
              </button>
            </div>

            {/* 1. Hero Banner Image (Upload from device or URL) */}
            <div className="p-4 rounded-2xl bg-[#F7F2E8]/60 border border-[#E8DFD0] space-y-2">
              <span className="text-xs font-bold text-[#183B56] block">
                {language === 'ar' ? 'صورة خلفية الهيرو الرئيسية (Hero Banner)' : 'Main Hero Banner Photo'}
              </span>
              <ImageUploadControl
                currentUrl={settings.heroImage}
                onImageChanged={(newUrl) => setSettings({ ...settings, heroImage: newUrl })}
                label={language === 'ar' ? 'اختر صورة من جهازك بدقة عالية أو الصق رابطاً مباشراً:' : 'Upload from your device:'}
                language={language}
              />
            </div>

            {/* 2. Hero Headlines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-cairo">
              {/* Top Hero Pill Badge */}
              <div className="space-y-1 md:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[#183B56] block">شارة الهيرو العلوية (مثال: أكثر من مجرد تاريخ… رحلة عبر الزمن)</label>
                  <span className="text-[11px] text-[#C99A42] font-semibold">تظهر أعلى العنوان بالهيرو كشعار</span>
                </div>
                <input
                  type="text"
                  value={settings.heroBadge?.ar || 'أكثر من مجرد تاريخ… رحلة عبر الزمن'}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      heroBadge: createLocal(e.target.value, settings.heroBadge?.en || e.target.value),
                    })
                  }
                  placeholder="أكثر من مجرد تاريخ… رحلة عبر الزمن"
                  className="w-full border border-stone-300 rounded-xl p-2.5 text-xs font-semibold text-[#183B56]"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="font-bold text-[#183B56] block">شارة الهيرو بالإنجليزية (Top Hero Badge)</label>
                <input
                  type="text"
                  value={settings.heroBadge?.en || 'More Than History, A Journey Through Time'}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      heroBadge: createLocal(settings.heroBadge?.ar || 'أكثر من مجرد تاريخ… رحلة عبر الزمن', e.target.value),
                    })
                  }
                  placeholder="More Than History, A Journey Through Time"
                  className="w-full border border-stone-300 rounded-xl p-2.5 text-xs font-semibold text-[#183B56]"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[#183B56] block">عنوان الهيرو الرئيسي</label>
                  <span className="text-[11px] text-[#C99A42] font-semibold">يتغير تلقائياً مع لغة العميل</span>
                </div>
                <input
                  type="text"
                  value={settings.heroTitle?.ar || 'طيبة… حيث يحكي التاريخ، وتبدأ الحكاية'}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      heroTitle: createLocal(e.target.value, settings.heroTitle?.en),
                    })
                  }
                  placeholder="طيبة… حيث يحكي التاريخ، وتبدأ الحكاية"
                  className="w-full border border-stone-300 rounded-xl p-2.5 text-sm font-bold text-[#183B56]"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="font-bold text-[#183B56] block">عنوان الهيرو بالإنجليزية (Headline English)</label>
                <input
                  type="text"
                  value={settings.heroTitle?.en || 'Thebes… Where History Speaks & The Legend Unfolds'}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      heroTitle: createLocal(settings.heroTitle?.ar || '', e.target.value),
                    })
                  }
                  placeholder="Thebes… Where History Speaks & The Legend Unfolds"
                  className="w-full border border-stone-300 rounded-xl p-2.5 text-sm font-bold text-[#183B56]"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="font-bold text-[#183B56] block">الوصف التعبيري للهيرو</label>
                <textarea
                  rows={2}
                  value={settings.heroSubtitle?.ar || ''}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      heroSubtitle: createLocal(e.target.value, settings.heroSubtitle?.en),
                    })
                  }
                  className="w-full border border-stone-300 rounded-xl p-2.5"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="font-bold text-[#183B56] block">الوصف التعبيري بالإنجليزية</label>
                <textarea
                  rows={2}
                  value={settings.heroSubtitle?.en || ''}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      heroSubtitle: createLocal(settings.heroSubtitle?.ar || '', e.target.value),
                    })
                  }
                  className="w-full border border-stone-300 rounded-xl p-2.5"
                />
              </div>
            </div>

            {/* 3. Section Discover Luxor Content */}
            <div className="pt-4 border-t border-stone-100 space-y-4 text-xs font-cairo">
              <h4 className="font-bold text-sm text-[#183B56]">
                {language === 'ar' ? 'محتوى قسم: اكتشف طيبة (البر الشرقي والغربي)' : 'Discover Thebes Section Content'}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#183B56] block">عنوان قسم اكتشف (بالعربية)</label>
                  <input
                    type="text"
                    value={settings.discoverTitle?.ar || ''}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        discoverTitle: createLocal(e.target.value, settings.discoverTitle?.en),
                      })
                    }
                    placeholder="اكتشف سحر طيبة الخالدة"
                    className="w-full border border-stone-300 rounded-xl p-2.5"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#183B56] block">Discover Section Title (English)</label>
                  <input
                    type="text"
                    value={settings.discoverTitle?.en || ''}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        discoverTitle: createLocal(settings.discoverTitle?.ar || '', e.target.value),
                      })
                    }
                    placeholder="Discover The Timeless Magic of Luxor"
                    className="w-full border border-stone-300 rounded-xl p-2.5"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#183B56] block">عنوان بطاقة البر الشرقي</label>
                  <input
                    type="text"
                    value={settings.eastBankTitle?.ar || ''}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        eastBankTitle: createLocal(e.target.value, settings.eastBankTitle?.en),
                      })
                    }
                    className="w-full border border-stone-300 rounded-xl p-2.5"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#183B56] block">عنوان بطاقة البر الغربي</label>
                  <input
                    type="text"
                    value={settings.westBankTitle?.ar || ''}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        westBankTitle: createLocal(e.target.value, settings.westBankTitle?.en),
                      })
                    }
                    className="w-full border border-stone-300 rounded-xl p-2.5"
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="font-bold text-[#183B56] block">وصف قسم اكتشف العام</label>
                  <textarea
                    rows={2}
                    value={settings.discoverDesc?.ar || ''}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        discoverDesc: createLocal(e.target.value, settings.discoverDesc?.en),
                      })
                    }
                    className="w-full border border-stone-300 rounded-xl p-2.5"
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="font-bold text-[#183B56] block">بطاقة البر الشرقي على الصفحة الرئيسية</label>
                  <textarea
                    rows={2}
                    value={settings.eastBankDesc?.ar || ''}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        eastBankDesc: createLocal(e.target.value, settings.eastBankDesc?.en),
                      })
                    }
                    className="w-full border border-stone-300 rounded-xl p-2.5"
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="font-bold text-[#183B56] block">بطاقة البر الغربي على الصفحة الرئيسية</label>
                  <textarea
                    rows={2}
                    value={settings.westBankDesc?.ar || ''}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        westBankDesc: createLocal(e.target.value, settings.westBankDesc?.en),
                      })
                    }
                    className="w-full border border-stone-300 rounded-xl p-2.5"
                  />
                </div>
              </div>
            </div>

            {/* 4. All Sections Main & Subtitles Unified Editor */}
            <div className="pt-6 border-t border-stone-200 space-y-5 text-xs font-cairo">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-base text-[#183B56]">
                    {language === 'ar' ? 'العناوين الرئيسية والفرعية لجميع سكاشن الموقع' : 'All Website Section Titles & Subtitles'}
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    {language === 'ar'
                      ? 'تحكم كامل في العنوان الرئيسي والوصف الفرعي لكل قسم من أقسام المنصة بالعربية والإنجليزية.'
                      : 'Edit main headline and subtitle for every section across the platform.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { keyTitle: 'treasuresTitle', keySub: 'treasuresSubtitle', label: 'قسم: كنوز طيبة الخالدة' },
                  { keyTitle: 'experiencesTitle', keySub: 'experiencesSubtitle', label: 'قسم: التجارب والأنشطة' },
                  { keyTitle: 'natureTitle', keySub: 'natureSubtitle', label: 'قسم: الطبيعة والنيل' },
                  { keyTitle: 'cultureTitle', keySub: 'cultureSubtitle', label: 'قسم: ثقافة وروح طيبة' },
                  { keyTitle: 'tasteTitle', keySub: 'tasteSubtitle', label: 'قسم: تذوق الأقصر والمطاعم' },
                  { keyTitle: 'stayTitle', keySub: 'staySubtitle', label: 'قسم: الإقامة والفنادق' },
                  { keyTitle: 'plannerTitle', keySub: 'plannerDesc', label: 'قسم: مخطط الرحلات الذكي' },
                  { keyTitle: 'mapTitle', keySub: 'mapSubtitle', label: 'قسم: خريطة الأقصر التفاعلية' },
                  { keyTitle: 'guideTitle', keySub: 'guideDesc', label: 'قسم: دليل المسافر العملي' },
                  { keyTitle: 'talesTitle', keySub: 'talesSubtitle', label: 'قسم: حكايات طيبة' },
                  { keyTitle: 'eventsTitle', keySub: 'eventsSubtitle', label: 'قسم: المواسم والفعاليات' },
                  { keyTitle: 'galleryTitle', keySub: 'gallerySubtitle', label: 'قسم: معرض الصور البانورامي' },
                ].map((sec) => {
                  const titleVal = (settings as any)[sec.keyTitle] || { ar: '', en: '' };
                  const subVal = (settings as any)[sec.keySub] || { ar: '', en: '' };
                  return (
                    <div key={sec.keyTitle} className="p-4 rounded-2xl bg-[#F7F2E8]/60 border border-[#E8DFD0] space-y-3">
                      <div className="font-bold text-sm text-[#183B56] border-b border-[#E8DFD0] pb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C99A42]" />
                        <span>{sec.label}</span>
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-stone-700 block">العنوان الرئيسي (عربي)</label>
                        <input
                          type="text"
                          value={titleVal.ar || ''}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              [sec.keyTitle]: createLocal(e.target.value, titleVal.en || e.target.value),
                            })
                          }
                          className="w-full bg-white border border-stone-300 rounded-xl p-2 font-cairo font-bold text-[#183B56]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-stone-700 block">العنوان الرئيسي بالإنجليزية</label>
                        <input
                          type="text"
                          value={titleVal.en || ''}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              [sec.keyTitle]: createLocal(titleVal.ar || e.target.value, e.target.value),
                            })
                          }
                          className="w-full bg-white border border-stone-300 rounded-xl p-2 font-cairo"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-stone-700 block">العنوان الفرعي / الوصف (عربي)</label>
                        <textarea
                          rows={2}
                          value={subVal.ar || ''}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              [sec.keySub]: createLocal(e.target.value, subVal.en || e.target.value),
                            })
                          }
                          className="w-full bg-white border border-stone-300 rounded-xl p-2 font-cairo"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-stone-700 block">العنوان الفرعي بالإنجليزية</label>
                        <textarea
                          rows={2}
                          value={subVal.en || ''}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              [sec.keySub]: createLocal(subVal.ar || e.target.value, e.target.value),
                            })
                          }
                          className="w-full bg-white border border-stone-300 rounded-xl p-2 font-cairo"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                type="button"
                onClick={() => showToast(language === 'ar' ? 'تم حفظ تعديلات الصفحة الأولى وجميع العناوين بنجاح ✓' : 'Homepage & all section titles updated ✓')}
                className="px-6 py-2.5 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs transition-colors font-cairo"
              >
                <Save className="w-4 h-4 text-[#C99A42]" />
                <span>{t('save_changes')}</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* NAVBAR & LOGO CONTROLLER TAB                                   */}
        {/* ============================================================== */}
        {activeTab === 'navbar_settings' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] space-y-6 animate-in fade-in max-w-3xl shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <Sliders className="w-5 h-5 text-[#C99A42]" />
                <div>
                  <h3 className="text-base font-bold text-[#183B56] font-cairo">
                    {language === 'ar' ? 'إعدادات شريط المهام والشعار والمظهر' : 'Taskbar, Logo & Navigation Controls'}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {language === 'ar' ? 'رفع الشعار من جهازك، تحديد مقاسه، والتحكم في عناصر شريط المهام' : 'Upload custom logo from device, adjust width slider, and toggle taskbar pills'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => showToast(language === 'ar' ? 'تم حفظ إعدادات شريط المهام والشعار بنجاح ✓' : 'Taskbar settings saved ✓')}
                className="px-5 py-2 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs transition-colors font-cairo"
              >
                <Save className="w-4 h-4 text-[#C99A42]" />
                <span>{t('save_changes')}</span>
              </button>
            </div>

            {/* 1. Logo Upload Control */}
            <div className="p-5 rounded-2xl bg-[#F7F2E8]/60 border border-[#E8DFD0] space-y-4">
              <h4 className="text-xs font-bold text-[#183B56] uppercase font-cairo">
                {language === 'ar' ? 'شعار المنصة (Logo)' : 'Platform Logo'}
              </h4>

              <ImageUploadControl
                currentUrl={settings.logoUrl || ''}
                onImageChanged={(newUrl) => setSettings({ ...settings, logoUrl: newUrl })}
                label={language === 'ar' ? 'ارفع صورة الشعار من جهاز الكمبيوتر أو أدخل رابطاً:' : 'Upload logo from your device:'}
                language={language}
              />

              {/* 2. Logo Width / Size Controller */}
              <div className="pt-2 border-t border-[#E8DFD0] space-y-2">
                <div className="flex items-center justify-between text-xs font-cairo">
                  <label className="font-bold text-[#183B56]">
                    {language === 'ar' ? 'مقاس الشعار (عرض الشعار بالبكسل):' : 'Logo Width (px):'}
                  </label>
                  <span className="font-cairo font-bold text-[#C99A42] bg-white px-2 py-0.5 rounded-md border border-[#E8DFD0]">
                    {settings.logoWidth || 40} px
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-stone-400 font-cairo">24px</span>
                  <input
                    type="range"
                    min="24"
                    max="280"
                    step="2"
                    value={settings.logoWidth || 40}
                    onChange={(e) => setSettings({ ...settings, logoWidth: parseInt(e.target.value) || 40 })}
                    className="flex-1 accent-[#C99A42] cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400 font-cairo">280px</span>
                </div>
              </div>

              {/* 3. Show/Hide Brand Text next to Logo */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-center justify-between gap-4 font-cairo">
                <div className="space-y-1">
                  <span className="font-bold text-[#183B56] block">
                    {language === 'ar' ? 'إظهار اسم الموقع النصي بجانب الشعار' : 'Show Brand Text Next to Logo'}
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    {language === 'ar'
                      ? 'قم بإلغاء التفعيل إذا كان الشعار الذي رفعته عبارة عن صورة مدمجة تحتوي على الأيقونة والاسم معاً (شعار مدمج)'
                      : 'Disable this if your uploaded logo image already incorporates both the icon and the brand name'}
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={settings.showBrandText !== false}
                    onChange={(e) => setSettings({ ...settings, showBrandText: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-stone-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#183B56]"></div>
                </label>
              </div>

              {/* 4. Live Preview in Simulated Navbar */}
              <div className="pt-2 space-y-1.5 font-cairo">
                <span className="text-[11px] text-stone-500 font-semibold block">
                  {language === 'ar' ? 'معاينة حية لشكل الشعار في شريط المهام:' : 'Live Taskbar Logo Preview:'}
                </span>
                <div className="p-4 rounded-xl bg-[#F7F2E8] border border-[#E8DFD0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {settings.logoUrl ? (
                      <img
                        src={settings.logoUrl}
                        alt="TAIBA Preview"
                        style={{ width: `${settings.logoWidth || 40}px` }}
                        className="h-auto max-h-16 object-contain transition-all"
                      />
                    ) : (
                      <div
                        style={{ width: `${settings.logoWidth || 40}px`, height: `${settings.logoWidth || 40}px` }}
                        className="rounded-lg bg-[#183B56] border border-[#C99A42]/50 flex items-center justify-center text-[#C99A42] font-cinzel font-bold text-xl shadow-inner shrink-0"
                      >
                        𓋹
                      </div>
                    )}
                    {settings.showBrandText !== false && (
                      <div>
                        <span className="text-lg font-bold font-cinzel text-[#183B56]">
                          TAIBA <span className="text-[#C99A42] font-cairo">| طيبة</span>
                        </span>
                        <span className="text-[10px] text-stone-400 block font-cairo">
                          {language === 'ar' ? 'هكذا سيظهر الشعار بالضبط في الشريط العلوي' : 'Exact rendering scale'}
                        </span>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-bold font-cairo">
                    {language === 'ar' ? 'مضبوط ومفعّل' : 'Active'}
                  </span>
                </div>
              </div>
            </div>

            {/* 5. Taskbar Elements Configuration */}
            <div className="space-y-4 text-xs font-cairo">
              <h4 className="font-bold text-sm text-[#183B56]">
                {language === 'ar' ? 'عناصر وويدجات شريط المهام' : 'Taskbar Widgets'}
              </h4>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-bold text-[#183B56] block">
                    {language === 'ar' ? 'ويدجت طقس الأقصر والبالون المباشر' : 'Live Weather & Balloon Status'}
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    {language === 'ar'
                      ? 'إظهار زر درجة الحرارة وحالة طيران البالون اليومية في شريط المهام العلوي'
                      : 'Show temperature pill and balloon clearance status in top taskbar'}
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showWeatherInNav !== false}
                    onChange={(e) => setSettings({ ...settings, showWeatherInNav: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-stone-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#183B56]"></div>
                </label>
              </div>

              {/* 6. Contact Information: Email, Phone & Emergency Police */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="space-y-1">
                  <label className="font-bold text-[#183B56] block">البريد الإلكتروني الرسمي للتواصل</label>
                  <input
                    type="email"
                    value={settings.contactEmail || ''}
                    onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                    placeholder="info@taiba.eg"
                    className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#183B56] block">هاتف الاستعلامات الرسمي</label>
                  <input
                    type="text"
                    value={settings.contactPhone}
                    onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                    className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#183B56] block">رقم طوارئ شرطة السياحة</label>
                  <input
                    type="text"
                    value={settings.emergencyTouristPolice}
                    onChange={(e) => setSettings({ ...settings, emergencyTouristPolice: e.target.value })}
                    className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                type="button"
                onClick={() => showToast(language === 'ar' ? 'تم حفظ إعدادات شريط المهام والشعار بنجاح ✓' : 'Taskbar settings saved ✓')}
                className="px-6 py-2.5 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs transition-colors font-cairo"
              >
                <Save className="w-4 h-4 text-[#C99A42]" />
                <span>{t('save_changes')}</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TREASURES MANAGEMENT TAB                                       */}
        {/* ============================================================== */}
        {activeTab === 'treasures' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Section Title Editor */}
            <div className="bg-white p-5 rounded-3xl border border-[#E8DFD0] space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-[#183B56]">عنوان ووصف قسم: كنوز طيبة</h4>
                <button
                  type="button"
                  onClick={() => showToast('تم حفظ عنوان قسم كنوز طيبة')}
                  className="px-3.5 py-1.5 bg-[#183B56] text-white rounded-xl font-bold cursor-pointer"
                >
                  حفظ العنوان
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={settings.treasuresTitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, treasuresTitle: createLocal(e.target.value, settings.treasuresTitle?.en) })}
                  placeholder="العنوان الرئيسي لقسم كنوز طيبة"
                  className="border border-stone-300 rounded-xl p-2.5 font-bold text-[#183B56]"
                />
                <input
                  type="text"
                  value={settings.treasuresSubtitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, treasuresSubtitle: createLocal(e.target.value, settings.treasuresSubtitle?.en) })}
                  placeholder="العنوان الفرعي / الوصف"
                  className="border border-stone-300 rounded-xl p-2.5"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute start-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={treasureSearch}
                  onChange={(e) => setTreasureSearch(e.target.value)}
                  placeholder={language === 'ar' ? 'بحث في المعالم (الاسم، الملك، العصر)...' : 'Search treasures...'}
                  className="w-full bg-white border border-[#E8DFD0] rounded-xl ps-9 pe-4 py-2 text-xs text-[#183B56] focus:outline-hidden focus:border-[#C99A42]"
                />
              </div>

              <button
                onClick={() => {
                  const newTreasure: Treasure = {
                    id: `treasure_${Date.now()}`,
                    name: createLocal('معلم جديد', 'New Monument'),
                    shortDesc: createLocal('نبذة عن المعلم الجديد', 'Description of the new monument'),
                    fullHistory: createLocal('تاريخ مفصل للمعلم', 'Detailed history'),
                    story: createLocal('قصة ورمزية المعلم', 'Legend & Symbolism'),
                    category: 'east_temple',
                    bank: 'east_bank',
                    epoch: createLocal('الدولة الحديثة', 'New Kingdom'),
                    pharaoh: createLocal('الملك الراعي', 'Pharaoh'),
                    architecturalHighlights: [createLocal('عنصر معماري بارز', 'Highlight')],
                    mustSee: [createLocal('أهم عنصر للزيارة', 'Must-see feature')],
                    mainImage: '/src/assets/images/karnak_hypostyle_hall_1794257301105.jpg',
                    galleryImages: [],
                    coordinates: { lat: 25.7188, lng: 32.6573 },
                    distanceFromCenterKm: 3.0,
                    openingHours: createLocal('يومياً 6:00 ص - 5:00 م', 'Daily 6:00 AM - 5:00 PM'),
                    ticketPrice: createLocal('تذكرة رسمية بوزارة الآثار', 'Official ticket'),
                    status: 'open',
                    order: treasures.length + 1,
                  };
                  setTreasures([newTreasure, ...treasures]);
                  setEditingTreasure(newTreasure);
                }}
                className="px-4 py-2 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4 text-[#C99A42]" />
                <span>{language === 'ar' ? 'إضافة معلم جديد' : 'Add New Monument'}</span>
              </button>
            </div>

            {/* Editing Form / Modal for Treasure */}
            {editingTreasure && (
              <form onSubmit={handleSaveTreasure} className="bg-white p-6 rounded-3xl border-2 border-[#C99A42] space-y-4 shadow-xl animate-in fade-in">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h4 className="font-bold text-sm text-[#183B56] font-cairo flex items-center gap-2">
                    <Edit className="w-4 h-4 text-[#C99A42]" />
                    <span>{language === 'ar' ? `تعديل: ${editingTreasure.name.ar}` : `Edit: ${editingTreasure.name.en}`}</span>
                  </h4>
                  <button
                    type="button"
                    onClick={() => setEditingTreasure(null)}
                    className="p-1 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Direct Image Upload from Device for this Monument */}
                <ImageUploadControl
                  currentUrl={editingTreasure.mainImage}
                  onImageChanged={(newUrl) => setEditingTreasure({ ...editingTreasure, mainImage: newUrl })}
                  label={language === 'ar' ? 'الصورة الرئيسية للمعلم (ارفع من جهازك أو اختر رابطاً)' : 'Main Monument Image'}
                  language={language}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">الاسم بالعربية</label>
                    <input
                      type="text"
                      value={editingTreasure.name.ar}
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, name: createLocal(e.target.value, editingTreasure.name.en) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">English Name</label>
                    <input
                      type="text"
                      value={editingTreasure.name.en}
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, name: createLocal(editingTreasure.name.ar, e.target.value) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">الملك / الراعي</label>
                    <input
                      type="text"
                      value={editingTreasure.pharaoh.ar}
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, pharaoh: createLocal(e.target.value, editingTreasure.pharaoh.en) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">العصر التاريخي</label>
                    <input
                      type="text"
                      value={editingTreasure.epoch.ar}
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, epoch: createLocal(e.target.value, editingTreasure.epoch.en) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">الضفة</label>
                    <select
                      value={editingTreasure.bank}
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, bank: e.target.value as any })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    >
                      <option value="east_bank">البر الشرقي (East Bank)</option>
                      <option value="west_bank">البر الغربي (West Bank)</option>
                      <option value="surroundings">المحيط والجوار</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">حالة الزيارة</label>
                    <select
                      value={editingTreasure.status}
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, status: e.target.value as any })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    >
                      <option value="open">مفتوح للزيارة (Open)</option>
                      <option value="permit_required">تصريح خاص (Permit Required)</option>
                      <option value="closed">مغلق للترميم (Closed)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">سعر تذكرة الدخول الرسمية (عربي)</label>
                    <input
                      type="text"
                      value={editingTreasure.ticketPrice?.ar || ''}
                      placeholder="مثال: للمصريين 40 ج.م / للأجانب 450 ج.م"
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, ticketPrice: createLocal(e.target.value, editingTreasure.ticketPrice?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">سعر التذكرة بالإنجليزية (Ticket Price)</label>
                    <input
                      type="text"
                      value={editingTreasure.ticketPrice?.en || ''}
                      placeholder="e.g. 450 EGP Foreigners / 40 EGP Egyptians"
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, ticketPrice: createLocal(editingTreasure.ticketPrice?.ar || e.target.value, e.target.value) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">ساعات ومواعيد الزيارة (عربي)</label>
                    <input
                      type="text"
                      value={editingTreasure.openingHours?.ar || ''}
                      placeholder="مثال: يومياً 6:00 ص - 5:30 م"
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, openingHours: createLocal(e.target.value, editingTreasure.openingHours?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">مواعيد الزيارة بالإنجليزية (Opening Hours)</label>
                    <input
                      type="text"
                      value={editingTreasure.openingHours?.en || ''}
                      placeholder="e.g. Daily 6:00 AM - 5:30 PM"
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, openingHours: createLocal(editingTreasure.openingHours?.ar || e.target.value, e.target.value) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    />
                  </div>

                  <div className="space-y-1 md:col-span-2">
                    <label className="font-semibold block text-stone-700">النبذة الوصفية القصيرة</label>
                    <textarea
                      value={editingTreasure.shortDesc.ar}
                      onChange={(e) => setEditingTreasure({ ...editingTreasure, shortDesc: createLocal(e.target.value, editingTreasure.shortDesc.en) })}
                      className="w-full border border-stone-300 rounded-lg p-2 h-20"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setEditingTreasure(null)}
                    className="px-4 py-2 border border-stone-200 text-stone-600 rounded-xl text-xs"
                  >
                    {language === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#183B56] hover:bg-[#102738] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Save className="w-3.5 h-3.5 text-[#C99A42]" />
                    <span>{t('save_changes')}</span>
                  </button>
                </div>
              </form>
            )}

            {/* Treasures Table */}
            <div className="bg-white rounded-3xl border border-[#E8DFD0] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-start text-xs">
                  <thead className="bg-[#F7F2E8] border-b border-[#E8DFD0] text-stone-600 font-bold">
                    <tr>
                      <th className="p-3 text-start">{language === 'ar' ? 'الصورة' : 'Image'}</th>
                      <th className="p-3 text-start">{language === 'ar' ? 'اسم المعلم' : 'Monument Name'}</th>
                      <th className="p-3 text-start">{language === 'ar' ? 'الملك / الراعي' : 'Pharaoh'}</th>
                      <th className="p-3 text-start">{language === 'ar' ? 'الضفة' : 'Bank'}</th>
                      <th className="p-3 text-start">{language === 'ar' ? 'الحالة' : 'Status'}</th>
                      <th className="p-3 text-center">{language === 'ar' ? 'إجراءات وتغيير الصورة' : 'Actions'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {treasures
                      .filter((item) => {
                        if (!treasureSearch.trim()) return true;
                        const q = treasureSearch.toLowerCase();
                        return (
                          item.name.ar.toLowerCase().includes(q) ||
                          item.name.en.toLowerCase().includes(q) ||
                          item.pharaoh.ar.toLowerCase().includes(q)
                        );
                      })
                      .map((item) => (
                        <tr key={item.id} className="hover:bg-[#F7F2E8]/40 transition-colors">
                          <td className="p-3">
                            <div className="relative group w-12 h-12 rounded-lg overflow-hidden border border-[#E8DFD0]">
                              <img src={item.mainImage} alt={item.name.ar} className="w-full h-full object-cover" />
                              {/* Quick Image Upload Button right on thumbnail */}
                              <label
                                className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                title={language === 'ar' ? 'تغيير الصورة من الجهاز فوراً' : 'Quick upload photo'}
                              >
                                <Camera className="w-4 h-4 text-[#C99A42]" />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleQuickTreasureImageUpload(item.id, file);
                                  }}
                                />
                              </label>
                            </div>
                          </td>
                          <td className="p-3 font-semibold text-[#183B56]">
                            <span>{item.name[language] || item.name.ar}</span>
                            <span className="block text-[10px] text-stone-400 font-mono">{item.id}</span>
                          </td>
                          <td className="p-3 text-stone-600">{item.pharaoh[language] || item.pharaoh.ar}</td>
                          <td className="p-3 text-stone-600">
                            {item.bank === 'east_bank'
                              ? t('east_bank')
                              : item.bank === 'west_bank'
                              ? t('west_bank')
                              : t('surroundings')}
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {item.status}
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                onClick={() => setEditingTreasure(item)}
                                className="p-1.5 rounded-lg text-stone-500 hover:text-[#183B56] hover:bg-[#F7F2E8] transition-colors cursor-pointer"
                                title="Edit"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm(language === 'ar' ? 'هل أنت متأكد من حذف هذا المعلم؟' : 'Delete this monument?')) {
                                    setTreasures((prev) => prev.filter((t) => t.id !== item.id));
                                    showToast(language === 'ar' ? 'تم حذف المعلم' : 'Deleted monument');
                                  }
                                }}
                                className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* EXPERIENCES MANAGEMENT TAB                                     */}
        {/* ============================================================== */}
        {activeTab === 'experiences' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Section Title Editor */}
            <div className="bg-white p-5 rounded-3xl border border-[#E8DFD0] space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <h4 className="font-bold text-sm text-[#183B56]">العناوين الرئيسية والفرعية لقسم التجارب والطبيعة والثقافة</h4>
                <button
                  type="button"
                  onClick={() => showToast('تم حفظ عناوين التجارب والطبيعة والثقافة')}
                  className="px-3.5 py-1.5 bg-[#183B56] text-white rounded-xl font-bold cursor-pointer"
                >
                  حفظ العناوين
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={settings.experiencesTitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, experiencesTitle: createLocal(e.target.value, settings.experiencesTitle?.en) })}
                  placeholder="العنوان الرئيسي للتجارب"
                  className="border border-stone-300 rounded-xl p-2 font-bold text-[#183B56]"
                />
                <input
                  type="text"
                  value={settings.experiencesSubtitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, experiencesSubtitle: createLocal(e.target.value, settings.experiencesSubtitle?.en) })}
                  placeholder="الوصف الفرعي للتجارب"
                  className="border border-stone-300 rounded-xl p-2"
                />
                <input
                  type="text"
                  value={settings.natureTitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, natureTitle: createLocal(e.target.value, settings.natureTitle?.en) })}
                  placeholder="العنوان الرئيسي للطبيعة والنيل"
                  className="border border-stone-300 rounded-xl p-2 font-bold text-[#183B56]"
                />
                <input
                  type="text"
                  value={settings.natureSubtitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, natureSubtitle: createLocal(e.target.value, settings.natureSubtitle?.en) })}
                  placeholder="الوصف الفرعي للطبيعة والنيل"
                  className="border border-stone-300 rounded-xl p-2"
                />
                <input
                  type="text"
                  value={settings.cultureTitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, cultureTitle: createLocal(e.target.value, settings.cultureTitle?.en) })}
                  placeholder="العنوان الرئيسي لثقافة طيبة"
                  className="border border-stone-300 rounded-xl p-2 font-bold text-[#183B56]"
                />
                <input
                  type="text"
                  value={settings.cultureSubtitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, cultureSubtitle: createLocal(e.target.value, settings.cultureSubtitle?.en) })}
                  placeholder="الوصف الفرعي لثقافة طيبة"
                  className="border border-stone-300 rounded-xl p-2"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#183B56]">
                {language === 'ar' ? 'إدارة التجارب والأنشطة السياحية' : 'Tour Experiences Management'}
              </h3>
              <button
                onClick={() => {
                  const newExp: Experience = {
                    id: `exp_${Date.now()}`,
                    title: createLocal('تجربة سياحية جديدة', 'New Tour Experience'),
                    shortDesc: createLocal('وصف التجربة وأبرز مميزاتها', 'Description of the tour'),
                    fullDesc: createLocal('تفاصيل التجربة الكاملة', 'Full tour details'),
                    location: createLocal('الأقصر، البر الغربي', 'Luxor, West Bank'),
                    image: '/src/assets/images/hot_air_balloon_luxor_dawn_1794257302484.jpg',
                    gallery: [],
                    duration: createLocal('ساعتان', '2 Hours'),
                    priceNote: createLocal('1500 ج.م / $35 للفرد', '1500 EGP / $35 per person'),
                    bestTime: createLocal('الفجر مع شروق الشمس', 'Dawn at Sunrise'),
                    included: [createLocal('الانتقالات والشاي الصعيدي', 'Transfers & Bedouin Tea')],
                    category: 'air',
                  };
                  setExperiences([newExp, ...experiences]);
                  setEditingExperience(newExp);
                }}
                className="px-4 py-2 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4 text-[#C99A42]" />
                <span>{language === 'ar' ? 'إضافة تجربة جديدة' : 'Add Experience'}</span>
              </button>
            </div>

            {/* Experience Edit Form */}
            {editingExperience && (
              <form onSubmit={handleSaveExperience} className="bg-white p-6 rounded-3xl border-2 border-[#C99A42] space-y-4 shadow-xl animate-in fade-in">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h4 className="font-bold text-sm text-[#183B56] font-cairo">
                    {language === 'ar' ? `تعديل التجربة: ${editingExperience.title.ar}` : `Edit: ${editingExperience.title.en}`}
                  </h4>
                  <button type="button" onClick={() => setEditingExperience(null)} className="text-stone-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <ImageUploadControl
                  currentUrl={editingExperience.image}
                  onImageChanged={(newUrl) => setEditingExperience({ ...editingExperience, image: newUrl })}
                  label={language === 'ar' ? 'صورة التجربة (ارفع من جهازك أو اكتب رابطاً)' : 'Experience Image'}
                  language={language}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">العنوان بالعربية</label>
                    <input
                      type="text"
                      value={editingExperience.title.ar}
                      onChange={(e) => setEditingExperience({ ...editingExperience, title: createLocal(e.target.value, editingExperience.title.en) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">English Title</label>
                    <input
                      type="text"
                      value={editingExperience.title.en}
                      onChange={(e) => setEditingExperience({ ...editingExperience, title: createLocal(editingExperience.title.ar, e.target.value) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">ملاحظة السعر والتكلفة</label>
                    <input
                      type="text"
                      value={editingExperience.priceNote.ar}
                      onChange={(e) => setEditingExperience({ ...editingExperience, priceNote: createLocal(e.target.value, editingExperience.priceNote.en) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">المدة الزمنية</label>
                    <input
                      type="text"
                      value={editingExperience.duration.ar}
                      onChange={(e) => setEditingExperience({ ...editingExperience, duration: createLocal(e.target.value, editingExperience.duration.en) })}
                      className="w-full border border-stone-300 rounded-lg p-2"
                    />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="font-semibold block text-stone-700">الوصف</label>
                    <textarea
                      value={editingExperience.shortDesc.ar}
                      onChange={(e) => setEditingExperience({ ...editingExperience, shortDesc: createLocal(e.target.value, editingExperience.shortDesc.en) })}
                      className="w-full border border-stone-300 rounded-lg p-2 h-20"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
                  <button type="button" onClick={() => setEditingExperience(null)} className="px-4 py-2 border rounded-xl text-xs">
                    {language === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button type="submit" className="px-5 py-2 bg-[#183B56] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5">
                    <Save className="w-3.5 h-3.5 text-[#C99A42]" />
                    <span>{t('save_changes')}</span>
                  </button>
                </div>
              </form>
            )}

            {/* Experiences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden p-4 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 group">
                      <img src={exp.image} alt={exp.title.ar} className="w-full h-full object-cover" />
                      {/* Direct upload badge */}
                      <label
                        className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        title={language === 'ar' ? 'رفع صورة جديدة من جهازك' : 'Upload photo'}
                      >
                        <Camera className="w-5 h-5 text-[#C99A42]" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const r = new FileReader();
                              r.onload = () => {
                                setExperiences((prev) =>
                                  prev.map((item) => (item.id === exp.id ? { ...item, image: r.result as string } : item))
                                );
                                showToast(language === 'ar' ? 'تم استبدال صورة التجربة' : 'Updated image');
                              };
                              r.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                    </div>

                    <h4 className="font-bold text-sm text-[#183B56]">{exp.title[language] || exp.title.ar}</h4>
                    <p className="text-xs text-stone-500 line-clamp-2">{exp.shortDesc[language] || exp.shortDesc.ar}</p>
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-[#C99A42]">
                      <span>{exp.priceNote[language] || exp.priceNote.ar}</span>
                      <span className="text-stone-400 font-sans">{exp.duration.ar}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-end gap-2">
                    <button
                      onClick={() => setEditingExperience(exp)}
                      className="p-1.5 rounded-lg text-stone-600 hover:bg-[#F7F2E8] cursor-pointer"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(language === 'ar' ? 'حذف هذه التجربة؟' : 'Delete experience?')) {
                          setExperiences((prev) => prev.filter((item) => item.id !== exp.id));
                          showToast(language === 'ar' ? 'تم الحذف' : 'Deleted');
                        }
                      }}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* HOSPITALITY: RESTAURANTS & HOTELS                              */}
        {/* ============================================================== */}
        {activeTab === 'hospitality' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Section Title & Subtitle Editor for Taste & Stay */}
            <div className="bg-white p-5 rounded-3xl border border-[#E8DFD0] space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <h4 className="font-bold text-sm text-[#183B56]">العناوين الرئيسية والفرعية لقسم تذوق الأقصر والإقامة</h4>
                <button
                  type="button"
                  onClick={() => showToast('تم حفظ عناوين قسم المطاعم والفنادق')}
                  className="px-3.5 py-1.5 bg-[#183B56] text-white rounded-xl font-bold cursor-pointer"
                >
                  حفظ العناوين
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-600 block">عنوان قسم تذوق الأقصر</label>
                  <input
                    type="text"
                    value={settings.tasteTitle?.ar || ''}
                    onChange={(e) => setSettings({ ...settings, tasteTitle: createLocal(e.target.value, settings.tasteTitle?.en) })}
                    className="w-full border border-stone-300 rounded-xl p-2 font-bold text-[#183B56]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-stone-600 block">الوصف الفرعي لتذوق الأقصر</label>
                  <input
                    type="text"
                    value={settings.tasteSubtitle?.ar || ''}
                    onChange={(e) => setSettings({ ...settings, tasteSubtitle: createLocal(e.target.value, settings.tasteSubtitle?.en) })}
                    className="w-full border border-stone-300 rounded-xl p-2"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-stone-600 block">عنوان قسم الإقامة والفنادق</label>
                  <input
                    type="text"
                    value={settings.stayTitle?.ar || ''}
                    onChange={(e) => setSettings({ ...settings, stayTitle: createLocal(e.target.value, settings.stayTitle?.en) })}
                    className="w-full border border-stone-300 rounded-xl p-2 font-bold text-[#183B56]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-stone-600 block">الوصف الفرعي للإقامة والفنادق</label>
                  <input
                    type="text"
                    value={settings.staySubtitle?.ar || ''}
                    onChange={(e) => setSettings({ ...settings, staySubtitle: createLocal(e.target.value, settings.staySubtitle?.en) })}
                    className="w-full border border-stone-300 rounded-xl p-2"
                  />
                </div>
              </div>
            </div>

            {/* Sub-tab navigation */}
            <div className="flex items-center justify-between border-b border-[#E8DFD0] pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHospitalitySubTab('restaurants')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                    hospitalitySubTab === 'restaurants' ? 'bg-[#183B56] text-white' : 'bg-white text-stone-600 border'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5 inline me-1.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? `المطاعم (${restaurants.length})` : `Restaurants (${restaurants.length})`}</span>
                </button>
                <button
                  onClick={() => setHospitalitySubTab('hotels')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                    hospitalitySubTab === 'hotels' ? 'bg-[#183B56] text-white' : 'bg-white text-stone-600 border'
                  }`}
                >
                  <HotelIcon className="w-3.5 h-3.5 inline me-1.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? `الفنادق والإقامة (${hotels.length})` : `Hotels (${hotels.length})`}</span>
                </button>
              </div>

              {hospitalitySubTab === 'restaurants' ? (
                <button
                  onClick={() => {
                    const newR: Restaurant = {
                      id: `rest_${Date.now()}`,
                      name: createLocal('مطعم جديد', 'New Restaurant'),
                      type: createLocal('مأكولات شرقية وصعيدية', 'Egyptian Cuisine'),
                      atmosphere: createLocal('إطلالة نيلية خلابة', 'Nile View Atmosphere'),
                      description: createLocal('إطلالة نيلية رائعة وأطباق طازجة', 'Riverfront dining'),
                      location: createLocal('كورنيش النيل، الأقصر', 'Nile Corniche'),
                      priceRange: '250 - 450 ج.م للفرد',
                      image: '/src/assets/images/culinary_flavors_luxor_1794257303867.jpg',
                      bank: 'east_bank',
                      specialtyDishes: [createLocal('طاجن بامية صعيدي', 'Upper Egyptian Tagine')],
                      contact: '',
                      coordinates: { lat: 25.698, lng: 32.64 },
                    };
                    setRestaurants([newR, ...restaurants]);
                    setEditingRestaurant(newR);
                  }}
                  className="px-3.5 py-2 bg-[#183B56] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'إضافة مطعم جديد' : 'Add Restaurant'}</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    const newH: Hotel = {
                      id: `hotel_${Date.now()}`,
                      name: createLocal('فندق جديد', 'New Hotel'),
                      stars: 5,
                      category: 'luxury',
                      description: createLocal('قصر فاخر وإطلالة استثنائية على النيل', 'Historic retreat'),
                      location: createLocal('الأقصر، البر الشرقي', 'Luxor East Bank'),
                      priceRange: 'تبدأ من 2,500 ج.م / ليلة',
                      image: '/src/assets/images/winter_palace_luxor_exterior_1794257305216.jpg',
                      gallery: [],
                      features: [createLocal('إطلالة نيلية', 'Nile View')],
                      bank: 'east_bank',
                      contact: '',
                      coordinates: { lat: 25.699, lng: 32.638 },
                    };
                    setHotels([newH, ...hotels]);
                    setEditingHotel(newH);
                  }}
                  className="px-3.5 py-2 bg-[#183B56] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'إضافة فندق جديد' : 'Add Hotel'}</span>
                </button>
              )}
            </div>

            {/* Restaurant Edit Modal */}
            {editingRestaurant && (
              <form onSubmit={handleSaveRestaurant} className="bg-white p-6 rounded-3xl border-2 border-[#C99A42] space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b pb-3">
                  <h4 className="font-bold text-sm text-[#183B56]">{editingRestaurant.name.ar}</h4>
                  <button type="button" onClick={() => setEditingRestaurant(null)}><X className="w-4 h-4" /></button>
                </div>
                <ImageUploadControl
                  currentUrl={editingRestaurant.image}
                  onImageChanged={(newUrl) => setEditingRestaurant({ ...editingRestaurant, image: newUrl })}
                  label={language === 'ar' ? 'صورة المطعم (ارفع من جهازك)' : 'Restaurant Image'}
                  language={language}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="font-semibold block">اسم المطعم (عربي)</label>
                    <input
                      type="text"
                      value={editingRestaurant.name.ar}
                      onChange={(e) => setEditingRestaurant({ ...editingRestaurant, name: createLocal(e.target.value, editingRestaurant.name.en) })}
                      className="w-full border p-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block">المطبخ / النوع</label>
                    <input
                      type="text"
                      value={editingRestaurant.type.ar}
                      onChange={(e) => setEditingRestaurant({ ...editingRestaurant, type: createLocal(e.target.value, editingRestaurant.type.en) })}
                      className="w-full border p-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block">متوسط الأسعار</label>
                    <input
                      type="text"
                      value={editingRestaurant.priceRange}
                      onChange={(e) => setEditingRestaurant({ ...editingRestaurant, priceRange: e.target.value })}
                      placeholder="مثال: 250 - 500 ج.م للفرد"
                      className="w-full border p-2 rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="font-semibold block">الوصف</label>
                    <textarea
                      value={editingRestaurant.description.ar}
                      onChange={(e) => setEditingRestaurant({ ...editingRestaurant, description: createLocal(e.target.value, editingRestaurant.description.en) })}
                      className="w-full border p-2 rounded-lg h-16"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-2 border-t">
                  <button type="button" onClick={() => setEditingRestaurant(null)} className="px-4 py-2 border rounded-xl text-xs">إلغاء</button>
                  <button type="submit" className="px-5 py-2 bg-[#183B56] text-white rounded-xl text-xs font-bold">حفظ التعديلات</button>
                </div>
              </form>
            )}

            {/* Hotel Edit Modal */}
            {editingHotel && (
              <form onSubmit={handleSaveHotel} className="bg-white p-6 rounded-3xl border-2 border-[#C99A42] space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b pb-3">
                  <h4 className="font-bold text-sm text-[#183B56]">{editingHotel.name.ar}</h4>
                  <button type="button" onClick={() => setEditingHotel(null)}><X className="w-4 h-4" /></button>
                </div>
                <ImageUploadControl
                  currentUrl={editingHotel.image}
                  onImageChanged={(newUrl) => setEditingHotel({ ...editingHotel, image: newUrl })}
                  label={language === 'ar' ? 'صورة الفندق (ارفع من جهازك)' : 'Hotel Image'}
                  language={language}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="font-semibold block">اسم الفندق (عربي)</label>
                    <input
                      type="text"
                      value={editingHotel.name.ar}
                      onChange={(e) => setEditingHotel({ ...editingHotel, name: createLocal(e.target.value, editingHotel.name.en) })}
                      className="w-full border p-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block">عدد النجوم</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={editingHotel.stars}
                      onChange={(e) => setEditingHotel({ ...editingHotel, stars: Number(e.target.value) })}
                      className="w-full border p-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block">نطاق السعر لليلة</label>
                    <input
                      type="text"
                      value={editingHotel.priceRange}
                      onChange={(e) => setEditingHotel({ ...editingHotel, priceRange: e.target.value })}
                      placeholder="مثال: تبدأ من 3,500 ج.م / ليلة"
                      className="w-full border p-2 rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="font-semibold block">الوصف</label>
                    <textarea
                      value={editingHotel.description.ar}
                      onChange={(e) => setEditingHotel({ ...editingHotel, description: createLocal(e.target.value, editingHotel.description.en) })}
                      className="w-full border p-2 rounded-lg h-16"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-2 border-t">
                  <button type="button" onClick={() => setEditingHotel(null)} className="px-4 py-2 border rounded-xl text-xs">إلغاء</button>
                  <button type="submit" className="px-5 py-2 bg-[#183B56] text-white rounded-xl text-xs font-bold">حفظ الفندق</button>
                </div>
              </form>
            )}

            {/* Lists */}
            {hospitalitySubTab === 'restaurants' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurants.map((rest) => (
                  <div key={rest.id} className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden p-4 space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="relative aspect-video rounded-xl overflow-hidden group">
                        <img src={rest.image} alt={rest.name.ar} className="w-full h-full object-cover" />
                        <label className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Camera className="w-5 h-5 text-[#C99A42]" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) {
                                const rd = new FileReader();
                                rd.onload = () => {
                                  setRestaurants((prev) => prev.map((item) => (item.id === rest.id ? { ...item, image: rd.result as string } : item)));
                                  showToast('تم تحديث صورة المطعم');
                                };
                                rd.readAsDataURL(f);
                              }
                            }}
                          />
                        </label>
                      </div>
                      <h4 className="font-bold text-sm text-[#183B56]">{rest.name[language] || rest.name.ar}</h4>
                      <p className="text-xs text-stone-500">{rest.type[language] || rest.type.ar}</p>
                    </div>
                    <div className="pt-2 border-t flex items-center justify-end gap-2">
                      <button onClick={() => setEditingRestaurant(rest)} className="p-1.5 hover:bg-stone-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => setRestaurants((prev) => prev.filter((item) => item.id !== rest.id))} className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hotels.map((h) => (
                  <div key={h.id} className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden p-4 space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="relative aspect-video rounded-xl overflow-hidden group">
                        <img src={h.image} alt={h.name.ar} className="w-full h-full object-cover" />
                        <label className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Camera className="w-5 h-5 text-[#C99A42]" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) {
                                const rd = new FileReader();
                                rd.onload = () => {
                                  setHotels((prev) => prev.map((item) => (item.id === h.id ? { ...item, image: rd.result as string } : item)));
                                  showToast('تم تحديث صورة الفندق');
                                };
                                rd.readAsDataURL(f);
                              }
                            }}
                          />
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-[#183B56]">{h.name[language] || h.name.ar}</h4>
                        <div className="flex text-[#C99A42] text-xs">
                          {Array.from({ length: h.stars }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t flex items-center justify-end gap-2">
                      <button onClick={() => setEditingHotel(h)} className="p-1.5 hover:bg-stone-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => setHotels((prev) => prev.filter((item) => item.id !== h.id))} className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* ARTICLES & EVENTS TAB                                          */}
        {/* ============================================================== */}
        {activeTab === 'articles_events' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Section Header Editor */}
            <div className="bg-white p-5 rounded-3xl border border-[#E8DFD0] space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <h4 className="font-bold text-sm text-[#183B56]">العناوين الرئيسية والفرعية لقسم حكايات طيبة والفعاليات</h4>
                <button
                  type="button"
                  onClick={() => showToast('تم حفظ عناوين الحكايات والفعاليات')}
                  className="px-3.5 py-1.5 bg-[#183B56] text-white rounded-xl font-bold cursor-pointer"
                >
                  حفظ العناوين
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={settings.talesTitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, talesTitle: createLocal(e.target.value, settings.talesTitle?.en) })}
                  placeholder="عنوان قسم حكايات طيبة"
                  className="border border-stone-300 rounded-xl p-2 font-bold text-[#183B56]"
                />
                <input
                  type="text"
                  value={settings.talesSubtitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, talesSubtitle: createLocal(e.target.value, settings.talesSubtitle?.en) })}
                  placeholder="الوصف الفرعي لحكايات طيبة"
                  className="border border-stone-300 rounded-xl p-2"
                />
                <input
                  type="text"
                  value={settings.eventsTitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, eventsTitle: createLocal(e.target.value, settings.eventsTitle?.en) })}
                  placeholder="عنوان قسم المواسم والفعاليات"
                  className="border border-stone-300 rounded-xl p-2 font-bold text-[#183B56]"
                />
                <input
                  type="text"
                  value={settings.eventsSubtitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, eventsSubtitle: createLocal(e.target.value, settings.eventsSubtitle?.en) })}
                  placeholder="الوصف الفرعي للفعاليات"
                  className="border border-stone-300 rounded-xl p-2"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setArticlesEventsSubTab('articles')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                    articlesEventsSubTab === 'articles' ? 'bg-[#183B56] text-white' : 'bg-white text-stone-600 border'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 inline me-1.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? `حكايات ومقالات طيبة (${articles.length})` : `Articles (${articles.length})`}</span>
                </button>
                <button
                  onClick={() => setArticlesEventsSubTab('events')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                    articlesEventsSubTab === 'events' ? 'bg-[#183B56] text-white' : 'bg-white text-stone-600 border'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 inline me-1.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? `الفعاليات والمواسم (${events.length})` : `Events (${events.length})`}</span>
                </button>
              </div>

              {articlesEventsSubTab === 'articles' && (
                <button
                  type="button"
                  onClick={() => {
                    const newArt: Article = {
                      id: `article_${Date.now()}`,
                      title: createLocal('حكاية جديدة من طيبة', 'New Tale of Thebes'),
                      excerpt: createLocal('نبذة مختصرة عن القصة التاريخية', 'Brief excerpt'),
                      content: createLocal('نص القصة الكاملة وتفاصيلها التاريخية الموثقة...', 'Full historical narrative...'),
                      category: createLocal('أسرار الآثار', 'Archaeological Secrets'),
                      coverImage: '/src/assets/images/karnak_hypostyle_hall_1794257301105.jpg',
                      readTimeMin: 5,
                      author: createLocal('مؤرخ وباحث في علم المصريات', 'Egyptologist & Historian'),
                      publishedDate: new Date().toLocaleDateString('ar-EG'),
                      tags: ['تاريخ', 'طيبة', 'فراعنة'],
                    };
                    setArticles([newArt, ...articles]);
                    setEditingArticle(newArt);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-[#183B56] hover:bg-[#102738] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'إضافة قصة / مقال جديد' : 'Add Article'}</span>
                </button>
              )}
            </div>

            {/* Article Edit Modal */}
            {editingArticle && (
              <form onSubmit={handleSaveArticle} className="bg-white p-6 rounded-3xl border-2 border-[#C99A42] space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b pb-3">
                  <h4 className="font-bold text-sm text-[#183B56]">{editingArticle.title.ar}</h4>
                  <button type="button" onClick={() => setEditingArticle(null)}><X className="w-4 h-4" /></button>
                </div>
                <ImageUploadControl
                  currentUrl={editingArticle.coverImage}
                  onImageChanged={(newUrl) => setEditingArticle({ ...editingArticle, coverImage: newUrl })}
                  label={language === 'ar' ? 'صورة المقال (ارفع من جهازك)' : 'Article Cover Image'}
                  language={language}
                />
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-semibold block">العنوان</label>
                    <input
                      type="text"
                      value={editingArticle.title.ar}
                      onChange={(e) => setEditingArticle({ ...editingArticle, title: createLocal(e.target.value, editingArticle.title.en) })}
                      className="w-full border p-2 rounded-lg"
                    />
                  </div>

                  {/* اسم الكاتب والمؤلف */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-semibold block text-stone-700">اسم كاتب القصة / المؤلف (بالعربية)</label>
                      <input
                        type="text"
                        value={editingArticle.author?.ar || ''}
                        placeholder="مثال: د. زاهي حواس أو باحث في علم المصريات"
                        onChange={(e) =>
                          setEditingArticle({
                            ...editingArticle,
                            author: createLocal(e.target.value, editingArticle.author?.en || e.target.value),
                          })
                        }
                        className="w-full border border-stone-300 p-2 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-semibold block text-stone-700">اسم الكاتب بالإنجليزية (Author Name)</label>
                      <input
                        type="text"
                        value={editingArticle.author?.en || ''}
                        placeholder="e.g. Dr. Egyptology Researcher"
                        onChange={(e) =>
                          setEditingArticle({
                            ...editingArticle,
                            author: createLocal(editingArticle.author?.ar || e.target.value, e.target.value),
                          })
                        }
                        className="w-full border border-stone-300 p-2 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold block">المقتطف المختصر</label>
                    <textarea
                      value={editingArticle.excerpt.ar}
                      onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: createLocal(e.target.value, editingArticle.excerpt.en) })}
                      className="w-full border p-2 rounded-lg h-16"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block">المحتوى الكامل للمقال</label>
                    <textarea
                      value={editingArticle.content.ar}
                      onChange={(e) => setEditingArticle({ ...editingArticle, content: createLocal(e.target.value, editingArticle.content.en) })}
                      className="w-full border p-2 rounded-lg h-36"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-2 border-t">
                  <button type="button" onClick={() => setEditingArticle(null)} className="px-4 py-2 border rounded-xl text-xs">إلغاء</button>
                  <button type="submit" className="px-5 py-2 bg-[#183B56] text-white rounded-xl text-xs font-bold">حفظ المقال</button>
                </div>
              </form>
            )}

            {/* List */}
            {articlesEventsSubTab === 'articles' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((art) => (
                  <div key={art.id} className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden p-4 space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="relative aspect-video rounded-xl overflow-hidden group">
                        <img src={art.coverImage} alt={art.title.ar} className="w-full h-full object-cover" />
                        <label className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Camera className="w-5 h-5 text-[#C99A42]" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) {
                                const rd = new FileReader();
                                rd.onload = () => {
                                  setArticles((prev) => prev.map((item) => (item.id === art.id ? { ...item, coverImage: rd.result as string } : item)));
                                  showToast('تم تحديث صورة المقال');
                                };
                                rd.readAsDataURL(f);
                              }
                            }}
                          />
                        </label>
                      </div>
                      <h4 className="font-bold text-sm text-[#183B56]">{art.title[language] || art.title.ar}</h4>
                      <p className="text-xs text-stone-500 line-clamp-2">{art.excerpt[language] || art.excerpt.ar}</p>
                    </div>
                    <div className="pt-2 border-t flex items-center justify-end gap-2">
                      <button onClick={() => setEditingArticle(art)} className="p-1.5 hover:bg-stone-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => setArticles((prev) => prev.filter((item) => item.id !== art.id))} className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((ev) => (
                  <div key={ev.id} className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden p-4 space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="relative aspect-video rounded-xl overflow-hidden group">
                        <img src={ev.image} alt={ev.title.ar} className="w-full h-full object-cover" />
                        <label className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Camera className="w-5 h-5 text-[#C99A42]" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) {
                                const rd = new FileReader();
                                rd.onload = () => {
                                  setEvents((prev) => prev.map((item) => (item.id === ev.id ? { ...item, image: rd.result as string } : item)));
                                  showToast('تم تحديث صورة الفعالية');
                                };
                                rd.readAsDataURL(f);
                              }
                            }}
                          />
                        </label>
                      </div>
                      <h4 className="font-bold text-sm text-[#183B56]">{ev.title[language] || ev.title.ar}</h4>
                      <p className="text-xs text-[#C99A42] font-semibold">{ev.date[language] || ev.date.ar}</p>
                    </div>
                    <div className="pt-2 border-t flex items-center justify-end gap-2">
                      <button onClick={() => setEvents((prev) => prev.filter((item) => item.id !== ev.id))} className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TRIP PLANNER MANAGEMENT TAB                                    */}
        {/* ============================================================== */}
        {activeTab === 'planner' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] space-y-6 animate-in fade-in max-w-4xl shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'إدارة مخطط الرحلات الذكي' : 'Trip Planner Management'}
                </h3>
                <p className="text-xs text-stone-500">
                  {language === 'ar'
                    ? 'التحكم في نصوص وتوجيهات أداة تخطيط الرحلات المخصصة التي يستخدمها الزوار لبناء جداولهم.'
                    : 'Manage custom trip planner headlines, guidance, and settings.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => showToast(language === 'ar' ? 'تم حفظ إعدادات مخطط الرحلات بنجاح' : 'Planner settings saved')}
                className="px-5 py-2.5 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs shrink-0"
              >
                <Save className="w-4 h-4 text-[#C99A42]" />
                <span>{t('save_changes')}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold block text-stone-700">عنوان قسم المخطط بالعربية</label>
                <input
                  type="text"
                  value={settings.plannerTitle?.ar || 'مخطط الرحلات الذكي: حدد أوقاتك وبرنامجك بحرية كاملة'}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      plannerTitle: createLocal(e.target.value, settings.plannerTitle?.en || e.target.value),
                    })
                  }
                  className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold block text-stone-700">عنوان المخطط بالإنجليزية (Planner Headline)</label>
                <input
                  type="text"
                  value={settings.plannerTitle?.en || 'Smart Trip Planner: Set Your Custom Times & Schedule'}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      plannerTitle: createLocal(settings.plannerTitle?.ar || e.target.value, e.target.value),
                    })
                  }
                  className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold block text-stone-700">الوصف التعريفي بالعربية</label>
                <textarea
                  value={settings.plannerDesc?.ar || 'صمم برنامج زيارتك للأقصر بالساعات والدقائق التي تناسبك؛ حدد عدد الأيام وساعات البداية والنهاية اليومية، وأضف محطاتك الخاصة بكل حرية.'}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      plannerDesc: createLocal(e.target.value, settings.plannerDesc?.en || e.target.value),
                    })
                  }
                  className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo h-20"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold block text-stone-700">الوصف التعريفي بالإنجليزية (Planner Description)</label>
                <textarea
                  value={settings.plannerDesc?.en || 'Customize your daily start/finish hours, adjust days duration, and add custom personal stops to build your bespoke Theban journey.'}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      plannerDesc: createLocal(settings.plannerDesc?.ar || e.target.value, e.target.value),
                    })
                  }
                  className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo h-20"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold block text-stone-700">عنوان قسم الخريطة التفاعلية (عربي)</label>
                <input
                  type="text"
                  value={settings.mapTitle?.ar || ''}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      mapTitle: createLocal(e.target.value, settings.mapTitle?.en || e.target.value),
                    })
                  }
                  className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold block text-stone-700">الوصف الفرعي للخريطة (عربي)</label>
                <input
                  type="text"
                  value={settings.mapSubtitle?.ar || ''}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      mapSubtitle: createLocal(e.target.value, settings.mapSubtitle?.en || e.target.value),
                    })
                  }
                  className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                />
              </div>
            </div>

            <div className="p-4 bg-[#F7F2E8] rounded-2xl border border-[#E8DFD0] space-y-2 text-xs text-[#183B56]">
              <div className="flex items-center gap-2 font-bold">
                <Sparkles className="w-4 h-4 text-[#C99A42]" />
                <span>{language === 'ar' ? 'مزايا المخطط التفاعلي الفعالة للعميل:' : 'Active planner capabilities:'}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-stone-600 text-[11px]">
                <li>{language === 'ar' ? 'حرية تحديد وتيرة الزيارة (مريح 3 ساعات/محطة، متوازن ساعتان، مكثف ساعة واحدة).' : 'Pace adjustment: Relaxed (3h), Balanced (2h), Active (1h).'}</li>
                <li>{language === 'ar' ? 'إمكانية إضافة محطات مخصصة في أي وقت يريده العميل بالاسم والمكان والوقت.' : 'Add custom personal stops with bespoke hours and notes.'}</li>
                <li>{language === 'ar' ? 'زر تنزيل الجدول الفوري بملف نصي منسق أو طباعته أو نسخه للحافظة.' : 'One-click formatted text itinerary download, print, or copy.'}</li>
              </ul>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TRAVEL GUIDE MANAGEMENT TAB                                    */}
        {/* ============================================================== */}
        {activeTab === 'guide' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] space-y-6 animate-in fade-in max-w-4xl shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'إدارة دليل المسافر والتنقل والمعلومات العملية' : 'Travel Guide & Logistics Management'}
                </h3>
                <p className="text-xs text-stone-500">
                  {language === 'ar'
                    ? 'تعديل كافة بيانات الوصول للأقصر، والمواصلات الداخلية، والمعدية النيلية، وإرشادات التصوير والأمان.'
                    : 'Edit arrival routes, public ferry, local transport, and photography guidelines.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => showToast(language === 'ar' ? 'تم حفظ دليل المسافر بنجاح' : 'Guide saved successfully')}
                className="px-5 py-2.5 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs shrink-0"
              >
                <Save className="w-4 h-4 text-[#C99A42]" />
                <span>{t('save_changes')}</span>
              </button>
            </div>

            <div className="space-y-6 text-xs">
              {/* Main Guide Header */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                <h4 className="font-bold text-[#183B56] text-xs">
                  {language === 'ar' ? '1. العنوان الرئيسي ومقدمة الدليل' : '1. Guide Header & Introduction'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">عنوان الدليل (عربي)</label>
                    <input
                      type="text"
                      value={settings.guideTitle?.ar || 'دليلك السياحي العملي: كل ما تحتاج معرفته قبل السفر'}
                      onChange={(e) => setSettings({ ...settings, guideTitle: createLocal(e.target.value, settings.guideTitle?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">عنوان الدليل بالإنجليزية</label>
                    <input
                      type="text"
                      value={settings.guideTitle?.en || 'Practical Travel Guide: Essential Travel Intelligence'}
                      onChange={(e) => setSettings({ ...settings, guideTitle: createLocal(settings.guideTitle?.ar || e.target.value, e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                    />
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <label className="font-semibold block text-stone-700">نبذة الدليل (عربي)</label>
                    <textarea
                      value={settings.guideDesc?.ar || 'معلومات موثوقة وعملية حول كيفية الوصول إلى الأقصر، والمعدية النيلية المحلية، وأفضل أوقات الزيارة، وقواعد الاحتشام والتصوير بالمعابد، وأرقام الطوارئ.'}
                      onChange={(e) => setSettings({ ...settings, guideDesc: createLocal(e.target.value, settings.guideDesc?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-16"
                    />
                  </div>
                </div>
              </div>

              {/* Transit & Arrival */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                <h4 className="font-bold text-[#183B56] text-xs">
                  {language === 'ar' ? '2. كيفية الوصول للأقصر (طيران، قطار، كروز)' : '2. How to Reach Luxor'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">مطار الأقصر الدولي</label>
                    <textarea
                      value={settings.guideTransitAirport?.ar || 'رحلات طيران يومية منتظمة من القاهرة (ساعة واحدة) ورحلات شارتر مباشرة من كبرى مدن أوروبا.'}
                      onChange={(e) => setSettings({ ...settings, guideTransitAirport: createLocal(e.target.value, settings.guideTransitAirport?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-20 text-[11px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">قطار النوم والقطارات السريعة</label>
                    <textarea
                      value={settings.guideTransitTrain?.ar || 'رحلة ليلية ساحرة من القاهرة إلى محطة قطار الأقصر بوسط المدينة (حوالي 9 إلى 10 ساعات).'}
                      onChange={(e) => setSettings({ ...settings, guideTransitTrain: createLocal(e.target.value, settings.guideTransitTrain?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-20 text-[11px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">الرحلات النيلية (الكروز)</label>
                    <textarea
                      value={settings.guideTransitCruise?.ar || 'رحلات 4 أو 5 ليالٍ بين الأقصر وأسوان عبر معابد إدفو وكوم أمبو وإسنا.'}
                      onChange={(e) => setSettings({ ...settings, guideTransitCruise: createLocal(e.target.value, settings.guideTransitCruise?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-20 text-[11px]"
                    />
                  </div>
                </div>
              </div>

              {/* Local Mobility */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                <h4 className="font-bold text-[#183B56] text-xs">
                  {language === 'ar' ? '3. التنقل والمواصلات الداخلية' : '3. Local Mobility & Nile Ferry'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">المعدية النيلية العامة (البلدي)</label>
                    <textarea
                      value={settings.guideLocalFerry?.ar || 'أسرع وأمتع طريقة للعبور بين البر الشرقي والغربي (تعمل 24 ساعة مقابل 5 جنيهات مصرية فقط).'}
                      onChange={(e) => setSettings({ ...settings, guideLocalFerry: createLocal(e.target.value, settings.guideLocalFerry?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-20 text-[11px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">سيارات الأجرة والتاكسي</label>
                    <textarea
                      value={settings.guideLocalTaxi?.ar || 'متوفرة بكثرة؛ يوصى بالاتفاق المسبق على الأجرة أو حجز سيارة خاصة ليوم كامل لزيارة معالم الغرب.'}
                      onChange={(e) => setSettings({ ...settings, guideLocalTaxi: createLocal(e.target.value, settings.guideLocalTaxi?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-20 text-[11px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">دراجات البر الغربي الهوائية</label>
                    <textarea
                      value={settings.guideLocalBicycle?.ar || 'خيار ممتع وشائع لاستكشاف قرى القرنة ومعبد مدينة هابو والرامسيوم بالدراجة الهوائية.'}
                      onChange={(e) => setSettings({ ...settings, guideLocalBicycle: createLocal(e.target.value, settings.guideLocalBicycle?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-20 text-[11px]"
                    />
                  </div>
                </div>
              </div>

              {/* Tips & Safety */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                <h4 className="font-bold text-[#183B56] text-xs">
                  {language === 'ar' ? '4. الإرشادات وقواعد التصوير والطوارئ' : '4. Photography, Sun & Safety'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">أشعة الشمس والتوقيت</label>
                    <textarea
                      value={settings.guideTipsSun?.ar || 'ابدأ زيارة معالم البر الغربي ووادي الملوك مبكراً عند الساعة 6:00 صباحاً لتجنب حرارة الظهيرة، واشرب الكثير من الماء.'}
                      onChange={(e) => setSettings({ ...settings, guideTipsSun: createLocal(e.target.value, settings.guideTipsSun?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-20 text-[11px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold block text-stone-700">قواعد التصوير داخل المقابر</label>
                    <textarea
                      value={settings.guideTipsPhoto?.ar || 'التصوير بالهواتف المحمولة مسموح ومجاني بدون فلاش في أغلب المواقع، بينما تتطلب الكاميرات الاحترافية تصاريح.'}
                      onChange={(e) => setSettings({ ...settings, guideTipsPhoto: createLocal(e.target.value, settings.guideTipsPhoto?.en || e.target.value) })}
                      className="w-full border border-stone-300 rounded-xl p-2 font-cairo h-20 text-[11px]"
                    />
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                type="button"
                onClick={() => showToast(language === 'ar' ? 'تم حفظ دليل المسافر بنجاح' : 'Guide saved successfully')}
                className="px-6 py-2.5 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Save className="w-4 h-4 text-[#C99A42]" />
                <span>{t('save_changes')}</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PANORAMIC GALLERY MANAGEMENT TAB                               */}
        {/* ============================================================== */}
        {activeTab === 'gallery' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Section Header Editor */}
            <div className="bg-white p-5 rounded-3xl border border-[#E8DFD0] space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <h4 className="font-bold text-sm text-[#183B56]">العنوان الرئيسي والفرعي لقسم معرض الأقصر</h4>
                <button
                  type="button"
                  onClick={() => showToast('تم حفظ عنوان معرض الصور')}
                  className="px-3.5 py-1.5 bg-[#183B56] text-white rounded-xl font-bold cursor-pointer"
                >
                  حفظ العنوان
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={settings.galleryTitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, galleryTitle: createLocal(e.target.value, settings.galleryTitle?.en) })}
                  placeholder="العنوان الرئيسي لمعرض الأقصر"
                  className="border border-stone-300 rounded-xl p-2 font-bold text-[#183B56]"
                />
                <input
                  type="text"
                  value={settings.gallerySubtitle?.ar || ''}
                  onChange={(e) => setSettings({ ...settings, gallerySubtitle: createLocal(e.target.value, settings.gallerySubtitle?.en) })}
                  placeholder="الوصف الفرعي لمعرض الأقصر"
                  className="border border-stone-300 rounded-xl p-2"
                />
              </div>
            </div>

            {/* Add Photo Form */}
            <form onSubmit={handleAddGalleryItem} className="bg-white p-6 rounded-3xl border border-[#E8DFD0] space-y-4">
              <h3 className="text-base font-bold text-[#183B56]">
                {language === 'ar' ? 'إضافة صورة جديدة للمعرض البانورامي' : 'Add New Photo to Gallery'}
              </h3>
              
              <ImageUploadControl
                currentUrl={newGalleryUrl}
                onImageChanged={(url) => setNewGalleryUrl(url)}
                label={language === 'ar' ? 'اختر صورة من جهازك لرفعها فوراً للمعرض' : 'Upload photo from device'}
                language={language}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold block text-stone-700">عنوان أو وصف الصورة</label>
                  <input
                    type="text"
                    value={newGalleryTitle}
                    onChange={(e) => setNewGalleryTitle(e.target.value)}
                    placeholder="مثال: الغروب الذهبي فوق هضاب وادي الملوك"
                    className="w-full border border-stone-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="font-semibold block text-stone-700">التصنيف</label>
                  <select
                    value={newGalleryCategory}
                    onChange={(e) => setNewGalleryCategory(e.target.value as any)}
                    className="w-full border border-stone-300 rounded-lg p-2 font-semibold"
                  >
                    <option value="temples">معابد وأطلال (Temples)</option>
                    <option value="tombs">المقابر الملكية (Tombs)</option>
                    <option value="nile">النيل والمراكب (The Nile)</option>
                    <option value="nature">الطبيعة والجبال (Nature)</option>
                    <option value="culture">التراث والحياة اليومية (Culture)</option>
                    <option value="aerial">البالون والجو (Aerial)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'إضافة الصورة إلى المعرض' : 'Add Photo'}</span>
                </button>
              </div>
            </form>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {gallery.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-[#E8DFD0] overflow-hidden group flex flex-col justify-between shadow-xs">
                  <div className="relative aspect-square overflow-hidden bg-stone-100">
                    <img src={item.imageUrl} alt={item.title.ar} className="w-full h-full object-cover" />
                    <span className="absolute top-2 start-2 px-1.5 py-0.5 rounded bg-black/60 text-white text-[9px] uppercase font-mono">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-2.5 flex items-center justify-between border-t border-stone-100 text-xs">
                    <span className="font-semibold text-[#183B56] truncate max-w-[120px]">{item.title[language] || item.title.ar}</span>
                    <button
                      onClick={() => {
                        if (confirm(language === 'ar' ? 'حذف هذه الصورة من المعرض؟' : 'Delete photo?')) {
                          setGallery((prev) => prev.filter((g) => g.id !== item.id));
                          showToast(language === 'ar' ? 'تم حذف الصورة' : 'Deleted photo');
                        }
                      }}
                      className="text-stone-300 hover:text-rose-500 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* MEDIA LIBRARY TAB                                              */}
        {/* ============================================================== */}
        {activeTab === 'media' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-white p-6 rounded-3xl border border-[#E8DFD0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'مكتبة الوسائط والتخزين الرقمي' : 'Media Asset Storage'}
                </h3>
                <p className="text-xs text-stone-500">
                  {language === 'ar' ? 'ارفع ملفات صور متعددة من جهازك دفعة واحدة لتخزينها واستخدامها' : 'Batch upload images from computer'}
                </p>
              </div>

              <div>
                <input
                  type="file"
                  ref={batchFileInputRef}
                  onChange={handleBatchFileUpload}
                  multiple
                  accept="image/*"
                  className="hidden"
                />
                <button
                  disabled={isUploading}
                  onClick={() => batchFileInputRef.current?.click()}
                  className="px-5 py-2.5 bg-[#C99A42] hover:bg-[#d6a953] text-[#183B56] font-bold text-xs rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <Upload className="w-4 h-4" />
                  <span>{isUploading ? (language === 'ar' ? 'جارٍ الرفع...' : 'Uploading...') : (language === 'ar' ? 'رفع صور من جهازك 💻' : 'Upload Files')}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {media.map((file) => (
                <div key={file.id} className="taiba-card rounded-2xl overflow-hidden bg-white border border-[#E8DFD0] group flex flex-col justify-between">
                  <div className="relative aspect-square overflow-hidden bg-stone-100">
                    <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 start-2 px-1.5 py-0.5 rounded bg-black/60 text-white text-[9px] font-mono">
                      {file.folder}
                    </div>
                  </div>

                  <div className="p-3 space-y-1">
                    <p className="text-xs font-semibold text-[#183B56] truncate" title={file.name}>{file.name}</p>
                    <p className="text-[10px] text-stone-400 font-mono">{Math.round(file.sizeBytes / 1024)} KB</p>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(file.url);
                          setCopiedUrl(file.id);
                          setTimeout(() => setCopiedUrl(null), 1500);
                        }}
                        className="text-[10px] text-[#C99A42] hover:underline font-semibold cursor-pointer"
                      >
                        {copiedUrl === file.id ? (language === 'ar' ? 'تم النسخ ✓' : 'Copied') : (language === 'ar' ? 'نسخ الرابط' : 'Copy URL')}
                      </button>

                      <button
                        onClick={() => {
                          if (confirm('Delete media file?')) {
                            setMedia((prev) => prev.filter((m) => m.id !== file.id));
                          }
                        }}
                        className="text-stone-300 hover:text-rose-500 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SITE SETTINGS & BRANDING TAB                                   */}
        {/* ============================================================== */}
        {activeTab === 'settings' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] space-y-6 animate-in fade-in max-w-3xl shadow-xs">
            <h3 className="text-lg font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'إعدادات الموقع والهوية البصرية' : 'Website Settings & Visual Identity'}
            </h3>

            <div className="space-y-4 text-xs font-cairo">
              {/* Logo Upload & Size Control */}
              <div className="p-4 rounded-2xl bg-[#F7F2E8]/60 border border-[#E8DFD0] space-y-3">
                <ImageUploadControl
                  currentUrl={settings.logoUrl || ''}
                  onImageChanged={(newUrl) => setSettings({ ...settings, logoUrl: newUrl })}
                  label={language === 'ar' ? 'شعار الموقع (Logo) - ارفع من جهازك:' : 'Platform Logo:'}
                  language={language}
                />

                <div className="pt-2 border-t border-[#E8DFD0] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-bold text-[#183B56]">
                      {language === 'ar' ? 'مقاس الشعار (عرض الشعار بالبكسل):' : 'Logo Width (px):'}
                    </label>
                    <span className="font-cairo font-bold text-[#C99A42] bg-white px-2 py-0.5 rounded-md border border-[#E8DFD0]">
                      {settings.logoWidth || 40} px
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-stone-400">24px</span>
                    <input
                      type="range"
                      min="24"
                      max="140"
                      step="2"
                      value={settings.logoWidth || 40}
                      onChange={(e) => setSettings({ ...settings, logoWidth: parseInt(e.target.value) || 40 })}
                      className="flex-1 accent-[#C99A42] cursor-pointer"
                    />
                    <span className="text-[10px] text-stone-400">140px</span>
                  </div>
                </div>
              </div>

              {/* Hero Banner Direct Device Upload */}
              <ImageUploadControl
                currentUrl={settings.heroImage}
                onImageChanged={(newUrl) => setSettings({ ...settings, heroImage: newUrl })}
                label={language === 'ar' ? 'صورة الهيرو الرئيسية للموقع (ارفع من جهازك)' : 'Hero Banner Image'}
                language={language}
              />

              <div className="space-y-1">
                <label className="font-semibold block text-stone-700">شعار الموقع التسويقي (بالعربية)</label>
                <input
                  type="text"
                  value={settings.slogan.ar}
                  onChange={(e) => setSettings({ ...settings, slogan: createLocal(e.target.value, settings.slogan.en) })}
                  className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold block text-stone-700">Marketing Slogan (English)</label>
                <input
                  type="text"
                  value={settings.slogan.en}
                  onChange={(e) => setSettings({ ...settings, slogan: createLocal(settings.slogan.ar, e.target.value) })}
                  className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold block text-stone-700">البريد الإلكتروني الرسمي</label>
                  <input
                    type="email"
                    value={settings.contactEmail || ''}
                    onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                    placeholder="info@taiba.eg"
                    className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold block text-stone-700">رقم الهاتف الرسمي</label>
                  <input
                    type="text"
                    value={settings.contactPhone}
                    onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                    className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold block text-stone-700">شرطة السياحة والآثار (طوارئ)</label>
                  <input
                    type="text"
                    value={settings.emergencyTouristPolice}
                    onChange={(e) => setSettings({ ...settings, emergencyTouristPolice: e.target.value })}
                    className="w-full border border-stone-300 rounded-xl p-2.5 font-cairo"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => showToast(language === 'ar' ? 'تم حفظ إعدادات الموقع بنجاح' : 'Settings saved')}
                className="px-6 py-2.5 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Save className="w-4 h-4 text-[#C99A42]" />
                <span>{t('save_changes')}</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* BACKUP & RESTORATION TAB                                       */}
        {/* ============================================================== */}
        {activeTab === 'backup' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] space-y-6 animate-in fade-in max-w-2xl shadow-xs">
            <h3 className="text-lg font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'النسخ الاحتياطي واستعادة البيانات' : 'Backup & Data Restoration'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {language === 'ar'
                ? 'يمكنك تنزيل نسخة كاملة من قاعدة بيانات الموقع بملف JSON تشمل كافة التعديلات، أو استعادة البيانات الأولية في حال الرغبة بالبدء من جديد.'
                : 'Download a full snapshot of all monuments, settings, and media, or restore to factory defaults.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleExportBackup}
                className="px-5 py-2.5 bg-[#183B56] hover:bg-[#102738] text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Database className="w-4 h-4 text-[#C99A42]" />
                <span>{language === 'ar' ? 'تصدير نسخة احتياطية كاملة (JSON)' : 'Export Backup (JSON)'}</span>
              </button>

              <button
                onClick={() => {
                  if (confirm(language === 'ar' ? 'هل تود استعادة البيانات الافتراضية كاملة؟ سيتم حذف التعديلات غير المحفوظة.' : 'Restore factory default dataset?')) {
                    resetToDefaults();
                    showToast(language === 'ar' ? 'تمت استعادة البيانات الافتراضية بنجاح' : 'Restored defaults');
                  }
                }}
                className="px-5 py-2.5 bg-[#F7F2E8] hover:bg-rose-50 text-stone-700 hover:text-rose-600 border border-[#E8DFD0] text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>{language === 'ar' ? 'استعادة البيانات الافتراضية' : 'Reset to Defaults'}</span>
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
