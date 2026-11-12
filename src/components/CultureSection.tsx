import React, { useRef } from 'react';
import { useData } from '../context/DataContext';
import { Palette, Sparkles, Music, ShoppingBag, HeartHandshake, Home, ChevronLeft, ChevronRight } from 'lucide-react';

export const CultureSection: React.FC = () => {
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

  const cultureItems = [
    {
      title: { ar: 'صناعة ونحت الألباستر بالقرنة', en: 'Traditional Alabaster Carving in Qurna', fr: 'L’Art de l’Albâtre à Gournah', es: 'Talla Tradicional de Alabastro en Qurna', de: 'Traditionelle Alabaster-Bildhauerei in Qurna' },
      desc: {
        ar: 'مهنة وراثية متوارثة منذ آلاف السنين؛ يشكل حرفيو القرنة حجر الألباستر المصري الشفاف يدوياً بالأزاميل والمبارد ليخرجوا مزهريات وتماثيل تحاكي مقتنيات المقابر الملكية.',
        en: 'A hereditary craft preserved for millennia: master artisans chisel translucent Egyptian calcite into illuminated vases and scarabs using ancient hand tools.',
        fr: 'Art millénaire hérité des bâtisseurs de tombes : les artisans sculptent manuellement l’albâtre translucide en vases et statuettes délicates.',
        es: 'Oficio transmitido de padres a hijos: artesanos tallan a mano la calcita traslúcida creando vasos y amuletos idénticos a los del ajuar real.',
        de: 'Jahrtausendealte Handwerkskunst: Meister schnitzen den durchscheinenden Alabaster von Hand zu Skarabäen und Vasen.'
      },
      image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
      icon: Palette,
    },
    {
      title: { ar: 'صناعة البردي والنسيج اليدوي النيلي', en: 'Papyrus Making & Heritage Handloom Weaving', fr: 'Papyrus Antique & Tissage Manuel', es: 'Papiros y Telares Artesanales', de: 'Papyrus-Herstellung & Handweberei' },
      desc: {
        ar: 'تحويل سيقان نبات البردي المثلثة لشرائح مضغوطة كما في عهد الفراعنة، ورسم النقوش بالألوان الطبيعية، بالإضافة إلى أنوال النسيج الصعيدي بالقطن والكتان.',
        en: 'Pressing triangular papyrus reeds into supple writing sheets and hand-weaving pure Egyptian long-staple cotton and linen on wooden foot looms.',
        fr: 'Fabrication authentique des feuilles de papyrus pressées et tissage traditionnel du lin et coton sur métiers en bois.',
        es: 'Elaboración tradicional del papiro mediante tiras cruzadas y prensadas, y tejido en telares de madera.',
        de: 'Pressen von echtem Nilpapyrus und Weben von feinstem ägyptischem Leinen auf traditionellen Webstühlen.'
      },
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
      icon: Sparkles,
    },
    {
      title: { ar: 'رقصة التحطيب بالعصا والفنون الشعبية', en: 'Tahtib Stick Dancing & Folk Music', fr: 'L’Art du Tahtib & Musiques Populaires', es: 'Danza de Bastón Tahtib y Folclore', de: 'Tahtib-Stocktanz & Volksmusik' },
      desc: {
        ar: 'أقدم فن دفاعي وراقص مسجل على جدران المعابد ومدرج بقائمة اليونسكو للتراث الإنساني؛ مبارزة نبيلة بالعصا الطويلة على أنغام المزمار البلدي والطبول الصعيدية.',
        en: 'UNESCO-inscribed ancient martial stick dance depicted on pharaonic reliefs; an elegant duel of honor set to hypnotic mizmar pipes and drums.',
        fr: 'Danse martiale au bâton inscrite à l’UNESCO, figurant sur les temples antiques, rythmée par le hautbois traditionnel et les tambours.',
        es: 'Danza marcial de bastones reconocida por la UNESCO, acompañada de caramillos tradicionales y tambores.',
        de: 'UNESCO-Kulturerbe: Der altägyptische Stockfechttanz Tahtib zur Musik von Schalmeien und Rahmentrommeln.'
      },
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      icon: Music,
    },
    {
      title: { ar: 'سوق الأقصر التراثي وخان العطارة', en: 'Historic Luxor Souk & Spice Bazaars', fr: 'Le Vieux Souk et Bazar aux Épices', es: 'El Zoco Histórico y Bazar de Especias', de: 'Historischer Gewürzbasar von Luxor' },
      desc: {
        ar: 'عالم يفيض بعطور اللبان الأسواني، والكركديه، والزعفران، والكمون البلدي، والأواني الفخارية المشغولة، وحلي الفضة البدوية في ممرات مظللة بطول كيلومتر.',
        en: 'A fragrant sensory wonderland filled with frankincense, ruby karkadeh, golden cumin, hand-hammered brass lamps, and Bedouin silver jewelry.',
        fr: 'Labyrinthe parfumé d’encens, de karkadé, de cumin doré et d’échoppes d’artisanat en laiton ciselé.',
        es: 'Bazar aromático repleto de mirra, incienso, hibisco, azafrán y platería tradicional.',
        de: 'Ein duftendes Labyrinth aus Weihrauch, Karkadeh, Kreuzkümmel, Messinglampen und Silberschmuck.'
      },
      image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
      icon: ShoppingBag,
    },
    {
      title: { ar: 'كرم الضيافة الصعيدي والعادات الأصيلة', en: 'Upper Egyptian Hospitality & Customs', fr: 'L’Hospitalité Saidie et Traditions', es: 'Hospitalidad Saidí y Costumbres', de: 'Gastfreundschaft & Traditionen Oberägyptens' },
      desc: {
        ar: 'الشهامة الصعيدية المتوارثة: جلسات "المندرة" وتبادل كؤوس الشاي الثقيل بالحبق، وتقديم واجب الضيافة لكل عابر سبيل بابتسامة ترحيب أصيلة.',
        en: 'Timeless codes of Southern Egyptian warmth: gatherings in the family reception hall (mandara) and welcoming travelers as honored guests.',
        fr: 'Règles séculaires de la générosité du sud : réunions dans la mandara et thé bouillant partagé en signe de bienvenue.',
        es: 'La legendaria calidez del sur: tertulias en la mandara y bienvenida afectuosa a todo viajero.',
        de: 'Jahrhundertealte Traditionen des Südens: Beisammensein in der Mandara und herzliche Gastfreundschaft für jeden Reisenden.'
      },
      image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
      icon: HeartHandshake,
    },
    {
      title: { ar: 'الحياة في القرى الريفية والبيوت الطينية', en: 'Rural Village Life & Vernacular Earthen Homes', fr: 'Architecture en Terre & Vie Rurale', es: 'Vida Rural y Casas de Adobe', de: 'Dörfliches Leben & Lehmarchitektur' },
      desc: {
        ar: 'بيوت بنيت من طمي النيل والآجر اللبن بقباب تحافظ على البرودة الطبيعية صيفاً، وحقول القمح وقصب السكر التي تحاكي لوحات مقابر الفراعنة.',
        en: 'Dome-roofed earthen homes naturally cooled against desert heat, set against emerald cane fields mirroring 3,500-year-old tomb frescoes.',
        fr: 'Maisons de pisé aux toits en coupole bioclimatiques, bordant les champs de canne à sucre comme sur les bas-reliefs antiques.',
        es: 'Viviendas de adobe bioclimáticas con cúpulas frescas rodeadas de cañaverales idénticos a los frescos faraónicos.',
        de: 'Klimagerechte Lehmhäuser mit Kuppeldächern inmitten von Zuckerrohrfeldern wie auf altägyptischen Wandmalereien.'
      },
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      icon: Home,
    },
  ];

  return (
    <section id="culture" className="py-20 bg-[#F7F2E8] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>{t('culture')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {language === 'ar' ? 'روح طيبة: التراث الحي والحرف والصوت الصعيدي' : 'The Soul of Thebes: Living Heritage & Crafts'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {language === 'ar'
              ? 'ليست الأقصر مجرد حجر قديم، بل هي مجتمع حي ينبض بفنون الأجداد: ورش نحت الألباستر، والتحطيب المدرج باليونيسكو، وحكايا أسواق التوابل، والكرم الصعيدي الأصيل.'
              : 'Beyond stone monuments lies a living community cherishing millennia-old artisan traditions, folk music, and Southern Egyptian hospitality.'}
          </p>
        </div>

        {/* Navigation Controls Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'أركان التراث والحياة' : 'Heritage & Living Pillars'}
            </span>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-[#C99A42]/20 text-[#183B56]">
              {cultureItems.length} {language === 'ar' ? 'محاور' : 'pillars'}
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
          {cultureItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="taiba-card w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  {/* Distinct Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title[language] || item.title.ar}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 end-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#C99A42]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 pt-1 space-y-2">
                    <h3 className="text-lg font-bold text-[#183B56] font-cairo leading-snug group-hover:text-[#C99A42] transition-colors line-clamp-1">
                      {item.title[language] || item.title.ar}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {item.desc[language] || item.desc.ar}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-stone-100">
                  <a
                    href="#experiences"
                    className="text-xs font-semibold text-[#183B56] hover:text-[#C99A42] transition-colors flex items-center gap-1.5"
                  >
                    <span>{language === 'ar' ? 'استكشف التجارب المرتبطة' : 'Explore related experiences'}</span>
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
