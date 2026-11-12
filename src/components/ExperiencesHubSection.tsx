import React, { useRef, useState } from 'react';
import { useData } from '../context/DataContext';
import { Experience } from '../types';
import {
  Compass,
  Clock,
  MapPin,
  Check,
  Send,
  Waves,
  Sun,
  Mountain,
  Trees,
  Palette,
  Sparkles,
  Music,
  ShoppingBag,
  HeartHandshake,
  Home,
  ChevronLeft,
  ChevronRight,
  Wind,
  Tag,
  Info,
  Calendar,
  X
} from 'lucide-react';

export const ExperiencesHubSection: React.FC = () => {
  const { language, t, settings, experiences, experiencesHubTab, setExperiencesHubTab } = useData();

  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const expScrollRef = useRef<HTMLDivElement>(null);
  const natureScrollRef = useRef<HTMLDivElement>(null);
  const cultureScrollRef = useRef<HTMLDivElement>(null);

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
    <section id="experiences" className="py-20 bg-[#F7F2E8] border-b border-[#E8DFD0] relative">
      <span id="nature" className="sr-only -top-24 absolute" />
      <span id="culture" className="sr-only -top-24 absolute" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <Compass className="w-3.5 h-3.5 text-[#C99A42]" />
            <span>
              {experiencesHubTab === 'experiences'
                ? t('experiences')
                : experiencesHubTab === 'nature'
                ? t('nile_nature')
                : t('culture')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {experiencesHubTab === 'experiences'
              ? (settings.experiencesTitle && (settings.experiencesTitle[language] || settings.experiencesTitle.ar)) || (language === 'ar' ? 'تجارب لا تُنسى: عش سحر طيبة من الجو والبر والنيل' : 'Unforgettable Experiences: Savor Theban Magic')
              : experiencesHubTab === 'nature'
              ? (settings.natureTitle && (settings.natureTitle[language] || settings.natureTitle.ar)) || (language === 'ar' ? 'سحر الطبيعة والنيل: صفاء الماء وعظمة الجبل' : 'Nature & The Nile: Serene Waters, Majestic Cliffs')
              : (settings.cultureTitle && (settings.cultureTitle[language] || settings.cultureTitle.ar)) || (language === 'ar' ? 'روح طيبة: التراث الحي والحرف والصوت الصعيدي' : 'The Soul of Thebes: Living Heritage & Crafts')}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {experiencesHubTab === 'experiences'
              ? (settings.experiencesSubtitle && (settings.experiencesSubtitle[language] || settings.experiencesSubtitle.ar)) ||
                (language === 'ar'
                  ? 'مغامرات استثنائية من شروق الشمس حتى سكون الليل: بالون طائر يعانق السحب، إبحار في فلوكة شراعية، معايشة القرى النوبية، وسفاري طيبة.'
                  : 'From pre-dawn hot air balloon flights to peaceful sunset felucca sails and authentic rural cultural homestays.')
              : experiencesHubTab === 'nature'
              ? (settings.natureSubtitle && (settings.natureSubtitle[language] || settings.natureSubtitle.ar)) ||
                (language === 'ar'
                  ? 'تجمع الأقصر بين سحر الطبيعة الزراعية الخضراء على ضفاف النيل والامتداد الصحراوي المهيب لهضاب طيبة في تباين بيئي بديع.'
                  : 'Luxor bridges vibrant emerald sugarcane plains on the riverbanks with dramatic golden desert escarpments.')
              : (settings.cultureSubtitle && (settings.cultureSubtitle[language] || settings.cultureSubtitle.ar)) ||
                (language === 'ar'
                  ? 'ليست الأقصر مجرد حجر قديم، بل مجتمع حي ينبض بفنون الأجداد: نحت الألباستر، والتحطيب، وسوق التوابل، والكرم الصعيدي الأصيل.'
                  : 'Beyond stone monuments lies a living community cherishing millennia-old artisan traditions, folk music, and Southern Egyptian hospitality.')}
          </p>

          {/* Segmented Control Buttons - Centered */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white rounded-2xl border border-[#E8DFD0] text-xs font-semibold shadow-xs">
              
              <button
                type="button"
                onClick={() => setExperiencesHubTab('experiences')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  experiencesHubTab === 'experiences'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-stone-50'
                }`}
              >
                <Wind className="w-4 h-4 text-[#C99A42]" />
                <span>{t('experiences')}</span>
              </button>

              <button
                type="button"
                onClick={() => setExperiencesHubTab('nature')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  experiencesHubTab === 'nature'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-stone-50'
                }`}
              >
                <Waves className="w-4 h-4 text-[#C99A42]" />
                <span>{t('nile_nature')}</span>
              </button>

              <button
                type="button"
                onClick={() => setExperiencesHubTab('culture')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  experiencesHubTab === 'culture'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-stone-50'
                }`}
              >
                <Palette className="w-4 h-4 text-[#C99A42]" />
                <span>{t('culture')}</span>
              </button>

            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW 1: EXPERIENCES & TOURS                                    */}
        {/* ============================================================== */}
        {experiencesHubTab === 'experiences' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 text-center sm:text-start">
                <span className="text-sm sm:text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'الأنشطة والجولات المتاحة' : 'Available Tours & Activities'}
                </span>
                <span className="text-xs font-cairo font-bold px-2.5 py-1 rounded-full bg-[#C99A42]/20 text-[#183B56] shrink-0 whitespace-nowrap">
                  {experiences.length} {language === 'ar' ? 'تجارب' : 'experiences'}
                </span>
              </div>

              {/* Right & Left Navigation Buttons - Centered on mobile */}
              <div className="flex items-center justify-center gap-3 self-center sm:self-auto shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scroll(expScrollRef, 'prev')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => scroll(expScrollRef, 'next')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div
              ref={expScrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth focus:outline-hidden"
              tabIndex={0}
            >
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="taiba-card w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#E8DFD0] shadow-xs hover:shadow-xl transition-all"
                >
                  <div className="space-y-4">
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

                  {/* Price & Best Timing Box */}
                  <div className="mx-5 my-2.5 p-3 rounded-xl bg-[#FAF8F3] border border-[#E8DFD0] flex flex-col gap-1.5 shadow-2xs">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="text-stone-500 flex items-center gap-1 font-medium text-[11px] shrink-0">
                        <Tag className="w-3.5 h-3.5 text-[#C99A42]" />
                        <span>{language === 'ar' ? 'السعر المقدر:' : 'Price:'}</span>
                      </span>
                      <span className="font-bold text-[#183B56] font-cairo text-xs text-end">
                        {exp.priceNote[language] || exp.priceNote.ar}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-[11px] text-stone-500 pt-1.5 border-t border-stone-200/70">
                      <span className="shrink-0">{language === 'ar' ? 'أفضل موعد:' : 'Best Time:'}</span>
                      <span className="font-semibold text-[#C99A42] truncate">{exp.bestTime[language] || exp.bestTime.ar}</span>
                    </div>
                  </div>

                  {/* Clear Actions Footer: تفاصيل التجربة + احجز الآن */}
                  <div className="p-5 pt-2 border-t border-stone-100 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedExperience(exp)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold border border-[#E8DFD0] hover:border-[#C99A42] bg-[#F7F2E8] hover:bg-white text-[#183B56] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-[#C99A42]" />
                      <span>{language === 'ar' ? 'التفاصيل' : 'Details'}</span>
                    </button>

                    <a
                      href="#planner"
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-[#183B56] hover:bg-[#102738] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs text-center"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C99A42]" />
                      <span>{language === 'ar' ? 'احجز الآن' : 'Book Now'}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: NATURE & THE NILE                                      */}
        {/* ============================================================== */}
        {experiencesHubTab === 'nature' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2 text-center sm:text-start">
                <span className="text-sm sm:text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'معالم الطبيعة والنيل' : 'Nature & Nile Landmarks'}
                </span>
                <span className="text-xs font-cairo font-bold px-2.5 py-1 rounded-full bg-[#183B56]/10 text-[#183B56] shrink-0 whitespace-nowrap">
                  {natureCards.length} {language === 'ar' ? 'مشاهد' : 'vistas'}
                </span>
              </div>

              {/* Right & Left Navigation Buttons - Centered on mobile */}
              <div className="flex items-center justify-center gap-3 self-center sm:self-auto shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scroll(natureScrollRef, 'prev')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => scroll(natureScrollRef, 'next')}
                  className="p-3 sm:p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div
              ref={natureScrollRef}
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
        )}

        {/* ============================================================== */}
        {/* VIEW 3: LIVING CULTURE & HERITAGE                             */}
        {/* ============================================================== */}
        {experiencesHubTab === 'culture' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'أركان التراث والحياة الشعبية' : 'Heritage & Living Pillars'}
                </span>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-[#C99A42]/20 text-[#183B56]">
                  {cultureItems.length} {language === 'ar' ? 'محاور' : 'pillars'}
                </span>
              </div>

              {/* Right & Left Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll(cultureScrollRef, 'prev')}
                  className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'السابق (يمين)' : 'Previous'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => scroll(cultureScrollRef, 'next')}
                  className="p-2.5 rounded-xl border border-[#E8DFD0] bg-white hover:bg-stone-50 text-[#183B56] hover:text-[#C99A42] hover:border-[#C99A42] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                  aria-label={language === 'ar' ? 'التالي (شمال)' : 'Next'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div
              ref={cultureScrollRef}
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
                        href="#planner"
                        className="text-xs font-semibold text-[#183B56] hover:text-[#C99A42] transition-colors flex items-center gap-1.5"
                      >
                        <span>{language === 'ar' ? 'تضمين في جدول رحلتي' : 'Include in my schedule'}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8DFD0] animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col font-cairo"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-video w-full overflow-hidden bg-stone-100 shrink-0">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.title[language] || selectedExperience.title.ar}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 end-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-4 start-4 end-4 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#183B56]/90 text-[10px] uppercase font-bold tracking-wider backdrop-blur-xs text-[#C99A42]">
                  {selectedExperience.category}
                </span>
                <h3 className="text-xl font-bold font-cairo">
                  {selectedExperience.title[language] || selectedExperience.title.ar}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-stone-700 text-xs">
              
              {/* Meta details */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#F7F2E8] border border-[#E8DFD0]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C99A42] shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-500 block">{language === 'ar' ? 'المدة:' : 'Duration:'}</span>
                    <span className="font-bold text-[#183B56]">{selectedExperience.duration[language] || selectedExperience.duration.ar}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Sun className="w-4 h-4 text-[#C99A42] shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-500 block">{language === 'ar' ? 'أفضل موعد:' : 'Best Time:'}</span>
                    <span className="font-bold text-[#183B56]">{selectedExperience.bestTime[language] || selectedExperience.bestTime.ar}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-[#183B56] text-sm font-cairo">
                  {language === 'ar' ? 'نبذة وتفاصيل التجربة' : 'About the Experience'}
                </h4>
                <p className="text-stone-600 leading-relaxed text-xs">
                  {selectedExperience.shortDesc[language] || selectedExperience.shortDesc.ar}
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#183B56] text-sm font-cairo">
                  {language === 'ar' ? 'ما تشمله التجربة بالكامل:' : 'Included in Package:'}
                </h4>
                <div className="space-y-1.5">
                  {selectedExperience.included.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{inc[language] || inc.ar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Banner */}
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border-2 border-[#C99A42]/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Tag className="w-5 h-5 text-[#C99A42] shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-500 block uppercase font-bold">{language === 'ar' ? 'التكلفة المقدرة' : 'Estimated Rate'}</span>
                    <span className="text-sm font-bold text-[#183B56] font-cairo">
                      {selectedExperience.priceNote[language] || selectedExperience.priceNote.ar}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-5 border-t border-stone-100 bg-white flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-semibold cursor-pointer"
              >
                {language === 'ar' ? 'إغلاق' : 'Close'}
              </button>
              <a
                href="#planner"
                onClick={() => setSelectedExperience(null)}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#183B56] hover:bg-[#102738] text-white flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs text-center"
              >
                <Calendar className="w-4 h-4 text-[#C99A42]" />
                <span>{language === 'ar' ? 'إضافة إلى مخطط رحلتي الآن' : 'Add to My Trip Planner'}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
