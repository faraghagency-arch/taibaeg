import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { Treasure, BankLocation } from '../types';
import {
  Calendar,
  Clock,
  Compass,
  MapPin,
  Plus,
  Trash2,
  Copy,
  Printer,
  Download,
  FileText,
  Check,
  Sun,
  Moon,
  Sliders,
  Plane,
  Train,
  Ship,
  Shield,
  Phone,
  AlertCircle,
  Eye,
  ArrowRight,
  ArrowLeft,
  Navigation,
  ExternalLink
} from 'lucide-react';

interface ItineraryStep {
  id: string;
  time: string;
  title: Record<string, string>;
  location: Record<string, string>;
  desc: Record<string, string>;
  isCustom?: boolean;
}

export const PlanningHubSection: React.FC = () => {
  const {
    language,
    t,
    settings,
    treasures,
    customRoute,
    addToRoute,
    removeFromRoute,
    clearRoute,
    setActiveModal,
    planningHubTab,
    setPlanningHubTab
  } = useData();

  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const getLocalized = (obj: Record<string, string>) => {
    return obj[language] || obj.ar || obj.en || '';
  };

  // ==========================================
  // TAB 1: SMART TRIP PLANNER LOGIC
  // ==========================================
  const [selectedDays, setSelectedDays] = useState<number>(3);
  const [preferredStartTime, setPreferredStartTime] = useState<string>('06:00');
  const [preferredEndTime, setPreferredEndTime] = useState<string>('20:00');
  const [pace, setPace] = useState<'relaxed' | 'balanced' | 'active'>('balanced');
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newStopTitle, setNewStopTitle] = useState('');
  const [newStopLocation, setNewStopLocation] = useState('');
  const [newStopTimeStart, setNewStopTimeStart] = useState('09:00');
  const [newStopTimeEnd, setNewStopTimeEnd] = useState('11:00');
  const [newStopDesc, setNewStopDesc] = useState('');

  // Dynamic Multi-Pace Generator Function
  const generatePaceSchedule = (
    days: number,
    currentPace: 'relaxed' | 'balanced' | 'active',
    start: string,
    end: string
  ): ItineraryStep[] => {
    const list: ItineraryStep[] = [];

    if (currentPace === 'relaxed') {
      // RELAXED (هادئة ومريحة): 2-3 unhurried, spacious stops per day
      for (let d = 1; d <= days; d++) {
        if (d === 1) {
          list.push({
            id: `rel-1-1`,
            time: `اليوم الأول: 08:30 ص - 12:30 م`,
            title: { ar: 'مجمع معابد الكرنك العظيم بهدوء وتأمل', en: 'Gentle Exploration of Great Karnak' },
            location: { ar: 'البر الشرقي', en: 'East Bank' },
            desc: { ar: 'جولة غير متسرعة بين 134 عموداً في بهو الأعمدة والبحيرة المقدسة مع مرشد تراثي خاص.', en: 'Leisurely stroll through the 134 hypostyle columns and sacred lake with ample shade.' },
          });
          list.push({
            id: `rel-1-2`,
            time: `اليوم الأول: 01:00 م - 03:30 م`,
            title: { ar: 'غداء استجمامي ندي بفناء بيت المرسم التراثي', en: 'Lush Garden Lunch at Marsam Heritage House' },
            location: { ar: 'القرنة، البر الغربي', en: 'Qurna, West Bank' },
            desc: { ar: 'طواجن فخار عضوية من مزارع الأقصر مع شاي الحبق والنعناع الصعيدي تحت أشجار النخيل.', en: 'Organic Egyptian casseroles and slow mint tea under serene palms.' },
          });
          list.push({
            id: `rel-1-3`,
            time: `اليوم الأول: 05:30 م - 08:30 م`,
            title: { ar: 'إبحار فلوكة الغروب ومعبد الأقصر المضاء ليلاً', en: 'Twilight Felucca Sail & Luxor Temple by Night' },
            location: { ar: 'كورنيش النيل', en: 'Nile Corniche' },
            desc: { ar: 'إبحار شراعي هادئ مع انعكاس الشفق الذهبي وزيارة صرح رمسيس الثاني تحت أضواء المساء الساحرة.', en: 'Tranquil sunset sail and illuminated courtyard of Ramesses II at a peaceful pace.' },
          });
        } else if (d === 2) {
          list.push({
            id: `rel-2-1`,
            time: `اليوم الثاني: 08:30 ص - 12:30 م`,
            title: { ar: 'وادي الملوك (مقبرتان ملكيتان) ومدرجات حتشبسوت', en: 'Relaxed Royal Tombs & Hatshepsut Terraces' },
            location: { ar: 'البر الغربي', en: 'West Bank' },
            desc: { ar: 'زيارة مقبرتي رمسيس السادس وسيتي الأول بهدوء تام دون مزاحمة وتأمل النقوش الجدارية.', en: 'Unrushed contemplation of vibrant 3,000-year-old tomb ceilings and Deir el-Bahari cliffs.' },
          });
          list.push({
            id: `rel-2-2`,
            time: `اليوم الثاني: 04:30 م - 07:30 م`,
            title: { ar: 'عملاقا ممنون وقرية الحرفيين الألباستر بالقرنة', en: 'Colossi of Memnon & Qurna Alabaster Craft' },
            location: { ar: 'القرنة', en: 'Qurna' },
            desc: { ar: 'وقفة تصوير مهيبة أمام تمثالي أمنحتب الثالث وجلسة شاي مع صناع الألباستر اليدويين.', en: 'Sunset at the twin colossi and relaxing tea with multi-generational master stone carvers.' },
          });
        } else if (d === 3) {
          list.push({
            id: `rel-3-1`,
            time: `اليوم الثالث: 09:00 ص - 01:00 م`,
            title: { ar: 'معبد مدينة هابو الملون ومتحف الأقصر التراثي', en: 'Medinet Habu Intact Colors & Luxor Museum' },
            location: { ar: 'البر الغربي والشرقي', en: 'West Bank & Luxor Museum' },
            desc: { ar: 'استكشاف سقف رمسيس الثالث المحفوظ بألوانه الزرقاء الأصلية وتحف خبيئة الكرنك بالمتحف.', en: 'Marvel at intact ultramarine pigments followed by air-conditioned masterpieces at Luxor Museum.' },
          });
          list.push({
            id: `rel-3-2`,
            time: `اليوم الثالث: 04:30 م - 08:00 م`,
            title: { ar: 'رحلة بحرية لجزيرة الموز وجلسة شاي صعيدي بالسوق القديم', en: 'Banana Island River Cruise & Old Bazaar Tea' },
            location: { ar: 'النيل وسوق الأقصر التراثي', en: 'Nile River & Old Souk' },
            desc: { ar: 'قارب نيلي إلى بساتين جزيرة الموز وتناول الفاكهة الطازجة ثم جولة تسوق هادئة للتوابل.', en: 'Peaceful boat to lush plantations, tropical fruits, and relaxed spice and silver shopping.' },
          });
        } else {
          list.push({
            id: `rel-${d}-1`,
            time: `اليوم ${d}: ${start} - 01:00 م`,
            title: { ar: `استكشاف هادئ: معالم جوار الأقصر - اليوم ${d}`, en: `Relaxed Day ${d}: Scenic Luxor Surroundings` },
            location: { ar: 'الأقصر وجوارها', en: 'Luxor Environs' },
            desc: { ar: 'جولة صباحية مريحة تركز على موقع واحد رئيسي مع توفير فترات راحة ممتدة وتصوير هادئ.', en: 'Single-focus morning visit with extended shade breaks, photography, and gentle pace.' },
          });
          list.push({
            id: `rel-${d}-2`,
            time: `اليوم ${d}: 05:00 م - ${end}`,
            title: { ar: `استجمام نيلي وعشاء ريفي أصيل - اليوم ${d}`, en: `Sunset River Leisure & Fine Dinner - Day ${d}` },
            location: { ar: 'كورنيش النيل', en: 'Nile Riverside' },
            desc: { ar: 'عشاء فاخر بإطلالة على النيل وجلسة فلكلورية وموسيقى ربابة صعيدية.', en: 'Panoramic riverside dinner with authentic Rababa strings and peaceful night air.' },
          });
        }
      }
    } else if (currentPace === 'active') {
      // ACTIVE (نشطة ومكثفة): 5-6 energetic stops per day from dawn till night
      for (let d = 1; d <= days; d++) {
        if (d === 1) {
          list.push({
            id: `act-1-1`,
            time: `اليوم الأول: 04:30 ص - 07:00 ص`,
            title: { ar: 'شروق الشمس بالبالون الطائر فوق معابد طيبة', en: 'Sunrise Hot Air Balloon Over Theban Necropolis' },
            location: { ar: 'البر الغربي', en: 'West Bank' },
            desc: { ar: 'التحليق الفجري مع أول خيوط الشمس فوق وادي الملوك ومعبد حتشبسوت وجبل القرنة.', en: 'Aerial sunrise flight with panoramic views over Hatshepsut, royal peaks, and green Nile edge.' },
          });
          list.push({
            id: `act-1-2`,
            time: `اليوم الأول: 07:30 ص - 10:30 ص`,
            title: { ar: 'وادي الملوك: مقبرة توت عنخ آمون ورمسيس وسيتي', en: 'Kings Valley: Tutankhamun, Ramesses & Seti I' },
            location: { ar: 'وادي الملوك', en: 'Valley of the Kings' },
            desc: { ar: 'استكشاف مكثف لأعظم المقابر الملكية المنحوتة في الصخر بعمق 100 متر.', en: 'Intensive exploration of three premier royal tombs with intricate underworld texts.' },
          });
          list.push({
            id: `act-1-3`,
            time: `اليوم الأول: 11:00 ص - 01:00 م`,
            title: { ar: 'معبد حتشبسوت الجنائزي ومعبد مدينة هابو لرمسيس الثالث', en: 'Hatshepsut Colonnade & Medinet Habu Battle Reliefs' },
            location: { ar: 'الدير البحري وهابو', en: 'Deir el-Bahari & Habu' },
            desc: { ar: 'مدرجات الدير البحري الحجرية ونقوش معارك شعوب البحر وقصر رمسيس الثالث المحصن.', en: 'Architectural terraces of Hatshepsut and deep battle hieroglyphs of Ramesses III.' },
          });
          list.push({
            id: `act-1-4`,
            time: `اليوم الأول: 01:30 م - 02:45 م`,
            title: { ar: 'غداء صعيدي سريع بمطعم سوفرا أو المرسم', en: 'Authentic Fast Feast at Sofra / Marsam' },
            location: { ar: 'القرنة أو وسط المدينة', en: 'Downtown or Qurna' },
            desc: { ar: 'تذوق الملوخية الصعيدية والكباب والكشري الفاخر لمد الجسم بالطاقة.', en: 'High-energy authentic Upper Egyptian banquet for the active day ahead.' },
          });
          list.push({
            id: `act-1-5`,
            time: `اليوم الأول: 03:30 م - 06:00 م`,
            title: { ar: 'مجمع معابد الكرنك وطريق الكباش (2.7 كم)', en: 'Full Karnak Circuit & Avenue of Sphinxes Hike' },
            location: { ar: 'البر الشرقي', en: 'East Bank' },
            desc: { ar: 'بهو الأعمدة، مسلة حتشبسوت، معبد خونسو، والسير على طريق الكباش الأثري.', en: 'Covering the 134 columns, Akh-Menu, Sacred Lake, and hiking the Sphinx Avenue.' },
          });
          list.push({
            id: `act-1-6`,
            time: `اليوم الأول: 07:00 م - 09:30 م`,
            title: { ar: 'معبد الأقصر ليلاً وعرض الصوت والضوء الأسطوري', en: 'Luxor Temple by Night & Sound & Light Spectacle' },
            location: { ar: 'معبد الأقصر والكرنك', en: 'Luxor & Karnak Temples' },
            desc: { ar: 'مشاهدة تماثيل رمسيس الثاني تحت الإضاءة الملونة وختام اليوم بعرض الصوت والضوء.', en: 'Dramatic night illuminations of temple pylons followed by the voice of pharaohs.' },
          });
        } else if (d === 2) {
          list.push({
            id: `act-2-1`,
            time: `اليوم الثاني: 07:00 ص - 09:30 ص`,
            title: { ar: 'وادي الملكات: المقبرة الأسطورية للملكة نفرتاري', en: 'Queens Valley: Legendary Tomb of Queen Nefertari' },
            location: { ar: 'وادي الملكات', en: 'Valley of the Queens' },
            desc: { ar: 'دخول مقبرة QV66 جوهرة الفن المصري القديم مع جداريات الآلهة حتحور وإيزيس.', en: 'Exclusive entry to QV66, considered the Sistine Chapel of the ancient world.' },
          });
          list.push({
            id: `act-2-2`,
            time: `اليوم الثاني: 10:00 ص - 12:30 م`,
            title: { ar: 'قرية دير المدينة (عمال المقابر) ومقابر النبلاء بالقرنة', en: 'Deir el-Medina Artisans & Tombs of the Nobles' },
            location: { ar: 'البر الغربي', en: 'West Bank' },
            desc: { ar: 'مقبرة سن-نجم ومقابر رخميرع ونخت ومشاهد الحياة اليومية والزراعة والصيد.', en: 'Vivid everyday life scenes, ancient banquet banquets, and artisans homes.' },
          });
          list.push({
            id: `act-2-3`,
            time: `اليوم الثاني: 01:00 م - 03:00 م`,
            title: { ar: 'معبد الرمسيوم وتمثال رمسيس الساقط ومصانع الألباستر', en: 'Ramesseum Fallen Colossus & Master Stonework' },
            location: { ar: 'القرنة', en: 'Qurna' },
            desc: { ar: 'معبد رمسيس الثاني الجنائزي الملهم لقصيدة شيللي أوزيماندياس ونحت الحجر اليدوي.', en: 'Shelley’s Ozymandias colossus and active stone sculpture demonstration.' },
          });
          list.push({
            id: `act-2-4`,
            time: `اليوم الثاني: 04:00 م - 06:30 م`,
            title: { ar: 'متحف الأقصر للفن القديم ومتحف التحنيط الفرعوني', en: 'Luxor Museum & Mummification Museum' },
            location: { ar: 'كورنيش النيل', en: 'East Bank Corniche' },
            desc: { ar: 'تماثيل خبيئة الكرنك، مومياء أحمس الأول، وأدوات الجراحة والتحنيط النادرة.', en: 'Pristine polished statues, royal mummies, and ancient surgical embalming instruments.' },
          });
          list.push({
            id: `act-2-5`,
            time: `اليوم الثاني: 07:30 م - 10:00 م`,
            title: { ar: 'سفاري مسائي بعربات الحنطور وسوق التوابل القديم', en: 'Hantour Carriage Safari & Night Spice Bazaar' },
            location: { ar: 'وسط البلد وخان طيبة', en: 'Old Souk & Downtown' },
            desc: { ar: 'جولة سريعة بالحناطير لكورنيش النيل وشراء الزعفران والكركديه والجلابيات التراثية.', en: 'Horse carriage ride along the Nile and vibrant market exploration for spices and crafts.' },
          });
        } else {
          list.push({
            id: `act-${d}-1`,
            time: `اليوم ${d}: 06:30 ص - 10:30 ص`,
            title: { ar: `رحلة مكثفة: معبد خنوم بإسنا ومعبد الطود - اليوم ${d}`, en: `Active Expedition: Esna Khnum & Tod - Day ${d}` },
            location: { ar: 'جنوب وشمال الأقصر', en: 'Esna & Tod' },
            desc: { ar: 'التحرك لمعبد إسنا المغمور ذي النقوش الفلكية الملونة ومعبد الإله منتو بالطود.', en: 'Early drive to Esna’s restored zodiac ceiling and Montu sanctuary at Tod.' },
          });
          list.push({
            id: `act-${d}-2`,
            time: `اليوم ${d}: 11:30 ص - 03:00 م`,
            title: { ar: `مغامرة وادي الملوك الجبلية ومسار الهايكينج التراثي`, en: `Mountain Trail Hiking Across Theban Ridge` },
            location: { ar: 'هضبة القرنة', en: 'Theban Peaks' },
            desc: { ar: 'المشي على الدرب الجبلي القديم الرابط بين وادي الملوك والدير البحري بإطلالة بانورامية.', en: 'Guided ridge hike over the Valley of the Kings looking down at Hatshepsut.' },
          });
          list.push({
            id: `act-${d}-3`,
            time: `اليوم ${d}: 05:00 م - ${end}`,
            title: { ar: `إبحار نيل سريع بالكاياك أو اللنش وعشاء نوبي - اليوم ${d}`, en: `Sunset Kayaking & Nubian Island Feast` },
            location: { ar: 'جزر النيل', en: 'Nile Islands' },
            desc: { ar: 'تجديف أو إبحار خاص مع عشاء صعيدي نوبي على ضفاف النيل.', en: 'Sunset active river exploration followed by riverside feast under stars.' },
          });
        }
      }
    } else {
      // BALANCED (متوازنة): 3-4 comprehensive stops per day
      for (let d = 1; d <= days; d++) {
        if (d === 1) {
          list.push({
            id: `bal-1-1`,
            time: `اليوم الأول: 08:00 ص - 12:30 م`,
            title: { ar: 'عظمة البر الشرقي: معابد الكرنك وطريق الكباش', en: 'Karnak Temple Complex & Sphinx Avenue' },
            location: { ar: 'البر الشرقي', en: 'East Bank' },
            desc: { ar: 'استكشاف بهو الأعمدة والمسلات الملكية وبحيرة الكهنة مع المرور بطريق الكباش الأثري.', en: 'Comprehensive tour of Karnak Hypostyle Hall, Hatshepsut Obelisk, and Sacred Lake.' },
          });
          list.push({
            id: `bal-1-2`,
            time: `اليوم الأول: 01:00 م - 03:00 م`,
            title: { ar: 'استراحة غداء صعيدي تراثي وإطلالة نيلية', en: 'Authentic Luxor Lunch with River View' },
            location: { ar: 'كورنيش النيل', en: 'Nile Corniche' },
            desc: { ar: 'تناول الأطباق المصرية التقليدية وشاي بالنعناع مع نسيم النيل العليل.', en: 'Fresh Egyptian dishes and mint tea with panoramic river views.' },
          });
          list.push({
            id: `bal-1-3`,
            time: `اليوم الأول: 05:00 م - 08:30 م`,
            title: { ar: 'متحف الأقصر ومعبد الأقصر المضاء ليلاً', en: 'Luxor Museum & Illuminated Night Temple' },
            location: { ar: 'البر الشرقي', en: 'East Bank' },
            desc: { ar: 'مشاهدة خبيئة التماثيل بمتحف الأقصر والتجول في صرح رمسيس الثاني تحت أضواء الليل.', en: 'Sculptures at Luxor Museum followed by romantic evening lights at Luxor Temple.' },
          });
        } else if (d === 2) {
          list.push({
            id: `bal-2-1`,
            time: `اليوم الثاني: 05:00 ص - 08:00 ص`,
            title: { ar: 'شروق الشمس بالبالون الطائر فوق البر الغربي', en: 'Sunrise Hot Air Balloon Flight' },
            location: { ar: 'البر الغربي', en: 'West Bank' },
            desc: { ar: 'مشاهدة معالم طيبة من الجو مع شروق الشمس والتقاط أروع الصور البانورامية.', en: 'Aerial hot air balloon ride catching the golden morning light over Hatshepsut.' },
          });
          list.push({
            id: `bal-2-2`,
            time: `اليوم الثاني: 08:30 ص - 12:30 م`,
            title: { ar: 'وادي الملوك ومعبد حتشبسوت وعملاقا ممنون', en: 'Valley of the Kings, Hatshepsut & Memnon' },
            location: { ar: 'البر الغربي', en: 'West Bank' },
            desc: { ar: 'زيارة 3 مقابر ملكية في وادي الملوك والوقوف أمام مدرجات الدير البحري وتمثالي ممنون.', en: 'Tour 3 royal tombs, Hatshepsut’s cliffside temple, and the colossal Memnon statues.' },
          });
          list.push({
            id: `bal-2-3`,
            time: `اليوم الثاني: 04:30 م - 07:30 م`,
            title: { ar: 'إبحار فلوكة الغروب وزيارة جزيرة الموز التراثية', en: 'Sunset Felucca Sail to Banana Island' },
            location: { ar: 'النيل', en: 'Nile River' },
            desc: { ar: 'إبحار شراعي على مياه النيل الهادئة وتناول الشاي الصعيدي والفاكهة الطازجة بالجزيرة.', en: 'Traditional sailboat navigation to banana groves with fresh tropical fruit and tea.' },
          });
        } else if (d === 3) {
          list.push({
            id: `bal-3-1`,
            time: `اليوم الثالث: 08:30 ص - 12:30 م`,
            title: { ar: 'معبد مدينة هابو ووادي الملكات (نفرتاري)', en: 'Medinet Habu & Valley of the Queens' },
            location: { ar: 'البر الغربي', en: 'West Bank' },
            desc: { ar: 'ألوان رمسيس الثالث الزاهية ومقابر الملكات والأمراء الفرعونيين الخالدين.', en: 'Vivid battle reliefs of Ramesses III and royal queens’ tomb frescoes.' },
          });
          list.push({
            id: `bal-3-2`,
            time: `اليوم الثالث: 01:00 م - 03:00 م`,
            title: { ar: 'قرية دير المدينة للحرفيين وورش الألباستر بالقرنة', en: 'Deir el-Medina Artisans & Alabaster Carving' },
            location: { ar: 'القرنة', en: 'Qurna' },
            desc: { ar: 'منازل ومقابر بناة الأهرامات والمقابر الملكية ورؤية نحت الحجر باليد.', en: 'Explore ancient tomb builders village TT1 and live stone carving workshops.' },
          });
          list.push({
            id: `bal-3-3`,
            time: `اليوم الثالث: 05:00 م - 09:00 م`,
            title: { ar: 'سوق الأقصر التراثي وعشاء صعيدي أصيل', en: 'Old Luxor Spice Souk & Traditional Dinner' },
            location: { ar: 'خان طيبة', en: 'Old Souk' },
            desc: { ar: 'شراء التوابل والفضة المصرية والبرديات الأثرية وختام الرحلة بعشاء صعيدي فاخر.', en: 'Authentic bazaar shopping for spices, hibiscus, and papyrus, ending with farewell dinner.' },
          });
        } else {
          list.push({
            id: `bal-${d}-1`,
            time: `اليوم ${d}: ${start} - 01:00 م`,
            title: { ar: `معالم جوار الأقصر: معبد إسنا ومقابر النبلاء - اليوم ${d}`, en: `Day ${d}: Esna Temple & Nobles Tombs` },
            location: { ar: 'جنوب الأقصر والبر الغربي', en: 'Esna & West Bank' },
            desc: { ar: 'برنامج مخصص لليوم ${d} يجمع بين المعابد المجاورة ونقوش الحياة اليومية للنبلاء.', en: 'Exploration of surrounding historical sanctuaries with balanced touring.' },
          });
          list.push({
            id: `bal-${d}-2`,
            time: `اليوم ${d}: 04:30 م - ${end}`,
            title: { ar: `إبحار الدهبية النيلية والتصوير وقت الغسق - اليوم ${d}`, en: `Dahabiya River Cruise & Golden Hour - Day ${d}` },
            location: { ar: 'كورنيش النيل', en: 'Nile Corniche' },
            desc: { ar: 'وقت حر للتصوير وشراء الهدايا التذكارية وعشاء رومانسي على ضفاف النيل.', en: 'Sunset photography, souvenir shopping, and fine dining by the Nile.' },
          });
        }
      }
    }

    return list;
  };

  const [customSteps, setCustomSteps] = useState<ItineraryStep[]>(() => {
    return generatePaceSchedule(3, 'balanced', '06:00', '20:00');
  });

  // Re-generate schedule dynamically when days or pace change
  const handlePaceChange = (newPace: 'relaxed' | 'balanced' | 'active') => {
    setPace(newPace);
    // Keep user's custom added stops, regenerate the base schedule
    const customStops = customSteps.filter((s) => s.isCustom);
    const newBase = generatePaceSchedule(selectedDays, newPace, preferredStartTime, preferredEndTime);
    setCustomSteps([...newBase, ...customStops]);
  };

  const handleDaysChange = (newDays: number) => {
    const validDays = Math.max(1, Math.min(10, newDays));
    setSelectedDays(validDays);
    const customStops = customSteps.filter((s) => s.isCustom);
    const newBase = generatePaceSchedule(validDays, pace, preferredStartTime, preferredEndTime);
    setCustomSteps([...newBase, ...customStops]);
  };

  const handleRegenerate = () => {
    const customStops = customSteps.filter((s) => s.isCustom);
    const newBase = generatePaceSchedule(selectedDays, pace, preferredStartTime, preferredEndTime);
    setCustomSteps([...newBase, ...customStops]);
  };

  const handleRemoveStep = (id: string) => {
    setCustomSteps((prev) => prev.filter((s) => s.id !== id));
  };

  const handleAddCustomStop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStopTitle.trim()) return;

    const newStep: ItineraryStep = {
      id: 'custom-' + Date.now(),
      time: `${newStopTimeStart} - ${newStopTimeEnd}`,
      title: { ar: newStopTitle, en: newStopTitle },
      location: { ar: newStopLocation || 'الأقصر', en: newStopLocation || 'Luxor' },
      desc: { ar: newStopDesc || 'محطة مخصصة تم جدولتها حسب توقيتك الخاص', en: newStopDesc || 'Custom stop added to your personalized schedule' },
      isCustom: true,
    };

    setCustomSteps((prev) => [...prev, newStep]);
    setNewStopTitle('');
    setNewStopLocation('');
    setNewStopDesc('');
    setShowAddModal(false);
  };

  // Instant Itinerary Download Function (TXT file with full styling and info)
  const handleDownloadItinerary = () => {
    const paceLabel =
      pace === 'relaxed'
        ? (language === 'ar' ? 'وتيرة هادئة ومريحة (Relaxed)' : 'Relaxed Pace')
        : pace === 'active'
        ? (language === 'ar' ? 'وتيرة نشطة ومكثفة (Active)' : 'Active Pace')
        : (language === 'ar' ? 'وتيرة متوازنة (Balanced)' : 'Balanced Pace');

    let content = `========================================================================\n`;
    content += `🏛️ منصة طيبة | TAIBA - جدول رحلة الأقصر السياحي المخصص\n`;
    content += `Luxor Tailored Travel Itinerary\n`;
    content += `الشعار: «${settings.slogan.ar}»\n`;
    content += `========================================================================\n\n`;
    content += `📅 عدد الأيام: ${selectedDays} ${selectedDays === 1 ? 'يوم' : selectedDays === 2 ? 'يومان' : 'أيام'}\n`;
    content += `⏱️ ساعات الجولة اليومية المفضلة: من ${preferredStartTime} إلى ${preferredEndTime}\n`;
    content += `⚡ وتيرة الحركة والراحة: ${paceLabel}\n`;
    content += `📍 إجمالي المحطات المبرمجة: ${customSteps.length} محطات\n`;
    content += `🗓️ تاريخ إنشاء الجدول: ${new Date().toLocaleDateString('ar-EG', { dateStyle: 'full' })}\n\n`;
    content += `------------------------------------------------------------------------\n`;
    content += `📋 تفاصيل محطات وأنشطة الرحلة المبرمجة:\n`;
    content += `------------------------------------------------------------------------\n\n`;

    customSteps.forEach((step, idx) => {
      content += `[ المحطة #${idx + 1} ]\n`;
      content += `• التوقيت: ${step.time}\n`;
      content += `• العنوان: ${getLocalized(step.title)}\n`;
      content += `• الموقع: ${getLocalized(step.location)}\n`;
      content += `• التفاصيل: ${getLocalized(step.desc)}\n`;
      if (step.isCustom) {
        content += `• ملاحظة: (محطة خاصة أضافها العميل)\n`;
      }
      content += `\n`;
    });

    content += `------------------------------------------------------------------------\n`;
    content += `📞 إرشادات وأرقام الطوارئ والدعم أثناء رحلتك في الأقصر:\n`;
    content += `------------------------------------------------------------------------\n`;
    content += `• شرطة السياحة والآثار (طوارئ 24 ساعة): ${settings.emergencyTouristPolice}\n`;
    content += `• الهاتف الرسمي لمنصة طيبة: ${settings.contactPhone}\n`;
    content += `• معدية الأهالي النيلية: تعمل 24 ساعة بدون انقطاع برسم رمزي (10 جنيهات)\n`;
    content += `• مواعيد شباك تذاكر الكرنك: يومياً 06:00 ص - 05:30 م\n`;
    content += `• مواعيد معبد الأقصر ليلاً: يومياً 06:00 ص - 10:00 م (مضاء بالكامل)\n`;
    content += `• رحلات البالون الطائر: تنطلق فجراً وتعتمد على تصريح سلطة الطيران المدني\n`;
    content += `• التصوير بالمحمول مسموح ومجاني في المعابد (يمنع استخدام الفلاش بالمقابر)\n\n`;
    content += `========================================================================\n`;
    content += `طيبة ترحب بكم وتتمنى لكم رحلة ساحرة عبر آلاف السنين في أعظم متحف مفتوح بالعالم!\n`;
    content += `========================================================================\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `جدول_رحلة_طيبة_الاقصر_${selectedDays}أيام_${pace}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleCopy = () => {
    const text = customSteps
      .map((item) => `${item.time} - ${getLocalized(item.title)}\n${getLocalized(item.location)}\n${getLocalized(item.desc)}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ==========================================
  // TAB 2: INTERACTIVE MAP LOGIC
  // ==========================================
  const [selectedBank, setSelectedBank] = useState<string>('all');
  const [activeTreasure, setActiveTreasure] = useState<Treasure | null>(treasures[0] || null);

  const filteredMapTreasures = useMemo(() => {
    if (selectedBank === 'all') return treasures;
    return treasures.filter((item) => item.bank === selectedBank);
  }, [treasures, selectedBank]);

  const routeItems = useMemo(() => {
    return customRoute
      .map((id) => treasures.find((t) => t.id === id))
      .filter((t): t is Treasure => !!t);
  }, [customRoute, treasures]);

  const totalDistanceKm = useMemo(() => {
    if (routeItems.length <= 1) return 0;
    let total = 0;
    for (let i = 0; i < routeItems.length - 1; i++) {
      const a = routeItems[i];
      const b = routeItems[i + 1];
      const dist = Math.hypot(a.coordinates.lat - b.coordinates.lat, a.coordinates.lng - b.coordinates.lng) * 111;
      total += dist;
    }
    return Math.round(total * 10) / 10;
  }, [routeItems]);

  return (
    <section id="planner" className="py-20 bg-white border-b border-[#E8DFD0] relative">
      <span id="map" className="sr-only -top-24 absolute" />
      <span id="guide" className="sr-only -top-24 absolute" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <Calendar className="w-3.5 h-3.5 text-[#C99A42]" />
            <span>
              {planningHubTab === 'planner'
                ? t('plan_trip')
                : planningHubTab === 'map'
                ? t('map')
                : t('guide')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {planningHubTab === 'planner'
              ? (settings.plannerTitle && (settings.plannerTitle[language] || settings.plannerTitle.ar)) || (language === 'ar' ? 'مخطط الرحلات الذكي: حدد أوقاتك وجدولك بحرية تامة' : 'Smart Trip Planner: Customize Your Times & Schedule')
              : planningHubTab === 'map'
              ? (settings.mapTitle && (settings.mapTitle[language] || settings.mapTitle.ar)) || (language === 'ar' ? 'خريطة الأقصر التفاعلية وتتبع المسارات' : 'Interactive Luxor Map & Route Planner')
              : (settings.guideTitle && (settings.guideTitle[language] || settings.guideTitle.ar)) || (language === 'ar' ? 'دليلك السياحي العملي: كل ما تحتاجه لرحلتك' : 'Practical Travel Guide & Essential Advice')}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {planningHubTab === 'planner'
              ? (settings.plannerDesc && (settings.plannerDesc[language] || settings.plannerDesc.ar)) ||
                (language === 'ar'
                  ? 'تحكم كامل في مواعيدك وساعات اليوم؛ حدد عدد الأيام وساعات البداية والنهاية، وأضف محطاتك الخاصة بكل حرية.'
                  : 'Full freedom over daily start/finish hours, duration, and personal custom stops.')
              : planningHubTab === 'map'
              ? (settings.mapSubtitle && (settings.mapSubtitle[language] || settings.mapSubtitle.ar)) ||
                (language === 'ar'
                  ? 'استكشف المواقع الجغرافية الدقيقة لمعابد ومقابر البرين الشرقي والغربي وتتبع مسار رحلتك وحساب المسافات.'
                  : 'Navigate verified locations of temples and tombs across the Nile and trace your custom itinerary distance.')
              : (settings.guideDesc && (settings.guideDesc[language] || settings.guideDesc.ar)) ||
                (language === 'ar'
                  ? 'معلومات موثوقة حول كيفية الوصول للأقصر، والمعدية النيلية، وقواعد الزيارة والتصوير، وطوارئ شرطة السياحة 126.'
                  : 'Verified transit advice, Nile public ferries, photography rules, and tourist police emergency hotline 126.')}
          </p>

          {/* Segmented Control Buttons - Centered */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#F7F2E8] rounded-2xl border border-[#E8DFD0] text-xs font-semibold shadow-xs">
              
              <button
                type="button"
                onClick={() => setPlanningHubTab('planner')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  planningHubTab === 'planner'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-white/60'
                }`}
              >
                <Calendar className="w-4 h-4 text-[#C99A42]" />
                <span>{t('plan_trip')}</span>
              </button>

              <button
                type="button"
                onClick={() => setPlanningHubTab('map')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  planningHubTab === 'map'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-white/60'
                }`}
              >
                <Compass className="w-4 h-4 text-[#C99A42]" />
                <span>{t('map')}</span>
              </button>

              <button
                type="button"
                onClick={() => setPlanningHubTab('guide')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                  planningHubTab === 'guide'
                    ? 'bg-[#183B56] text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-[#183B56] hover:bg-white/60'
                }`}
              >
                <Shield className="w-4 h-4 text-[#C99A42]" />
                <span>{t('guide')}</span>
              </button>

            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1 CONTENT: SMART PLANNER WITH FREE TIME CUSTOMIZATION       */}
        {/* ============================================================== */}
        {planningHubTab === 'planner' && (
          <div className="space-y-10">
            {/* Control Panel */}
            <div className="bg-[#F7F2E8] p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] shadow-xs space-y-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#E8DFD0] text-[#183B56]">
                <Sliders className="w-5 h-5 text-[#C99A42]" />
                <h3 className="text-base font-bold font-cairo">
                  {language === 'ar' ? 'تخصيص وقت وجدول الزيارة للعميل' : 'Client Timing & Preferences Customization'}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Custom Days Stepper */}
                <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#E8DFD0]">
                  <label className="text-xs font-bold text-[#183B56] flex items-center justify-between">
                    <span>{language === 'ar' ? 'عدد أيام الزيارة:' : 'Duration (Days):'}</span>
                    <span className="text-[#C99A42] font-cairo text-sm font-bold">
                      {selectedDays} {language === 'ar' ? (selectedDays === 1 ? 'يوم' : selectedDays === 2 ? 'يومان' : 'أيام') : 'Days'}
                    </span>
                  </label>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => handleDaysChange(selectedDays - 1)}
                      disabled={selectedDays <= 1}
                      className="w-10 h-10 rounded-xl bg-[#F7F2E8] hover:bg-[#EAE2D2] text-[#183B56] font-bold text-lg flex items-center justify-center disabled:opacity-40 transition-colors cursor-pointer"
                      aria-label="Decrease days"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={selectedDays}
                      onChange={(e) => handleDaysChange(parseInt(e.target.value) || 1)}
                      className="flex-1 accent-[#C99A42] cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => handleDaysChange(selectedDays + 1)}
                      disabled={selectedDays >= 10}
                      className="w-10 h-10 rounded-xl bg-[#F7F2E8] hover:bg-[#EAE2D2] text-[#183B56] font-bold text-lg flex items-center justify-center disabled:opacity-40 transition-colors cursor-pointer"
                      aria-label="Increase days"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1 font-cairo">
                    <span>1 {language === 'ar' ? 'يوم' : 'Day'}</span>
                    <span>3 {language === 'ar' ? 'أيام (موصى بها)' : 'Days (Rec.)'}</span>
                    <span>10 {language === 'ar' ? 'أيام' : 'Days'}</span>
                  </div>
                </div>

                {/* 2. Daily Preferred Window */}
                <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#E8DFD0]">
                  <label className="text-xs font-bold text-[#183B56] block">
                    {language === 'ar' ? 'ساعات يومك المفضلة:' : 'Preferred Daily Time Window:'}
                  </label>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <span className="text-[10px] text-stone-500 flex items-center gap-1 mb-1">
                        <Sun className="w-3 h-3 text-[#C99A42]" />
                        <span>{language === 'ar' ? 'بداية الجولة:' : 'Start:'}</span>
                      </span>
                      <select
                        value={preferredStartTime}
                        onChange={(e) => {
                          setPreferredStartTime(e.target.value);
                          handleRegenerate();
                        }}
                        className="w-full p-2 bg-[#F7F2E8] border border-[#E8DFD0] rounded-xl text-xs font-semibold text-[#183B56] focus:outline-hidden font-cairo"
                      >
                        <option value="04:30">04:30 ص ({language === 'ar' ? 'فجر البالون' : 'Dawn'})</option>
                        <option value="06:00">06:00 ص ({language === 'ar' ? 'شروق الشمس' : 'Sunrise'})</option>
                        <option value="08:00">08:00 ص ({language === 'ar' ? 'صباحي مبكر' : 'Early'})</option>
                        <option value="09:30">09:30 ص ({language === 'ar' ? 'صباحي مريح' : 'Relaxed'})</option>
                      </select>
                    </div>

                    <div>
                      <span className="text-[10px] text-stone-500 flex items-center gap-1 mb-1">
                        <Moon className="w-3 h-3 text-[#183B56]" />
                        <span>{language === 'ar' ? 'نهاية الجولة:' : 'Finish:'}</span>
                      </span>
                      <select
                        value={preferredEndTime}
                        onChange={(e) => {
                          setPreferredEndTime(e.target.value);
                          handleRegenerate();
                        }}
                        className="w-full p-2 bg-[#F7F2E8] border border-[#E8DFD0] rounded-xl text-xs font-semibold text-[#183B56] focus:outline-hidden font-cairo"
                      >
                        <option value="17:00">05:00 م ({language === 'ar' ? 'عند الغروب' : 'Sunset'})</option>
                        <option value="19:30">07:30 م ({language === 'ar' ? 'مسائي' : 'Evening'})</option>
                        <option value="21:30">09:30 م ({language === 'ar' ? 'معبد الأقصر ليلاً' : 'Night'})</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Pace & Add Custom Stop */}
                <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#E8DFD0]">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#183B56] block">
                      {language === 'ar' ? 'وتيرة الحركة والراحة:' : 'Daily Pace:'}
                    </label>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      {language === 'ar' ? 'تحديث فوري للجدول' : 'Dynamic Auto-rebuild'}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 pt-1 text-xs font-cairo">
                    {[
                      { id: 'relaxed', label: language === 'ar' ? 'مريح' : 'Relaxed', desc: language === 'ar' ? 'استجمام وراحة' : '2 stops/day' },
                      { id: 'balanced', label: language === 'ar' ? 'متوازن' : 'Balanced', desc: language === 'ar' ? 'شامل ومريح' : '3-4 stops/day' },
                      { id: 'active', label: language === 'ar' ? 'مكثف' : 'Active', desc: language === 'ar' ? 'جولات حيوية' : '5-6 stops/day' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handlePaceChange(p.id as any)}
                        className={`py-2 px-1 rounded-xl text-center border transition-all cursor-pointer ${
                          pace === p.id
                            ? 'bg-[#183B56] text-white border-[#183B56] font-bold shadow-md scale-102'
                            : 'bg-[#F7F2E8] text-stone-600 border-transparent hover:border-[#C99A42]'
                        }`}
                      >
                        <span className="block text-xs font-bold">{p.label}</span>
                        <span className="text-[10px] opacity-80 block">{p.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(true)}
                      className="w-full py-2 px-3 rounded-xl bg-[#C99A42] hover:bg-[#b08432] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer font-cairo"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? '➕ أضف محطة مخصصة بوقتك' : '➕ Add Custom Time Stop'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline View */}
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-[#C99A42]" />
                  <h3 className="text-xl font-bold text-[#183B56] font-cairo">
                    {language === 'ar'
                      ? `جدول رحلتك المخصص (${selectedDays} ${selectedDays === 1 ? 'يوم' : selectedDays === 2 ? 'يومان' : 'أيام'} • ${customSteps.length} محطات مبرمجة)`
                      : `Your Custom Itinerary (${selectedDays} Days • ${customSteps.length} Scheduled Stops)`}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Action 1: Download Itinerary (TXT with full custom itinerary and emergency guidance) */}
                  <button
                    type="button"
                    onClick={handleDownloadItinerary}
                    className="px-3.5 py-2 rounded-xl bg-[#183B56] hover:bg-[#102738] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-xs hover:shadow-md cursor-pointer font-cairo"
                    title={language === 'ar' ? 'تنزيل جدول الرحلة الكامل كملف نصي منسق على جهازك' : 'Download Itinerary File'}
                  >
                    <Download className="w-3.5 h-3.5 text-[#C99A42]" />
                    <span>
                      {downloadSuccess
                        ? (language === 'ar' ? 'تم تنزيل الجدول ✓' : 'Downloaded ✓')
                        : (language === 'ar' ? 'تنزيل جدول الرحلة' : 'Download Itinerary')}
                    </span>
                  </button>

                  {/* Action 2: Copy Plan */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-3 py-2 rounded-xl border border-[#E8DFD0] bg-white hover:bg-[#F7F2E8] text-xs font-semibold text-[#183B56] flex items-center gap-1.5 transition-colors cursor-pointer font-cairo"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#C99A42]" />}
                    <span>{copied ? (language === 'ar' ? 'تم النسخ ✓' : 'Copied') : (language === 'ar' ? 'نسخ الخطة' : 'Copy Plan')}</span>
                  </button>

                  {/* Action 3: Print / PDF */}
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-3 py-2 rounded-xl border border-[#E8DFD0] bg-white hover:bg-[#F7F2E8] text-xs font-semibold text-[#183B56] flex items-center gap-1.5 transition-colors cursor-pointer font-cairo"
                    title={language === 'ar' ? 'طباعة جدول الرحلة أو حفظه كـ PDF' : 'Print / Save as PDF'}
                  >
                    <Printer className="w-3.5 h-3.5 text-[#C99A42]" />
                    <span>{language === 'ar' ? 'طباعة / PDF' : 'Print / PDF'}</span>
                  </button>

                  {/* Action 4: Add Stop */}
                  <button
                    type="button"
                    onClick={() => setShowAddModal(true)}
                    className="px-3 py-2 rounded-xl bg-[#C99A42]/15 text-[#C99A42] hover:bg-[#C99A42] hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer font-cairo"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'إضافة محطة' : 'Add Stop'}</span>
                  </button>
                </div>
              </div>

              {/* Timeline Cards */}
              <div className="space-y-4">
                {customSteps.map((step, idx) => (
                  <div
                    key={step.id || idx}
                    className={`p-5 sm:p-6 rounded-2xl bg-white border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs ${
                      step.isCustom
                        ? 'border-[#C99A42] bg-[#FAF8F3]'
                        : 'border-[#E8DFD0] hover:border-[#C99A42]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F7F2E8] border border-[#E8DFD0] text-[#183B56] font-bold text-sm flex items-center justify-center shrink-0 font-cairo">
                        {idx + 1}
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#C99A42]">
                          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#183B56] text-white font-cairo font-bold text-[11px]">
                            <Clock className="w-3 h-3 text-[#C99A42]" />
                            <span>{step.time}</span>
                          </div>
                          <span aria-hidden="true" className="text-stone-300">·</span>
                          <div className="flex items-center gap-1 text-stone-600">
                            <MapPin className="w-3.5 h-3.5 text-[#C99A42]" />
                            <span>{getLocalized(step.location)}</span>
                          </div>
                          {step.isCustom && (
                            <span className="px-2 py-0.5 rounded-md bg-[#C99A42]/15 text-[#C99A42] text-[10px] font-bold">
                              {language === 'ar' ? 'محطة مخصصة لك' : 'Custom Stop'}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-bold text-[#183B56] font-cairo">
                          {getLocalized(step.title)}
                        </h4>

                        <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                          {getLocalized(step.desc)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                      <button
                        type="button"
                        onClick={() => setPlanningHubTab('map')}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#183B56] hover:text-[#C99A42] bg-[#F7F2E8] hover:bg-[#EAE2D2] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>{language === 'ar' ? 'على الخريطة' : 'On map'}</span>
                        <span>→</span>
                      </button>

                      {customSteps.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveStep(step.id)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title={language === 'ar' ? 'حذف هذه المحطة' : 'Remove this stop'}
                          aria-label="Remove stop"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Stop Modal */}
            {showAddModal && (
              <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD0]">
                  <div className="p-6 bg-[#183B56] text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#C99A42]" />
                      <h3 className="text-base font-bold font-cairo">
                        {language === 'ar' ? 'إضافة محطة أو نشاط بتوقيتك الخاص' : 'Add Custom Stop With Your Time'}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="text-stone-300 hover:text-white text-lg font-bold p-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleAddCustomStop} className="p-6 space-y-4 text-xs">
                    <div>
                      <label className="font-bold text-[#183B56] block mb-1">
                        {language === 'ar' ? 'اسم المحطة أو النشاط:' : 'Stop Title / Activity Name:'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'ar' ? 'مثلاً: استراحة شاي بمقهى الفيشاوي، أو زيارة مقبرة نفرتاري...' : 'e.g. Sunset Felucca or Coffee break...'}
                        value={newStopTitle}
                        onChange={(e) => setNewStopTitle(e.target.value)}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 text-xs focus:outline-hidden focus:border-[#C99A42]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-[#183B56] block mb-1">
                          {language === 'ar' ? 'وقت البدء:' : 'Start Time:'}
                        </label>
                        <input
                          type="time"
                          value={newStopTimeStart}
                          onChange={(e) => setNewStopTimeStart(e.target.value)}
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 text-xs focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-[#183B56] block mb-1">
                          {language === 'ar' ? 'وقت الانتهاء:' : 'End Time:'}
                        </label>
                        <input
                          type="time"
                          value={newStopTimeEnd}
                          onChange={(e) => setNewStopTimeEnd(e.target.value)}
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 text-xs focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-[#183B56] block mb-1">
                        {language === 'ar' ? 'المكان أو المنطقة:' : 'Location:'}
                      </label>
                      <input
                        type="text"
                        placeholder={language === 'ar' ? 'مثلاً: كورنيش النيل، القرنة، البر الغربي' : 'e.g. West Bank, Qurna, Corniche'}
                        value={newStopLocation}
                        onChange={(e) => setNewStopLocation(e.target.value)}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 text-xs focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#183B56] block mb-1">
                        {language === 'ar' ? 'ملاحظات أو تفاصيل خاصة:' : 'Notes & Details:'}
                      </label>
                      <textarea
                        rows={2}
                        placeholder={language === 'ar' ? 'تفاصيل إضافية عن النشاط...' : 'Additional notes...'}
                        value={newStopDesc}
                        onChange={(e) => setNewStopDesc(e.target.value)}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 text-xs focus:outline-hidden"
                      />
                    </div>

                    <div className="pt-3 flex items-center justify-end gap-2 border-t border-stone-200">
                      <button
                        type="button"
                        onClick={() => setShowAddModal(false)}
                        className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 font-semibold cursor-pointer"
                      >
                        {language === 'ar' ? 'إلغاء' : 'Cancel'}
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-[#183B56] hover:bg-[#102738] text-white font-bold cursor-pointer"
                      >
                        {language === 'ar' ? 'حفظ وإدراج بالخطة' : 'Add to Schedule'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2 CONTENT: INTERACTIVE MAP & ROUTE BUILDER                 */}
        {/* ============================================================== */}
        {planningHubTab === 'map' && (
          <div className="space-y-6">
            {/* Filter Pills for Bank */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-1.5 p-1 bg-[#F7F2E8] rounded-xl border border-[#E8DFD0] text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setSelectedBank('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    selectedBank === 'all' ? 'bg-[#183B56] text-white shadow-xs font-bold' : 'text-stone-600 hover:text-[#183B56]'
                  }`}
                >
                  {t('all')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBank('east_bank')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    selectedBank === 'east_bank' ? 'bg-[#183B56] text-white shadow-xs font-bold' : 'text-stone-600 hover:text-[#183B56]'
                  }`}
                >
                  {t('east_bank')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBank('west_bank')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    selectedBank === 'west_bank' ? 'bg-[#183B56] text-white shadow-xs font-bold' : 'text-stone-600 hover:text-[#183B56]'
                  }`}
                >
                  {t('west_bank')}
                </button>
              </div>
            </div>

            {/* Map & Inspector Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* SVG Canvas (8 cols) */}
              <div className="lg:col-span-8 bg-[#F7F2E8]/60 rounded-3xl border border-[#E8DFD0] shadow-xs p-4 sm:p-6 overflow-hidden relative">
                <div className="flex items-center justify-between mb-4 text-xs font-medium text-stone-500 border-b border-[#E8DFD0] pb-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#183B56]" />
                      <span>{language === 'ar' ? 'البر الغربي (المقابر والمعابد)' : 'West Bank'}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C99A42]" />
                      <span>{language === 'ar' ? 'البر الشرقي (الكرنك والأقصر)' : 'East Bank'}</span>
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#C99A42]">25.6872° N, 32.6396° E</span>
                </div>

                <div className="relative aspect-[16/10] bg-[#EAE2D2]/50 rounded-2xl overflow-hidden border border-[#E8DFD0]">
                  <svg viewBox="0 0 1000 650" className="w-full h-full">
                    {/* Background Gradients */}
                    <defs>
                      <linearGradient id="nileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.45" />
                        <stop offset="50%" stopColor="#183B56" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#2E6B9E" stopOpacity="0.5" />
                      </linearGradient>
                      <linearGradient id="westMountains" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4C3A3" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#EAE2D2" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Theban Mountain Range (West) */}
                    <path d="M 0,0 L 280,0 L 260,180 L 320,320 L 250,520 L 290,650 L 0,650 Z" fill="url(#westMountains)" />
                    <text x="30" y="50" fill="#998363" fontSize="14" fontFamily="Cinzel" letterSpacing="4">THEBAN PEAKS</text>

                    {/* River Nile Channel */}
                    <path
                      d="M 460,0 C 470,120 540,240 520,360 C 500,480 470,580 480,650 L 580,650 C 570,560 600,460 620,350 C 640,230 570,110 560,0 Z"
                      fill="url(#nileGrad)"
                    />
                    <text x="515" y="320" fill="#ffffff" opacity="0.8" fontSize="13" fontFamily="Cinzel" letterSpacing="6" transform="rotate(75, 515, 320)">
                      RIVER NILE · النيل
                    </text>

                    {/* Banana Island */}
                    <ellipse cx="495" cy="460" rx="22" ry="38" fill="#78B159" opacity="0.85" />
                    <text x="455" y="465" fill="#183B56" fontSize="10" fontWeight="bold">جزيرة الموز</text>

                    {/* Custom Route Lines */}
                    {routeItems.length > 1 && (
                      <polyline
                        points={routeItems.map((item) => {
                          const isWest = item.bank === 'west_bank';
                          const x = isWest ? 180 + (item.coordinates.lng % 0.05) * 2000 : 660 + (item.coordinates.lng % 0.05) * 1800;
                          const y = 80 + (item.coordinates.lat % 0.1) * 4500;
                          return `${Math.max(50, Math.min(950, x))},${Math.max(40, Math.min(600, y))}`;
                        }).join(' ')}
                        fill="none"
                        stroke="#C99A42"
                        strokeWidth="3"
                        strokeDasharray="6,6"
                        className="animate-pulse"
                      />
                    )}

                    {/* Monument Pins */}
                    {filteredMapTreasures.map((item, idx) => {
                      const isWest = item.bank === 'west_bank';
                      const isSelected = activeTreasure?.id === item.id;
                      const isInCustomRoute = customRoute.includes(item.id);

                      const x = isWest ? 150 + (idx % 4) * 55 + (item.coordinates.lng % 0.04) * 2000 : 660 + (idx % 3) * 60 + (item.coordinates.lng % 0.03) * 1600;
                      const y = 70 + (idx * 28) % 520;
                      const clampedX = Math.max(70, Math.min(920, x));
                      const clampedY = Math.max(50, Math.min(590, y));

                      return (
                        <g
                          key={item.id}
                          onClick={() => setActiveTreasure(item)}
                          className="cursor-pointer group"
                        >
                          {isSelected && (
                            <circle cx={clampedX} cy={clampedY} r="18" fill="#C99A42" opacity="0.35" className="animate-ping" />
                          )}
                          <circle
                            cx={clampedX}
                            cy={clampedY}
                            r={isSelected ? "11" : "8"}
                            fill={isWest ? "#183B56" : "#C99A42"}
                            stroke="#ffffff"
                            strokeWidth="2.5"
                          />
                          {isInCustomRoute && (
                            <circle cx={clampedX} cy={clampedY} r="4" fill="#4ADE80" />
                          )}
                          <text
                            x={clampedX + 12}
                            y={clampedY + 4}
                            fontSize="10"
                            fontWeight={isSelected ? "bold" : "normal"}
                            fill="#183B56"
                            className="pointer-events-none drop-shadow-xs"
                          >
                            {item.name[language]?.slice(0, 18) || item.name.ar.slice(0, 18)}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Inspector Panel (4 cols) */}
              <div className="lg:col-span-4 bg-[#F7F2E8]/60 rounded-3xl border border-[#E8DFD0] p-6 space-y-6">
                {activeTreasure ? (
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100 border border-[#E8DFD0]">
                      <img
                        src={activeTreasure.mainImage}
                        alt={activeTreasure.name[language] || activeTreasure.name.ar}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2.5 start-2.5 px-2.5 py-1 rounded-md bg-[#183B56]/85 text-white text-[10px] font-semibold">
                        {activeTreasure.bank === 'east_bank' ? t('east_bank') : t('west_bank')}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-lg font-bold text-[#183B56] font-cairo">
                        {activeTreasure.name[language] || activeTreasure.name.ar}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                        {activeTreasure.shortDesc[language] || activeTreasure.shortDesc.ar}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E8DFD0] flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveModal({ type: 'treasure', id: activeTreasure.id })}
                        className="px-3 py-2 rounded-xl bg-white border border-[#E8DFD0] hover:border-[#C99A42] text-xs font-semibold text-[#183B56] flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C99A42]" />
                        <span>{t('details_btn')}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          customRoute.includes(activeTreasure.id)
                            ? removeFromRoute(activeTreasure.id)
                            : addToRoute(activeTreasure.id)
                        }
                        className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                          customRoute.includes(activeTreasure.id)
                            ? 'bg-[#C99A42] text-white'
                            : 'bg-[#183B56] hover:bg-[#102738] text-white'
                        }`}
                      >
                        {customRoute.includes(activeTreasure.id) ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{t('in_route')}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>{t('custom_route')}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-stone-500 text-xs">
                    <Compass className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                    <span>{language === 'ar' ? 'انقر على أي معلم بالخريطة لمعاينته' : 'Click any monument on map to inspect'}</span>
                  </div>
                )}

                {/* Custom Route Summary Strip */}
                <div className="pt-4 border-t border-[#E8DFD0] space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#183B56]">
                    <span>{language === 'ar' ? 'مسار رحلتك المخصص:' : 'Your Custom Route:'}</span>
                    <span className="font-mono text-[#C99A42]">{customRoute.length} {language === 'ar' ? 'معالم' : 'stops'}</span>
                  </div>

                  {totalDistanceKm > 0 && (
                    <div className="p-3 rounded-xl bg-white border border-[#E8DFD0] flex items-center justify-between text-xs">
                      <span className="text-stone-500">{language === 'ar' ? 'إجمالي المسافة التقديرية:' : 'Est. Distance:'}</span>
                      <span className="font-mono font-bold text-[#183B56]">{totalDistanceKm} كم</span>
                    </div>
                  )}

                  {customRoute.length > 0 && (
                    <button
                      type="button"
                      onClick={clearRoute}
                      className="w-full py-1.5 text-[11px] text-stone-500 hover:text-rose-600 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>{t('clear_route')}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3 CONTENT: PRACTICAL TRAVEL GUIDE & ADVICE                 */}
        {/* ============================================================== */}
        {planningHubTab === 'guide' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1: How to reach */}
              <div className="taiba-card rounded-2xl p-6 bg-[#F7F2E8]/60 border border-[#E8DFD0] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFD0] flex items-center justify-center text-[#C99A42]">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'كيفية الوصول إلى الأقصر' : 'How to Reach Luxor'}
                </h3>
                <div className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DFD0]/60 space-y-1">
                    <span className="font-bold text-[#183B56] block">
                      {language === 'ar' ? '✈️ الطيران الداخلي والدولي:' : '✈️ By Air:'}
                    </span>
                    <p>{language === 'ar' ? 'مطار الأقصر الدولي (LXR) يبعد 15 دقيقة فقط عن قلب المدينة، وتتوفر رحلات يومية مباشرة من القاهرة وشرم الشيخ والغردقة وعواصم أوروبية.' : 'Luxor Airport (LXR) is 15 minutes from downtown with daily flights from Cairo and Europe.'}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DFD0]/60 space-y-1">
                    <span className="font-bold text-[#183B56] block">
                      {language === 'ar' ? '🚂 قطار النوم السريع الصعيدي:' : '🚂 Sleeper Train:'}
                    </span>
                    <p>{language === 'ar' ? 'ينطلق قطار النوم المريح يومياً من محطة رمسيس بالقاهرة ويصل صباحاً لمحطة قطار الأقصر التراثية وسط المدينة.' : 'Overnight deluxe sleeper train from Cairo Ramses Station to Luxor.'}</p>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Nile Ferries & Transit */}
              <div className="taiba-card rounded-2xl p-6 bg-[#F7F2E8]/60 border border-[#E8DFD0] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFD0] flex items-center justify-center text-[#C99A42]">
                  <Ship className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'التنقل والمعدية النيلية' : 'Nile Ferries & Local Transit'}
                </h3>
                <div className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DFD0]/60 space-y-1">
                    <span className="font-bold text-[#183B56] block">
                      {language === 'ar' ? '⛴️ معدية الأهالي العامة:' : '⛴️ Public Ferryboat:'}
                    </span>
                    <p>{language === 'ar' ? 'أسرع وأرخص وسيلة للعبور بين البرين (5-10 دقائق)، تعمل على مدار 24 ساعة بدون انقطاع برسم رمزي (10 جنيهات للسائح).' : 'Fastest way to cross East and West banks in 5 minutes, 24/7 service.'}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DFD0]/60 space-y-1">
                    <span className="font-bold text-[#183B56] block">
                      {language === 'ar' ? '🐎 عربات الحنطور والتاكسي:' : '🐎 Hantour & Taxis:'}
                    </span>
                    <p>{language === 'ar' ? 'عربات الحنطور مرخصة ومثالية لجولة كورنيش النيل والأسواق، والاتفاق المسبق على السعر مستحب دائماً.' : 'Licensed horse carriages ideal for river corniche sightseeing.'}</p>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Etiquette & Safety */}
              <div className="taiba-card rounded-2xl p-6 bg-[#F7F2E8]/60 border border-[#E8DFD0] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFD0] flex items-center justify-center text-[#C99A42]">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#183B56] font-cairo">
                  {language === 'ar' ? 'آداب الزيارة وسلامة السائح' : 'Etiquette, Photos & Safety'}
                </h3>
                <div className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DFD0]/60 space-y-1">
                    <span className="font-bold text-[#183B56] block">
                      {language === 'ar' ? '📸 قواعد التصوير داخل المقابر:' : '📸 Photography Rules:'}
                    </span>
                    <p>{language === 'ar' ? 'التصوير بالهواتف المحمولة مجاني ومسموح في معظم المواقع بدون فلاش حمايةً للألوان الجدارية الأثرية.' : 'Smartphone photography is free; no flash inside tombs to preserve pigments.'}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 space-y-1">
                    <span className="font-bold text-amber-900 block flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'شرطة السياحة والآثار:' : 'Tourist Police:'}</span>
                    </span>
                    <p className="text-amber-800">
                      {language === 'ar' ? 'رقم الطوارئ الموحد المجاني بجميع اللغات: ' : 'Emergency hotline: '}
                      <a href="tel:126" className="font-mono font-bold underline">126</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
