import { Treasure } from '../types';

export const WEST_TOMBS: Treasure[] = [
  // --- VALLEY OF THE KINGS ---
  {
    id: 'tomb_tutankhamun_kv62',
    name: {
      ar: 'مقبرة توت عنخ آمون (KV62)',
      en: 'Tomb of Tutankhamun (KV62)',
      fr: 'Tombeau de Toutânkhamon (KV62)',
      es: 'Tumba de Tutankamón (KV62)',
      de: 'Grab des Tutanchamun (KV62)',
    },
    shortDesc: {
      ar: 'أشهر اكتشاف أثري في تاريخ البشرية، المقبرة الملكية الوحيدة التي عثر عليها شبه كاملة بكنوزها الذهبية الأسطورية.',
      en: 'The most iconic archaeological discovery in history, the only nearly intact royal tomb found with its golden treasure.',
      fr: 'La découverte archéologique la plus célèbre au monde, unique sépulture royale trouvée quasi intacte avec ses ors.',
      es: 'El hallazgo más célebre de la arqueología, única tumba real hallada casi intacta con su ajuar de oro.',
      de: 'Der berühmteste archäologische Fund der Weltgeschichte, einziges nahezu unberührtes Königsgrab mit Goldschatz.',
    },
    fullHistory: {
      ar: 'اكتشفها هوارد كارتر في 4 نوفمبر 1922 بتمويل من اللورد كارنارفون في وادي الملوك. تضم المقبرة مومياء الملك الشاب الأصلية في تابوته الحجري حتى اليوم.',
      en: 'Discovered by Howard Carter on November 4, 1922; preserves the original mummy of the boy king in his quartzite sarcophagus.',
      fr: 'Découvert par Howard Carter en 1922 ; abrite toujours la momie du jeune pharaon dans son sarcophage de quartzite.',
      es: 'Descubierta por Howard Carter en 1922; conserva aún la momia original del faraón niño en su sarcófago.',
      de: '1922 von Howard Carter entdeckt; birgt bis heute die echte Mumie des Kindkönigs im Quarzitsarkophag.',
    },
    story: {
      ar: 'دفن الملك الصبي على عجل بعد موته المفاجئ في سن التاسعة عشرة، ونقشت جدران غرفة دفنه بمناظر كتاب ما في الآخرة (الإيمي دوات).',
      en: 'Buried hurriedly at age 19; chamber painted with vivid gold-yellow scenes from the Book of the Dead and Amduat.',
      fr: 'Inhumé précipitamment à 19 ans ; chambre funéraire aux fresques d’or illustrant le voyage vers l’au-delà.',
      es: 'Sepultado con premura a los 19 años; cámara funeraria pintada de oro con escenas del Libro de los Muertos.',
      de: 'Mit 19 Jahren eilig beigesetzt; Grabkammer mit leuchtenden Goldmalereien aus dem Amduat-Buch.',
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (حوالي 1323 ق.م)', en: '18th Dynasty (c. 1323 BC)', fr: '18e dynastie (vers 1323 av. J.-C.)', es: 'Dinastía XVIII (h. 1323 a.C.)', de: '18. Dynastie (ca. 1323 v. Chr.)' },
    pharaoh: { ar: 'توت عنخ آمون', en: 'Tutankhamun', fr: 'Toutânkhamon', es: 'Tutankamón', de: 'Tutanchamun' },
    architecturalHighlights: [
      { ar: 'غرفة الدفن الذهبية المنقوشة باثني عشر قرداً مقدساً لساعات الليل الاثنتي عشرة', en: 'Golden burial chamber featuring 12 baboons representing nocturnal hours', fr: 'Chambre funéraire peinte or avec les douze babouins des heures de la nuit', es: 'Cámara funeraria dorada con los doce babuinos de las horas nocturnas', de: 'Goldene Grabkammer mit den zwölf Pavianen der Nachtstunden' }
    ],
    mustSee: [
      { ar: 'المومياء الحقيقية لتوت عنخ آمون المعروضة في صندوق مكيّف داخل المقبرة', en: 'The actual mummy of Tutankhamun resting inside the tomb', fr: 'La momie authentique de Toutânkhamon exposée dans sa sépulture', es: 'La momie auténtica de Tutankamón en su tumba', de: 'Die echte Mumie Tutanchamuns im klimatisierten Schrein vor Ort' }
    ],
    mainImage: '/src/assets/images/valley_of_the_kings_entrance_1794257302176.jpg',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7402, lng: 32.6018 },
    distanceFromCenterKm: 11.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: '500 ج.م للأجانب / 50 ج.م للمصريين (تذكرة خاصة إضافية)', en: '500 EGP Foreigners / 50 EGP Egyptians (Special pass)', fr: '500 EGP Étrangers / 50 EGP Égyptiens', es: '500 EGP Extranjeros / 50 EGP Egipcios', de: '500 EGP Ausländer / 50 EGP Ägypter' },
    status: 'open',
    featured: true,
    order: 31,
  },
  {
    id: 'tomb_seti_first_kv17',
    name: {
      ar: 'مقبرة سيتي الأول (KV17 - مقبرة بلزوني)',
      en: 'Tomb of Seti I (KV17 - Belzoni Tomb)',
      fr: 'Tombeau de Séthi Ier (KV17)',
      es: 'Tumba de Seti I (KV17)',
      de: 'Grab von Sethos I. (KV17)',
    },
    shortDesc: {
      ar: 'أطول وأعمق وأجمل مقابر وادي الملوك على الإطلاق، وتلقب بـ "كنيسة سستينا للشرق القديم".',
      en: 'The longest, deepest, and artistically supreme tomb in the Valley of the Kings; often hailed as ancient Egypt’s Sistine Chapel.',
      fr: 'La tombe la plus longue, profonde et spectaculaire du Val des Rois, véritable chapelle Sixtine de l’Égypte antique.',
      es: 'La tumba más profunda, extensa y bella del Valle de los Reyes; la Capilla Sixtina del arte faraónico.',
      de: 'Das längste, tiefste und vollkommenste Grab im Tal der Könige; die Sixtinische Kapelle des Alten Ägypten.',
    },
    fullHistory: {
      ar: 'اكتشفها الرحالة الإيطالي جيوفاني بلزوني عام 1817. تمتد لأكثر من 137 متراً في قلب الصخر بـ 11 حجرة وممر منحوتة وملونة بنقاء لا نظير له.',
      en: 'Discovered in 1817 by Giovanni Belzoni; descends 137 meters with 11 chambers adorned in sublime raised relief.',
      fr: 'Découvert en 1817 par Giovanni Belzoni ; descend à 137 mètres avec 11 salles ornées de bas-reliefs parfaits.',
      es: 'Descubierta en 1817 por Giovanni Belzoni; desciende 137 m por 11 salas con relieves en relieve exquisitos.',
      de: '1817 von Giovanni Belzoni entdeckt; reicht 137 m in den Fels mit 11 meisterhaft bemalten Sälen.',
    },
    story: {
      ar: 'سقف غرفة الدفن الفلكي المقبب يصور خريطة الأبراج والنجوم القطبية التي لا تغرب في السماء الشمالية.',
      en: 'The vaulted astronomical ceiling of the burial chamber charts the circumpolar constellations and sacred skies.',
      fr: 'Le plafond astronomique voûté de la chambre funéraire cartographie les constellations célestes sacrées.',
      es: 'La bóveda astronómica de la cámara funeraria dibuja el mapa celeste y las constelaciones imperecederas.',
      de: 'Die astronomische Gewölbedecke zeigt die unvergänglichen Sternbilder des nördlichen Himmels.',
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة التاسعة عشرة (1279 ق.م)', en: '19th Dynasty (c. 1279 BC)', fr: '19e dynastie', es: 'Dinastía XIX', de: '19. Dynastie' },
    pharaoh: { ar: 'سيتي الأول', en: 'Seti I', fr: 'Séthi Ier', es: 'Seti I', de: 'Sethos I.' },
    architecturalHighlights: [
      { ar: 'السقف الفلكي الذهبي الأزرق في قاعة الدفن المنحوتة بأعمدة مزدوجة', en: 'Astronomical vault depicting celestial decans and constellations in gold and cobalt', fr: 'Voûte céleste cobalt et or aux constellations antiques', es: 'Bóveda celeste con constelaciones en azul cobalto y oro', de: 'Himmelsgewölbe in Kobaltblau und Gold mit Sternbildern' }
    ],
    mustSee: [
      { ar: 'نقوش كتاب البوابات وكتاب الموتى ذات النقوش البارزة متعددة الطبقات', en: 'Pristine raised relief chapters of Book of Gates and Book of the Dead', fr: 'Reliefs levés du Livre des Portes d’une finesse inégalée', es: 'Relieves del Libro de las Puertas con detalle milimétrico', de: 'Erhabene Reliefs des Pfortenbuches in vollendeter Kunstfertigkeit' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7410, lng: 32.6022 },
    distanceFromCenterKm: 11.3,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة ملكية خاصة (تذكرة تصريح خاص بوادي الملوك)', en: 'Special VIP ticket (dedicated access)', fr: 'Billet spécial d’accès réservé', es: 'Boleto especial de acceso exclusivo', de: 'Spezielles Zusatzticket für Exklusivzugang' },
    status: 'open',
    featured: true,
    order: 32,
  },
  {
    id: 'tomb_ramesses_sixth_kv9',
    name: {
      ar: 'مقبرة رمسيس السادس (KV9)',
      en: 'Tomb of Ramesses VI (KV9)',
      fr: 'Tombeau de Ramsès VI (KV9)',
      es: 'Tumba de Ramsés VI (KV9)',
      de: 'Grab von Ramses VI. (KV9)',
    },
    shortDesc: {
      ar: 'تشتهر بأسقفها الفلكية الخارقة التي تصور الإلهة نوت تبتلع قرص الشمس عند المغيب وتلده فجراً.',
      en: 'Famed for its awe-inspiring astronomical ceilings depicting sky goddess Nut swallowing the setting sun and rebirthing it at dawn.',
      fr: 'Célèbre pour son plafond astronomique grandiose montrant la déesse Nout engloutissant et enfantant le soleil.',
      es: 'Famosa por sus techos astronómicos donde la diosa Nut traga y renace el sol en el ciclo cósmico.',
      de: 'Berühmt für die überwältigenden Himmelsdecken mit Himmelsgöttin Nut, die die Sonne verschluckt und gebiert.',
    },
    fullHistory: {
      ar: 'بدأها رمسيس الخامس واستكملها ودُفن فيها رمسيس السادس. وفرت حطام حفر هذه المقبرة الحماية غير المقصودة لمقبرة توت عنخ آمون الواقعة أسفلها مباشرة.',
      en: 'Begun by Ramesses V and completed by Ramesses VI; its excavation rubble unintentionally concealed Tutankhamun’s tomb beneath.',
      fr: 'Initié par Ramsès V et achevé par Ramsès VI ; les déblais masquèrent providentiellement la tombe de Toutânkhamon.',
      es: 'Los escombros de su excavación ocultaron providencialmente la tumba de Tutankamón.',
      de: 'Der Grabungsschutt verbarg unbeabsichtigt das darunterliegende Grab Tutanchamuns.'
    },
    story: {
      ar: 'تضم النصوص الكاملة لكتاب النهار وكتاب الليل وكتاب الأرض في أبهى تجلياتها الملونة على الحجر.',
      en: 'Preserves the complete funerary compositions of Book of Day and Book of Night in vivid ochre and cobalt.',
      fr: 'Conserve l’intégralité des Livres du Jour, de la Nuit et de la Terre aux couleurs éclatantes.',
      es: 'Contiene los textos completos del Libro del Día y de la Noche en vívidos colores.',
      de: 'Enthält vollständige Texte des Buches vom Tage und der Nacht in strahlenden Farben.'
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة العشرين (1140 ق.م)', en: '20th Dynasty (c. 1140 BC)', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'رمسيس السادس ورمسيس الخامس', en: 'Ramesses VI & Ramesses V', fr: 'Ramsès VI et V', es: 'Ramsés VI y V', de: 'Ramses VI. und V.' },
    architecturalHighlights: [
      { ar: 'سقف حجرة الدفن المزدوج الذي يصور جسد الإلهة نوت ممتداً بطول القاعة كاملة', en: 'Double ceiling of Nut arched across the burial chamber with the golden solar bark', fr: 'Double plafond de la déesse Nout déployée sur toute la longueur de la crypte', es: 'Doble techo de Nut arqueada con la barca solar dorada', de: 'Doppeldecke der Himmelsgöttin Nut über die gesamte Grablänge' }
    ],
    mustSee: [
      { ar: 'التابوت الجرانيتي الضخم المعاد تجميعه في قاعة الدفن المنحوتة بالكامل', en: 'The colossal reassembled green conglomerate sarcophagus in the burial chamber', fr: 'Le gigantesque sarcophage de pierre reconstitué', es: 'El colosal sarcófago reconstituido en la cámara', de: 'Der gigantische wieder zusammengesetzte Sarkophag' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7405, lng: 32.6020 },
    distanceFromCenterKm: 11.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مخصصة إضافية بوادي الملوك', en: 'Dedicated additional ticket at Valley of Kings', fr: 'Billet spécifique à l’entrée de la vallée', es: 'Boleto especial en la entrada del valle', de: 'Zusatzticket am Eingang zum Tal' },
    status: 'open',
    featured: true,
    order: 33,
  },
  {
    id: 'tomb_ramesses_third_kv11',
    name: {
      ar: 'مقبرة رمسيس الثالث (KV11 - مقبرة العازفين)',
      en: 'Tomb of Ramesses III (KV11 - The Harper’s Tomb)',
      fr: 'Tombeau de Ramsès III (KV11 - Tombeau des Harpeurs)',
      es: 'Tumba de Ramsés III (KV11 - Tumba de los Arpistas)',
      de: 'Grab von Ramses III. (KV11 - Harfnergrab)',
    },
    shortDesc: {
      ar: 'مقبرة ملكية شاسعة تشتهر بغرفها الجانبية الفريدة ونقوش عازفي القيثارة الأعمياء ومعدات الحياة اليومية الملكية.',
      en: 'A grand corridor tomb famed for side annexes portraying blind harpers playing before the gods and royal weaponry.',
      fr: 'Tombe monumentale réputée pour ses peintures des musiciens harpeurs et ses magasins d’armes royales.',
      es: 'Vasta tumba célebre por sus frescos de arpistas ciegos tocando ante los dioses.',
      de: 'Großes Grab mit Nebenkammern, berühmt für die Wandbilder blinder Harfenspieler vor den Göttern.'
    },
    fullHistory: {
      ar: 'بدأ حفرها سيت ناخت ثم توقفت إثر اختراق مقبرة أمنمس، فاستكملها رمسيس الثالث بتغيير زاوية الممر وتعميقه لأكثر من 180 متراً.',
      en: 'Begun by Sethnakhte and completed by Ramesses III with an ingenious bent corridor after encountering KV10.',
      fr: 'Initié par Sethnakht, réorienté et achevé par Ramsès III sur 180 mètres de longueur.',
      es: 'Iniciada por Sethnajt y completada por Ramsés III con un desvío de eje ingenioso.',
      de: 'Von Sethnacht begonnen und von Ramses III. nach Achsenknick auf 180 m vollendet.'
    },
    story: {
      ar: 'تتميز بحجرات جانبية نادرة توثق صناعة الخبز الملكي، والمطبخ الفرعوني، والأثاث والأسلحة والبحار والسفن.',
      en: 'Unique side annexes document the royal bakery, weapons arsenal, royal furniture, and maritime vessels.',
      fr: 'Chambres annexes documentant la boulangerie royale, l’arsenal militaire et le mobilier d’apparat.',
      es: 'Cámaras anexas que muestran la panadería real, el armamento y los barcos.',
      de: 'Einzigartige Nebenkammern mit Darstellungen der königlichen Bäckerei, Rüstkammer und Schiffe.'
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة العشرين (1155 ق.م)', en: '20th Dynasty', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'رمسيس الثالث', en: 'Ramesses III', fr: 'Ramsès III', es: 'Ramsés III', de: 'Ramses III.' },
    architecturalHighlights: [
      { ar: 'حجرة العازفين المنقوشة بعازفي القيثارة اللذين يعزفان للإلهين شو وعنقت', en: 'Side chamber featuring the two blind harpers playing before Shu and Anuket', fr: 'Chambre des harpeurs aveugles jouant pour Shou et Anouket', es: 'Cámara de los dos arpistas ciegos tocando para los dioses', de: 'Harfnerkammer mit zwei blinden Musikern vor den Göttern' }
    ],
    mustSee: [
      { ar: 'نقوش الأسلحة الملكية والأواني الزجاجية والذهبية المستوردة من جزر البحر المتوسط', en: 'Paintings of Aegean-style swords, royal shields, and golden amphorae', fr: 'Peintures d’armes royales, boucliers et amphores dorées', es: 'Frescos de armas reales, espadas y vajilla suntuosa', de: 'Bilder königlicher Schwerter, Schilde und Goldamphoren' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7408, lng: 32.6015 },
    distanceFromCenterKm: 11.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمولة بتذكرة وادي الملوك العامة (3 مقابر)', en: 'Included in Valley of Kings general ticket (choice of 3)', fr: 'Inclus dans le pass général Vallée des Rois', es: 'Incluida en el boleto general del Valle de los Reyes', de: 'Im regulären Tal-der-Könige-Ticket enthalten' },
    status: 'open',
    order: 34,
  },
  {
    id: 'tomb_thutmose_third_kv34',
    name: {
      ar: 'مقبرة تحتمس الثالث (KV34)',
      en: 'Tomb of Thutmose III (KV34)',
      fr: 'Tombeau de Thoutmôsis III (KV34)',
      es: 'Tumba de Tutmosis III (KV34)',
      de: 'Grab von Thutmosis III. (KV34)',
    },
    shortDesc: {
      ar: 'منحوتة في شق صخري شاهق، وتتميز غرفة دفنها البيضاوية بنقوش تحاكي لفافة بردي عملاقة لكتاب الإيمي دوات.',
      en: 'Perched in a sheer cliff chimney; oval burial chamber painted like an enormous unfolded papyrus roll of the Amduat.',
      fr: 'Perché dans une faille rocheuse vertigineuse ; crypte ovale peinte comme un rouleau de papyrus géant.',
      es: 'Emplazada en una hendidura escarpada; cámara oval que reproduce un papiro desplegado del Amduat.',
      de: 'In einer Felsspalte gelegen; ovale Grabkammer bemalt wie eine gigantische entrollte Papyrusrolle.'
    },
    fullHistory: {
      ar: 'من أقدم المقابر الملكية بوادي الملوك، وتتطلب صعود درج خشبي معلق يطل على هاوية الوادي قبل النزول عبر بئر عميق.',
      en: 'One of the earliest Valley tombs; entered via a dramatic cliff staircase and a deep defensive shaft.',
      fr: 'L’une des plus anciennes tombes de la vallée ; accès par un escalier vertigineux sur la falaise.',
      es: 'Una de las más antiguas del valle; acceso por escaleras sobre el abismo y pozo defensivo.',
      de: 'Eines der ältesten Königsgräber; Zugang über eine steile Felsentreppe und einen Schutzschacht.'
    },
    story: {
      ar: 'خطوطها الفنية المخططة باللون الأسود والأحمر كأنها رسمت بيد خطاط فرعوني بالفرشاة والحبر على ورق البردي مباشرة.',
      en: 'Cursive stick-figure art rendered in black and red calligraphy directly mimicking handwritten hieratic papyrus.',
      fr: 'Style graphique cursif épuré évoquant un papyrus manuscrit à l’encre noire et rouge.',
      es: 'Estilo pictórico lineal en tinta negra y roja que emula la caligrafía sobre papiro.',
      de: 'Linearer Strichfiguren-Stil in schwarzer und roter Tusche wie auf echtem Papyrus.'
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (1425 ق.م)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'تحتمس الثالث (نابليون الشرق القديم)', en: 'Thutmose III', fr: 'Thoutmôsis III', es: 'Tutmosis III', de: 'Thutmosis III.' },
    architecturalHighlights: [
      { ar: 'حجرة الدفن البيضاوية على شكل خرطوش ملكي يحوي تابوت الكوارتزيت الوردي النادر', en: 'Cartouche-shaped oval burial chamber holding the red quartzite sarcophagus', fr: 'Chambre funéraire en forme de cartouche ovale avec sarcophage', es: 'Cámara en forma de cartucho real con sarcófago de cuarcita', de: 'Kartuschenförmige ovale Grabkammer mit Quarzitsarkophag' }
    ],
    mustSee: [
      { ar: 'النص الكامل لساعات الليل الـ 12 من كتاب الإيمي دوات المرسومة بالأحمر والأسود', en: 'Complete 12 hours of the Amduat calligraphed across the yellow chamber walls', fr: 'Les 12 heures de l’Amdouat calligraphiées sur les murs ocre', es: 'Las 12 horas del Amduat caligrafiadas en las paredes amarillas', de: 'Die 12 Nachtstunden des Amduat als Wandkalligraphie' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7380, lng: 32.6008 },
    distanceFromCenterKm: 11.5,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م (خاضعة للتناوب الدوري للصيانة)', en: 'Daily 6:00 AM - 5:00 PM (subject to periodic rotation)', fr: '6h00 - 17h00 (en alternance)', es: '6:00 - 17:00 (rotación periódica)', de: '6:00 - 17:00 Uhr (Rotationsöffnung)' },
    ticketPrice: { ar: 'ضمن تذكرة وادي الملوك العامة', en: 'Included in Valley of Kings general ticket', fr: 'Inclus dans le billet général', es: 'Incluida en el boleto general', de: 'Im allgemeinen Ticket enthalten' },
    status: 'open',
    order: 35,
  },
  {
    id: 'tomb_horemheb_kv57',
    name: {
      ar: 'مقبرة حورمحب (KV57)',
      en: 'Tomb of Horemheb (KV57)',
      fr: 'Tombeau d’Horemheb (KV57)',
      es: 'Tumba de Horemheb (KV57)',
      de: 'Grab des Horemheb (KV57)',
    },
    shortDesc: {
      ar: 'تحفة الانتقال الفني بالوادي، تشهد على مراحل رسم ونحت الفنانين الفرعونيين لمشاهد كتاب البوابات غير المكتملة.',
      en: 'The artistic turning point of the Valley; reveals the step-by-step master drafting and carving methods of ancient artists.',
      fr: 'Tournant stylistique de la vallée révélant les étapes de dessin préparatoire et de ciselure des artistes royaux.',
      es: 'Punto de inflexión artístico que muestra el proceso de dibujo y cincelado de los maestros egipcios.',
      de: 'Stilistischer Wendepunkt; zeigt Schritt für Schritt die Zeichen- und Meißeltechnik der Meister.'
    },
    fullHistory: {
      ar: 'اكتشفها ثيودور ديفيس عام 1908. حورمحب كان القائد العام للجيش الذي استعاد استقرار مصر بعد عصر العمارنة وأسس الانتقال للأسرة 19.',
      en: 'Discovered in 1908 by Theodore Davis; Horemheb restored national stability post-Amarna.',
      fr: 'Découvert en 1908 ; Horemheb stabilisa l’Égypte après la crise amarnienne.',
      es: 'Descubierta en 1908; Horemheb restauró el orden tras el periodo de Amarna.',
      de: '1908 entdeckt; Horemheb stellte die Stabilität nach der Amarna-Zeit wieder her.'
    },
    story: {
      ar: 'ترك الفنانون خطوط التصحيح التوجيهية باللون الأحمر والأسود على الجدران، مما يمنح الزائر نظرة فريدة لعبقرية ورش العمل الملكية.',
      en: 'Artists left black and red gridlines and master corrections, offering an intimate window into ancient workshops.',
      fr: 'Les esquisses à l’encre noire et les corrections en rouge dévoilent le génie des artisans de Pharaon.',
      es: 'Los bocetos en tinta y correcciones en rojo muestran el trabajo de los talleres reales.',
      de: 'Die Vorskizzen und Korrekturen in roter Tusche gewähren Einblick in die königlichen Werkstätten.'
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'نهاية الأسرة الثامنة عشرة (1292 ق.م)', en: 'Late 18th Dynasty', fr: 'Fin 18e dynastie', es: 'Final Dinastía XVIII', de: 'Ende 18. Dynastie' },
    pharaoh: { ar: 'الملك حورمحب', en: 'Horemheb', fr: 'Horemheb', es: 'Horemheb', de: 'Horemheb' },
    architecturalHighlights: [
      { ar: 'نقوش بارزة ملونة ناصعة للإلهة حتحور وأوزوريس مع خلفية رمادية زرقاء بديعة', en: 'Vivid polychrome bas-reliefs against sophisticated grey-blue backdrops', fr: 'Bas-reliefs peints sur fond gris-bleu raffiné', es: 'Relieves policromados sobre fondo azul grisáceo', de: 'Polychrome Basreliefs auf elegantem graublauem Grund' }
    ],
    mustSee: [
      { ar: 'الجدران التي تظهر تحول الرسم الأولي إلى نحت بارز غائر تحت ضوء المصباح', en: 'The transition walls showing rough sketch turning into refined raised carving', fr: 'Les parois montrant le passage du dessin au bas-relief achevé', es: 'Muros que muestran la evolución del trazo al relieve pulido', de: 'Wände mit dem Übergang von der Skizze zum fertigen Relief' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7409, lng: 32.6025 },
    distanceFromCenterKm: 11.3,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'ضمن تذكرة وادي الملوك العامة', en: 'Included in Valley of Kings general ticket', fr: 'Inclus dans le billet général', es: 'Incluida en el boleto general', de: 'Im Standard-Ticket enthalten' },
    status: 'open',
    order: 36,
  },
  {
    id: 'tomb_amenhotep_second_kv35',
    name: {
      ar: 'مقبرة أمنحتب الثاني (KV35 - خبيئة المومياوات الملكية)',
      en: 'Tomb of Amenhotep II (KV35 - Royal Cache)',
      fr: 'Tombeau d’Amenhotep II (KV35 - Deuxième Cachette)',
      es: 'Tumba de Amenhotep II (KV35 - Cachette Real)',
      de: 'Grab von Amenophis II. (KV35 - Königliche Cachette)',
    },
    shortDesc: {
      ar: 'مقبرة عميقة ساحرة اشتهرت بأنها كانت الملاذ السري الثاني الذي أنقذ كهنة الأسرة 21 فيه مومياوات أعظم فراعنة مصر.',
      en: 'A deep subterranean sanctuary celebrated as the second royal cachette where priests hid Egypt’s greatest pharaohs.',
      fr: 'Profonde sépulture célèbre pour avoir abrité la seconde cachette de momies royales d’Égypte.',
      es: 'Profunda tumba famosa por ser la segunda cachette donde se ocultaron las momias de los grandes faraones.',
      de: 'Tiefes Felsengrab, berühmt als zweites Versteck der Pharaonenmumien im Neuen Reich.'
    },
    fullHistory: {
      ar: 'اكتشفها فيكتور لوريه عام 1898 وعثر داخل غرفتها الجانبية على مومياوات تحتمس الرابع وأمنحتب الثالث ومرنبتاح وسيتي الثاني ورتساو.',
      en: 'Discovered in 1898 by Victor Loret; sheltered mummies of Thutmose IV, Amenhotep III, Merneptah, and Seti II.',
      fr: 'Découvert en 1898 par Victor Loret abritant les corps momifiés d’illustres souverains.',
      es: 'Descubierta en 1898 con las momias de Tutmosis IV, Amenhotep III y Merenptah.',
      de: '1898 von Victor Loret entdeckt; barg Mumien von Thutmosis IV., Amenophis III. und Merenptah.'
    },
    story: {
      ar: 'سقف حجرة الدفن المطلي بلون أزرق نيلي مرصع بمئات النجوم الذهبية يجسد قبة السماء الليلية الأبدية.',
      en: 'Burial ceiling painted deep midnight indigo and studded with golden stars representing the eternal firmament.',
      fr: 'Plafond indigo nuit parsemé d’étoiles d’or figurant la voûte céleste d’éternité.',
      es: 'Techo azul medianoche salpicado de estrellas doradas que recrea el firmamento eterno.',
      de: 'Mitternachtsblauer Himmel mit goldenen Sternen als Abbild des ewigen Firmaments.'
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (1400 ق.م)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'أمنحتب الثاني', en: 'Amenhotep II', fr: 'Amenhotep II', es: 'Amenhotep II', de: 'Amenophis II.' },
    architecturalHighlights: [
      { ar: 'صالة الأعمدة السداسية ذات السقف النجمي وتابوت الكوارتزيت الوردي المكتمل', en: 'Six-pillared hall under starry ceiling preserving the intact quartzite sarcophagus', fr: 'Salle à six piliers sous plafond étoilé et sarcophage en place', es: 'Sala de seis pilares bajo cielo estrellado y sarcófago original', de: 'Sechssäulensaal unter Sternenhimmel mit Quarzitsarkophag' }
    ],
    mustSee: [
      { ar: 'الرسومات الجدارية الكاملة لكتاب الإيمي دوات بالألوان الترابية الطبيعية', en: 'Complete Amduat manuscript painted across delicate papyrus-colored plaster', fr: 'Manuscrit intégral de l’Amdouat peint sur enduit ocre', es: 'Manuscrito del Amduat pintado en tono pergamino', de: 'Vollständiges Amduat auf papyrusfarbenem Grund' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7395, lng: 32.6010 },
    distanceFromCenterKm: 11.4,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م (وفق جدول الفتح الدوري)', en: 'Daily 6:00 AM - 5:00 PM (rotation schedule)', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'ضمن تذكرة وادي الملوك العامة', en: 'Included in Valley of Kings general ticket', fr: 'Inclus dans le billet général', es: 'Incluida en el boleto general', de: 'Im Standard-Ticket enthalten' },
    status: 'open',
    order: 37,
  },
  {
    id: 'tomb_merneptah_kv8',
    name: {
      ar: 'مقبرة مرنبتاح (KV8)',
      en: 'Tomb of Merneptah (KV8)',
      fr: 'Tombeau de Mérenptah (KV8)',
      es: 'Tumba de Merenptah (KV8)',
      de: 'Grab von Merenptah (KV8)',
    },
    shortDesc: {
      ar: 'مقبرة ابن وخليفة رمسيس الثاني، وتتميز بممراتها الرحبة وتوابيتها الجرانيتية المتداخلة الضخمة.',
      en: 'The burial monument of Ramesses II’s successor, renowned for grand proportions and massive nested granite sarcophagi.',
      fr: 'Tombe monumentale du fils et successeur de Ramsès II, aux proportions amples et sarcophages emboîtés.',
      es: 'Monumento funerario del sucesor de Ramsés II, con pasillos majestuosos y sarcófagos de granito.',
      de: 'Grab des Sohnes und Nachfolgers von Ramses II. mit monumentalen Granitsarkophagen.'
    },
    fullHistory: {
      ar: 'تعد ثاني أضخم مقبرة في وادي الملوك، ونحتت بفتحات وممرات أوسع لاستيعاب التوابيت الصخرية العملاقة الأربعة التي صُنعت لحفظ جثمانه.',
      en: 'Second largest tomb in the Valley; widened corridors engineered to transport four concentric stone sarcophagi.',
      fr: 'Deuxième plus grande tombe de la vallée, conçue pour faire passer quatre sarcophages imbriqués.',
      es: 'Segunda mayor del valle, con corredores ensanchados para trasladar los cuatro sarcófagos.',
      de: 'Zweitgrößtes Königsgrab; breite Gänge für den Transport von vier ineinandergeschachtelten Sarkophagen.'
    },
    story: {
      ar: 'مرنبتاح هو صاحب لوحة النصر الشهيرة (لوحة إسرائيل) المحفوظة في المتحف المصري بالقاهرة.',
      en: 'Merneptah is author of the famous Victory Stele documenting his military campaigns in Canaan and Libya.',
      fr: 'Auteur de la célèbre stèle de la Victoire commémorant ses triomphes sur les Libyens.',
      es: 'Faraón que erigió la célebre Estela de la Victoria.',
      de: 'Errichter der berühmten Siegesstele über seine Feldzüge in Libyen und Kanaan.'
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة التاسعة عشرة (1203 ق.م)', en: '19th Dynasty', fr: '19e dynastie', es: 'Dinastía XIX', de: '19. Dynastie' },
    pharaoh: { ar: 'الملك مرنبتاح', en: 'Merneptah', fr: 'Mérenptah', es: 'Merenptah', de: 'Merenptah' },
    architecturalHighlights: [
      { ar: 'غطاء التابوت الجرانيتي المنحوت بهيئة الإله أوزوريس على شكل الملك المتوفى', en: 'Massive pink granite sarcophagus lid depicting the king as Osiris', fr: 'Couvercle de sarcophage en granit rose sculpté à l’effigie d’Osiris', es: 'Tapa de sarcófago en granito rosa que representa al rey como Osiris', de: 'Granit-Sarkophagdeckel mit Darstellung des Königs als Osiris' }
    ],
    mustSee: [
      { ar: 'نقوش كتاب البوابات وكتاب الكهوف ذات الألوان الصفراء والزرقاء الهادئة', en: 'Book of Gates and Book of Caverns relief friezes in gentle ochre tones', fr: 'Reliefs du Livre des Portes et du Livre des Cavernes', es: 'Relieves del Libro de las Cavernas y de las Puertas', de: 'Reliefs aus dem Pfortenbuch und Höhlenbuch' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7407, lng: 32.6021 },
    distanceFromCenterKm: 11.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'ضمن تذكرة وادي الملوك العامة', en: 'Included in Valley of Kings general ticket', fr: 'Inclus dans le billet général', es: 'Incluida en el boleto general', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 38,
  },
  {
    id: 'tomb_ramesses_ninth_kv6',
    name: {
      ar: 'مقبرة رمسيس التاسع (KV6)',
      en: 'Tomb of Ramesses IX (KV6)',
      fr: 'Tombeau de Ramsès IX (KV6)',
      es: 'Tumba de Ramsés IX (KV6)',
      de: 'Grab von Ramses IX. (KV6)',
    },
    shortDesc: {
      ar: 'واحدة من أكثر مقابر الوادي زيارة، تتميز بممراتها المنحدرة اللطيفة وألوانها البراقة المحفوظة تماماً.',
      en: 'One of the most accessible and visited tombs, renowned for gentle ramps and exceptionally vivid painted walls.',
      fr: 'L’une des tombes les plus visitées, réputée pour sa descente douce et la vivacité de ses peintures.',
      es: 'Una de las tumbas más accesibles, célebre por su rampa suave y pinturas radiantes.',
      de: 'Sehr gut zugängliches Grab mit sanft abfallenden Rampen und leuchtenden Wandgemälden.'
    },
    fullHistory: {
      ar: 'شيدت في أواخر عصر الرعامسة بالأسرة العشرين، وتضم نقوشاً من كتاب الكهوف وكتاب الموتى وصلاة رع وصوراً تمثل رحلة الشمس.',
      en: 'Constructed at the close of the 20th Dynasty; features Book of Caverns, Litany of Re, and solar rebirth journeys.',
      fr: 'Édifiée à la fin du Nouvel Empire ; présente le Livre des Cavernes et la Litanie de Rê.',
      es: 'Erguida a finales de la Dinastía XX con la Letanía de Ra y el Libro de las Cavernas.',
      de: 'Erbaut am Ende der 20. Dynastie mit Sonnenhymnen und Höhlenbuch.'
    },
    story: {
      ar: 'تحتوي جدرانها على كتابات و"غرافيتي" تركه الرحالة الإغريق والرومان في العصور الكلاسيكية تشهد على شهرتها المستمرة منذ القدم.',
      en: 'Bears ancient Greek and Roman graffiti left by classical travelers touring Thebes 2,000 years ago.',
      fr: 'Comporte des graffitis antiques grecs et romains laissés par les premiers voyageurs de l’Antiquité.',
      es: 'Conserva grafitis antiguos de viajeros griegos y romanos de hace dos milenios.',
      de: 'Zeigt antike griechische und römische Besucherinschriften aus klassischer Zeit.'
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة العشرين (1111 ق.م)', en: '20th Dynasty', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'رمسيس التاسع', en: 'Ramesses IX', fr: 'Ramsès IX', es: 'Ramsés IX', de: 'Ramses IX.' },
    architecturalHighlights: [
      { ar: 'السقف الأسود المنقط بالنجوم الصفراء في الممر الأول ومناظر نوت الشمسية في قاعة الدفن', en: 'Black-painted ceiling spangled with yellow stars and celestial Nut iconography', fr: 'Plafond noir constellé d’étoiles d’or et grande fresque de Nout', es: 'Techo negro salpicado de estrellas amarillas y gran figura de Nut', de: 'Schwarze Decke mit gelben Sternen und Himmelsdarstellungen der Nut' }
    ],
    mustSee: [
      { ar: 'مشهد ولادة الشمس وتجدد الكون في غرفة الدفن الرئيسية', en: 'Solar rebirth tableau and divine iconography in the burial chamber', fr: 'Scène du renouveau solaire dans la chambre funéraire', es: 'Fresco del renacimiento solar en la cripta', de: 'Gemälde der Wiedergeburt der Sonne in der Grabkammer' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7404, lng: 32.6019 },
    distanceFromCenterKm: 11.2,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'ضمن تذكرة وادي الملوك العامة', en: 'Included in Valley of Kings general ticket', fr: 'Inclus dans le billet général', es: 'Incluida en el boleto general', de: 'Im Standard-Ticket enthalten' },
    status: 'open',
    order: 39,
  },
  {
    id: 'tomb_ramesses_fourth_kv2',
    name: {
      ar: 'مقبرة رمسيس الرابع (KV2)',
      en: 'Tomb of Ramesses IV (KV2)',
      fr: 'Tombeau de Ramsès IV (KV2)',
      es: 'Tumba de Ramsés IV (KV2)',
      de: 'Grab von Ramses IV. (KV2)',
    },
    shortDesc: {
      ar: 'أول مقبرة تستقبل الزائر عند مدخل الوادي، بممراتها الشاهقة الواسعة وسقف حجرة دفنها الفلكي الأخاذ.',
      en: 'The imposing tomb right at the valley entrance, featuring remarkably wide corridors and a magnificent astronomical ceiling.',
      fr: 'Tombe majestueuse dès l’entrée du val, aux corridors larges et à la splendide voûte céleste.',
      es: 'Primera tumba a la entrada del valle, con amplios corredores y un magnífico techo celeste.',
      de: 'Eindrucksvolles Grab am Taleingang mit breiten Korridoren und prachtvoller astronomischer Decke.'
    },
    fullHistory: {
      ar: 'عثر على مخطط معماري كامل لهذه المقبرة مرسوم على ورق بردي محفوظ بمتحف تورينو الإيطالي، مما يجعلها المقبرة الفرعونية الوحيدة المعروفة بتصميمها الهندسي الأصلي.',
      en: 'Matches the famous Turin Papyrus architectural blueprint—the only ancient Egyptian tomb with its original building plan preserved.',
      fr: 'Correspond au célèbre plan d’architecte sur papyrus conservé au musée de Turin.',
      es: 'Coincide con el plano original dibujado en el famoso Papiro de Turín.',
      de: 'Stimmt mit dem im Turiner Museum aufbewahrten Original-Papyrusbauplan überein.'
    },
    story: {
      ar: 'استخدمها الرهبان الأقباط ككنيسة وملاذ للتأمل في القرنين الخامس والسادس الميلادي وتركوا نقوش صلبان على جدرانها.',
      en: 'Reused as a Christian hermitage and church by Coptic monks who etched crosses upon its walls in the 5th century.',
      fr: 'Réutilisée comme sanctuaire par les moines coptes qui y ont gravé des croix chrétiennes.',
      es: 'Utilizada como eremitorio por monjes coptos que grabaron cruces en sus muros.',
      de: 'Im 5. Jahrhundert von koptischen Mönchen als Einsiedelei und Kirche genutzt.'
    },
    category: 'kings_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة العشرين (1149 ق.م)', en: '20th Dynasty', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'رمسيس الرابع', en: 'Ramesses IV', fr: 'Ramsès IV', es: 'Ramsés IV', de: 'Ramses IV.' },
    architecturalHighlights: [
      { ar: 'التابوت الجرانيتي الضخم البالغ ارتفاعه أكثر من 3 أمتار والمحفور بنصوص كتاب البوابات', en: 'Colossal 3-meter-tall granite sarcophagus carved with Book of Gates texts', fr: 'Sarcophage colossal en granit de plus de 3 mètres de haut', es: 'Colosal sarcófago de granito de más de 3 metros de altura', de: 'Über 3 Meter hoher Granitsarkophag mit Texten des Pfortenbuches' }
    ],
    mustSee: [
      { ar: 'السقف الذهبي لكتاب نوت والسماء في حجرة الدفن', en: 'Golden vaulted ceiling of the Book of Nut in the burial chamber', fr: 'Voûte d’or illustrant le Livre de Nout', es: 'Bóveda dorada con el Libro de Nut', de: 'Goldene Gewölbedecke mit dem Buch der Nut' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7412, lng: 32.6028 },
    distanceFromCenterKm: 11.1,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'ضمن تذكرة وادي الملوك العامة', en: 'Included in Valley of Kings general ticket', fr: 'Inclus dans le billet général', es: 'Incluida en el boleto general', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 40,
  },

  // --- VALLEY OF THE QUEENS ---
  {
    id: 'tomb_nefertari_qv66',
    name: {
      ar: 'مقبرة نفرتاري (QV66 - درة وادي الملكات)',
      en: 'Tomb of Queen Nefertari (QV66)',
      fr: 'Tombeau de Néfertari (QV66)',
      es: 'Tumba de Nefertari (QV66)',
      de: 'Grab der Nefertari (QV66)',
    },
    shortDesc: {
      ar: 'أعظم لوحة فنية جدارية في تاريخ الحضارات الإنسانية، وتلقب بتاج المقابر الفرعونية لجمال ألوانها الخالد.',
      en: 'The supreme pinnacle of ancient painted wall art, widely crowned as the jewel of Egyptian tomb painting.',
      fr: 'Le chef-d’œuvre absolu de la peinture murale de l’Antiquité, joyau incontesté de l’art pharaonique.',
      es: 'La cumbre de la pintura mural egipcia, universalmente reconocida como la joya del Valle de las Reinas.',
      de: 'Der unbestrittene Höhepunkt altägyptischer Malkunst und das strahlendste Juwel im Tal der Königinnen.',
    },
    fullHistory: {
      ar: 'اكتشفها إرنستو سكياباريللي عام 1904. الملكة نفرتاري كانت الزوجة الملكية العظمى المحبوبة لرمسيس الثاني التي نقشت لها المعابد "نفرتاري التي تشرق الشمس لأجلها". خضعت لعملية ترميم تاريخية بمعهد غيتي.',
      en: 'Discovered in 1904 by Ernesto Schiaparelli; Nefertari was the beloved chief queen of Ramesses II ("She for whom the sun shines").',
      fr: 'Découvert en 1904 ; restauré par l’Institut Getty, hommage sublime à l’épouse chérie de Ramsès II.',
      es: 'Descubierta en 1904 y restaurada por el Getty; tributo de Ramsés II a la reina "por quien brilla el sol".',
      de: '1904 von Schiaparelli entdeckt; vom Getty-Institut restauriert, gewidmet der Königin, "für die die Sonne scheint".',
    },
    story: {
      ar: 'تظهر نفرتاري بأردية الكتان الأبيض الشفاف الفاخر، تلاعب المعبودات الشطرنج الفرعوني (السنت) وتقدم القرابين لحتحور وإيزيس.',
      en: 'Portrays Nefertari in pleated semi-sheer white linen playing the sacred board game Senet and communing with Hathor.',
      fr: 'Montre la reine en robe de lin fin plissé jouant au senet et accueillie par les déesses Hathor et Isis.',
      es: 'Muestra a la reina en finísimo lino jugando al senet y recibida por las diosas en la eternidad.',
      de: 'Zeigt Nefertari im plissierten Leinengewand beim Senet-Spiel und vor den Göttinnen Hathor und Isis.'
    },
    category: 'queens_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة التاسعة عشرة (1255 ق.م)', en: '19th Dynasty', fr: '19e dynastie', es: 'Dinastía XIX', de: '19. Dynastie' },
    pharaoh: { ar: 'الملكة نفرتاري (زوجة رمسيس الثاني)', en: 'Queen Nefertari', fr: 'Reine Néfertari', es: 'Reina Nefertari', de: 'Königin Nefertari' },
    architecturalHighlights: [
      { ar: 'الأعمدة الرباعية المزينة بنقوش أوزوريس والماعت ذات الألوان الفيروزية والذهبية التي لا تزال تنبض بالحياة', en: 'Pillars adorned with vibrant turquoise, carnelian, and gold portraits of Osiris and Hathor', fr: 'Piliers ornés de portraits éclatants d’Osiris et d’Hathor aux couleurs d’origine', es: 'Pilares con retratos de Osiris y Hathor en deslumbrante turquesa y oro', de: 'Pfeiler mit leuchtenden Porträts von Osiris und Hathor in Türkis und Gold' }
    ],
    mustSee: [
      { ar: 'مشهد نفرتاري تلعب لعبة السنت في عالم الخلود أمام مقصورتها', en: 'Nefertari playing the sacred game of Senet in her funerary pavilion', fr: 'Néfertari jouant au senet dans son pavillon d’éternité', es: 'Nefertari jugando al senet hacia el más allá', de: 'Nefertari beim Senet-Spiel auf dem Weg in die Unsterblichkeit' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7285, lng: 32.5930 },
    distanceFromCenterKm: 9.8,
    openingHours: { ar: 'يومياً 8:00 ص - 4:00 م (تذكرة خاصة محددة الوقت)', en: 'Daily 8:00 AM - 4:00 PM (timed exclusive entry ticket)', fr: '8h00 - 16h00 (billet exclusif minuté)', es: '8:00 - 16:00 (boleto exclusivo con tiempo limitado)', de: '8:00 - 16:00 Uhr (Exklusivticket mit Zeitfenster)' },
    ticketPrice: { ar: '2,000 ج.م للأجانب / 1,000 ج.م للمصريين (تذكرة خاصة لحماية الألوان)', en: '2,000 EGP Foreigners / 1,000 EGP Egyptians (Special Conservation Ticket)', fr: '2,000 EGP Étrangers / 1,000 EGP Égyptiens', es: '2,000 EGP Extranjeros / 1,000 EGP Egipcios', de: '2,000 EGP Ausländer / 1,000 EGP Ägypter' },
    status: 'open',
    featured: true,
    order: 41,
  },
  {
    id: 'tomb_amun_her_khepeshef_qv55',
    name: {
      ar: 'مقبرة الأمير آمون حر خبشف (QV55)',
      en: 'Tomb of Prince Amun-her-khepeshef (QV55)',
      fr: 'Tombeau d’Amon-her-khepeshef (QV55)',
      es: 'Tumba de Amón-her-jepeshef (QV55)',
      de: 'Grab von Prinz Amun-her-chepeschef (QV55)',
    },
    shortDesc: {
      ar: 'مقبرة الابن الأثير لرمسيس الثالث، وتتميز بمشاهد الملك وهو يقدم ابنه الصغير ذو خصلة الشباب إلى أرباب الخلود.',
      en: 'Tomb of Ramesses III’s favored young prince, famous for touching scenes of the father introducing his child to the gods.',
      fr: 'Tombe du jeune prince chéri de Ramsès III, émouvante par les scènes où le roi présente son fils aux dieux.',
      es: 'Tumba del joven príncipe de Ramsés III, con conmovedoras escenas del faraón guiando a su hijo.',
      de: 'Grab des geliebten Kronprinzen von Ramses III., berühmt für die Szenen der Einführung bei den Göttern.'
    },
    fullHistory: {
      ar: 'اكتشفتها البعثة الإيطالية عام 1903، وتظهر الأمير ممسكاً بمروحة الريش الملكية مرتدياً خصلة الشعر الجانبية الخاصة بأمراء مصر القديمة.',
      en: 'Discovered in 1903; portrays the prince with the royal side-lock of youth carrying a ceremonial feather fan.',
      fr: 'Découvert en 1903 ; le prince y porte la tresse de l’enfance et un éventail de plumes rituelles.',
      es: 'Descubierta en 1903; el príncipe luce la coleta lateral de la infancia y un abanico ceremonial.',
      de: '1903 entdeckt; der Prinz trägt die Jugendlocke und einen heiligen Federfächer.'
    },
    story: {
      ar: 'عثر بداخل المقبرة على جنين محنط كان يعتقد أنه لمولود غير مكتمل لأحد أفراد العائلة الملكية محفوظ في صندوق زجاجي.',
      en: 'Preserved an intriguing glass display case containing an ancient mummified fetus found within the tomb.',
      fr: 'Conserve une vitrine intrigante avec un fœtus momifié découvert dans la sépulture.',
      es: 'Alberga una vitrina con un feto momificado hallado en el sepulcro.',
      de: 'Zeigt eine Vitrine mit einem in der Grabanlage gefundenen mumifizierten Fötus.'
    },
    category: 'queens_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة العشرين (1155 ق.م)', en: '20th Dynasty', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'الأمير آمون حر خبشف ووالده رمسيس الثالث', en: 'Prince Amun-her-khepeshef & Ramesses III', fr: 'Prince Amon-her-khepeshef', es: 'Príncipe Amón-her-jepeshef', de: 'Prinz Amun-her-chepeschef' },
    architecturalHighlights: [
      { ar: 'الألوان اللازوردية الملكية البراقة والنقاء الشديد لرسوم بشرة الأمير الشابة', en: 'Brilliant lapis lazuli blues and tender skin tone pigments', fr: 'Bleus lapis-lazuli vifs et finesse des visages', es: 'Azul lapislázuli intenso y delicadeza en los rostros', de: 'Leuchtendes Lapislazuliblau und zarte Hauttöne' }
    ],
    mustSee: [
      { ar: 'مشهد رمسيس الثالث يمسك بيد ابنه الصغير ويقدمه بحنان للإلهة أنوبيس وحتحور', en: 'Ramesses III gently holding his son’s hand before Anubis and Hathor', fr: 'Ramsès III tenant tendrement la main de son fils devant Anubis', es: 'Ramsés III guiando de la mano a su hijo ante Anubis', de: 'Ramses III. führt seinen Sohn an der Hand vor Anubis und Hathor' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7288, lng: 32.5935 },
    distanceFromCenterKm: 9.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمولة بتذكرة وادي الملكات العامة', en: 'Included in Valley of Queens general ticket', fr: 'Inclus dans le pass général Vallée des Reines', es: 'Incluida en el boleto general del Valle de las Reinas', de: 'Im Tal-der-Königinnen-Ticket enthalten' },
    status: 'open',
    order: 42,
  },
  {
    id: 'tomb_khaemwaset_qv44',
    name: {
      ar: 'مقبرة الأمير خع إم واست (QV44)',
      en: 'Tomb of Prince Khaemwaset (QV44)',
      fr: 'Tombeau de Khaemouaset (QV44)',
      es: 'Tumba de Jaemuaset (QV44)',
      de: 'Grab von Prinz Chaemwaset (QV44)',
    },
    shortDesc: {
      ar: 'مقبرة نجل رمسيس الثالث وكبير كهنة بتاح، وتعد لوحة فنية للألوان الفرعونية المحفوظة بنقائها الطبيعي.',
      en: 'Tomb of Ramesses III’s royal son, celebrated for pristinely conserved mineral pigments depicting sacred deities.',
      fr: 'Sépulture du fils royal de Ramsès III, remarquable par la pureté de ses pigments minéraux.',
      es: 'Sepultura del hijo de Ramsés III, célebre por la frescura de sus colores minerales.',
      de: 'Grab des Königssohnes von Ramses III., berühmt für die Frische der Mineralfarben.'
    },
    fullHistory: {
      ar: 'اكتشفتها البعثة الإيطالية عام 1903 بوادي الملكات. شغل الأمير منصب كاهن سم في منف وتوفي في ريعان شبابه.',
      en: 'Discovered in 1903 by Ernesto Schiaparelli; the prince served as Sem-priest in Memphis.',
      fr: 'Découvert en 1903 ; le prince exerça la haute prêtrise de Sem à Memphis.',
      es: 'Descubierta en 1903; el príncipe ejerció como sacerdote sem en Menfis.',
      de: '1903 entdeckt; der Prinz diente als Sem-Priester in Memphis.'
    },
    story: {
      ar: 'تضم نقوشاً نادرة لرمسيس الثالث يقود ابنه أمام حراس بوابات العالم الآخر الاثني عشر.',
      en: 'Features rare scenes of the pharaoh guiding the prince past the twelve gatekeepers of the netherworld.',
      fr: 'Scènes rares du pharaon introduisant le prince auprès des gardiens des douze portes de l’au-delà.',
      es: 'Escenas del faraón guiando al príncipe ante los doce guardianes del inframundo.',
      de: 'Szenen des Pharaos, der den Prinzen an den zwölf Wächtern der Unterwelt vorbeiführt.'
    },
    category: 'queens_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة العشرين (1150 ق.م)', en: '20th Dynasty', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'الأمير خع إم واست ووالده رمسيس الثالث', en: 'Prince Khaemwaset & Ramesses III', fr: 'Prince Khaemouaset', es: 'Príncipe Jaemuaset', de: 'Prinz Chaemwaset' },
    architecturalHighlights: [
      { ar: 'مشاهد تقديم البخور والقرابين لآلهة التحنيط أنوبيس وتحوت ورع حور آختي', en: 'Incense and offering reliefs to Anubis, Thoth, and Ra-Horakhty', fr: 'Scènes d’offrandes à Anubis, Thot et Rê-Horakhty', es: 'Ofrendas a Anubis, Thot y Ra-Horajti', de: 'Opferszenen für Anubis, Thot und Re-Harachte' }
    ],
    mustSee: [
      { ar: 'الألوان الصفراء والذهبية المشعة التي تغطي جدران الممر الرئيسي', en: 'Luminous yellow-gold mineral washes lining the corridors', fr: 'Éclat doré des parois du couloir d’accès', es: 'Luminosos tonos dorados a lo largo del corredor', de: 'Strahlende Gold- und Gelbtöne im Hauptkorridor' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7282, lng: 32.5932 },
    distanceFromCenterKm: 9.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمولة بتذكرة وادي الملكات العامة', en: 'Included in Valley of Queens general ticket', fr: 'Inclus dans le billet général', es: 'Incluida en el boleto general', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 43,
  },
  {
    id: 'valley_of_queens_royal_princesses',
    name: {
      ar: 'مقابر ملكات وأميرات الأسرة الملكية (وادي الملكات)',
      en: 'Royal Queens & Princesses Necropolis',
      fr: 'Nécropole des Reines et Princesses Royales',
      es: 'Necrópolis de Reinas y Princesas Reales',
      de: 'Nekropole der königlichen Gemahlinnen und Prinzessinnen',
    },
    shortDesc: {
      ar: 'المقاطعة الجنائزية التي عرفت باسم "تا ست نفرو" (مكان الجمال)، وتضم أكثر من 90 مقبرة لأمهات وبنات وزوجات الملوك.',
      en: 'Known anciently as "Ta-Set-Neferu" (The Place of Beauty), containing over 90 tombs of royal daughters and queens.',
      fr: 'Nommé jadis "Ta-Set-Néferou" (La Place de Beauté), abritant plus de 90 sépultures royales féminines.',
      es: 'Conocido como "Ta-Set-Neferu" (El Lugar de la Belleza), con más de 90 sepulcros de reinas y princesas.',
      de: 'Als "Ta-Set-Neferu" (Ort der Schönheit) bekannt, mit über 90 Grabanlagen königlicher Damen.'
    },
    fullHistory: {
      ar: 'يقع في واد منعزل جنوب البر الغربي، وخصص لدفن زوجات وبنات فراعنة الأسرات الثامنة عشرة والتاسعة عشرة والعشرين ومنهن مقبرة الملكة تيتي ومقبرة حنوت تاوي.',
      en: 'Secluded southern wadi established for the burial of royal consorts and princesses of the New Kingdom.',
      fr: 'Vallon méridional dédié aux grandes épouses et princesses royales du Nouvel Empire.',
      es: 'Valle apartado consagrado al reposo de las reinas y princesas del Imperio Nuevo.',
      de: 'Abgeschiedenes Tal für die Bestattung der königlichen Frauen des Neuen Reiches.'
    },
    story: {
      ar: 'كانت الملكات والأميرات يدفن مع كنوز حليهن الذهبية وزجاجات العطور في طريق العبور للاتحاد مع حتحور سيدة الغرب.',
      en: 'Royal women were entombed with golden jewelry and alabaster perfume vessels to unite with Hathor.',
      fr: 'Les souveraines y reposaient avec leurs parures d’or pour s’unir à Hathor, dame de l’Occident.',
      es: 'Eran sepultadas con ricas joyas para fundirse con Hathor, señora de Occidente.',
      de: 'Mit kostbarem Goldschmuck bestattet zur Vereinigung mit Hathor, Herrin des Westens.'
    },
    category: 'queens_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الدولة الحديثة (الأسرات 18-20)', en: 'New Kingdom (18th-20th Dynasties)', fr: 'Nouvel Empire', es: 'Imperio Nuevo', de: 'Neues Reich' },
    pharaoh: { ar: 'ملكات وأميرات الرعامسة والأسرة 18', en: 'Ramesside & 18th Dynasty Queens & Princesses', fr: 'Reines et princesses thébaines', es: 'Reinas y princesas tebanas', de: 'Thebanische Königinnen und Prinzessinnen' },
    architecturalHighlights: [
      { ar: 'الممرات المنحوتة في حجر الوادي الكلسي والغرف الجنائزية المزدانة بتمائم الجعران والحماية', en: 'Rock-cut chambers adorned with protective scarabs and protective amulet spells', fr: 'Chambres rupestres ornées d’amulettes protectrices', es: 'Cámaras rupestres decoradas con amuletos protectores', de: 'Felskammern mit Schutzamuletten und Skarabäen' }
    ],
    mustSee: [
      { ar: 'نقوش مقبرة الملكة تيتي ذات اللوحة الشعرية التي تصفها بـ "سيدة الأرضين"', en: 'Tomb of Queen Titi with poetic cartouches hailing her as "Lady of the Two Lands"', fr: 'Tombe de la reine Titi glorifiée comme "Dame des Deux Terres"', es: 'Tumba de la reina Titi nombrada "Señora de las Dos Tierras"', de: 'Grab der Königin Titi als "Herrin der Beiden Länder"' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7278, lng: 32.5928 },
    distanceFromCenterKm: 9.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة وادي الملكات العامة', en: 'Valley of the Queens General Ticket', fr: 'Billet général Vallée des Reines', es: 'Boleto general Valle de las Reinas', de: 'Tal-der-Königinnen-Ticket' },
    status: 'open',
    order: 44,
  },

  // --- DEIR EL-MEDINA & WORKERS TOMBS ---
  {
    id: 'tomb_sennedjem_tt1',
    name: {
      ar: 'مقبرة سننجم (TT1 - دير المدينة)',
      en: 'Tomb of Sennedjem (TT1 - Deir el-Medina)',
      fr: 'Tombeau de Sennedjem (TT1)',
      es: 'Tumba de Sennedjem (TT1)',
      de: 'Grab des Sennedjem (TT1)',
    },
    shortDesc: {
      ar: 'أجمل مقابر فناني دير المدينة قاطبة، عثر عليها سليمة تماماً بألوان صفراء براقة تصور حقول النعيم الخالدة (إيارو).',
      en: 'The crown jewel of the artisan tombs, discovered completely intact with radiant yellow murals of the Egyptian paradise (Aaru).',
      fr: 'Joyau absolu des tombes d’artisans, découverte intacte avec ses fresques du paradis champêtre (Champs d’Ialou).',
      es: 'La joya indiscutible de las tumbas de artesanos, hallada intacta con frescos radiantes de los Campos de Ialu.',
      de: 'Das Juwel der Arbeitergräber, unversehrt entdeckt mit leuchtenden Bildern der jenseitigen Gefilde (Iaru-Felder).'
    },
    fullHistory: {
      ar: 'اكتشفها ماسبيرو عام 1886. كان سننجم فناناً رئيسياً في "مكان الحق" وشارك في نحت مقابر سيتي الأول ورمسيس الثاني، ثم أبدع مقبرته الخاصة بعناية أسطورية.',
      en: 'Discovered in 1886; Sennedjem was a master craftsman in the Place of Truth working on Seti I and Ramesses II tombs.',
      fr: 'Découvert en 1886 par Maspero ; Sennedjem était maître artisan au service des plus grands pharaons.',
      es: 'Descubierta en 1886; Sennedjem fue maestro artesano de las tumbas de Seti I y Ramsés II.',
      de: '1886 von Maspero entdeckt; Sennedjem war Meisterkünstler an den Königsgräbern.'
    },
    story: {
      ar: 'يظهر سننجم وزوجته إينفرتي يحرثان الأرض ويحصدان القمح العملاق في جنة النعيم المصرية بمشهد من أكثر مشاهد التاريخ الإنساني بهجة وسلاماً.',
      en: 'Depicts Sennedjem and his wife Iineferti plowing and harvesting golden grain in the lush afterlife paradise.',
      fr: 'Montre l’artisan et son épouse labourant et récoltant les épis d’or dans les Champs d’Ialou.',
      es: 'Muestra a Sennedjem y su esposa arando y segando el trigo dorado en el paraíso eterno.',
      de: 'Zeigt Sennedjem und seine Frau beim Pflügen und Ernten auf den himmlischen Feldern.'
    },
    category: 'workers_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة التاسعة عشرة (عهد سيتي الأول ورمسيس الثاني)', en: '19th Dynasty (Seti I - Ramesses II)', fr: '19e dynastie', es: 'Dinastía XIX', de: '19. Dynastie' },
    pharaoh: { ar: 'الفنان سننجم وزوجته إينفرتي', en: 'Master Craftsman Sennedjem & Iineferti', fr: 'Sennedjem et son épouse', es: 'Sennedjem y su esposa', de: 'Meister Sennedjem & Gattin' },
    architecturalHighlights: [
      { ar: 'السقف المقبب المزين بمناظر الآلهة وحقول القمح الذهبية الملونة كأنها رسمت هذا الصباح', en: 'Vaulted ceiling alive with golden agricultural paradise scenes and deities', fr: 'Plafond voûté aux couleurs éclatantes illustrant le paradis agricole', es: 'Techo abovedado con escenas agrícolas del paraíso', de: 'Tonnengewölbe mit leuchtenden Szenen des jenseitigen Paradieses' }
    ],
    mustSee: [
      { ar: 'مشهد قطة هيليوبوليس تذبح ثعبان الظلام آبوفيس تحت شجرة الإيشد المقدسة', en: 'The Great Cat of Heliopolis slaying serpent Apophis beneath the sacred tree', fr: 'Le Grand Chat d’Héliopolis terrassant le serpent Apophis', es: 'El Gran Gato de Heliópolis abatiendo a la serpiente Apofis', de: 'Die Große Katze von Heliopolis erlegt die Schlange Apophis' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7280, lng: 32.6025 },
    distanceFromCenterKm: 8.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمولة بتذكرة دير المدينة الرسمية', en: 'Included in official Deir el-Medina ticket', fr: 'Inclus dans le billet officiel de Deir el-Médina', es: 'Incluida en el boleto oficial de Deir el-Medina', de: 'Im Deir el-Medina Ticket enthalten' },
    status: 'open',
    featured: true,
    order: 45,
  },
  {
    id: 'tomb_inherkhau_tt359',
    name: {
      ar: 'مقبرة إنحركاو (TT359 - دير المدينة)',
      en: 'Tomb of Inherkhau (TT359)',
      fr: 'Tombeau d’Inherkhâou (TT359)',
      es: 'Tumba de Inherjau (TT359)',
      de: 'Grab des Inherchau (TT359)',
    },
    shortDesc: {
      ar: 'مقبرة رئيس عمال مكان الحق في عهد رمسيس الثالث والرابع، وتشتهر بتصوير الأساطير وقطة هيليوبوليس الشهيرة.',
      en: 'Tomb of the foreman of the Place of Truth, famed for extraordinary mythological imagery and vibrant master craftsmanship.',
      fr: 'Sépulture du chef d’équipe de Deir el-Médina, remarquable par ses scènes mythologiques raffinées.',
      es: 'Tumba del capataz del Lugar de la Verdad, con un repertorio mitológico deslumbrante.',
      de: 'Grab des Werkmeisters von Deir el-Medina mit faszinierenden mythologischen Szenen.'
    },
    fullHistory: {
      ar: 'كان إنحركاو رئيس العمال في مقابر وادي الملوك في عهد الأسرة العشرين، واختار نقوشاً دينية شديدة الدقة والرمزية تبرز عمق الفكر الطيبي.',
      en: 'Foreman of royal craftsmen during the 20th Dynasty; commissioned intricate theological vignettes.',
      fr: 'Contremaître royal sous la 20e dynastie ; conçut un programme iconographique sophistiqué.',
      es: 'Jefe de artesanos reales en la Dinastía XX, plasmó un repertorio místico profundo.',
      de: 'Oberaufseher der königlichen Bauleute der 20. Dynastie mit komplexen theologischen Bildprogrammen.'
    },
    story: {
      ar: 'تتميز بمشهد قط رع المقدس وهو يقطع رأس ثعبان الظلام ويحمي شجرة الحياة الأبدية.',
      en: 'Features the world-famous vignette of the divine Cat of Re decapitating the chaos serpent Apophis.',
      fr: 'Célèbre vignette du Chat divin tranchant la tête du serpent du chaos sous l’arbre sacré.',
      es: 'Célebre escena del Gato solar decapitando a la serpiente del caos.',
      de: 'Berühmte Darstellung der Sonnenkatze im Kampf gegen die Schlange des Chaos.'
    },
    category: 'workers_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة العشرين (عهد رمسيس الثالث والرابع)', en: '20th Dynasty', fr: '20e dynastie', es: 'Dinastía XX', de: '20. Dynastie' },
    pharaoh: { ar: 'رئيس العمال إنحركاو', en: 'Foreman Inherkhau', fr: 'Inherkhâou', es: 'Inherjau', de: 'Werkmeister Inherchau' },
    architecturalHighlights: [
      { ar: 'السقف المزين بلفائف حلزونية وزهور اللوتس ونصوص أدبية دينية عميقة', en: 'Vaulted ceiling decorated with spiral scrolls, lotus rosettes, and lyrical hymns', fr: 'Plafond voûté aux motifs de spirales, rosettes de lotus et hymnes sacrés', es: 'Techo decorado con espirales, rosetas de loto e himnos', de: 'Gewölbedecke mit Spiralmustern, Lotusblüten und Hymnentexten' }
    ],
    mustSee: [
      { ar: 'عازف القيثارة وهو يعزف ترنيمة العازف لإنحركاو وزوجته', en: 'The blind harper singing the Harper’s Song before Inherkhau and his wife', fr: 'Le joueur de harpe chantant devant Inherkhâou et son épouse', es: 'El arpista entonando el Cántico del Arpista ante el matrimonio', de: 'Der Harfenspieler trägt das Harfnerlied vor dem Ehepaar vor' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7282, lng: 32.6023 },
    distanceFromCenterKm: 8.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمولة بتذكرة دير المدينة', en: 'Included in Deir el-Medina ticket', fr: 'Inclus dans le billet Deir el-Médina', es: 'Incluida en boleto Deir el-Medina', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 46,
  },
  {
    id: 'tomb_pashedu_tt3',
    name: {
      ar: 'مقبرة باشيدو (TT3 - دير المدينة)',
      en: 'Tomb of Pashedu (TT3)',
      fr: 'Tombeau de Pachedou (TT3)',
      es: 'Tumba de Pashedu (TT3)',
      de: 'Grab des Pashedu (TT3)',
    },
    shortDesc: {
      ar: 'تشتهر بأروع أيقونة فوتوغرافية في العالم الفرعوني: باشيدو يركع في خشوع يرتشف ماء النيل تحت شجرة النخيل.',
      en: 'Famed for one of the most poignant icons in ancient art: Pashedu kneeling to drink sacred water beneath a palm tree.',
      fr: 'Célèbre pour l’émouvante fresque de Pachedou agenouillé s’abreuvant à l’eau sacrée sous un palmier.',
      es: 'Famosa por el icono conmovedor de Pashedu arrodillado bebiendo agua sagrada bajo una palmera.',
      de: 'Berühmt für das weltbekannte Bild des knienden Pashedu, der unter einer Palme heiliges Wasser trinkt.'
    },
    fullHistory: {
      ar: 'كان باشيدو نقاشاً وفناناً ملكياً بالبر الغربي في عهد سيتي الأول ورمسيس الثاني. وتقع مقبرته في موقع مرتفع يطل على قرية دير المدينة.',
      en: 'Pashedu was a master stonemason and artisan under Seti I and Ramesses II.',
      fr: 'Artisan et tailleur de pierre réputé sous Séthi Ier et Ramsès II.',
      es: 'Maestro cantero y artista real en tiempos de Seti I y Ramsés II.',
      de: 'Steinmetzmeister und königlicher Künstler unter Sethos I. und Ramses II.'
    },
    story: {
      ar: 'مشهد ارتشاف الماء تحت النخلة يجسد الفصل 62 من كتاب الموتى: "أن يرتشف المرء الماء الحي في العالم الآخر ولا تحترق روحه".',
      en: 'Illustrates Spell 62 of the Book of the Dead: drinking cool life-giving water in the afterlife realm.',
      fr: 'Illustre la formule 62 du Livre des Morts pour s’abreuver d’eau vive dans l’au-delà.',
      es: 'Ilustra el capítulo 62 del Libro de los Muertos para beber agua fresca en el más allá.',
      de: 'Illustriert Spruch 62 des Totenbuches: Trinken von kühlem Wasser im Totenreich.'
    },
    category: 'workers_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة التاسعة عشرة (1275 ق.م)', en: '19th Dynasty', fr: '19e dynastie', es: 'Dinastía XIX', de: '19. Dynastie' },
    pharaoh: { ar: 'الفنان باشيدو', en: 'Artisan Pashedu', fr: 'Pachedou', es: 'Pashedu', de: 'Künstler Pashedu' },
    architecturalHighlights: [
      { ar: 'درج حجري ضيق شديد الانحدار يهبط إلى قاعة مقببة صغيرة زاهية الألوان الصفراء الدافئة', en: 'Steep narrow stair descending into a radiant vaulted golden-yellow crypt', fr: 'Escalier raide menant à une crypte voûtée lumineuse', es: 'Empinada escalera que baja a una cripta abovedada en tonos dorados', de: 'Steile Treppe hinab zu einer strahlend goldgelben Gewölbekammer' }
    ],
    mustSee: [
      { ar: 'جدارية باشيدو يركع بجلبابه الأبيض ويرتشف ماء الجدول العذب تحت نخلة الدوم المثمرة', en: 'The iconic painting of Pashedu drinking sweet water beneath a date palm', fr: 'La fresque légendaire de Pachedou buvant sous le palmier', es: 'La célebre pintura de Pashedu bebiendo bajo la palmera', de: 'Das weltberühmte Bild des knienden Pashedu unter der Dattelpalme' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7279, lng: 32.6022 },
    distanceFromCenterKm: 8.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة خاصة تابعة لموقع دير المدينة', en: 'Special ticket at Deir el-Medina', fr: 'Billet spécial à Deir el-Médina', es: 'Boleto especial en Deir el-Medina', de: 'Zusatzticket in Deir el-Medina' },
    status: 'open',
    order: 47,
  },
  {
    id: 'tomb_kha_tt8',
    name: {
      ar: 'مقبرة خع وميريت (TT8 - دير المدينة)',
      en: 'Tomb of Kha and Merit (TT8)',
      fr: 'Tombeau de Khâ et Mérit (TT8)',
      es: 'Tumba de Ja y Merit (TT8)',
      de: 'Grab von Cha und Merit (TT8)',
    },
    shortDesc: {
      ar: 'مقبرة المعماري الملكي خع وزوجته ميريت، أعظم كنز أثاث وأدوات حياة يومية فرعونية عثر عليه سليماً خارج مقبرة توت عنخ آمون.',
      en: 'Tomb of the royal architect and his wife, source of the greatest intact collection of ancient domestic life and luxury furnishings.',
      fr: 'Sépulture de l’architecte royal et son épouse, plus grande collection intacte de mobilier et d’intimité pharaonique.',
      es: 'Tumba del arquitecto real y su esposa, el ajuar doméstico intacto más suntuoso fuera de Tutankamón.',
      de: 'Grab des königlichen Architekten und seiner Frau mit dem reichsten unberührten Hausrat der Pharaonenzeit.'
    },
    fullHistory: {
      ar: 'اكتشفها إرنستو سكياباريللي عام 1906 سليمة لم تمس قط، وتعرض كنوزها اليوم كاملة في جناح خاص بمتحف تورينو المصري في إيطاليا.',
      en: 'Discovered untouched in 1906 by Ernesto Schiaparelli; its complete treasure forms the jewel of the Turin Egyptian Museum.',
      fr: 'Découvert intact en 1906 ; son trésor complet fait la fierté du musée égyptologique de Turin.',
      es: 'Hallada intacta en 1906; su fabuloso ajuar se exhibe íntegro en el Museo Egipcio de Turín.',
      de: '1906 von Schiaparelli unberührt entdeckt; heute Prunkstück des Ägyptischen Museums Turin.'
    },
    story: {
      ar: 'ضمت المقبرة ملابس الكتان الناعمة، وأدوات التجميل، وصناديق الحلي، وأقدم ميزان فرنسي للذهب، وخبزاً وفاكهة مجففة بقيت لـ 3400 عام.',
      en: 'Contained linen garments, cosmetics, jewelry boxes, measuring cubit rods, and preserved bread and fruit.',
      fr: 'Contenait vêtements de lin fin, boîtes à fards, coudée d’architecte et offrandes alimentaires intactes.',
      es: 'Conservaba túnicas de lino, cosméticos, vara de medir del arquitecto y panes milenarios.',
      de: 'Erhielt feine Leinengewänder, Schminkkästchen, die Architekten-Elle und 3.400 Jahre altes Brot.'
    },
    category: 'workers_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (عهد أمنحتب الثاني وتحتمس الرابع وأمنحتب الثالث)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'المعماري خع وزوجته ميريت', en: 'Architect Kha & Merit', fr: 'Khâ et Mérit', es: 'Ja y Merit', de: 'Architekt Cha & Merit' },
    architecturalHighlights: [
      { ar: 'المصلى الجنائزي الخارجي ذو الهرم الصغير من الطوب اللبن فوق الجرف الصخري', en: 'Exterior chapel surmounted by a miniature mudbrick pyramid over the cliff', fr: 'Chapelle funéraire surmontée d’un pyramidion en brique crue', es: 'Capilla funeraria coronada por un piramidión de adobe', de: 'Grabkapelle gekrönt von einer kleinen Lehmziegelpyramide' }
    ],
    mustSee: [
      { ar: 'الموقع المعماري المحفور في الوادي والبانوراما المطلة على قرية العمال القديمة', en: 'Rock-cut setting overlooking the streets and homes of Deir el-Medina village', fr: 'Vue panoramique sur les ruelles du village antique de Deir el-Médina', es: 'Panorámica sobre las calles del poblado de artesanos', de: 'Blick über die Gassen des antiken Arbeiterdorfes' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7275, lng: 32.6018 },
    distanceFromCenterKm: 8.9,
    openingHours: { ar: 'متاح للزيارة ضمن موقع دير المدينة الأثري', en: 'Accessible in Deir el-Medina archaeological zone', fr: 'Accessible sur le site de Deir el-Médina', es: 'Accesible en el sitio de Deir el-Medina', de: 'Im Deir el-Medina Areal zugänglich' },
    ticketPrice: { ar: 'مشمول بتذكرة موقع دير المدينة', en: 'Included in Deir el-Medina ticket', fr: 'Inclus dans le billet de Deir el-Médina', es: 'Incluido en el boleto de Deir el-Medina', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 48,
  },
  {
    id: 'deir_el_medina_artisans_village',
    name: {
      ar: 'قرية العمال وفناني طيبة (دير المدينة)',
      en: 'Artisans Village of Deir el-Medina',
      fr: 'Village des Artisans de Deir el-Médina',
      es: 'Poblado de Artesanos de Deir el-Medina',
      de: 'Arbeiterdorf von Deir el-Medina',
    },
    shortDesc: {
      ar: 'أقدم تجمع سكني عمالي مخطط في التاريخ، موطن النحاتين والنقاشين والكتبة الذين شيدوا مقابر ملوك وملكات مصر.',
      en: 'The world’s oldest planned working-class community, home to the stonecutters, painters, and scribes of the pharaohs.',
      fr: 'La plus ancienne communauté d’artisans planifiée au monde, foyer des créateurs des tombes royales.',
      es: 'La comunidad obrera planificada más antigua del mundo, hogar de los artífices de las tumbas reales.',
      de: 'Die älteste planmäßig erbaute Handwerkersiedlung der Weltgeschichte, Heimat der Erbauer der Königsgräber.'
    },
    fullHistory: {
      ar: 'تأسست في عهد تحتمس الأول واستمرت لخمسة قرون حتى نهاية الأسرة العشرين. تضم أكثر من 70 منزلاً مبنياً بالطوب اللبن وشوارع متناسقة وبئراً عظيمة حُفرت في الصخر.',
      en: 'Thrived for five centuries with over 70 stone and mudbrick homes, streets, and a monumental rock-cut well.',
      fr: 'Prospéra durant cinq siècles avec plus de 70 maisons, ruelles pavées et le grand puits d’eau.',
      es: 'Floreció durante cinco siglos con más de 70 viviendas, calles y un pozo colosal en roca.',
      de: 'Bestand fünf Jahrhunderte mit über 70 Häusern, Gassen und dem monumentalen Tiefbrunnen.'
    },
    story: {
      ar: 'شهدت أول إضراب عمالي موثق في التاريخ البشري في عهد رمسيس الثالث عندما تأخرت أجور العمال من القمح والزيت.',
      en: 'Site of the first recorded labor strike in human history under Ramesses III over delayed grain and oil rations.',
      fr: 'Théâtre de la première grève ouvrière de l’Histoire sous Ramsès III pour réclamer leurs rations.',
      es: 'Escenario de la primera huelga laboral registrada de la historia bajo Ramsés III.',
      de: 'Schauplatz des ersten dokumentierten Streiks der Weltgeschichte unter Ramses III.'
    },
    category: 'workers_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الدولة الحديثة (1550 - 1077 ق.م)', en: 'New Kingdom (1550 - 1077 BC)', fr: 'Nouvel Empire', es: 'Imperio Nuevo', de: 'Neues Reich' },
    pharaoh: { ar: 'تحتمس الأول ورمسيس الثاني ورمسيس الثالث', en: 'Thutmose I, Ramesses II, Ramesses III', fr: 'Thoutmôsis Ier, Ramsès II et III', es: 'Tutmosis I, Ramsés II y III', de: 'Thutmosis I., Ramses II. & III.' },
    architecturalHighlights: [
      { ar: 'الجدران الحجرية المتناسقة للمنازل القديمة التي تكشف غرف النوم وقاعات الاستقبال والمطابخ والسراديب', en: 'Stone foundations revealing ancient bedrooms, reception divans, cellars, and kitchens', fr: 'Fondations montrant pièces de réception, chambres et caves familiales', es: 'Cimientos que muestran salas de estar, alcobas y cocinas antiguas', de: 'Fundamente mit Wohnräumen, Schlafnischen, Kellern und Küchen' }
    ],
    mustSee: [
      { ar: 'البئر العظيم العميق في أقصى شمال القرية الذي كان يزود مجتمع الفنانين بالمياه', en: 'The Great Pit (Grand Puits) that served as village cistern and treasure trove of thousands of ostraca', fr: 'Le Grand Puits ayant livré des milliers d’ostraca de la vie quotidienne', es: 'El Gran Pozo del que se rescataron miles de óstraca con cartas privadas', de: 'Der Große Brunnen, Fundort tausender Ostraka über das Alltagsleben' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7285, lng: 32.6030 },
    distanceFromCenterKm: 8.8,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مجمع دير المدينة العامة', en: 'Deir el-Medina General Ticket', fr: 'Billet général Deir el-Médina', es: 'Boleto general Deir el-Medina', de: 'Deir el-Medina Gesamtticket' },
    status: 'open',
    featured: true,
    order: 49,
  },

  // --- TOMBS OF THE NOBLES ---
  {
    id: 'tomb_rekhmire_tt100',
    name: {
      ar: 'مقبرة رخ مي رع (TT100 - شيخ عبد القرنة)',
      en: 'Tomb of Rekhmire (TT100)',
      fr: 'Tombeau de Rekhmirê (TT100)',
      es: 'Tumba de Rejmira (TT100)',
      de: 'Grab des Rechmire (TT100)',
    },
    shortDesc: {
      ar: 'مقبرة الوزير الأعظم في عهد تحتمس الثالث وأمنحتب الثاني، وتعد أهم وثيقة قانونية وإدارية وفنية في مصر القديمة.',
      en: 'Tomb of the Grand Vizier of Thutmose III, preserving the legendary Duties of the Vizier legal code and international tribute.',
      fr: 'Sépulture du grand vizir de Thoutmôsis III, conservant le code de justice et les tributs des nations étrangères.',
      es: 'Tumba del Gran Visir de Tutmosis III, que conserva los Deberes del Visir y tributos de pueblos extranjeros.',
      de: 'Grab des Großwesirs von Thutmosis III. mit dem berühmten Gesetzestext über die Amtspflichten des Wesirs.'
    },
    fullHistory: {
      ar: 'كان رخ مي رع عمدة طيبة ووزير العدل الأعلى. صُممت مقبرته على هيئة حرف T مقلوب مع ممر عميق يرتفع سقفه تدريجياً نحو الداخل وصولاً لأكثر من 8 أمتار.',
      en: 'Rekhmire presided over justice and civil administration; tomb ceiling soars over 8 meters high.',
      fr: 'Vizir de justice et gouverneur de Thèbes ; plafond ascendant atteignant plus de 8 mètres de hauteur.',
      es: 'Visir de justicia y gobernador de Tebas; techo en pendiente que alcanza más de 8 metros.',
      de: 'Wesir und Statthalter von Theben; Raumhöhe steigt nach innen auf über 8 Meter an.'
    },
    story: {
      ar: 'توثق الجداريات وفود شعوب العالم المعروفة حينها (الكريتيون، السوريون، النوبيون، والليبيون) يقدمون الهدايا لملك مصر.',
      en: 'Depicts foreign delegations (Minoans/Keftiu, Syrians, Nubians) presenting exotic giraffes, elephants, and gold.',
      fr: 'Montre les ambassadeurs de Crète, Syrie et Nubie apportant girafes, éléphants et vases d’or en tribut.',
      es: 'Muestra a cretenses, sirios y nubios ofrendando jirafas, monos y suntuosos vasos dorados.',
      de: 'Zeigt Gesandtschaften aus Kreta, Syrien und Nubien mit Giraffen, Elefanten und Goldvasen.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (1450 ق.م)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'الوزير رخ مي رع (تحتمس الثالث وأمنحتب الثاني)', en: 'Vizier Rekhmire', fr: 'Vizir Rekhmirê', es: 'Visir Rejmira', de: 'Wesir Rechmire' },
    architecturalHighlights: [
      { ar: 'الممر الصاعد الباسق بارتفاع 8 أمتار وجداريات توثيق ورش نحت التماثيل وصهر البرونز وتصنيع الطوب', en: 'Soaring 8m corridor depicting metal casting, stone masonry, and brickmaking workshops', fr: 'Corridor haut de 8 mètres illustrant les ateliers de métallurgie et de briqueterie', es: 'Pasillo de 8 m de altura con talleres de fundición de bronce y albañilería', de: '8 m hohe Galerie mit Werkstattszenen von Bronzegießern und Maurern' }
    ],
    mustSee: [
      { ar: 'نقوش موكب شعوب البحر المتوسط والجزيرة الكريتية يحملون الأواني الخزفية المينوية', en: 'Procession of Aegean Minoan envoys in patterned kilts carrying ornate rhytons', fr: 'Délégation minoenne en pagnes brodés portant des rhytons précieux', es: 'Emisarios minoicos portando vasijas de cerámica cretense', de: 'Minoische Gesandte in gemusterten Schurzen mit kostbaren Gefäßen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7312, lng: 32.6072 },
    distanceFromCenterKm: 8.4,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مقابر شيخ عبد القرنة (تذكرة ثنائية)', en: 'Sheikh Abd el-Qurna ticket (grouped with Sennefer)', fr: 'Billet Cheikh Abd el-Gournah', es: 'Boleto Sheij Abd el-Qurna', de: 'Ticket Scheich Abd el-Qurna' },
    status: 'open',
    featured: true,
    order: 50,
  },
  {
    id: 'tomb_menna_tt69',
    name: {
      ar: 'مقبرة مننا (TT69 - كاتب حقول الملك)',
      en: 'Tomb of Menna (TT69)',
      fr: 'Tombeau de Menna (TT69)',
      es: 'Tumba de Menna (TT69)',
      de: 'Grab des Menna (TT69)',
    },
    shortDesc: {
      ar: 'أبهى وأدق مقابر النبلاء بالبر الغربي، وتشتهر بمشاهد صيد الطيور والأسماك في أحراش البردي وتوثيق الزراعة المصرية.',
      en: 'One of the best preserved noble tombs, famed for vibrant marshland fowling, spearfishing, and agricultural scenes.',
      fr: 'L’une des plus gracieuses tombes de nobles, célèbre pour ses scènes de chasse au marais et de pêche au harpon.',
      es: 'Una de las más primorosas tumbas de nobles, célebre por la caza de aves en los papiros y la pesca.',
      de: 'Eines der besterhaltenen Beamtengräber, berühmt für Szenen der Vogeljagd und des Harpunierens im Schilf.'
    },
    fullHistory: {
      ar: 'كان مننا المشرف على حقول ملك مصر ومسّاح الأراضي في عهد تحتمس الرابع وأمنحتب الثالث، وتكشف مقبرته الحياة الريفية والزراعية بأعلى مستويات الإبداع اللوني.',
      en: 'Menna was Scribe of the Fields and estate surveyor under Thutmose IV and Amenhotep III.',
      fr: 'Menna était scribe des champs royaux et arpenteur sous Thoutmôsis IV et Amenhotep III.',
      es: 'Menna fue escriba de los campos del señor de las Dos Tierras bajo Tutmosis IV.',
      de: 'Menna war Aufseher der königlichen Ländereien und Landvermesser unter Thutmosis IV.'
    },
    story: {
      ar: 'تعرضت بعض وجوه مننا في المقبرة لكشط متعمد في العصور القديمة بفعل خصوم حسدوه على مكانته، لكن براعة المشاهد الطبيعية بقيت محفوظة تماماً.',
      en: 'Some depictions of Menna were ritually erased by ancient rivals, yet the glorious natural wildlife paintings survived intact.',
      fr: 'Certains visages de Menna furent grattés par jalousie antique, mais les fresques de faune sont intactes.',
      es: 'Algunos rostros sufrieron damnatio memoriae en la antigüedad, mas las escenas de naturaleza perduran intactas.',
      de: 'Einige Porträts wurden in der Antike von Rivalen beschädigt, die Naturdarstellungen blieben vollkommen erhalten.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (1400 ق.م)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'الكاتب مننا (تحتمس الرابع وأمنحتب الثالث)', en: 'Scribe Menna', fr: 'Scribe Menna', es: 'Escriba Menna', de: 'Schreiber Menna' },
    architecturalHighlights: [
      { ar: 'جداريات صيد الأسماك بالرمح المزدوج وصيد الطيور بعصا الرماية بين زهور اللوتس والفراشات الملونة', en: 'Masterpiece spearfishing and bird-fowling frieze amid fluttering butterflies and blooming lotus', fr: 'Fresque magistrale de chasse aux oiseaux et pêche au harpon parmi les papyrus et papillons', es: 'Magistral escena de pesca y caza de aves entre mariposas y flores de loto', de: 'Meisterhafte Jagd- und Fischfangszenen inmitten von Faltern und Lotusblüten' }
    ],
    mustSee: [
      { ar: 'مشهد محاكمة الروح ووزن قلب مننا في ميزان العدالة أمام أوزوريس', en: 'Weighing of the heart judgment before Osiris painted with jewel-like precision', fr: 'Scène de la pesée du cœur peinte avec une précision d’orfèvre', es: 'Juicio del alma y pesado del corazón con exquisito detalle', de: 'Wägung des Herzens vor Osiris in meisterhafter Miniaturmalerei' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7315, lng: 32.6078 },
    distanceFromCenterKm: 8.3,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مقابر شيخ عبد القرنة (مشتركة مع مقبرة نخت)', en: 'Sheikh Abd el-Qurna ticket (paired with Nakht)', fr: 'Billet combiné avec la tombe de Nakht', es: 'Boleto combinado con la tumba de Najt', de: 'Kombi-Ticket mit Grab des Nacht' },
    status: 'open',
    featured: true,
    order: 51,
  },
  {
    id: 'tomb_nakht_tt52',
    name: {
      ar: 'مقبرة نخت (TT52 - شيخ عبد القرنة)',
      en: 'Tomb of Nakht (TT52)',
      fr: 'Tombeau de Nakht (TT52)',
      es: 'Tumba de Najt (TT52)',
      de: 'Grab des Nacht (TT52)',
    },
    shortDesc: {
      ar: 'تشتهر بأشهر فرقة موسيقية نسائية في التاريخ القديم: عازفات القيثارة والعود والناي الفرعونيات.',
      en: 'Famous for the celebrated trio of female musicians playing the harp, lute, and double flute at a banquet.',
      fr: 'Célèbre pour le gracieux trio de musiciennes jouant de la harpe, du luth et de la double flûte.',
      es: 'Famosa por el célebre trío de músicas tañendo el arpa, el laúd y la doble flauta.',
      de: 'Berühmt für das weltbekannte Trio von Musikerinnen mit Harfe, Laute und Doppelflöte.'
    },
    fullHistory: {
      ar: 'كان نخت فلكياً وكاهناً ومسؤولاً في معبد آمون في عهد تحتمس الرابع. مقبرته صغيرة الحجم ولكنها من أروع مقابر الفن التشكيلي المصري بدقة تفاصيلها وبهاء ألوانها.',
      en: 'Nakht was an astronomer-priest of Amun under Thutmose IV; small in scale but an artistic gem of joyful banquets.',
      fr: 'Prêtre et astronome d’Amon ; sépulture intime célèbre pour ses scènes de banquet et de vendange.',
      es: 'Astrónomo y sacerdote de Amón; joya artística célebre por sus banquetes y música.',
      de: 'Astronom und Priester des Amun; klein, aber ein Meisterwerk heiterer Feststimmung.'
    },
    story: {
      ar: 'تعكس الجداريات روح البهجة والاحتفال في طيبة القديمة، من عصير العنب في معاصر النبيذ إلى شواء البط وتقديم الزهور العطرة.',
      en: 'Captures the convivial joy of ancient Thebes, from grape-stomping in wine presses to fragrant banquet bouquets.',
      fr: 'Capte la joie de vivre thébaine, du pressurage du raisin aux banquets parfumés de fleurs de lotus.',
      es: 'Refleja el deleite de la vida tebana, desde la vendimia hasta las guirnaldas aromáticas.',
      de: 'Fängt die Lebensfreude Thebens ein, von der Weinlese bis zu duftenden Lotusblumen.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (عهد تحتمس الرابع)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'الكاهن نخت وزوجته تاوي', en: 'Astronomer Nakht & Tawy', fr: 'Nakht et Taouy', es: 'Najt y Tauy', de: 'Priester Nacht & Tawy' },
    architecturalHighlights: [
      { ar: 'الجدارية الأيقونية للفتيات الثلاث العازفات في مأدبة طيبية مع الضيوف يستمعون في نشوة', en: 'The iconic banquet trio of female musicians dressed in pleated linen and floral garlands', fr: 'Le trio légendaire des musiciennes en robes de lin blanc plissé', es: 'El trío de músicas con túnicas de lino y coronas de flores', de: 'Das weltberühmte Trio der Musikerinnen mit zarten Leinengewändern' }
    ],
    mustSee: [
      { ar: 'مشهد قطف العناقيد في كرم العنب ودهس العنب بالأقدام لإنتاج نبيذ طيبة الفاخر', en: 'Grape harvest and foot-stomping in the wine vat under arched trellises', fr: 'Scène de vendange et de foulage du raisin dans le pressoir', es: 'La vendimia y el prensado de uva en el lagar', de: 'Die Weinernte und das Keltern der Trauben im Tretbecken' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7314, lng: 32.6075 },
    distanceFromCenterKm: 8.3,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مقابر شيخ عبد القرنة (مشتركة مع مننا)', en: 'Sheikh Abd el-Qurna ticket (paired with Menna)', fr: 'Billet combiné avec Menna', es: 'Boleto combinado con Menna', de: 'Kombi-Ticket mit Grab des Menna' },
    status: 'open',
    order: 52,
  },
  {
    id: 'tomb_ramose_tt55',
    name: {
      ar: 'مقبرة رعموزا (TT55 - شيخ عبد القرنة)',
      en: 'Tomb of Ramose (TT55)',
      fr: 'Tombeau de Ramose (TT55)',
      es: 'Tumba de Ramose (TT55)',
      de: 'Grab des Ramose (TT55)',
    },
    shortDesc: {
      ar: 'تحفة النحت البارز النقي على الحجر الجيري الأبيض، والشاهد التاريخي النادر على التحول الديني من عبادة آمون إلى عبادة أتون.',
      en: 'A sublime showcase of crisp white limestone relief carving, bridging classical Theban art and Akhenaten’s Amarna heresy.',
      fr: 'Chef-d’œuvre absolu de bas-reliefs sur calcaire blanc, témoignant de la transition vers la révolution amarnienne.',
      es: 'Obra cumbre del relieve en caliza blanca que plasma la transición hacia la revolución religiosa de Akenatón.',
      de: 'Gipfelwerk vollendeter Kalkstein-Flachreliefs; historisches Zeugnis des Übergangs zur Amarna-Kunst Echnatons.'
    },
    fullHistory: {
      ar: 'كان رعموزا وزيراً لمصر العليا في عهد أمنحتب الثالث وبداية عهد أخناتون (أمنحتب الرابع). تضم المقبرة بهو أعمدة مهيب يشبه المعابد الكبرى.',
      en: 'Ramose was Vizier of Upper Egypt during the reign of Amenhotep III and early Akhenaten.',
      fr: 'Grand vizir sous Amenhotep III et au début du règne d’Akhénaton.',
      es: 'Visir del Alto Egipto bajo Amenhotep III y los primeros años de Akenatón.',
      de: 'Wesir von Oberägypten unter Amenophis III. und dem jungen Echnaton.'
    },
    story: {
      ar: 'يظهر في جداريتها الشرقية الفن الطيبي الكلاسيكي الرقيق بوجوه عيون اللوز وشعر مستعار مثالي، بينما تظهر الجدارية الغربية أخناتون وأشعة قرص الشمس أتون بالأسلوب الآتوني الثوري.',
      en: 'Classic elegant Theban carving on one wall juxtaposed with revolutionary Amarna-style Sun-disk rays on the other.',
      fr: 'Harmonie classique thébaine d’un côté et style révolutionnaire amarnien au disque solaire de l’autre.',
      es: 'El clasicismo tebano convive en sus muros con los primeros rayos del disco solar de Atón.',
      de: 'Klassische thebanische Meisterschaft auf der einen Wand, revolutionäre Amarna-Sonnenstrahlen auf der anderen.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'نهاية الأسرة 18 (عهد أمنحتب الثالث وأخناتون)', en: 'Late 18th Dynasty', fr: 'Fin 18e dynastie', es: 'Final Dinastía XVIII', de: 'Ende 18. Dynastie' },
    pharaoh: { ar: 'الوزير رعموزا', en: 'Vizier Ramose', fr: 'Vizir Ramose', es: 'Visir Ramose', de: 'Wesir Ramose' },
    architecturalHighlights: [
      { ar: 'بهو الأعمدة الأربعيني الفخم ذو التيجان البابيرية ونقوش الوجوه الملكية ذات الملامح الأرستقراطية شديدة الرقة', en: 'Vast hypostyle hall with 32 columns and bas-relief portraits of unparalleled delicacy', fr: 'Vaste salle hypostyle aux bas-reliefs d’une grâce et d’une pureté aristocratique inégalées', es: 'Amplia sala hipóstila con retratos esculpidos de pureza aristocrática insuperable', de: 'Monumentale Säulenhalle mit Porträts von unübertroffener aristokratischer Feinheit' }
    ],
    mustSee: [
      { ar: 'مشهد الندابات المحترفات يرفعن أذرعهن في حزن جنائزي شجي في موكب الدفن', en: 'Famous frieze of mourning women wailing with uplifted arms during the funeral procession', fr: 'Frise célèbre des pleureuses professionnelles éplorées levant les bras au ciel', es: 'El célebre friso de las plañideras levantando los brazos en duelo', de: 'Der berühmte Fries der Klageweiber mit erhobenen Armen im Trauerzug' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7310, lng: 32.6080 },
    distanceFromCenterKm: 8.4,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مقابر شيخ عبد القرنة (مجموعة رعموزا وأوسرحات وخعرويف)', en: 'Sheikh Abd el-Qurna ticket group (Ramose, Userhat, Kheruef)', fr: 'Billet groupé Cheikh Abd el-Gournah', es: 'Boleto agrupado Sheij Abd el-Qurna', de: 'Gruppenticket Scheich Abd el-Qurna' },
    status: 'open',
    featured: true,
    order: 53,
  },
  {
    id: 'tomb_sennefer_tt96',
    name: {
      ar: 'مقبرة سنوفر (TT96 - مقبرة الكروم)',
      en: 'Tomb of Sennefer (TT96 - Tomb of the Vineyards)',
      fr: 'Tombeau de Sennefer (TT96 - Tombe des Vignes)',
      es: 'Tumba de Sennefer (TT96 - Tumba de las Viñas)',
      de: 'Grab des Sennefer (TT96 - Grab der Weinreben)',
    },
    shortDesc: {
      ar: 'تلقب بـ "مقبرة الكروم"، حيث يغطي سقفها الصخري المموج عناقيد عنب متدلية كأن الزائر يقف تحت معرش كرمة حقيقي.',
      en: 'Known as the "Tomb of the Vineyards", its undulating bedrock ceiling is painted as a dense canopy of ripe hanging grape clusters.',
      fr: 'Surnommée "Tombe des Vignes", son plafond ondulé reproduit une tonnelle luxuriante de grappes de raisin.',
      es: 'Apodada "Tumba de las Viñas", su techo ondulado recrea una parra frondosa de uvas maduras.',
      de: 'Bekannt als "Grab der Weinreben"; die unebene Felsdecke ist als dichtes Dach herabhängender Weintrauben bemalt.'
    },
    fullHistory: {
      ar: 'كان سنوفر عمدة مدينة طيبة "المدينة الجنوبية" في عصر أمنحتب الثاني، واستغل التموجات الطبيعية في سقف الصخر ليجعل منها تعريشة عنب أسطورية.',
      en: 'Sennefer was Mayor of Thebes under Amenhotep II; utilized uneven rock to simulate an authentic leafy vineyard trellis.',
      fr: 'Maire de la Ville du Sud (Thèbes) sous Amenhotep II ; transforma la roche brute en tonnelle champêtre.',
      es: 'Alcalde de Tebas bajo Amenhotep II; aprovechó las ondas de la roca para simular una parra.',
      de: 'Bürgermeister von Theben unter Amenophis II.; nutzte den welligen Fels für die Illusion einer Weinlaube.'
    },
    story: {
      ar: 'يظهر سنوفر وزوجته مريت يرتديان قلادة الذهب الملكية التي أهداها لهما الفرعون تقديراً لإخلاصهما في إدارة العاصمة.',
      en: 'Portrays Sennefer and his wife Meryt wearing golden shebyu collars awarded by the Pharaoh for royal devotion.',
      fr: 'Montre Sennefer et son épouse Mérit parés du collier d’or de la vaillance décerné par le pharaon.',
      es: 'Muestra a Sennefer y su esposa luciendo el collar de oro del valor concedido por el rey.',
      de: 'Zeigt Sennefer und Gattin Meryt mit dem goldenen Ehrengold des Pharaos für treue Dienste.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (1420 ق.م)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'عمدة طيبة سنوفر', en: 'Mayor Sennefer', fr: 'Sennefer', es: 'Sennefer', de: 'Bürgermeister Sennefer' },
    architecturalHighlights: [
      { ar: 'السقف الجبلي المتموج المطلي بعناقيد العنب الخضراء والسوداء التي تغطي كامل سقف غرفة الدفن', en: 'Spectacular undulating ceiling completely smothered in painted grape leaves and dark purple bunches', fr: 'Plafond bosselé spectaculaire entièrement recouvert de grappes de raisin pourpres et vertes', es: 'Espectacular techo ondulado cubierto de racimos de uvas moradas y verdes', de: 'Spektakuläre wellige Felsdecke, vollkommen bedeckt von gemalten Weintrauben' }
    ],
    mustSee: [
      { ar: 'مشهد التطهير الطقسي لسنوفر وزوجته مريت بالماء المقدس والزهور', en: 'Purification rituals of Sennefer and Meryt with sacred libations and lotuses', fr: 'Rituels de purification de Sennefer et Mérit avec offrandes de lotus', es: 'Ritual de purificación del matrimonio con libaciones sagradas', de: 'Reinigungsrituale von Sennefer und Meryt mit heiligen Libationen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7311, lng: 32.6070 },
    distanceFromCenterKm: 8.4,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مقابر شيخ عبد القرنة (مشتركة مع رخ مي رع)', en: 'Sheikh Abd el-Qurna ticket (paired with Rekhmire)', fr: 'Billet couplé avec Rekhmirê', es: 'Boleto combinado con Rejmira', de: 'Kombi-Ticket mit Rechmire' },
    status: 'open',
    featured: true,
    order: 54,
  },
  {
    id: 'tomb_kheruef_tt192',
    name: {
      ar: 'مقبرة خعرويف (TT192 - العساسيف)',
      en: 'Tomb of Kheruef (TT192 - Asasif)',
      fr: 'Tombeau de Kherouef (TT192)',
      es: 'Tumba de Jeruef (TT192)',
      de: 'Grab des Cheruef (TT192)',
    },
    shortDesc: {
      ar: 'أضخم مقابر العساسيف قاطبة، موطن نقوش أعياد اليوبيل الثلاثيني لأمنحتب الثالث ورقصات الفتيات الرشيقات.',
      en: 'The largest private tomb complex in the Asasif necropolis, documenting the Sed Jubilees of Amenhotep III and sacred dances.',
      fr: 'La plus vaste tombe privée de l’Assasif, immortalisant les fêtes jubilaires d’Amenhotep III et les danses sacrées.',
      es: 'La tumba privada más extensa del Asasif, que inmortaliza los jubileos de Amenhotep III y danzas sagradas.',
      de: 'Die größte Privatgrabanlage im Asasif mit Darstellungen der Sed-Feste Amenophis III. und ritueller Tänze.'
    },
    fullHistory: {
      ar: 'كان خعرويف المشرف على القصر الملكي ومدير شؤون الملكة العظيمة تي، ويعد فناء مقبرته الواسع صرحاً معمارياً يضاهي المعابد.',
      en: 'Kheruef was royal steward to Queen Tiye; the immense courtyard features temple-scale colonnades.',
      fr: 'Grand intendant de la reine Tiyi ; sa vaste cour hypostyle rivalise avec l’architecture des temples.',
      es: 'Administrador mayor de la reina Tiy; su inmenso patio columnado rivaliza con los templos.',
      de: 'Hofmeister von Königin Teje; der riesige Säulenhof gleicht einem monumentalen Tempelbau.'
    },
    story: {
      ar: 'تحتوي نقوشه على مشاهد نادرة لطقس إقامة عمود "الجد" (رمز الاستقرار والخلود للأوزوريس) بمشاركة الملك والملكة.',
      en: 'Features celebrated reliefs of the ritual raising of the Djed pillar of stability by the Pharaoh and Queen Tiye.',
      fr: 'Reliefs célèbres de l’érection du pilier Djed de stabilité présidée par le pharaon et la reine Tiyi.',
      es: 'Célebres relieves del levantamiento del pilar Dyed de la estabilidad por el faraón y la reina.',
      de: 'Berühmte Reliefs der Aufrichtung des Djed-Pfeilers durch Pharao und Königin Teje.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (عهد أمنحتب الثالث)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'المشرف خعرويف والملكة تي', en: 'Steward Kheruef & Queen Tiye', fr: 'Kherouef et la reine Tiyi', es: 'Jeruef y la reina Tiy', de: 'Cheruef & Königin Teje' },
    architecturalHighlights: [
      { ar: 'الفناء الخارجي الصرحي بأعمدته البابيرية والنقوش المنحوتة بنعومة فائقة تعبر عن قمة فن عصر العمارنة المبكر', en: 'Monumental colonnaded peristyle court with ultra-fine bas-reliefs of royal dancers', fr: 'Cour péristyle monumentale aux bas-reliefs raffinés de danseuses rituelles', es: 'Patio peristilo con relieves exquisitos de danzarinas sagradas', de: 'Monumentaler Säulenhof mit feinsten Flachreliefs von Tänzerinnen' }
    ],
    mustSee: [
      { ar: 'مشهد الفتيات الراقصات يتمايلن في رقصة الأكروبات الطقسية في عيد السد الملكي', en: 'The acrobatic female dancers performing during the Sed Jubilee celebrations', fr: 'Les danseuses acrobatiques virevoltant lors des célébrations jubilaires', es: 'Las bailarinas acrobáticas actuando en las fiestas del jubileo', de: 'Die rituellen Tänzerinnen bei den Jubiläumsfeierlichkeiten des Königs' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7330, lng: 32.6100 },
    distanceFromCenterKm: 8.6,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمولة بتذكرة مقابر العساسيف وشيخ عبد القرنة', en: 'Included in Asasif / Nobles ticket group', fr: 'Inclus dans le billet nécropole de l’Assasif', es: 'Incluida en el boleto de la necrópolis de Asasif', de: 'Im Asasif-Ticket enthalten' },
    status: 'open',
    order: 55,
  },
  {
    id: 'tomb_userhat_tt56',
    name: {
      ar: 'مقبرة أوسرحات (TT56 - شيخ عبد القرنة)',
      en: 'Tomb of Userhat (TT56)',
      fr: 'Tombeau d’Ouserhat (TT56)',
      es: 'Tumba de Userhat (TT56)',
      de: 'Grab des Userhat (TT56)',
    },
    shortDesc: {
      ar: 'مقبرة كاتب ملكي متميز في عهد أمنحتب الثاني، تشتهر بمشاهد صيد الغزلان في الصحراء وقص شعر المجندين.',
      en: 'Tomb of a royal scribe under Amenhotep II, celebrated for dynamic desert gazelle chariot hunts and the barbering of military recruits.',
      fr: 'Sépulture d’un scribe royal sous Amenhotep II, célèbre pour la chasse aux gazelles en char et la tonte des soldats.',
      es: 'Tumba de escriba real célebre por la caza de gacelas en carro de guerra y el afeitado de soldados.',
      de: 'Grab eines königlichen Schreibers mit Jagdszenen auf Wüstengazellen und Rasur von Rekruten.'
    },
    fullHistory: {
      ar: 'شغل أوسرحات منصب "كاتب جذاذة الخبز" ومربي أبناء الملك، وتضم مقبرته مشاهد اجتماعية غير تقليدية تعكس الحياة العسكرية والمدنية.',
      en: 'Userhat was Royal Scribe and royal child tutor; features rare scenes of everyday military life.',
      fr: 'Scribe royal et précepteur des princes ; scènes rares de la vie civile et militaire.',
      es: 'Escriba real y tutor de los infantes; muestra escenas inéditas de vida militar.',
      de: 'Königlicher Schreiber und Prinzenerzieher; zeigt seltene Szenen des Militäralltags.'
    },
    story: {
      ar: 'مشهد الحلاق وهو يقص شعر المجندين الشبان الجالسين تحت شجرة الجميز يعد من أندر المشاهد الإنسانية في الفن العالمي القديم.',
      en: 'The barbershop scene showing recruits seated under a tree getting haircuts is an ancient genre masterpiece.',
      fr: 'La scène pittoresque du barbier tondant les jeunes recrues sous un sycomore est un trésor d’humanité.',
      es: 'La escena del barbero cortando el pelo a reclutas bajo un sicomoro es un cuadro costumbrista único.',
      de: 'Die Friseurszene mit jungen Rekruten unter einem Feigenbaum ist ein antikes Genremeisterwerk.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (عهد أمنحتب الثاني)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'الكاتب الملكي أوسرحات', en: 'Royal Scribe Userhat', fr: 'Ouserhat', es: 'Userhat', de: 'Schreiber Userhat' },
    architecturalHighlights: [
      { ar: 'مشهد مطاردة الغزلان والأرانب والنعام بالعربة الحربية في الصحراء بحركة ديناميكية مذهلة', en: 'Dynamic chariot hunt charging across desert dunes pursuing gazelles, hares, and ostriches', fr: 'Chasse impétueuse en char à travers le désert poursuivant gazelles et autruches', es: 'Dinámica cacería en carro persiguiendo gacelas y avestruces en las dunas', de: 'Dynamische Wagenjagd auf Gazellen, Hasen und Strauße in den Wüstendünen' }
    ],
    mustSee: [
      { ar: 'مشهد الحلاق وهو يقص شعر الجنود الشبان وهم ينتظرون دورهم تحت ظل الشجرة', en: 'The ancient military barber styling hair under the shade of a sycamore tree', fr: 'Le barbier militaire coiffant les soldats à l’ombre de l’arbre', es: 'El barbero militar afeitando a los soldados a la sombra del árbol', de: 'Der Heeresfriseur bei der Rasur der Rekruten im Baumschatten' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7312, lng: 32.6073 },
    distanceFromCenterKm: 8.4,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمولة بتذكرة مقابر شيخ عبد القرنة', en: 'Included in Sheikh Abd el-Qurna ticket group', fr: 'Inclus dans le pass Cheikh Abd el-Gournah', es: 'Incluida en el boleto de Sheij Abd el-Qurna', de: 'Im Scheich Abd el-Qurna Ticket enthalten' },
    status: 'open',
    order: 56,
  },
  {
    id: 'tomb_nebamun_tt90',
    name: {
      ar: 'مقبرة نب آمون (TT90 ومقصورة جداريات المتحف البريطاني)',
      en: 'Tomb of Nebamun (TT90 & British Museum Masterpieces)',
      fr: 'Tombeau de Nébamoun (TT90)',
      es: 'Tumba de Nebamón (TT90)',
      de: 'Grab des Nebamun (TT90)',
    },
    shortDesc: {
      ar: 'صاحب أشهر لوحات تصوير الطيور وصيد المستنقعات في تاريخ الفن، والتي عثر عليها في القرنة وتزين قاعة كبرى بالمتحف البريطاني.',
      en: 'Creator of the most iconic ancient paintings of Egyptian marsh fowling and banqueting, now legendary worldwide.',
      fr: 'Auteur des peintures les plus célèbres de chasse au marais et de banquets musicaux d’Égypte.',
      es: 'Hogar de los frescos más universales de caza de marismas y banquetes faraónicos.',
      de: 'Schöpfer der berühmtesten altägyptischen Sumpfvogel- und Festgemälde der Kunstgeschichte.'
    },
    fullHistory: {
      ar: 'كان نب آمون كاتباً ومحاسباً لحبوب آمون بالكرنك في عهد أمنحتب الثالث. استخرجت أروع جداريات مقبرته بالقرنة في القرن 19 واعتبرت أعظم نماذج فن التصوير الإنساني القديم.',
      en: 'Nebamun was grain accountant at Karnak under Amenhotep III; tomb murals discovered in Qurna in the 1820s.',
      fr: 'Scribe comptable des grains d’Amon à Karnak ; ses fresques sont considérées comme l’apogée de la peinture antique.',
      es: 'Escriba y contable del grano de Amón; sus frescos representan la cúspide de la pintura egipcia.',
      de: 'Kornschreiber des Amun in Karnak; seine Grabfresken gelten als Höhepunkt antiker Malerei.'
    },
    story: {
      ar: 'تتميز جدارية صيد الطيور بتفاصيل مذهلة لريش البط المتطاير والقط الصياد الذي يقفز بين أعواد البردي ممسكاً بثلاثة طيور في آن واحد.',
      en: 'The fowling scene depicts Nebamun’s hunting cat leaping through papyrus clumps catching three birds at once.',
      fr: 'La scène de chasse montre le chat familier bondissant parmi les papyrus saisissant trois oiseaux simultanément.',
      es: 'La escena de caza muestra al gato saltando entre los papiros atrapando tres aves a la vez.',
      de: 'Die Jagdszene zeigt die Hauskatze im Schilf, wie sie drei Vögel gleichzeitig fängt.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (1350 ق.م)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'الكاتب نب آمون', en: 'Scribe Nebamun', fr: 'Nébamoun', es: 'Nebamón', de: 'Schreiber Nebamun' },
    architecturalHighlights: [
      { ar: 'الألوان الغنية المشبعة لبركة الأسماك المحاطة بأشجار النخيل والجميز بزهور اللوتس الطافية', en: 'The famous garden pool fresco filled with tilapia fish and floating lotus surrounded by fruit trees', fr: 'Le célèbre bassin de jardin aux poissons tilapias et nénuphars entouré de sycomores', es: 'El célebre estanque con peces tilapia y flores de loto entre árboles frutales', de: 'Der berühmte Gartenteich mit Tilapia-Fischen und schwimmenden Lotusblumen' }
    ],
    mustSee: [
      { ar: 'مشهد عازفات القيثارة والراقصات الصغيرات المتمايلات في مأدبة نب آمون', en: 'Musicians and twin young dancers performing at the lavish ancestral feast', fr: 'Musiciennes et jeunes danseuses ondulant lors du banquet funéraire', es: 'Músicas y bailarinas gemelas en el suntuoso banquete', de: 'Musikerinnen und junge Tänzerinnen beim Ahnenfest' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7320, lng: 32.6085 },
    distanceFromCenterKm: 8.4,
    openingHours: { ar: 'الموقع بالقرنة يخضع لأعمال صيانة أثرية وبحثية دورية', en: 'Qurna site under research; key frescoes featured globally', fr: 'Site de Gournah sous étude archéologique', es: 'Sitio de Qurna bajo investigación arqueológica', de: 'Stätte in Qurna unter wissenschaftlicher Betreuung' },
    ticketPrice: { ar: 'يرجى مراجعة تفتيش آثار القرنة', en: 'Inquire at Qurna Antiquities Inspectorate', fr: 'Inspectorat de Gournah', es: 'Inspección de Qurna', de: 'Beim Inspektorat Qurna erfragen' },
    status: 'open',
    order: 57,
  },
  {
    id: 'tomb_amenhotep_rebouya',
    name: {
      ar: 'مقبرة أمنحتب الملقب برابويا',
      en: 'Tomb of Amenhotep (Rebouya)',
      fr: 'Tombeau d’Amenhotep dit Rebouya',
      es: 'Tumba de Amenhotep apodado Rebouya',
      de: 'Grab des Amenophis gen. Rebouya',
    },
    shortDesc: {
      ar: 'مقبرة نبيل وطبيب وكاهن ملكي بارز بالقرنة، تمتاز بنقوش تقديم القرابين والطقوس الطبية والجنائزية النادرة.',
      en: 'Tomb of a high-ranking noble and royal physician at Qurna, noted for rare medical and ritual offering vignettes.',
      fr: 'Sépulture d’un éminent médecin et dignitaire royal à Gournah, aux reliefs rituels et médicaux singuliers.',
      es: 'Tumba de un distinguido médico real en Qurna, notable por sus escenas rituales.',
      de: 'Grab eines angesehenen königlichen Arztes in Qurna mit seltenen Ritual- und Opferszenen.'
    },
    fullHistory: {
      ar: 'أمنحتب رابويا كان خادماً مقرباً للبلاط الملكي في عهد الأسرة الثامنة عشرة، وكشفت أعمال الحفائر عن مقصورته الصخرية المنقوشة بدقة وجمال.',
      en: 'Court official and physician in the mid-18th Dynasty; preserves detailed domestic and religious records.',
      fr: 'Dignitaire de la 18e dynastie ; conserve de précieux témoignages de dévotion royale.',
      es: 'Funcionario cortesano de la Dinastía XVIII con bellos registros religiosos.',
      de: 'Höfischer Beamter der 18. Dynastie mit feinen Zeugnissen religiöser Frömmigkeit.'
    },
    story: {
      ar: 'تعكس النقوش اهتمام النبلاء بتخليد أسرهم وأعمالهم الطبية كأطباء وحكماء خدموا الفرعون بأمانة.',
      en: 'Commemorates the role of ancient healers and physician-scribes serving the Pharaoh and community.',
      fr: 'Célèbre la mémoire des médecins et sages serviteurs du pharaon.',
      es: 'Conmemora la labor de los médicos y sabios servidores del faraón.',
      de: 'Erinnert an das Wirken der heilkundigen Gelehrten im Dienste des Pharaos.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'النبيل أمنحتب رابويا', en: 'Noble Amenhotep Rebouya', fr: 'Amenhotep Rebouya', es: 'Amenhotep Rebouya', de: 'Amenophis Rebouya' },
    architecturalHighlights: [
      { ar: 'النقوش الصخرية الغائرة التي تسجل أدعية الخلود وقوائم الزيوت والبخور السبعة المقدسة', en: 'Inscribed rock-cut niches detailing the seven sacred canonical oils and funerary litanies', fr: 'Niches rupestres répertoriant les sept huiles sacrées canoniques', es: 'Hornacinas que detallan los siete aceites sagrados', de: 'Inschriftennischen mit den sieben heiligen Salbölen' }
    ],
    mustSee: [
      { ar: 'مشهد مأدبة العائلة وتقديم زهور البردي واللوتس لأرواح الأجداد', en: 'Family banquet and presentation of papyrus and lotus blossoms to ancestors', fr: 'Banquet familial et offrandes de lotus aux ancêtres', es: 'Banquete familiar y ofrendas de loto a los antepasados', de: 'Familienfest und Lotusopfer für die Vorfahren' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7318, lng: 32.6074 },
    distanceFromCenterKm: 8.4,
    openingHours: { ar: 'متاح للزيارة ضمن مقابر القرنة بتنسيق مفتشي الآثار', en: 'Visit coordinated via Qurna Antiquities inspectors', fr: 'Visite organisée avec l’inspectorat de Gournah', es: 'Visita coordinada con la inspección de Qurna', de: 'Besichtigung nach Rücksprache mit dem Antikendienst' },
    ticketPrice: { ar: 'تذكرة تفتيش القرنة', en: 'Qurna sector ticket', fr: 'Billet secteur Gournah', es: 'Boleto sector Qurna', de: 'Qurna-Sektorticket' },
    status: 'open',
    order: 58,
  },
  {
    id: 'tomb_samut_kyky',
    name: {
      ar: 'مقبرة ساموت (الملقب بكيكي - TT44)',
      en: 'Tomb of Samut Kyky (TT44)',
      fr: 'Tombeau de Samout Kyky (TT44)',
      es: 'Tumba de Samut Kyky (TT44)',
      de: 'Grab des Samut Kyky (TT44)',
    },
    shortDesc: {
      ar: 'مقبرة بديعة تميزت بنص أدبي ذاتي نادر يعلن فيه ساموت تخليه عن جميع أملاكه الأرضية ليهبها للإلهة موت حاميته الوحيدة.',
      en: 'Famed for a profoundly touching personal autobiographical hymn dedicating all his worldly possessions to goddess Mut.',
      fr: 'Célèbre pour son hymne autobiographique bouleversant où Samout lègue tous ses biens à la déesse Mout.',
      es: 'Célebre por el conmovedor himno autobiográfico donde dona todos sus bienes a la diosa Mut.',
      de: 'Berühmt für einen bewegenden autobiographischen Hymnus, in dem Samut seinen Besitz der Göttin Mut stiftet.'
    },
    fullHistory: {
      ar: 'كان ساموت كاتب مائدة القرابين لآمون في عهد رمسيس الثاني بالأسرة 19. تقع مقبرته عند سفح جبل القرنة وتضم ألواناً زاهية ونصوصاً شخصية شديدة الإنسانية.',
      en: 'Samut was Scribe of the Offering Table under Ramesses II; his tomb reveals deep personal piety.',
      fr: 'Scribe de la table d’offrandes sous Ramsès II ; témoin unique de la piété personnelle au Nouvel Empire.',
      es: 'Escriba de la mesa de ofrendas bajo Ramsés II; testimonio único de devoción personal.',
      de: 'Schreiber des Opfertisches unter Ramses II.; einzigartiges Zeugnis persönlicher Frömmigkeit.'
    },
    story: {
      ar: 'نقش ساموت على جدرانه: "وجدت موت كحامٍ لي، لا رئيس لي سواها، هي التي تعطي من لا يملك أهلاً"، كأول وثيقة إنسانية في التقوى الفردية.',
      en: 'Inscribed: "I found Mut to be a protector... she is a mother to the motherless", an ancient milestone of individual faith.',
      fr: 'Inscrit sur la pierre : "J’ai trouvé Mout comme protectrice, elle est une mère pour l’orphelin".',
      es: 'Grabó en la roca: "Hallé en Mut mi protectora, ella es madre para quien no tiene madre".',
      de: 'Ließ einmeißeln: "Ich fand in Mut meine Beschützerin, sie ist eine Mutter den Mutterlosen".'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة التاسعة عشرة (عهد رمسيس الثاني)', en: '19th Dynasty', fr: '19e dynastie', es: 'Dinastía XIX', de: '19. Dynastie' },
    pharaoh: { ar: 'الكاتب ساموت كيكي', en: 'Scribe Samut Kyky', fr: 'Samout Kyky', es: 'Samut Kyky', de: 'Schreiber Samut Kyky' },
    architecturalHighlights: [
      { ar: 'نقوش تماثيل الآلهة والأنشودة المكتوبة بالهيروغليفية الأدبية الكاملة الموجهة للإلهة موت', en: 'Literary autobiographical hymn inscribed in crisp hieroglyphs addressed to Mut', fr: 'Hymne littéraire complet gravé en hiéroglyphes parfaits à la gloire de Mout', es: 'Himno literario completo tallado en jeroglíficos a la gloria de Mut', de: 'Vollständiger literarischer Hymnus in makellosen Hieroglyphen an Göttin Mut' }
    ],
    mustSee: [
      { ar: 'المناظر الجدارية لساموت وزوجته تاحات يتعبدان لأرباب طيبة', en: 'Paintings of Samut and his wife Ta-hat adoring the Theban pantheon', fr: 'Peintures de Samout et son épouse adorant les dieux thébains', es: 'Pinturas de Samut y su esposa en adoración de los dioses tebanos', de: 'Wandbilder von Samut und Gattin Ta-hat bei der Anbetung der thebanischen Götter' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7308, lng: 32.6065 },
    distanceFromCenterKm: 8.5,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'مشمولة بتذكرة مقابر القرنة', en: 'Included in Qurna sector ticket', fr: 'Inclus dans le billet secteur Gournah', es: 'Incluida en el boleto de Qurna', de: 'Im Ticket enthalten' },
    status: 'open',
    order: 59,
  },

  // --- GENERAL NECROPOLISES ---
  {
    id: 'asasif_necropolis',
    name: {
      ar: 'مقابر العساسيف',
      en: 'Asasif Necropolis',
      fr: 'Nécropole de l’Assasif',
      es: 'Necrópolis de Asasif',
      de: 'Nekropole von Asasif',
    },
    shortDesc: {
      ar: 'جبانة النبلاء والكهنة الكبرى الواقعة في الوادي المؤدي لمعبد الدير البحري، وتشتهر بخبيئة العساسيف لـ 30 تابوتاً خشبياً ملوناً.',
      en: 'The grand valley necropolis leading to Deir el-Bahari, famed for monumental Late Period tombs and the 30-coffin Asasif Cachette.',
      fr: 'Grande nécropole menant à Deir el-Bahari, célèbre pour ses tombes monumentales et la cachette des 30 sarcophages peints.',
      es: 'Vasta necrópolis que conduce a Deir el-Bahari, famosa por sus tumbas colosales y el hallazgo de 30 sarcófagos intactos.',
      de: 'Große Gräberebene auf dem Weg nach Deir el-Bahari, berühmt für monumentale Gräber und den Fund von 30 bemalten Särgen.'
    },
    fullHistory: {
      ar: 'تضم مقابر هائلة الحجم من الأسرات 18 و25 و26 مثل مقابر باباس وباباسا وششنق. شهدت في أكتوبر 2019 اكتشاف خبيئة العساسيف المكتملة بألوانها الزاهية كأنها صُنعت اليوم.',
      en: 'Contains palatial subterranean tombs of the 25th-26th Dynasties; in 2019, Egypt revealed the intact Asasif Cache of 30 sealed coffins.',
      fr: 'Abrite de gigantesques sépultures de la 26e dynastie ; découverte retentissante en 2019 de 30 sarcophages scellés.',
      es: 'Alberga sepulcros palaciegos; en 2019 se halló la impresionante cachette de 30 sarcófagos sellados.',
      de: 'Beherbergt palastartige Grabanlagen; 2019 wurde hier das Versteck mit 30 unversehrten Särgen geborgen.'
    },
    story: {
      ar: 'كانت مقابرها الجنائزية قصوراً مقدسة تحت الأرض، حفرت لخدمة كهنة وكاهنات آمون رع وعابدي الإلهة العظيمة.',
      en: 'Subterranean palaces excavated deep into bedrock to serve the Theban high priests and Divine Adoratrices.',
      fr: 'Palais souterrains creusés au cœur de la roche au service des divines adoratrices d’Amon.',
      es: 'Palacios subterráneos excavados en la roca para las Divinas Adoratrices de Amón.',
      de: 'Unterirdische Paläste im Fels für die Gottesgemahlinnen und Priester des Amun.'
    },
    category: 'other_necropolis',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة 18 حتى العصر الصاوي (الأسرة 26)', en: '18th to 26th Dynasties', fr: '18e à 26e dynasties', es: 'Dinastías XVIII a XXVI', de: '18. bis 26. Dynastie' },
    pharaoh: { ar: 'نبلاء وكهنة آمون في الدولة الحديثة والعصر المتأخر', en: 'Theban High Priests & Nobles', fr: 'Grands prêtres et nobles thébains', es: 'Sumos sacerdotes y nobles tebanos', de: 'Thebanische Hohepriester & Adelige' },
    architecturalHighlights: [
      { ar: 'الأفنية الحجرية الهائلة المنحوتة في الصخر بعمق يتجاوز 15 متراً والصروح الجنائزية الضخمة', en: 'Vast monumental sunken courtyards carved 15 meters into limestone bedrock', fr: 'Immenses cours péristyles excavées à 15 mètres de profondeur', es: 'Patios monumentales excavados a 15 metros en la roca caliza', de: 'Monumentale, 15 Meter tief in den Fels gehauene Höfe' }
    ],
    mustSee: [
      { ar: 'موقع كشف خبيئة العساسيف والمقابر الصاوية المنحوتة بنقوش كتاب الموتى المتكاملة', en: 'Site of the 2019 Asasif Cache discovery and Saite period hieroglyphic halls', fr: 'Lieu de découverte de la cachette des 30 sarcophages de 2019', es: 'Lugar del descubrimiento de la cachette de sarcófagos de 2019', de: 'Fundort des Sarkophag-Verstecks von 2019' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7340, lng: 32.6110 },
    distanceFromCenterKm: 8.7,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة مجمع مقابر العساسيف', en: 'Asasif Necropolis Ticket', fr: 'Billet nécropole de l’Assasif', es: 'Boleto necrópolis de Asasif', de: 'Asasif-Ticket' },
    status: 'open',
    order: 60,
  },
  {
    id: 'el_khokha_necropolis',
    name: {
      ar: 'مقابر الخوخة',
      en: 'El-Khokha Necropolis',
      fr: 'Nécropole d’El-Khokha',
      es: 'Necrópolis de El-Joja',
      de: 'Nekropole von El-Chocha',
    },
    shortDesc: {
      ar: 'تل أثري عريق يقع بين العساسيف وشيخ عبد القرنة، يضم أكثر من خمس مقابر من الدولة القديمة وعشرات المقابر للأسرة 18.',
      en: 'Ancient burial knoll situated between Asasif and Qurna, home to Old Kingdom rock tombs and pivotal 18th Dynasty officials.',
      fr: 'Colline funéraire antique entre l’Assasif et Gournah, abritant des tombes de l’Ancien Empire et du Nouvel Empire.',
      es: 'Colina funeraria entre Asasif y Qurna, con tumbas del Imperio Antiguo y de la Dinastía XVIII.',
      de: 'Gräberhügel zwischen Asasif und Qurna mit Gräbern des Alten Reiches und der 18. Dynastie.'
    },
    fullHistory: {
      ar: 'تضم مقابر شهيرة مثل مقبرة نفررنبت (TT178) كاتب خزانة آمون، ومقبرة نحت آمون ومقبرة بوي رع. كشفت البعثات الأثرية الحديثة عن نقوش بديعة لمواكب الزهور.',
      en: 'Features key tombs including Neferrenpet (TT178), Nefersekheru, and Puyemre.',
      fr: 'Comprend des sépultures majeures dont celles de Neferrenpet et Pouyemrê.',
      es: 'Alberga tumbas notables como las de Neferrenpet y Puyemra.',
      de: 'Umfasst bedeutende Gräber wie das von Neferrenpet und Pujemre.'
    },
    story: {
      ar: 'تتميز بنقوش تظهر المشرفين على صناعة الذهب والفضة والمجوهرات لقصور ومعابد طيبة.',
      en: 'Murals depict the overseers of royal goldsmiths, jewelers, and treasury craftsmen of Thebes.',
      fr: 'Fresques montrant les intendants des orfèvres, joailliers et trésors d’Amon.',
      es: 'Frescos que retratan a los orfebres reales y artesanos del tesoro de Tebas.',
      de: 'Wandbilder zeigen königliche Goldschmiede und Schatzhausbeamte von Theben.'
    },
    category: 'other_necropolis',
    bank: 'west_bank',
    epoch: { ar: 'الدولة القديمة والدولة الحديثة', en: 'Old Kingdom & New Kingdom', fr: 'Ancien et Nouvel Empire', es: 'Imperio Antiguo y Nuevo', de: 'Altes & Neues Reich' },
    pharaoh: { ar: 'نبلاء وكتاب الأسرة الثامنة عشرة', en: '18th Dynasty Officials', fr: 'Dignitaires de la 18e dynastie', es: 'Dignatarios de la Dinastía XVIII', de: 'Würdenträger der 18. Dynastie' },
    architecturalHighlights: [
      { ar: 'المقابر المنحوتة في وجه التل الصخري بنوافذ إضاءة طبيعية ونقوش تصوير المهن الحرفية', en: 'Cliff-face rock chambers with natural light apertures documenting metallurgical arts', fr: 'Chambres rupestres éclairées naturellement aux reliefs d’orfèvrerie', es: 'Cámaras talladas en la roca con escenas de metalurgia fina', de: 'Felskammern mit Naturlichtöffnungen und Goldschmiededarstellungen' }
    ],
    mustSee: [
      { ar: 'نقوش وزن الذهب والفضة وصناعة الأكاليل الجنائزية في مقبرة نفررنبت', en: 'Scenes of weighing gold rings and crafting floral funerary garlands', fr: 'Scènes de pesée des anneaux d’or et confection de couronnes de fleurs', es: 'Pesado de anillos de oro y elaboración de guirnaldas florales', de: 'Wägen von Goldringen und Flechten von Totenkränzen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7325, lng: 32.6105 },
    distanceFromCenterKm: 8.5,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'ضمن تذاكر تفتيش آثار البر الغربي', en: 'West Bank Inspectorate ticketing', fr: 'Billet inspectorat rive ouest', es: 'Boleto inspectoría orilla oeste', de: 'Westufer-Inspektorat' },
    status: 'open',
    order: 61,
  },
  {
    id: 'dra_abu_el_naga_necropolis',
    name: {
      ar: 'مقابر ذراع أبو النجا',
      en: 'Dra’ Abu el-Naga Necropolis',
      fr: 'Nécropole de Dra Abou el-Naga',
      es: 'Necrópolis de Dra Abu el-Naga',
      de: 'Nekropole von Dra Abu el-Naga',
    },
    shortDesc: {
      ar: 'المقبرة التاريخية لملوك وأمراء الأسرة السابعة عشرة الذين قادوا حرب التحرير ضد الهكسوس، ومقابر كبار رجال الدولة الحديثة.',
      en: 'The heroic burial ground of the 17th Dynasty pharaohs who led Egypt’s war of liberation against the Hyksos.',
      fr: 'Nécropole héroïque des pharaons de la 17e dynastie qui menèrent la guerre de libération contre les Hyksôs.',
      es: 'Necrópolis heroica de los faraones de la Dinastía XVII que lideraron la liberación contra los hicsos.',
      de: 'Begräbnisstätte der Pharaonen der 17. Dynastie, die den Befreiungskrieg gegen die Hyksos führten.'
    },
    fullHistory: {
      ar: 'تقع شمال جبل القرنة قرب معبد سيتي الأول. دفن فيها الملوك سقنن رع تاعا وكامس، وعثر فيها على مقابر شهيرة مثل مقبرة صايغ الذهب الملكي أمنمحات (عصر الأسرة 18).',
      en: 'Burial place of Seqenenre Tao and Kamose; site of the 2017 discovery of royal goldsmith Amenemhat’s intact tomb.',
      fr: 'Sépulture de Seqenenrê Taâ et Kamosé ; découverte en 2017 de la tombe de l’orfèvre Amenemhat.',
      es: 'Sepulcro de Seqenenra Taa y Kamosis; en 2017 se halló la tumba del orfebre real Amenemhat.',
      de: 'Grabstätte von Seqenenre und Kamose; 2017 Entdeckung des Grabes von Goldschmied Amenemhat.'
    },
    story: {
      ar: 'هنا انطلقت شعلة الكفاح المصري التي وحدت البلاد وطردت المحتلين بقيادة أسرة أحمس الأول.',
      en: 'The crucible of Egypt’s national liberation movement that founded the New Kingdom under Ahmose I.',
      fr: 'Le berceau du sursaut national qui chassa les envahisseurs et fonda le Nouvel Empire.',
      es: 'La cuna del movimiento de liberación que fundó el glorioso Imperio Nuevo.',
      de: 'Die Wiege der nationalen Befreiungsbewegung, die das Neue Reich begründete.'
    },
    category: 'other_necropolis',
    bank: 'west_bank',
    epoch: { ar: 'عصر الانتقال الثاني والدولة الحديثة', en: 'Second Intermediate Period & New Kingdom', fr: 'Deuxième Période Intermédiaire et Nouvel Empire', es: 'Segundo Periodo Intermedio e Imperio Nuevo', de: 'Zweite Zwischenzeit & Neues Reich' },
    pharaoh: { ar: 'ملوك الأسرة السابعة عشرة (سقنن رع وكامس)', en: '17th Dynasty Kings (Seqenenre & Kamose)', fr: 'Rois de la 17e dynastie', es: 'Reyes de la Dinastía XVII', de: 'Könige der 17. Dynastie' },
    architecturalHighlights: [
      { ar: 'المقابر الصخرية ذات الأهرامات الصغيرة من الطوب اللبن والتماثيل الجنائزية الخشبية المذهبة', en: 'Rock-cut tombs once crowned with small mudbrick pyramids and gilded funerary ushabtis', fr: 'Tombes rupestres jadis surmontées de pyramidions en brique crue', es: 'Tumbas rupestres coronadas antaño por pequeñas pirámides de adobe', de: 'Felsgräber mit einstigen Lehmziegelpyramiden und Grabbeigaben' }
    ],
    mustSee: [
      { ar: 'مقبرة الصائغ أمنمحات وزوجته أمونحتب وتماثيلهما الملونة المستخرجة حديثاً', en: 'Tomb of goldsmith Amenemhat with family statues and intact painted sarcophagi', fr: 'Tombe de l’orfèvre Amenemhat et statues polychromes de sa famille', es: 'Tumba del orfebre Amenemhat y sus estatuas policromadas', de: 'Grab des Goldschmieds Amenemhat mit bemalten Statuen' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7350, lng: 32.6160 },
    distanceFromCenterKm: 8.0,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م (خاضع للزيارات الأثرية المعتمدة)', en: 'Daily 6:00 AM - 5:00 PM (designated tombs open)', fr: '6h00 - 17h00 (tombes sélectionnées)', es: '6:00 - 17:00 (tumbas seleccionadas)', de: '6:00 - 17:00 Uhr (ausgewählte Gräber)' },
    ticketPrice: { ar: 'تذكرة خاصة بقطاع ذراع أبو النجا', en: 'Dra Abu el-Naga sector ticket', fr: 'Billet secteur Dra Abou el-Naga', es: 'Boleto sector Dra Abu el-Naga', de: 'Sektorticket Dra Abu el-Naga' },
    status: 'open',
    order: 62,
  },
  {
    id: 'qurna_necropolis_hills',
    name: {
      ar: 'مقابر القرنة (شيخ عبد القرنة)',
      en: 'Qurna Necropolis (Sheikh Abd el-Qurna)',
      fr: 'Nécropole de Gournah',
      es: 'Necrópolis de Qurna',
      de: 'Nekropole von Qurna',
    },
    shortDesc: {
      ar: 'قلب طيبة الجنائزي النابض بمئات المقابر المنحوتة في بطن الجبل الأصفر للوزراء والأمراء والقادة العظام.',
      en: 'The vibrant beating heart of Theban private burial, with hundreds of tombs carved into the golden hill.',
      fr: 'Le cœur battant de la nécropole thébaine, truffé de centaines de tombes de vizirs et grands capitaines.',
      es: 'El corazón palpitante de la necrópolis tebana con cientos de tumbas de visires y generales.',
      de: 'Das pulsierende Herz der thebanischen Beamtengräber mit hunderten Felsgräbern im Berghang.'
    },
    fullHistory: {
      ar: 'تعد الكنز الأكبر لتوثيق حياة المجتمع المصري القديم؛ حيث صوّر أصحاب المقابر أفراحهم، وحصاد مزارعهم، ومصانع النبيذ، وصيد الأسماك في أحراش الدلتا والنيل.',
      en: 'The premier pictorial archive of everyday ancient Egyptian life, capturing agriculture, crafts, and festive banquets.',
      fr: 'L’archive visuelle la plus complète de la vie quotidienne antique : métiers, danses et moissons.',
      es: 'El mayor archivo pictórico de la vida cotidiana egipcia: oficios, danzas y cosechas.',
      de: 'Das reichste Bilderarchiv altägyptischen Alltagslebens mit Handwerk, Festen und Landwirtschaft.'
    },
    story: {
      ar: 'فوق هذه المقابر عاشت قرية القرنة القديمة لعقود في تناغم سحري بين بيوتها الطينية الملونة والآثار الفرعونية الخالدة تحتها.',
      en: 'Generations of local villagers lived atop these tombs, weaving modern folklore with ancient sacred ground.',
      fr: 'Des générations de villageois vécurent au-dessus de ces tombes, mêlant vie traditionnelle et passé pharaonique.',
      es: 'Pobladores locales habitaron durante siglos sobre las tumbas fusionando folclore y egiptología.',
      de: 'Über Generationen lebten Dorfbewohner über den Gräbern in einzigartiger Verbindung mit der Antike.'
    },
    category: 'other_necropolis',
    bank: 'west_bank',
    epoch: { ar: 'الدولة الوسطى والحديثة', en: 'Middle & New Kingdoms', fr: 'Moyen et Nouvel Empire', es: 'Imperio Medio y Nuevo', de: 'Mittleres & Neues Reich' },
    pharaoh: { ar: 'نبلاء وعظماء مصر القديمة', en: 'Egyptian Grandees & Ministers', fr: 'Grands dignitaires égyptiens', es: 'Grandes dignatarios egipcios', de: 'Große Würdenträger Ägyptens' },
    architecturalHighlights: [
      { ar: 'مئات الواجهات الصخرية المنحوتة المتدرجة على طول المنحدر الجبلي المشرف على وادي النيل الأخضر', en: 'Hundreds of rock facades stepping up the mountain slope overlooking the green Nile plain', fr: 'Des centaines de façades taillées dans la falaise dominant la plaine du Nil', es: 'Cientos de fachadas rupestres escalonadas dominando el valle del Nilo', de: 'Hunderte Felsfassaden am Berghang mit weitem Blick über das Niltal' }
    ],
    mustSee: [
      { ar: 'الإطلالة البانورامية من قمة تل القرنة وقت الغروب على معبد الرامسيوم وسهول النيل الخضراء', en: 'Panoramic golden sunset view from Qurna crest sweeping across the Ramesseum and Nile ribbon', fr: 'Panorama doré au coucher de soleil sur le Ramesséum et la vallée', es: 'Puesta de sol dorada sobre el Ramesseum y los campos verdes', de: 'Goldener Sonnenuntergangsblick auf das Ramesseum und das Niltal' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7310, lng: 32.6075 },
    distanceFromCenterKm: 8.4,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذاكر مجموعات مقابر القرنة بالبر الغربي', en: 'Qurna Nobles Grouped Tickets', fr: 'Billets groupés des tombes de Gournah', es: 'Boletos combinados de las tumbas de Qurna', de: 'Gruppentickets Beamtengräber Qurna' },
    status: 'open',
    order: 63,
  },
  {
    id: 'qurnet_murai_necropolis',
    name: {
      ar: 'مقابر قرنة مرعي',
      en: 'Qurnet Murai Necropolis',
      fr: 'Nécropole de Qournet Mouraï',
      es: 'Necrópolis de Qurnet Murai',
      de: 'Nekropole von Qurnet Murai',
    },
    shortDesc: {
      ar: 'تل جنائزي جنوب دير المدينة يضم مقابر حكام النوبة ونواب الملك في كوش في عصر العمارنة والدولة الحديثة.',
      en: 'Burial hill south of Deir el-Medina, famous for tombs of the Viceroys of Kush and Nubian tribute scenes.',
      fr: 'Colline funéraire au sud de Deir el-Médina, réputée pour les tombes des vice-rois de Koush.',
      es: 'Colina al sur de Deir el-Medina, célebre por las tumbas de los virreyes de Kush.',
      de: 'Gräberhügel südlich von Deir el-Medina mit Gräbern der Vizekönige von Kusch.'
    },
    fullHistory: {
      ar: 'أشهر مقابرها مقبرة "حوي" (TT40) نائب الملك في كوش (النوبة) في عهد توت عنخ آمون، وتوثق العلاقة السياسية والتجارية الوثيقة بين مصر وإفريقيا.',
      en: 'Famed for the tomb of Huy (TT40), Viceroy of Kush under Tutankhamun; depicts rich Nubian tribute of gold and rings.',
      fr: 'Célèbre pour la tombe de Houy (TT40), vice-roi de Koush sous Toutânkhamon, riche en or et tributs africains.',
      es: 'Célebre por la tumba de Huy (TT40), virrey de Kush bajo Tutankamón, con tributos de oro africano.',
      de: 'Berühmt für das Grab von Huy (TT40), Vizekönig von Kusch unter Tutanchamun mit Goldschatz-Tributen.'
    },
    story: {
      ar: 'تظهر اللوحات أمراء النوبة بملابسهم الفاخرة وشعرهم المجدول يقدمون سبائك الذهب الخالص وجلود الفهود والزرافات لتوت عنخ آمون.',
      en: 'Depicts Nubian princes with braided hair presenting gold ingots, leopard skins, and giraffes to young Tutankhamun.',
      fr: 'Montre les princes de Nubie en costumes d’apparat offrant lingots d’or et peaux de panthère au pharaon.',
      es: 'Retrata a príncipes nubios ofrendando lingotes de oro y pieles de leopardo a Tutankamón.',
      de: 'Zeigt nubische Prinzen mit Goldbarren, Pantherfellen und Giraffen für den jungen Tutanchamun.'
    },
    category: 'other_necropolis',
    bank: 'west_bank',
    epoch: { ar: 'الأسرة الثامنة عشرة (عهد توت عنخ آمون)', en: '18th Dynasty', fr: '18e dynastie', es: 'Dinastía XVIII', de: '18. Dynastie' },
    pharaoh: { ar: 'حوي نائب الملك في كوش وتوت عنخ آمون', en: 'Viceroy Huy & Tutankhamun', fr: 'Vice-roi Houy et Toutânkhamon', es: 'Virrey Huy y Tutankamón', de: 'Vizekönig Huy & Tutanchamun' },
    architecturalHighlights: [
      { ar: 'نقوش السفن النيلية ذات الأشرعة العظيمة المحملة بالكنوز الإفريقية تبحر شمالاً نحو طيبة', en: 'Spectacular frescoes of Nile cargo fleets with billowing sails transporting African treasures', fr: 'Fresques spectaculaires de navires marchands aux voiles déployées descendant le Nil', es: 'Espectaculares naves veleras navegando con los tesoros de África', de: 'Spektakuläre Nilfrachter mit geblähten Segeln auf dem Weg nach Theben' }
    ],
    mustSee: [
      { ar: 'مشهد تقديم الدروع الذهبية وخواتم الذهب النوبية في مقبرة حوي', en: 'The dazzling gold ring tribute and exotic shields presented in Huy’s tomb', fr: 'Le tribut d’anneaux d’or et boucliers ouvragés dans la tombe de Houy', es: 'El tributo de anillos de oro y escudos en la tumba de Huy', de: 'Der Goldschmuck- und Ringtribut im Grab des Huy' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7265, lng: 32.6000 },
    distanceFromCenterKm: 9.0,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذكرة خاصة بمقابر قرنة مرعي', en: 'Qurnet Murai sector ticket', fr: 'Billet secteur Qournet Mouraï', es: 'Boleto sector Qurnet Murai', de: 'Sektorticket Qurnet Murai' },
    status: 'open',
    order: 64,
  },
  {
    id: 'tombs_of_nobles_general',
    name: {
      ar: 'مقابر النبلاء (الجبانة العامة لكبار رجال الدولة)',
      en: 'Tombs of the Nobles (Theban Necropolis Overview)',
      fr: 'Tombes des Nobles (Ensemble de la Nécropole)',
      es: 'Tumbas de los Nobles (Conjunto Monumental)',
      de: 'Gräber der Noblen (Thebanische Beamtengräber Gesamtschau)',
    },
    shortDesc: {
      ar: 'أكثر من 400 مقبرة مرقمة رسمياً توثق 1500 عام من تاريخ الفن والحضارة والأدب الإنساني بالبر الغربي للأقصر.',
      en: 'Over 400 officially cataloged tombs spanning 1,500 years of high Egyptian art, diplomacy, and societal grandeur.',
      fr: 'Plus de 400 tombes répertoriées couvrant 1 500 ans d’art, de diplomatie et d’histoire thébaine.',
      es: 'Más de 400 tumbas catalogadas que abarcan 1.500 años de arte, diplomacia y vida egipcia.',
      de: 'Über 400 katalogisierte Gräber aus 1.500 Jahren thebanischer Kultur, Diplomatie und Kunst.'
    },
    fullHistory: {
      ar: 'تنتشر عبر سفوح جبل القرنة وتشمل قطاعات ذراع أبو النجا، والعساسيف، والخوخة، وشيخ عبد القرنة، وقرنة مرعي، ودير المدينة. تعكس المشاعر الإنسانية الحقيقية بعيداً عن الطابع الديني الصارم للمقابر الملكية.',
      en: 'Stretches across six major sectors; offers a warm, human, and intimate counterpoint to royal tombs.',
      fr: 'S’étend sur six secteurs majeurs ; offre un contrepoint humain et chaleureux aux tombes royales.',
      es: 'Se extiende por seis grandes sectores; ofrece un contrapunto íntimo y humano a las tumbas de reyes.',
      de: 'Umfasst sechs Hauptsektoren; bietet einen intimen und menschlichen Gegenpol zu den Königsgräbern.'
    },
    story: {
      ar: 'هنا وثق المصري القديم حبه لعائلته، وزوجته، وحيواناته الأليفة، وبساتين النيل، في رحلة بحث صادقة عن الخلود وسعادة الروح الأبدية.',
      en: 'Ancient Egyptians commemorated their families, beloved pets, and sunlit gardens in a quest for eternal joy.',
      fr: 'Les Égyptiens y immortalisèrent l’amour de leur famille, de leurs animaux de compagnie et des jardins du Nil.',
      es: 'Los antiguos egipcios plasmaron el amor a su familia, sus mascotas y los jardines del Nilo.',
      de: 'Verewigt die Liebe zu Familie, Haustieren und den Gärten des Nils auf der Suche nach ewiger Freude.'
    },
    category: 'nobles_tomb',
    bank: 'west_bank',
    epoch: { ar: 'الدولة القديمة إلى العصر الروماني', en: 'Old Kingdom to Roman Period', fr: 'Ancien Empire à l’époque romaine', es: 'Imperio Antiguo a época romana', de: 'Altes Reich bis Römerzeit' },
    pharaoh: { ar: 'كبار وزراء وقضاة وحكماء طيبة', en: 'Theban Ministers, Judges, and Sages', fr: 'Vizirs, magistrats et sages de Thèbes', es: 'Visires, jueces y sabios de Tebas', de: 'Wesire, Richter und Weise von Theben' },
    architecturalHighlights: [
      { ar: 'تنوع هندسي بديع بين غرف على شكل صليب وممرات T المقلوبة ومقاصير صخرية تعلوها أهرامات صغيرة', en: 'Rich architectural variety of T-shaped chapels, cruciform layouts, and pyramidion-topped shrines', fr: 'Variété architecturale remarquable de chapelles en T, croix et niches pyramidales', es: 'Riqueza arquitectónica con capillas en forma de T y nichos piramidales', de: 'Architektonische Vielfalt aus T-förmigen Kapellen und pyramidenbekrönten Schreinen' }
    ],
    mustSee: [
      { ar: 'الجولات الميدانية بين الممرات الصخرية العتيقة المشرفة على المعابد الجنائزية في سفح الوادي', en: 'Walking through ancient hillside rock paths overlooking the mortuary temples below', fr: 'Parcours des sentiers rupestres dominant les temples des millions d’années', es: 'Paseo por los senderos rupestres con vistas a los templos funerarios', de: 'Rundgang auf den Felsenpfaden mit Aussicht auf die Totentempel im Tal' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'],
    coordinates: { lat: 25.7310, lng: 32.6070 },
    distanceFromCenterKm: 8.4,
    openingHours: { ar: 'يومياً 6:00 ص - 5:00 م', en: 'Daily 6:00 AM - 5:00 PM', fr: '6h00 - 17h00', es: '6:00 - 17:00', de: '6:00 - 17:00 Uhr' },
    ticketPrice: { ar: 'تذاكر قطاعات مخصصة بحسب المقابر المختارة', en: 'Sector tickets based on chosen tomb group', fr: 'Billets par secteur selon les tombes choisies', es: 'Boletos por sector según las tumbas elegidas', de: 'Sektorentickets nach Gräberauswahl' },
    status: 'open',
    featured: true,
    order: 65,
  },
];
