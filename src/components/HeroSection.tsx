import React, { useState, useRef, useEffect } from 'react';
import { useData } from '../context/DataContext';
import {
  Compass,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Sun,
  MapPin,
  Sparkles,
  Search,
  X,
  ExternalLink,
  ChevronRight,
  Landmark,
  Wind
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, t, settings, treasures, experiences, setActiveModal } = useData();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'temples' | 'tombs' | 'experiences'>('all');
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter items for live search
  const filteredTreasures = searchQuery.trim()
    ? treasures.filter((tItem) => {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = (tItem.name[language] || tItem.name.ar).toLowerCase().includes(query);
        const descMatch = (tItem.shortDesc[language] || tItem.shortDesc.ar).toLowerCase().includes(query);
        const epochMatch = (tItem.epoch[language] || tItem.epoch.ar).toLowerCase().includes(query);
        
        if (selectedFilter === 'temples' && !tItem.category.includes('temple')) return false;
        if (selectedFilter === 'tombs' && !tItem.category.includes('tomb') && tItem.category !== 'other_necropolis') return false;
        
        return nameMatch || descMatch || epochMatch;
      }).slice(0, 5)
    : [];

  const filteredExperiences = (searchQuery.trim() && (selectedFilter === 'all' || selectedFilter === 'experiences'))
    ? experiences.filter((exp) => {
        const query = searchQuery.toLowerCase().trim();
        const titleMatch = (exp.title[language] || exp.title.ar).toLowerCase().includes(query);
        const descMatch = (exp.shortDesc[language] || exp.shortDesc.ar).toLowerCase().includes(query);
        return titleMatch || descMatch;
      }).slice(0, 3)
    : [];

  const totalResultsCount = filteredTreasures.length + filteredExperiences.length;

  const quickKeywords = [
    { label: language === 'ar' ? 'معبد الكرنك' : 'Karnak', id: 'karnak_complex' },
    { label: language === 'ar' ? 'وادي الملوك' : 'Valley of the Kings', id: 'tomb_tutankhamun_kv62' },
    { label: language === 'ar' ? 'معبد حتشبسوت' : 'Hatshepsut', id: 'hatshepsut_deir_el_bahari' },
    { label: language === 'ar' ? 'البالون الطائر' : 'Hot Air Balloon', id: 'hot_air_balloon' },
    { label: language === 'ar' ? 'معبد الأقصر' : 'Luxor Temple', id: 'luxor_temple' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-[#183B56] text-[#F7F2E8]">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={settings.heroImage || '/src/assets/images/hero_luxor_thebes_nile_1794257299786.jpg'}
          alt="Luxor Thebes Nile Sunset"
          className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#183B56] via-[#183B56]/75 to-[#183B56]/40" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#183B56]/50 to-[#183B56]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24 text-center flex flex-col items-center">
        
        {/* Top Hero Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C99A42]/40 backdrop-blur-md text-xs sm:text-sm font-semibold text-[#F7F2E8] mb-6 shadow-sm font-cairo">
          <span>
            {(() => {
              const raw = settings.heroBadge
                ? (settings.heroBadge[language] || settings.heroBadge.ar)
                : (language === 'ar' ? 'أكثر من مجرد تاريخ… رحلة عبر الزمن' : 'More Than History, A Journey Through Time');
              const clean = (raw || '')
                .replace(/TAIBA\s*·?\s*THE\s*ANCIENT\s*WONDER\s*·?\s*/gi, '')
                .replace(/^·\s*/, '')
                .replace(/\s*·\s*$/, '')
                .trim();
              return clean || (language === 'ar' ? 'أكثر من مجرد تاريخ… رحلة عبر الزمن' : 'More Than History, A Journey Through Time');
            })()}
          </span>
        </div>

        {/* Main Hero Headline - Centered */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-cairo max-w-4xl mx-auto mb-6">
          {settings.heroTitle ? (settings.heroTitle[language] || settings.heroTitle.ar) : t('hero_title')}
        </h1>

        {/* Descriptive Deck - Centered */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-200 leading-relaxed max-w-3xl mx-auto font-light mb-10 font-cairo">
          {settings.heroSubtitle ? (settings.heroSubtitle[language] || settings.heroSubtitle.ar) : t('hero_desc')}
        </p>

        {/* ============================================================== */}
        {/* PROMINENT SEARCH BAR DIRECTLY ABOVE EXPLORE BUTTONS            */}
        {/* ============================================================== */}
        <div ref={searchContainerRef} className="w-full max-w-2xl relative mb-8 z-30">
          <div className="relative flex items-center shadow-2xl rounded-2xl bg-white/95 backdrop-blur-md border border-[#C99A42]/50 focus-within:border-[#C99A42] focus-within:ring-3 focus-within:ring-[#C99A42]/30 transition-all">
            <div className="ps-4 pe-2 text-[#183B56]">
              <Search className="w-5 h-5 text-[#C99A42]" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder={
                language === 'ar'
                  ? 'ابحث عن أي معبد، مقبرة ملكية، أو تجربة سياحية في الأقصر...'
                  : 'Search any temple, royal tomb, or activity in Luxor...'
              }
              className="w-full py-4 px-2 text-sm sm:text-base text-[#183B56] placeholder-stone-400 bg-transparent focus:outline-hidden font-cairo font-medium"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchOpen(false);
                }}
                className="p-2 text-stone-400 hover:text-stone-700 cursor-pointer transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <a
              href="#treasures"
              className="m-1.5 px-5 py-2.5 rounded-xl bg-[#183B56] hover:bg-[#102738] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              <span>{language === 'ar' ? 'بحث' : 'Search'}</span>
            </a>
          </div>

          {/* Quick Keywords Chips below the search bar */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-stone-300 font-medium text-[11px]">
              {language === 'ar' ? 'الأكثر بحثاً:' : 'Trending:'}
            </span>
            {quickKeywords.map((kw) => (
              <button
                key={kw.id}
                type="button"
                onClick={() => {
                  setSearchQuery(kw.label);
                  setIsSearchOpen(true);
                }}
                className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 border border-white/15 text-[11px] transition-colors cursor-pointer"
              >
                {kw.label}
              </button>
            ))}
          </div>

          {/* Search Dropdown Results */}
          {isSearchOpen && searchQuery.trim().length > 0 && (
            <div className="absolute start-0 end-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-start z-50 animate-in fade-in zoom-in-95 duration-150">
              {/* Category Filter Pills inside dropdown */}
              <div className="p-2 bg-stone-50 border-b border-stone-200 flex items-center gap-1 text-[11px] overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setSelectedFilter('all')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                    selectedFilter === 'all' ? 'bg-[#183B56] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {language === 'ar' ? 'الكل' : 'All'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter('temples')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                    selectedFilter === 'temples' ? 'bg-[#183B56] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {language === 'ar' ? 'المعابد' : 'Temples'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter('tombs')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                    selectedFilter === 'tombs' ? 'bg-[#183B56] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {language === 'ar' ? 'المقابر الملكية' : 'Tombs'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter('experiences')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                    selectedFilter === 'experiences' ? 'bg-[#183B56] text-white' : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {language === 'ar' ? 'التجارب' : 'Experiences'}
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-80 overflow-y-auto divide-y divide-stone-100 p-1">
                {totalResultsCount === 0 ? (
                  <div className="py-8 text-center text-stone-500 text-xs">
                    <p>{language === 'ar' ? 'لم يتم العثور على نتائج تطابق بحثك' : 'No monuments matching your query'}</p>
                    <a
                      href="#treasures"
                      onClick={() => setIsSearchOpen(false)}
                      className="text-[#C99A42] font-bold mt-2 inline-block hover:underline"
                    >
                      {language === 'ar' ? 'تصفح كل كنوز طيبة الـ 55+' : 'Browse all 55+ Theban Treasures'}
                    </a>
                  </div>
                ) : (
                  <>
                    {/* Monuments results */}
                    {filteredTreasures.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setActiveModal({ type: 'treasure', id: item.id });
                          setIsSearchOpen(false);
                        }}
                        className="flex items-center gap-3 p-2.5 hover:bg-[#F7F2E8] rounded-xl cursor-pointer transition-colors group"
                      >
                        <img
                          src={item.mainImage}
                          alt={item.name[language] || item.name.ar}
                          className="w-12 h-12 rounded-lg object-cover shrink-0 border border-stone-200"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#183B56] group-hover:text-[#C99A42] truncate">
                              {item.name[language] || item.name.ar}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-500 font-mono shrink-0">
                              {item.bank === 'east_bank'
                                ? (language === 'ar' ? 'البر الشرقي' : 'East Bank')
                                : (language === 'ar' ? 'البر الغربي' : 'West Bank')}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-500 truncate mt-0.5">
                            {item.shortDesc[language] || item.shortDesc.ar}
                          </p>
                        </div>
                        <span className="text-xs text-[#C99A42] font-semibold shrink-0 group-hover:translate-x-1 transition-transform">
                          {language === 'ar' ? 'عرض ←' : 'View →'}
                        </span>
                      </div>
                    ))}

                    {/* Experiences results */}
                    {filteredExperiences.map((exp) => (
                      <a
                        key={exp.id}
                        href="#experiences"
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center gap-3 p-2.5 hover:bg-[#F7F2E8] rounded-xl cursor-pointer transition-colors group"
                      >
                        <img
                          src={exp.image}
                          alt={exp.title[language] || exp.title.ar}
                          className="w-12 h-12 rounded-lg object-cover shrink-0 border border-stone-200"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#183B56] group-hover:text-[#C99A42] truncate">
                              {exp.title[language] || exp.title.ar}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#C99A42]/10 text-[#C99A42] font-semibold shrink-0">
                              {language === 'ar' ? 'تجربة سياحية' : 'Experience'}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-500 truncate mt-0.5">
                            {exp.shortDesc[language] || exp.shortDesc.ar}
                          </p>
                        </div>
                        <span className="text-xs text-[#C99A42] font-semibold shrink-0">
                          {language === 'ar' ? 'تصفح ←' : 'Explore →'}
                        </span>
                      </a>
                    ))}
                  </>
                )}
              </div>

              {/* Dropdown footer */}
              <div className="p-2.5 bg-stone-50 border-t border-stone-200 text-center">
                <a
                  href="#treasures"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-xs font-bold text-[#183B56] hover:text-[#C99A42] transition-colors"
                >
                  {language === 'ar' ? 'عرض جميع المعالم في الكتالوج الشامل ↓' : 'Browse full monuments catalog ↓'}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* CTA Action Buttons - Centered */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#treasures"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C99A42] hover:bg-[#d6a953] text-[#183B56] font-bold text-base tracking-wide shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#183B56]" />
            <span>{t('explore_btn')}</span>
            <Arrow className="w-4 h-4" />
          </a>

          <a
            href="#planner"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-semibold text-base transition-all hover:scale-105 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#C99A42]" />
            <span>{t('plan_btn')}</span>
          </a>
        </div>
      </div>

      {/* Operational Utility Ribbon - Centered */}
      <div className="relative z-10 border-t border-white/10 bg-[#102738]/90 backdrop-blur-md font-cairo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-center font-cairo">
            
            {/* Card 1: Peak Season */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-stone-300">
              <Sun className="w-5 h-5 text-[#C99A42] shrink-0" />
              <div className="space-y-0.5">
                <span className="font-bold block text-white text-xs font-cairo">
                  {language === 'ar' ? 'الموسم المثالي' : 'Peak Season'}
                </span>
                <span className="text-[11px] text-stone-300 block font-cairo">
                  {language === 'ar' ? 'أكتوبر - أبريل (طقس دافئ ومشمس)' : 'October - April (Sunny & Mild)'}
                </span>
              </div>
            </div>

            {/* Card 2: Ancient Monuments */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-stone-300">
              <Landmark className="w-5 h-5 text-[#C99A42] shrink-0" />
              <div className="space-y-0.5">
                <span className="font-bold block text-white text-xs font-cairo">
                  {language === 'ar' ? 'المعالم الأثرية' : 'Monument Heritage'}
                </span>
                <span className="text-[11px] text-stone-300 block font-cairo font-medium">
                  {treasures.length}+ {language === 'ar' ? 'معلماً موثقاً بالكامل' : 'Documented Treasures'}
                </span>
              </div>
            </div>

            {/* Card 3: Hot Air Balloon Flights */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-stone-300">
              <Wind className="w-5 h-5 text-[#C99A42] shrink-0" />
              <div className="space-y-0.5">
                <span className="font-bold block text-white text-xs font-cairo">
                  {language === 'ar' ? 'رحلات البالون اليومية' : 'Hot Air Balloon Status'}
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold block font-cairo">
                  {language === 'ar' ? '🟢 طيران متاح ومصرح به' : '🟢 Cleared for Flight'}
                </span>
              </div>
            </div>

            {/* Card 4: Flexible Timing */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-stone-300">
              <Compass className="w-5 h-5 text-[#C99A42] shrink-0" />
              <div className="space-y-0.5">
                <span className="font-bold block text-white text-xs font-cairo">
                  {language === 'ar' ? 'تخطيط زمني حر' : 'Flexible Timing'}
                </span>
                <span className="text-[11px] text-stone-300 block font-cairo">
                  {language === 'ar' ? 'حدد مواعيدك وخطتك بحرية' : 'Customize your hours freely'}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
