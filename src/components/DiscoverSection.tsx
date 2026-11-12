import React from 'react';
import { useData } from '../context/DataContext';
import { Sun, Moon, Waves, Landmark, Sparkles } from 'lucide-react';

export const DiscoverSection: React.FC = () => {
  const { language, t, settings } = useData();

  return (
    <section id="discover" className="py-20 bg-[#F7F2E8] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A42]" />
            <span>{t('discover')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {settings.discoverTitle
              ? (settings.discoverTitle[language] || settings.discoverTitle.ar)
              : (language === 'ar' ? 'الأقصر… أسطورة طيبة عاصمة الإمبراطورية' : 'Luxor… The Legend of Thebes, Imperial Capital')}
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-light font-cairo">
            {settings.discoverDesc
              ? (settings.discoverDesc[language] || settings.discoverDesc.ar)
              : (language === 'ar'
                ? 'كانت تُعرف في مصر القديمة باسم "واست" (صولجان الحكم) وسماها الإغريق "طيبة ذات المائة باب". احتضنت أعظم فراعنة الأسرات، وشكل نهر النيل حدّاً فاصلاً مقدساً بين عالم الأحياء وعالم الخلود.'
                : 'Known to ancients as "Waset" (Scepter of Dominion) and to Homer as "Thebes of the Hundred Gates", Luxor was the supreme golden capital of Egypt’s New Kingdom.')}
          </p>
        </div>

        {/* East Bank vs West Bank Dual Duality Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* East Bank Card */}
          <div className="taiba-card rounded-2xl overflow-hidden p-8 flex flex-col justify-between border-t-2 border-t-[#C99A42] bg-white">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-bold text-[#C99A42] tracking-wider uppercase">
                  <Sun className="w-4 h-4 text-[#C99A42]" />
                  {language === 'ar' ? 'مدينة الأحياء وشروق الشمس' : 'City of the Living & Sunrise'}
                </span>
                <span className="text-xs font-mono text-stone-400">EAST BANK</span>
              </div>
              <h3 className="text-2xl font-bold text-[#183B56] font-cairo">
                {(settings.eastBankTitle && (settings.eastBankTitle[language] || settings.eastBankTitle.ar)) ||
                  (language === 'ar' ? 'البر الشرقي: موطن العبادة ومواكب الملوك' : 'The East Bank: Divine Sanctuaries & Grand Processions')}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-cairo">
                {(settings.eastBankDesc && (settings.eastBankDesc[language] || settings.eastBankDesc.ar)) ||
                  (language === 'ar'
                    ? 'حيث تشرق الشمس كل صباح، يقع مجمع معابد الكرنك العظيم ومعبد الأقصر وطريق الكباش والمتاحف الأثرية وأسواق المدينة النابضة بالحياة والفنادق التراثية العريقة على كورنيش النيل.'
                    : 'Where the sun rises each dawn: home to Karnak Complex, Luxor Temple, Avenue of Sphinxes, vibrant spice souks, and waterfront palaces.')}
              </p>
              
              <div className="pt-3 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs text-stone-500 font-cairo">
                <div className="flex items-center gap-2">
                  <Landmark className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'معبد الكرنك والأقصر' : 'Karnak & Luxor Temples'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'طريق الكباش ومتحف الأقصر' : 'Avenue of Sphinxes'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between font-cairo">
              <a
                href="#treasures"
                className="text-xs font-bold text-[#183B56] hover:text-[#C99A42] transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'ar' ? 'استكشف معابد البر الشرقي' : 'Explore East Bank Temples'}</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* West Bank Card */}
          <div className="taiba-card rounded-2xl overflow-hidden p-8 flex flex-col justify-between border-t-2 border-t-[#183B56] bg-white">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-bold text-[#183B56] tracking-wider uppercase font-cairo">
                  <Moon className="w-4 h-4 text-[#C99A42]" />
                  {language === 'ar' ? 'عالم الخلود والأبدية' : 'Realm of Eternity & Sunset'}
                </span>
                <span className="text-xs font-cairo text-stone-400 font-bold">WEST BANK</span>
              </div>
              <h3 className="text-2xl font-bold text-[#183B56] font-cairo">
                {(settings.westBankTitle && (settings.westBankTitle[language] || settings.westBankTitle.ar)) ||
                  (language === 'ar' ? 'البر الغربي: سر الخلود ومقابر الفراعنة' : 'The West Bank: Tombs of Eternity & Sacred Mountains')}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-cairo">
                {(settings.westBankDesc && (settings.westBankDesc[language] || settings.westBankDesc.ar)) ||
                  (language === 'ar'
                    ? 'حيث تغرب الشمس خلف جبل القرنة الهرمي، ينبسط وادي الملوك ووادي الملكات ومعابد ملايين السنين لحتشبسوت ورمسيس الثاني ومقابر العمال والنبلاء المحفورة في الصخر؛ الموطن الأسطوري للخلود والأسرار الفرعونية الخالدة.'
                    : 'Where the sun sinks behind the natural pyramid peak of al-Qurn: sheltering Valley of the Kings, Valley of the Queens, Deir el-Bahari, and Deir el-Medina.')}
              </p>

              <div className="pt-3 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <Landmark className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'وادي الملوك والملكات' : 'Kings & Queens Valleys'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'حتشبسوت وقرية العمال' : 'Hatshepsut & Artisans'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <a
                href="#treasures"
                className="text-xs font-bold text-[#183B56] hover:text-[#C99A42] transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'ar' ? 'استكشف مقابر ومعابد الغرب' : 'Explore West Bank Tombs'}</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
