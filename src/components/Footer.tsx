import React from 'react';
import { useData } from '../context/DataContext';
import { Shield, Phone, Mail, MapPin, Compass } from 'lucide-react';

interface FooterProps {
  onNavigateAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateAdmin }) => {
  const { language, t, settings, navigateToTab } = useData();

  return (
    <footer className="bg-[#102738] text-stone-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {settings.logoUrl ? (
                <img
                  src={settings.logoUrl}
                  alt="TAIBA"
                  style={{ width: `${settings.logoWidth || 40}px` }}
                  className="h-auto max-h-14 object-contain"
                />
              ) : (
                <div
                  style={{ width: `${settings.logoWidth || 40}px`, height: `${settings.logoWidth || 40}px` }}
                  className="rounded-lg bg-[#183B56] border border-[#C99A42]/50 flex items-center justify-center text-[#C99A42] font-cinzel font-bold text-xl shadow-inner shrink-0"
                >
                  𓋹
                </div>
              )}
              {settings.showBrandText !== false && (
                <span className="text-2xl font-bold font-cinzel text-white tracking-wider">
                  TAIBA <span className="text-[#C99A42] font-cairo">| طيبة</span>
                </span>
              )}
            </div>

            <p className="text-xs text-stone-300 max-w-sm leading-relaxed">
              «{settings.slogan[language] || settings.slogan.ar}»
            </p>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              {language === 'ar'
                ? 'المنصة السياحية المتكاملة لمدينة الأقصر وكنوز طيبة الخالدة بالبرين الشرقي والغربي. دليل سياحي شامل وتخطيط تفاعلي للزيارة.'
                : 'The official integrated cultural tourism platform for Luxor and the eternal treasures of ancient Thebes.'}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#C99A42]">
              <span>LUXOR · EGYPT · EST. 2026</span>
            </div>
          </div>

          {/* Core Sections Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              {t('treasures')}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#treasures" className="hover:text-[#C99A42] transition-colors">{t('east_bank')}</a></li>
              <li><a href="#treasures" className="hover:text-[#C99A42] transition-colors">{t('west_bank')}</a></li>
              <li><a href="#treasures" className="hover:text-[#C99A42] transition-colors">{t('royal_tombs')}</a></li>
              <li><a href="#treasures" className="hover:text-[#C99A42] transition-colors">{t('nobles_workers')}</a></li>
              <li><a href="#treasures" className="hover:text-[#C99A42] transition-colors">{t('museums')}</a></li>
            </ul>
          </div>

          {/* Experiences & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              {t('experiences')}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><button onClick={() => navigateToTab('experiences')} className="hover:text-[#C99A42] transition-colors cursor-pointer text-start">{language === 'ar' ? 'البالون الطائر' : 'Hot Air Balloon'}</button></li>
              <li><button onClick={() => navigateToTab('nature')} className="hover:text-[#C99A42] transition-colors cursor-pointer text-start">{language === 'ar' ? 'المراكب والفلوكة' : 'Nile Feluccas'}</button></li>
              <li><button onClick={() => navigateToTab('culture')} className="hover:text-[#C99A42] transition-colors cursor-pointer text-start">{language === 'ar' ? 'الصوت والضوء بالكرنك' : 'Sound & Light'}</button></li>
              <li><button onClick={() => navigateToTab('map')} className="hover:text-[#C99A42] transition-colors cursor-pointer text-start">{t('map')}</button></li>
              <li><button onClick={() => navigateToTab('planner')} className="hover:text-[#C99A42] transition-colors cursor-pointer text-start">{t('plan_trip')}</button></li>
            </ul>
          </div>

          {/* Contact & Tourist Police */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              {language === 'ar' ? 'خدمات الزوار والطوارئ' : 'Visitor Support'}
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C99A42]" />
                <span className="font-mono">{settings.contactPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C99A42]" />
                <span className="font-mono">{settings.contactEmail}</span>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-white/10">
                <Shield className="w-3.5 h-3.5 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">{settings.emergencyTouristPolice}</span>
                  <span className="text-[10px] text-stone-400">{language === 'ar' ? 'متاح 24 ساعة لخدمة السياح' : '24/7 Tourist Assistance'}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Admin Portal Access */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="font-cairo text-stone-400">{t('copyright')}</p>

          <div className="flex items-center gap-4">
            {/* The Dedicated Admin Portal Link at very bottom */}
            <button
              onClick={onNavigateAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-stone-300 hover:text-[#C99A42] border border-white/10 hover:border-[#C99A42]/50 transition-all cursor-pointer font-cairo font-semibold text-xs shadow-xs"
              title={language === 'ar' ? 'الدخول إلى لوحة إدارة المحتوى والتحكم' : 'Open Content Management Admin Portal'}
            >
              <Shield className="w-3.5 h-3.5 text-[#C99A42]" />
              <span>{t('admin_portal')}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
