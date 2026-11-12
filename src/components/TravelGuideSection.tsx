import React from 'react';
import { useData } from '../context/DataContext';
import { Plane, Train, Ship, Car, Compass, Shield, Sun, AlertCircle, Phone } from 'lucide-react';

export const TravelGuideSection: React.FC = () => {
  const { language, t, settings } = useData();

  return (
    <section id="guide" className="py-20 bg-[#F7F2E8] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <span>{t('guide')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {settings.guideTitle
              ? (settings.guideTitle[language] || settings.guideTitle.ar)
              : (language === 'ar' ? 'دليلك السياحي العملي: كل ما تحتاج معرفته قبل السفر' : 'Practical Travel Guide: Essential Travel Intelligence')}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {settings.guideDesc
              ? (settings.guideDesc[language] || settings.guideDesc.ar)
              : (language === 'ar'
                ? 'معلومات موثوقة وعملية حول كيفية الوصول إلى الأقصر، والمعدية النيلية المحلية، وأفضل أوقات الزيارة، وقواعد الاحتشام والتصوير بالمعابد، وأرقام الطوارئ.'
                : 'Reliable verified advice on transit to Luxor, public Nile ferryboats, local customs, photography permits, and tourist safety.')}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* How to Reach Luxor */}
          <div className="taiba-card rounded-2xl p-6 bg-white border border-[#E8DFD0] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C99A42]">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'كيفية الوصول إلى الأقصر' : 'How to Reach Luxor'}
            </h3>
            <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Plane className="w-4 h-4 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'مطار الأقصر الدولي (LXR):' : 'Luxor Int. Airport (LXR):'}</span>
                  <span>{settings.guideTransitAirport ? (settings.guideTransitAirport[language] || settings.guideTransitAirport.ar) : (language === 'ar' ? 'رحلات طيران يومية منتظمة من القاهرة (ساعة واحدة) ورحلات شارتر مباشرة من كبرى مدن أوروبا.' : 'Daily flights from Cairo (1 hr) and direct charters from major European hubs.')}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Train className="w-4 h-4 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'قطار النوم والقطارات المكيفة:' : 'Sleeper & Express Trains:'}</span>
                  <span>{settings.guideTransitTrain ? (settings.guideTransitTrain[language] || settings.guideTransitTrain.ar) : (language === 'ar' ? 'رحلة ليلية ساحرة من القاهرة إلى محطة قطار الأقصر بوسط المدينة (حوالي 9 إلى 10 ساعات).' : 'Scenic overnight sleeper service from Cairo straight to central Luxor station.')}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Ship className="w-4 h-4 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'الرحلات النيلية (الكروز):' : 'Nile Cruise Ships:'}</span>
                  <span>{settings.guideTransitCruise ? (settings.guideTransitCruise[language] || settings.guideTransitCruise.ar) : (language === 'ar' ? 'رحلات 4 أو 5 ليالٍ بين الأقصر وأسوان عبر معابد إدفو وكوم أمبو وإسنا.' : 'Iconic 4-5 night sailing journeys connecting Luxor to Aswan via Edfu & Kom Ombo.')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Local Getting Around & Ferryboat */}
          <div className="taiba-card rounded-2xl p-6 bg-white border border-[#E8DFD0] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C99A42]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'المواصلات والتنقل الداخلي' : 'Getting Around Locally'}
            </h3>
            <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Ship className="w-4 h-4 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'المعدية النيلية العامة (البلدي):' : 'Public Nile Ferryboat:'}</span>
                  <span>{settings.guideLocalFerry ? (settings.guideLocalFerry[language] || settings.guideLocalFerry.ar) : (language === 'ar' ? 'أسرع وأمتع طريقة للعبور بين البر الشرقي والغربي (تعمل 24 ساعة مقابل 5 جنيهات مصرية فقط).' : 'Fastest, picturesque river transit connecting East to West Bank (24/7, approx 5 EGP).')}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'سيارات الأجرة (التاكسي):' : 'Taxis & Private Drivers:'}</span>
                  <span>{settings.guideLocalTaxi ? (settings.guideLocalTaxi[language] || settings.guideLocalTaxi.ar) : (language === 'ar' ? 'متوفرة بكثرة؛ يوصى بالاتفاق المسبق على الأجرة أو حجز سيارة خاصة ليوم كامل لزيارة معالم الغرب.' : 'Abundant; agree fare in advance or hire a dedicated private car for West Bank touring.')}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'الدراجات الهوائية بالبر الغربي:' : 'West Bank Bicycle Rentals:'}</span>
                  <span>{settings.guideLocalBicycle ? (settings.guideLocalBicycle[language] || settings.guideLocalBicycle.ar) : (language === 'ar' ? 'خيار ممتع وشائع لاستكشاف قرى القرنة ومعبد مدينة هابو والرامسيوم بالدراجة الهوائية.' : 'A popular, eco-friendly way to pedal between Medinet Habu and Qurna villages.')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Essential Travel Tips & Safety */}
          <div className="taiba-card rounded-2xl p-6 bg-white border border-[#E8DFD0] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C99A42]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#183B56] font-cairo">
              {language === 'ar' ? 'نصائح مهمة وأرقام الطوارئ' : 'Essential Tips & Safety'}
            </h3>
            <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Sun className="w-4 h-4 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'التوقيت وأشعة الشمس:' : 'Sun Protection & Timing:'}</span>
                  <span>{settings.guideTipsSun ? (settings.guideTipsSun[language] || settings.guideTipsSun.ar) : (language === 'ar' ? 'ابدأ زيارة معالم البر الغربي ووادي الملوك مبكراً عند الساعة 6:00 صباحاً لتجنب حرارة الظهيرة، واشرب الكثير من الماء.' : 'Begin West Bank treks early (6:00 AM) to avoid peak heat; stay well hydrated.')}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#C99A42] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#183B56] block">{language === 'ar' ? 'التصوير داخل المقابر:' : 'Tomb Photography Rules:'}</span>
                  <span>{settings.guideTipsPhoto ? (settings.guideTipsPhoto[language] || settings.guideTipsPhoto.ar) : (language === 'ar' ? 'التصوير بالهواتف المحمولة مسموح ومجاني بدون فلاش في أغلب المواقع، بينما تتطلب الكاميرات الاحترافية تصاريح.' : 'Mobile phone photography allowed free (no flash); tripods and DSLRs require permits.')}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#183B56]">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#C99A42]" />
                  <span>{language === 'ar' ? 'شرطة السياحة والآثار:' : 'Tourist Police:'}</span>
                </div>
                <span className="font-mono text-sm text-[#C99A42] font-bold">{settings.emergencyTouristPolice || '126'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
