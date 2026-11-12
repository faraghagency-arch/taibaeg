import React, { useRef } from 'react';
import { useData } from '../context/DataContext';
import { Waves, Sun, Mountain, Trees, Compass, ChevronLeft, ChevronRight } from 'lucide-react';

export const NatureAndNileSection: React.FC = () => {
  const { language, t } = useData();
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

  const natureCards = [
    {
      title: { ar: 'شريان الخلود: نهر النيل الأبدي', en: 'The Eternal River Nile', fr: 'Le Nil Éternel', es: 'El Nilo Eterno', de: 'Der Ewige Nil' },
      desc: {
        ar: 'المصدر الحيوي الذي بنى أعظم حضارات العالم، حيث تتهادى مياهه الصافية بين ضفاف باسقة النخيل وسحر المراكب الشراعية البيضاء.',
        en: 'The lifeblood of pharaonic greatness, flowing gently past date groves, limestone cliffs, and tranquil felucca sails.',
        fr: 'Le berceau de la civilisation égyptienne, miroir azur où glissent les voiles blanches sous les palmiers.',
        es: 'La arteria vital que dio vida a los faraones, fluyendo en calma entre palmerales milenarios.',
        de: 'Die Lebensader des pharaonischen Ägyptens, ruhig fließend zwischen Palmhainen und Sandsteinklippen.'
      },
      image: '/src/assets/images/hero_luxor_thebes_nile_1794257299786.jpg',
      icon: Waves,
      tag: { ar: 'شريان الحياة', en: 'Lifeblood' },
    },
    {
      title: { ar: 'جزيرة الموز وجزر النيل العذبة', en: 'Banana Island & River Sanctuaries', fr: 'L’Île aux Bananes', es: 'Isla de los Plátanos', de: 'Banana Island' },
      desc: {
        ar: 'واحة زمردية وسط مجرى النيل تضم بساتين الموز والمانجو والفاكهة الاستوائية، وتقدم أصفى إطلالة على ماء النهر الرقراق.',
        en: 'An emerald island sanctuary blanketed in banana groves, guava, and date palms, perfect for afternoon tea.',
        fr: 'Havre de verdure au milieu du Nil planté de bananiers et manguiers pour une halte paisible.',
        es: 'Vergel esmeralda en mitad del Nilo con huertos de frutas tropicales y vistas cristalinas.',
        de: 'Smaragdgrüne Insel inmitten des Nils mit Bananenstauden und traditionellen Teestuben.'
      },
      image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
      icon: Trees,
      tag: { ar: 'طبيعة نيلية', en: 'River Isle' },
    },
    {
      title: { ar: 'سحر الغروب فوق جبال طيبة', en: 'Sunset Over The Theban Peaks', fr: 'Coucher de Soleil sur Thèbes', es: 'Puesta de Sol en Tebas', de: 'Sonnenuntergang über Theben' },
      desc: {
        ar: 'لحظة أسطورية ينسكب فيها الذهب المذاب فوق هضاب جبل القرنة وتعكس صفحة الماء ألوان الشفق الوردي والبنفسجي.',
        en: 'A daily celestial masterwork as molten gold washes over the cliffs of al-Qurn, mirrored by the still river waters.',
        fr: 'Un spectacle grandiose où l’or du couchant enflamme les crêtes thébaines et le ruban du Nil.',
        es: 'Momento mágico en que los acantilados se tiñen de oro y púrpura reflejados en el agua.',
        de: 'Ein spektakuläres Farbspiel, wenn die sinkende Sonne die Felswände in flüssiges Gold taucht.'
      },
      image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
      icon: Sun,
      tag: { ar: 'مشهد بانورامي', en: 'Sunset Vista' },
    },
    {
      title: { ar: 'جبل القرنة والامتداد الصحراوي', en: 'Al-Qurn & The Desert Escarpment', fr: 'Le Mont Al-Qourn et le Désert', es: 'El Monte Al-Qurn y el Desierto', de: 'Al-Qurn und die Felswüste' },
      desc: {
        ar: 'القمة الهرمية الطبيعية الحارسة لوادي الملوك؛ تضاريس جيولوجية نقية تشهد على ملايين السنين من التاريخ الطبيعي.',
        en: 'The natural pyramid crest standing vigilant sentinel over royal crypts amidst raw desert majesty.',
        fr: 'Sentinelle pyramidale naturelle veillant sur les cryptes royales au milieu du désert.',
        es: 'La pirámide geológica natural que vela sobre las tumbas de los faraones en el silencio del desierto.',
        de: 'Der pyramidenförmige Naturberg, der wie ein steinerner Wächter über dem Tal der Könige thront.'
      },
      image: '/src/assets/images/valley_of_the_kings_entrance_1794257302176.jpg',
      icon: Mountain,
      tag: { ar: 'طبيعة صخرية', en: 'Desert Mountain' },
    },
  ];

  return (
    <section id="nature" className="py-20 bg-white border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>{t('nile_nature')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {language === 'ar' ? 'سحر الطبيعة والنيل: صفاء الماء وعظمة الجبل' : 'Nature & The Nile: Serene Waters, Majestic Cliffs'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {language === 'ar'
              ? 'تجمع الأقصر بين سحر الطبيعة الزراعية الخضراء على ضفاف النيل والامتداد الصحراوي المهيب لهضاب طيبة، في تباين بيئي بديع أسر قلوب الرحالة عبر العصور.'
              : 'Luxor bridges vibrant emerald sugarcane plains on the riverbanks with dramatic golden desert escarpments.'}
          </p>
        </div>

        {/* Navigation Controls Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'معالم الطبيعة والنيل' : 'Nature & Nile Landmarks'}
            </span>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-[#183B56]/10 text-[#183B56]">
              {natureCards.length} {language === 'ar' ? 'مشاهد' : 'vistas'}
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

        {/* Horizontal Cards Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
          tabIndex={0}
        >
          {natureCards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div
                key={i}
                className="taiba-card w-[320px] sm:w-[420px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
              >
                {/* Visual Half */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={card.image}
                    alt={card.title[language] || card.title.ar}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 start-3 px-2.5 py-1 rounded-md bg-[#183B56]/85 text-white text-[10px] font-semibold uppercase tracking-wider backdrop-blur-xs">
                    {(card.tag as Record<string, string>)[language] || card.tag.ar}
                  </div>
                </div>

                {/* Content Half */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F2E8] border border-[#E8DFD0] flex items-center justify-center text-[#C99A42]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-[#183B56] font-cairo leading-snug">
                      {card.title[language] || card.title.ar}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {card.desc[language] || card.desc.ar}
                    </p>
                  </div>

                  <a
                    href="#planner"
                    className="text-xs font-semibold text-[#183B56] hover:text-[#C99A42] transition-colors flex items-center gap-1.5 pt-3 border-t border-stone-100"
                  >
                    <span>{language === 'ar' ? 'تضمين في برنامج زيارتي' : 'Include in my trip'}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
