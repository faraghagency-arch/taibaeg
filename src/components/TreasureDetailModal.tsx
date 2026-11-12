import React from 'react';
import { useData } from '../context/DataContext';
import { Treasure } from '../types';
import { X, MapPin, Clock, Ticket, Compass, Plus, Check, Sparkles, Building, Landmark } from 'lucide-react';

interface TreasureDetailModalProps {
  treasure: Treasure;
  onClose: () => void;
}

export const TreasureDetailModal: React.FC<TreasureDetailModalProps> = ({ treasure, onClose }) => {
  const { language, t, customRoute, addToRoute, removeFromRoute, setActiveModal } = useData();
  const isInRoute = customRoute.includes(treasure.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD0] my-8 max-h-[90vh] flex flex-col">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#C99A42] uppercase tracking-wider">
              {treasure.bank === 'east_bank' ? t('east_bank') : treasure.bank === 'west_bank' ? t('west_bank') : t('surroundings')}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-xs font-mono text-stone-500">{treasure.epoch[language] || treasure.epoch.ar}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-[#183B56] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero Image & Gallery Preview */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100">
              <img
                src={treasure.mainImage}
                alt={treasure.name[language] || treasure.name.ar}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 start-4 text-white">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo">
                  {treasure.name[language] || treasure.name.ar}
                </h2>
                <p className="text-sm font-cinzel text-stone-300">
                  {treasure.name.en}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Fact Badges Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#F7F2E8] p-4 rounded-2xl border border-[#E8DFD0]">
            <div>
              <span className="block text-stone-500">{t('pharaoh')}</span>
              <span className="font-bold text-[#183B56]">{treasure.pharaoh[language] || treasure.pharaoh.ar}</span>
            </div>
            <div>
              <span className="block text-stone-500">{t('hours')}</span>
              <span className="font-bold text-[#183B56]">{treasure.openingHours[language] || treasure.openingHours.ar}</span>
            </div>
            <div>
              <span className="block text-stone-500">{t('distance_km')}</span>
              <span className="font-bold text-[#183B56] font-mono">{treasure.distanceFromCenterKm} km</span>
            </div>
            <div>
              <span className="block text-stone-500">{t('ticket')}</span>
              <span className="font-bold text-[#183B56]">{treasure.ticketPrice[language] || treasure.ticketPrice.ar}</span>
            </div>
          </div>

          {/* Historical Overview */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#183B56] flex items-center gap-2 font-cairo">
              <Landmark className="w-4 h-4 text-[#C99A42]" />
              <span>{t('history')}</span>
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              {treasure.fullHistory[language] || treasure.fullHistory.ar}
            </p>
          </div>

          {/* Legend and Symbolism */}
          <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="text-base font-bold text-[#183B56] flex items-center gap-2 font-cairo">
              <Sparkles className="w-4 h-4 text-[#C99A42]" />
              <span>{t('story')}</span>
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed italic">
              «{treasure.story[language] || treasure.story.ar}»
            </p>
          </div>

          {/* Architectural Highlights & Must-See Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#183B56] flex items-center gap-1.5 font-cairo">
                <Building className="w-4 h-4 text-[#C99A42]" />
                <span>{t('highlights')}</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {treasure.architecturalHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C99A42] font-bold">▪</span>
                    <span>{hl[language] || hl.ar}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#183B56] flex items-center gap-1.5 font-cairo">
                <Sparkles className="w-4 h-4 text-[#C99A42]" />
                <span>{t('must_see')}</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {treasure.mustSee.map((ms, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C99A42] font-bold">▪</span>
                    <span>{ms[language] || ms.ar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location & Coordinates Box */}
          <div className="p-4 bg-[#F7F2E8] rounded-xl border border-[#E8DFD0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-stone-600">
              <MapPin className="w-4 h-4 text-[#C99A42]" />
              <span>
                {language === 'ar' ? 'الإحداثيات الجغرافية:' : 'Coordinates:'}{' '}
                <span className="font-mono">{treasure.coordinates.lat.toFixed(4)}°N, {treasure.coordinates.lng.toFixed(4)}°E</span>
              </span>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${treasure.coordinates.lat},${treasure.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#183B56] hover:text-[#C99A42] font-semibold underline underline-offset-2"
            >
              {language === 'ar' ? 'عرض على خرائط جوجل' : 'Open in Google Maps'} →
            </a>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-white border-t border-stone-200">
          <button
            onClick={() => (isInRoute ? removeFromRoute(treasure.id) : addToRoute(treasure.id))}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              isInRoute
                ? 'bg-[#C99A42] text-white shadow-sm'
                : 'bg-[#183B56] text-white hover:bg-[#102738]'
            }`}
          >
            {isInRoute ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t('in_route')}</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>{t('custom_route')}</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            {language === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
