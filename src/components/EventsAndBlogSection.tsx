import React, { useRef } from 'react';
import { useData } from '../context/DataContext';
import { Calendar, Clock, BookOpen, ArrowRight, ArrowLeft, Tag, User, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export const EventsAndBlogSection: React.FC = () => {
  const { language, t, events, articles, setActiveModal } = useData();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const eventsScrollRef = useRef<HTMLDivElement>(null);
  const articlesScrollRef = useRef<HTMLDivElement>(null);

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
    <section id="tales" className="py-20 bg-white border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ============================================================== */}
        {/* SEASONS & EVENTS                                               */}
        {/* ============================================================== */}
        <div className="space-y-10">
          {/* Header - Centered */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
              <span>11</span>
              <span aria-hidden="true">·</span>
              <span>{t('events')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
              {language === 'ar' ? 'مواسم وفعاليات الأقصر: نبض المدينة واحتفالاتها' : 'Seasons & Events: Cultural Festivals of Thebes'}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              {language === 'ar'
                ? 'تعامد الشمس الشتوي بالكرنك، ومهرجان السينما الإفريقية، ومولد سيدي أبو الحجاج الشعبي، وماراثون الجري بين المعابد.'
                : 'Witness the winter solstice solar alignment at Karnak, the African Film Festival, and the lively Abu el-Haggag folk carnival.'}
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#183B56] font-cairo">
                {language === 'ar' ? 'أجندة الفعاليات السنوية' : 'Annual Events Schedule'}
              </span>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-[#183B56]/10 text-[#183B56]">
                {events.length} {language === 'ar' ? 'فعاليات' : 'events'}
              </span>
            </div>

            {/* Right & Left Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll(eventsScrollRef, 'prev')}
                className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
              >
                {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              <button
                onClick={() => scroll(eventsScrollRef, 'next')}
                className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
              >
                {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Horizontal Events Carousel */}
          <div
            ref={eventsScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
            tabIndex={0}
          >
            {events.map((ev) => (
              <div
                key={ev.id}
                className="taiba-card w-[290px] sm:w-[330px] lg:w-[360px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={ev.image}
                      alt={ev.title[language] || ev.title.ar}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-2.5 start-3 text-[11px] text-[#C99A42] font-semibold flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{ev.date[language] || ev.date.ar}</span>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-1.5">
                    <div className="flex items-center gap-1 text-[11px] text-stone-400">
                      <MapPin className="w-3 h-3 text-[#C99A42]" />
                      <span className="truncate">{ev.location[language] || ev.location.ar}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#183B56] font-cairo leading-snug group-hover:text-[#C99A42] transition-colors line-clamp-1">
                      {ev.title[language] || ev.title.ar}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 pt-1">
                      {ev.description[language] || ev.description.ar}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                  <span className="italic">{ev.accessInfo[language] || ev.accessInfo.ar}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* TALES FROM THEBES / BLOG                                       */}
        {/* ============================================================== */}
        <div className="pt-10 border-t border-[#E8DFD0] space-y-10">
          {/* Header - Centered */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
              <span>12</span>
              <span aria-hidden="true">·</span>
              <span>{t('tales')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
              {language === 'ar' ? 'حكايات من طيبة: مقالات وقصص التاريخ العظيم' : 'Tales of Thebes: Historical Chronicles & Essays'}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              {language === 'ar'
                ? 'مقالات تاريخية موثقة تكشف أسرار اكتشاف مقبرة توت عنخ آمون، وبناء صروح حتشبسوت، وعمال دير المدينة، وإحياء طريق الكباش.'
                : 'Documentary cultural narratives shedding light on Tutankhamun’s KV62 discovery, Hatshepsut’s reign, and Theban daily life.'}
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#183B56] font-cairo">
                {language === 'ar' ? 'المقالات التوثيقية' : 'Documentary Articles'}
              </span>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-[#183B56]/10 text-[#183B56]">
                {articles.length} {language === 'ar' ? 'حكايات' : 'essays'}
              </span>
            </div>

            {/* Right & Left Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll(articlesScrollRef, 'prev')}
                className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
              >
                {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              <button
                onClick={() => scroll(articlesScrollRef, 'next')}
                className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
              >
                {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Horizontal Articles Carousel */}
          <div
            ref={articlesScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
            tabIndex={0}
          >
            {articles.map((art) => (
              <div
                key={art.id}
                className="taiba-card w-[320px] sm:w-[420px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
              >
                {/* Visual Half */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={art.coverImage}
                    alt={art.title[language] || art.title.ar}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 start-3 px-2.5 py-1 rounded-md bg-[#183B56]/85 text-white text-[10px] font-semibold">
                    {art.category[language] || art.category.ar}
                  </div>
                </div>

                {/* Content Half */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-stone-400 font-mono">
                      <span>{art.publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-[#C99A42]">
                        <Clock className="w-3 h-3" />
                        <span>{art.readTimeMin} min</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#183B56] font-cairo leading-snug group-hover:text-[#C99A42] transition-colors line-clamp-1">
                      {art.title[language] || art.title.ar}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {art.excerpt[language] || art.excerpt.ar}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 flex items-center gap-1">
                      <User className="w-3 h-3 text-[#C99A42]" />
                      <span className="truncate max-w-[120px]">{art.author[language] || art.author.ar}</span>
                    </span>

                    <button
                      onClick={() => setActiveModal({ type: 'article', id: art.id })}
                      className="text-xs font-semibold text-[#183B56] hover:text-[#C99A42] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t('read_more')}</span>
                      <Arrow className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
