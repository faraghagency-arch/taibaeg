import React, { useState, useId } from 'react';
import { useData } from '../context/DataContext';
import {
  Calendar,
  Clock,
  DollarSign,
  Users,
  Sparkles,
  Printer,
  Copy,
  Check,
  MapPin,
  Compass,
  Plus,
  Trash2,
  Edit2,
  Sliders,
  Coffee,
  Sun,
  Moon,
  Download
} from 'lucide-react';

interface ItineraryStep {
  id: string;
  time: string;
  title: Record<string, string>;
  location: Record<string, string>;
  desc: Record<string, string>;
  isCustom?: boolean;
}

export const TripPlannerSection: React.FC = () => {
  const { language, t, customRoute, treasures } = useData();

  const [selectedDays, setSelectedDays] = useState<number>(3);
  const [selectedStyle, setSelectedStyle] = useState<string>('culture');
  const [preferredStartTime, setPreferredStartTime] = useState<string>('06:00');
  const [preferredEndTime, setPreferredEndTime] = useState<string>('20:00');
  const [pace, setPace] = useState<'relaxed' | 'balanced' | 'active'>('balanced');
  const [copied, setCopied] = useState(false);

  // New custom stop modal / form state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStopTitle, setNewStopTitle] = useState('');
  const [newStopLocation, setNewStopLocation] = useState('');
  const [newStopTimeStart, setNewStopTimeStart] = useState('09:00');
  const [newStopTimeEnd, setNewStopTimeEnd] = useState('11:00');
  const [newStopDesc, setNewStopDesc] = useState('');

  const getLocalized = (obj: Record<string, string>) => {
    return obj[language] || obj.ar || obj.en || '';
  };

  // Base schedule templates for 1 to 5 days
  const baseSchedules: Record<number, ItineraryStep[]> = {
    1: [
      {
        id: '1-1',
        time: '04:30 - 07:00 AM',
        title: { ar: 'شروق الشمس بالبالون الطائر', en: 'Sunrise Hot Air Balloon Flight' },
        location: { ar: 'البر الغربي', en: 'West Bank' },
        desc: { ar: 'مشاهدة إشراقة الشمس الذهبية فوق وادي الملوك ومعبد حتشبسوت من السماء', en: 'Drift over Hatshepsut terraces and royal tombs at dawn' },
      },
      {
        id: '1-2',
        time: '08:00 - 11:30 AM',
        title: { ar: 'وادي الملوك ومعبد حتشبسوت وعملاقا ممنون', en: 'Valley of the Kings, Hatshepsut & Memnon' },
        location: { ar: 'البر الغربي', en: 'West Bank' },
        desc: { ar: 'زيارة مقابر توت عنخ آمون ورمسيس السادس وشرفات الدير البحري الحجرية', en: 'Explore Tutankhamun’s tomb, KV9 and iconic mortuary colonnade' },
      },
      {
        id: '1-3',
        time: '01:00 - 02:30 PM',
        title: { ar: 'استراحة غداء تراثي صعيدي ببيت المرسم', en: 'Heritage Lunch at Marsam West Bank' },
        location: { ar: 'القرنة', en: 'Qurna' },
        desc: { ar: 'طاجن فخار وخضروات طازجة من المزرعة مع شاي الحبق الصعيدي', en: 'Fresh farm-to-table Egyptian specialties in artists garden' },
      },
      {
        id: '1-4',
        time: '03:30 - 05:30 PM',
        title: { ar: 'مجمع معابد الكرنك العظيم', en: 'Great Karnak Temple Complex' },
        location: { ar: 'البر الشرقي', en: 'East Bank' },
        desc: { ar: 'التجول بين 134 عموداً في بهو الأعمدة ومسلة حتشبسوت والبحيرة المقدسة', en: 'Hypostyle hall, Hatshepsut obelisk, and Sacred Lake' },
      },
      {
        id: '1-5',
        time: '06:00 - 08:30 PM',
        title: { ar: 'معبد الأقصر ليلاً وإبحار الغروب في الفلوكة', en: 'Sunset Felucca Sail & Luxor Temple by Night' },
        location: { ar: 'كورنيش النيل', en: 'Nile Corniche' },
        desc: { ar: 'مشاهدة تماثيل رمسيس الثاني المضاءة بالسحر وختام اليوم بعشاء نيلي', en: 'Illuminated pylon of Ramesses II and riverside dining' },
      },
    ],
    2: [
      {
        id: '2-1',
        time: '08:00 - 11:30 AM',
        title: { ar: 'البر الشرقي: الكرنك ومتحف الأقصر', en: 'Day 1 Morning: Karnak & Luxor Museum' },
        location: { ar: 'البر الشرقي', en: 'East Bank' },
        desc: { ar: 'استكشاف مجمع الكرنك بالكامل وخبيئة التماثيل بمتحف الأقصر للفن القديم', en: 'Full Karnak immersion and masterpiece cachette sculptures at Luxor Museum' },
      },
      {
        id: '2-2',
        time: '04:30 - 08:30 PM',
        title: { ar: 'طريق الكباش ومعبد الأقصر ليلاً والفلوكة', en: 'Day 1 Evening: Avenue of Sphinxes & Night Temple' },
        location: { ar: 'البر الشرقي', en: 'East Bank' },
        desc: { ar: 'المشي على طريق الكباش وزيارة معبد الأقصر تحت الإضاءة المعمارية الساحرة', en: 'Stroll the Sphinx Avenue, sunset sail, and dinner in the old bazaar' },
      },
      {
        id: '2-3',
        time: '04:30 - 11:30 AM',
        title: { ar: 'البر الغربي: بالون الفجر ووادي الملوك', en: 'Day 2 Morning: Sunrise Balloon & Kings Valley' },
        location: { ar: 'البر الغربي', en: 'West Bank' },
        desc: { ar: 'رحلة البالون ثم النزول لمقابر توت عنخ آمون وسيتي الأول ومعبد حتشبسوت', en: 'Flight followed by Tutankhamun and Seti I tombs at Deir el-Bahari' },
      },
      {
        id: '2-4',
        time: '01:30 - 06:00 PM',
        title: { ar: 'مدينة هابو وتمثالا ممنون وغروب جزيرة الموز', en: 'Day 2 Afternoon: Medinet Habu & Banana Island' },
        location: { ar: 'البر الغربي والنيل', en: 'West Bank & Nile' },
        desc: { ar: 'نقوش معارك رمسيس الثالث، عملاقا ممنون، وجولة فلوكة إلى بساتين جزيرة الموز', en: 'Ramesses III colors, Colossi of Memnon, and private boat to Banana Island' },
      },
    ],
    3: [
      {
        id: '3-1',
        time: 'اليوم الأول: 08:00 ص - 01:00 م',
        title: { ar: 'عظمة البر الشرقي: معابد الكرنك وطريق الكباش', en: 'Day 1: Karnak Complex & Avenue of Sphinxes' },
        location: { ar: 'البر الشرقي', en: 'East Bank' },
        desc: { ar: 'أكبر مجمع ديني في العالم القديم وسير على طريق الكباش الأثري', en: 'World’s largest ancient temple complex and the 2.7 km sphinx processional way' },
      },
      {
        id: '3-2',
        time: 'اليوم الأول: 05:00 م - 09:00 م',
        title: { ar: 'متحف التحنيط ومعبد الأقصر المضاء ليلاً', en: 'Day 1: Mummification Museum & Luxor Temple Night' },
        location: { ar: 'كورنيش النيل', en: 'Nile Corniche' },
        desc: { ar: 'أسرار الطب والجنائز الفرعونية وعظمة رمسيس الثاني تحت أضواء المساء', en: 'Ancient surgical secrets and illuminated courtyard of Ramesses II' },
      },
      {
        id: '3-3',
        time: 'اليوم الثاني: 04:30 ص - 12:00 م',
        title: { ar: 'البالون الطائر + وادي الملوك ومعبد حتشبسوت', en: 'Day 2: Sunrise Balloon & Royal West Bank' },
        location: { ar: 'البر الغربي', en: 'West Bank' },
        desc: { ar: 'تحليق الفجر فوق جبل القرنة، مقابر الفراعنة الخالدة، ومدرجات الدير البحري', en: 'Aerial flight over thebes, KV62, KV9 tombs, and Hatshepsut terraces' },
      },
      {
        id: '3-4',
        time: 'اليوم الثاني: 02:00 م - 06:30 م',
        title: { ar: 'وادي الملكات (نفرتاري) وقرية دير المدينة للعمال', en: 'Day 2: Nefertari Tomb & Artisans Village' },
        location: { ar: 'البر الغربي', en: 'West Bank' },
        desc: { ar: 'أجمل جداريات ملونة في التاريخ بمقبرة نفرتاري ومنازل صانعي المقابر', en: 'Pristine colors of Queen Nefertari QV66 and ancient workers village TT1' },
      },
      {
        id: '3-5',
        time: 'اليوم الثالث: 08:30 ص - 02:00 م',
        title: { ar: 'معبد مدينة هابو والرمسيوم وورش الألباستر بالقرنة', en: 'Day 3: Medinet Habu, Ramesseum & Alabaster' },
        location: { ar: 'القرنة', en: 'Qurna' },
        desc: { ar: 'ألوان رمسيس الثالث الباقية وتمثال رمسيس الساقط ونحت الألباستر اليدوي', en: 'Intact ceiling pigments of Habu, fallen colossus, and artisan workshops' },
      },
      {
        id: '3-6',
        time: 'اليوم الثالث: 04:00 م - 09:00 م',
        title: { ar: 'إبحار الدهبية النيلية وسوق الأقصر القديم للتوابل', en: 'Day 3: Nile Sunset Sail & Old Spice Souk' },
        location: { ar: 'النيل والسوق التراثي', en: 'Nile & Old Bazaar' },
        desc: { ar: 'جلسة شاي بالحبق مع الغروب النيلي وشراء التوابل والفضة من خان الأقصر', en: 'Tranquil twilight sail and authentic bazaar shopping for saffron and hibiscus' },
      },
    ],
  };

  // State of custom editable steps
  const [customSteps, setCustomSteps] = useState<ItineraryStep[]>(() => {
    return baseSchedules[3];
  });

  // When user changes days, load default or adjust
  const handleDaysChange = (newDays: number) => {
    const validDays = Math.max(1, Math.min(14, newDays));
    setSelectedDays(validDays);
    if (baseSchedules[validDays]) {
      setCustomSteps(baseSchedules[validDays]);
    } else {
      // Generate extended custom schedule based on available treasures
      const generated: ItineraryStep[] = [];
      for (let d = 1; d <= validDays; d++) {
        generated.push({
          id: `gen-${d}-1`,
          time: `اليوم ${d}: ${preferredStartTime} - 12:00 PM`,
          title: {
            ar: d === 4 ? 'امتداد الأقصر: معبد خنوم بإسنا ومعبد الطود' : d === 5 ? 'سفاري وادي الملوك ومقابر النبلاء المعمقة' : `جولة اليوم ${d} الاستكشافية`,
            en: d === 4 ? 'Esna Temple of Khnum & Tod Sanctuary' : d === 5 ? 'Desert Quad Safari & Deep Nobles Tombs' : `Day ${d} Exploratory Circuit`
          },
          location: { ar: d === 4 ? 'إسنا والطود' : 'الأقصر', en: 'Luxor Surroundings' },
          desc: {
            ar: `برنامج خاص ومخصص لليوم ${d} بحسب وتيرتك المفضلة (${pace}) مع استراحات مريحة.`,
            en: `Personalized day ${d} schedule adjusted to your ${pace} pace preferences.`
          }
        });
        generated.push({
          id: `gen-${d}-2`,
          time: `اليوم ${d}: 04:00 PM - ${preferredEndTime}`,
          title: {
            ar: `جلسة استجمام نيلية وغروب اليوم ${d}`,
            en: `Sunset River & Heritage Evening - Day ${d}`
          },
          location: { ar: 'كورنيش النيل وسوق طيبة', en: 'Nile Corniche' },
          desc: {
            ar: 'عشاء تراثي وإبحار فلوكة مع قضاء وقت حر للتسوق والتصوير.',
            en: 'Riverside dinner, sunset photography, and leisure stroll.'
          }
        });
      }
      setCustomSteps(generated);
    }
  };

  // Remove a step
  const handleRemoveStep = (id: string) => {
    setCustomSteps((prev) => prev.filter((s) => s.id !== id));
  };

  // Add custom user-defined stop
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

  // Copy plan text to clipboard
  const handleCopy = () => {
    const text = customSteps
      .map((item) => `${item.time} - ${getLocalized(item.title)}\n${getLocalized(item.location)}\n${getLocalized(item.desc)}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Download customized schedule as formatted file
  const handleDownload = () => {
    const lines = customSteps.map((item, idx) => {
      return `${idx + 1}. [${item.time}] ${getLocalized(item.title)}\n   ${language === 'ar' ? 'الموقع' : 'Location'}: ${getLocalized(item.location)}\n   ${language === 'ar' ? 'التفاصيل' : 'Details'}: ${getLocalized(item.desc)}`;
    });
    const header = language === 'ar'
      ? `🏛️ جدول رحلة الأقصر وطيبة المخصص (${selectedDays} أيام)\nوتيرة الحركة: ${pace === 'relaxed' ? 'مريح' : pace === 'active' ? 'مكثف' : 'متوازن'}\nتاريخ الإنشاء: ${new Date().toLocaleDateString('ar-EG')}\n========================================\n\n`
      : `🏛️ Luxor & Thebes Custom Itinerary (${selectedDays} Days)\nPace: ${pace}\nCreated: ${new Date().toLocaleDateString()}\n========================================\n\n`;
    const fullText = header + lines.join('\n\n') + (language === 'ar' ? '\n\nنتمنى لك رحلة ساحرة في عاصمة المجد الفرعوني!' : '\n\nWishing you a magical journey in the pharaonic capital!');
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `luxor-itinerary-${selectedDays}-days.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="planner" className="py-20 bg-white border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <span>{t('plan_trip')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {language === 'ar' ? 'مخطط الرحلات الذكي: حدد أوقاتك وبرنامجك بحرية كاملة' : 'Smart Trip Planner: Set Your Custom Times & Schedule'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {language === 'ar'
              ? 'صمم برنامج زيارتك للأقصر بالساعات والدقائق التي تناسبك؛ حدد عدد الأيام وساعات البداية والنهاية اليومية، وأضف محطاتك الخاصة بكل حرية.'
              : 'Customize your daily start/finish hours, adjust days duration, and add custom personal stops to build your bespoke Theban journey.'}
          </p>
        </div>

        {/* ============================================================== */}
        {/* USER TIME CUSTOMIZATION CONTROL PANEL                          */}
        {/* ============================================================== */}
        <div className="bg-[#F7F2E8] p-6 sm:p-8 rounded-3xl border border-[#E8DFD0] shadow-sm space-y-6">
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
                <span className="text-[#C99A42] font-mono text-sm font-bold">
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

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span>1 {language === 'ar' ? 'يوم مكثف' : 'Day'}</span>
                <span>3 {language === 'ar' ? 'أيام (الموصى بها)' : 'Days (Recommended)'}</span>
                <span>10 {language === 'ar' ? 'أيام' : 'Days'}</span>
              </div>
            </div>

            {/* 2. Daily Preferred Working Window */}
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
                    onChange={(e) => setPreferredStartTime(e.target.value)}
                    className="w-full p-2 bg-[#F7F2E8] border border-[#E8DFD0] rounded-xl text-xs font-semibold text-[#183B56] focus:outline-hidden"
                  >
                    <option value="04:30">04:30 AM ({language === 'ar' ? 'فجر البالون' : 'Dawn'})</option>
                    <option value="06:00">06:00 AM ({language === 'ar' ? 'شروق الشمس' : 'Sunrise'})</option>
                    <option value="08:00">08:00 AM ({language === 'ar' ? 'صباحي مبكر' : 'Early'})</option>
                    <option value="09:30">09:30 AM ({language === 'ar' ? 'صباحي مريح' : 'Relaxed'})</option>
                  </select>
                </div>

                <div>
                  <span className="text-[10px] text-stone-500 flex items-center gap-1 mb-1">
                    <Moon className="w-3 h-3 text-[#183B56]" />
                    <span>{language === 'ar' ? 'نهاية الجولة:' : 'Finish:'}</span>
                  </span>
                  <select
                    value={preferredEndTime}
                    onChange={(e) => setPreferredEndTime(e.target.value)}
                    className="w-full p-2 bg-[#F7F2E8] border border-[#E8DFD0] rounded-xl text-xs font-semibold text-[#183B56] focus:outline-hidden"
                  >
                    <option value="17:00">05:00 PM ({language === 'ar' ? 'عند الغروب' : 'Sunset'})</option>
                    <option value="19:30">07:30 PM ({language === 'ar' ? 'مسائي معتدل' : 'Evening'})</option>
                    <option value="21:30">09:30 PM ({language === 'ar' ? 'معبد الأقصر ليلاً' : 'Night'})</option>
                  </select>
                </div>
              </div>

              <p className="text-[10px] text-stone-500 pt-1">
                {language === 'ar' ? 'يتم ضبط مواعيد المحطات تلقائياً وفق وقتك المختار.' : 'Itinerary automatically aligns with your active hours.'}
              </p>
            </div>

            {/* 3. Pace & Style Selection */}
            <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#E8DFD0]">
              <label className="text-xs font-bold text-[#183B56] block">
                {language === 'ar' ? 'وتيرة الحركة والراحة:' : 'Daily Pace & Rhythm:'}
              </label>

              <div className="grid grid-cols-3 gap-1.5 pt-1 text-xs">
                {[
                  { id: 'relaxed', label: language === 'ar' ? 'مريح' : 'Relaxed', desc: '3h/stop' },
                  { id: 'balanced', label: language === 'ar' ? 'متوازن' : 'Balanced', desc: '2h/stop' },
                  { id: 'active', label: language === 'ar' ? 'مكثف' : 'Active', desc: '1h/stop' },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPace(p.id as any)}
                    className={`py-2 px-1 rounded-xl text-center border transition-all cursor-pointer ${
                      pace === p.id
                        ? 'bg-[#183B56] text-white border-[#183B56] font-bold shadow-xs'
                        : 'bg-[#F7F2E8] text-stone-600 border-transparent hover:border-[#C99A42]'
                    }`}
                  >
                    <span className="block text-xs">{p.label}</span>
                    <span className="text-[9px] opacity-75 block">{p.desc}</span>
                  </button>
                ))}
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowAddModal(true)}
                  className="w-full py-2 px-3 rounded-xl bg-[#C99A42] hover:bg-[#b08432] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? '➕ أضف محطة مخصصة بوقتك' : '➕ Add Custom Time Stop'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* TIMELINE VIEW WITH CUSTOMIZABLE STEPS                         */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-[#C99A42]" />
              <h3 className="text-xl font-bold text-[#183B56] font-cairo">
                {language === 'ar'
                  ? `جدول رحلتك المخصص (${selectedDays} ${selectedDays === 1 ? 'يوم' : selectedDays === 2 ? 'يومان' : 'أيام'} • ${customSteps.length} محطات مبرمجة)`
                  : `Your Custom Itinerary (${selectedDays} Days • ${customSteps.length} Scheduled Stops)`}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-3 py-1.5 rounded-lg bg-[#C99A42]/15 text-[#C99A42] hover:bg-[#C99A42] hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'إضافة محطة' : 'Add Stop'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="px-3.5 py-1.5 rounded-lg bg-[#183B56] hover:bg-[#102738] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#C99A42]" />
                <span>{language === 'ar' ? 'تنزيل الجدول' : 'Download Plan'}</span>
              </button>

              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg border border-[#E8DFD0] bg-white hover:bg-[#F7F2E8] text-xs font-semibold text-[#183B56] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#C99A42]" />}
                <span>{copied ? (language === 'ar' ? 'تم النسخ' : 'Copied') : (language === 'ar' ? 'نسخ الخطة' : 'Copy Plan')}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg border border-[#E8DFD0] bg-white hover:bg-[#F7F2E8] text-xs font-semibold text-[#183B56] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#C99A42]" />
                <span className="hidden sm:inline">{language === 'ar' ? 'طباعة' : 'Print'}</span>
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
                  <div className="w-10 h-10 rounded-xl bg-[#F7F2E8] border border-[#E8DFD0] text-[#183B56] font-bold text-sm flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#C99A42]">
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#183B56] text-white font-mono text-[11px]">
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
                  <a
                    href="#map"
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#183B56] hover:text-[#C99A42] bg-[#F7F2E8] hover:bg-[#EAE2D2] transition-colors flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? 'على الخريطة' : 'On map'}</span>
                    <span>→</span>
                  </a>

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

        {/* ============================================================== */}
        {/* ADD CUSTOM STOP MODAL                                          */}
        {/* ============================================================== */}
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
    </section>
  );
};
