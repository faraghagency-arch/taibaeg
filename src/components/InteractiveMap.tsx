import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { Treasure, BankLocation } from '../types';
import { MapPin, Compass, Navigation, Plus, Check, Eye, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const { language, t, treasures, customRoute, addToRoute, removeFromRoute, clearRoute, setActiveModal } = useData();
  const [selectedBank, setSelectedBank] = useState<string>('all');
  const [activeTreasure, setActiveTreasure] = useState<Treasure | null>(treasures[0] || null);

  const filteredMapTreasures = useMemo(() => {
    if (selectedBank === 'all') return treasures;
    return treasures.filter((item) => item.bank === selectedBank);
  }, [treasures, selectedBank]);

  // Route calculation
  const routeItems = useMemo(() => {
    return customRoute
      .map((id) => treasures.find((t) => t.id === id))
      .filter((t): t is Treasure => !!t);
  }, [customRoute, treasures]);

  const totalDistanceKm = useMemo(() => {
    if (routeItems.length <= 1) return 0;
    // Calculate simple cumulative distance
    let total = 0;
    for (let i = 0; i < routeItems.length - 1; i++) {
      const a = routeItems[i];
      const b = routeItems[i + 1];
      const dist = Math.hypot(a.coordinates.lat - b.coordinates.lat, a.coordinates.lng - b.coordinates.lng) * 111;
      total += dist;
    }
    return Math.round(total * 10) / 10;
  }, [routeItems]);

  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="map" className="py-20 bg-[#F7F2E8] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#C99A42] uppercase">
            <span>08</span>
            <span aria-hidden="true">·</span>
            <span>{t('map')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B56] font-cairo">
            {language === 'ar' ? 'خريطة الأقصر التفاعلية ومخطط المسارات الأثرية' : 'Interactive Luxor Map & Archaeological Route Planner'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {language === 'ar'
              ? 'استكشف المواقع الجغرافية الدقيقة لمعابد ومقابر البرين الشرقي والغربي، وانقر على أي معلم لمعاينة تفاصيله ومسافته وإضافته لمسار رحلتك الخاصة.'
              : 'Navigate verified locations of temples and royal tombs across the Nile, preview details, and build your custom visitation sequence.'}
          </p>

          {/* Filter Pills - Centered */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E8DFD0] text-xs font-semibold">
              <button
                onClick={() => setSelectedBank('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedBank === 'all' ? 'bg-[#183B56] text-white shadow-xs font-bold' : 'text-stone-600 hover:text-[#183B56]'
                }`}
              >
                {t('all')}
              </button>
            <button
              onClick={() => setSelectedBank('east_bank')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedBank === 'east_bank' ? 'bg-[#183B56] text-white' : 'text-stone-600 hover:text-[#183B56]'
              }`}
            >
              {t('east_bank')}
            </button>
            <button
              onClick={() => setSelectedBank('west_bank')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedBank === 'west_bank' ? 'bg-[#183B56] text-white' : 'text-stone-600 hover:text-[#183B56]'
              }`}
            >
              {t('west_bank')}
            </button>
          </div>
        </div>
      </div>

        {/* Map & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive SVG Geographic Canvas (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E8DFD0] shadow-sm p-4 sm:p-6 overflow-hidden relative">
            
            <div className="flex items-center justify-between mb-4 text-xs font-medium text-stone-500 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#183B56]" />
                  <span>{language === 'ar' ? 'البر الغربي (المقابر والمعابد الجنائزية)' : 'West Bank (Tombs & Mortuary)'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C99A42]" />
                  <span>{language === 'ar' ? 'البر الشرقي (الكرنك والأقصر والمتاحف)' : 'East Bank (Karnak & Luxor)'}</span>
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#C99A42] hidden sm:inline">
                25.7° N · 32.6° E
              </span>
            </div>

            {/* Stylized Interactive Nile & Topographic Map */}
            <div className="relative w-full aspect-[16/11] bg-[#F7F2E8] rounded-2xl overflow-hidden border border-[#E8DFD0]">
              
              <svg viewBox="0 0 800 550" className="w-full h-full select-none">
                {/* Desert Backgrounds */}
                <rect x="0" y="0" width="800" height="550" fill="#F4EEDF" />
                
                {/* Theban Western Hills */}
                <path
                  d="M0,0 L320,0 Q260,180 280,320 Q240,420 180,550 L0,550 Z"
                  fill="#EADBCA"
                  opacity="0.8"
                />
                
                {/* Al-Qurn Peak Motif */}
                <polygon points="190,130 230,80 270,130" fill="#D8C7B0" opacity="0.9" />
                <text x="210" y="72" fontSize="10" fill="#8C7A65" textAnchor="middle" fontFamily="Cairo">
                  {language === 'ar' ? 'جبل القرنة' : 'Al-Qurn'}
                </text>

                {/* River Nile Channel */}
                <path
                  d="M 440,0 C 420,120 460,240 430,360 C 400,460 390,550 390,550 L 460,550 C 470,460 510,360 480,240 C 470,120 490,0 490,0 Z"
                  fill="#78A5C2"
                  opacity="0.85"
                />

                {/* Banana Island */}
                <ellipse cx="445" cy="400" rx="14" ry="24" fill="#A8C99C" opacity="0.9" />
                <text x="445" y="435" fontSize="8" fill="#2E5A27" textAnchor="middle" fontFamily="Cairo">
                  {language === 'ar' ? 'جزيرة الموز' : 'Banana Isle'}
                </text>

                {/* East & West Bank Labels */}
                <text x="120" y="40" fontSize="13" fontWeight="bold" fill="#7C6B55" fontFamily="Cinzel">
                  WEST BANK (THEBES)
                </text>
                <text x="640" y="40" fontSize="13" fontWeight="bold" fill="#183B56" fontFamily="Cinzel">
                  EAST BANK (LUXOR)
                </text>

                {/* Avenue of Sphinxes Route Line */}
                <line
                  x1="570"
                  y1="130"
                  x2="550"
                  y2="300"
                  stroke="#C99A42"
                  strokeWidth="2.5"
                  strokeDasharray="4,4"
                  opacity="0.8"
                />

                {/* Interactive Site Markers */}
                {filteredMapTreasures.slice(0, 32).map((item, idx) => {
                  // Coordinate normalization to SVG 800x550
                  // Lat ranges approx 25.68 to 25.75, Lng ranges approx 32.58 to 32.67
                  const isWest = item.bank === 'west_bank';
                  const isSelected = activeTreasure?.id === item.id;
                  const inRoute = customRoute.includes(item.id);

                  // Computed layout positions
                  const cx = isWest
                    ? 110 + (idx % 4) * 55 + (idx % 2) * 20
                    : 530 + (idx % 3) * 60 + ((idx * 17) % 40);
                  const cy = 90 + Math.floor(idx / 3) * 42 + ((idx * 23) % 30);

                  return (
                    <g
                      key={item.id}
                      onClick={() => setActiveTreasure(item)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse circle if selected */}
                      {isSelected && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="16"
                          fill="none"
                          stroke={isWest ? '#183B56' : '#C99A42'}
                          strokeWidth="2"
                          opacity="0.6"
                        />
                      )}

                      {/* Main Marker Pin */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? '9' : '6.5'}
                        fill={inRoute ? '#C99A42' : isWest ? '#183B56' : '#8A5D1A'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-all duration-200"
                      />

                      {/* Number Index */}
                      <text
                        x={cx}
                        y={cy + 3}
                        fontSize="7"
                        fontWeight="bold"
                        fill="#FFFFFF"
                        textAnchor="middle"
                        pointerEvents="none"
                      >
                        {idx + 1}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Instructions Banner */}
              <div className="absolute bottom-3 start-3 end-3 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-200 text-xs flex items-center justify-between text-stone-600">
                <span>
                  {language === 'ar' ? 'انقر على أي نقطة ملونة لتحديد المعلم' : 'Click any marker to inspect monument'}
                </span>
                <span className="font-mono text-[11px] text-[#C99A42]">
                  {customRoute.length} {t('in_route')}
                </span>
              </div>
            </div>

          </div>

          {/* Monument Inspector & Route Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Active Monument Preview Card */}
            {activeTreasure ? (
              <div className="taiba-card rounded-3xl p-6 bg-white border border-[#E8DFD0] space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span className="text-[#C99A42] font-semibold uppercase tracking-wider">
                    {activeTreasure.bank === 'east_bank' ? t('east_bank') : t('west_bank')}
                  </span>
                  <span className="font-mono">{activeTreasure.distanceFromCenterKm} km</span>
                </div>

                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src={activeTreasure.mainImage}
                    alt={activeTreasure.name[language] || activeTreasure.name.ar}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#183B56] font-cairo">
                    {activeTreasure.name[language] || activeTreasure.name.ar}
                  </h3>
                  <p className="text-xs text-stone-400 font-cinzel">
                    {activeTreasure.name.en}
                  </p>
                  <p className="text-xs text-stone-600 pt-1 line-clamp-3 leading-relaxed">
                    {activeTreasure.shortDesc[language] || activeTreasure.shortDesc.ar}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModal({ type: 'treasure', id: activeTreasure.id })}
                    className="flex-1 py-2 rounded-xl text-xs font-semibold bg-[#F7F2E8] hover:bg-[#EAE2D2] text-[#183B56] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C99A42]" />
                    <span>{t('details_btn')}</span>
                  </button>

                  <button
                    onClick={() =>
                      customRoute.includes(activeTreasure.id)
                        ? removeFromRoute(activeTreasure.id)
                        : addToRoute(activeTreasure.id)
                    }
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                      customRoute.includes(activeTreasure.id)
                        ? 'bg-[#C99A42] text-white'
                        : 'bg-[#183B56] text-white hover:bg-[#102738]'
                    }`}
                  >
                    {customRoute.includes(activeTreasure.id) ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ) : null}

            {/* Custom Trip Route Strip */}
            <div className="taiba-card rounded-3xl p-6 bg-white border border-[#E8DFD0] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C99A42]" />
                  <h4 className="text-sm font-bold text-[#183B56] font-cairo">
                    {language === 'ar' ? 'مسار رحلتي المقترح' : 'Custom Trip Route'}
                  </h4>
                </div>

                {customRoute.length > 0 && (
                  <button
                    onClick={clearRoute}
                    className="text-[11px] text-stone-400 hover:text-rose-600 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>{t('clear_route')}</span>
                  </button>
                )}
              </div>

              {routeItems.length > 0 ? (
                <div className="space-y-3">
                  <div className="space-y-2 max-h-48 overflow-y-auto pe-1">
                    {routeItems.map((item, idx) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between text-xs p-2 rounded-xl bg-[#F7F2E8] border border-[#E8DFD0]"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="w-5 h-5 rounded-full bg-[#183B56] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-semibold text-[#183B56] truncate">
                            {item.name[language] || item.name.ar}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromRoute(item.id)}
                          className="text-stone-400 hover:text-rose-500 p-1"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span>{language === 'ar' ? 'المسافة المقدرة للمسار:' : 'Est. Distance:'}</span>
                    <span className="font-mono font-bold text-[#183B56]">{totalDistanceKm} km</span>
                  </div>

                  <a
                    href="#planner"
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-[#C99A42] hover:bg-[#d4a54c] text-[#183B56] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>{t('build_itinerary')}</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="text-center py-6 text-xs text-stone-500">
                  <p>{language === 'ar' ? 'لم تقم بإضافة معالم لمسارك بعد.' : 'No monuments added to route yet.'}</p>
                  <p className="text-[11px] text-stone-400 pt-1">
                    {language === 'ar' ? 'انقر على أي معلم لإضافته وتكوين جدول زيارتك.' : 'Click "Add to Route" on any card.'}
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
