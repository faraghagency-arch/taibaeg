import { Treasure } from '../types';

export const WEST_TEMPLES: Treasure[] = [
  {
    id: 'hatshepsut_deir_el_bahari',
    name: {
      ar: 'معبد حتشبسوت بالدير البحري',
      en: 'Temple of Hatshepsut at Deir el-Bahari',
      fr: 'Temple d’Hatchepsout à Deir el-Bahari',
      es: 'Templo de Hatshepsut en Deir el-Bahari',
      de: 'Hatschepsut-Tempel in Deir el-Bahari',
    },
    shortDesc: {
      ar: 'أعظم تحفة معمارية في العالم القديم متدرجة على ثلاث شرفات صخرية مهيبة تعانق جرف جبل القرنة.',
      en: 'An architectural marvel of three tiered colonnaded terraces dramatically set against towering limestone cliffs.',
      fr: 'Chef-d’œuvre absolu en trois terrasses majestueuses adossées aux falaises vertigineuses de Thèbes.',
      es: 'Maravilla arquitectónica de tres terrazas escalonadas integradas en los acantilados de Tebas.',
      de: 'Architektonisches Meisterwerk mit drei Terrassen vor der monumentalen Kulisse der thebanischen Felswand.',
    },
    fullHistory: {
      ar: 'صممه المهندس العبقري سننموت للملكة حتشبسوت باسم "جسر جسرو" (أقدس الأقداس). يجسد الاندماج العبقري بين الطبيعة الجبلية والعمارة الصرحية.',
      en: 'Masterminded by royal architect Senenmut as "Djeser-Djeseru" (Holy of Holies), a triumph of organic mountain architecture.',
      fr: 'Conçu par l’architecte Senenmout sous le nom de "Djeser-Djeserou" (Saint des Saints).',
      es: 'Proyectado por el arquitecto Senenmut bajo el nombre de "Djeser-Djeseru" (El Santo de los Santos).',
      de: 'Vom Architekten Senenmut als "Djeser-Djeseru" (Allerheiligstes der Allerheiligsten) erbaut.',
    },
    story: {
      ar: 'يروي على جدرانه رحلة بلاد بونت التجارية الأسطورية لقلب إفريقيا، وميلاد حتشبسوت الإلهي كابنة للإله آمون.',
      en: 'Portrays the historic expedition to the mysterious Land of Punt and the divine birth of Hatshepsut.',
      fr: 'Raconte la célèbre expédition au pays de Pount et la naissance divine de la reine.',
      es: 'Plasma la legendaria expedición al País de Punt y el nacimiento divino de la faraona.',
      de: 'Berichtet von der Expedition ins Land Punt und der göttlichen Geburt Hatschepsuts.',
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'الملكة حتشبسوت', en: 'Queen Hatshepsut', fr: 'Reine Hatchepsout', es: 'Reina Hatshepsut', de: 'Königin Hatschepsut' },
    architecturalHighlights: [
      { ar: 'الشرفات الثلاث الصاعدة المتدرجة بممرات وأعمدة رشيقة تحاكي خطوط الجبل', en: 'Three ascending terraced courts with colonnades harmonizing with the rock ridge', fr: 'Trois terrasses étagées en harmonie avec la roche', es: 'Tres terrazas escalonadas en armonía con la montaña', de: 'Drei ansteigende Terrassen im Einklang mit der Felswand' },
      { ar: 'مقصورة حتحور ذات الأعمدة الحتحورية برأس الإلهة ذات الأذنين البقريتين', en: 'Hathor Chapel with sistrum capitals bearing the cow-eared goddess', fr: 'Chapelle d’Hathor aux chapiteaux hathoriques', es: 'Capilla de Hathor con capiteles hathóricos', de: 'Hathor-Kapelle mit Hathor-Kapitellen' }
    ],
    mustSee: [
      { ar: 'نقوش أشجار اللبان وسفن رحلة بلاد بونت وجلب المر والبخور والذهب', en: 'The Punt reliefs with incense trees and Egyptian ships', fr: 'Les reliefs de l’expédition au pays de Pount', es: 'Relieves de la expedición a Punt con árboles de mirra', de: 'Punt-Reliefs mit Weihrauchbäumen und Expeditionsschiffen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7382, lng: 32.6067 },
    distanceFromCenterKm: 9.5,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: '360 ج.م للأجانب / 40 ج.م للمصريين', en: '360 EGP Foreigners / 40 EGP Egyptians', fr: '360 EGP Étrangers / 40 EGP Égyptiens', es: '360 EGP Extranjeros / 40 EGP Egipcios', de: '360 EGP Ausländer / 40 EGP Ägypter' },
    status: 'open',
    featured: true,
    order: 20,
  },
  {
    id: 'ramesseum_temple',
    name: {
      ar: 'معبد الرامسيوم',
      en: 'The Ramesseum (Mortuary Temple of Ramesses II)',
      fr: 'Le Ramesséum',
      es: 'El Ramesseum',
      de: 'Das Ramesseum (Totentempel Ramses II.)',
    },
    shortDesc: {
      ar: 'معبد الخلود للملك رمسيس الثاني، موطن تمثال الأوزيماندياس العملاق المخلد في الأدب العالمي.',
      en: 'The mortuary temple of Ramesses the Great, home to the colossal fallen colossus that inspired Shelley’s Ozymandias.',
      fr: 'Temple des millions d’années de Ramsès II, célèbre pour son colosse brisé ayant inspiré le poème Ozymandias.',
      es: 'Templo de millones de años de Ramsés II, hogar del coloso caído inmortalizado en Ozymandias.',
      de: 'Totentempel Ramses II. mit dem gestürzten Koloss, der Shelleys berühmtes Gedicht Ozymandias inspirierte.',
    },
    fullHistory: {
      ar: 'شيد رمسيس الثاني هذا المعبد على مدار 20 عاماً كمركز لذكراه الخالدة وعبادة آمون. تحيط به مخازن ضخمة مبنية بالآجر اللبن ذات أقبية برميلية فريدة.',
      en: 'Built over two decades as Ramesses’ cult memorial, surrounded by vast mudbrick vaulted granaries and scriptorium.',
      fr: 'Édifié durant 20 ans, entouré d’immenses magasins voûtés en brique crue et d’une maison de vie.',
      es: 'Edificado en dos décadas, rodeado de almacenes abovedados de adobe.',
      de: 'Über zwei Jahrzehnte erbaut, umgeben von riesigen gewölbten Magazinen aus Lehmziegeln.',
    },
    story: {
      ar: 'ألهم تمثاله الجرانيتي المنهار البالغ وزنه 1000 طن الشاعر الإنجليزي شيللي في كتابة قصيدته الخالدة عن زوال مجد الأباطرة.',
      en: 'The 1,000-ton fallen granite colossus inspired Percy Bysshe Shelley’s legendary ode to the fragility of empire.',
      fr: 'Le colosse de granit brisé de 1 000 tonnes a inspiré la célèbre élégie de Shelley sur la vanité des empires.',
      es: 'El coloso caído de 1.000 toneladas inspiró el célebre poema de Percy Bysshe Shelley.',
      de: 'Der 1.000 Tonnen schwere gestürzte Granitkoloss inspirierte Shelleys Sonett über vergängliche Macht.',
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة التاسعة عشرة', en: '19th Dynasty', fr: '19e dynastie', es: 'Dinastía XIX', de: '19. Dynastie' },
    pharaoh: { ar: 'رمسيس الثاني (رمسيس الأكبر)', en: 'Ramesses II (The Great)', fr: 'Ramsès II le Grand', es: 'Ramsés II el Grande', de: 'Ramses II. (der Große)' },
    architecturalHighlights: [
      { ar: 'أطلال تمثال رمسيس الثاني الأسطوري المنحوت من كتلة واحدة من الجرانيت الوردي', en: 'The colossal fallen monolith of Ramesses II carved from a single pink granite block', fr: 'Le colosse brisé de granit rose pesant 1 000 tonnes', es: 'El coloso caído esculpido en un único bloque de granito rosa', de: 'Der monolithische gestürzte Koloss aus rosa Granit' },
      { ar: 'مخازن الغلال المبنية بالطوب اللبن ذات الأقبية الهندسية المحفوظة منذ 3200 عام', en: '3,200-year-old mudbrick barrel-vaulted storehouses and school chambers', fr: 'Magasins voûtés en brique crue vieux de 3 200 ans', es: 'Graneros abovedados de adobe de más de 3.200 años', de: '3.200 Jahre alte Tonnengewölbe aus Lehmziegeln' }
    ],
    mustSee: [
      { ar: 'مشاهد معركة قادش المنقوشة على الصرح الأول وتفاصيل خطة المعركة', en: 'The Battle of Kadesh relief panels on the temple pylon', fr: 'Reliefs de la bataille de Qadesh sur le premier pylône', es: 'Relieves de la batalla de Qadesh en el pilono', de: 'Reliefs der Schlacht von Kadesch am ersten Pylon' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7283, lng: 32.6106 },
    distanceFromCenterKm: 8.5,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة معبد الرامسيوم بالبر الغربي', en: 'Official Ramesseum ticket', fr: 'Billet officiel du Ramesséum', es: 'Boleto oficial del Ramesseum', de: 'Offizielles Ticket Ramesseum' },
    status: 'open',
    featured: true,
    order: 21,
  },
  {
    id: 'medinet_habu',
    name: {
      ar: 'معبد مدينة هابو (معبد رمسيس الثالث)',
      en: 'Medinet Habu (Mortuary Temple of Ramesses III)',
      fr: 'Médinet Habou (Temple de Ramsès III)',
      es: 'Medinet Habu (Templo de Ramsés III)',
      de: 'Medinet Habu (Totentempel Ramses III.)',
    },
    shortDesc: {
      ar: 'أكثر معابد مصر القديمة حفاظاً على ألوانه ونقوشه الأصلية الباهرة، وقلعة حربية أثرية متكاملة.',
      en: 'The most vividly colored and exceptionally preserved temple complex in Egypt, built as a fortified sanctuary.',
      fr: 'Le temple le mieux préservé d’Égypte, aux couleurs polychromes intactes et à l’architecture fortifiée.',
      es: 'El templo con los colores y relieves mejor conservados de Egipto, concebido como recinto fortificado.',
      de: 'Der am besten erhaltene und farbenprächtigste Totentempel Ägyptens mit monumentaler Festungsarchitektur.',
    },
    fullHistory: {
      ar: 'شيده رمسيس الثالث آخر الفراعنة المحاربين العظام في القرن الثاني عشر قبل الميلاد، وتضمن قصر إقامة ملكي ومباني إدارية وسوراً دفاعياً مزدوجاً كالمجدل السوري.',
      en: 'Built in the 12th century BC with a royal palace, administrative offices, and a Syrian-style Migdol fortress gate.',
      fr: 'Construit au XIIe siècle av. J.-C., doté d’un palais royal et d’une porte fortifiée de type Migdol syrien.',
      es: 'Edificado en el siglo XII a.C. con palacio real y una puerta fortificada estilo Migdol sirio.',
      de: 'Im 12. Jh. v. Chr. mit Königspalast und einem syrischen Migdol-Festungstor erbaut.',
    },
    story: {
      ar: 'نقوشه العميقة المحفورة بدقة قصد بها رمسيس الثالث حمايتها من محو التاريخ والزوال، وتوثق معركته البحرية الحاسمة لصد شعوب البحر.',
      en: 'Features ultra-deep incised reliefs designed to resist erosion, depicting Egypt’s first recorded naval sea battle.',
      fr: 'Ses reliefs incisés profondément ont préservé la première grande bataille navale contre les Peuples de la Mer.',
      es: 'Sus profundos relieves conmemoran la primera gran batalla naval de la historia contra los Pueblos del Mar.',
      de: 'Tief eingemeißelte Reliefs bewahrten die historische Seeschlacht gegen die Seevölker bis heute.',
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة العشرين', en: '20th Dynasty', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'رمسيس الثالث', en: 'Ramesses III', fr: 'Ramsès III', es: 'Ramsés III', de: 'Ramses III.' },
    architecturalHighlights: [
      { ar: 'بوابة المجدل الحصينة المشيدة على الطراز العسكري الشامي القديم', en: 'The monumental Syrian Migdol fortress pavilion entrance', fr: 'Le pavillon d’entrée fortifié de style Migdol', es: 'Pabellón de entrada fortificado tipo Migdol', de: 'Das monumentale Migdol-Festungstor nach syrischem Vorbild' },
      { ar: 'ألوان سقف الفناء الثاني الزرقاء والحمراء والصفراء البراقة التي تبدو كأنها لُوِّنت بالأمس', en: 'Pristine vibrant ceiling pigments of azure, gold, and ochre in the Second Court', fr: 'Couleurs polychromes éblouissantes sous les plafonds de la seconde cour', es: 'Intensos colores originales en los techos del segundo patio', de: 'Leuchtende Originalfarben der Decken im zweiten Hof' }
    ],
    mustSee: [
      { ar: 'مشهد المعركة البحرية التاريخية الشهيرة ضد شعوب البحر على الجدار الشمالي الخارجي', en: 'Famous naval battle against the Sea Peoples on the northern exterior wall', fr: 'Scène de la bataille navale contre les Peuples de la Mer', es: 'Relieve de la batalla naval contra los Pueblos del Mar', de: 'Darstellung der Seeschlacht gegen die Seevölker an der Nordwand' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 25.7197, lng: 32.5997 },
    distanceFromCenterKm: 7.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: '200 ج.م للأجانب / 20 ج.م للمصريين', en: '200 EGP Foreigners / 20 EGP Egyptians', fr: '200 EGP Étrangers / 20 EGP Égyptiens', es: '200 EGP Extranjeros / 20 EGP Egipcios', de: '200 EGP Ausländer / 20 EGP Ägypter' },
    status: 'open',
    featured: true,
    order: 22,
  },
  {
    id: 'seti_first_qurna',
    name: {
      ar: 'معبد سيتي الأول بالقرنة',
      en: 'Temple of Seti I in Qurna',
      fr: 'Temple de Séthi Ier à Gournah',
      es: 'Templo de Seti I en Qurna',
      de: 'Totentempel Sethos I. in Qurna',
    },
    shortDesc: {
      ar: 'أقدم معابد ملوك الأسرة 19 الجنائزية بالبر الغربي، ويشتهر بروعة ودفء نقوشه البارزة على الحجر الجيري الناعم.',
      en: 'The earliest of the 19th Dynasty mortuary temples, famed for the exquisite, delicate bas-reliefs on soft limestone.',
      fr: 'Le plus ancien temple funéraire de la 19e dynastie, réputé pour la délicatesse suprême de ses bas-reliefs.',
      es: 'El templo funerario más antiguo de la Dinastía XIX, célebre por la finura sublime de sus relieves.',
      de: 'Der älteste Totentempel der 19. Dynastie, berühmt für die feinsten Basreliefs auf zartem Kalkstein.',
    },
    fullHistory: {
      ar: 'بدأ بناءه سيتي الأول تكريماً لوالده رمسيس الأول وللإله آمون رع، وأكمله ابنه رمسيس الثاني بعد وفاته.',
      en: 'Began by Seti I to honor his father Ramesses I and Amun-Re, completed by his son Ramesses II.',
      fr: 'Initié par Séthi Ier pour honorer son père Ramsès Ier et Amon-Rê, achevé par Ramsès II.',
      es: 'Iniciado por Seti I en memoria de su padre Ramsés I y concluido por Ramsés II.',
      de: 'Begonnen von Sethos I. zu Ehren seines Vaters Ramses I., vollendet von Ramses II.',
    },
    story: {
      ar: 'يتميز بقدس أقداس مخصص لروح رمسيس الأول الذي مات قبل أن يشيد لنفسه معبداً جنائزياً خاصاً.',
      en: 'Features a sacred memorial chapel specifically honoring Ramesses I who reigned too briefly to build his own temple.',
      fr: 'Comprend une chapelle funéraire dédiée à Ramsès Ier dont le court règne n’avait pas permis d’édifier son propre temple.',
      es: 'Alberga una capilla especial para Ramsés I, quien reinó poco tiempo para construir su templo.',
      de: 'Enthält eine Gedächtniskapelle für Ramses I., der wegen kurzer Herrschaft keinen eigenen Tempel baute.',
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة التاسعة عشرة', en: '19th Dynasty', fr: '19e dynastie', es: 'Dinastía XIX', de: '19. Dynastie' },
    pharaoh: { ar: 'سيتي الأول ورمسيس الثاني', en: 'Seti I & Ramesses II', fr: 'Séthi Ier et Ramsès II', es: 'Seti I y Ramsés II', de: 'Sethos I. & Ramses II.' },
    architecturalHighlights: [
      { ar: 'بهو الأعمدة البابيرية الأنيق والنقوش الملكية ذات النقاء الفني الاستثنائي', en: 'Elegant papyrus colonnade and bas-reliefs of unsurpassed artistic purity', fr: 'Colonnade papyriforme et bas-reliefs d’une grâce suprême', es: 'Columnata papiriforme y relieves de insuperable belleza artística', de: 'Elegante Papyrussäulenhalle und meisterhafte Basreliefs' }
    ],
    mustSee: [
      { ar: 'مشهد سيتي الأول يقدم تمثال "الماعت" (رمز الحق والعدالة) للإله آمون رع', en: 'Seti I presenting the figurine of Maat (truth and cosmic balance) to Amun', fr: 'Séthi Ier offrant la statuette de Maât à Amon-Rê', es: 'Seti I ofreciendo la figura de Maat a Amón-Ra', de: 'Sethos I. überreicht die Maat-Figur an Amun-Re' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7333, lng: 32.6289 },
    distanceFromCenterKm: 7.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة معبد سيتي الأول بالبر الغربي', en: 'Seti I Temple ticket', fr: 'Billet temple de Séthi Ier', es: 'Boleto templo de Seti I', de: 'Eintrittskarte Sethos I. Tempel' },
    status: 'open',
    order: 23,
  },
  {
    id: 'amenhotep_third_mortuary_memnon',
    name: {
      ar: 'معبد أمنحتب الثالث (معبد ملايين السنين وعملاقا ممنون)',
      en: 'Mortuary Temple of Amenhotep III & Colossi of Memnon',
      fr: 'Temple d’Amenhotep III et Colosses de Memnon',
      es: 'Templo de Amenhotep III y Colosos de Memnón',
      de: 'Totentempel Amenophis III. & Memnonkolosse',
    },
    shortDesc: {
      ar: 'كان أكبر مجمع ديني شيد على الإطلاق في البر الغربي، وحارسه الأبدي تمثالا ممنون التوأمان الشامخان بارتفاع 18 متراً.',
      en: 'Once the grandest temple complex on the West Bank, guarded by the towering 18-meter twin Colossi of Memnon.',
      fr: 'Jadis le plus vaste temple de la rive ouest, gardé par les deux géants de pierre de 18 mètres.',
      es: 'El complejo funerario más gigantesco de la orilla oeste, custodiado por los colosos de 18 m.',
      de: 'Einst der gigantischste Totentempelkomplex des Westufers, bewacht von den 18 Meter hohen Memnonkolossen.',
    },
    fullHistory: {
      ar: 'شيده الملك الذهبي أمنحتب الثالث في أوج ثراء الإمبراطورية المصرية، وتعرض لزلزال مدمر عام 27 ق.م ترك عملاقي ممنون يحرسان الموقع الخالي. تجري فيه البعثة الأوروبية بقيادة الدكتورة حوريك سوروزيان اكتشافات مذهلة وتماثيل سخمت المعاد تجميعها.',
      en: 'Built in the golden age of Egypt; destroyed by a 27 BC earthquake leaving the Memnon Colossi standing. Landmark excavations reveal hundreds of Sekhmet statues.',
      fr: 'Édifié à l’âge d’or pharaonique ; détruit par un séisme en 27 av. J.-C. Les fouilles actuelles reconstituent des merveilles de statuaire.',
      es: 'Construido en el apogeo egipcio; destruido por un sismo en el 27 a.C. Las excavaciones actuales revelan colosos asombrosos.',
      de: 'Im goldenen Zeitalter erbaut; durch Erdbeben 27 v. Chr. zerstört. Laufende Ausgrabungen bergen spektakuläre Kolosse.'
    },
    story: {
      ar: 'ارتبط التمثال الشمالي بأسطورة "ممنون المغني" في العصرين اليوناني والروماني، حيث كان يصدر صفيراً شجياً عند شروق الشمس مع تسخين الهواء في شقوق الحجر.',
      en: 'Famed in antiquity for the "Vocal Memnon" sound produced at sunrise as morning dew evaporated from stone fissures.',
      fr: 'Légende gréco-romaine de Memnon chantant à l’aube lorsque le soleil réchauffait la pierre fracturée.',
      es: 'Famoso en la antigüedad clásica por emitir un canto misterioso con los primeros rayos del sol.',
      de: 'In der Antike berühmt für die "singenden" Memnon-Kolosse beim Sonnenaufgang.'
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'أمنحتب الثالث (والد أخناتون وجد توت عنخ آمون)', en: 'Amenhotep III', fr: 'Amenhotep III', es: 'Amenhotep III', de: 'Amenophis III.' },
    architecturalHighlights: [
      { ar: 'تمثالا ممنون المنحوتان من كتل الكوارتزيت الضخمة المجلوبة من الجبل الأحمر بالقاهرة بوزن 720 طناً لكل تمثال', en: 'Twin 720-ton quartzite monoliths transported over 600 km from Cairo quarries', fr: 'Monolithes de quartzite de 720 tonnes acheminés depuis Le Caire', es: 'Monolitos de cuarcita de 720 toneladas transportados desde El Cairo', de: 'Zwei 720 Tonnen schwere Quarzit-Monolithen aus Kairoer Steinbrüchen' },
      { ar: 'بهو الأعمدة البازلتية وصروح تماثيل المعبودة سخمت المستخرجة حديثاً', en: 'Newly re-erected colossi and the field of lioness Sekhmet statues', fr: 'Colosses récemment redressés et statues de Sekhmet', es: 'Colosos recientemente erguidos y decenas de estatuas de Sejmet', de: 'Neu aufgerichtete Kolosse und die Sachmet-Statuenallee' }
    ],
    mustSee: [
      { ar: 'الوقوف أمام عملاقي ممنون عند شروق الشمس مع عبور بالونات الهواء في الأفق', en: 'Standing before Memnon colossi at sunrise with hot air balloons drifting overhead', fr: 'Contempler les colosses à l’aube avec le survol des montgolfières', es: 'Los colosos al amanecer con los globos aerostáticos flotando en el cielo', de: 'Sonnenaufgang an den Memnonkolossen mit Heißluftballons am Himmel' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7206, lng: 32.6105 },
    distanceFromCenterKm: 6.5,
    openingHours: { ar: 'عملاقا ممنون متاحان مجاناً على مدار الساعة، وموقع المعبد مفتوح 8:00 ص - 4:00 م', en: 'Memnon Colossi accessible 24/7 free; Temple site 8:00 AM - 4:00 PM', fr: 'Colosses en accès libre 24h/24 ; site 8h00 - 16h00', es: 'Colosos acceso libre 24h; templo 8:00 - 16:00', de: 'Kolosse rund um die Uhr frei zugänglich; Tempelareal 8:00 - 16:00 Uhr' },
    ticketPrice: { ar: 'عملاقا ممنون بدون تذاكر (مجانًا) - موقع الحفائر بتنسيق أثري', en: 'Colossi free entry; excavation site coordination', fr: 'Colosses gratuits ; fouilles sur demande', es: 'Colosos gratuitos ; sitio según coordinación', de: 'Kolosse kostenlos frei zugänglich' },
    status: 'open',
    featured: true,
    order: 24,
  },
  {
    id: 'mentuhotep_second_deir_el_bahari',
    name: {
      ar: 'معبد منتوحتب الثاني بالدير البحري',
      en: 'Temple of Mentuhotep II at Deir el-Bahari',
      fr: 'Temple de Montouhotep II à Deir el-Bahari',
      es: 'Templo de Mentuhotep II en Deir el-Bahari',
      de: 'Tempel Mentuhotep II. in Deir el-Bahari',
    },
    shortDesc: {
      ar: 'المعبد الرائد الذي ألهم تصميم معبد حتشبسوت، شيده موحد القطرين في الدولة الوسطى في حضن جرف الدير البحري.',
      en: 'The pioneer terraced funerary complex that inspired Hatshepsut, built by the reunifier of Egypt in the Middle Kingdom.',
      fr: 'Le complexe funéraire précurseur qui inspira Hatchepsout, édifié par le réunificateur de l’Égypte.',
      es: 'El templo pionero que inspiró a Hatshepsut, erigido por el reunificador de Egipto.',
      de: 'Der richtungsweisende Vorgängerbau des Hatschepsut-Tempels, erbaut vom Wiedervereiniger Ägyptens.'
    },
    fullHistory: {
      ar: 'منتوحتب الثاني أنهى عصر الاضمحلال الأول ووحد مصر جاعلاً طيبة عاصمة لها، وشيد أول معبد متدرج مع هرم أو مصطبة محاطة بأشجار الجميز والغاب.',
      en: 'Mentuhotep II unified Egypt initiating the Middle Kingdom, creating Thebes as national capital with this stepped terraced shrine.',
      fr: 'Fondateur du Moyen Empire, il fit de Thèbes la capitale et créa ce temple étagé entouré de sycomores.',
      es: 'Fundador del Imperio Medio, convirtió a Tebas en capital y levantó este santuario.',
      de: 'Begründer des Mittleren Reiches; machte Theben zur Hauptstadt und baute diese Terrassenanlage.'
    },
    story: {
      ar: 'عثر في فنائه على مقابر زوجات الملك وأميرات البلاط مثل مقبرة كاوويت ومقبرة حنحنت وتوابيتهن الحجرية المذهلة.',
      en: 'Burial site of royal wives and court princesses including Kawit and Henhenet with world-famed sarcophagi.',
      fr: 'Lieu de sépulture des épouses royales dont la reine Kaouit au célèbre sarcophage ciselé.',
      es: 'Lugar de entierro de esposas reales como la reina Kawit y sus famosos sarcófagos.',
      de: 'Grabstätte der königlichen Gemahlinnen wie Kawit mit weltberühmten Reliefsarkophagen.'
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الدولة الوسطى (الأسرة 11)', en: 'Middle Kingdom (11th Dynasty)', fr: 'Moyen Empire (11e dynastie)', es: 'Imperio Medio (Dinastía XI)', de: 'Mittleres Reich (11. Dynastie)' },
    pharaoh: { ar: 'منتوحتب الثاني (نب حبت رع)', en: 'Mentuhotep II (Nebhepetre)', fr: 'Montouhotep II', es: 'Mentuhotep II', de: 'Mentuhotep II.' },
    architecturalHighlights: [
      { ar: 'الشرفة الحجرية الضخمة التي كانت تعلوها مصطبة مربعة تماثل التل الأزلي المنبثق من العدم', en: 'Stepped terrace topped by primeval mound structure symbolizing primordial creation', fr: 'Terrasse étagée surmontée du tertre primordial', es: 'Terraza escalonada coronada por el montículo primordial', de: 'Terrassenanlage gekrönt von der Urhügel-Struktur' }
    ],
    mustSee: [
      { ar: 'حفر غرس أشجار الجميز المقدسة المحفورة في الصخر أمام مدخل المعبد', en: 'Rock-cut sycamore and tamarisk planting pits at the forecourt entrance', fr: 'Fosses de plantation d’arbres sacrés creusées dans le roc', es: 'Fosas de plantación de sicomoros sagrados talladas en roca', de: 'In den Fels gehauene Pflanzgruben für heilige Maulbeerfeigen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7369, lng: 32.6075 },
    distanceFromCenterKm: 9.6,
    openingHours: { ar: 'متاح ضمن منطقة الدير البحري (6:00 ص - 5:00 م)', en: 'Within Deir el-Bahari zone (6:00 AM - 5:00 PM)', fr: 'Dans le périmètre de Deir el-Bahari', es: 'Dentro del complejo de Deir el-Bahari', de: 'Im Deir el-Bahari Areal (6:00 - 17:00 Uhr)' },
    ticketPrice: { ar: 'مشمول بتذكرة الدير البحري', en: 'Included in Deir el-Bahari ticket', fr: 'Inclus dans le billet de Deir el-Bahari', es: 'Incluido en entrada Deir el-Bahari', de: 'Im Deir el-Bahari Ticket enthalten' },
    status: 'open',
    order: 25,
  },
  {
    id: 'thutmose_third_deir_el_bahari',
    name: {
      ar: 'معبد تحتمس الثالث بالدير البحري (دجسير آخت)',
      en: 'Temple of Thutmose III at Deir el-Bahari (Djeser-Akhet)',
      fr: 'Temple de Thoutmôsis III à Deir el-Bahari',
      es: 'Templo de Tutmosis III en Deir el-Bahari',
      de: 'Tempel Thutmosis III. in Deir el-Bahari',
    },
    shortDesc: {
      ar: 'معبد "أفق القداسة" المشيد على مصطبة عليا بين معبدي حتشبسوت ومنتوحتب الثاني.',
      en: 'The "Holy Horizon" temple erected on a high platform wedged between Hatshepsut and Mentuhotep II temples.',
      fr: 'Le temple "Horizon Sacré" niché entre les temples d’Hatchepsout et de Montouhotep II.',
      es: 'El templo del "Horizonte Sagrado" enclavado entre Hatshepsut y Mentuhotep II.',
      de: 'Der Tempel "Heiliger Horizont", erbaut auf einer Terrasse zwischen Hatschepsut und Mentuhotep II.'
    },
    fullHistory: {
      ar: 'اكتشفته البعثة البولندية في الستينيات بعد أن دمرته انهيارات صخرية في العصور القديمة، وكشفت عن مقصورة حتحور البديعة المنحوتة في الصخر.',
      en: 'Discovered in the 1960s by Polish archaeologists after ancient rockslides, revealing an intact Hathor shrine.',
      fr: 'Découvert dans les années 1960 par la mission polonaise suite à des éboulements antiques.',
      es: 'Descubierto en los años 60 por arqueólogos polacos tras antiguos derrumbes.',
      de: 'In den 1960er Jahren von polnischen Archäologen unter Felsstürzen entdeckt.'
    },
    story: {
      ar: 'أراد تحتمس الثالث وضع معبده في أعلى نقطة بالدير البحري ليتلقى زورق آمون الطقسي في عيد الوادي الجميل.',
      en: 'Erected at the highest point to receive the sacred barque of Amun during the Beautiful Feast of the Valley.',
      fr: 'Bâti sur le point culminant pour accueillir la barque d’Amon lors de la Belle Fête de la Vallée.',
      es: 'Construido en el punto más elevado para recibir la barca de Amón en la Fiesta del Valle.',
      de: 'Am höchsten Punkt errichtet, um die Barke des Amun beim Talfest zu empfangen.'
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'تحتمس الثالث', en: 'Thutmose III', fr: 'Thoutmôsis III', es: 'Tutmosis III', de: 'Thutmosis III.' },
    architecturalHighlights: [
      { ar: 'مقصورة حتحور المكتملة بألوانها الزاهية والتي أعيد تركيبها بمتحف الأقصر', en: 'Intact painted Hathor chapel (now preserved in Luxor Museum) and cliff platform', fr: 'Chapelle peinte d’Hathor et plateforme rocheuse', es: 'Capilla policromada de Hathor y plataforma rocosa', de: 'Vollständig bemalte Hathor-Kapelle und Felsplattform' }
    ],
    mustSee: [
      { ar: 'كتل الحجر الرملي المزينة بألوان رداء الملك والآلهة المستخرجة من الموقع', en: 'Polychrome relief fragments with vibrant royal blue and ochre', fr: 'Fragments de bas-reliefs aux couleurs bleues et ocres préservées', es: 'Fragmentos de relieves con azul y ocre intensos', de: 'Relieffragmente mit leuchtenden Farben' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7375, lng: 32.6070 },
    distanceFromCenterKm: 9.5,
    openingHours: { ar: 'موقع دراسة أثري بالدير البحري', en: 'Archaeological research zone at Deir el-Bahari', fr: 'Zone archéologique à Deir el-Bahari', es: 'Zona arqueológica en Deir el-Bahari', de: 'Archäologische Forschungszone' },
    ticketPrice: { ar: 'ضمن محيط الدير البحري', en: 'Deir el-Bahari perimeter', fr: 'Périmètre de Deir el-Bahari', es: 'Perímetro de Deir el-Bahari', de: 'Areal Deir el-Bahari' },
    status: 'open',
    order: 26,
  },
  {
    id: 'hathor_deir_el_medina',
    name: {
      ar: 'معبد حتحور بدير المدينة',
      en: 'Ptolemaic Temple of Hathor at Deir el-Medina',
      fr: 'Temple d’Hathor à Deir el-Médina',
      es: 'Templo de Hathor en Deir el-Medina',
      de: 'Hathor-Tempel von Deir el-Medina',
    },
    shortDesc: {
      ar: 'معبد بطلمي بديع متكامل الحفظ محاط بسور من الآجر اللبن في وادي قرية صناع المقابر الملكية.',
      en: 'A remarkably intact jewel of Ptolemaic architecture enclosed by mudbrick walls in the artisans’ village valley.',
      fr: 'Splendide temple ptolémaïque intact entouré d’un mur de briques crues dans le vallon des artisans.',
      es: 'Joya ptolemaica intacta rodeada de muros de adobe en el poblado de los artesanos.',
      de: 'Vollständig erhaltener ptolemäischer Tempel in der Talschlucht des Arbeiterdorfes.'
    },
    fullHistory: {
      ar: 'شيده البطالمة على أنقاض معابد أقدم تعود للدولة الحديثة، وكرس لحتحور وماعت (العدالة) والحكيمين المؤلهين إمحوتب وأمنحتب بن حابو.',
      en: 'Dedicated to Hathor, Maat, and the deified polymaths Imhotep and Amenhotep son of Hapu.',
      fr: 'Dédié à Hathor, Maât et aux deux sages divinisés Imhotep et Amenhotep fils de Hapou.',
      es: 'Consagrado a Hathor, Maat y a los sabios divinizados Imhotep y Amenhotep hijo de Hapu.',
      de: 'Geweiht Hathor, Maat und den vergöttlichten Weisen Imhotep und Amenophis, Sohn des Hapu.'
    },
    story: {
      ar: 'يضم نقشاً شهيراً ونادراً لمحاكمة الموتى ووزن القلب ضد ريشة الماعت أمام أوزوريس في العالم السفلي.',
      en: 'Contains a famous, exceptionally detailed relief of the Judgment of the Dead and Weighing of the Heart.',
      fr: 'Abrite un célèbre bas-relief du Jugement de l’âme et de la pesée du cœur devant Osiris.',
      es: 'Alberga el famoso relieve del Juicio de Osiris y el pesado del corazón.',
      de: 'Enthält das berühmte Relief vom Totengericht mit der Herzenswägung vor Osiris.'
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'العصر البطلمي', en: 'Ptolemaic Period', fr: 'Époque ptolémaïque', es: 'Época ptolemaica', de: 'Ptolemäische Zeit' },
    pharaoh: { ar: 'بطليموس الرابع وبطليموس السادس', en: 'Ptolemy IV & Ptolemy VI', fr: 'Ptolémée IV et VI', es: 'Ptolomeo IV y VI', de: 'Ptolemaios IV. und VI.' },
    architecturalHighlights: [
      { ar: 'الأعمدة الحتحورية الرشيقة والنوافذ الشبكية الحجرية التي ينفذ منها ضوء الشمس بهدوء', en: 'Hathor-headed columns and stone lattice window screens filtering desert sunlight', fr: 'Colonnes hathoriques et claustras de pierre ajourés', es: 'Columnas hathóricas y celosías de piedra', de: 'Hathor-Säulen und steinerne Gitterfenster' }
    ],
    mustSee: [
      { ar: 'مشهد وزن القلب في محاكمة الموتى على جدار قدس الأقداس', en: 'The Weighing of the Heart relief in the inner sanctuary', fr: 'Scène de la pesée du cœur dans le sanctuaire', es: 'Escena del pesado del corazón en el santuario', de: 'Szene der Seelenwägung im inneren Heiligtum' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7289, lng: 32.6033 },
    distanceFromCenterKm: 8.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمول بتذكرة دير المدينة', en: 'Included in Deir el-Medina ticket', fr: 'Inclus dans le billet de Deir el-Médina', es: 'Incluido en boleto Deir el-Medina', de: 'Im Deir el-Medina Ticket enthalten' },
    status: 'open',
    order: 27,
  },
  {
    id: 'amenhotep_second_mortuary',
    name: {
      ar: 'معبد أمنحتب الثاني الجنائزي',
      en: 'Mortuary Temple of Amenhotep II',
      fr: 'Temple Funéraire d’Amenhotep II',
      es: 'Templo Funerario de Amenhotep II',
      de: 'Totentempel Amenophis II.',
    },
    shortDesc: {
      ar: 'معبد جنائزي لملك مصر الرياضي المحارب أمنحتب الثاني، يقع شمال الرامسيوم.',
      en: 'Mortuary temple of the athlete-pharaoh Amenhotep II, situated north of the Ramesseum.',
      fr: 'Temple funéraire du pharaon athlète Amenhotep II, situé au nord du Ramesséum.',
      es: 'Templo funerario del faraón atleta Amenhotep II, al norte del Ramesseum.',
      de: 'Totentempel des athletischen Pharaos Amenophis II. nördlich des Ramesseums.'
    },
    fullHistory: {
      ar: 'كشفت عنه أعمال الحفائر الإيطالية بقيادة بيتري ثم سكياباريللي، وكان يضم قاعة أعمدة وصروحاً حجرية كرست لطقوس الخلود الملكي.',
      en: 'Excavated by Petrie and Schiaparelli; featured hypostyle halls and sanctuaries for royal immortality rituals.',
      fr: 'Fouillé par Petrie et Schiaparelli ; comprenait cours hypostyles et sanctuaires.',
      es: 'Excavado por Petrie y Schiaparelli, con patios hipóstilos y santuarios.',
      de: 'Von Petrie und Schiaparelli freigelegt; umfasste Säulensäle und Weihestätten.'
    },
    story: {
      ar: 'اشتهر الملك بمهارته الخارقة في الرماية بالسهام والقوس النحاسي وقوته البدنية التي وثقها في نقوش معابده.',
      en: 'The pharaoh was famed for unprecedented physical strength and archery prowess documented in his temple stelae.',
      fr: 'Le pharaon était réputé pour sa force athlétique et son habileté légendaire à l’arc.',
      es: 'Famoso por su legendaria puntería con el arco y su fuerza sobrehumana.',
      de: 'Berühmt für seine überragende Bogenschützenkunst und Körperkraft.'
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'أمنحتب الثاني', en: 'Amenhotep II', fr: 'Amenhotep II', es: 'Amenhotep II', de: 'Amenophis II.' },
    architecturalHighlights: [
      { ar: 'أساسات الصرح والبلاطات الحجرية المنقوشة بأسماء ملوك الدولة الحديثة', en: 'Pylon foundations and inscribed limestone blocks of New Kingdom pharaohs', fr: 'Fondations de pylônes et dalles inscrites', es: 'Cimientos del pilono y losas inscritas', de: 'Pylon-Fundamente und beschriftete Steinplatten' }
    ],
    mustSee: [
      { ar: 'بقايا لوحات النصر ومقصورة الزورق الجنائزي', en: 'Victory stelae fragments and funerary barque sanctuary remnants', fr: 'Vestiges de stèles de victoire', es: 'Restos de estelas de victoria', de: 'Reste von Siegesstelen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7295, lng: 32.6120 },
    distanceFromCenterKm: 8.3,
    openingHours: { ar: 'موقع أثري تحت الدراسة والتنقيب', en: 'Archaeological area under active study', fr: 'Site archéologique en cours d’étude', es: 'Zona arqueológica en investigación', de: 'Archäologische Forschungsstätte' },
    ticketPrice: { ar: 'يرجى مراجعة تفتيش آثار البر الغربي', en: 'Inquire at West Bank Antiquities Office', fr: 'Contacter l’inspectorat rive ouest', es: 'Consultar en la inspección de la orilla oeste', de: 'Beim Westufer-Inspektorat erfragen' },
    status: 'permit_required',
    order: 28,
  },
  {
    id: 'small_temple_amun_medinet_habu',
    name: {
      ar: 'المعبد الصغير لآمون بمدينة هابو',
      en: 'Small Temple of Amun at Medinet Habu',
      fr: 'Petit Temple d’Amon à Médinet Habou',
      es: 'Pequeño Templo de Amón en Medinet Habu',
      de: 'Kleiner Amun-Tempel von Medinet Habu',
    },
    shortDesc: {
      ar: 'معبد عريق بدأته حتشبسوت وتحتمس الثالث في بقعة التل الأزلي المقدس بمدينة هابو وتوسع فيه البطالمة.',
      en: 'An ancient sanctuary founded by Hatshepsut and Thutmose III on the primeval mound of Theban creation.',
      fr: 'Sanctuaire fondé par Hatchepsout et Thoutmôsis III sur la butte primordiale de Thèbes.',
      es: 'Antiguo santuario fundado por Hatshepsut y Tutmosis III sobre la colina sagrada de la creación.',
      de: 'Heiligtum von Hatschepsut und Thutmosis III. auf dem thebanischen Urhügel der Schöpfung.'
    },
    fullHistory: {
      ar: 'يعود أصله إلى عصر الأسرة الثامنة عشرة، وكان يعتبر موضع دفن الثامون الأشموني (الآلهة الثمانية الأولى للكون)، واستمرت قدسيته حتى العصر الروماني.',
      en: 'Regarded as the burial ground of the Hermopolitan Ogdoad (the 8 primordial deities of creation).',
      fr: 'Considéré comme le lieu de sépulture de l’Ogdoade (les huit dieux créateurs primordiaux).',
      es: 'Venerado como la morada de la Ogdóada primordial de la creación.',
      de: 'Galt als Begräbnisstätte der Urgötter der thebanischen Schöpfung.'
    },
    story: {
      ar: 'كان آمون الأقصر ينتقل كل عشرة أيام إلى هذا المعبد لتجديد طاقة الخلق وتكريم الآلهة الأولى التي نشأ منها العالم.',
      en: 'Amun crossed the Nile every decade to this sanctuary to renew creation and honor the primordial creators.',
      fr: 'Amon de Louxor traversait le Nil tous les 10 jours pour renouveler la création du monde.',
      es: 'Amón cruzaba el Nilo cada diez días para renovar la energía creadora del universo.',
      de: 'Amun besuchte diesen Ort alle zehn Tage zur Erneuerung der kosmischen Lebenskraft.'
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة 18 حتى العصر الروماني', en: '18th Dynasty to Roman Period', fr: '18e dynastie à l’époque romaine', es: 'Dinastía XVIII a época romana', de: '18. Dynastie bis Römerzeit' },
    pharaoh: { ar: 'حتشبسوت، تحتمس الثالث، والبطالمة', en: 'Hatshepsut, Thutmose III, Ptolemies', fr: 'Hatchepsout, Thoutmôsis III, Ptolémées', es: 'Hatshepsut, Tutmosis III, Ptolomeos', de: 'Hatschepsut, Thutmosis III., Ptolemäer' },
    architecturalHighlights: [
      { ar: 'قدس الأقداس المشترك لحتشبسوت والصرح البطلمي الضخم والبهو الروماني المحيط', en: 'Hatshepsut inner sanctum, Ptolemaic pylon, and Roman portico', fr: 'Sanctuaire d’Hatchepsout, pylône ptolémaïque et portique romain', es: 'Santuario de Hatshepsut, pilono ptolemaico y pórtico romano', de: 'Hatschepsut-Schrein, ptolemäischer Pylon und römischer Säulengang' }
    ],
    mustSee: [
      { ar: 'أسماء حتشبسوت المحفورة ومعدلة باسم تحتمس الثاني والثالث على الجدران', en: 'Reworked cartouches showing ancient dynastic changes between Hatshepsut and Thutmose III', fr: 'Cartouches modifiés témoignant de la succession royale', es: 'Cartuchos reales modificados que narran la historia dinástica', de: 'Überarbeitete Königskartuschen mit Zeugnissen der Nachfolge' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7202, lng: 32.6005 },
    distanceFromCenterKm: 7.8,
    openingHours: { ar: 'مشمول بزيارة مجمع مدينة هابو (6:00 ص - 5:00 م)', en: 'Within Medinet Habu complex (6:00 AM - 5:00 PM)', fr: 'Dans le complexe de Médinet Habou', es: 'Dentro del complejo de Medinet Habu', de: 'Im Medinet Habu Komplex (6:00 - 17:00 Uhr)' },
    ticketPrice: { ar: 'مشمول بتذكرة مدينة هابو', en: 'Included in Medinet Habu ticket', fr: 'Inclus dans le billet Médinet Habou', es: 'Incluido en boleto Medinet Habu', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 29,
  },
  {
    id: 'malkata_palace_temple',
    name: {
      ar: 'قصر ومعبد الملقطة',
      en: 'Malkata Palace & Temple of Amenhotep III',
      fr: 'Palais et Temple de Malqata',
      es: 'Palacio y Templo de Malkata',
      de: 'Palast und Tempel von Malqata',
    },
    shortDesc: {
      ar: 'المدينة الملكية الفاخرة للفرعون أمنحتب الثالث وبحيرتها الصناعية العملاقة (بركة هابو).',
      en: 'The sprawling residential palace-city of Pharaoh Amenhotep III, fronted by the immense artificial Birket Habu lake.',
      fr: 'La somptueuse cité palatiale d’Amenhotep III et son immense lac cérémoniel artificiel.',
      es: 'La deslumbrante ciudad palaciega de Amenhotep III frente al colosal lago artificial Birket Habu.',
      de: 'Die prunkvolle Residenzstadt von Pharao Amenophis III. mit dem riesigen künstlichen See Birket Habu.'
    },
    fullHistory: {
      ar: 'شيدها أمنحتب الثالث في جنوب البر الغربي لتكون مقراً لأعياد تتويجه الثلاثينية (عيد سد) وإقامته مع زوجته الملكة تي، وغطت أكثر من 30 هكتاراً بمنازل الحاشية والحدائق.',
      en: 'Built for the Sed Jubilees of Amenhotep III and Queen Tiye, spanning over 30 hectares of palaces and villas.',
      fr: 'Édifiée pour les jubilés royaux d’Amenhotep III et de la reine Tiyi sur plus de 30 hectares.',
      es: 'Construida para los jubileos de Amenhotep III y la reina Tiy sobre más de 30 hectáreas.',
      de: 'Für die Sed-Feste von Amenophis III. und Königin Teje über 30 Hektar erbaut.'
    },
    story: {
      ar: 'حفر في 15 يوماً بحيرة مائية صناعية هائلة بطول كيلومترين لتبحر فيها الملكة تي في قاربها الذهبي المسمى "أتون يشرق".',
      en: 'Features a 2 km artificial lake dug in 15 days for Queen Tiye’s ceremonial golden barque "The Dazzling Aten".',
      fr: 'Un lac de 2 km fut creusé en quinze jours pour la barque d’or de la reine Tiyi.',
      es: 'Un lago de 2 km fue cavado en quince días para la barca dorada de la reina Tiy.',
      de: 'Ein 2 km langer See wurde in 15 Tagen für die goldene Barke von Königin Teje ausgehoben.'
    },
    category: 'west_temple',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'أمنحتب الثالث والملكة تي', en: 'Amenhotep III & Queen Tiye', fr: 'Amenhotep III et reine Tiyi', es: 'Amenhotep III y reina Tiy', de: 'Amenophis III. und Königin Teje' },
    architecturalHighlights: [
      { ar: 'بقايا جدران قاعة العرش المزينة برسومات الطيور والأسماك والنباتات المائية الملونة', en: 'Fresco painted plaster remains of birds, fish, and lotus blossoms from the throne room', fr: 'Fresques peintes d’oiseaux et de lotus de la salle du trône', es: 'Frescos de aves y peces de la sala del trono', de: 'Wandmalereien mit Vögeln und Lotusblumen aus dem Thronsaal' }
    ],
    mustSee: [
      { ar: 'معبد آمون في الملقطة وتلال حفر بركة هابو المحيطة بالموقع', en: 'Temple of Amun at Malkata and Birket Habu embankment mounds', fr: 'Temple d’Amon de Malqata et digues de Birket Habou', es: 'Templo de Amón y diques del lago Birket Habu', de: 'Amun-Tempel von Malqata und die Uferdämme des Sees' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7142, lng: 32.5925 },
    distanceFromCenterKm: 8.5,
    openingHours: { ar: 'موقع أثري مفتوح - يفضل بالتنسيق مع تفتيش الآثار', en: 'Open archaeological field - coordination advised', fr: 'Site archéologique ouvert - coordination conseillée', es: 'Sitio arqueológico - coordinación recomendada', de: 'Freies Gelände - Voranmeldung empfohlen' },
    ticketPrice: { ar: 'تنسيق مع إدارة آثار غرب الأقصر', en: 'West Bank Antiquities Office', fr: 'Bureau des antiquités rive ouest', es: 'Oficina de antigüedades orilla oeste', de: 'Antikenverwaltung Westufer' },
    status: 'open',
    order: 30,
  },
];
