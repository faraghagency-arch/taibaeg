import { Restaurant, Hotel } from '../types';

export const INITIAL_RESTAURANTS: Restaurant[] = [
  {
    id: 'rest_1886_winter_palace',
    name: {
      ar: 'مطعم 1886 التاريخي (وينتر بالاس)',
      en: '1886 Historic Restaurant (Winter Palace)',
      fr: 'Restaurant Historique 1886',
      es: 'Restaurante Histórico 1886',
      de: 'Historisches Restaurant 1886',
    },
    type: { ar: 'فاخر - فرنسي كلاسيكي ومصري راقٍ', en: 'Fine Dining - French & Gourmet Egyptian', fr: 'Haute gastronomie française et égyptienne', es: 'Alta cocina francesa y egipcia gourmet', de: 'Gehobene französische & ägyptische Küche' },
    atmosphere: { ar: 'قصر ملكي فكتوري فاخر بشمعدانات كريستالية وموسيقى بيانو حية وقواعد زي رسمية', en: 'Victorian palace ballroom with crystal chandeliers, live piano & formal dress code', fr: 'Palais victorien feutré, lustres de cristal et piano d’ambiance', es: 'Salón palaciego victoriano con candelabros de cristal y música de piano', de: 'Viktorianischer Ballsaal mit Kristallleuchtern und Klaviermusik' },
    description: {
      ar: 'مطعم أسطوري داخل فندق سوفيتيل ونتر بالاس التاريخي، تناول فيه ملوك وأباطرة وأجاثا كريستي عشاءهم. يقدم أرقى تجربة طعام في صعيد مصر.',
      en: 'An iconic culinary institution inside Sofitel Winter Palace where royalty and Agatha Christie dined. The pinnacle of luxury dining in Upper Egypt.',
      fr: 'Table mythique du Winter Palace où dînèrent rois et Agatha Christie. Le sommet du raffinement gastronomique.',
      es: 'Legendario salón donde cenaron monarcas y Agatha Christie. Máxima distinción gastronómica.',
      de: 'Legendenumwobenes Restaurant im Winter Palace, in dem Könige und Agatha Christie speisten.'
    },
    location: { ar: 'شارع كورنيش النيل - داخل فندق وينتر بالاس', en: 'Corniche el-Nil - inside Sofitel Winter Palace', fr: 'Corniche du Nil - Sofitel Winter Palace', es: 'Corniche del Nilo - Sofitel Winter Palace', de: 'Nilpromenade - im Sofitel Winter Palace' },
    bank: 'east_bank',
    specialtyDishes: [
      { ar: 'فيليه لحم تندلوين بصلصة الكمأة والريزوتو', en: 'Beef Tenderloin with truffle sauce & saffron risotto', fr: 'Filet de bœuf aux morilles et risotto safrané', es: 'Solomillo de ternera con trufa y risotto', de: 'Rinderfilet mit Trüffeljus & Safranrisotto' },
      { ar: 'سوفليه الشوكولاتة الداكنة مع توت النيل', en: 'Dark chocolate soufflé with fresh berries', fr: 'Soufflé au chocolat grand cru', es: 'Suflé de chocolate negro con frutos rojos', de: 'Dunkles Schokoladensoufflé mit Waldbeeren' }
    ],
    priceRange: '850 - 1,600 ج.م للفرد',
    image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    contact: '+20 95 2380422',
    coordinates: { lat: 25.6980, lng: 32.6375 },
  },
  {
    id: 'rest_sofra',
    name: {
      ar: 'مطعم سفرة التراثي',
      en: 'Sofra Traditional Restaurant & Cafe',
      fr: 'Restaurant Traditionnel Sofra',
      es: 'Restaurante Sofra Tradicional',
      de: 'Sofra Traditionelles Restaurant',
    },
    type: { ar: 'مطبخ مصري صعيدي وتراثي أصيل', en: 'Authentic Egyptian & Upper Egyptian Cuisine', fr: 'Cuisine égyptienne authentique et du terroir', es: 'Cocina egipcia tradicional y saidí', de: 'Authentische ägyptische & oberägyptische Küche' },
    atmosphere: { ar: 'بيت مصري كلاسيكي من ثلاثينيات القرن الماضي بأثاث أرابيسك وفسقية ماء ومرايا نحاسية', en: '1930s historic townhouse with arabesque woodwork, fountain courtyard & copper lamps', fr: 'Demeure des années 1930 avec patio à fontaine et boiseries ouvragées', es: 'Casona de los años 30 con patio andalusí y lámparas de cobre', de: 'Bürgerhaus der 1930er mit Brunnenhof und Arabesken-Schnitzereien' },
    description: {
      ar: 'أشهر مطعم يقدم المطبخ المصري التراثي بوصفاته الصعيدية الدقيقة: طواجن الفخار في الفرن البلدي، والملوخية بالأرانب، والبط بالبرتقال في أجواء حميمة.',
      en: 'Luxor’s beloved destination for home-style Egyptian feasts: clay pot tagines, aromatic molokhia, and slow-roasted duck in a peaceful heritage setting.',
      fr: 'Adresse incontournable pour les tajines mijotés au four en terre cuite, la corète potagère (molokhia) et le canard rôti.',
      es: 'El templo de la gastronomía casera: tajines al horno de barro, molojia tradicional y pato asado.',
      de: 'Beliebte Adresse für Tontopftagines, aromatische Molochiya und sanft geschmorte Entengerichte.'
    },
    location: { ar: 'شارع محمد فريد - وسط مدينة الأقصر', en: 'Mohamed Farid Street - Downtown Luxor', fr: 'Rue Mohamed Farid - centre de Louxor', es: 'Calle Mohamed Farid - centro de Lúxor', de: 'Mohamed-Farid-Straße - Zentrum Luxor' },
    bank: 'east_bank',
    specialtyDishes: [
      { ar: 'طاجن لحم الضأن بالبصل الأورما في الفخار الساخن', en: 'Slow-cooked lamb tagine with shallots & coriander', fr: 'Tajine d’agneau fondant aux échalotes confites', es: 'Tajín de cordero con chalotas y cilantro', de: 'Geschmortes Lammtagine mit Schalotten' },
      { ar: 'الحمام المحشي بالأرز المتبل والمكسرات', en: 'Roast squab (pigeon) stuffed with spiced rice & nuts', fr: 'Pigeonneaux farcis au riz parfumé et pignons', es: 'Pichón relleno de arroz especiado y frutos secos', de: 'Gefüllte Taube mit Duftreis und Nüssen' }
    ],
    priceRange: '280 - 550 ج.م للفرد',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    contact: '+20 95 2359752',
    coordinates: { lat: 25.7005, lng: 32.6410 },
  },
  {
    id: 'rest_al_sahaby_lane',
    name: {
      ar: 'مطعم ومقهى درب الصحابي (روف فيو)',
      en: 'Al-Sahaby Lane Rooftop Restaurant',
      fr: 'Restaurant Al-Sahaby Lane Rooftop',
      es: 'Restaurante Al-Sahaby Lane Terraza',
      de: 'Al-Sahaby Lane Dachterrassen-Restaurant',
    },
    type: { ar: 'مشويات وأكلات مصرية ومأكولات عالمية', en: 'Egyptian Grills, Local Dishes & International', fr: 'Grillades égyptiennes et plats internationaux', es: 'Parrillada egipcia y cocina internacional', de: 'Ägyptische Grillgerichte & internationale Küche' },
    atmosphere: { ar: 'شرفة بانورامية ساحرة تطل مباشرة على معبد الأقصر المضاء ونهر النيل وسوق الأقصر', en: 'Breathtaking rooftop terrace facing illuminated Luxor Temple, the Nile & lively bazaar', fr: 'Terrasse panoramique sur le toit face au temple de Louxor illuminé', es: 'Terraza panorámica sobre el templo de Lúxor iluminado y el Nilo', de: 'Dachterrasse mit Traumblick auf den beleuchteten Luxor-Tempel und den Nil' },
    description: {
      ar: 'يقدم تجربة طعام استثنائية في الهواء الطلق مع إطلالة لا تضاهى على صرح رمسيس الثاني ومسجد أبو الحجاج في قلب شارع السوق التاريخي.',
      en: 'Dine under open skies with unmatched frontline views of Ramesses II’s temple pylon while savoring camel burgers and succulent mixed grills.',
      fr: 'Dînez sous les étoiles avec une vue plongeante sur le pylône de Ramsès II en savourant d’excellentes grillades.',
      es: 'Cene bajo las estrellas con vista directa al pilono de Ramsés II disfrutando de jugosas brochetas.',
      de: 'Speisen unter dem Sternenhimmel mit direktem Blick auf den Pylon von Ramses II.'
    },
    location: { ar: 'شارع السوق القديم - أعلى فندق نفرتيتي', en: 'Old Souk Street - atop Nefertiti Hotel', fr: 'Rue du Souk - toit de l’hôtel Nefertiti', es: 'Calle del Zoco - azotea del Hotel Nefertiti', de: 'Alte Marktstraße - Dach Nefertiti Hotel' },
    bank: 'east_bank',
    specialtyDishes: [
      { ar: 'مشويات مشكلة على الفحم (كباب وكفتة وشيش طاووق)', en: 'Charcoal mixed grill skewer platter (Kebab & Kofta)', fr: 'Brochettes mixtes grillées au feu de bois', es: 'Parrillada mixta al carbón con kebab y kofta', de: 'Gemischte Grillplatte vom Holzkohlegrill' },
      { ar: 'برجر لحم الجمل المشوي مع البطاطس المتبلة', en: 'Gourmet lean camel meat burger with spiced wedges', fr: 'Burger de chameau raffiné aux épices orientales', es: 'Hamburguesa artesana de camello con especias', de: 'Würziger Kamelfleisch-Burger mit Gewürzkartoffeln' }
    ],
    priceRange: '220 - 420 ج.م للفرد',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    contact: '+20 95 2372386',
    coordinates: { lat: 25.7001, lng: 32.6398 },
  },
  {
    id: 'rest_el_kababgy',
    name: {
      ar: 'مطعم الكبابجي الأقصر',
      en: 'El-Kababgy Luxor',
      fr: 'El-Kababgy Louxor',
      es: 'El-Kababgy Lúxor',
      de: 'El-Kababgy Luxor',
    },
    type: { ar: 'مشويات شرقية ومشاوي على الفحم', en: 'Traditional Oriental Charcoal Grills', fr: 'Grillades orientales traditionnelles', es: 'Parrilladas orientales al carbón', de: 'Traditionelle Holzkohlegrills' },
    atmosphere: { ar: 'مطعم ندي مطل على كورنيش النيل بجلسات عائلية مريحة وخدمة سريعة', en: 'Riverside open terrace on the Corniche with casual family ambiance', fr: 'Terrasse décontractée au bord du fleuve pour toute la famille', es: 'Terraza frente al río ideal para familias', de: 'Flussterrasse an der Promenade mit familiärer Atmosphäre' },
    description: {
      ar: 'وجهة محبي الكباب والكفتة وريش الضأن الطازجة المشوية على الفحم النباتي الطبيعي مع الخبز البلدي الساخن والسلطات الشرقية المتنوعة.',
      en: 'A staple for charcoal-broiled lamb chops, seekh kebabs, freshly puffed pita bread, and tahini mezze along the river.',
      fr: 'La référence des côtelettes d’agneau braisées, kebabs moelleux et pains pitas tout juste sortis du four.',
      es: 'El referente para chuletillas de cordero al carbón, kofta y pan caliente recién horneado.',
      de: 'Treffpunkt für zarte Lammkoteletts, frisches Fladenbrot und orientalische Mezze am Nil.'
    },
    location: { ar: 'كورنيش النيل - أمام مرسى المراكب', en: 'Nile Corniche - opposite Boat Marina', fr: 'Corniche du Nil - face à la marina', es: 'Paseo marítimo frente a los embarcaderos', de: 'Nilpromenade gegenüber dem Bootsanleger' },
    bank: 'east_bank',
    specialtyDishes: [
      { ar: 'ريش ضأن متبلة على الفحم بالزعتر البري', en: 'Tender charcoal-grilled lamb chops with wild thyme', fr: 'Côtelettes d’agneau au thym sauvage', es: 'Chuletillas de cordero al carbón con tomillo', de: 'Zarte Lammkoteletts vom Holzkohlegrill' },
      { ar: 'تشكيلة مقبلات وسلطات شرقية (طحينة، بابا غنوج، تبولة)', en: 'Mezze sampler (Tahini, Baba Ghanoush, Tabbouleh)', fr: 'Assortiment de mezzés froids et chauds', es: 'Surtido de mezze con baba ganush y tahini', de: 'Mezze-Platte mit Baba Ghanoush & Tahina' }
    ],
    priceRange: '240 - 460 ج.م للفرد',
    image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    contact: '+20 95 2378899',
    coordinates: { lat: 25.7030, lng: 32.6415 },
  },
  {
    id: 'rest_marsam_west_bank',
    name: {
      ar: 'مطعم فندق المرسم (البر الغربي)',
      en: 'Marsam West Bank Garden Bistro',
      fr: 'Bistrot de Jardin Marsam',
      es: 'Restaurante Jardín Marsam',
      de: 'Marsam Garten-Bistro Westufer',
    },
    type: { ar: 'مطبخ عضوي طازج - مزرعة إلى المائدة', en: 'Farm-to-Table & Fresh Mediterranean-Egyptian', fr: 'Cuisine du jardin biologique et saveurs méditerranéennes', es: 'Cocina orgánica del huerto a la mesa', de: 'Bio-Gartenküche frisch vom Feld auf den Tisch' },
    atmosphere: { ar: 'حديقة شجرية هادئة تحت ظلال أشجار البوانسيانا والنخيل يرتادها علماء الآثار والفنانون', en: 'Peaceful garden oasis shaded by bougainvillea & flame trees, loved by archaeologists', fr: 'Oasis ombragée de bougainvilliers fréquentée par les égyptologues', es: 'Tranquilo jardín bajo buganvillas frecuentado por arqueólogos', de: 'Ruhige Gartenoase im Schatten von Bougainvilleen, Treffpunkt der Archäologen' },
    description: {
      ar: 'مطعم تاريخي في قلب البر الغربي قرب وادي الملوك؛ تأسس في بيت الفنانين ويقدم أطباقاً محضرة يومياً من خضروات مزرعته الخاصة وأسماك النيل الطازجة.',
      en: 'A historic artists retreat on the West Bank serving organic seasonal vegetables grown on premises and fresh Nile catches in a tranquil courtyard.',
      fr: 'Maison historique des artistes sur la rive ouest servant des produits bio cueillis le jour même.',
      es: 'Histórico refugio de artistas en la orilla oeste con hortalizas frescas de su propia huerta.',
      de: 'Traditioneller Künstlertreffpunkt am Westufer mit erntefrischem Bio-Gemüse aus eigenem Anbau.'
    },
    location: { ar: 'البر الغربي - قرب تمثالي ممنون والقرنة', en: 'West Bank - near Colossi of Memnon & Qurna', fr: 'Rive ouest - près des Colosses de Memnon', es: 'Orilla oeste - cerca de los Colosos de Memnón', de: 'Westufer nahe den Memnonkolossen' },
    bank: 'west_bank',
    specialtyDishes: [
      { ar: 'فيليه سمك الساموس النيلي المتبل بالأعشاب والليمون', en: 'Fresh grilled Nile perch fillet with garden herbs & lemon', fr: 'Filet de perche du Nil aux herbes du jardin', es: 'Filete de perca del Nilo con hierbas aromáticas', de: 'Gegrilltes Nilbarschfilet mit Gartenkräutern' },
      { ar: 'شوربة العدس الأصفر الصعيدية مع الخبز المحمص والكمون', en: 'Traditional golden lentil soup with cumin crisps', fr: 'Velouté de lentilles corail au cumin', es: 'Sopa de lentejas amarillas al comino', de: 'Gelbe Linsensuppe mit Kreuzkümmel' }
    ],
    priceRange: '260 - 490 ج.م للفرد',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    contact: '+20 95 2310023',
    coordinates: { lat: 25.7230, lng: 32.6100 },
  },
  {
    id: 'rest_nubian_house_sunset',
    name: {
      ar: 'البيت النوبي ومقهى الغروب (النيل)',
      en: 'Nubian House & Sunset Cafe',
      fr: 'Maison Nubienne & Café du Couchant',
      es: 'Casa Nubia y Café del Atardecer',
      de: 'Nubisches Haus & Sunset Café',
    },
    type: { ar: 'مقهى ومأكولات نوبية وصعيدية على ضفاف النيل', en: 'Nubian & Upper Egyptian Riverside Lounge', fr: 'Spécialités nubiennes en bordure du Nil', es: 'Especialidades nubias frente al agua', de: 'Nubische Spezialitäten am Flussufer' },
    atmosphere: { ar: 'مقاعد ملونة منسوجة يدوياً على حافة الماء مباشرة مع إطلالة على الجزر النيلية وغروب الشمس', en: 'Vibrant woven cushions right at the water’s edge facing river islands and twilight', fr: 'Coussins multicolores au bord de l’eau face aux îles fluviales', es: 'Cojines artesanales al borde del agua contemplando el ocaso', de: 'Bunte Webkissen direkt am Wasser mit Blick auf Flussinseln' },
    description: {
      ar: 'موقع استثنائي للاسترخاء بعد يوم حافل بالمعابد؛ استمتع بشرب شاي الكركديه الأسواني المثلج أو القهوة بالجبنة والمشروبات الطبيعية.',
      en: 'The perfect waterfront wind-down after temple treks; famous for iced ruby-red karkadeh, freshly roasted coffee, and sunset vistas.',
      fr: 'Halte parfaite après la visite des temples : karkadé glacé, café traditionnel à la cardamome et coucher de soleil.',
      es: 'El rincón ideal para descansar con un refrescante karkadé de hibisco y atardeceres mágicos.',
      de: 'Der ideale Ort zum Entspannen nach den Tempeln: geeister Karkadeh-Tee und Traum-Sonnenuntergänge.'
    },
    location: { ar: 'البر الغربي - ضفاف النيل بالرملة', en: 'West Bank - Ramla Waterfront', fr: 'Rive ouest - Ramla', es: 'Orilla oeste - paseo de Ramla', de: 'Westufer - Ramla-Ufer' },
    bank: 'west_bank',
    specialtyDishes: [
      { ar: 'مشروب الكركديه الأسواني الطبيعي والجبنة النوبية بالزنجبيل', en: 'Pure chilled Aswan hibiscus tea & ginger-spiced Nubian coffee', fr: 'Karkadé d’Assouan glacé et café au gingembre', es: 'Karkadé fresco de Asuán y café con jengibre', de: 'Assuan-Karkadeh auf Eis und Ingwer-Kaffee' },
      { ar: 'فطير بالسمن البلدي والعسل الأسود والطحينة', en: 'Fresh layered pastry with organic black sugarcane molasses', fr: 'Feuilleté chaud au miel de canne noir', es: 'Hojaldre casero con miel de caña negra', de: 'Frisches Schichtgebäck mit Rohrzuckermelasse' }
    ],
    priceRange: '120 - 250 ج.م للفرد',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    contact: '+20 100 2345678',
    coordinates: { lat: 25.7100, lng: 32.6300 },
  },
];

export const INITIAL_HOTELS: Hotel[] = [
  {
    id: 'hotel_winter_palace',
    name: {
      ar: 'فندق سوفيتيل ليجند ونتر بالاس الأقصر',
      en: 'Sofitel Legend Old Winter Palace Luxor',
      fr: 'Sofitel Legend Old Winter Palace',
      es: 'Sofitel Legend Old Winter Palace',
      de: 'Sofitel Legend Old Winter Palace Luxor',
    },
    category: 'historic',
    stars: 5,
    bank: 'east_bank',
    description: {
      ar: 'قصر تاريخي بني عام 1886 على ضفاف النيل مباشرة؛ استضاف الملوك والملكات وشهد إعلان هوارد كارتر اكتشاف مقبرة توت عنخ آمون عام 1922.',
      en: 'Built in 1886 on the Nile riverfront; hosted emperors, world leaders, and Howard Carter when he announced Tutankhamun’s discovery.',
      fr: 'Édifié en 1886 sur les rives du Nil ; légendaire palace ayant accueilli souverains et l’annonce de la découverte de Toutânkhamon.',
      es: 'Palacio histórico de 1886 frente al Nilo; alojó a reyes y fue donde Howard Carter anunció el hallazgo de Tutankamón.',
      de: '1886 am Nilufer erbaut; legendäres Palasthotel, in dem Howard Carter die Entdeckung Tutanchamuns verkündete.'
    },
    features: [
      { ar: 'حدائق نباتية استوائية عريقة تمتد على 6 فدانات', en: '6 acres of historic heritage tropical gardens', fr: 'Parc botanique tropical de plusieurs hectares', es: '6 acres de jardines tropicales centenarios', de: 'Historischer Tropengarten auf über 2 Hektar' },
      { ar: 'مسبح خارجي مدفأ محاط بأشجار النخيل الملكية', en: 'Heated outdoor swimming pool amid royal palms', fr: 'Piscine extérieure chauffée sous les palmiers', es: 'Piscina climatizada entre palmeras reales', de: 'Beheizter Außenpool inmitten von Königspalmen' },
      { ar: 'إطلالة مباشرة على كورنيش النيل وجبال البر الغربي', en: 'Frontline panoramic Nile & Theban hills views', fr: 'Vue plongeante sur le Nil et la chaîne thébaine', es: 'Vistas panorámicas directas al Nilo', de: 'Direkter Panoramablick auf den Nil' }
    ],
    priceRange: 'تبدأ من 8,500 ج.م / ليلة',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    location: { ar: 'شارع كورنيش النيل - الأقصر', en: 'Corniche el-Nil - Central Luxor', fr: 'Corniche du Nil - Centre de Louxor', es: 'Corniche del Nilo - Centro', de: 'Nilpromenade - Zentrum Luxor' },
    contact: '+20 95 2380422',
    coordinates: { lat: 25.6982, lng: 32.6378 },
  },
  {
    id: 'hotel_hilton_luxor',
    name: {
      ar: 'منتجع وسبا هيلتون الأقصر',
      en: 'Hilton Luxor Resort & Spa',
      fr: 'Hilton Luxor Resort & Spa',
      es: 'Hilton Luxor Resort & Spa',
      de: 'Hilton Luxor Resort & Spa',
    },
    category: 'luxury',
    stars: 5,
    bank: 'east_bank',
    description: {
      ar: 'منتجع فاخر شمال معبد الكرنك يتميز بمسابح إنفينيتي مذهلة تطل مباشرة على مياه النيل والمراكب الشراعية وسبا عالمي شامل.',
      en: 'Luxury resort north of Karnak featuring dual infinity pools gazing over the Nile and Egypt’s premier holistic wellness spa.',
      fr: 'Resort d’exception au nord de Karnak avec piscines à débordement sur le Nil et spa de renommée mondiale.',
      es: 'Complejo de lujo al norte de Karnak con piscinas infinitas sobre el Nilo y spa de clase mundial.',
      de: 'Luxusresort nördlich von Karnak mit spektakulären Infinity-Pools am Nil und erstklassigem Wellness-Spa.'
    },
    features: [
      { ar: 'مسابح إنفينيتي مزدوجة تنعكس على مياه النيل', en: 'Twin Nile-front infinity pools with sunset cabanas', fr: 'Deux piscines à débordement face au coucher de soleil', es: 'Dos piscinas infinitas con cabañas frente al río', de: 'Zwei Infinity-Pools am Nilufer mit Sonnenuntergangs-Pavillons' },
      { ar: 'سبا نايلا الحائز على جوائز عالمية للعلاجات الشاملة', en: 'Award-winning Nayara Holistic Wellness Spa', fr: 'Spa holistique Nayara primé internationalement', es: 'Spa holístico de lujo galardonado', de: 'Preisgekrönter Nayara Holistic Spa' },
      { ar: 'جلسات عشاء خاصة على شاطئ النيل', en: 'Private waterfront candlelight dinner settings', fr: 'Dîners aux chandelles en bord de fleuve', es: 'Cenas románticas a la luz de las velas junto al agua', de: 'Romantische Candlelight-Dinner am Nilufer' }
    ],
    priceRange: 'تبدأ من 7,200 ج.م / ليلة',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    location: { ar: 'الكرنك الجديد - شمال الأقصر', en: 'New Karnak - North Luxor', fr: 'Nouveau Karnak - Nord de Louxor', es: 'Nuevo Karnak - Norte de Lúxor', de: 'Neu-Karnak - Nördliches Luxor' },
    contact: '+20 95 2374933',
    coordinates: { lat: 25.7330, lng: 32.6620 },
  },
  {
    id: 'hotel_al_moudira',
    name: {
      ar: 'فندق الموديرة البوتيكي (قصر البر الغربي)',
      en: 'Al Moudira Hotel (West Bank Boutique Palace)',
      fr: 'Hôtel Al Moudira (Palais de charme Rive Ouest)',
      es: 'Hotel Al Moudira (Palacio Boutique Orilla Oeste)',
      de: 'Al Moudira Hotel (Boutique-Palasthotel Westufer)',
    },
    category: 'boutique',
    stars: 5,
    bank: 'west_bank',
    description: {
      ar: 'تحفة معمارية ساحرة مستوحاة من ألف ليلة وليلة؛ قباب شرقية، وأفنية أندلسية، ونوافير رخامية، وزليج يدوي الصنع في قلب واحة البر الغربي.',
      en: 'An Arabian Nights palace of domes, arched courtyards, marble fountains, and hand-painted frescoes at the gateway to the Theban desert.',
      fr: 'Joyau digne des Mille et Une Nuits : coupoles, patios andalous, fontaines de marbre et zelliges artisanaux.',
      es: 'Palacio de cuento oriental con cúpulas, patios andalusíes y fuentes de mármol a los pies del desierto.',
      de: 'Ein Palast wie aus Tausendundeiner Nacht: Kuppeln, orientalische Patios, Marmorbrunnen und handbemalte Fresken.'
    },
    features: [
      { ar: 'أفنية داخلية خاصة بكل جناح مع نوافير وأشجار ليمون', en: 'Private courtyards with lemon trees & marble fountains', fr: 'Patios privatifs fleuris et fontaines murmurantes', es: 'Patios privados con limoneros y fuentes', de: 'Private Innenhöfe mit Zitronenbäumen & Brunnen' },
      { ar: 'حمام سباحة تركي محاط بأعمدة حجرية وحدائق صحراوية', en: 'Ottoman-style pool flanked by stone columns and gardens', fr: 'Bassin d’inspiration ottomane et colonnades', es: 'Piscina de estilo otomano rodeada de columnas', de: 'Osmanischer Pool im üppigen Wüstengarten' }
    ],
    priceRange: 'تبدأ من 6,800 ج.م / ليلة',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    location: { ar: 'البر الغربي - طريق حجر الضباع', en: 'West Bank - Hager el-Dabbeya', fr: 'Rive ouest - Hager el-Dabbeya', es: 'Orilla oeste - Hager el-Dabbeya', de: 'Westufer - Hager el-Dabbeya' },
    contact: '+20 122 3251307',
    coordinates: { lat: 25.6800, lng: 32.5800 },
  },
  {
    id: 'hotel_steigenberger_nile_palace',
    name: {
      ar: 'فندق شتايجنبرجر نايل بالاس',
      en: 'Steigenberger Nile Palace Luxor',
      fr: 'Steigenberger Nile Palace',
      es: 'Steigenberger Nile Palace',
      de: 'Steigenberger Nile Palace Luxor',
    },
    category: 'riverside',
    stars: 5,
    bank: 'east_bank',
    description: {
      ar: 'فندق عالمي فاخر على ضفاف النيل مباشرة، يضم مرافئ خاصة للمراكب ومطاعم متعددة وإطلالات خلابة على مياه النيل وجبال طيبة.',
      en: 'A premier 5-star riverfront hotel with private docks, landscaped terraces, and direct vistas of the sunset over the Theban mountains.',
      fr: 'Hôtel 5 étoiles de référence au bord de l’eau, doté de pontons privés et de superbes terrasses.',
      es: 'Hotel 5 estrellas a orillas del Nilo con embarcadero propio y terrazas con vistas al atardecer.',
      de: 'Erstklassiges 5-Sterne-Uferhotel mit eigenem Anleger und atemberaubender Aussicht auf das thebanische Gebirge.'
    },
    features: [
      { ar: 'مسبح رحب على ضفة النيل مع تراس تشميس واسع', en: 'Expansive Nile-view pool & sundeck promenade', fr: 'Piscine panoramique avec solarium au bord du Nil', es: 'Gran piscina y solárium panorámico sobre el Nilo', de: 'Großzügiger Pool mit Liegeterrasse direkt am Nil' },
      { ar: 'مطاعم متنوعة (إيطالي، لبناني، ومصري)', en: 'Multiple dining venues (Italian, Lebanese, Egyptian)', fr: 'Restaurants variés (italien, libanais, égyptien)', es: 'Restaurantes temáticos italiano, libanés y local', de: 'Vielfältige Restaurants (italienisch, libanesisch, ägyptisch)' }
    ],
    priceRange: 'تبدأ من 4,200 ج.م / ليلة',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    location: { ar: 'شارع خالد بن الوليد - كورنيش النيل', en: 'Khaled Ibn el-Waleed St - Nile Corniche', fr: 'Rue Khaled Ibn el-Waleed - Corniche', es: 'Calle Jaled Ibn el-Walid - Corniche', de: 'Khaled-Ibn-el-Waleed-Str. - Nilpromenade' },
    contact: '+20 95 2366999',
    coordinates: { lat: 25.6885, lng: 32.6315 },
  },
  {
    id: 'hotel_marsam_guesthouse',
    name: {
      ar: 'فندق وبيت ضيافة المرسم التراثي',
      en: 'Marsam Hotel & Cultural Guesthouse',
      fr: 'Hôtel & Maison d’Hôtes Marsam',
      es: 'Hotel y Casa de Huéspedes Marsam',
      de: 'Marsam Kultur-Gästehaus & Hotel',
    },
    category: 'eco_heritage',
    stars: 3,
    bank: 'west_bank',
    description: {
      ar: 'الملتقى التاريخي الأسطوري للعلماء وفناني البر الغربي، مبني بالطوب اللبن والقباب الطينية بجوار المعابد الجنائزية في أجواء هدوء وسكينة تامة.',
      en: 'The legendary gathering place of world Egyptologists and artists, built with traditional adobe domes right beside the West Bank necropolis.',
      fr: 'Refuge mythique des égyptologues et artistes, chambres voûtées en pisé au cœur des sites antiques.',
      es: 'Mítico albergue de egiptólogos con arquitectura de adobe tradicional junto a los templos.',
      de: 'Legendärer Treffpunkt von Ägyptologen und Künstlern mit traditionellen Lehmziegel-Gewölben nahe den Ausgrabungen.'
    },
    features: [
      { ar: 'غرف مبنية على الطراز النوبي بالقباب الطينية العازلة للحرارة', en: 'Earth-brick vaulted rooms naturally temperature controlled', fr: 'Chambres voûtées en brique crue fraîches naturellement', es: 'Habitaciones abovedadas de adobe bioclimáticas', de: 'Traditionelle Gewölbezimmer aus Lehmziegeln' },
      { ar: 'حديقة ريفية هادئة وقرب فائق من تمثالي ممنون ووادي الملوك', en: 'Tranquil garden walking distance to Colossi of Memnon', fr: 'Jardin paisible à deux pas des Colosses de Memnon', es: 'Jardín sereno a pasos de los Colosos de Memnón', de: 'Ruhiger Garten nur wenige Minuten von den Memnonkolossen' }
    ],
    priceRange: 'تبدأ من 1,800 ج.م / ليلة',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    location: { ar: 'البر الغربي - القرنة بجوار تمثالي ممنون', en: 'West Bank - Qurna near Colossi of Memnon', fr: 'Rive ouest - Gournah près de Memnon', es: 'Orilla oeste - Qurna junto a Memnón', de: 'Westufer - Qurna nahe den Memnonkolossen' },
    contact: '+20 95 2310023',
    coordinates: { lat: 25.7235, lng: 32.6102 },
  },
  {
    id: 'hotel_nefertiti_luxor',
    name: {
      ar: 'فندق نفرتيتي (المطل على معبد الأقصر)',
      en: 'Nefertiti Hotel (Luxor Temple View)',
      fr: 'Hôtel Nefertiti Louxor',
      es: 'Hotel Nefertiti Lúxor',
      de: 'Nefertiti Hotel Luxor',
    },
    category: 'budget',
    stars: 3,
    bank: 'east_bank',
    description: {
      ar: 'فندق أصيل ومحبوب في قلب سوق الأقصر القديم يشتهر بإطلالته المباشرة المذهلة على معبد الأقصر وأجوائه الودودة الدافئة للمسافرين.',
      en: 'A beloved, characterful hotel in the heart of the pedestrian bazaar, famed for its rooftop gazing directly into Luxor Temple.',
      fr: 'Hôtel chaleureux et convivial au cœur du vieux marché piéton, vue imprenable sur le temple de Louxor.',
      es: 'Acogedor hotel en el corazón del zoco peatonal con fabulosa azotea frente al templo.',
      de: 'Beliebtes Hotel im Herzen des Fußgänger-Basars mit spektakulärer Dachterrasse gegenüber dem Luxor-Tempel.'
    },
    features: [
      { ar: 'تراس السطح الشهير المطل على صرح رمسيس الثاني ومسجد أبو الحجاج', en: 'Famous rooftop terrace overlooking Ramesses II pylon', fr: 'Toit-terrasse mythique face au pylône de Ramsès II', es: 'Azotea con vistas privilegiadas al templo de Lúxor', de: 'Berühmte Dachterrasse mit Blick auf den Ramses-Pylon' },
      { ar: 'موقع استراتيجي وسط الأسواق والخدمات ومحطة القطار', en: 'Strategic downtown pedestrian location near markets & station', fr: 'Situation centrale idéale dans les ruelles commerçantes', es: 'Ubicación inmejorable en la zona comercial peatonal', de: 'Top-Lage im lebendigen Marktviertel unweit des Bahnhofs' }
    ],
    priceRange: 'تبدأ من 1,200 ج.م / ليلة',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    location: { ar: 'شارع السوق السياحي - وسط الأقصر', en: 'Old Market Street - Downtown Luxor', fr: 'Rue du Souk - Centre Louxor', es: 'Calle del Mercado - Centro', de: 'Basarstraße - Zentrum Luxor' },
    contact: '+20 95 2372386',
    coordinates: { lat: 25.7000, lng: 32.6395 },
  },
];
