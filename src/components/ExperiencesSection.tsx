import React, { useRef } from 'react';
import { useData } from '../context/DataContext';
import { Clock, MapPin, Check, Sparkles, Send, ChevronLeft, ChevronRight } from 'lucide-react';

export const ExperiencesSection: React.FC = () => {
  const { language, t, experiences } = useData();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'prev' | 'next') => {
    if (!scrollContainerRef.current) return;
    const isRtl = document.documentElement.dir === 'rtl';
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    const multiplier = direction === 'next' ? (isRtl ? -1 : 1) : (isRtl ? 1 : -1);
    scrollContainerRef.current.scrollBy({
      left: scrollAmount * multiplier,
      behavior: 'smooth',
    });
  };

  return (
    <section id="experiences" className="py-20 bg-[#F7F2E8] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>{t('experiences')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {language === 'ar' ? 'تجارب لا تُنسى: عش سحر طيبة من الجو والبر والنيل' : 'Unforgettable Experiences: Savor Theban Magic'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {language === 'ar'
              ? 'مغامرات استثنائية من شروق الشمس حتى سكون الليل: بالون طائر يعانق السحب، إبحار في فلوكة شراعية، معايشة القرى النوبية والريفية، وجولات الحنطور التراثية.'
              : 'From pre-dawn hot air balloon flights to peaceful sunset felucca sails and authentic rural cultural homestays.'}
          </p>
        </div>

        {/* Navigation Controls Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'الأنشطة والتجارب المتاحة' : 'Available Tours & Activities'}
            </span>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-[#C99A42]/20 text-[#183B56]">
              {experiences.length} {language === 'ar' ? 'تجارب' : 'experiences'}
            </span>
          </div>

          {/* Right & Left Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('prev')}
              className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
              aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
            >
              {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <button
              onClick={() => scroll('next')}
              className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
              aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
            >
              {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Horizontal Experiences Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
          tabIndex={0}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="taiba-card w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={exp.image}
                    alt={exp.title[language] || exp.title.ar}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#C99A42]" />
                      <span>{exp.duration[language] || exp.duration.ar}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#183B56]/80 text-[10px] uppercase tracking-wider backdrop-blur-xs font-semibold">
                      {exp.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 pt-1 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#C99A42] font-semibold">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{exp.location[language] || exp.location.ar}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#183B56] font-cairo leading-snug group-hover:text-[#C99A42] transition-colors line-clamp-1">
                    {exp.title[language] || exp.title.ar}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {exp.shortDesc[language] || exp.shortDesc.ar}
                  </p>

                  {/* Highlights list */}
                  <div className="pt-2 space-y-1">
                    {exp.included.slice(0, 2).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-stone-500">
                        <Check className="w-3 h-3 text-[#C99A42] shrink-0" />
                        <span className="truncate">{inc[language] || inc.ar}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-4 mt-2 border-t border-stone-100 flex items-center justify-between gap-3">
                <span className="text-[11px] text-stone-500 italic max-w-[55%] truncate" title={exp.priceNote[language] || exp.priceNote.ar}>
                  {exp.priceNote[language] || exp.priceNote.ar}
                </span>

                <a
                  href="#planner"
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#183B56] hover:bg-[#102738] text-white flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Send className="w-3 h-3 text-[#C99A42]" />
                  <span>{t('book_inquire')}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
