import React, { useState, useRef, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { Language } from '../types';
import {
  Menu,
  X,
  Calendar,
  Compass,
  Sun,
  Moon,
  Wind,
  Clock,
  Phone,
  Anchor,
  Sparkles,
  Info,
  CheckCircle2,
  Globe,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onNavigateAdmin?: () => void;
  isAdminView?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateAdmin, isAdminView }) => {
  const { language, setLanguage, t, settings, customRoute, navigateToTab, theme, toggleTheme } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Language; label: string; name: string; flag: string }[] = [
    { code: 'ar', label: 'العربية', name: 'Arabic', flag: '🇪🇬' },
    { code: 'en', label: 'English', name: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', name: 'French', flag: '🇫🇷' },
    { code: 'es', label: 'Español', name: 'Spanish', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', name: 'German', flag: '🇩🇪' },
  ];

  const navLinks = [
    { href: '#hero', label: t('home') },
    { href: '#treasures', label: t('treasures') },
    { href: '#experiences', label: t('experiences') },
    { href: '#nature', label: t('nile_nature') },
    { href: '#culture', label: t('culture') },
    { href: '#taste', label: t('taste') },
    { href: '#stay', label: t('stay') },
    { href: '#map', label: t('map') },
    { href: '#planner', label: t('plan_trip') },
    { href: '#tales', label: t('tales') },
    { href: '#gallery', label: t('gallery') },
    { href: '#guide', label: t('guide') },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = href.replace('#', '');
    const tabTargets = ['experiences', 'nature', 'culture', 'taste', 'stay', 'planner', 'map', 'guide', 'tales', 'events', 'gallery'];
    if (tabTargets.includes(target)) {
      e.preventDefault();
      navigateToTab(target as any);
      setMobileMenuOpen(false);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F7F2E8]/95 backdrop-blur-md border-b border-[#E8DFD0] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Brand Wordmark */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              {settings.logoUrl ? (
                <img
                  src={settings.logoUrl}
                  alt="TAIBA"
                  style={{ width: `${settings.logoWidth || 40}px` }}
                  className="h-auto max-h-14 object-contain transition-all"
                />
              ) : (
                <div
                  style={{ width: `${settings.logoWidth || 40}px`, height: `${settings.logoWidth || 40}px` }}
                  className="rounded-lg bg-[#183B56] border border-[#C99A42]/50 flex items-center justify-center text-[#C99A42] font-cinzel font-bold text-xl shadow-inner group-hover:scale-105 transition-all shrink-0"
                >
                  𓋹
                </div>
              )}
              {settings.showBrandText !== false && (
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#183B56] font-cinzel whitespace-nowrap">
                    TAIBA <span className="text-[#C99A42] font-cairo">| طيبة</span>
                  </span>
                  <span className="text-[10px] text-[#C99A42] tracking-wider uppercase hidden sm:block">
                    Luxor Tourism Platform
                  </span>
                </div>
              )}
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-[#183B56]">
              {navLinks.slice(0, 8).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="whitespace-nowrap hover:text-[#C99A42] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C99A42] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
              {/* More dropdown for remaining sections */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-[#C99A42] transition-colors whitespace-nowrap cursor-pointer">
                  <span>{t('details_btn')}</span>
                  <span className="text-xs">▼</span>
                </button>
                <div className="absolute end-0 top-full mt-1 hidden group-hover:flex flex-col bg-white border border-[#E8DFD0] rounded-xl shadow-xl py-2 min-w-44 z-50">
                  {navLinks.slice(8).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="px-4 py-2 hover:bg-[#F7F2E8] hover:text-[#C99A42] text-sm text-[#183B56] whitespace-nowrap transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            {/* Right Action Utilities */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              
              {/* Language Selector Dropdown (Clearly visible in navbar) */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#E8DFD0] hover:border-[#C99A42] bg-white/90 hover:bg-white text-xs font-semibold text-[#183B56] shadow-xs hover:shadow-md transition-all cursor-pointer"
                  title={language === 'ar' ? 'اختر اللغة' : 'Select language'}
                >
                  <Globe className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span className="font-bold text-xs">
                    {languages.find((l) => l.code === language)?.label || 'العربية'}
                  </span>
                  <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {langDropdownOpen && (
                  <div className="absolute end-0 top-full mt-2 bg-white border border-[#E8DFD0] rounded-2xl shadow-2xl py-2 min-w-36 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setLanguage(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors cursor-pointer ${
                          language === l.code
                            ? 'bg-[#183B56] text-white font-bold'
                            : 'text-[#183B56] hover:bg-[#F7F2E8] hover:text-[#C99A42]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{l.flag}</span>
                          <span>{l.label}</span>
                        </span>
                        <span className="text-[10px] font-mono opacity-60 uppercase">{l.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Day / Night Theme Toggle (صباحي / ليلي) */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-[#E8DFD0] hover:border-[#C99A42] bg-white/90 hover:bg-white text-[#183B56] hover:text-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                title={
                  theme === 'dark'
                    ? (language === 'ar' ? 'الوضع الصباحي (شمس طيبة)' : 'Switch to Day mode')
                    : (language === 'ar' ? 'الوضع الليلي (سحر طيبة ليلاً)' : 'Switch to Night mode')
                }
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#C99A42]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#183B56]" />
                )}
              </button>

              {/* Luxor Live Status Briefing Pill (Configurable via Dashboard) */}
              {settings.showWeatherInNav !== false && (
                <button
                  onClick={() => setStatusModalOpen(true)}
                  className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#C99A42]/50 hover:border-[#C99A42] bg-white/90 hover:bg-white text-xs font-semibold text-[#183B56] shadow-xs hover:shadow-md transition-all cursor-pointer group"
                  title={language === 'ar' ? 'أجواء الأقصر اليوم وحالة طيران البالون' : 'Luxor Live Status & Balloon Flights'}
                >
                  <div className="flex items-center gap-1">
                    <Sun className="w-4 h-4 text-[#C99A42] animate-pulse" />
                    <span className="font-cairo font-bold text-stone-700">24°C</span>
                  </div>
                  <span className="text-stone-300">|</span>
                  <div className="flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] text-emerald-700 font-bold hidden lg:inline">
                      {language === 'ar' ? 'البالون: متاح' : 'Balloon: Cleared'}
                    </span>
                  </div>
                </button>
              )}

              {/* Custom Route Badge */}
              <button
                onClick={() => navigateToTab('map')}
                className="relative p-2 rounded-lg border border-[#E8DFD0] hover:border-[#C99A42] bg-white/80 text-[#183B56] hover:text-[#C99A42] transition-colors hidden sm:flex items-center cursor-pointer"
                title={t('in_route')}
              >
                <Compass className="w-4 h-4 text-[#C99A42]" />
                {customRoute.length > 0 && (
                  <span className="absolute -top-1 -end-1 w-4 h-4 bg-[#C99A42] text-white text-[10px] font-bold rounded-full flex items-center justify-center font-cairo">
                    {customRoute.length}
                  </span>
                )}
              </button>

              {/* Primary Action Button */}
              <button
                onClick={() => navigateToTab('planner')}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#183B56] hover:bg-[#102738] rounded-lg border border-[#C99A42]/40 shadow-xs transition-all hover:shadow-md hover:translate-y-[-1px] whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C99A42]" />
                <span>{t('plan_visit')}</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-[#183B56] hover:text-[#C99A42] focus:outline-hidden cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#F7F2E8] border-b border-[#E8DFD0] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            {/* Quick Mobile Language Bar */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#E8DFD0]">
              <div className="flex items-center gap-1 text-xs text-[#183B56] font-semibold">
                <Globe className="w-4 h-4 text-[#C99A42]" />
                <span>{language === 'ar' ? 'اللغة:' : 'Language:'}</span>
              </div>
              <div className="flex items-center gap-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 rounded-md text-[11px] font-mono font-bold transition-colors cursor-pointer ${
                      language === l.code
                        ? 'bg-[#183B56] text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {l.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Weather + Day/Night row */}
            <div className={`grid ${settings.showWeatherInNav !== false ? 'grid-cols-2' : 'grid-cols-1'} gap-2 pb-2 border-b border-[#E8DFD0]`}>
              {settings.showWeatherInNav !== false && (
                <button
                  onClick={() => {
                    setStatusModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-white border border-[#C99A42]/50 text-xs font-bold text-[#183B56]"
                >
                  <Sun className="w-4 h-4 text-[#C99A42]" />
                  <span className="font-cairo font-bold">24°C</span>
                </button>
              )}

              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-white border border-[#E8DFD0] text-xs font-bold text-[#183B56]"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-[#C99A42]" />
                    <span>{language === 'ar' ? 'صباحي' : 'Day'}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-[#183B56]" />
                    <span>{language === 'ar' ? 'ليلي' : 'Night'}</span>
                  </>
                )}
              </button>
            </div>

            <nav className="flex flex-col space-y-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-[#183B56] hover:bg-white hover:text-[#C99A42] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ============================================================== */}
      {/* LUXOR LIVE STATUS & VISITOR BRIEFING MODAL                     */}
      {/* ============================================================== */}
      {statusModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD0] my-8">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#183B56] text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#C99A42]/20 border border-[#C99A42]/40 flex items-center justify-center text-[#C99A42]">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-cairo">
                    {language === 'ar' ? 'مركز إحاطة زائر الأقصر اليومي' : 'Luxor Daily Visitor Briefing Hub'}
                  </h3>
                  <p className="text-[11px] text-stone-300">
                    {language === 'ar' ? 'تحديث لحظي لطقس اليوم، حالة الطيران ومواعيد المعابد' : 'Real-time weather, flight clearance & temple hours'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setStatusModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* 1. Hot Air Balloon Flight Clearance - Paramount for Luxor */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0">
                  <Wind className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-emerald-900">
                      {language === 'ar' ? 'حالة طيران البالون الطائر (سلطة الطيران المدني)' : 'Civil Aviation Hot Air Balloon Status'}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800 text-[10px] font-bold">
                      {language === 'ar' ? 'مصرح بالطيران 🟢' : 'Cleared for Flight 🟢'}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    {language === 'ar'
                      ? 'الرياح مستقرة (7 عقدات غربية)، الرؤية الأفقية 10 كم، الأجواء مثالية للتحليق عند الفجر مع شروق الشمس فوق وادي الملوك.'
                      : 'Winds steady at 7 knots westerly, visibility 10 km, ideal weather conditions for dawn flights over Hatshepsut.'}
                  </p>
                </div>
              </div>

              {/* 2. Weather & Sun Conditions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] text-stone-500 block">{language === 'ar' ? 'الحرارة العظمى' : 'Max Temp'}</span>
                  <span className="text-lg font-bold text-[#183B56] font-mono">26°C</span>
                  <span className="text-[10px] text-stone-400 block">{language === 'ar' ? 'طقس معتدل دافئ' : 'Mild & Sunny'}</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] text-stone-500 block">{language === 'ar' ? 'الحرارة الصغرى' : 'Min Temp'}</span>
                  <span className="text-lg font-bold text-[#183B56] font-mono">14°C</span>
                  <span className="text-[10px] text-stone-400 block">{language === 'ar' ? 'لطيف فجراً ومساءً' : 'Cool at Dawn'}</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] text-stone-500 block">{language === 'ar' ? 'شروق الشمس' : 'Sunrise'}</span>
                  <span className="text-lg font-bold text-[#C99A42] font-mono">06:08 AM</span>
                  <span className="text-[10px] text-stone-400 block">{language === 'ar' ? 'توقيت انطلاق البالون' : 'Balloon Liftoff'}</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] text-stone-500 block">{language === 'ar' ? 'غروب الشمس' : 'Sunset'}</span>
                  <span className="text-lg font-bold text-[#183B56] font-mono">05:42 PM</span>
                  <span className="text-[10px] text-stone-400 block">{language === 'ar' ? 'فلوكة النيل الذهبية' : 'Felucca Golden Hour'}</span>
                </div>
              </div>

              {/* 3. Official Monument Ticket Office Hours */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#183B56]">
                  <Clock className="w-4 h-4 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'مواعيد شباك التذاكر الرسمية اليوم' : 'Today’s Official Monument Hours'}</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'معبد الكرنك' : 'Karnak Temple'}</span>
                      <span className="text-[11px] text-stone-500">{language === 'ar' ? 'البر الشرقي' : 'East Bank'}</span>
                    </div>
                    <span className="font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      06:00 AM - 05:30 PM
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'معبد الأقصر ليلاً' : 'Luxor Temple by Night'}</span>
                      <span className="text-[11px] text-stone-500">{language === 'ar' ? 'مضاء بالكامل' : 'Illuminated'}</span>
                    </div>
                    <span className="font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      06:00 AM - 10:00 PM
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'وادي الملوك' : 'Valley of the Kings'}</span>
                      <span className="text-[11px] text-stone-500">{language === 'ar' ? 'البر الغربي' : 'West Bank'}</span>
                    </div>
                    <span className="font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      06:00 AM - 05:00 PM
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'معبد حتشبسوت' : 'Hatshepsut Temple'}</span>
                      <span className="text-[11px] text-stone-500">{language === 'ar' ? 'الدير البحري' : 'Deir el-Bahari'}</span>
                    </div>
                    <span className="font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      06:00 AM - 05:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Nile River Transit & Public Ferry */}
              <div className="p-3.5 rounded-2xl bg-[#F7F2E8] border border-[#E8DFD0] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#183B56] text-white">
                    <Anchor className="w-4 h-4 text-[#C99A42]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#183B56] block">
                      {language === 'ar' ? 'معدية الأهالي النيلية (بين البرين)' : 'Nile Public Ferryboat (Bank Crossing)'}
                    </span>
                    <span className="text-[11px] text-stone-600">
                      {language === 'ar' ? 'تعمل على مدار 24 ساعة بدون انقطاع' : 'Operating 24 hours non-stop'}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#183B56]">
                  10 EGP
                </span>
              </div>

              {/* 5. Tourist Police & Emergency Assistance */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-600 text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-amber-900 block">
                      {language === 'ar' ? 'خط مساعدة شرطة السياحة والآثار المباشر' : 'Tourist Police Emergency Hotline'}
                    </span>
                    <span className="text-[11px] text-amber-700">
                      {language === 'ar' ? 'متاح بجميع اللغات على مدار الساعة' : '24/7 Multi-lingual Tourist Support'}
                    </span>
                  </div>
                </div>
                <a
                  href="tel:126"
                  className="px-3 py-1.5 rounded-lg bg-amber-600 text-white font-mono font-bold hover:bg-amber-700 transition-colors"
                >
                  126
                </a>
              </div>

              {/* Optional Quick Language Toggle in footer of modal for international visitors */}
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-stone-500">
                  <Globe className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'تغيير اللغة:' : 'Language:'}</span>
                </div>
                <div className="flex items-center gap-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLanguage(l.code)}
                      className={`px-2 py-1 rounded-md text-[11px] font-mono font-bold transition-colors cursor-pointer ${
                        language === l.code
                          ? 'bg-[#183B56] text-white'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {l.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
