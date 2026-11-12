import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import { Utensils, Hotel, Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export const TasteAndStaySection: React.FC = () => {
  const { language, t, settings, restaurants, hotels, tasteStayTab: activeTab, setTasteStayTab: setActiveTab } = useData();

  const restScrollRef = useRef<HTMLDivElement>(null);
  const hotelScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'prev' | 'next') => {
    if (!ref.current) return;
    const isRtl = document.documentElement.dir === 'rtl';
    const scrollAmount = ref.current.clientWidth * 0.8;
    const multiplier = direction === 'next' ? (isRtl ? -1 : 1) : (isRtl ? 1 : -1);
    ref.current.scrollBy({
      left: scrollAmount * multiplier,
      behavior: 'smooth',
    });
  };

  return (
    <section id="taste" className="py-20 bg-white border-b border-[#E8DFD0] relative">
      <span id="stay" className="sr-only -top-24 absolute" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <Utensils className="w-3.5 h-3.5 text-[#C99A42]" />
            <span>{activeTab === 'taste' ? t('taste') : t('stay')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {activeTab === 'taste'
              ? (settings.tasteTitle ? (settings.tasteTitle[language] || settings.tasteTitle.ar) : (language === 'ar' ? 'تذوق الأقصر: نكهات الصعيد والمطاعم النيلية' : 'Taste Luxor: Flavors of Upper Egypt'))
              : (settings.stayTitle ? (settings.stayTitle[language] || settings.stayTitle.ar) : (language === 'ar' ? 'أين تقيم؟: قصور تاريخية ومنتجعات نيلية فاخرة' : 'Where to Stay: Palaces & Riverside Havens'))}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {activeTab === 'taste'
              ? (settings.tasteSubtitle ? (settings.tasteSubtitle[language] || settings.tasteSubtitle.ar) : (language === 'ar' ? 'دليل مختار لأشهى المأكولات التراثية من الخبز الشمسي والطواجن الفخارية إلى أرقى المطاعم العالمية المطلة على النيل والمعابد.' : 'Curated dining from authentic clay-pot tagines and sun-baked bread to grand historic riverfront dining.'))
              : (settings.staySubtitle ? (settings.staySubtitle[language] || settings.staySubtitle.ar) : (language === 'ar' ? 'خيارات إقامة استثنائية تناسب جميع الأذواق: قصور تاريخية استضافت ملوك العالم، منتجعات نيلية، بيوت ضيافة بيئية، وفنادق اقتصادية.' : 'Handpicked historic Victorian palaces, Nile wellness retreats, boutique desert hideaways, and cozy budget gems.'))}
          </p>

          {/* Segmented Control Buttons - Centered */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-1.5 p-1 bg-[#F7F2E8] rounded-2xl border border-[#E8DFD0] text-xs font-semibold">
              <button
                onClick={() => setActiveTab('taste')}
                className={`px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'taste' ? 'bg-[#183B56] text-white shadow-xs font-bold' : 'text-stone-600 hover:text-[#183B56]'
                }`}
              >
                <Utensils className="w-4 h-4 text-[#C99A42]" />
                <span>{t('taste')}</span>
              </button>
              <button
                onClick={() => setActiveTab('stay')}
                className={`px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'stay' ? 'bg-[#183B56] text-white shadow-xs font-bold' : 'text-stone-600 hover:text-[#183B56]'
                }`}
              >
                <Hotel className="w-4 h-4 text-[#C99A42]" />
                <span>{t('stay')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* RESTAURANTS VIEW */}
        {activeTab === 'taste' && (
          <div className="space-y-8">
            
            {/* Culinary Highlights Strip */}
            <div className="bg-[#F7F2E8] p-6 rounded-2xl border border-[#E8DFD0] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-center">
              <div className="space-y-1">
                <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'الخبز الشمسي' : 'Sun Bread (Aish Shamsi)'}</span>
                <span className="text-stone-500">{language === 'ar' ? 'مخبوز بالخميرة البلدية تحت شمس طيبة' : 'Ancient sourdough fermented under direct sun'}</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'طواجن الفخار' : 'Clay Pot Tagines'}</span>
                <span className="text-stone-500">{language === 'ar' ? 'لحم ضأن بالبصل الأورما والكزبرة' : 'Slow-braised lamb & shallots in sealed clay'}</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'الحمام المحشي' : 'Stuffed Squab'}</span>
                <span className="text-stone-500">{language === 'ar' ? 'محشو بالفريك أو الأرز والمكسرات' : 'Roasted pigeon stuffed with spiced freekeh'}</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'الكركديه الأسواني' : 'Hibiscus Karkadeh'}</span>
                <span className="text-stone-500">{language === 'ar' ? 'شراب ياقوتي مثلج ينعش الروح' : 'Chilled ruby-red herbal infusion'}</span>
              </div>
            </div>

            {/* Navigation Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 text-center sm:text-start">
                <span className="text-sm sm:text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'المطاعم وأماكن تناول الطعام' : 'Curated Restaurants & Cafes'}
                </span>
                <span className="text-xs font-cairo font-bold px-2.5 py-1 rounded-full bg-[#183B56]/10 text-[#183B56] shrink-0 whitespace-nowrap">
                  {restaurants.length} {language === 'ar' ? 'مطاعم' : 'spots'}
                </span>
              </div>

              {/* Right & Left Navigation Buttons - Centered on mobile */}
              <div className="flex items-center justify-center gap-3 self-center sm:self-auto shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => scroll(restScrollRef, 'prev')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => scroll(restScrollRef, 'next')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Horizontal Restaurants Carousel */}
            <div
              ref={restScrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
              tabIndex={0}
            >
              {restaurants.map((rest) => (
                <div
                  key={rest.id}
                  className="taiba-card w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={rest.image}
                        alt={rest.name[language] || rest.name.ar}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 start-3 px-2 py-0.5 rounded-md bg-[#183B56]/85 text-white text-[10px] font-semibold">
                        {rest.bank === 'east_bank' ? t('east_bank') : t('west_bank')}
                      </div>
                      <div className="absolute bottom-2.5 end-3 px-2.5 py-1 rounded-md bg-white/95 text-[#183B56] font-cairo font-bold text-[11px] shadow-xs">
                        {rest.priceRange}
                      </div>
                    </div>

                    <div className="p-5 pt-0 space-y-2">
                      <span className="text-[11px] text-[#C99A42] font-semibold block">
                        {rest.type[language] || rest.type.ar}
                      </span>

                      <h3 className="text-base font-bold text-[#183B56] font-cairo leading-snug group-hover:text-[#C99A42] transition-colors line-clamp-1">
                        {rest.name[language] || rest.name.ar}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                        {rest.description[language] || rest.description.ar}
                      </p>

                      <div className="pt-2 border-t border-stone-100 space-y-1 text-[11px] text-stone-500">
                        <span className="font-semibold text-stone-700 block">
                          {language === 'ar' ? 'أشهر الأطباق:' : 'Specialties:'}
                        </span>
                        {rest.specialtyDishes.map((dish, i) => (
                          <div key={i} className="truncate">
                            ▪ {dish[language] || dish.ar}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-stone-500 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-[#C99A42] shrink-0" />
                      <span className="truncate">{rest.location[language] || rest.location.ar}</span>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-[#F7F2E8] text-[#183B56] font-cairo font-bold text-[11px] shrink-0">
                      {rest.priceRange}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HOTELS & STAYS VIEW */}
        {activeTab === 'stay' && (
          <div className="space-y-8">
            {/* Navigation Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 text-center sm:text-start">
                <span className="text-sm sm:text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'الفنادق والقصور التاريخية' : 'Historic Palaces & Hotels'}
                </span>
                <span className="text-xs font-cairo font-bold px-2.5 py-1 rounded-full bg-[#183B56]/10 text-[#183B56] shrink-0 whitespace-nowrap">
                  {hotels.length} {language === 'ar' ? 'فنادق' : 'hotels'}
                </span>
              </div>

              {/* Right & Left Navigation Buttons - Centered on mobile */}
              <div className="flex items-center justify-center gap-3 self-center sm:self-auto shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => scroll(hotelScrollRef, 'prev')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => scroll(hotelScrollRef, 'next')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Horizontal Hotels Carousel */}
            <div
              ref={hotelScrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
              tabIndex={0}
            >
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="taiba-card w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={hotel.image}
                        alt={hotel.name[language] || hotel.name.ar}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 start-3 px-2.5 py-1 rounded-md bg-[#183B56]/85 text-white text-[10px] font-semibold">
                        {hotel.bank === 'east_bank' ? t('east_bank') : t('west_bank')}
                      </div>

                      <div className="absolute top-3 end-3 flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-white/90 text-amber-500 text-xs font-bold shadow-xs">
                        {Array.from({ length: hotel.stars }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <div className="p-5 pt-0 space-y-2">
                      <h3 className="text-base font-bold text-[#183B56] font-cairo leading-snug group-hover:text-[#C99A42] transition-colors line-clamp-1">
                        {hotel.name[language] || hotel.name.ar}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                        {hotel.description[language] || hotel.description.ar}
                      </p>

                      <div className="pt-2 border-t border-stone-100 space-y-1 text-[11px] text-stone-500">
                        {hotel.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="truncate">
                            ✓ {feat[language] || feat.ar}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-stone-500 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-[#C99A42] shrink-0" />
                      <span className="truncate">{hotel.location[language] || hotel.location.ar}</span>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-[#F7F2E8] text-[#183B56] font-cairo font-bold text-[11px] shrink-0">
                      {hotel.priceRange}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
