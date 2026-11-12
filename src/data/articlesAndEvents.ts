import { Article, EventItem } from '../types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'article_tutankhamun_centenary',
    title: {
      ar: 'القناع الذهبي ولغز المقبرة: قرن على اكتشاف توت عنخ آمون في وادي الملوك',
      en: 'The Golden Mask & Mystery: A Century of Tutankhamun’s KV62 Discovery',
      fr: 'Le Masque d’Or et le Mystère : Un Siècle après Toutânkhamon (KV62)',
      es: 'La Máscara de Oro: Un Siglo del Descubrimiento de Tutankamón',
      de: 'Die Goldene Maske: Ein Jahrhundert seit der Entdeckung Tutanchamuns',
    },
    excerpt: {
      ar: 'كيف أضاءت شمعة هوارد كارتر في 4 نوفمبر 1922 أعظم كنوز الحضارة الإنسانية المدفونة تحت رمال طيبة.',
      en: 'How Howard Carter’s candle flickered in November 1922 to illuminate humanity’s most glorious subterranean treasure.',
      fr: 'Comment la flamme d’Howard Carter dévoila en 1922 le plus fabuleux trésor enseveli sous les sables de Thèbes.',
      es: 'Cómo la llama de Howard Carter iluminó en 1922 el tesoro más asombroso enterrado en Tebas.',
      de: 'Wie Howard Carters Kerzenlicht 1922 den glanzvollsten Schatz der Weltgeschichte enthüllte.',
    },
    content: {
      ar: 'في صباح الرابع من نوفمبر عام 1922، وبعد ستة مواسم من التنقيب المضني تحت شمس وادي الملوك الحارقة، عثر فتى الماء الصغير حسين عبد الرسول على أول درجة حجرية غائرة في الأرض. سارع هوارد كارتر بحفر الممر ليكشف الباب المختوم بأختام المقبرة الملكية. وحين سأله اللورد كارنارفون: "هل ترى شيئاً؟"، نطق كارتر عبارته الشهيرة: "نعم، أرى أشياء رائعة!". كانت المقبرة تضم أكثر من 5000 قطعة أثرية نادرة، من بينها القناع الذهبي الصافي البالغ وزنه 11 كغم، وثلاثة أسرة جنائزية، والعجلات الحربية الذهبية التي صنعت خلود الملك الصبي للأبد.',
      en: 'On the morning of November 4, 1922, young water boy Hussein Abdel-Rassoul stumbled upon the first carved step in the bedrock. When Lord Carnarvon asked, "Can you see anything?", Carter uttered his legendary reply: "Yes, wonderful things!" Over 5,000 intact artifacts were cataloged, including the 11-kg pure gold funerary mask, golden shrines, and gilded chariots that immortalized the young pharaoh.',
      fr: 'Au matin du 4 novembre 1922, le jeune porteur d’eau découvrit la première marche taillée dans le roc. À la question fébrile de Carnarvon, Carter répondit : "Oui, des choses merveilleuses !" Plus de 5 000 pièces d’or, d’ébène et d’albâtre furent révélées, dont le légendaire masque funéraire de 11 kg d’or pur.',
      es: 'La mañana del 4 de noviembre de 1922, un joven aguador tropezó con el primer escalón tallado. Ante la pregunta de Carnarvon, Carter pronunció su célebre frase: "¡Sí, cosas maravillosas!". Más de 5.000 piezas intactas de oro y lapislázuli vieron la luz tras tres milenios de sueño.',
      de: 'Am Morgen des 4. November 1922 stieß ein einheimischer Wasserträger auf die erste Felsstufe. Auf die bange Frage Carnarvons antwortete Carter: "Ja, wunderbare Dinge!" Über 5.000 intakte Artefakte und die 11 kg schwere Goldmaske machten den Kindkönig unsterblich.'
    },
    category: { ar: 'اكتشافات أثرية', en: 'Archaeological Discoveries', fr: 'Découvertes Archéologiques', es: 'Hallazgos Arqueológicos', de: 'Archäologische Funde' },
    coverImage: '/src/assets/images/valley_of_the_kings_entrance_1794257302176.jpg',
    readTimeMin: 6,
    author: { ar: 'د. محمود الطيبي', en: 'Dr. Mahmoud El-Thebi', fr: 'Dr. Mahmoud El-Thebi', es: 'Dr. Mahmoud El-Thebi', de: 'Dr. Mahmoud El-Thebi' },
    publishedDate: '2026-03-15',
    tags: ['Tutankhamun', 'Valley of Kings', 'Discovery', 'Gold Mask'],
  },
  {
    id: 'article_hatshepsut_legacy',
    title: {
      ar: 'حتشبسوت: الملكة التي حكمت كفرعون وبنت أسطورة الدير البحري',
      en: 'Hatshepsut: The Queen Who Ruled as Pharaoh and Built Deir el-Bahari',
      fr: 'Hatchepsout : La Reine qui régna en Pharaon à Deir el-Bahari',
      es: 'Hatshepsut: La Reina que Reinó como Faraón en Tebas',
      de: 'Hatschepsut: Die Königin, die als Pharao Deir el-Bahari schuf',
    },
    excerpt: {
      ar: 'قصة المرأة الأكثر نفوذاً في العالم القديم وكيف تحدت التقاليد لتبني أعظم صرح معماري في وادي النيل.',
      en: 'The life of the ancient world’s most powerful female ruler and her architectural triumph at the Theban cliffs.',
      fr: 'L’épopée de la femme la plus puissante de l’Antiquité et son chef-d’œuvre d’architecture au pied de la falaise.',
      es: 'La vida de la soberana más formidable de la antigüedad y su proeza arquitectónica en Deir el-Bahari.',
      de: 'Die Geschichte der mächtigsten Herrscherin des Altertums und ihres kühnen Felsentempels in Theben.',
    },
    content: {
      ar: 'لم تكن حتشبسوت مجرد ملكة زوجة، بل اعتلت عرش مصر كفرعون كامل الشرعية وارتدت لحية الملك المستعارة وقادت البلاد في عصر من أزهى عصور السلام والازدهار التجاري. كلفت مهندسها المعماري النابغة سننموت بتصميم معبد "دجسير دجسرو" (أقدس الأقداس) ليكون امتداداً عضوياً لجبال البر الغربي الصخرية. أرسلت أسطولاً بحرياً أسطورياً إلى بلاد بونت الغامضة وعادت محملة بأشجار المر والبخور والذهب والعاج، وخلدت تفاصيل الرحلة على جدران معبدها لتلهم البشرية لآلاف السنين.',
      en: 'Hatshepsut defied convention by adopting the full royal titular, ceremonial beard, and double crown of Pharaoh. She orchestrated twenty-two years of peace and commercial triumph. Her genius architect Senenmut nested terraced limestone colonnades into the sheer cliffs, while her maritime fleet returned from Punt laden with living myrrh trees, ivory, and gold.',
      fr: 'Hatchepsout s’affirma souverain absolu en arborant la barbe postiche et la double couronne. Durant vingt-deux ans de prospérité, elle érigea son sanctuaire étagé conçu par Senenmout et dépêcha une expédition maritime restée légendaire au pays de Pount.',
      es: 'Hatshepsut asumió el rango de faraón luciendo la barba ceremonial y la doble corona. Su arquitecto Senenmut esculpió el templo escalonado que armoniza con la roca, mientras su flota traía árboles de mirra vivos desde el mítico País de Punt.',
      de: 'Hatschepsut regierte als vollwertiger Pharao mit Zeremonialbart und Doppelkrone. Ihr Architekt Senenmut schuf die atemberaubenden Terrassen von Deir el-Bahari, während ihre Seeflotte Weihrauchbäume und Gold aus dem fernen Punt heimbrachte.'
    },
    category: { ar: 'شخصيات تاريخية', en: 'Historical Icons', fr: 'Figures Historiques', es: 'Personajes Históricos', de: 'Historische Gestalten' },
    coverImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
    readTimeMin: 7,
    author: { ar: 'مريم الأقصري', en: 'Mariam El-Aqsari', fr: 'Mariam El-Aqsari', es: 'Mariam El-Aqsari', de: 'Mariam El-Aqsari' },
    publishedDate: '2026-02-28',
    tags: ['Hatshepsut', 'Deir el-Bahari', 'Architecture', 'Punt'],
  },
  {
    id: 'article_avenue_of_sphinxes',
    title: {
      ar: 'طريق الكباش: حكاية إحياء أعظم ممشى طقسي في التاريخ بطول 2.7 كم',
      en: 'The Avenue of Sphinxes: Reviving History’s Grandest 2.7 km Sacred Highway',
      fr: 'L’Allée des Sphinx : Renaissance de la Voie Sacrée de 2,7 km',
      es: 'La Avenida de las Esfinges: Renacimiento del Gran Camino Sagrado',
      de: 'Die Sphingenallee: Wiederbelebung der 2,7 km langen heiligen Prozessionsstraße',
    },
    excerpt: {
      ar: 'رحلة استعادة الطريق الملكي الذي يربط معبدي الكرنك والأقصر وإعادة كشف أكثر من 1050 تمثالاً بعد عقود من الحفائر.',
      en: 'The epic rediscovery and restoration of the ancient processional highway linking Karnak and Luxor temples.',
      fr: 'La redécouverte et la restauration titanesque de l’allée processionnelle reliant Karnak à Louxor.',
      es: 'La gesta arqueológica que devolvió la luz a la calzada sagrada que une Karnak y Lúxor.',
      de: 'Die Wiederentdeckung und Restaurierung der antiken Prozessionsstraße zwischen Karnak und Luxor.'
    },
    content: {
      ar: 'على مدار أكثر من سبعين عاماً، واصل علماء الآثار المصريون حفر آلاف الأمتار المكعبة من الرديم لإعادة كشف طريق الكباش التاريخي الممتد بطول 2700 متر. بدأ تشييد الطريق الملكة حتشبسوت وأكمله نختنبو الأول، وكان يشهد موكب عيد الأوبت السنوي العظيم حين تنقل قوارب آمون وموت وخونسو الذهبية. واليوم، يمكن للزائر السير على نفس الأحجار التي سار عليها ملوك الفراعنة وكهنتهم قبل أكثر من 3000 عام.',
      en: 'Spanning 2.7 km lined by over 1,050 sphinxes, the Dromos was uncovered across decades of painstaking urban archaeology. Commissioned by Hatshepsut and completed under Nectanebo I, it carried the sacred golden barques of the Theban Triad. Visitors today walk the same stone pavement trodden by pharaohs and high priests three millennia ago.',
      fr: 'Bordée de plus de 1 050 sphinx sur 2,7 km, la voie sacrée fut dégagée après des décennies de fouilles méticuleuses. Reliant Karnak au temple de Louxor, elle accueillait la grande fête d’Opet. Les voyageurs d’aujourd’hui foulent les mêmes dalles que les grands prêtres de l’Antiquité.',
      es: 'Con más de 1.050 esfinges a lo largo de 2,7 kilómetros, la avenida procesional fue rescatada del olvido tras décadas de excavaciones. Hoy el visitante camina sobre el mismo pavimento que recorrieron las barcas sagradas en la fiesta de Opet.',
      de: 'Auf 2,7 km von über 1.050 Sphingen gesäumt, wurde der Dromos in jahrzehntelanger archäologischer Arbeit freigelegt. Heute können Besucher denselben Pflasterweg abschreiten, auf dem vor 3.000 Jahren die heiligen Götterbarken getragen wurden.'
    },
    category: { ar: 'معالم وأسرار', en: 'Monuments & Secrets', fr: 'Monuments & Mystères', es: 'Monumentos y Secretos', de: 'Monumente & Geheimnisse' },
    coverImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    readTimeMin: 5,
    author: { ar: 'طارق عبد العزيز', en: 'Tarek Abdel-Aziz', fr: 'Tarek Abdel-Aziz', es: 'Tarek Abdel-Aziz', de: 'Tarek Abdel-Aziz' },
    publishedDate: '2026-01-20',
    tags: ['Avenue of Sphinxes', 'Karnak', 'Luxor Temple', 'Opet'],
  },
  {
    id: 'article_craftsmen_deir_el_medina',
    title: {
      ar: 'صناع الخلود: أسرار قرية دير المدينة ومن بنى مقابر الفراعنة؟',
      en: 'The Craftsmen of Eternity: Secrets of Deir el-Medina Village',
      fr: 'Les Artisans de l’Éternité : Les Bâtisseurs de Deir el-Médina',
      es: 'Los Artesanos de la Eternidad: Quiénes Construyeron las Tumbas Reales',
      de: 'Die Meister der Ewigkeit: Das Geheimnis des Dorfes Deir el-Medina',
    },
    excerpt: {
      ar: 'نظرة حميمة في حياة النحاتين والكتبة والرسامين الذين حفروا ولونوا مقابر وادي الملوك في حضن جبال طيبة.',
      en: 'An intimate window into the lives, loves, and daily struggles of the elite artists who sculpted the royal tombs.',
      fr: 'Une plongée émouvante dans la vie quotidienne des scribes, peintres et sculpteurs des pharaons.',
      es: 'Una mirada íntima al día a día de los artistas que cincelaron y pintaron el Valle de los Reyes.',
      de: 'Ein faszinierender Einblick in das Leben der Maler, Bildhauer und Schreiber der thebanischen Königsgräber.'
    },
    content: {
      ar: 'في واد منعزل بالبر الغربي، عاش مجتمع النخبة من عمال "مكان الحق". لم يكونوا عبيداً كما زعمت الأساطير الشعبية، بل كانوا مواطنين أحراراً فنانين ذوي مكانة اجتماعية رفيعة وأجور مدفوعة بالقمح والزيت والأسماك والكتان. تركت هذه القرية آلاف "الأوستراكا" (قطع الفخار والحجر المكتوبة) التي تحكي قصص الحب والزواج، والدعاوى القضائية، وتفاصيل الحصص الغذائية، وأول إضراب عمالي في تاريخ الحضارة عندما تأخرت مخصصاتهم في عهد رمسيس الثالث.',
      en: 'The artisans of "Set Maat" (The Place of Truth) were not enslaved laborers but highly respected, literate free citizens receiving substantial rations of spelt wheat, oil, and Nile fish. Their discarded limestone ostraca preserve intimate letters, medical remedies, legal disputes, and the earliest recorded worker strike in history under Ramesses III.',
      fr: 'Les artisans de la "Place de Vérité" formaient une élite lettrée et respectée, nourrie de rations de céréales, d’huile et de poisson. Leurs ostraca révèlent lettres d’amour, recettes médicales, procès de voisinage et la première grève de l’Histoire sous Ramsès III.',
      es: 'Los artesanos de la "Sede de la Verdad" eran hombres libres, letrados y respetados. Sus miles de óstraca conservan poemas amorosos, recetas médicas, disputas vecinales y la primera huelga laboral registrada de la historia.',
      de: 'Die Handwerker am "Ort der Wahrheit" waren hoch angesehene, freie Bürger. Tausende Tonscherben (Ostraka) bezeugen Liebesbriefe, Gerichtsakten, Rezepte und den ersten Streik der Weltgeschichte unter Ramses III.'
    },
    category: { ar: 'التراث والحياة اليومية', en: 'Heritage & Daily Life', fr: 'Vie Quotidienne & Patrimoine', es: 'Vida Cotidiana y Patrimonio', de: 'Kultur & Alltagsleben' },
    coverImage: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    readTimeMin: 6,
    author: { ar: 'د. سلوى قناوي', en: 'Dr. Salwa Qenawi', fr: 'Dr. Salwa Qenawi', es: 'Dr. Salwa Qenawi', de: 'Dr. Salwa Qenawi' },
    publishedDate: '2026-01-05',
    tags: ['Deir el-Medina', 'Craftsmen', 'Ostraca', 'Social Life'],
  },
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'event_winter_solstice_karnak',
    title: {
      ar: 'ظاهرة تعامد الشمس على قدس أقداس معبد الكرنك',
      en: 'Winter Solstice Solar Alignment at Karnak Temple',
      fr: 'Alignement Solaire du Solstice d’Hiver à Karnak',
      es: 'Alineación Solar del Solsticio de Invierno en Karnak',
      de: 'Wintersonnenwende-Lichtphänomen im Karnak-Tempel',
    },
    date: { ar: '21 ديسمبر من كل عام (فجراً)', en: 'December 21 annually (Dawn)', fr: '21 décembre chaque année (à l’aube)', es: '21 de diciembre cada año (al alba)', de: 'Jährlich am 21. Dezember (Morgendämmerung)' },
    location: { ar: 'مجمع معابد الكرنك - محور آمون رع الرئيسي', en: 'Karnak Temple - Main Amun-Re Axis', fr: 'Axe principal d’Amon-Rê à Karnak', es: 'Eje principal de Amón-Ra en Karnak', de: 'Hauptachse des Amun-Re-Tempels in Karnak' },
    description: {
      ar: 'حدث فلكي وهندسي مهيب تشهده الأقصر فجر 21 ديسمبر، حيث تشرق أشعة الشمس الذهبية مباشرة عبر البوابة الشرقية لتعبر الصروح وتستقر على قدس أقداس آمون رع معلنة بداية فصل الشتاء الفرعوني والانقلاب الشتوي.',
      en: 'A sublime astronomical feat: dawn rays pierce directly through the eastern portal along the grand axis to illuminate the inner sanctum of Amun-Re on the shortest day of the year.',
      fr: 'Phénomène astronomique grandiose où le soleil levant traverse l’axe monumental pour illuminer le saint des saints d’Amon-Rê.',
      es: 'Magnífico fenómeno astronómico donde el sol naciente penetra por la puerta oriental hasta iluminar el sanctasanctórum de Amón.',
      de: 'Ein astronomisches Meisterwerk: Die aufgehende Sonne durchflutet die Hauptachse und erleuchtet das Allerheiligste von Amun-Re.'
    },
    image: '/src/assets/images/karnak_hypostyle_hall_1794257301105.jpg',
    accessInfo: { ar: 'دخول مفتوح للجمهور والسائحين بتذكرة الكرنك الاعتيادية بدءاً من الساعة 5:30 صباحاً', en: 'Open to public with regular Karnak entry ticket from 5:30 AM', fr: 'Ouvert au public avec billet d’entrée dès 5h30', es: 'Abierto al público con boleto regular desde las 5:30', de: 'Mit regulärem Ticket ab 5:30 Uhr morgens zugänglich' },
  },
  {
    id: 'event_luxor_african_film_festival',
    title: {
      ar: 'مهرجان الأقصر للسينما الإفريقية (LAFF)',
      en: 'Luxor African Film Festival (LAFF)',
      fr: 'Festival du Film Africain de Louxor (LAFF)',
      es: 'Festival de Cine Africano de Lúxor (LAFF)',
      de: 'Luxor African Film Festival (LAFF)',
    },
    date: { ar: 'فبراير / مارس سنوياً', en: 'February / March annually', fr: 'Février / Mars chaque année', es: 'Febrero / Marzo anualmente', de: 'Jährlich im Februar / März' },
    location: { ar: 'معبد الأقصر، قصر ثقافة الأقصر، والمكتبة العامة', en: 'Luxor Temple, Culture Palace & Nile Promenades', fr: 'Temple de Louxor et Palais de la Culture', es: 'Templo de Lúxor y centros culturales', de: 'Luxor-Tempel & Kulturpalast' },
    description: {
      ar: 'ملتقى سينمائي قاري يجمع نخبة من مخرجي وممثلي ونجوم السينما من أكثر من 35 دولة إفريقية، ويقام حفل افتتاحه الأسطوري في باحة معبد الأقصر المطلة على النيل.',
      en: 'The premier continental film festival uniting directors, actors, and cinema lovers from over 35 African nations, inaugurated in the grand court of Luxor Temple.',
      fr: 'Grand rendez-vous du 7e art africain réunissant réalisateurs et cinéphiles de plus de 35 nations dans la cour du temple de Louxor.',
      es: 'El certamen cinematográfico más importante del continente africano, inaugurado en el majestuoso patio del templo de Lúxor.',
      de: 'Bedeutendes afrikanisches Filmfestival mit Regisseuren aus über 35 Nationen, feierlich eröffnet im Hof des Luxor-Tempels.'
    },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    accessInfo: { ar: 'حضور عروض الأفلام والندوات مفتوح مجاناً مع تسجيل رسمي بالمهرجان', en: 'Film screenings and panel discussions free with festival accreditation', fr: 'Projections et débats en accès libre sur accréditation', es: 'Proyecciones y coloquios con acceso gratuito previa acreditación', de: 'Filmvorführungen und Podien nach Festival-Akkreditierung frei' },
  },
  {
    id: 'event_moulid_abu_el_haggag',
    title: {
      ar: 'مولد سيدي أبو الحجاج الأقصري',
      en: 'Moulid of Sidi Abu el-Haggag',
      fr: 'Moulid de Sidi Abou el-Haggag',
      es: 'Moulid de Sidi Abu el-Haggag',
      de: 'Moulid von Sidi Abu el-Haggag',
    },
    date: { ar: 'منتصف شهر شعبان هجرياً (مهرجان شعبي سنوي)', en: 'Mid-Shaban annually (Annual Folk Festival)', fr: 'Mi-Chaabane (grande fête populaire annuelle)', es: 'Mediados del mes de Shaabán (gran fiesta popular)', de: 'Mitte des islamischen Monats Schaban (Volksfest)' },
    location: { ar: 'ميدان ومسجد أبو الحجاج بمعبد الأقصر وشوارع المدينة', en: 'Abu el-Haggag Square & Luxor Temple precinct', fr: 'Place Abou el-Haggag et abords du temple', es: 'Plaza de Abu el-Haggag y entorno del templo', de: 'Abu-el-Haggag-Platz und Tempelumfeld' },
    description: {
      ar: 'أعظم احتفال شعبي تراثي بالأقصر يعيد إحياء تقاليد عيد الأوبت القديم في صورة إسلامية صوفية: موكب مهيب تجر فيه قوارب خشبية ملونة في شوارع المدينة مع سباقات التحطيب والمرماح بالخيول.',
      en: 'Luxor’s vibrant folk carnival mirroring ancient Opet festival traditions in Sufi harmony: wooden boats paraded through streets accompanied by Tahtib stick dancers and equestrian races.',
      fr: 'Carnaval populaire séculaire faisant écho à l’antique fête d’Opet : bateaux processionnels tirés dans les rues, joutes de bâtons (tahtib) et courses équestres.',
      es: 'La mayor fiesta popular de Lúxor con desfile de barcos en andas, danzas de bastón tahtib y carreras de caballos árabes.',
      de: 'Großes thebanisches Volksfest mit bunten Prozessionsbooten in den Straßen, traditionellem Stocktanz (Tahtib) und Reiterwettkämpfen.'
    },
    image: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?auto=format&fit=crop&w=1200&q=80',
    accessInfo: { ar: 'احتفال شعبي مفتوح في كافة ميادين وشوارع وسط مدينة الأقصر', en: 'Open public celebration across all downtown squares', fr: 'Fête populaire ouverte dans toute la ville', es: 'Fiesta popular abierta en todas las plazas públicas', de: 'Freies Volksfest auf allen Plätzen und Straßen' },
  },
  {
    id: 'event_luxor_international_marathon',
    title: {
      ar: 'ماراثون الأقصر الدولي للجري بين المعابد',
      en: 'Luxor International Marathon',
      fr: 'Marathon International de Louxor',
      es: 'Maratón Internacional de Lúxor',
      de: 'Internationaler Luxor-Marathon',
    },
    date: { ar: 'يناير من كل عام', en: 'January annually', fr: 'Janvier chaque année', es: 'Enero de cada año', de: 'Jährlich im Januar' },
    location: { ar: 'معبد حتشبسوت بالدير البحري - مسار المعابد بالبر الغربي', en: 'Hatshepsut Temple start line - West Bank circuit', fr: 'Départ au temple d’Hatchepsout - boucle rive ouest', es: 'Salida en el templo de Hatshepsut - circuito monumental', de: 'Start am Hatschepsut-Tempel - Westufer-Laufstrecke' },
    description: {
      ar: 'سباق جري دولي سنوي يعد الأقدم في مصر وإفريقيا؛ ينطلق المتسابقون من أمام معبد حتشبسوت ليعبروا وادي الملوك ومعبد الرامسيوم وعملاقي ممنون وسط تشجيع أهالي الأقصر.',
      en: 'Egypt’s premier international road race where runners from 40+ countries dash past 3,500-year-old temples starting at Hatshepsut’s grand colonnade.',
      fr: 'Course mythique où des coureurs du monde entier s’élancent devant le temple d’Hatchepsout pour courir parmi les géants de pierre.',
      es: 'Carrera atlética de prestigio donde corredores de todo el planeta compiten entre los templos milenarios.',
      de: 'Prestigeträchtiger Marathonlauf, bei dem Athleten aus aller Welt vor der Kulisse der altägyptischen Tempel starten.'
    },
    image: '/src/assets/images/hot_air_balloon_luxor_sunrise_1794257299294.jpg',
    accessInfo: { ar: 'التسجيل متاح للعدائين دولياً ومحلياً، وتشجيع الجمهور مفتوح على طول المسار', en: 'Registration online; public spectator viewing along route', fr: 'Inscriptions ouvertes en ligne ; spectateurs bienvenus le long du tracé', es: 'Inscripción abierta en línea; público libre a lo largo del circuito', de: 'Startplätze online buchbar; Zuschauer an der gesamten Strecke willkommen' },
  },
];
