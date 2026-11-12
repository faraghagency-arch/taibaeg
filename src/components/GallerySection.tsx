import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import { GalleryItem } from '../types';
import { Camera, MapPin, Maximize2, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { language, t, gallery, lightboxItem, setLightboxItem } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredGallery = selectedCategory === 'all'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

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
    <section id="gallery" className="py-20 bg-[#F7F2E8] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <span>13</span>
            <span aria-hidden="true">·</span>
            <span>{t('gallery')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {language === 'ar' ? 'معرض الأقصر: لقطات سينمائية وثائقية حقيقية' : 'Luxor Gallery: Cinematic Documentary Perspectives'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {language === 'ar'
              ? 'مجموعة مختارة من الصور البانورامية عالية الجودة للمعابد والمقابر ونهر النيل والبالون الطائر مع مشغل عارض الصور المكبر.'
              : 'Curated collection of high-resolution architectural and aerial photography with interactive lightbox viewing.'}
          </p>

          {/* Category Filter Pills - Centered */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold">
            {[
              { id: 'all', label: t('all') },
              { id: 'temples', label: t('temples') },
              { id: 'tombs', label: t('royal_tombs') },
              { id: 'nile', label: language === 'ar' ? 'النيل' : 'Nile' },
              { id: 'aerial', label: language === 'ar' ? 'تصوير جوي' : 'Aerial' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'bg-white text-stone-600 hover:text-[#183B56] border border-[#E8DFD0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Controls Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'معرض الصور الفوتوغرافية' : 'Curated Photography'}
            </span>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-[#183B56]/10 text-[#183B56]">
              {filteredGallery.length} {language === 'ar' ? 'صورة' : 'photos'}
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

        {/* Horizontal Gallery Carousel */}
        <div
          ref={scrollContainerRef}
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
