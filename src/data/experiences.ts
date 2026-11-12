import { Experience } from '../types';

export const INITIAL_EXPERIENCES: Experience[] = [
  {
    id: 'hot_air_balloon_sunrise',
    title: {
      ar: 'رحلة البالون الطائر عند شروق الشمس',
      en: 'Sunrise Hot Air Balloon Flight',
      fr: 'Vol en montgolfière au lever du soleil',
      es: 'Vuelo en globo aerostático al amanecer',
      de: 'Heißluftballonfahrt zum Sonnenaufgang',
    },
    category: 'air',
    duration: { ar: '45 - 60 دقيقة طيران (3 ساعات للرحلة كاملة)', en: '45 - 60 min flight (3 hrs total)', fr: '45 - 60 min de vol (3h au total)', es: '45 - 60 min de vuelo (3h en total)', de: '45 - 60 Min Flugzeit (3 Std gesamt)' },
    priceNote: { ar: 'تبدأ من 1,400 ج.م للمصريين / $55 للأجانب', en: 'From 1,400 EGP ($55 USD) per person', fr: 'Dès 1 400 EGP (~55 USD) / pers.', es: 'Desde 1.400 EGP (~$55 USD) / pers.', de: 'Ab 1.400 EGP (~$55 USD) p.P.' },
    shortDesc: {
      ar: 'تحليق مهيب فوق معابد البر الغربي ووادي الملوك ونهر النيل الخالد مع بزوغ أولى خيوط الفجر الذهبية.',
      en: 'A breathtaking flight above the West Bank temples, Valley of the Kings, and the timeless Nile at dawn.',
      fr: 'Survol majestueux des temples de la rive ouest et du Nil aux premières lueurs dorées de l’aube.',
      es: 'Majestuoso vuelo sobre los templos de Tebas y el Nilo eterno con los primeros rayos del amanecer.',
      de: 'Ein atemberaubender Flug über die Totentempel, das Tal der Könige und den Nil im goldenen Morgenlicht.',
    },
    fullDesc: {
      ar: 'تبدأ التجربة فجراً بعبور النيل في قارب نهري، ثم الانتقال لموقع الإقلاع بالبر الغربي. يرتفع البالون مع نسيم الصباح الباكر لترى معبد حتشبسوت وعملاقي ممنون والحقول الخضراء الممتدة تلتقي برمال الصحراء في مشهد بانورامي لا ينسى.',
      en: 'Begins pre-dawn with a boat crossing to the West Bank launch site. Float serenely as the sun illuminates Hatshepsut’s terraces, the Colossi of Memnon, and emerald sugar cane fields.',
      fr: 'Départ aux aurores en bateau vers la rive ouest. Le ballon s’élève doucement pour dévoiler les terrasses d’Hatchepsout, les Colosses de Memnon et les palmeraies du Nil.',
      es: 'Inicia antes del alba cruzando el Nilo hacia el punto de despegue. El globo se eleva suavemente sobre los colosos de Memnón y campos de caña de azúcar.',
      de: 'Beginnt vor der Dämmerung mit einer Bootsüberfahrt zum Startplatz. Schweben Sie über Hatschepsuts Terrassentempel und grüne Zuckerrohrfelder.'
    },
    location: { ar: 'البر الغربي - موقع إقلاع البالون بالقرنة', en: 'West Bank - Qurna Balloon Launch Field', fr: 'Rive ouest - base d’envol de Gournah', es: 'Orilla oeste - campo de despegue de Qurna', de: 'Westufer - Startplatz Qurna' },
    image: '/src/assets/images/hot_air_balloon_luxor_sunrise_1794257299294.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'الفجر (بين الساعة 4:30 و 5:30 صباحاً)', en: 'Dawn (4:30 - 5:30 AM)', fr: 'Aube (4h30 - 5h30)', es: 'Amanecer (4:30 - 5:30)', de: 'Morgendämmerung (4:30 - 5:30 Uhr)' },
    included: [
      { ar: 'النقل من وإلى الفندق أو الباخرة', en: 'Hotel/Cruise roundtrip transfers', fr: 'Transferts hôtel/bateau inclus', es: 'Traslados ida y vuelta', de: 'Hotel-/Schiffstransfer inklusive' },
      { ar: 'قارب نهري مع شاي وقهوة الصباح', en: 'Motorboat Nile crossing with morning refreshments', fr: 'Traversée du Nil et collation matinale', es: 'Cruce en lancha y té matinal', de: 'Bootsüberfahrt und Kaffee/Tee' },
      { ar: 'شهادة طيران تذكارية معتمدة', en: 'Commemorative flight certificate', fr: 'Certificat de vol commémoratif', es: 'Certificado de vuelo conmemorativo', de: 'Erinnerungs-Flugzertifikat' }
    ],
    featured: true,
  },
  {
    id: 'felucca_nile_sunset',
    title: {
      ar: 'رحلة الفلوكة والمراكب الشراعية عند الغروب',
      en: 'Felucca Nile Sunset Sail',
      fr: 'Navigation en felouque au coucher du soleil',
      es: 'Paseo en faluca al atardecer por el Nilo',
      de: 'Segeltörn mit der Feluke bei Sonnenuntergang',
    },
    category: 'river',
    duration: { ar: 'ساعتان إلى 3 ساعات', en: '2 - 3 hours', fr: '2 à 3 heures', es: '2 a 4 horas', de: '2 - 3 Stunden' },
    priceNote: { ar: '350 - 500 ج.م للساعة للمركب بالكامل (~$10)', en: '350 - 500 EGP / hour for entire boat (~$10)', fr: '350 - 500 EGP / heure pour le bateau', es: '350 - 500 EGP / hora por barco', de: '350 - 500 EGP / Stunde fürs Boot' },
    shortDesc: {
      ar: 'إبحار هادئ شاعري على متن قارب خشبي تقليدي بأشرعة بيضاء ناصعة وسط مياه النيل الهادئة وجزر الموز.',
      en: 'A serene traditional wooden sailboat gliding gently along the Nile as the sun dips behind the Theban hills.',
      fr: 'Douce navigation en voilier traditionnel en bois au fil du Nil tandis que le soleil s’efface derrière la montagne thébaine.',
      es: 'Tranquila navegación en velero tradicional de madera deslizándose por el Nilo frente a las colinas de Tebas.',
      de: 'Stille Segelfahrt auf einem traditionellen Holzboot im Abendlicht vor der Kulisse der thebanischen Berge.'
    },
    fullDesc: {
      ar: 'انطلق من مرسى الأقصر مع نسمات المسيل العذبة، واستمتع بمشاهدة الطيور المائية المهاجرة وبساتين النخيل والمانجو على ضفاف النيل، وصولاً إلى جزيرة الموز للاستمتاع بالشاي الصعيدي بالنعناع والفاكهة الطازجة.',
      en: 'Drift from Luxor dock as evening breezes rise; watch herons and kingfishers dart between date palms and sugar cane, pausing at Banana Island for authentic Upper Egyptian mint tea.',
      fr: 'Glissez sur les flots depuis les quais de Louxor, contemplez les martins-pêcheurs et les palmeraies, avec halte à l’île aux Bananes pour savourer le thé à la menthe.',
      es: 'Zarpe del muelle de Lúxor disfrutando de la brisa vespertina, palmerales y parada en la Isla de los Plátanos para degustar té con menta.',
      de: 'Segeln Sie von der Promenade los, beobachten Sie Reiher und Eisvögel und genießen Sie auf Banana Island frischen Pfefferminztee.'
    },
    location: { ar: 'مراسي كورنيش النيل - الأقصر', en: 'Luxor Corniche Docks', fr: 'Quais de la Corniche de Louxor', es: 'Muelles del paseo marítimo de Lúxor', de: 'Bootsanleger Nilpromenade Luxor' },
    image: '/src/assets/images/hero_luxor_thebes_nile_1794257299786.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'قبل الغروب بساعتين (3:30 - 6:00 مساءً)', en: 'Pre-sunset (3:30 - 6:00 PM)', fr: 'Fin d’après-midi (15h30 - 18h00)', es: 'Atardecer (15:30 - 18:00)', de: 'Spätnachmittag (15:30 - 18:00 Uhr)' },
    included: [
      { ar: 'قارب شراعي خاص مع قبطان نوبي خبير', en: 'Private felucca with seasoned local skipper', fr: 'Felouque privée avec marin expérimenté', es: 'Faluca privada con patrón experto', de: 'Private Feluke mit erfahrenem Bootsführer' },
      { ar: 'شاي صعيدي ومياه نقية', en: 'Upper Egyptian tea & bottled water', fr: 'Thé traditionnel et eau minérale', es: 'Té egipcio y agua mineral', de: 'Traditioneller Tee & Mineralwasser' },
      { ar: 'زيارة جزيرة الموز وبساتينها', en: 'Banana Island grove visit', fr: 'Visite de l’île aux Bananes', es: 'Parada en la Isla de los Plátanos', de: 'Stopp auf Banana Island' }
    ],
    featured: true,
  },
  {
    id: 'karnak_sound_and_light',
    title: {
      ar: 'عروض الصوت والضوء وزيارة المعابد ليلًا',
      en: 'Karnak Sound & Light & Night Temple Visits',
      fr: 'Spectacle Son et Lumière de Karnak & Visites Nocturnes',
      es: 'Espectáculo de Luz y Sonido en Karnak y Visitas Nocturnas',
      de: 'Ton- und Lichtshow in Karnak & Nächtliche Tempelbesuche',
    },
    category: 'culture',
    duration: { ar: '75 دقيقة', en: '75 minutes', fr: '75 minutes', es: '75 minutos', de: '75 Minuten' },
    priceNote: { ar: '150 ج.م للمصريين / 650 ج.م ($15) للأجانب', en: '150 EGP Egyptians / 650 EGP ($15) Foreigners', fr: '150 EGP Égyptiens / 650 EGP Étrangers', es: '150 EGP Egipcios / 650 EGP Extranjeros', de: '150 EGP Ägypter / 650 EGP Ausländer' },
    shortDesc: {
      ar: 'تجربة مسرحية ضوئية وصوتية تحيي تاريخ الفراعنة بين أعمدة الكرنك العملاقة والبحيرة المقدسة تحت النجوم.',
      en: 'A theatrical illuminated walking journey narrating pharaonic sagas among Karnak’s towering columns and Sacred Lake under the stars.',
      fr: 'Spectacle nocturne théâtralisé contant l’épopée des pharaons parmi les colonnes de Karnak et sur le lac sacré.',
      es: 'Paseo nocturno teatralizado que revive la gloria de los faraones entre las columnas de Karnak y el lago sagrado.',
      de: 'Ein nächtliches Schauspiel, das die Geschichte der Pharaonen zwischen den Riesensäulen von Karnak lebendig werden lässt.'
    },
    fullDesc: {
      ar: 'يقدم العرض رحلة مشي تبدأ من طريق الكباش عبر البهو العظيم حتى مدرجات البحيرة المقدسة، حيث تحكي أصوات الملوك والآلهة حكاية تأسيس طيبة وبناء المعابد وصراعات الشرق القديم.',
      en: 'The walking show moves from Avenue of Sphinxes through the Hypostyle Hall to seated bleachers overlooking the Sacred Lake.',
      fr: 'Le spectacle itinérant chemine de l’allée des sphinx au lac sacré dans une symphonie d’ombres et de lumières.',
      es: 'El recorrido a pie avanza desde la avenida de esfinges hasta las gradas frente al lago sagrado.',
      de: 'Der Rundgang führt von der Sphingenallee durch den Säulensaal zu den Tribünen am Heiligen See.'
    },
    location: { ar: 'مجمع معابد الكرنك - البر الشرقي', en: 'Karnak Temple Complex - East Bank', fr: 'Complexe de Karnak - rive est', es: 'Complejo de Karnak - orilla este', de: 'Karnak-Tempel - Ostufer' },
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'المساء (عروض 7:00 م و 8:15 م)', en: 'Evening (7:00 PM & 8:15 PM)', fr: 'Soirée (19h00 et 20h15)', es: 'Noche (19:00 y 20:15)', de: 'Abend (19:00 & 20:15 Uhr)' },
    included: [
      { ar: 'تذكرة الدخول لمقاعد العرض الصوتي والضوئي', en: 'Admission to Sound & Light performance', fr: 'Entrée au spectacle son et lumière', es: 'Entrada al espectáculo', de: 'Eintritt zur Vorstellung' },
      { ar: 'جولة ليلية داخل بهو الأعمدة المضاء', en: 'Walking segment inside illuminated Hypostyle Hall', fr: 'Parcours nocturne dans la salle hypostyle', es: 'Paseo en la sala hipóstila iluminada', de: 'Rundgang in der beleuchteten Säulenhalle' }
    ],
    featured: true,
  },
  {
    id: 'hantour_carriage_city_tour',
    title: {
      ar: 'جولة الحنطور التراثية في أحياء وأسواق الأقصر',
      en: 'Traditional Hantour Carriage Tour',
      fr: 'Balade en calèche Hantour dans Louxor',
      es: 'Paseo en carruaje tradicional Hantour',
      de: 'Kutschenfahrt (Hantour) durch Luxor',
    },
    category: 'culture',
    duration: { ar: 'ساعة إلى ساعتين', en: '1 - 2 hours', fr: '1 à 2 heures', es: '1 a 2 horas', de: '1 - 2 Stunden' },
    priceNote: { ar: '150 - 250 ج.م للجولة (ساعة واحدة)', en: '150 - 250 EGP per carriage ride (1 hour)', fr: '150 - 250 EGP / calèche (1 heure)', es: '150 - 250 EGP por paseo (1 hora)', de: '150 - 250 EGP pro Fahrt (1 Stunde)' },
    shortDesc: {
      ar: 'جولة على متن عربة الحنطور التراثية التي تجرها الخيول لاكتشاف كورنيش النيل والأسواق القديمة وشوارع طيبة العريقة.',
      en: 'A classic horse-drawn carriage ride through the Nile Corniche, colorful spice bazaars, and historic Theban alleys.',
      fr: 'Promenade authentique en calèche le long de la Corniche du Nil et dans les ruelles animées du vieux souk.',
      es: 'Recorrido en carruaje tirado por caballos por el paseo del Nilo y los zocos de especias.',
      de: 'Klassische Pferdekutschenfahrt entlang der Nilpromenade und durch die lebendigen Basargassen.'
    },
    fullDesc: {
      ar: 'يعد الحنطور وسيلة التنقل التاريخية الأحب لزوار الأقصر منذ القرن التاسع عشر. تأخذك الجولة على إيقاع حوافر الخيل بين واجهات الفنادق التراثية مثل الونتر بالاس وسوق العطارة القديم ومساجد وكنائس المدينة التاريخية.',
      en: 'A beloved tradition since the 19th century Grand Tours; clip-clop along the riverfront past the historic Winter Palace, vibrant spice markets, and ancient quarters.',
      fr: 'Une tradition chérie depuis le XIXe siècle, serpentant au pas du cheval devant le mythique Winter Palace et les échoppes d’épices.',
      es: 'Una tradición entrañable que transita ante el histórico Winter Palace y los bazares de fragancias.',
      de: 'Eine traditionsreiche Rundfahrt vorbei am ehrwürdigen Winter Palace und orientalischen Gewürzbasaren.'
    },
    location: { ar: 'ميدان معبد الأقصر وكورنيش النيل', en: 'Luxor Temple Square & Corniche', fr: 'Place du temple de Louxor et corniche', es: 'Plaza del templo de Lúxor y cornisa', de: 'Luxor-Tempelplatz & Nilpromenade' },
    image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'العصر أو المساء بعد انكسار الشمس', en: 'Late afternoon or balmy evening', fr: 'Fin d’après-midi ou soirée', es: 'Tarde fresca o noche', de: 'Spätnachmittag oder lauer Abend' },
    included: [
      { ar: 'عربة حنطور خاصة مع سائق مرخص', en: 'Private licensed carriage & driver', fr: 'Calèche privée et cocher agréé', es: 'Carruaje privado con cochero acreditado', de: 'Private Kutsche mit lizenziertem Kutscher' },
      { ar: 'جولة في السوق القديم وكورنيش النيل', en: 'Tour of old market & riverfront', fr: 'Circuit dans le vieux souk et la corniche', es: 'Paseo por el zoco y la cornisa', de: 'Rundfahrt Basar und Uferpromenade' }
    ],
    featured: false,
  },
  {
    id: 'west_bank_horse_camel_riding',
    title: {
      ar: 'ركوب الخيل والجمال في صحراء ومزارع البر الغربي',
      en: 'West Bank Horse & Camel Trekking',
      fr: 'Randonnée à cheval et à dos de dromadaire sur la rive ouest',
      es: 'Ruta a caballo y dromedario en la orilla oeste',
      de: 'Reit- und Kameltour am Westufer',
    },
    category: 'safari',
    duration: { ar: 'ساعتان إلى 4 ساعات', en: '2 - 4 hours', fr: '2 à 4 heures', es: '2 a 4 horas', de: '2 - 4 Stunden' },
    priceNote: { ar: '400 - 650 ج.م للجولة (ساعتان)', en: '400 - 650 EGP per ride (2 hrs)', fr: '400 - 650 EGP / balade (2h)', es: '400 - 650 EGP por paseo (2h)', de: '400 - 650 EGP pro Tour (2 Std)' },
    shortDesc: {
      ar: 'مغامرة أصيلة على صهوة الخيول العربية الأصيلة أو الجمال تعبر قرى القرنة والمزارع وصولاً إلى جبل طيبة المهيب.',
      en: 'An exhilarating ride on Arabian steeds or camels across lush agricultural plains to the dramatic Theban desert cliffs.',
      fr: 'Échappée équestre ou chamelière à travers champs verdoyants et contreforts désertiques de Thèbes.',
      es: 'Aventura a lomos de caballos árabes o dromedarios entre huertos de caña de azúcar y los acantilados de Tebas.',
      de: 'Ausritt auf edlen Araberpferden oder Kamelen durch Oasenfelder bis zu den Felswänden der thebanischen Wüste.'
    },
    fullDesc: {
      ar: 'استمتع بركوب خيل عربي مدرب أو جمل هادئ في مسارات ريفية تلامس قنوات الري وأشجار النخيل، ثم تسلق تلال صحراء القرنة لمشاهدة معبد مدينة هابو ومعبد الرامسيوم من زاوية طبيعية ساحرة بعيداً عن صخب الحافلات.',
      en: 'Traverse irrigation canals and date groves on well-trained Arabian horses or dromedaries, then ride into the Theban hills for elevated vistas of Habu and the Ramesseum.',
      fr: 'Parcourez les sentiers ruraux ombragés de palmiers puis grimpez sur les crêtes pour une vue splendide sur Médinet Habou et le Ramesséum.',
      es: 'Cabalga entre acequias y palmerales antes de subir a las colinas con vistas panorámicas a Medinet Habu.',
      de: 'Reiten Sie entlang schattiger Bewässerungsgräben und erklimmen Sie die Ausläufer des thebanischen Gebirges.'
    },
    location: { ar: 'إسطبلات البر الغربي - البعيرات والقرنة', en: 'West Bank Stables - Bairat & Qurna', fr: 'Écuries de la rive ouest - Gournah', es: 'Caballerizas de la orilla oeste - Qurna', de: 'Reitställe am Westufer - Qurna' },
    image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'الصباح الباكر أو وقت العصر قبل الغروب', en: 'Early morning or golden afternoon', fr: 'Matin ou fin d’après-midi', es: 'Mañana temprana o atardecer', de: 'Früher Morgen oder später Nachmittag' },
    included: [
      { ar: 'خيل عربي أو جمل مجهز مع مرشد محلي', en: 'Equipped mount with local equestrian guide', fr: 'Monture équipée et guide local', es: 'Montura y guía local experimentado', de: 'Pferd/Kamel mit Begleitführer' },
      { ar: 'مشروبات منعشة أثناء الاستراحة', en: 'Trail refreshments', fr: 'Boissons rafraîchissantes', es: 'Bebidas durante el trayecto', de: 'Erfrischungen unterwegs' }
    ],
    featured: false,
  },
  {
    id: 'nubian_rural_village_culture',
    title: {
      ar: 'معايشة القرى النوبية والريفية بالأقصر',
      en: 'Nubian & Rural Upper Egyptian Village Immersion',
      fr: 'Immersion dans les villages nubiens et ruraux de Louxor',
      es: 'Inmersión cultural en aldeas nubias y rurales',
      de: 'Traditionelle Dorfbegegnung in Oberägypten & Nubien',
    },
    category: 'culture',
    duration: { ar: '3 إلى 5 ساعات', en: '3 - 5 hours', fr: '3 à 5 heures', es: '3 a 5 horas', de: '3 - 5 Stunden' },
    priceNote: { ar: '300 - 500 ج.م للفرد شاملة الوجبة والضيافة', en: '300 - 500 EGP / person incl. rural meal & tea', fr: '300 - 500 EGP / pers. repas inclus', es: '300 - 500 EGP / pers. con comida', de: '300 - 500 EGP p.P. inkl. Essen' },
    shortDesc: {
      ar: 'زيارة لبيوت البر الغربي النوبية والريفية، وتناول الخبز الشمسي الساخن من الفرن البلدي، وتجربة الكرم الصعيدي الأصيل.',
      en: 'An authentic cultural homestay experience: bake sun-bread (Aish Shamsi) in clay ovens and share Upper Egyptian warmth.',
      fr: 'Visite intimiste de maisons traditionnelles, fabrication du pain solaire au four d’argile et hospitalité chaleureuse.',
      es: 'Visita a hogares tradicionales, elaboración de pan solar en horno de barro y auténtica hospitalidad saidí.',
      de: 'Begegnung in Lehmziegelhäusern, Backen von traditionellem Sonnenbrot (Eish Schamsi) und echte Gastfreundschaft.'
    },
    fullDesc: {
      ar: 'تعرف على نمط الحياة في صعيد مصر التي لا تزال تحتفظ بروح الأجداد: شرب الشاي بالحبق، وعجن الخبز الشمسي وتخميره تحت أشعة شمس طيبة، وزيارة ورش النسيج اليدوي والفخار التراثي.',
      en: 'Discover enduring rural traditions: knead sun-leavened bread baked in traditional dome ovens, sip hibiscus tea, and witness age-old loom weaving and terracotta pottery.',
      fr: 'Pénétrez l’âme du sud égyptien : préparation du pain levé au soleil, dégustation de karkadé et découverte des poteries et tissages manuels.',
      es: 'Descubra la vida campesina tradicional: elaboración de pan fermentado al sol, té de hibisco y telares manuales.',
      de: 'Erleben Sie das Leben auf dem Lande: Backen von Sonnenbrot im Kuppelofen, Karkadeh-Tee und Töpferei.'
    },
    location: { ar: 'قرى البر الغربي - القرنة والبعيرات', en: 'West Bank Villages - Qurna & Bairat', fr: 'Villages de la rive ouest', es: 'Aldeas de la orilla oeste', de: 'Dörfer am Westufer - Qurna' },
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'الصباح (9:00 ص - 1:00 م)', en: 'Morning (9:00 AM - 1:00 PM)', fr: 'Matinée (9h00 - 13h00)', es: 'Mañana (9:00 - 13:00)', de: 'Vormittag (9:00 - 13:00 Uhr)' },
    included: [
      { ar: 'ضيافة منزلية كاملة مع شاي صعيدي وفطير مشلتت وعسل', en: 'Traditional home hospitality with Feteer Meshaltet & honey', fr: 'Collation traditionnelle feteer, miel et thé', es: 'Degustación de feteer con miel y té', de: 'Traditionelle Verpflegung mit Feteer & Honig' },
      { ar: 'ورشة عمل خبز شمسي تفاعلية', en: 'Hands-on sun-bread baking experience', fr: 'Atelier interactif de cuisson du pain', es: 'Taller participativo de panadería', de: 'Mitmach-Workshop Sonnenbrot' }
    ],
    featured: true,
  },
  {
    id: 'photography_heritage_masterclass',
    title: {
      ar: 'جولة التصوير الفوتوغرافي التراثي بالمعابد',
      en: 'Archaeological Photography Masterclass Tour',
      fr: 'Masterclass et safari photo archéologique',
      es: 'Tour fotográfico y masterclass arqueológica',
      de: 'Archäologische Foto-Masterclass Tour',
    },
    category: 'culture',
    duration: { ar: 'نصف يوم (4 ساعات)', en: 'Half-day (4 hours)', fr: 'Demi-journée (4 heures)', es: 'Media jornada (4 horas)', de: 'Halber Tag (4 Stunden)' },
    priceNote: { ar: 'تتضمن إرشادات احترافية ورسوم تصاريح التصوير الرسمية', en: 'Includes pro guidance & official camera permits info', fr: 'Guidage technique et conseils d’autorisations', es: 'Asesoría técnica fotográfica profesional', de: 'Professionelle Fotobegleitung & Genehmigungsinfos' },
    shortDesc: {
      ar: 'جولة تصوير متخصصة يقودها مصور أثري لاقتناص أشعة الضوء الساقطة على أعمدة الكرنك وألوان المقابر النادرة.',
      en: 'A guided photo expedition capturing light beams through Karnak’s hypostyle clerestory and rich tomb pigments.',
      fr: 'Expédition photographique pour capturer les rais de lumière dans la salle hypostyle et les couleurs des tombes.',
      es: 'Expedición para fotógrafos en busca de los haces de luz en Karnak y los tonos de las tumbas.',
      de: 'Fototour zu den besten Lichtstrahlen im Säulensaal von Karnak und den Farben der Königsgräber.'
    },
    fullDesc: {
      ar: 'تعلم أسرار التقاط الصور التوثيقية لمعالم الأقصر: كيفية موازنة الإضاءة على الحجر الرملي الأصفر، واختيار أفضل ساعات اليوم (الساعة الذهبية والزرقاء)، وتصوير المراكب الشراعية على صفحة النيل بتكنيك احترافي.',
      en: 'Master temple photography: balancing high-contrast sandstone sunlight, timing sunbeam shafts, and capturing golden reflections on the Nile.',
      fr: 'Apprenez à maîtriser la lumière rasante sur les hiéroglyphes, les rais célestes de midi et le bleu crépusculaire du Nil.',
      es: 'Domine la fotografía en piedra arenisca, los haces de luz cenitales y la hora azul sobre el Nilo.',
      de: 'Meistern Sie die Kontraste auf antikem Sandstein und fangen Sie die Lichtbündel im Säulensaal ein.'
    },
    location: { ar: 'الكرنك، الأقصر، ومعالم البر الغربي', en: 'Karnak, Luxor Temple, and West Bank', fr: 'Karnak, temple de Louxor et rive ouest', es: 'Karnak, Lúxor y templos de la orilla oeste', de: 'Karnak, Luxor-Tempel und Westufer' },
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'الساعة الذهبية للشروق أو الغروب', en: 'Golden Hour (Dawn or Late Afternoon)', fr: 'Heure dorée (aurore ou crépuscule)', es: 'Hora dorada (amanecer o atardecer)', de: 'Goldene Stunde (Sonnenauf- oder untergang)' },
    included: [
      { ar: 'مصور محترف مرافق طوال الجولة', en: 'Accompanying professional heritage photographer', fr: 'Photographe professionnel accompagnateur', es: 'Fotógrafo profesional acompañante', de: 'Professioneller Fotoguide' },
      { ar: 'مراجعة الصور وتقديم نصائح المعالجة الرقمية', en: 'Image review & post-processing tips', fr: 'Débriefing et conseils de post-traitement', es: 'Revisión y consejos de revelado digital', de: 'Bildbesprechung & Bearbeitungstipps' }
    ],
    featured: false,
  },
  {
    id: 'desert_safari_theban_hills',
    title: {
      ar: 'رحلات السفاري بالبيج باجي إلى تلال طيبة الصحراوية',
      en: 'Theban Desert Quad & Buggy Safari',
      fr: 'Safari en quad dans le désert thébain',
      es: 'Safari en quad y buggy por el desierto de Tebas',
      de: 'Wüsten-Quad-Safari in den thebanischen Bergen',
    },
    category: 'safari',
    duration: { ar: 'ساعتان ونصف', en: '2.5 hours', fr: '2h30', es: '2,5 horas', de: '2,5 Stunden' },
    priceNote: { ar: 'تختلف بحسب دراجة مفردة أو مزدوجة مع خوذات الأمان', en: 'Single or double buggy with safety gear', fr: 'Quad simple ou double avec équipement', es: 'Quad individual o doble con casco', de: 'Einzel- oder Doppelbuggy mit Ausrüstung' },
    shortDesc: {
      ar: 'مغامرة صحراوية شيقة عبر دروب رمال الصحراء الغربية بمحاذاة وادي الملوك وكهوف جبل القرنة الطبيعية.',
      en: 'An adrenaline-fueled quad expedition through desert wadis flanking the Valley of the Kings to natural panoramic caves.',
      fr: 'Aventure exaltante en quad à travers les oueds désertiques bordant la Vallée des Rois jusqu’aux belvédères.',
      es: 'Aventura en quad por los uadis del desierto que bordean el Valle de los Reyes hasta miradores naturales.',
      de: 'Packende Quad-Fahrt durch die Wüstentäler am Rande des Tals der Könige zu Panoramahöhlen.'
    },
    fullDesc: {
      ar: 'انطلق في قافلة رباعية الدفع عبر مسارات رملية ممهدة بمحاذاة الحافة الصحراوية لوادي الملوك. توقف عند مغارات طبيعية ووديان صخرية عتيقة واحتس الشاي البدوي عند الغروب مع مشاهدة أفق الأقصر الأخضر من عمق الصحراء.',
      en: 'Pilot your all-terrain vehicle through rugged desert tracks bordering the royal necropolis. Pause at panoramic natural caverns for Bedouin herbal tea as the sunset ignites the cliffs.',
      fr: 'Pilotez votre véhicule tout-terrain sur des pistes sablonneuses, halte thé bédouin au crépuscule face au désert thébain.',
      es: 'Pilote su quad por pistas desérticas con parada para tomar té beduino frente al sol poniente.',
      de: 'Fahren Sie mit dem Geländefahrzeug durch Wüstenpfade und genießen Sie Beduinentee beim Sonnenuntergang.'
    },
    location: { ar: 'صحراء البر الغربي - قاعدة السفاري بالقرنة', en: 'West Bank Desert Safari Base - Qurna', fr: 'Base safari de la rive ouest', es: 'Base de safaris de la orilla oeste', de: 'Wüsten-Safaribasis am Westufer' },
    image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'وقت الغروب (3:30 - 6:00 مساءً)', en: 'Sunset ride (3:30 - 6:00 PM)', fr: 'Coucher de soleil (15h30 - 18h00)', es: 'Atardecer (15:30 - 18:00)', de: 'Sonnenuntergang (15:30 - 18:00 Uhr)' },
    included: [
      { ar: 'مركبة بيتش باجي وخوذة ونظارات واقية', en: 'Quad bike, helmet, and goggles', fr: 'Quad, casque et lunettes de protection', es: 'Quad, casco y gafas protectoras', de: 'Quad, Schutzhelm und Staubbrille' },
      { ar: 'شاي بدوي بالأعشاب الطبيعية في خيمة صحراوية', en: 'Desert tent Bedouin herbal tea', fr: 'Thé bédouin sous tente nomade', es: 'Té beduino en jaima del desierto', de: 'Beduinentee im Wüstenzelt' }
    ],
    featured: false,
  },
  {
    id: 'family_hieroglyphs_craft_workshop',
    title: {
      ar: 'ورشة الكتابة الهيروغليفية ونحت الألباستر العائلية',
      en: 'Family Hieroglyphs & Alabaster Crafting Workshop',
      fr: 'Atelier familial de hiéroglyphes et sculpture d’albâtre',
      es: 'Taller familiar de jeroglíficos y talla de alabastro',
      de: 'Familien-Workshop: Hieroglyphen & Alabaster-Bildhauerei',
    },
    category: 'family',
    duration: { ar: 'ساعتان ونصف', en: '2.5 hours', fr: '2h30', es: '2,5 horas', de: '2,5 Stunden' },
    priceNote: { ar: 'تشمل جميع الخامات وأوراق البردي وقطع الألباستر التذكارية', en: 'Includes all papyrus, tools, and take-home alabaster artifacts', fr: 'Matériel, papyrus et création en albâtre inclus', es: 'Incluye papiro, herramientas y pieza de alabastro', de: 'Inklusive Papyrus, Werkzeug und Alabaster-Werkstück' },
    shortDesc: {
      ar: 'تجربة عائلية تفاعلية ممتعة يتعلم فيها الكبار والأطفال كتابة أسمائهم بالهيروغليفية داخل خراطيش ملكية وتشكيل حجر الألباستر.',
      en: 'An engaging hands-on family workshop: write your name in ancient hieroglyphic royal cartouches and shape soft alabaster stone.',
      fr: 'Expérience ludique en famille : calligraphiez vos prénoms en cartouches hiéroglyphiques et sculptez l’albâtre.',
      es: 'Taller interactivo para familias: escriba su nombre en jeroglíficos reales y talle piedra de alabastro.',
      de: 'Ein kreativer Familien-Workshop: Schreiben Sie Ihren Namen in königlichen Hieroglyphen und bearbeiten Sie Alabaster.'
    },
    fullDesc: {
      ar: 'يقود الورشة فنان أقصري وكاتب هيروغليفي متخصص. يتعلم الأطفال كيف صنع الفراعنة ورق البردي من سيقان النبات النيلي، وكيفية مزج الألوان الطبيعية، ونحت رمز الجعران أو مفتاح الحياة (عنخ) على حجر الألباستر الطيبي الأصيل.',
      en: 'Led by a master Theban calligrapher and stone artisan. Learn how papyrus sheets were pressed, grind natural mineral pigments, and chisel an Ankh or scarab into raw alabaster.',
      fr: 'Guidé par un calligraphe et un artisan d’albâtre. Découvrez la fabrication du papyrus, le broyage des pigments et la gravure d’un scarabée.',
      es: 'Guiado por artesanos locales. Aprenda a estampar papiro, mezclar tintas minerales y tallar un escarabajo de la suerte.',
      de: 'Unter Anleitung eines Kunsthandwerkers lernen Kinder die Papyrusherstellung, Mineralfarben und das Schnitzen eines Skarabäus.'
    },
    location: { ar: 'مركز الحرف التراثية بالقرنة - البر الغربي', en: 'Heritage Craft Center - Qurna West Bank', fr: 'Centre d’artisanat de Gournah', es: 'Centro de artesanía de Qurna', de: 'Kunsthandwerkszentrum Qurna am Westufer' },
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'
    ],
    bestTime: { ar: 'صباحاً أو بعد الظهر (10:00 ص أو 3:00 م)', en: 'Morning or afternoon (10:00 AM or 3:00 PM)', fr: 'Matin ou après-midi', es: 'Mañana o tarde', de: 'Vormittag oder Nachmittag' },
    included: [
      { ar: 'ورق بردي حقيقي مدون عليه اسم العائلة بالهيروغليفية', en: 'Genuine papyrus personalized with your family cartouche', fr: 'Feuille de papyrus personnalisée avec votre cartouche', es: 'Papiro auténtico con cartucho personalizado', de: 'Echter Papyrus mit Ihrer Namenskartusche' },
      { ar: 'قطعة نحت ألباستر تذكارية من صنع يدك', en: 'Hand-carved personal alabaster keepsake to take home', fr: 'Votre pièce sculptée en albâtre à emporter', es: 'Su propia pieza tallada de alabastro de recuerdo', de: 'Selbst gemeißeltes Alabaster-Souvenir zum Mitnehmen' }
    ],
    featured: true,
  },
];
