import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import {
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  User,
  MapPin,
  Camera,
  Maximize2,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const MediaHubSection: React.FC = () => {
  const {
    language,
    t,
    settings,
    events,
    articles,
    gallery,
    lightboxItem,
    setLightboxItem,
    setActiveModal,
    mediaHubTab,
    setMediaHubTab
  } = useData();

  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const talesScrollRef = useRef<HTMLDivElement>(null);
  const eventsScrollRef = useRef<HTMLDivElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('all');

  const filteredGallery = selectedGalleryCategory === 'all'
    ? gallery
    : gallery.filter((item) => item.category === selectedGalleryCategory);

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
    <section id="tales" className="py-20 bg-[#F7F2E8] border-b border-[#E8DFD0] relative">
      <span id="events" className="sr-only -top-24 absolute" />
      <span id="gallery" className="sr-only -top-24 absolute" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A42]" />
            <span>
              {mediaHubTab === 'tales'
                ? t('tales')
                : mediaHubTab === 'events'
                ? t('events')
                : t('gallery')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {mediaHubTab === 'tales'
              ? (settings.talesTitle && (settings.talesTitle[language] || settings.talesTitle.ar)) || (language === 'ar' ? 'حكايات من طيبة: مقالات وقصص التاريخ العظيم' : 'Tales of Thebes: Historical Chronicles & Essays')
              : mediaHubTab === 'events'
              ? (settings.eventsTitle && (settings.eventsTitle[language] || settings.eventsTitle.ar)) || (language === 'ar' ? 'مواسم وفعاليات الأقصر: نبض المدينة واحتفالاتها' : 'Seasons & Events: Festivals of Thebes')
              : (settings.galleryTitle && (settings.galleryTitle[language] || settings.galleryTitle.ar)) || (language === 'ar' ? 'معرض الأقصر: لقطات سينمائية وثائقية حقيقية' : 'Luxor Gallery: Cinematic Perspectives')}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {mediaHubTab === 'tales'
              ? (settings.talesSubtitle && (settings.talesSubtitle[language] || settings.talesSubtitle.ar)) ||
                (language === 'ar'
                  ? 'مقالات تاريخية موثقة تكشف أسرار اكتشاف مقبرة توت عنخ آمون، وبناء صروح حتشبسوت، وحياة عمال دير المدينة، وإحياء طريق الكباش.'
                  : 'Documentary cultural narratives on Tutankhamun’s KV62 discovery, Hatshepsut’s reign, and ancient Theban daily life.')
              : mediaHubTab === 'events'
              ? (settings.eventsSubtitle && (settings.eventsSubtitle[language] || settings.eventsSubtitle.ar)) ||
                (language === 'ar'
                  ? 'تعامد الشمس الشتوي بالكرنك، ومهرجان السينما الإفريقية الدولي، ومولد سيدي أبو الحجاج الشعبي، وماراثون الجري بين المعابد.'
                  : 'Witness winter solstice alignments at Karnak, the African Film Festival, and Abu el-Haggag folk celebrations.')
              : (settings.gallerySubtitle && (settings.gallerySubtitle[language] || settings.gallerySubtitle.ar)) ||
                (language === 'ar'
                  ? 'مجموعة مختارة من الصور البانورامية عالية الجودة للمعابد والمقابر ونهر النيل والبالون الطائر مع مشغل عارض الصور المكبر.'
                  : 'Curated high-resolution architectural and aerial photography with interactive lightbox viewing.')}
          </p>

          {/* Segmented Control Buttons - Centered */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white rounded-2xl border border-[#E8DFD0] text-xs font-semibold shadow-xs">
              
              <button
                type="button"
                onClick={() => setMediaHubTab('tales')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  mediaHubTab === 'tales'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-stone-50'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#C99A42]" />
                <span>{t('tales')}</span>
              </button>

              <button
                type="button"
                onClick={() => setMediaHubTab('events')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  mediaHubTab === 'events'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-stone-50'
                }`}
              >
                <Calendar className="w-4 h-4 text-[#C99A42]" />
                <span>{t('events')}</span>
              </button>

              <button
                type="button"
                onClick={() => setMediaHubTab('gallery')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  mediaHubTab === 'gallery'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-stone-50'
                }`}
              >
                <Camera className="w-4 h-4 text-[#C99A42]" />
                <span>{t('gallery')}</span>
              </button>

            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: TALES & HISTORICAL ESSAYS                               */}
        {/* ============================================================== */}
        {mediaHubTab === 'tales' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 text-center sm:text-start">
                <span className="text-sm sm:text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'المقالات التوثيقية والقصص' : 'Documentary Articles & Chronicles'}
                </span>
                <span className="text-xs font-cairo font-bold px-2.5 py-1 rounded-full bg-[#183B56]/10 text-[#183B56] shrink-0 whitespace-nowrap">
                  {articles.length} {language === 'ar' ? 'حكايات' : 'essays'}
                </span>
              </div>

              {/* Right & Left Navigation Buttons - Centered on mobile */}
              <div className="flex items-center justify-center gap-3 self-center sm:self-auto shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scroll(talesScrollRef, 'prev')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => scroll(talesScrollRef, 'next')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div
              ref={talesScrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
              tabIndex={0}
            >
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="taiba-card w-[320px] sm:w-[420px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
                >
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
                        type="button"
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
        )}

        {/* ============================================================== */}
        {/* TAB 2: SEASONS & EVENTS                                        */}
        {/* ============================================================== */}
        {mediaHubTab === 'events' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 text-center sm:text-start">
                <span className="text-sm sm:text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'أجندة الفعاليات السنوية' : 'Annual Events Schedule'}
                </span>
                <span className="text-xs font-cairo font-bold px-2.5 py-1 rounded-full bg-[#183B56]/10 text-[#183B56] shrink-0 whitespace-nowrap">
                  {events.length} {language === 'ar' ? 'فعاليات' : 'events'}
                </span>
              </div>

              {/* Right & Left Navigation Buttons - Centered on mobile */}
              <div className="flex items-center justify-center gap-3 self-center sm:self-auto shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scroll(eventsScrollRef, 'prev')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => scroll(eventsScrollRef, 'next')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

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
        )}

        {/* ============================================================== */}
        {/* TAB 3: CINEMATIC PHOTO GALLERY                                 */}
        {/* ============================================================== */}
        {mediaHubTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
                {[
                  { id: 'all', label: t('all') },
                  { id: 'temples', label: t('temples') },
                  { id: 'tombs', label: t('royal_tombs') },
                  { id: 'nile', label: language === 'ar' ? 'النيل' : 'Nile' },
                  { id: 'aerial', label: language === 'ar' ? 'تصوير جوي' : 'Aerial' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedGalleryCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                      selectedGalleryCategory === cat.id
                        ? 'bg-[#183B56] text-white shadow-xs font-bold'
                        : 'bg-white text-stone-600 hover:text-[#183B56] border border-[#E8DFD0]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Right & Left Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll(galleryScrollRef, 'prev')}
                  className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => scroll(galleryScrollRef, 'next')}
                  className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div
              ref={galleryScrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
              tabIndex={0}
            >
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="group relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-[4/3] shrink-0 snap-start rounded-2xl overflow-hidden bg-stone-100 border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all cursor-pointer"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title[language] || item.title.ar}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-3 end-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.videoUrl ? <Play className="w-4 h-4 fill-white" /> : <Maximize2 className="w-4 h-4" />}
                  </div>

                  <div className="absolute bottom-4 start-4 end-4 text-white space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#C99A42] font-semibold">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location[language] || item.location.ar}</span>
                    </div>
                    <h3 className="text-sm font-bold font-cairo leading-snug truncate">
                      {item.title[language] || item.title.ar}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="absolute -top-12 end-0 text-white hover:text-[#C99A42] p-2 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/50">
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title[language] || lightboxItem.title.ar}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl"
                />
              </div>

              <div className="w-full mt-4 text-center text-white space-y-1">
                <h4 className="text-lg font-bold font-cairo">
                  {lightboxItem.title[language] || lightboxItem.title.ar}
                </h4>
                <p className="text-xs text-stone-300 max-w-xl mx-auto">
                  {lightboxItem.caption[language] || lightboxItem.caption.ar}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
