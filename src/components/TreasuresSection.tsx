import React, { useState, useMemo, useRef } from 'react';
import { useData } from '../context/DataContext';
import { Treasure, BankLocation } from '../types';
import {
  Search,
  MapPin,
  Compass,
  Check,
  Plus,
  ExternalLink,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
  Ticket
} from 'lucide-react';

export const TreasuresSection: React.FC = () => {
  const { language, t, settings, treasures, customRoute, addToRoute, removeFromRoute, setActiveModal } = useData();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBank, setSelectedBank] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredTreasures = useMemo(() => {
    return treasures.filter((item) => {
      // Bank filter
      if (selectedBank !== 'all' && item.bank !== selectedBank) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'temple' && !item.category.includes('temple')) return false;
        if (selectedCategory === 'royal' && !['kings_tomb', 'queens_tomb'].includes(item.category)) return false;
        if (selectedCategory === 'nobles' && !['nobles_tomb', 'workers_tomb', 'other_necropolis'].includes(item.category)) return false;
        if (selectedCategory === 'museum' && item.category !== 'museum') return false;
      }
      // Status filter
      if (selectedStatus !== 'all' && item.status !== selectedStatus) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const nameAR = item.name.ar.toLowerCase();
        const nameEN = item.name.en.toLowerCase();
        const pharaohAR = item.pharaoh.ar.toLowerCase();
        const pharaohEN = item.pharaoh.en.toLowerCase();
        const epochAR = item.epoch.ar.toLowerCase();
        const epochEN = item.epoch.en.toLowerCase();
        return (
          nameAR.includes(query) ||
          nameEN.includes(query) ||
          pharaohAR.includes(query) ||
          pharaohEN.includes(query) ||
          epochAR.includes(query) ||
          epochEN.includes(query)
        );
      }
      return true;
    });
  }, [treasures, selectedBank, selectedCategory, selectedStatus, searchQuery]);

  // Horizontal scroll navigation
  const scroll = (direction: 'prev' | 'next') => {
    if (!scrollContainerRef.current) return;
    const isRtl = document.documentElement.dir === 'rtl';
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    // In RTL, positive scroll moves right (towards start), negative moves left (towards next)
    const multiplier = direction === 'next' ? (isRtl ? -1 : 1) : (isRtl ? 1 : -1);
    scrollContainerRef.current.scrollBy({
      left: scrollAmount * multiplier,
      behavior: 'smooth',
    });
  };

  return (
    <section id="treasures" className="py-20 bg-white border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <Compass className="w-3.5 h-3.5 text-[#C99A42]" />
            <span>{t('treasures')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {settings.treasuresTitle && (settings.treasuresTitle[language] || settings.treasuresTitle.ar)
              ? (settings.treasuresTitle[language] || settings.treasuresTitle.ar)
              : (t('treasures_title') && t('treasures_title') !== 'treasures_title'
                  ? t('treasures_title')
                  : (language === 'ar' ? 'كنوز طيبة الخالدة: صروح الفراعنة ومقابر الخلود' : 'The Eternal Treasures of Thebes: Temples & Crypts'))}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {settings.treasuresSubtitle && (settings.treasuresSubtitle[language] || settings.treasuresSubtitle.ar)
              ? (settings.treasuresSubtitle[language] || settings.treasuresSubtitle.ar)
              : (t('treasures_subtitle') && t('treasures_subtitle') !== 'treasures_subtitle'
                  ? t('treasures_subtitle')
                  : (language === 'ar' ? 'الدليل التوثيقي الشامل لأكثر من 55 معلماً أثرياً بالبرين الشرقي والغربي؛ استكشف تاريخ المعابد وعجائب المقابر الملكية ومواعيد الزيارة.' : 'The definitive documentary catalog of 55+ monuments across East and West Banks; explore ancient architecture and visiting hours.'))}
          </p>
        </div>

        {/* Search & Filters Bar - Centered */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F2E8] border border-[#E8DFD0] space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-10 pe-4 py-2.5 bg-white border border-[#E8DFD0] rounded-xl text-xs sm:text-sm text-[#183B56] focus:outline-hidden focus:border-[#C99A42]"
              />
            </div>

            {/* Bank Filter */}
            <div>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-[#E8DFD0] rounded-xl text-xs text-[#183B56] focus:outline-hidden focus:border-[#C99A42] font-semibold cursor-pointer"
              >
                <option value="all">{t('all')}: {language === 'ar' ? 'جميع الضفاف' : 'All Banks'}</option>
                <option value="east_bank">{t('east_bank')}</option>
                <option value="west_bank">{t('west_bank')}</option>
                <option value="surroundings">{t('surroundings')}</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-[#E8DFD0] rounded-xl text-xs text-[#183B56] focus:outline-hidden focus:border-[#C99A42] font-semibold cursor-pointer"
              >
                <option value="all">{t('all')}: {language === 'ar' ? 'جميع التصنيفات' : 'All Categories'}</option>
                <option value="temple">{t('temples')}</option>
                <option value="royal">{t('royal_tombs')}</option>
                <option value="nobles">{t('nobles_tombs')}</option>
                <option value="museum">{t('museums')}</option>
              </select>
            </div>
          </div>

          {/* Quick Bank & Status Tabs - Centered */}
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 pt-2 border-t border-[#E8DFD0]/60 text-xs">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
              {[
                { id: 'all', label: t('all') },
                { id: 'east_bank', label: t('east_bank') },
                { id: 'west_bank', label: t('west_bank') },
                { id: 'surroundings', label: t('surroundings') },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBank(b.id)}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                    selectedBank === b.id
                      ? 'bg-[#183B56] text-white shadow-xs font-bold'
                      : 'bg-white hover:bg-[#EAE2D2] text-stone-600'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedStatus(selectedStatus === 'open' ? 'all' : 'open')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  selectedStatus === 'open'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:bg-stone-200'
                }`}
              >
                {t('open_now')}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls & Results Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 text-center sm:text-start">
            <span className="text-sm sm:text-base font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'عرض الكنوز الأثرية' : 'Theban Treasures'}
            </span>
            <span className="text-xs font-cairo font-bold px-2.5 py-1 rounded-full bg-[#183B56]/10 text-[#183B56] shrink-0 whitespace-nowrap">
              {filteredTreasures.length} {language === 'ar' ? 'معلماً' : 'monuments'}
            </span>
            <span className="text-xs text-stone-400 hidden sm:inline">
              ({language === 'ar' ? 'استخدم الأزرار للتنقل الأفقي بين البطاقات' : 'Use navigation buttons to scroll cards'})
            </span>
          </div>

          {/* RIGHT & LEFT NAVIGATION BUTTONS - Centered on mobile */}
          <div className="flex items-center justify-center gap-3 self-center sm:self-auto shrink-0 w-full sm:w-auto">
            <button
              onClick={() => scroll('prev')}
              className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-[#F7F2E8] text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
              aria-label={language === 'ar' ? 'البطاقات السابقة (يمين)' : 'Previous cards'}
              title={language === 'ar' ? 'السابق' : 'Previous'}
            >
              {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>

            <button
              onClick={() => scroll('next')}
              className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-[#F7F2E8] text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
              aria-label={language === 'ar' ? 'البطاقات التالية (شمال)' : 'Next cards'}
              title={language === 'ar' ? 'التالي' : 'Next'}
            >
              {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* HORIZONTAL CARDS CAROUSEL */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
          tabIndex={0}
          aria-label="Monuments cards carousel"
        >
          {filteredTreasures.map((item) => {
            const isInRoute = customRoute.includes(item.id);

            return (
              <div
                key={item.id}
                className="taiba-card w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={item.mainImage}
                    alt={item.name[language] || item.name.ar}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/karnak_hypostyle_hall_1794257301105.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Metadata Badges */}
                  <div className="absolute top-3 start-3 end-3 flex items-center justify-between text-[11px] font-semibold text-white">
                    <span className="px-2.5 py-1 rounded-md bg-[#183B56]/85 backdrop-blur-xs shadow-xs">
                      {item.bank === 'east_bank'
                        ? t('east_bank')
                        : item.bank === 'west_bank'
                        ? t('west_bank')
                        : t('surroundings')}
                    </span>

                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] uppercase font-mono tracking-wider backdrop-blur-xs ${
                        item.status === 'open'
                          ? 'bg-emerald-800/80 text-emerald-100'
                          : item.status === 'permit_required'
                          ? 'bg-amber-800/80 text-amber-100'
                          : 'bg-rose-800/80 text-rose-100'
                      }`}
                    >
                      {item.status === 'open'
                        ? t('open_now')
                        : item.status === 'permit_required'
                        ? t('special_permit')
                        : t('closed')}
                    </span>
                  </div>

                  {/* Bottom Image Distance Strip */}
                  <div className="absolute bottom-2.5 start-3 text-xs text-stone-200 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C99A42]" />
                    <span className="tabular-nums font-mono text-[11px]">
                      {item.distanceFromCenterKm} {t('distance_km')}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1 text-[11px] text-[#C99A42] font-semibold tracking-wide">
                      <span>{item.epoch[language] || item.epoch.ar}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.pharaoh[language] || item.pharaoh.ar}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#183B56] leading-snug group-hover:text-[#C99A42] transition-colors font-cairo line-clamp-1">
                      {item.name[language] || item.name.ar}
                    </h3>
                    
                    {language !== 'en' && (
                      <p className="text-xs text-stone-400 font-cinzel line-clamp-1">
                        {item.name.en}
                      </p>
                    )}

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 pt-1">
                      {item.shortDesc[language] || item.shortDesc.ar}
                    </p>

                    {item.ticketPrice && (
                      <div className="pt-1.5 flex items-center gap-1.5 text-[11px] font-bold text-[#183B56] bg-[#F7F2E8] px-2.5 py-1 rounded-lg border border-[#E8DFD0]">
                        <Ticket className="w-3.5 h-3.5 text-[#C99A42] shrink-0" />
                        <span className="truncate">{item.ticketPrice[language] || item.ticketPrice.ar}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModal({ type: 'treasure', id: item.id })}
                      className="px-3 py-2 text-xs font-semibold text-[#183B56] hover:text-[#C99A42] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t('details_btn')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => (isInRoute ? removeFromRoute(item.id) : addToRoute(item.id))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isInRoute
                          ? 'bg-[#C99A42] text-white'
                          : 'bg-[#F7F2E8] hover:bg-[#EAE2D2] text-[#183B56]'
                      }`}
                      title={isInRoute ? t('in_route') : t('custom_route')}
                    >
                      {isInRoute ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t('in_route')}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#C99A42]" />
                          <span>{t('custom_route')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State If No Filter Matches */}
        {filteredTreasures.length === 0 && (
          <div className="text-center py-16 bg-[#F7F2E8] rounded-2xl border border-[#E8DFD0] space-y-3">
            <Compass className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="text-base font-bold text-[#183B56]">
              {language === 'ar' ? 'لم يتم العثور على معالم مطابقة' : 'No monuments match your filter'}
            </h3>
            <p className="text-xs text-stone-500">
              {language === 'ar' ? 'يرجى تجربة كلمات بحث أخرى أو إزالة الفلاتر' : 'Try adjusting your search keywords or clear filters'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBank('all');
                setSelectedCategory('all');
                setSelectedStatus('all');
              }}
              className="px-4 py-2 text-xs font-semibold bg-[#183B56] text-white rounded-lg mt-2 cursor-pointer"
            >
              {language === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
