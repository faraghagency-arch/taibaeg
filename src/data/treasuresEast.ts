import { Treasure } from '../types';

export const EAST_TREASURES: Treasure[] = [
  {
    id: 'karnak_complex',
    name: {
      ar: 'مجمع معابد الكرنك',
      en: 'Karnak Temple Complex',
      fr: 'Complexe du Temple de Karnak',
      es: 'Complejo de Templos de Karnak',
      de: 'Karnak-Tempelkomplex',
    },
    shortDesc: {
      ar: 'أعظم وأكبر مجمع ديني شيده الإنسان في التاريخ القديم ممتداً لأكثر من ألفي عام من البناء.',
      en: 'The largest religious complex ever built by humanity, spanning over two millennia of construction.',
      fr: 'Le plus vaste complexe religieux de l’Antiquité, édifié sur plus de deux millénaires.',
      es: 'El complejo religioso más colosal de la antigüedad, levantado a lo largo de dos milenios.',
      de: 'Der größte religiöse Komplex des Altertums, über mehr als zwei Jahrtausende erbaut.',
    },
    fullHistory: {
      ar: 'يغطي مجمع الكرنك مساحة تتجاوز 100 هكتار، وكان يُعرف في المصرية القديمة باسم "إبت سوت" أي الأكثر اختياراً من الأماكن. تعاقب على تشييده وتوسيعه أكثر من ثلاثين فرعوناً من عصر الدولة الوسطى حتى العصر البطلمي والروماني.',
      en: 'Spanning over 100 hectares, Karnak was known as "Ipet-sut" (The Most Select of Places). More than thirty pharaohs contributed to its immense expansion from the Middle Kingdom through the Ptolemaic period.',
      fr: 'Couvrant plus de 100 hectares, Karnak était nommé "Ipet-sout" (Le plus vénéré des lieux). Plus de trente pharaons y ont laissé leur empreinte.',
      es: 'Abarcando más de 100 hectáreas, conocido como "Ipet-sut", recibió ampliaciones de más de treinta faraones.',
      de: 'Mit über 100 Hektar als "Ipet-sut" bekannt. Mehr als dreißig Pharaonen bauten an diesem monumentalen Heiligtum.',
    },
    story: {
      ar: 'كان الكرنك مركز الكون والخلود عند المصريين القدماء، ومقر عبادة الإله آمون رع وزوجته موت وابنهما خونسو (ثالوث طيبة المقدس).',
      en: 'Karnak served as the energetic center of the universe for ancient Egyptians, home to the Theban Triad: Amun-Re, Mut, and Khonsu.',
      fr: 'Karnak représentait le centre du cosmos thébain et le siège de la triade sacrée : Amon-Rê, Mout et Khonsou.',
      es: 'Representaba el centro cósmico y la morada de la tríada tebana: Amón-Ra, Mut y Jonsu.',
      de: 'Karnak war das kosmische Zentrum und der Sitz der thebanischen Triade: Amun-Re, Mut und Chons.',
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الدولة الوسطى حتى العصر البطلمي', en: 'Middle Kingdom to Ptolemaic Era', fr: 'Moyen Empire à l’époque ptolémaïque', es: 'Imperio Medio a Época Ptolemaica', de: 'Mittleres Reich bis Ptolemäer' },
    pharaoh: { ar: 'سنوسرت الأول، تحتمس الثالث، رمسيس الثاني، وآخرون', en: 'Senusret I, Thutmose III, Ramesses II, and successors', fr: 'Sésostris Ier, Thoutmôsis III, Ramsès II', es: 'Senusret I, Tutmosis III, Ramsés II', de: 'Sesostris I., Thutmosis III., Ramses II.' },
    architecturalHighlights: [
      { ar: 'صالة الأعمدة الكبرى مع 134 عموداً أسطوانياً باسقاً', en: 'Great Hypostyle Hall with 134 monumental sandstone columns', fr: 'Grande salle hypostyle aux 134 colonnes monumentales', es: 'Gran sala hipóstila con 134 columnas monumentales', de: 'Große Säulenhalle mit 134 riesigen Sandsteinsäulen' },
      { ar: 'مسلة حتشبسوت البالغ وزنها 320 طناً من الغرانيت الوردي', en: 'Hatshepsut pink granite obelisk weighing 320 tons', fr: 'Obélisque en granit rose d’Hatchepsout pesant 320 tonnes', es: 'Obelisco de granito rosa de Hatshepsut de 320 toneladas', de: 'Hatschepsut-Obelisk aus rosa Granit (320 Tonnen)' },
    ],
    mustSee: [
      { ar: 'تعامد شمس الصباح على بهو الأعمدة في الانقلاب الشتوي', en: 'Morning sunbeams in the Great Hypostyle Hall', fr: 'Jeux de lumière dans la salle hypostyle', es: 'Rayos solares en la sala hipóstila', de: 'Morgendlicher Lichteinfall in der Säulenhalle' },
      { ar: 'جعران أمنحتب الثالث المقدس الذي يطوف حوله الزوار', en: 'Sacred Scarab statue of Amenhotep III beside Sacred Lake', fr: 'Scarabée sacré d’Amenhotep III près du lac', es: 'Escarabajo sagrado junto al lago', de: 'Heiliger Skarabäus von Amenophis III.' },
    ],
    mainImage: '/src/assets/images/karnak_hypostyle_hall_1794257301105.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: { lat: 25.7188, lng: 32.6573 },
    distanceFromCenterKm: 3.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:30 م', en: 'Daily 6:00 AM - 5:30 PM', fr: 'Tous les jours 6h00 - 17h30', es: 'Todos los días 6:00 - 17:30', de: 'Täglich 6:00 - 17:30 Uhr' },
    ticketPrice: { ar: '450 ج.م للأجانب / 40 ج.م للمصريين (خصم 50% للطلاب)', en: '450 EGP Foreigners / 40 EGP Egyptians (50% student discount)', fr: '450 EGP Étrangers / 40 EGP Égyptiens', es: '450 EGP Extranjeros / 40 EGP Egipcios', de: '450 EGP Ausländer / 40 EGP Ägypter' },
    status: 'open',
    featured: true,
    order: 1,
  },
  {
    id: 'amun_re_temple',
    name: {
      ar: 'معبد آمون رع (الكرنك)',
      en: 'Temple of Amun-Re (Karnak)',
      fr: 'Temple d’Amon-Rê',
      es: 'Templo de Amón-Ra',
      de: 'Tempel des Amun-Re',
    },
    shortDesc: {
      ar: 'القلب النابض لمجمع الكرنك، المكرس للمعبود الخفي ورئيس مجمع آلهة مصر القديمة.',
      en: 'The beating sanctum of Karnak, dedicated to the supreme King of the Gods.',
      fr: 'Le cœur spirituel du temple de Karnak, dédié au roi des dieux.',
      es: 'El corazón sagrado de Karnak, dedicado al rey supremo de los dioses.',
      de: 'Das spirituelle Herz von Karnak, geweiht dem König der Götter.',
    },
    fullHistory: {
      ar: 'يمثل حرم آمون رع أكبر فناء مغطى في مصر القديمة، ويضم عشرة صروح متعاقبة شيدت على مدار قرون.',
      en: 'The precinct of Amun-Re features ten monumental pylons constructed across dynasties.',
      fr: 'L’enceinte d’Amon-Rê comprend dix pylônes monumentaux construits au fil des dynasties.',
      es: 'El recinto de Amón-Ra cuenta con diez pilonos erigidos a lo largo de siglos.',
      de: 'Der Bezirk des Amun-Re umfasst zehn monumentale Pylone aus mehreren Dynastien.',
    },
    story: {
      ar: 'هنا كانت تنطلق رحلة الإله السنوية في عيد الأوبت نحو معبد الأقصر عبر طريق الكباش.',
      en: 'The starting point of the divine barque procession during the annual Opet Festival.',
      fr: 'Point de départ de la barque sacrée lors de la grande fête d’Opet vers Louxor.',
      es: 'Punto de partida de la procesión divina durante la gran fiesta de Opet.',
      de: 'Startpunkt der heiligen Götterbarke während des Opet-Festes.',
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الأسرة 18 إلى 20', en: '18th to 20th Dynasties', fr: '18e à 20e dynasties', es: 'Dinastías XVIII a XX', de: '18. bis 20. Dynastie' },
    pharaoh: { ar: 'تحتمس الأول والثالث وحورمحب وسيتي الأول', en: 'Thutmose I, Thutmose III, Horemheb, Seti I', fr: 'Thoutmôsis I et III, Horemheb', es: 'Tutmosis I, III y Horemheb', de: 'Thutmosis I., III. und Horemheb' },
    architecturalHighlights: [
      { ar: 'قدس الأقداس الغرانيتي لفيليب أرهيدايوس', en: 'Granite sanctuary of Philip Arrhidaeus', fr: 'Sanctuaire en granit de Philippe Arrhidée', es: 'Santuario de granito de Filipo Arrideo', de: 'Granit-Allerheiligstes von Philipp Arrhidaios' }
    ],
    mustSee: [
      { ar: 'نقوش معركة قادش وكرنفال الاحتفالات الملكية', en: 'Kadesh battle relief inscriptions', fr: 'Reliefs de la bataille de Qadesh', es: 'Relieves de la batalla de Qadesh', de: 'Reliefs der Schlacht von Kadesch' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7190, lng: 32.6580 },
    distanceFromCenterKm: 3.2,
    openingHours: { ar: 'ضمن تذكرة مجمع الكرنك العامة', en: 'Included in Karnak General Ticket', fr: 'Inclus dans le billet général de Karnak', es: 'Incluido en la entrada general', de: 'Im Karnak-Gesamtticket enthalten' },
    ticketPrice: { ar: 'متاح للزيارة بتذكرة الكرنك الموحدة', en: 'Included in Karnak ticket', fr: 'Inclus dans le billet Karnak', es: 'Incluido en el boleto de Karnak', de: 'Im Karnak-Ticket inbegriffen' },
    status: 'open',
    order: 2,
  },
  {
    id: 'mut_temple',
    name: {
      ar: 'معبد الإلهة موت',
      en: 'Temple of Mut',
      fr: 'Temple de Mout',
      es: 'Templo de Mut',
      de: 'Tempel der Mut',
    },
    shortDesc: {
      ar: 'حرم الإلهة الأم وزوجة آمون، المحاط ببحيرة مقدسة على شكل هلال وتماثيل سخمت الرائعة.',
      en: 'The sanctum of the Mother Goddess, wrapped by a crescent-shaped sacred lake and lioness statues of Sekhmet.',
      fr: 'Le sanctuaire de la déesse-mère, ceinturé d’un lac sacré en croissant de lune et de statues de Sekhmet.',
      es: 'El recinto de la diosa madre, rodeado de un lago sagrado en forma de media luna y estatuas de Sejmet.',
      de: 'Das Heiligtum der Muttergöttin, umgeben von einem halbmondförmigen heiligen See und Sachmet-Statuen.',
    },
    fullHistory: {
      ar: 'يقع جنوب مجمع آمون ويرتبط به بطريق كباش خاص، ويضم مئات التماثيل المنحوتة من الديوريت للإلهة سخمت برأس لبوة.',
      en: 'Located south of Amun precinct, connected via an avenue of ram-headed sphinxes, featuring hundreds of diorite lioness Sekhmet statues.',
      fr: 'Situé au sud du complexe d’Amon, relié par une allée de sphinx et abritant des centaines de statues de Sekhmet.',
      es: 'Ubicado al sur de Amón, conectado por dromos y con cientos de estatuas de Sejmet en diorita.',
      de: 'Südlich des Amun-Bezirks gelegen, verbunden durch eine Sphingenallee mit hunderten Sachmet-Statuen.',
    },
    story: {
      ar: 'تمثل الإلهة موت الأمومة الكونية والحماية الملكية في المعتقد الطيبي القديم.',
      en: 'Mut embodies cosmic motherhood and royal protection in Theban mythology.',
      fr: 'Mout incarne la maternité cosmique et la protection royale.',
      es: 'Mut encarna la maternidad cósmica y la protección de la realeza.',
      de: 'Mut verkörpert die kosmische Mutterschaft und den königlichen Schutz.',
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الدولة الحديثة', en: 'New Kingdom', fr: 'Nouvel Empire', es: 'Imperio Nuevo', de: 'Neues Reich' },
    pharaoh: { ar: 'أمنحتب الثالث وحتشبسوت', en: 'Amenhotep III & Hatshepsut', fr: 'Amenhotep III et Hatchepsout', es: 'Amenhotep III y Hatshepsut', de: 'Amenophis III. und Hatschepsut' },
    architecturalHighlights: [
      { ar: 'بحيرة الأشرو الهلالية المقدسة', en: 'Crescent-shaped Sacred Lake Isheru', fr: 'Lac sacré Isherou en croissant', es: 'Lago sagrado Isheru en media luna', de: 'Halbmondförmiger Isheru-See' }
    ],
    mustSee: [
      { ar: 'صف التماثيل البازلتية برأس اللبوة', en: 'Black granodiorite lioness statues of Sekhmet', fr: 'Statues de Sekhmet à tête de lionne', es: 'Estatuas de Sejmet con cabeza de leona', de: 'Granodiorit-Statuen der Sachmet' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7118, lng: 32.6593 },
    distanceFromCenterKm: 2.8,
    openingHours: { ar: 'يومياً 8:00 ص - 4:00 م', en: 'Daily 8:00 AM - 4:00 PM', fr: 'Tous les jours 8h00 - 16h00', es: 'Todos los días 8:00 - 16:00', de: 'Täglich 8:00 - 16:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مخصصة لحرم الإلهة موت بالكرنك', en: 'Dedicated Mut precinct ticket', fr: 'Billet spécifique pour l’enceinte de Mout', es: 'Boleto para el recinto de Mut', de: 'Separates Ticket für Mut-Bezirk' },
    status: 'open',
    order: 3,
  },
  {
    id: 'khonsu_temple',
    name: {
      ar: 'معبد خونسو',
      en: 'Temple of Khonsu',
      fr: 'Temple de Khonsou',
      es: 'Templo de Jonsu',
      de: 'Tempel des Chons',
    },
    shortDesc: {
      ar: 'معبد إله القمر الطيبي، ويعد نموذجاً معمارياً متكاملاً للمعبد المصري الكلاسيكي.',
      en: 'Temple of the Theban lunar god, acclaimed as an exceptionally preserved textbook example of New Kingdom architecture.',
      fr: 'Temple du dieu lunaire thébain, joyau architectural remarquablement conservé du Nouvel Empire.',
      es: 'Templo del dios lunar de Tebas, ejemplo perfecto de arquitectura del Imperio Nuevo.',
      de: 'Tempel des thebanischen Mondgottes Chons, mustergültig erhaltenes Bauwerk des Neuen Reiches.',
    },
    fullHistory: {
      ar: 'بدأ بناؤه رمسيس الثالث في الزاوية الجنوبية الغربية لحرم آمون رع، وأكمله رمسيس الرابع وحريحور.',
      en: 'Initiated by Ramesses III in the southwest corner of Amun enclosure, completed under Ramesses IV and Herihor.',
      fr: 'Fondé par Ramsès III à l’angle sud-ouest de l’enceinte d’Amon, achevé par Ramsès IV et Hérihor.',
      es: 'Iniciado por Ramsés III en el suroeste de Amón, completado por Ramsés IV y Herihor.',
      de: 'Begonnen von Ramses III., vollendet unter Ramses IV. und Herihor.',
    },
    story: {
      ar: 'خونسو هو إله القمر والحساب الشافي، صاحب الدور الرئيسي في تقويم الأشهر والسفر الليلي.',
      en: 'Khonsu presided over the moon, healing and the cosmic reckoning of time.',
      fr: 'Khonsou régnait sur la lune, la guérison et le comput du temps céleste.',
      es: 'Jonsu presidía la luna, la sanación y el cómputo del tiempo cósmico.',
      de: 'Chons herrschte über den Mond, Heilkunst und Zeitmessung.',
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الأسرة العشرين', en: '20th Dynasty', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'رمسيس الثالث ورمسيس الرابع', en: 'Ramesses III & Ramesses IV', fr: 'Ramsès III et IV', es: 'Ramsés III y IV', de: 'Ramses III. und Ramses IV.' },
    architecturalHighlights: [
      { ar: 'الصرح الحجري ذو الأبراج المكتملة والنقوش الملونة على الأسقف', en: 'Complete stone pylon and painted ceiling reliefs', fr: 'Pylône complet et plafonds peints', es: 'Pilono completo y techos policromados', de: 'Vollständiger Pylon und bemalte Decken' }
    ],
    mustSee: [
      { ar: 'مقصورة الزورق الإلهي وأعمدة البهو الرباعية', en: 'Sacred Bark sanctuary and court columns', fr: 'Sanctuaire de la barque sacrée', es: 'Santuario de la barca sagrada', de: 'Barkenheiligtum und Vorhofsäulen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7175, lng: 32.6565 },
    distanceFromCenterKm: 3.1,
    openingHours: { ar: 'يومياً 6:00 ص - 5:30 م', en: 'Daily 6:00 AM - 5:30 PM', fr: '6h00 - 17h30', es: '6:00 - 17:30', de: '6:00 - 17:30 Uhr' },
    ticketPrice: { ar: 'مشمول بتذكرة الكرنك', en: 'Included in Karnak ticket', fr: 'Inclus dans le billet Karnak', es: 'Incluido en boleto Karnak', de: 'Im Karnak-Ticket inbegriffen' },
    status: 'open',
    order: 4,
  },
  {
    id: 'opet_temple',
    name: {
      ar: 'معبد أوبت',
      en: 'Temple of Opet',
      fr: 'Temple d’Opet',
      es: 'Templo de Opet',
      de: 'Opet-Tempel',
    },
    shortDesc: {
      ar: 'معبد بطلمي ساحر ملاصق لمعبد خونسو مكرس للإلهة أوبت (رمز الولادة والبعث).',
      en: 'An enchanting Ptolemaic temple adjoining Khonsu, dedicated to Opet, goddess of divine rebirth.',
      fr: 'Temple ptolémaïque attenant à Khonsou, dédié à la déesse de la régénération.',
      es: 'Templo ptolemaico contiguo a Jonsu, dedicado al renacimiento divino.',
      de: 'Ptolemäischer Tempel neben Chons, geweiht der Göttin der Wiedergeburt.',
    },
    fullHistory: {
      ar: 'شيده البطالمة على أنقاض مبنى قديم من عهد الأسرة الثامنة عشرة، ويتميز بسرداب سفلي وغرف ولادة إلهية.',
      en: 'Constructed by the Ptolemies over earlier New Kingdom foundations, featuring unique subterranean crypts.',
      fr: 'Érigé par les Ptolémées sur des fondations du Nouvel Empire, avec des cryptes souterraines uniques.',
      es: 'Edificado por los Ptolomeos sobre cimientos antiguos con criptas subterráneas.',
      de: 'Von den Ptolemäern über Fundamenten des Neuen Reiches mit Krypten erbaut.',
    },
    story: {
      ar: 'تجسد أوبت أنثى فرس النهر الحامية للولادة، حيث ارتبط المعبد بتجدد الإله أوزوريس وآمون.',
      en: 'Depicted as a protective hippopotamus goddess assisting in divine rebirth.',
      fr: 'Déesse hippopotame bienveillante présidant à la renaissance divine.',
      es: 'Diosa hipopótamo protectora vinculada al renacer divino.',
      de: 'Nilpferdgöttin des Schutzes und der göttlichen Wiedergeburt.',
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'العصر البطلمي والروماني', en: 'Ptolemaic and Roman Period', fr: 'Époque ptolémaïque et romaine', es: 'Época ptolemaica y romana', de: 'Ptolemäische und römische Zeit' },
    pharaoh: { ar: 'بطليموس الثامن وأوغسطس', en: 'Ptolemy VIII & Augustus', fr: 'Ptolémée VIII et Auguste', es: 'Ptolomeo VIII y Augusto', de: 'Ptolemaios VIII. und Augustus' },
    architecturalHighlights: [
      { ar: 'سرداب أوزوريس والسراديب السرية المنحوتة في أساسات الجدران', en: 'Crypt of Osiris and subterranean secret wall passages', fr: 'Crypte d’Osiris et passages secrets', es: 'Cripta de Osiris y pasadizos secretos', de: 'Osiris-Krypta und geheime Gänge' }
    ],
    mustSee: [
      { ar: 'نقوش ولادة الإله ورعايته الإلهية', en: 'Reliefs of divine birth and suckling of Amun', fr: 'Scènes de naissance divine', es: 'Escenas del nacimiento divino', de: 'Szenen der göttlichen Geburt' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7172, lng: 32.6560 },
    distanceFromCenterKm: 3.1,
    openingHours: { ar: 'ضمن مواعيد مجمع الكرنك', en: 'Within Karnak Opening Hours', fr: 'Horaires généraux de Karnak', es: 'Horario general de Karnak', de: 'Karnak-Regulärzeiten' },
    ticketPrice: { ar: 'مشمول بالتذكرة العامة للكرنك', en: 'Included in Karnak ticket', fr: 'Inclus dans le billet de Karnak', es: 'Incluido en boleto Karnak', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 5,
  },
  {
    id: 'ptah_temple',
    name: {
      ar: 'معبد بتاح (شمال الكرنك)',
      en: 'Temple of Ptah (North Karnak)',
      fr: 'Temple de Ptah',
      es: 'Templo de Ptah',
      de: 'Ptah-Tempel',
    },
    shortDesc: {
      ar: 'معبد بديع شمال مجمع الكرنك، يشتهر بتمثال الجرانيت الأسود الغامض للإلهة سخمت المحاط بالهيبة.',
      en: 'A quiet northern gem in Karnak, renowned for its captivating black granite statue of lioness Sekhmet in dim sanctum light.',
      fr: 'Joyau septentrional de Karnak, célèbre pour sa statue mystique en granit noir de Sekhmet.',
      es: 'Joya del sector norte de Karnak, célebre por la estatua de granito negro de Sejmet.',
      de: 'Nördlicher Tempel in Karnak, berühmt für die mystische Granitstatue der Sachmet.',
    },
    fullHistory: {
      ar: 'شيده تحتمس الثالث تكريماً لإله الصناع والفنون منف "بتاح"، وأعاد بناءه ملوك البطالمة.',
      en: 'Erected by Thutmose III in honour of Ptah, master craftsman god of Memphis, renewed by Ptolemaic rulers.',
      fr: 'Érigé par Thoutmôsis III en hommage à Ptah de Memphis, restauré sous les Ptolémées.',
      es: 'Erguido por Tutmosis III en honor a Ptah y restaurado por los Ptolomeos.',
      de: 'Von Thutmosis III. zu Ehren des Ptah erbaut, von Ptolemäern restauriert.',
    },
    story: {
      ar: 'يتميز قدس أقداس المعبد بشعاع ضوئي مسرحي يسقط مباشرة على تمثال سخمت الغامض.',
      en: 'Atmospheric light beam pierces the dark sanctuary directly onto the imposing Sekhmet statue.',
      fr: 'Un faisceau de lumière frappe directement la statue de Sekhmet dans l’obscurité du sanctuaire.',
      es: 'Un haz de luz natural ilumina de forma teatral la estatua de Sejmet.',
      de: 'Ein Lichtstrahl trifft gezielt auf die Ehrfurcht gebietende Sachmet-Statue.',
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الأسرة 18 والعصر البطلمي', en: '18th Dynasty & Ptolemaic', fr: '18e dynastie et Ptolémaïque', es: 'Dinastía XVIII y época ptolemaica', de: '18. Dynastie & Ptolemäer' },
    pharaoh: { ar: 'تحتمس الثالث وشباكا وبطليموس السادس', en: 'Thutmose III, Shabaka, Ptolemy VI', fr: 'Thoutmôsis III, Shabaka', es: 'Tutmosis III y Shabaka', de: 'Thutmosis III. und Schabaka' },
    architecturalHighlights: [
      { ar: 'خمس بوابات صرحية متتالية تؤدي إلى الحرم الصخري', en: 'Five sequential stone gateway portals to inner chapel', fr: 'Cinq portes monumentales alignées', es: 'Cinco puertas sucesivas hacia el santuario', de: 'Fünf Tore zum inneren Schrein' }
    ],
    mustSee: [
      { ar: 'تمثال الإلهة سخمت من الغرانيت الأسود في الغرفة المظلمة', en: 'The illuminated black granite Sekhmet statue', fr: 'Statue de Sekhmet dans la chapelle centrale', es: 'Estatua de Sejmet en granito negro iluminada', de: 'Erleuchtete Sachmet-Statue im inneren Schrein' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7208, lng: 32.6585 },
    distanceFromCenterKm: 3.4,
    openingHours: { ar: 'يومياً 6:00 ص - 5:30 م', en: 'Daily 6:00 AM - 5:30 PM', fr: '6h00 - 17h30', es: '6:00 - 17:30', de: '6:00 - 17:30 Uhr' },
    ticketPrice: { ar: 'مشمول بتذكرة الكرنك', en: 'Included in Karnak ticket', fr: 'Inclus dans le billet Karnak', es: 'Incluido en boleto Karnak', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 6,
  },
  {
    id: 'montu_temple',
    name: {
      ar: 'معبد مونتو (الكرنك الشمالي)',
      en: 'Temple of Montu',
      fr: 'Temple de Montou',
      es: 'Templo de Montu',
      de: 'Montu-Tempel',
    },
    shortDesc: {
      ar: 'حرم إله الحرب الطيبي الأصيل صاحب الرأس الصقري، يقع في الركن الشمالي للكرنك.',
      en: 'Precinct dedicated to the falcon-headed ancient Theban god of war and victory.',
      fr: 'Enceinte sacrée dédiée à l’antique dieu thébain de la guerre à tête de faucon.',
      es: 'Recinto del dios tebano de la guerra con cabeza de halcón.',
      de: 'Bezirk des alt-thebanischen Kriegsgottes Montu mit Falkenkopf.',
    },
    fullHistory: {
      ar: 'كان مونتو المعبود الحامي لطيبة قبل ارتقاء آمون، ويضم الحرم معبداً رئيسياً وبحيرة مقدسة وقاعة أساطين أمنحتب الثالث.',
      en: 'Montu was the original protector god of Thebes before Amun’s prominence; features Amenhotep III columns.',
      fr: 'Montou était le dieu tutélaire de Thèbes avant Amon, le site conserve des colonnes d’Amenhotep III.',
      es: 'Montu fue el dios original de Tebas antes de Amón, con columnas de Amenhotep III.',
      de: 'Montu war vor Amun der Hauptgott von Theben, mit Säulen Amenophis III.',
    },
    story: {
      ar: 'يرمز لقوة الملك القتالية ودرع طيبة الحصين في مواجهة الغزاة.',
      en: 'Symbolized the martial prowess of the pharaoh and the unyielding shield of Thebes.',
      fr: 'Symbole du courage guerrier du pharaon et bouclier de Thèbes.',
      es: 'Símbolo del valor marcial faraónico y escudo de Tebas.',
      de: 'Symbol für militärische Stärke und Schutz des Reiches.',
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الدولة الحديثة إلى العصر البطلمي', en: 'New Kingdom to Ptolemaic', fr: 'Nouvel Empire à l’époque ptolémaïque', es: 'Imperio Nuevo a Ptolomeos', de: 'Neues Reich bis Ptolemäer' },
    pharaoh: { ar: 'أمنحتب الثالث ونختنبو الثاني', en: 'Amenhotep III & Nectanebo II', fr: 'Amenhotep III et Nectanébo II', es: 'Amenhotep III y Nectanebo II', de: 'Amenophis III. und Nektanebos II.' },
    architecturalHighlights: [
      { ar: 'البوابة البطلمية الضخمة المشيدة في الجدار الطوبي العتيق', en: 'Monumental stone gate of Ptolemy III in mudbrick enclosure', fr: 'Porte monumentale de Ptolémée III', es: 'Puerta monumental de Ptolomeo III', de: 'Monumentales Steintor Ptolemaios III.' }
    ],
    mustSee: [
      { ar: 'نقوش تقديم القرابين لمونتو الصقري على الجدران الحجرية', en: 'Sacrificial reliefs honoring the falcon-headed Montu', fr: 'Reliefs d’offrandes à Montou', es: 'Relieves de ofrendas a Montu', de: 'Opferreliefs für Montu' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7230, lng: 32.6590 },
    distanceFromCenterKm: 3.6,
    openingHours: { ar: 'يتطلب تنسيقاً أو تصريحاً أثرياً مع وزارة الآثار', en: 'Special archaeological permit / coordination required', fr: 'Visite sur autorisation archéologique', es: 'Requiere permiso arqueológico', de: 'Sondergenehmigung erforderlich' },
    ticketPrice: { ar: 'يرجى مراجعة إدارة تفتيش آثار الكرنك', en: 'Inquire at Karnak Antiquities Inspectorate', fr: 'Contacter l’inspectorat de Karnak', es: 'Consultar en la inspección de Karnak', de: 'Beim Antikeninspektorat erfragen' },
    status: 'permit_required',
    order: 7,
  },
  {
    id: 'akh_menu_temple',
    name: {
      ar: 'معبد أخ منو (صالة أعياد تحتمس الثالث)',
      en: 'Festival Hall of Thutmose III (Akh-Menu)',
      fr: 'Akh-Menou (Salle des fêtes de Thoutmôsis III)',
      es: 'Aj-Menu (Sala de Fiestas de Tutmosis III)',
      de: 'Ach-Menu (Festtempel Thutmosis III.)',
    },
    shortDesc: {
      ar: 'أعظم قاعات الأعياد العسكرية لملك مصر المحارب تحتمس الثالث، بأعمدة خيمة الحرب الفريدة وحديقة النباتات الأثرية.',
      en: 'The extraordinary Jubilee hall of warrior-king Thutmose III, featuring unique tent-pole columns and the famous Botanical Garden reliefs.',
      fr: 'Salle jubilée du grand conquérant Thoutmôsis III, aux colonnes en piquets de tente et reliefs botaniques légendaires.',
      es: 'Salón jubilar de Tutmosis III, con columnas estilo tiendas de campaña y el Jardín Botánico tallado.',
      de: 'Einzigartiger Festhallentempel Thutmosis III. mit Zeltstangensäulen und dem berühmten Botanischen Garten.',
    },
    fullHistory: {
      ar: 'شيد شرق فناء الكرنك وسماه تحتمس الثالث "أخ منو" أي المجيد في الآثار تخليداً لانتصاراته العسكرية في آسيا وإفريقيا.',
      en: 'Built at the eastern edge of Karnak sanctum, celebrated for depicting exotic fauna and flora brought back from Syrian campaigns.',
      fr: 'Érigé à l’est du sanctuaire d’Amon pour célébrer ses triomphes militaires et ses explorations scientifiques.',
      es: 'Erguido al este de Karnak para conmemorar las campañas militares en Asia.',
      de: 'Im Osten des Amun-Heiligtums erbaut zur Feier seiner siegreichen Feldzüge.',
    },
    story: {
      ar: 'أعمدته المقلوبة تستحضر أوتاد خيمة الحرب الملكية التي كان يقود منها فتوحاته.',
      en: 'The inverted bell-shaped capitals mimic the wooden tent poles of the royal military pavilion.',
      fr: 'Les colonnes inversées évoquent les piquets de la tente de campagne du pharaon.',
      es: 'Las columnas imitan los postes de la tienda de campaña militar del faraón.',
      de: 'Die Säulenformen imitieren die Zeltstangen des königlichen Feldlagers.',
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'تحتمس الثالث', en: 'Thutmose III', fr: 'Thoutmôsis III', es: 'Tutmosis III', de: 'Thutmosis III.' },
    architecturalHighlights: [
      { ar: 'أعمدة الخيمة الحربية ذات التيجان المقلوبة والنقوش الزرقاء والحمراء', en: 'Inverted tent-pole columns with original pigment', fr: 'Colonnes en piquets de tente aux couleurs d’origine', es: 'Columnas en forma de estacas de tienda pintadas', de: 'Zeltstangensäulen mit originalen Farbresten' },
      { ar: 'غرفة الحديقة النباتية التي توثق نباتات وحيوانات الشرق الأدنى القديم', en: 'Botanical Garden chamber depicting exotic plants and animals', fr: 'Chambre du Jardin Botanique avec flore et faune exotiques', es: 'Cámara del Jardín Botánico con flora y fauna asiática', de: 'Botanischer Garten mit exotischer Flora und Fauna' }
    ],
    mustSee: [
      { ar: 'نقوش الحديقة النباتية الدقيقة المنحوتة في الحجر الرملي', en: 'Finely carved reliefs of rare Syrian birds and lotus flowers', fr: 'Reliefs d’oiseaux et de fleurs de lotus', es: 'Relieves tallados del jardín botánico', de: 'Präzise Reliefs des Botanischen Gartens' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7185, lng: 32.6598 },
    distanceFromCenterKm: 3.3,
    openingHours: { ar: 'يومياً 6:00 ص - 5:30 م', en: 'Daily 6:00 AM - 5:30 PM', fr: '6h00 - 17h30', es: '6:00 - 17:30', de: '6:00 - 17:30 Uhr' },
    ticketPrice: { ar: 'مشمول بتذكرة الكرنك الموحدة', en: 'Included in Karnak ticket', fr: 'Inclus dans le billet de Karnak', es: 'Incluido en boleto Karnak', de: 'Im Karnak-Ticket inbegriffen' },
    status: 'open',
    order: 8,
  },
  {
    id: 'white_chapel_senusret',
    name: {
      ar: 'المقصورة البيضاء لسنوسرت الأول',
      en: 'White Chapel of Senusret I',
      fr: 'Chapelle Blanche de Sésostris Ier',
      es: 'Capilla Blanca de Senusret I',
      de: 'Weiße Kapelle von Sesostris I.',
    },
    shortDesc: {
      ar: 'تحفة معمارية من الحجر الجيري الأبيض الناصع من عصر الدولة الوسطى بمتحف الكرنك المفتوح.',
      en: 'A crystalline Middle Kingdom masterpiece of brilliant white limestone inside Karnak Open Air Museum.',
      fr: 'Chef-d’œuvre en calcaire blanc étincelant du Moyen Empire au musée en plein air de Karnak.',
      es: 'Obra maestra de deslumbrante caliza blanca del Imperio Medio en el museo al aire libre.',
      de: 'Meisterwerk aus strahlend weißem Kalkstein des Mittleren Reiches im Freilichtmuseum.'
    },
    fullHistory: {
      ar: 'شيدت للاحتفال بعيد سد الثلاثيني للملك سنوسرت الأول، وفككها أمنحتب الثالث واستخدم أحجارها كحشوة للصرح الثالث، حتى أعاد الأثريون تجميعها بحرفية مذهلة.',
      en: 'Built for Senusret I’s Sed Jubilee, later dismantled by Amenhotep III as fill for the 3rd Pylon, meticulously reassembled block by block.',
      fr: 'Édifiée pour le jubilé Sed, remployée par Amenhotep III, puis admirablement remontée bloc par bloc.',
      es: 'Erigida para el festival Sed y reensamblada prodigiosamente tras ser hallada en el tercer pilono.',
      de: 'Für das Sed-Fest errichtet und meisterhaft Stein für Stein wieder aufgebaut.'
    },
    story: {
      ar: 'تعد أهم وثيقة جغرافية لمصر القديمة، حيث نقشت عليها قوائم المقاطعات المصرية وحدودها الرسمية بدقة متناهية.',
      en: 'Serves as ancient Egypt’s foremost geographic charter, listing all 42 nomes and their measurements.',
      fr: 'Le document géographique le plus précieux de l’Égypte antique, répertoriant tous les nomes.',
      es: 'El documento cartográfico más importante de Egipto, listando los 42 nomos.',
      de: 'Wichtigstes geographisches Dokument des alten Ägypten mit Verzeichnis aller Gaue.'
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الدولة الوسطى (الأسرة 12)', en: 'Middle Kingdom (12th Dynasty)', fr: 'Moyen Empire (12e dynastie)', es: 'Imperio Medio (Dinastía XII)', de: 'Mittleres Reich (12. Dynastie)' },
    pharaoh: { ar: 'سنوسرت الأول', en: 'Senusret I', fr: 'Sésostris Ier', es: 'Senusret I', de: 'Sesostris I.' },
    architecturalHighlights: [
      { ar: 'نقوش غائرة شديدة النقاء على الحجر الجيري الأبيض الملكي', en: 'Exquisite ultra-fine hieroglyphic reliefs in pure limestone', fr: 'Reliefs d’une finesse absolue dans le calcaire fin', es: 'Relieves jeroglíficos de pureza insuperable', de: 'Hauchfeine Hieroglyphenreliefs in feinstem Kalkstein' }
    ],
    mustSee: [
      { ar: 'جدول المقاطعات الإدارية وحساب مساحات النيل', en: 'List of Egyptian Nomes and Nile inundation benchmarks', fr: 'Liste canonique des nomes d’Égypte', es: 'Registro oficial de los nomos egipcios', de: 'Offizielle Liste der Gaue Ägyptens' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7196, lng: 32.6568 },
    distanceFromCenterKm: 3.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:30 م (متحف الكرنك المفتوح)', en: 'Daily 6:00 AM - 5:30 PM (Open Air Museum)', fr: '6h00 - 17h30 (Musée en plein air)', es: '6:00 - 17:30 (Museo al aire libre)', de: '6:00 - 17:30 Uhr (Freilichtmuseum)' },
    ticketPrice: { ar: 'تذكرة مخصصة للمتحف المفتوح بالكرنك', en: 'Dedicated Open Air Museum ticket', fr: 'Billet spécifique Musée plein air', es: 'Boleto para museo al aire libre', de: 'Separates Freilichtmuseum-Ticket' },
    status: 'open',
    order: 9,
  },
  {
    id: 'red_chapel_hatshepsut',
    name: {
      ar: 'المقصورة الحمراء لحتشبسوت',
      en: 'Red Chapel of Hatshepsut',
      fr: 'Chapelle Rouge d’Hatchepsout',
      es: 'Capilla Roja de Hatshepsut',
      de: 'Rote Kapelle der Hatschepsut',
    },
    shortDesc: {
      ar: 'مقصورة حجرية رائعة من الكوارتزيت الأحمر والديوريت الأسود أقامتها الملكة حتشبسوت لحفظ القارب المقدس.',
      en: 'A stunning bark shrine constructed from red quartzite and black granodiorite by Queen Hatshepsut.',
      fr: 'Somptueux reposoir de barque sacrée en quartzite rouge et diorite noire édifié par la reine Hatchepsout.',
      es: 'Capilla del barco sagrado construida en cuarcita roja y diorita negra por la reina Hatshepsut.',
      de: 'Prächtiger Barkenschrein aus rotem Quarzit und schwarzem Diorit von Königin Hatschepsut.'
    },
    fullHistory: {
      ar: 'فككت في عهد تحتمس الثالث واستخدمت كتلها في بناء الصرح الثالث، ثم استخرجها علماء الآثار الفرنسيون وأعادوها بكامل بهائها في متحف الكرنك المفتوح عام 2002.',
      en: 'Dismantled under Thutmose III and placed inside the 3rd Pylon; reconstructed in 2002 in Karnak Open Air Museum.',
      fr: 'Démantelée sous Thoutmôsis III et magistralement reconstruite en 2002 par la mission franco-égyptienne.',
      es: 'Reconstruida en 2002 tras ser rescatada del tercer pilono.',
      de: '2002 im Freilichtmuseum nach Bergung aus dem 3. Pylon wiedererrichtet.'
    },
    story: {
      ar: 'تظهر فيها حتشبسوت مرتدية التاج المزدوج بكامل أردية الحكم الشرعية أثناء ممارسة الطقوس الدينية بجوار تحتمس الثالث.',
      en: 'Depicts Hatshepsut in full royal regalia performing rituals as co-ruler alongside Thutmose III.',
      fr: 'Montre Hatchepsout en costume pharaonique complet accomplissant les rites sacrés.',
      es: 'Muestra a Hatshepsut con atuendo real realizando rituales junto a Tutmosis III.',
      de: 'Zeigt Hatschepsut im vollen königlichen Ornat bei heiligen Ritualen.'
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'الملكة حتشبسوت وتحتمس الثالث', en: 'Queen Hatshepsut & Thutmose III', fr: 'Reine Hatchepsout et Thoutmôsis III', es: 'Reina Hatshepsut y Tutmosis III', de: 'Königin Hatschepsut & Thutmosis III.' },
    architecturalHighlights: [
      { ar: 'تناسق بديع بين الكوارتزيت الأحمر في الأعلى والديوريت الأسود اللامع في القاعدة', en: 'Harmonious pairing of red quartzite walls on black diorite base', fr: 'Association de quartzite rouge et de base en diorite', es: 'Combinación de cuarcita roja y base de diorita negra', de: 'Harmonie aus rotem Quarzit und schwarzem Diorit' }
    ],
    mustSee: [
      { ar: 'مشاهد احتفال الأوبت وحمل زورق آمون الذهبي على أكتاف الكهنة', en: 'Detailed relief panels of the Opet sacred bark procession', fr: 'Panneaux de la procession de la barque d’Amon', es: 'Paneles de la procesión de la barca sagrada de Amón', de: 'Reliefs der Barkenprozession während des Opet-Festes' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7198, lng: 32.6566 },
    distanceFromCenterKm: 3.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:30 م (متحف الكرنك المفتوح)', en: 'Daily 6:00 AM - 5:30 PM (Open Air Museum)', fr: '6h00 - 17h30 (Musée en plein air)', es: '6:00 - 17:30', de: '6:00 - 17:30 Uhr' },
    ticketPrice: { ar: 'تذكرة متحف الكرنك المفتوح', en: 'Karnak Open Air Museum ticket', fr: 'Billet Musée de plein air', es: 'Boleto museo aire libre', de: 'Freilichtmuseum-Ticket' },
    status: 'open',
    order: 10,
  },
  {
    id: 'sacred_lake',
    name: {
      ar: 'البحيرة المقدسة بالكرنك',
      en: 'Sacred Lake of Karnak',
      fr: 'Lac Sacré de Karnak',
      es: 'Lago Sagrado de Karnak',
      de: 'Heiliger See von Karnak',
    },
    shortDesc: {
      ar: 'بحيرة مائية عريقة أبعادها 120 × 77 متراً، كانت مخصصة لتطهير الكهنة وإقامة الطقوس الليلية.',
      en: 'A massive 120 × 77m sacred pool excavated into bedrock for priestly purifications and aquatic rituals.',
      fr: 'Immense bassin sacré de 120 × 77 m creusé pour les purifications rituelles des prêtres d’Amon.',
      es: 'Vasto estanque sagrado de 120 × 77 m destinado a las purificaciones de los sacerdotes.',
      de: 'Monumentales Wasserbecken (120 × 77 m) für die rituellen Waschungen der Priesterschaft.'
    },
    fullHistory: {
      ar: 'حفرها تحتمس الثالث في قلب مجمع الكرنك، وتتغذى بمياه النيل الجوفية ولم تجف مياهها منذ آلاف السنين.',
      en: 'Dug under Thutmose III, fed by subterranean Nile waters, maintaining water balance for millennia.',
      fr: 'Creusé sous Thoutmôsis III et alimenté par la nappe phréatique du Nil sans jamais s’assécher.',
      es: 'Excavado bajo Tutmosis III y alimentado por las aguas subterráneas del Nilo.',
      de: 'Unter Thutmosis III. ausgehoben und vom Grundwasser des Nils gespeist.'
    },
    story: {
      ar: 'كان الكهنة يتطهرون في مياهها أربع مرات يومياً، ويسبح فيها الإوز والطيور المقدسة الخاصة بآمون.',
      en: 'Priests bathed here four times daily; holy geese dedicated to Amun swam across its shimmering waters.',
      fr: 'Les prêtres s’y purifiaient quatre fois par jour parmi les oies sacrées d’Amon.',
      es: 'Los sacerdotes se purificaban cuatro veces al día en sus aguas sagradas.',
      de: 'Die Priester reinigten sich viermal täglich im heiligen Wasser.'
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الدولة الحديثة', en: 'New Kingdom', fr: 'Nouvel Empire', es: 'Imperio Nuevo', de: 'Neues Reich' },
    pharaoh: { ar: 'تحتمس الثالث', en: 'Thutmose III', fr: 'Thoutmôsis III', es: 'Tutmosis III', de: 'Thutmosis III.' },
    architecturalHighlights: [
      { ar: 'درجات حجرية محيطة تسمح بالنزول للمياه وجهاز قياس النيل المقترن بها', en: 'Stone perimeter steps and adjacent ancient Nilometer', fr: 'Escaliers de pierre et nilomètre antique attenant', es: 'Gradas de piedra circundantes y nilómetro', de: 'Steinerne Treppenanlagen und antikes Nilometer' }
    ],
    mustSee: [
      { ar: 'تمثال الجعران المقدس الضخم لـ أمنحتب الثالث على حافة البحيرة', en: 'Colossal sacred scarab monument of Amenhotep III beside the water', fr: 'Statue colossale du scarabée sacré d’Amenhotep III', es: 'Monumento colosal del escarabajo sagrado', de: 'Kolossales Skarabäus-Denkmal am Ufer des Sees' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7179, lng: 32.6582 },
    distanceFromCenterKm: 3.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:30 م', en: 'Daily 6:00 AM - 5:30 PM', fr: '6h00 - 17h30', es: '6:00 - 17:30', de: '6:00 - 17:30 Uhr' },
    ticketPrice: { ar: 'مشمول بتذكرة الكرنك الموحدة', en: 'Included in Karnak ticket', fr: 'Inclus dans le billet Karnak', es: 'Incluido en boleto Karnak', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 11,
  },
  {
    id: 'luxor_temple',
    name: {
      ar: 'معبد الأقصر',
      en: 'Luxor Temple',
      fr: 'Temple de Louxor',
      es: 'Templo de Lúxor',
      de: 'Luxor-Tempel',
    },
    shortDesc: {
      ar: 'جوهرة قلب مدينة الأقصر، معبد تتويج الملوك ومقر تجدد الملكية الإلهية على ضفاف النيل مباشرة.',
      en: 'The crown jewel of central Luxor on the Nile bank, dedicated to royal coronation and the annual Opet renewal.',
      fr: 'Joyau de la ville au bord du Nil, temple du couronnement des rois et du renouvellement royal.',
      es: 'Joya central de Lúxor a orillas del Nilo, templo de la coronación real y el renacer divino.',
      de: 'Das Juwel im Zentrum von Luxor am Nilufer, Ort der königlichen Krönung und des Opet-Festes.'
    },
    fullHistory: {
      ar: 'شيده الملك أمنحتب الثالث وأكمله رمسيس الثاني، وأضاف إليه الإسكندر الأكبر مقصورة خاصة به. يتميز بإضاءته الليلية الساحرة.',
      en: 'Erected by Amenhotep III and Ramesses II, with later chapels by Alexander the Great; famed for nocturnal floodlighting.',
      fr: 'Édifié par Amenhotep III et Ramsès II, enrichi par Alexandre le Grand ; illuminations nocturnes féeriques.',
      es: 'Erigido por Amenhotep III y Ramsés II, con capilla de Alejandro Magno; famoso por su iluminación nocturna.',
      de: 'Von Amenophis III. und Ramses II. erbaut, mit Schrein Alexanders des Großen; berühmt für nächtliche Beleuchtung.'
    },
    story: {
      ar: 'كان المعبد مسرحاً لعيد الأوبت السنوي، حيث ينتقل آمون في موكب مهيب لتجديد الخصوبة والطاقة الملكية للفرعون.',
      en: 'Focal destination of the annual Opet Festival where Amun’s barque revitalized the living Pharaoh.',
      fr: 'Théâtre de la fête d’Opet, régénérant l’énergie royale et divine du pharaon régnant.',
      es: 'Escenario de la fiesta de Opet para revitalizar la energía sagrada del soberano.',
      de: 'Schauplatz des Opet-Festes zur rituellen Erneuerung der königlichen Herrschaft.'
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة والتاسعة عشرة', en: '18th & 19th Dynasties', fr: '18e et 19e dynasties', es: 'Dinastías XVIII y XIX', de: '18. und 19. Dynastie' },
    pharaoh: { ar: 'أمنحتب الثالث ورمسيس الثاني', en: 'Amenhotep III & Ramesses II', fr: 'Amenhotep III et Ramsès II', es: 'Amenhotep III y Ramsés II', de: 'Amenophis III. und Ramses II.' },
    architecturalHighlights: [
      { ar: 'صرح رمسيس الثاني مع التماثيل الستة الضخمة والمسلة الغرانيتية الشامخة', en: 'Ramesses II pylon fronted by colossal seated statues and towering granite obelisk', fr: 'Pylône de Ramsès II aux colosses assis et obélisque de granit', es: 'Pilono de Ramsés II con colosos sedentes y obelisco', de: 'Pylon von Ramses II. mit Kolossalstatuen und Granit-Obelisk' },
      { ar: 'ممشى أعمدة أمنحتب الثالث الأسطورية ذات التيجان البردية المفتوحة', en: 'Monumental papyrus colonnade of Amenhotep III', fr: 'Grande colonnade d’Amenhotep III', es: 'Gran columnata de Amenhotep III', de: 'Große Papyrussäulen-Kolonnade von Amenophis III.' }
    ],
    mustSee: [
      { ar: 'المعبد ليلاً تحت الأضواء الكاشفة في إطلالته الساحرة على كورنيش النيل', en: 'Nocturnal visit under architectural illuminations', fr: 'Visite nocturne sous les illuminations', es: 'Visita nocturna iluminada', de: 'Nächtlicher Rundgang unter festlicher Beleuchtung' },
      { ar: 'مسجد سيدي أبو الحجاج الأقصري المشيد بأعلى أطلال المعبد الفرعوني', en: 'Mosque of Abu el-Haggag built atop temple ruins', fr: 'Mosquée d’Abou el-Haggag perchée sur les ruines', es: 'Mezquita de Abu el-Haggag sobre las ruinas', de: 'Abu-el-Haggag-Moschee auf den antiken Mauern' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 25.6995, lng: 32.6393 },
    distanceFromCenterKm: 0.1,
    openingHours: { ar: 'يومياً 6:00 ص - 10:00 م (مفتوح للزيارة الليلية)', en: 'Daily 6:00 AM - 10:00 PM (Night visits open)', fr: '6h00 - 22h00 (visites nocturnes)', es: '6:00 - 22:00 (visitas nocturnas)', de: '6:00 - 22:00 Uhr (Abendöffnung)' },
    ticketPrice: { ar: '400 ج.م للأجانب / 40 ج.م للمصريين', en: '400 EGP Foreigners / 40 EGP Egyptians', fr: '400 EGP Étrangers / 40 EGP Égyptiens', es: '400 EGP Extranjeros / 40 EGP Egipcios', de: '400 EGP Ausländer / 40 EGP Ägypter' },
    status: 'open',
    featured: true,
    order: 12,
  },
  {
    id: 'avenue_of_sphinxes',
    name: {
      ar: 'طريق الكباش التاريخي',
      en: 'Avenue of Sphinxes (Dromos)',
      fr: 'Allée des Sphinx',
      es: 'Avenida de las Esfinges',
      de: 'Sphingenallee (Dromos)',
    },
    shortDesc: {
      ar: 'الممشى الملكي والطقسي الأسطوري بطول 2.7 كم الذي يربط بين معبدي الكرنك والأقصر بأكثر من 1050 تمثالاً.',
      en: 'The legendary 2.7 km grand ceremonial highway lined with over 1,050 sphinxes, connecting Karnak to Luxor Temple.',
      fr: 'L’allée royale cérémonielle de 2,7 km bordée de plus de 1 050 sphinx reliant Karnak à Louxor.',
      es: 'La majestuosa calzada procesional de 2,7 km flanqueada por más de 1.050 esfinges.',
      de: 'Die 2,7 km lange königliche Prozessionsstraße mit über 1.050 Sphingen zwischen Karnak und Luxor.'
    },
    fullHistory: {
      ar: 'شيد الطريق على مراحل بدءاً من حتشبسوت وأمنحتب الثالث واكتمل في عهد نختنبو الأول. أعيد افتتاحه في احتفال عالمي مبهر في نوفمبر 2021.',
      en: 'Commissioned across dynasties and completed by Nectanebo I; triumphantly inaugurated globally in November 2021.',
      fr: 'Édifiée sur plusieurs règnes, achevée par Nectanébo Ier ; réinaugurée lors d’une cérémonie mondiale en 2021.',
      es: 'Culminada por Nectanebo I e inaugurada mundialmente en una fastuosa gala en noviembre de 2021.',
      de: 'Von Nektanebos I. vollendet und im November 2021 feierlich weltweit wiedereröffnet.'
    },
    story: {
      ar: 'كان يشهد الموكب الإلهي المهيب لعيد الأوبت، حيث يحمل الكهنة قوارب الثالوث الطيبي وسط ترانيم الشعب وأهازيج الفرح.',
      en: 'The divine stage for the sacred Opet procession, carrying the golden barques amid festive music and incense.',
      fr: 'Scène de la grandiose procession d’Opet transportant les barques sacrées dans les parfums d’encens.',
      es: 'Vía sagrada por donde discurría la procesión de las barcas divinas durante las festividades.',
      de: 'Schauplatz der festlichen Opet-Prozession mit heiligen Götterbarken und Musik.'
    },
    category: 'east_temple',
    bank: 'east_bank',
    epoch: { ar: 'الأسرة 18 حتى الأسرة 30', en: '18th to 30th Dynasties', fr: '18e à 30e dynasties', es: 'Dinastías XVIII a XXX', de: '18. bis 30. Dynastie' },
    pharaoh: { ar: 'أمنحتب الثالث ونختنبو الأول', en: 'Amenhotep III & Nectanebo I', fr: 'Amenhotep III et Nectanébo Ier', es: 'Amenhotep III y Nectanebo I', de: 'Amenophis III. und Nektanebos I.' },
    architecturalHighlights: [
      { ar: '1057 قاعدة تمثال تضم تماثيل الكباش ذات رأس الكبش وتماثيل الأسود ذات الرأس البشري', en: '1,057 pedestals bearing ram-headed and human-headed sphinxes', fr: '1 057 piédestaux d’allure royale aux sphinx criocéphales', es: 'Más de mil pedestales con esfinges criocéfalas y humanas', de: 'Über 1.000 Postamente mit Widder- und Menschenkopfsphingen' }
    ],
    mustSee: [
      { ar: 'السير ليلاً بين أسراب الكباش المضاءة الواصلة بين المعبدين', en: 'Night stroll alongside the illuminated stone sphinxes', fr: 'Promenade nocturne le long de la voie illuminée', es: 'Paseo nocturno por la calzada iluminada', de: 'Nächtlicher Spaziergang entlang der beleuchteten Sphingen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7080, lng: 32.6480 },
    distanceFromCenterKm: 1.2,
    openingHours: { ar: 'يومياً 6:00 ص - 10:00 م', en: 'Daily 6:00 AM - 10:00 PM', fr: '6h00 - 22h00', es: '6:00 - 22:00', de: '6:00 - 22:00 Uhr' },
    ticketPrice: { ar: 'متاح مع تذاكر معبد الكرنك أو الأقصر', en: 'Accessible via Karnak or Luxor Temple entrance', fr: 'Accessible via entrée Karnak ou Louxor', es: 'Accesible desde entrada de Karnak o Lúxor', de: 'Über Eingänge Luxor oder Karnak zugänglich' },
    status: 'open',
    featured: true,
    order: 13,
  },
  {
    id: 'luxor_museum',
    name: {
      ar: 'متحف الأقصر للفن المصري القديم',
      en: 'Luxor Museum of Ancient Art',
      fr: 'Musée de Louxor',
      es: 'Museo de Lúxor',
      de: 'Luxor-Museum',
    },
    shortDesc: {
      ar: 'أحد أرقى المتاحف الأثرية في الشرق الأوسط، يعرض نخبة مختارة من أروع روائع النحت الطيبي والملكي.',
      en: 'One of the world’s finest archaeological museums, displaying curated masterworks of Theban royal sculpture.',
      fr: 'L’un des plus élégants musées archéologiques au monde, abritant les chefs-d’œuvre de la statuaire thébaine.',
      es: 'Uno de los museos más selectos del mundo, con obras maestras de la escultura real tebana.',
      de: 'Eines der feinsten Museen der Welt mit erlesenen Meisterwerken thebanischer Bildhauerkunst.'
    },
    fullHistory: {
      ar: 'افتتح عام 1975 على كورنيش النيل وصممه المهندس المصري محمود الحكيم. يضم خبيئة معبد الأقصر المكتشفة عام 1989 وتماثيل تحتمس الثالث وأمنحتب الثالث.',
      en: 'Opened in 1975 on the Corniche, featuring the extraordinary 1989 Luxor Temple cachette and masterpieces of Thutmose III.',
      fr: 'Inauguré en 1975, abritant la célèbre cachette de statues découverte en 1989 à Louxor.',
      es: 'Inaugurado en 1975, alberga el tesoro de estatuas de la cachette descubierta en 1989.',
      de: '1975 eröffnet, beherbergt den berühmten Statuen-Cache von 1989 aus dem Luxor-Tempel.'
    },
    story: {
      ar: 'صممت قاعاته وإضاءاته خصيصاً لإبراز الجمال الجمالي والروحي لكل منحوتة كأنها عمل فني خالد.',
      en: 'Curated with dramatic pinpoint illumination to highlight the spiritual grace of ancient stone craft.',
      fr: 'Muséographie épurée mettant en valeur la pureté spirituelle des sculptures antiques.',
      es: 'Diseño museográfico refinado con iluminación que resalta la belleza de cada talla.',
      de: 'Ausgefeilte Beleuchtung betont die spirituelle Ausdruckskraft der Bildwerke.'
    },
    category: 'museum',
    bank: 'east_bank',
    epoch: { ar: 'الدولة القديمة حتى العصر الإسلامي', en: 'Old Kingdom to Islamic Era', fr: 'Ancien Empire à l’époque islamique', es: 'Imperio Antiguo a época islámica', de: 'Altes Reich bis islamische Zeit' },
    pharaoh: { ar: 'تحتمس الثالث، أمنحتب الثالث، حورمحب', en: 'Thutmose III, Amenhotep III, Horemheb', fr: 'Thoutmôsis III, Amenhotep III', es: 'Tutmosis III y Amenhotep III', de: 'Thutmosis III., Amenophis III.' },
    architecturalHighlights: [
      { ar: 'قاعة خبيئة تماثيل معبد الأقصر ذات النحت الألاباستري والديوريتي المثالي', en: 'Luxor Temple Cachette gallery of pristine diorite sculptures', fr: 'Galerie de la cachette aux statues en diorite polie', es: 'Galería de la cachette con estatuas de diorita', de: 'Cachette-Saal mit vollendeten Diorit-Statuen' }
    ],
    mustSee: [
      { ar: 'تمثال أمنحتب الثالث البديع مع المعبود سوبك من الألباستر', en: 'Calcite double statue of Amenhotep III and crocodile god Sobek', fr: 'Statue double en albâtre d’Amenhotep III et Sobek', es: 'Estatua doble en alabastro de Amenhotep III y Sobek', de: 'Alabaster-Doppelstatue von Amenophis III. und Sobek' },
      { ar: 'مومياء أحمس الأول قاهر الهكسوس ومومياء رمسيس الأول', en: 'Royal mummies of Ahmose I and Ramesses I', fr: 'Momies royales d’Ahmôsis Ier et Ramsès Ier', es: 'Momias reales de Ahmose I y Ramsés I', de: 'Königsmumien von Ahmose I. und Ramses I.' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7078, lng: 32.6436 },
    distanceFromCenterKm: 1.0,
    openingHours: { ar: 'يومياً 9:00 ص - 2:00 م ، ومن 5:00 م - 9:00 م', en: 'Daily 9:00 AM - 2:00 PM & 5:00 PM - 9:00 PM', fr: '9h00 - 14h00 et 17h00 - 21h00', es: '9:00 - 14:00 y 17:00 - 21:00', de: '9:00 - 14:00 & 17:00 - 21:00 Uhr' },
    ticketPrice: { ar: '200 ج.م للأجانب / 30 ج.م للمصريين', en: '200 EGP Foreigners / 30 EGP Egyptians', fr: '200 EGP Étrangers / 30 EGP Égyptiens', es: '200 EGP Extranjeros / 30 EGP Egipcios', de: '200 EGP Ausländer / 30 EGP Ägypter' },
    status: 'open',
    featured: true,
    order: 14,
  },
  {
    id: 'mummification_museum',
    name: {
      ar: 'متحف التحنيط',
      en: 'Mummification Museum',
      fr: 'Musée de la Momification',
      es: 'Museo de la Momificación',
      de: 'Mumifizierungsmuseum',
    },
    shortDesc: {
      ar: 'المتحف التخصصي الفريد في العالم الذي يكشف أسرار وتقنيات التحنيط الفرعوني والخلود الأبدي.',
      en: 'The world’s only dedicated museum revealing the sacred secrets, tools, and rituals of ancient Egyptian mummification.',
      fr: 'Unique musée au monde dédié aux secrets sacrés, outils et rituels de la momification.',
      es: 'El único museo del mundo consagrado a los secretos y herramientas de la momificación.',
      de: 'Das weltweit einzige Museum über die heiligen Geheimnisse und Techniken der altägyptischen Mumifizierung.'
    },
    fullHistory: {
      ar: 'يقع على كورنيش النيل شمال معبد الأقصر، وافتتح عام 1997 ليقدم عرضاً متكاملاً للطقوس الجنائزية والأدوات الجراحية والتوابيت.',
      en: 'Opened in 1997 on Luxor Corniche, presenting surgical tools, natron salts, and mummified animals.',
      fr: 'Inauguré en 1997 sur la corniche, présentant instruments chirurgicaux, résines et animaux momifiés.',
      es: 'Abierto en 1997 en la cornisa, muestra instrumental quirúrgico, sales de natrón y animales sagrados.',
      de: '1997 eröffnet, zeigt chirurgische Instrumente, Natronsalze und heilige Tiermumien.'
    },
    story: {
      ar: 'يجيب على السؤال الوجودي الأكبر: كيف استطاع الفراعنة حفظ الجسد البشري لآلاف السنين في رحلة العبور نحو الأبدية؟',
      en: 'Answers the ancient mystery of bodily preservation for the soul’s journey to Osiris and the afterlife.',
      fr: 'Révèle comment les Égyptiens assuraient la survie éternelle du corps pour l’éternité auprès d’Osiris.',
      es: 'Explica el arte milenario de preservar el cuerpo para el viaje inmortal del alma.',
      de: 'Erklärt die Kunst der Körpererhaltung für die Reise der Seele in die Ewigkeit.'
    },
    category: 'museum',
    bank: 'east_bank',
    epoch: { ar: 'مصر القديمة من عصر الأسرات', en: 'Dynastic Ancient Egypt', fr: 'Égypte pharaonique', es: 'Egipto dinástico', de: 'Pharaonisches Ägypten' },
    pharaoh: { ar: 'مجموعة مقتنيات كهنة آمون وممومياوات الأسر المختلفة', en: 'Theban priestly collections and mummies', fr: 'Collections thébaines et momies', es: 'Colecciones tebanas y momias', de: 'Thebanische Priesterobjekte & Mumien' },
    architecturalHighlights: [
      { ar: 'قاعة عرض جنائزية تحاكي أجواء المقابر الفرعونية القديمة المظلمة', en: 'Atmospheric subterranean gallery simulating tomb interiors', fr: 'Galerie tamisée reproduisant l’atmosphère des tombes', es: 'Galería subterránea que recrea el interior de una tumba', de: 'Stimmungsvolle Galerie mit Grabkammer-Atmosphäre' }
    ],
    mustSee: [
      { ar: 'مومياء حقيقية للنبيل ماساهيرتي كاهن آمون الأكبر، ومومياوات التماسيح والقرود والقطط', en: 'Pristine mummy of high priest Masaharta, alongside mummified crocodiles, baboons, and cats', fr: 'Momie du grand prêtre Masaharta et momies d’animaux sacrés', es: 'Momia del sumo sacerdote Masaharta y momias de animales', de: 'Mumie des Hohepriesters Masaharta und heilige Tiermumien' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7022, lng: 32.6415 },
    distanceFromCenterKm: 0.5,
    openingHours: { ar: 'يومياً 9:00 ص - 2:00 م ، ومن 5:00 م - 9:00 م', en: 'Daily 9:00 AM - 2:00 PM & 5:00 PM - 9:00 PM', fr: '9h00 - 14h00 et 17h00 - 21h00', es: '9:00 - 14:00 y 17:00 - 21:00', de: '9:00 - 14:00 & 17:00 - 21:00 Uhr' },
    ticketPrice: { ar: '150 ج.م للأجانب / 20 ج.م للمصريين', en: '150 EGP Foreigners / 20 EGP Egyptians', fr: '150 EGP Étrangers / 20 EGP Égyptiens', es: '150 EGP Extranjeros / 20 EGP Egipcios', de: '150 EGP Ausländer / 20 EGP Ägypter' },
    status: 'open',
    order: 15,
  },
  {
    id: 'karnak_open_air_museum',
    name: {
      ar: 'متحف الكرنك المفتوح',
      en: 'Karnak Open Air Museum',
      fr: 'Musée en Plein Air de Karnak',
      es: 'Museo al Aire Libre de Karnak',
      de: 'Freilichtmuseum Karnak',
    },
    shortDesc: {
      ar: 'متحف استثنائي يضم المقاصير والصروح الحجرية المعاد بناؤها والتي عثر عليها داخل صروح الكرنك.',
      en: 'An extraordinary open-air sanctuary showcasing reconstructed shrines salvaged from Karnak’s inner pylons.',
      fr: 'Musée d’exception abritant les chapelles démantelées puis miraculeusement remontées par les archéologues.',
      es: 'Extraordinario museo al aire libre con capillas rescatadas del interior de los pilonos de Karnak.',
      de: 'Außergewöhnliches Freilichtmuseum mit rekonstruierten Schreinen aus den Pylonen von Karnak.'
    },
    fullHistory: {
      ar: 'يقع في الركن الشمالي الغربي لمعابد الكرنك، ويعد ثمرة عقود من العمل الأثري المشترك للمركز المصري الفرنسي لدراسة معابد الكرنك.',
      en: 'Located in the northwestern courtyard of Karnak, established through decades of Franco-Egyptian research.',
      fr: 'Fruit de décennies d’investigations par le Centre franco-égyptien d’étude des temples de Karnak.',
      es: 'Ubicado en el patio noroeste, resultado de décadas de trabajo arqueológico franco-egipcio.',
      de: 'Im Nordwesten von Karnak, Ergebnis jahrzehntelanger deutsch-französisch-ägyptischer Forschung.'
    },
    story: {
      ar: 'يمثل كبسولة زمنية تجمع مقاصير ملوك الدولة الوسطى والحديثة التي أزيلت في العصور القديمة لتحل محلها صروح أحدث.',
      en: 'A chronological time capsule of Middle and New Kingdom chapels dismantled in antiquity to serve as pylon fill.',
      fr: 'Une capsule temporelle préservant les sanctuaires démantelés au cours des millénaires.',
      es: 'Una cápsula del tiempo con capillas desmanteladas en la antigüedad.',
      de: 'Eine Zeitkapsel altägyptischer Architektur mit geretteten Heiligtümern.'
    },
    category: 'museum',
    bank: 'east_bank',
    epoch: { ar: 'الدولة الوسطى والحديثة', en: 'Middle & New Kingdoms', fr: 'Moyen et Nouvel Empire', es: 'Imperio Medio y Nuevo', de: 'Mittleres & Neues Reich' },
    pharaoh: { ar: 'سنوسرت الأول، حتشبسوت، أمنحتب الأول والثاني', en: 'Senusret I, Hatshepsut, Amenhotep I & II', fr: 'Sésostris Ier, Hatchepsout, Amenhotep I', es: 'Senusret I, Hatshepsut, Amenhotep I', de: 'Sesostris I., Hatschepsut, Amenophis I.' },
    architecturalHighlights: [
      { ar: 'المقصورة البيضاء لسنوسرت والمقصورة الحمراء لحتشبسوت ومقصورة أمنحتب الأول المرمرية', en: 'The White, Red, and Calcite Shrines standing together', fr: 'La chapelle blanche, la chapelle rouge et le reposoir d’albâtre', es: 'La Capilla Blanca, la Capilla Roja y el templete de calcita', de: 'Die Weiße, Rote und Alabaster-Kapelle nebeneinander' }
    ],
    mustSee: [
      { ar: 'المقصورة المرمرية (الألباستر) لأمنحتب الأول ذات الحجر الشفاف النادر', en: 'Alabaster chapel of Amenhotep I with translucent stone slabs', fr: 'Chapelle d’albâtre d’Amenhotep Ier', es: 'Capilla de alabastro de Amenhotep I', de: 'Alabaster-Kapelle Amenophis I.' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7198, lng: 32.6565 },
    distanceFromCenterKm: 3.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:30 م', en: 'Daily 6:00 AM - 5:30 PM', fr: '6h00 - 17h30', es: '6:00 - 17:30', de: '6:00 - 17:30 Uhr' },
    ticketPrice: { ar: 'تذكرة مخصصة ملحقة بمجمع الكرنك', en: 'Special ticket at Karnak entrance', fr: 'Billet supplémentaire à l’entrée de Karnak', es: 'Boleto especial en la entrada de Karnak', de: 'Zusatzticket am Karnak-Eingang' },
    status: 'open',
    order: 16,
  },
  {
    id: 'esna_khnum_temple',
    name: {
      ar: 'معبد خنوم بإسنا',
      en: 'Temple of Khnum at Esna',
      fr: 'Temple de Khnoum à Esna',
      es: 'Templo de Jnum en Esna',
      de: 'Chnum-Tempel von Esna',
    },
    shortDesc: {
      ar: 'معبد فريد يقع في محيط محافظة الأقصر (55 كم جنوباً)، يشتهر بألوان سقفه الزاهية الفلكية التي رُممت مؤخراً.',
      en: 'A stunning archaeological treasure 55 km south of Luxor, renowned for its newly restored, vibrant celestial ceiling paintings.',
      fr: 'Splendide temple situé à 55 km au sud de Louxor, célèbre pour ses plafonds astronomiques polychromes récemment restaurés.',
      es: 'Magnífico templo a 55 km al sur de Lúxor, célebre por sus techos astronómicos recién restaurados.',
      de: 'Beeindruckender Tempel 55 km südlich von Luxor, berühmt für die kürzlich restaurierten Himmelsdecken.'
    },
    fullHistory: {
      ar: 'يقع المعبد على عمق 9 أمتار تحت مستوى شوارع إسنا الحديثة. شيد في العصر البطلمي والروماني للإله خنوم صانع البشر على عجلة الفخار.',
      en: 'Sits 9 meters below modern street level; dedicated to the ram-headed potter god Khnum who fashioned humans on his wheel.',
      fr: 'Situé 9 mètres sous le niveau de la ville moderne, dédié au dieu bélier potier Khnoum.',
      es: 'Situado a 9 metros bajo el nivel de la calle, dedicado al dios alfarero Jnum.',
      de: 'Liegt 9 Meter unter dem modernen Straßenniveau, geweiht dem Schöpfergott Chnum.'
    },
    story: {
      ar: 'كشفت أعمال الترميم المصرية الألمانية عن أسماء الأبراج السماوية والألوان الأصلية المبهرة التي لم يشهدها العالم منذ 2000 عام.',
      en: 'Recent Egyptian-German restoration unveiled original 2,000-year-old pigments depicting the constellations and zodiac.',
      fr: 'Les récentes restaurations ont révélé les pigments originaux des signes du zodiaque vieux de 2 000 ans.',
      es: 'La reciente restauración reveló los colores originales del zodiaco tras dos milenios.',
      de: 'Deutsch-ägyptische Restaurierungen brachten die 2.000 Jahre alten Originalfarben des Tierkreises ans Licht.'
    },
    category: 'surrounding_site',
    bank: 'surroundings',
    epoch: { ar: 'العصر البطلمي والروماني', en: 'Ptolemaic and Roman Period', fr: 'Époque ptolémaïque et romaine', es: 'Época ptolemaica y romana', de: 'Ptolemäische und römische Zeit' },
    pharaoh: { ar: 'بطليموس السادس وأباطرة الرومان (كلاوديوس وفسباسيان)', en: 'Ptolemy VI, Claudius & Vespasian', fr: 'Ptolémée VI et empereurs romains', es: 'Ptolomeo VI y emperadores romanos', de: 'Ptolemaios VI. und römische Kaiser' },
    architecturalHighlights: [
      { ar: '24 عموداً ضخماً ذات تيجان نباتية متنوعة لم تتكرر واحدة منها', en: '24 colossal columns with completely unique composite floral capitals', fr: '24 colonnes monumentales aux chapiteaux végétaux tous distincts', es: '24 columnas monumentales con capiteles florales únicos', de: '24 monumentale Säulen mit individuellen Pflanzenkapitellen' },
      { ar: 'السقف الفلكي الملون بأبراج السماء والنجوم والآلهة', en: 'Vibrant restored astronomical ceiling with zodiac constellations', fr: 'Plafond astronomique aux couleurs éclatantes', es: 'Techo astronómico policromado con el zodiaco', de: 'Astronomische Decke mit leuchtenden Sternbildern' }
    ],
    mustSee: [
      { ar: 'نقوش الأبراج السماوية بالألوان الملكية الذهبية والزرقاء', en: 'The brilliant celestial blue and golden zodiac reliefs', fr: 'Les reliefs célestes dorés et bleus d’Esna', es: 'Los relieves celestes dorados y azules', de: 'Die goldenen und lapisblauen Tierkreisreliefs' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.2934, lng: 32.5562 },
    distanceFromCenterKm: 55.0,
    openingHours: { ar: 'يومياً 9:00 ص - 5:00 م', en: 'Daily 9:00 AM - 5:00 PM', fr: '9h00 - 17h00', es: '9:00 - 17:00', de: '9:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة معبد إسنا الرسمية بوزارة السياحة', en: 'Official Esna Temple ticket', fr: 'Billet officiel temple d’Esna', es: 'Boleto oficial de Esna', de: 'Offizielles Ticket Tempel von Esna' },
    status: 'open',
    featured: true,
    order: 17,
  },
  {
    id: 'tod_temple',
    name: {
      ar: 'معبد الطود',
      en: 'Temple of Tod',
      fr: 'Temple de Tôd',
      es: 'Templo de Tod',
      de: 'Tempel von Tod',
    },
    shortDesc: {
      ar: 'موقع أثري ساحر جنوب الأقصر (20 كم)، مكرس لإله الحرب مونتو واشتهر بكنز الطود الذهبي الفضي.',
      en: 'A fascinating archaeological site 20 km south of Luxor, dedicated to Montu and famous for the legendary Tod Treasure.',
      fr: 'Site archéologique à 20 km au sud de Louxor, dédié à Montou et célèbre pour le trésor de Tôd.',
      es: 'Sitio arqueológico a 20 km de Lúxor, dedicado a Montu y célebre por el Tesoro de Tod.',
      de: 'Archäologische Stätte 20 km südlich von Luxor, geweiht Montu und berühmt für den Schatz von Tod.'
    },
    fullHistory: {
      ar: 'يرجع أصله لعصر الدولة القديمة والوسطى (منتوحتب وسنوسرت الأول)، وعثر فيه عام 1936 على صناديق نحاسية تضم سبائك فضية وذهبية نادرة من بحر إيجه وميزوبوتاميا.',
      en: 'Dates from the Old & Middle Kingdoms; site of the 1936 discovery of bronze chests filled with Aegean and Mesopotamian silver treasure.',
      fr: 'Origines remontant à l’Ancien et Moyen Empire ; découverte en 1936 du trésor d’orfèvrerie crétoise et proche-orientale.',
      es: 'Fundado en el Imperio Antiguo; en 1936 se halló el célebre tesoro con plata egea y mesopotámica.',
      de: 'Ursprünge im Alten und Mittleren Reich; Fundort des berühmten Schatzes von Tod (1936).'
    },
    story: {
      ar: 'كان كنز الطود دليلاً قاطعاً على العلاقات التجارية والدبلوماسية المزدهرة بين فراعنة مصر وحضارات كريت والرافدين.',
      en: 'The Tod Treasure provided historic evidence of ancient Egyptian trade with Minoan Crete and Mesopotamia.',
      fr: 'Témoignage capital des échanges diplomatiques entre l’Égypte, la Crète minoenne et la Mésopotamie.',
      es: 'Prueba trascendental del comercio faraónico con la Creta minoica.',
      de: 'Historisches Zeugnis für die Handelsbeziehungen Ägyptens mit der minoischen Kultur.'
    },
    category: 'surrounding_site',
    bank: 'surroundings',
    epoch: { ar: 'الدولة الوسطى والحديثة والبطالمة', en: 'Middle & New Kingdoms to Ptolemaic', fr: 'Moyen Empire aux Ptolémées', es: 'Imperio Medio a Ptolomeos', de: 'Mittleres Reich bis Ptolemäer' },
    pharaoh: { ar: 'سنوسرت الأول وتحتمس الثالث وبطليموس الثامن', en: 'Senusret I, Thutmose III, Ptolemy VIII', fr: 'Sésostris Ier, Thoutmôsis III', es: 'Senusret I y Tutmosis III', de: 'Sesostris I. und Thutmosis III.' },
    architecturalHighlights: [
      { ar: 'المقصورة البطلمية وقاعة أساطين تحتمس الثالث وبقايا كنيسة قبطية عتيقة', en: 'Ptolemaic chapel, Thutmose III barque shrine and 5th-century Coptic basilica ruins', fr: 'Chapelle ptolémaïque et vestiges de basilique copte', es: 'Capilla ptolemaica y restos de basílica copta', de: 'Ptolemäische Kapelle und koptische Basilika-Reste' }
    ],
    mustSee: [
      { ar: 'نقوش تقديم القرابين والكتل الحجرية لسنوسرت الأول من الجرانيت', en: 'Granite inscriptions of Senusret I and sacred offering scenes', fr: 'Inscriptions en granit de Sésostris Ier', es: 'Inscripciones de Senusret I en granito', de: 'Granitblöcke Sesostris I. und Opferszenen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.5833, lng: 32.5333 },
    distanceFromCenterKm: 20.0,
    openingHours: { ar: 'يومياً 8:00 ص - 4:00 م', en: 'Daily 8:00 AM - 4:00 PM', fr: '8h00 - 16h00', es: '8:00 - 16:00', de: '8:00 - 16:00 Uhr' },
    ticketPrice: { ar: 'تذكرة زيارة معبد الطود', en: 'Tod Temple entry ticket', fr: 'Billet temple de Tôd', es: 'Boleto del templo de Tod', de: 'Eintrittsticket Tempel von Tod' },
    status: 'open',
    order: 18,
  },
  {
    id: 'gebelein_area',
    name: {
      ar: 'منطقة جبلين الأثرية (جبيلين)',
      en: 'Gebelein Archaeological Area',
      fr: 'Zone Archéologique de Gébélein',
      es: 'Área Arqueológica de Gebelein',
      de: 'Archäologische Stätte von Gebelein',
    },
    shortDesc: {
      ar: 'موقع تلين صخريين عتيقين (جبلين) جنوب الأقصر (28 كم)، اشتهر بمقابر عصر ما قبل الأسرات ومومياوات جبلين الشهيرة.',
      en: 'A legendary dual-hill site 28 km south of Luxor, celebrated for predynastic origins, Hathor shrine, and ancient papyri.',
      fr: 'Site emblématique des deux collines à 28 km au sud de Louxor, réputé pour ses origines prédynastiques et le sanctuaire d’Hathor.',
      es: 'Mítico enclave de dos colinas a 28 km de Lúxor, conocido por sus tumbas predinásticas y el templo de Hathor.',
      de: 'Bedeutende Doppelberg-Stätte 28 km südlich von Luxor mit prädynastischen Gräbern und Hathor-Schrein.'
    },
    fullHistory: {
      ar: 'يعود الاستيطان في جبلين إلى عصر نقادة، وشيد فوق قمته الشرقية معبد للإلهة حتحور "سيدة جبلين". عثر فيه على برديات جبلين الشهيرة ومومياء "رجل جبلين" المحفوظة بالمتحف البريطاني.',
      en: 'Inhabited since the Naqada period; hilltop temple of Hathor "Mistress of Gebelein" and source of the Gebelein Papyri.',
      fr: 'Occupé dès la période prédynastique de Nagada, avec le sanctuaire d’Hathor au sommet oriental.',
      es: 'Habitado desde la cultura Nagada, con templo de Hathor en la cima este.',
      de: 'Seit der Naqada-Zeit besiedelt; Fundort der Gebelein-Papyri und Hathor-Heiligtum.'
    },
    story: {
      ar: 'كان يمثل حصناً استراتيجياً للسيطرة على طريق القوافل وحماية مدخل طيبة الجنوبي.',
      en: 'Served as an ancient fortified bastion controlling desert caravan trails into southern Thebes.',
      fr: 'Forteresse stratégique contrôlant les pistes caravanières au sud de Thèbes.',
      es: 'Bastión estratégico que vigilaba las rutas del desierto hacia el sur de Tebas.',
      de: 'Strategische Festung zur Überwachung der Wüstenkarawanen nach Theben.'
    },
    category: 'surrounding_site',
    bank: 'surroundings',
    epoch: { ar: 'عصر ما قبل الأسرات حتى العصر الروماني', en: 'Predynastic to Roman Period', fr: 'Prédynastique à l’époque romaine', es: 'Predinástico a época romana', de: 'Prädynastisch bis Römisch' },
    pharaoh: { ar: 'ملوك ما قبل الأسرات والدولة الوسطى', en: 'Predynastic kings & Middle Kingdom', fr: 'Rois prédynastiques et Moyen Empire', es: 'Reyes predinásticos e Imperio Medio', de: 'Prädynastische Herrscher & Mittleres Reich' },
    architecturalHighlights: [
      { ar: 'أطلال معبد حتحور الصخري على قمة الجبل ومقابر حكام الإقليم القديمة', en: 'Cliffside ruins of Hathor Temple and ancient rock-cut governors tombs', fr: 'Ruines du temple perché d’Hathor et tombes rupestres', es: 'Ruinas del templo de Hathor y tumbas rupestres', de: 'Ruinen des Hathor-Felsentempels und Felsengräber' }
    ],
    mustSee: [
      { ar: 'الإطلالة البانورامية الساحرة على النيل وبساتين النخيل من أعلى جبلين', en: 'Panoramic vista over the Nile ribbon and palm groves from the peak', fr: 'Vue panoramique imprenable sur le ruban du Nil', es: 'Vista panorámica sobre el valle del Nilo', de: 'Panoramablick über das Niltal vom Berggipfel' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.4833, lng: 32.4833 },
    distanceFromCenterKm: 28.0,
    openingHours: { ar: 'موقع أثري مفتوح - يفضل التنسيق المسبق', en: 'Open archaeological landscape - guided visit advised', fr: 'Site archéologique ouvert - visite guidée conseillée', es: 'Zona arqueológica abierta - visita con guía aconsejada', de: 'Freies Areal - Voranmeldung bzw. Führung empfohlen' },
    ticketPrice: { ar: 'يرجى مراجعة تفتيش آثار الأقصر وإسنا', en: 'Consult Luxor/Esna Antiquities Inspectorate', fr: 'Consulter l’inspectorat de Louxor/Esna', es: 'Consultar en inspectoría de antigüedades', de: 'Beim Antikeninspektorat Luxor/Esna erfragen' },
    status: 'open',
    order: 19,
  },
];
