/* Single source of truth for all news articles. Used by news.html (listing) and article.html (detail). */
window.ARTICLES = [
  {
    id: 'gerson', ts: '2026-06-05', cat: 'art', img: '/uploads/news-gerson.jpg',
    date: { en: '5 June 2026', pl: '5 czerwca 2026', cz: '5. června 2026', it: '5 giugno 2026' },
    title: {
      en: 'Paintings of Wojciech Gerson presented at DPS Ametystowa',
      pl: 'Malarstwo Wojciecha Gersona w DPS przy ul. Ametystowej',
      cz: 'Obrazy Wojciecha Gersona v domově sociální péče Ametystowa',
      it: 'I dipinti di Wojciech Gerson presentati al DPS Ametystowa'
    },
    lead: {
      en: 'Another inspiring Art Encounter took place at the Social Welfare Home on Ametystowa Street in Lublin.',
      pl: 'Kolejne inspirujące Spotkanie ze Sztuką odbyło się w Domu Pomocy Społecznej przy ul. Ametystowej w Lublinie.',
      cz: 'Další inspirativní Setkání s uměním se konalo v Domově sociální péče na ulici Ametystowa v Lublinu.',
      it: 'Un altro ispirante Incontro con l’Arte si è svolto nella casa di assistenza sociale di via Ametystowa a Lublino.'
    },
    body: {
      en: [
        'We had the great pleasure of welcoming Ms. Jolanta Polańska, an outstanding art curator from the National Museum in Lublin, who delivered a fascinating lecture on the painting and artistic legacy of Wojciech Gerson.',
        'Wojciech Gerson (1831–1901) was one of Poland’s most important painters of the 19th century, a leading representative of Polish Realism, and a passionate promoter of national history and landscape painting. He was also an exceptional educator who taught and inspired generations of artists, including such renowned painters as Józef Chełmoński, Leon Wyczółkowski, Władysław Podkowiński and Józef Pankiewicz.',
        'This was yet another wonderful Art Encounter led by Ms. Jolanta Polańska at the Social Welfare Home. In recognition of her dedication and her extraordinary contribution to bringing light, beauty and joy into the lives of the residents, she was presented with a special diploma of appreciation.'
      ],
      pl: [
        'Mieliśmy ogromną przyjemność gościć panią Jolantę Polańską, wybitną kustosz z Muzeum Narodowego w Lublinie, która wygłosiła fascynujący wykład o malarstwie i artystycznej spuściźnie Wojciecha Gersona.',
        'Wojciech Gerson (1831–1901) był jednym z najważniejszych polskich malarzy XIX wieku, czołowym przedstawicielem polskiego realizmu i zapalonym propagatorem malarstwa historycznego i pejzażowego. Był też wyjątkowym pedagogiem, który uczył i inspirował pokolenia artystów, w tym takich malarzy jak Józef Chełmoński, Leon Wyczółkowski, Władysław Podkowiński i Józef Pankiewicz.',
        'To było kolejne wspaniałe Spotkanie ze Sztuką poprowadzone przez panią Jolantę Polańską w Domu Pomocy Społecznej. W uznaniu jej zaangażowania i niezwykłego wkładu w niesienie światła, piękna i radości w życie mieszkańców otrzymała specjalny dyplom uznania.'
      ],
      cz: [
        'Měli jsme velké potěšení přivítat paní Jolantu Polańskou, vynikající kurátorku z Národního muzea v Lublinu, která přednesla fascinující přednášku o malbě a uměleckém odkazu Wojciecha Gersona.',
        'Wojciech Gerson (1831–1901) byl jedním z nejvýznamnějších polských malířů 19. století, předním představitelem polského realismu a vášnivým propagátorem historické a krajinné malby. Byl také výjimečným pedagogem, který učil a inspiroval generace umělců, včetně takových malířů jako Józef Chełmoński, Leon Wyczółkowski, Władysław Podkowiński a Józef Pankiewicz.',
        'Bylo to další úžasné Setkání s uměním, které v Domově sociální péče vedla paní Jolanta Polańska. Za svou oddanost a mimořádný přínos k tomu, že do životů obyvatel přináší světlo, krásu a radost, obdržela zvláštní čestné uznání.'
      ],
      it: [
        'Abbiamo avuto il grande piacere di accogliere la signora Jolanta Polańska, eccezionale curatrice del Museo Nazionale di Lublino, che ha tenuto un’affascinante conferenza sulla pittura e sull’eredità artistica di Wojciech Gerson.',
        'Wojciech Gerson (1831–1901) è stato uno dei più importanti pittori polacchi dell’Ottocento, esponente di spicco del realismo polacco e appassionato promotore della pittura storica e paesaggistica. È stato anche un educatore eccezionale che ha insegnato e ispirato generazioni di artisti, tra cui pittori celebri come Józef Chełmoński, Leon Wyczółkowski, Władysław Podkowiński e Józef Pankiewicz.',
        'È stato un altro meraviglioso Incontro con l’Arte guidato dalla signora Jolanta Polańska nella casa di assistenza sociale. In riconoscimento della sua dedizione e del suo straordinario contributo nel portare luce, bellezza e gioia nella vita dei residenti, le è stato consegnato un diploma speciale di apprezzamento.'
      ]
    }
  },
  {
    id: 'mopr', ts: '2026-05-26', cat: 'community', img: '/uploads/news-mopr.jpg',
    date: { en: '26 May 2026', pl: '26 maja 2026', cz: '26. května 2026', it: '26 maggio 2026' },
    title: {
      en: 'Supporting those who support others',
      pl: 'Wspieramy tych, którzy wspierają innych',
      cz: 'Podporujeme ty, kdo podporují druhé',
      it: 'Sosteniamo chi sostiene gli altri'
    },
    lead: {
      en: 'Stock Foundation has completed a series of training sessions for 30 employees of the Municipal Family Support Centers (MOPR) in Lublin.',
      pl: 'Fundacja Stock zakończyła cykl szkoleń dla 30 pracowników Miejskich Ośrodków Pomocy Rodzinie (MOPR) w Lublinie.',
      cz: 'Nadace Stock dokončila sérii školení pro 30 zaměstnanců městských center podpory rodiny (MOPR) v Lublinu.',
      it: 'La Fondazione Stock ha completato una serie di sessioni di formazione per 30 dipendenti dei centri municipali di sostegno alla famiglia (MOPR) di Lublino.'
    },
    body: {
      en: [
        'The workshops were led by our therapists, Anna Kalbus and Jerzy Brożyna, and were designed for professionals who work daily with individuals affected by various forms of addiction.',
        'The program is highly practical. Participants learn how to conduct conversations that encourage positive change, respond effectively in crisis situations, manage emotions, and build relationships based on trust and clearly defined boundaries. The training also incorporates real-life case studies and practical examples.',
        'An important aspect of the program is moving beyond simple, black-and-white solutions toward a harm-reduction approach and supporting gradual, step-by-step changes in habits and life decisions. The Stock Foundation helps strengthen the skills and expertise of those who dedicate their work to helping others.'
      ],
      pl: [
        'Warsztaty poprowadzili nasi terapeuci, Anna Kalbus i Jerzy Brożyna, a przeznaczone były dla specjalistów pracujących na co dzień z osobami dotkniętymi różnymi formami uzależnień.',
        'Program jest bardzo praktyczny. Uczestnicy uczą się, jak prowadzić rozmowy zachęcające do pozytywnej zmiany, skutecznie reagować w sytuacjach kryzysowych, zarządzać emocjami i budować relacje oparte na zaufaniu i jasno określonych granicach. Szkolenie obejmuje też studia przypadków i praktyczne przykłady.',
        'Ważnym elementem programu jest wyjście poza proste, czarno-białe rozwiązania w stronę podejścia redukcji szkód oraz wspierania stopniowych zmian w nawykach i decyzjach życiowych. Fundacja Stock pomaga wzmacniać kompetencje tych, którzy poświęcają swoją pracę pomaganiu innym.'
      ],
      cz: [
        'Workshopy vedli naši terapeuti Anna Kalbus a Jerzy Brożyna a byly určeny profesionálům, kteří denně pracují s lidmi zasaženými různými formami závislosti.',
        'Program je vysoce praktický. Účastníci se učí, jak vést rozhovory podporující pozitivní změnu, účinně reagovat v krizových situacích, zvládat emoce a budovat vztahy založené na důvěře a jasně vymezených hranicích. Školení zahrnuje i případové studie a praktické příklady.',
        'Důležitým aspektem programu je posun od jednoduchých černobílých řešení k přístupu snižování rizik a podpoře postupných změn v návycích a životních rozhodnutích. Nadace Stock pomáhá posilovat dovednosti těch, kdo svou práci věnují pomoci druhým.'
      ],
      it: [
        'I laboratori sono stati condotti dai nostri terapeuti, Anna Kalbus e Jerzy Brożyna, ed erano rivolti a professionisti che lavorano quotidianamente con persone colpite da varie forme di dipendenza.',
        'Il programma è molto pratico. I partecipanti imparano a condurre conversazioni che incoraggiano il cambiamento positivo, a rispondere efficacemente nelle situazioni di crisi, a gestire le emozioni e a costruire relazioni basate sulla fiducia e su confini chiaramente definiti. La formazione include anche casi di studio reali ed esempi pratici.',
        'Un aspetto importante del programma è andare oltre le soluzioni semplici e nette verso un approccio di riduzione del danno e il sostegno a cambiamenti graduali nelle abitudini e nelle decisioni di vita. La Fondazione Stock aiuta a rafforzare le competenze di chi dedica il proprio lavoro ad aiutare gli altri.'
      ]
    }
  },
  {
    id: 'taekwondo', ts: '2026-05-07', cat: 'scholar', img: '/uploads/news-taekwondo.jpg',
    date: { en: '7 May 2026', pl: '7 maja 2026', cz: '7. května 2026', it: '7 maggio 2026' },
    title: {
      en: 'Music and Sport Scholarship — another victory',
      pl: 'Stypendium muzyczno-sportowe — kolejne zwycięstwo',
      cz: 'Hudební a sportovní stipendium — další vítězství',
      it: 'Borsa di studio musica e sport — un’altra vittoria'
    },
    lead: {
      en: 'Piotr Pawlik has joined our music and sports scholarship program, organized jointly by Stock Foundation and Homo Faber.',
      pl: 'Piotr Pawlik dołączył do naszego programu stypendiów muzyczno-sportowych, organizowanego wspólnie przez Fundację Stock i Homo Faber.',
      cz: 'Piotr Pawlik se připojil k našemu programu hudebních a sportovních stipendií, který společně pořádají Nadace Stock a Homo Faber.',
      it: 'Piotr Pawlik è entrato nel nostro programma di borse di studio per musica e sport, organizzato insieme da Fondazione Stock e Homo Faber.'
    },
    body: {
      en: [
        'Piotr Pawlik competes in a Korean martial art (Taekwon-Do), where athletes take part in several disciplines such as sparring, patterns and special techniques. He competes in the junior category and has achieved notable results both nationally and internationally.',
        'In April 2026, Piotr, together with the national team, achieved another success by winning 3rd place in the junior team patterns event at the European Championships in Maribor. Earlier, he and his club teammates were also honored by the Mayor of Lublin for their sporting achievements.',
        'In 2025, Piotr won the title of Polish Junior Champion in individual sparring, which led to his selection for the national team. As a representative of Poland, he participated in an international match held in Sweden in September 2025, where he placed 4th in the individual sparring category up to 65 kg. We are very happy to already see such remarkable success at the very beginning.'
      ],
      pl: [
        'Piotr Pawlik uprawia koreańską sztukę walki (Taekwon-Do), w której zawodnicy startują w kilku konkurencjach, takich jak walki, układy i techniki specjalne. Rywalizuje w kategorii juniorów i osiąga znaczące wyniki zarówno w kraju, jak i za granicą.',
        'W kwietniu 2026 roku Piotr wraz z reprezentacją odniósł kolejny sukces, zdobywając 3. miejsce w drużynowych układach juniorów na Mistrzostwach Europy w Mariborze. Wcześniej wraz z kolegami z klubu został również uhonorowany przez Prezydenta Miasta Lublin za osiągnięcia sportowe.',
        'W 2025 roku Piotr zdobył tytuł Mistrza Polski Juniorów w walkach indywidualnych, co zaowocowało powołaniem do reprezentacji. Jako reprezentant Polski wziął udział w międzynarodowym meczu w Szwecji we wrześniu 2025 roku, gdzie zajął 4. miejsce w kategorii do 65 kg. Bardzo cieszymy się z tak wybitnych sukcesów już na samym początku.'
      ],
      cz: [
        'Piotr Pawlik se věnuje korejskému bojovému umění (Taekwon-Do), kde sportovci soutěží v několika disciplínách, jako jsou zápas, sestavy a speciální techniky. Soutěží v juniorské kategorii a dosahuje pozoruhodných výsledků doma i v zahraničí.',
        'V dubnu 2026 Piotr spolu s národním týmem dosáhl dalšího úspěchu, když získal 3. místo v týmových sestavách juniorů na mistrovství Evropy v Mariboru. Dříve byli on i jeho kluboví kolegové oceněni primátorem Lublinu za své sportovní úspěchy.',
        'V roce 2025 Piotr získal titul mistra Polska juniorů v individuálním zápase, což vedlo k jeho nominaci do národního týmu. Jako reprezentant Polska se v září 2025 zúčastnil mezinárodního zápasu ve Švédsku, kde obsadil 4. místo v kategorii do 65 kg. Velmi nás těší tak pozoruhodné úspěchy hned na začátku.'
      ],
      it: [
        'Piotr Pawlik pratica un’arte marziale coreana (Taekwon-Do), in cui gli atleti gareggiano in diverse discipline come combattimento, forme e tecniche speciali. Compete nella categoria junior e ha ottenuto risultati notevoli a livello nazionale e internazionale.',
        'Nell’aprile 2026, Piotr, insieme alla nazionale, ha ottenuto un altro successo vincendo il 3° posto nelle forme a squadre junior ai Campionati Europei di Maribor. In precedenza, lui e i suoi compagni di club erano stati premiati dal Sindaco di Lublino per i loro risultati sportivi.',
        'Nel 2025 Piotr ha conquistato il titolo di Campione Polacco Junior nel combattimento individuale, che gli è valso la convocazione in nazionale. Come rappresentante della Polonia, ha partecipato a un incontro internazionale in Svezia nel settembre 2025, dove si è classificato 4° nella categoria fino a 65 kg. Siamo molto felici di vedere già all’inizio successi così notevoli.'
      ]
    }
  },
  {
    id: 'urbanlab', ts: '2026-04-24', cat: 'art', img: '/uploads/news-urbanlab.jpg',
    date: { en: '24 April 2026', pl: '24 kwietnia 2026', cz: '24. dubna 2026', it: '24 aprile 2026' },
    title: {
      en: 'Across generations — meeting with art at UrbanLab',
      pl: 'Międzypokoleniowo — spotkanie ze sztuką w UrbanLab',
      cz: 'Napříč generacemi — setkání s uměním v UrbanLab',
      it: 'Attraverso le generazioni — incontro con l’arte all’UrbanLab'
    },
    lead: {
      en: 'The City Hall’s main chamber hosted a unique cultural event organized by the Stock Foundation, dedicated to art and its multigenerational dimension.',
      pl: 'W głównej sali ratusza odbyło się wyjątkowe wydarzenie kulturalne zorganizowane przez Fundację Stock, poświęcone sztuce i jej międzypokoleniowemu wymiarowi.',
      cz: 'V hlavním sále radnice se konala jedinečná kulturní akce pořádaná Nadací Stock, věnovaná umění a jeho mezigeneračnímu rozměru.',
      it: 'La sala principale del municipio ha ospitato un evento culturale unico organizzato dalla Fondazione Stock, dedicato all’arte e alla sua dimensione multigenerazionale.'
    },
    body: {
      en: [
        'The meeting was led by an outstanding curator from the National Museum in Lublin, Danuta Szewczyk-Prokurat. The lecture focused on the fascinating phenomenon of artistic talent being passed down from one generation to another, revealing how creativity and craftsmanship can transcend time within families.',
        'The presentation was enriched with remarkable examples from art history, including works by Pieter Bruegel, Peter Paul Rubens and the Kossak family, illustrating how artistic heritage evolves across generations. A particularly engaging part of the meeting was devoted to the Sagrada Família — Antoni Gaudí’s masterpiece in Barcelona, whose construction has involved multiple generations of artists and architects.',
        'The event was addressed to seniors under the care of the City Hall. It offered an inspiring opportunity to reflect on continuity, legacy, and the enduring power of art to connect people across generations.'
      ],
      pl: [
        'Spotkanie poprowadziła wybitna kustosz z Muzeum Narodowego w Lublinie, Danuta Szewczyk-Prokurat. Wykład skupił się na fascynującym zjawisku talentu artystycznego przekazywanego z pokolenia na pokolenie, ukazując, jak twórczość i kunszt potrafią przekraczać czas w obrębie rodzin.',
        'Prezentację wzbogaciły niezwykłe przykłady z historii sztuki, w tym dzieła Pietera Bruegla, Petera Paula Rubensa i rodziny Kossaków, ilustrujące, jak dziedzictwo artystyczne ewoluuje przez pokolenia. Szczególnie wciągająca część spotkania poświęcona była Sagrada Família — arcydziełu Antoniego Gaudíego w Barcelonie, którego budowa angażowała wiele pokoleń artystów i architektów.',
        'Wydarzenie skierowane było do seniorów pod opieką ratusza. Było inspirującą okazją do refleksji nad ciągłością, dziedzictwem i nieprzemijającą mocą sztuki, która łączy ludzi ponad pokoleniami.'
      ],
      cz: [
        'Setkání vedla vynikající kurátorka z Národního muzea v Lublinu, Danuta Szewczyk-Prokurat. Přednáška se zaměřila na fascinující fenomén uměleckého talentu předávaného z generace na generaci a ukázala, jak tvořivost a řemeslo dokážou v rodinách překonávat čas.',
        'Prezentaci obohatily pozoruhodné příklady z dějin umění, včetně děl Pietera Bruegela, Petera Paula Rubense a rodiny Kossaků, které ilustrují, jak se umělecké dědictví vyvíjí napříč generacemi. Obzvláště poutavá část setkání byla věnována Sagrada Família — mistrovskému dílu Antoniho Gaudího v Barceloně, na jehož stavbě se podílelo několik generací umělců a architektů.',
        'Akce byla určena seniorům v péči radnice. Nabídla inspirativní příležitost k zamyšlení nad kontinuitou, odkazem a trvalou silou umění spojovat lidi napříč generacemi.'
      ],
      it: [
        'L’incontro è stato guidato da un’eccezionale curatrice del Museo Nazionale di Lublino, Danuta Szewczyk-Prokurat. La conferenza si è concentrata sull’affascinante fenomeno del talento artistico tramandato di generazione in generazione, rivelando come creatività e maestria possano attraversare il tempo all’interno delle famiglie.',
        'La presentazione è stata arricchita da esempi notevoli della storia dell’arte, tra cui opere di Pieter Bruegel, Peter Paul Rubens e della famiglia Kossak, che illustrano come il patrimonio artistico si evolva attraverso le generazioni. Una parte particolarmente coinvolgente è stata dedicata alla Sagrada Família — il capolavoro di Antoni Gaudí a Barcellona, la cui costruzione ha coinvolto più generazioni di artisti e architetti.',
        'L’evento era rivolto agli anziani assistiti dal municipio. Ha offerto un’occasione stimolante per riflettere sulla continuità, sull’eredità e sul potere duraturo dell’arte di unire le persone attraverso le generazioni.'
      ]
    }
  },
  {
    id: 'cik', ts: '2026-04-17', cat: 'community', img: '/uploads/news-cik.jpg',
    date: { en: '17 April 2026', pl: '17 kwietnia 2026', cz: '17. dubna 2026', it: '17 aprile 2026' },
    title: {
      en: 'Stock Foundation awarded at the Crisis Intervention Center',
      pl: 'Fundacja Stock wyróżniona przez Centrum Interwencji Kryzysowej',
      cz: 'Nadace Stock oceněna Centrem krizové intervence',
      it: 'La Fondazione Stock premiata al Centro di Intervento di Crisi'
    },
    lead: {
      en: 'In Lublin, celebrations were held for the 20th anniversary of the Crisis Intervention Centre — a municipal unit supporting people in difficult life situations.',
      pl: 'W Lublinie odbyły się obchody 20-lecia Centrum Interwencji Kryzysowej — miejskiej jednostki wspierającej osoby w trudnych sytuacjach życiowych.',
      cz: 'V Lublinu se konaly oslavy 20. výročí Centra krizové intervence — městské jednotky podporující lidi v obtížných životních situacích.',
      it: 'A Lublino si sono svolte le celebrazioni per il 20° anniversario del Centro di Intervento di Crisi — un’unità municipale che sostiene le persone in situazioni di vita difficili.'
    },
    body: {
      en: [
        'For years, the CIK has been providing free, specialist psychological, therapeutic, legal and crisis intervention support, available without a referral to city residents. Assistance is directed, among others, to individuals experiencing violence, addiction, personal crises or sudden life events such as the loss of a loved one or job loss.',
        'During the anniversary event, partners supporting the Centre’s activities were recognized. Among them was the Stock Foundation, which received a certificate of appreciation for its social engagement. On behalf of the Foundation, the award was received by Paweł Jabłoński, who was also individually recognized for his personal contribution to the support activities.',
        'The event was attended by representatives of city authorities, support institutions and non-governmental organizations cooperating with the CIK, highlighting the importance of collaboration in assisting people in crisis.'
      ],
      pl: [
        'Od lat CIK zapewnia bezpłatne, specjalistyczne wsparcie psychologiczne, terapeutyczne, prawne i interwencji kryzysowej, dostępne dla mieszkańców bez skierowania. Pomoc kierowana jest m.in. do osób doświadczających przemocy, uzależnień, kryzysów osobistych lub nagłych zdarzeń życiowych, takich jak utrata bliskiej osoby czy pracy.',
        'Podczas jubileuszu wyróżniono partnerów wspierających działalność Centrum. Wśród nich znalazła się Fundacja Stock, która otrzymała dyplom uznania za zaangażowanie społeczne. W imieniu Fundacji nagrodę odebrał Paweł Jabłoński, wyróżniony również indywidualnie za osobisty wkład w działania pomocowe.',
        'W wydarzeniu wzięli udział przedstawiciele władz miasta, instytucji pomocowych i organizacji pozarządowych współpracujących z CIK, co podkreśliło znaczenie współpracy w niesieniu pomocy osobom w kryzysie.'
      ],
      cz: [
        'CIK po léta poskytuje bezplatnou odbornou psychologickou, terapeutickou, právní a krizovou intervenční podporu dostupnou obyvatelům bez doporučení. Pomoc je směřována mimo jiné lidem, kteří zažívají násilí, závislost, osobní krize nebo náhlé životní události, jako je ztráta blízké osoby či práce.',
        'Během výročí byli oceněni partneři podporující činnost Centra. Mezi nimi byla i Nadace Stock, která obdržela čestné uznání za společenskou angažovanost. Jménem nadace cenu převzal Paweł Jabłoński, který byl také individuálně oceněn za svůj osobní přínos podpůrným aktivitám.',
        'Akce se zúčastnili zástupci městských úřadů, podpůrných institucí a nevládních organizací spolupracujících s CIK, což zdůraznilo význam spolupráce při pomoci lidem v krizi.'
      ],
      it: [
        'Da anni il CIK fornisce sostegno psicologico, terapeutico, legale e di intervento di crisi gratuito e specialistico, disponibile senza prescrizione per i residenti. L’assistenza è rivolta, tra gli altri, a persone che subiscono violenza, dipendenze, crisi personali o eventi improvvisi come la perdita di una persona cara o del lavoro.',
        'Durante l’evento anniversario sono stati riconosciuti i partner che sostengono le attività del Centro. Tra questi la Fondazione Stock, che ha ricevuto un attestato di apprezzamento per il suo impegno sociale. A nome della Fondazione, il premio è stato ritirato da Paweł Jabłoński, riconosciuto anche individualmente per il suo contributo personale alle attività di sostegno.',
        'All’evento hanno partecipato rappresentanti delle autorità cittadine, delle istituzioni di sostegno e delle organizzazioni non governative che collaborano con il CIK, sottolineando l’importanza della collaborazione nell’assistere le persone in crisi.'
      ]
    }
  },
  {
    id: 'guitar', ts: '2026-03-16', cat: 'scholar', img: '/uploads/news-guitar.jpg',
    date: { en: '16 March 2026', pl: '16 marca 2026', cz: '16. března 2026', it: '16 marzo 2026' },
    title: {
      en: 'Meet our new volunteer — renowned luthier Łukasz Murawski',
      pl: 'Poznajcie naszego wolontariusza — lutnika Łukasza Murawskiego',
      cz: 'Poznejte našeho dobrovolníka — houslaře Łukasze Murawského',
      it: 'Il nostro nuovo volontario — il liutaio Łukasz Murawski'
    },
    lead: {
      en: 'The Stock Foundation is proud to share that we have gained an extraordinary volunteer — a master luthier and creator of electric guitars.',
      pl: 'Fundacja Stock z dumą informuje, że pozyskaliśmy niezwykłego wolontariusza — mistrza lutnictwa i twórcę gitar elektrycznych.',
      cz: 'Nadace Stock s hrdostí oznamuje, že jsme získali výjimečného dobrovolníka — mistra houslaře a tvůrce elektrických kytar.',
      it: 'La Fondazione Stock è orgogliosa di annunciare di aver acquisito un volontario straordinario — un maestro liutaio e creatore di chitarre elettriche.'
    },
    body: {
      en: [
        'Łukasz Murawski, creator of electric guitars, after learning about our music scholarship program for talented young people forced to abandon their musical education due to the outbreak of war, decided to take action. He generously donated his handcrafted electric guitar for the participants of our program.',
        'The instrument was received by our teachers, Olga and Mirek from Homo Faber, who will help ensure it is put to great use. The instrument is truly exceptional — beautifully made, lightweight, easy to play, and with a fantastic sound, making it perfect for learning and developing musical skills.',
        'We are deeply grateful for this remarkable gesture and support.'
      ],
      pl: [
        'Łukasz Murawski, twórca gitar elektrycznych, po tym jak dowiedział się o naszym programie stypendiów muzycznych dla utalentowanych młodych ludzi zmuszonych do porzucenia edukacji muzycznej z powodu wybuchu wojny, postanowił działać. Hojnie przekazał swoją ręcznie wykonaną gitarę elektryczną dla uczestników naszego programu.',
        'Instrument odebrali nasi nauczyciele, Olga i Mirek z Homo Faber, którzy zadbają o to, by został dobrze wykorzystany. Instrument jest naprawdę wyjątkowy — pięknie wykonany, lekki, łatwy w grze i o fantastycznym brzmieniu, co czyni go idealnym do nauki i rozwijania umiejętności muzycznych.',
        'Jesteśmy głęboko wdzięczni za ten niezwykły gest i wsparcie.'
      ],
      cz: [
        'Łukasz Murawski, tvůrce elektrických kytar, se poté, co se dozvěděl o našem programu hudebních stipendií pro talentované mladé lidi, kteří museli kvůli vypuknutí války opustit hudební vzdělávání, rozhodl jednat. Velkoryse věnoval svou ručně vyrobenou elektrickou kytaru účastníkům našeho programu.',
        'Nástroj převzali naši učitelé Olga a Mirek z Homo Faber, kteří pomohou zajistit jeho skvělé využití. Nástroj je opravdu výjimečný — krásně vyrobený, lehký, snadno hratelný a s fantastickým zvukem, což jej činí ideálním pro učení a rozvoj hudebních dovedností.',
        'Jsme hluboce vděční za toto pozoruhodné gesto a podporu.'
      ],
      it: [
        'Łukasz Murawski, creatore di chitarre elettriche, dopo aver appreso del nostro programma di borse di studio musicali per giovani talentuosi costretti ad abbandonare l’educazione musicale a causa dello scoppio della guerra, ha deciso di agire. Ha generosamente donato la sua chitarra elettrica artigianale ai partecipanti del nostro programma.',
        'Lo strumento è stato ricevuto dai nostri insegnanti, Olga e Mirek di Homo Faber, che contribuiranno a farne buon uso. Lo strumento è davvero eccezionale — splendidamente realizzato, leggero, facile da suonare e con un suono fantastico, che lo rende perfetto per imparare e sviluppare le abilità musicali.',
        'Siamo profondamente grati per questo straordinario gesto e sostegno.'
      ]
    }
  },
  {
    id: 'chmielowski', ts: '2026-01-22', cat: 'art', img: '/uploads/news-chmielowski.jpg',
    date: { en: '22 January 2026', pl: '22 stycznia 2026', cz: '22. ledna 2026', it: '22 gennaio 2026' },
    title: {
      en: 'Meeting for seniors dedicated to the art and life of Adam Chmielowski',
      pl: 'Spotkanie dla seniorów o sztuce i życiu Adama Chmielowskiego',
      cz: 'Setkání pro seniory o umění a životě Adama Chmielowského',
      it: 'Incontro per anziani dedicato all\u2019arte e alla vita di Adam Chmielowski'
    },
    lead: {
      en: 'At the City Hall in Lublin, on the anniversary of the January Uprising, curator Anna Czajczyk presented the works of Adam Chmielowski — Brother Albert.',
      pl: 'W ratuszu w Lublinie, w rocznicę wybuchu powstania styczniowego, kustosz Anna Czajczyk przedstawiła twórczość Adama Chmielowskiego — Brata Alberta.',
      cz: 'Na radnici v Lublinu, v den výročí lednového povstání, představila kurátorka Anna Czajczyk dílo Adama Chmielowského — bratra Alberta.',
      it: 'Al municipio di Lublino, nell\u2019anniversario dell\u2019Insurrezione di Gennaio, la curatrice Anna Czajczyk ha presentato le opere di Adam Chmielowski — Fratel Alberto.'
    },
    body: {
      en: [
        'At the City Hall building in Lublin, on the anniversary of the outbreak of the January Uprising, an excellent curator from the National Museum, Anna Czajczyk, delivered an illustrated presentation on the works of Adam Chmielowski, known later in life as Brother Albert. The event was aimed at seniors under the care of the city office.',
        'Adam Chmielowski was a Polish painter and Franciscan friar who began his career in art before dedicating his life to serving the poor and homeless. He participated in the January Uprising of 1863 and later studied painting in major European art centres including Paris and Munich.',
        'After experiencing a deep religious calling, he founded the Albertine Brothers and Sisters, devoted to helping those in need — a story that resonated deeply with the audience.'
      ],
      pl: [
        'W budynku ratusza w Lublinie, w rocznicę wybuchu powstania styczniowego, znakomita kustosz Muzeum Narodowego Anna Czajczyk wygłosiła ilustrowaną prelekcję o twórczości Adama Chmielowskiego, znanego później jako Brat Albert. Wydarzenie skierowane było do seniorów pod opieką urzędu miasta.',
        'Adam Chmielowski był polskim malarzem i franciszkaninem, który rozpoczął karierę artystyczną, zanim poświęcił życie służbie ubogim i bezdomnym. Brał udział w powstaniu styczniowym 1863 roku, a później studiował malarstwo w głównych europejskich ośrodkach sztuki, m.in. w Paryżu i Monachium.',
        'Po doświadczeniu głębokiego powołania religijnego założył zgromadzenia albertynów i albertynek, oddane pomocy potrzebującym — historia ta głęboko poruszyła słuchaczy.'
      ],
      cz: [
        'V budově radnice v Lublinu, v den výročí vypuknutí lednového povstání, přednesla vynikající kurátorka Národního muzea Anna Czajczyk ilustrovanou přednášku o díle Adama Chmielowského, později známého jako bratr Albert. Akce byla určena seniorům v péči městského úřadu.',
        'Adam Chmielowski byl polský malíř a františkán, který zahájil uměleckou kariéru, než zasvětil život službě chudým a lidem bez domova. Účastnil se lednového povstání roku 1863 a později studoval malířství v předních evropských uměleckých centrech včetně Paříže a Mnichova.',
        'Po hlubokém náboženském povolání založil kongregace albertinů a albertinek, věnované pomoci potřebným — příběh, který posluchače hluboce oslovil.'
      ],
      it: [
        'Nel palazzo del municipio di Lublino, nell\u2019anniversario dello scoppio dell\u2019Insurrezione di Gennaio, l\u2019eccellente curatrice del Museo Nazionale Anna Czajczyk ha tenuto una presentazione illustrata sulle opere di Adam Chmielowski, conosciuto più tardi come Fratel Alberto. L\u2019evento era rivolto agli anziani assistiti dall\u2019ufficio comunale.',
        'Adam Chmielowski è stato un pittore polacco e frate francescano che iniziò la carriera artistica prima di dedicare la vita al servizio dei poveri e dei senzatetto. Partecipò all\u2019Insurrezione di Gennaio del 1863 e in seguito studiò pittura nei principali centri artistici europei, tra cui Parigi e Monaco.',
        'Dopo una profonda vocazione religiosa fondò le congregazioni dei Fratelli e delle Suore Albertine, dedite ad aiutare i bisognosi — una storia che ha toccato profondamente il pubblico.'
      ]
    }
  },
  {
    id: 'bandura', ts: '2025-12-18', cat: 'scholar', img: '/uploads/news-bandura.jpg',
    date: { en: '18 December 2025', pl: '18 grudnia 2025', cz: '18. prosince 2025', it: '18 dicembre 2025' },
    title: {
      en: 'Our young bandura players in concert at Homo Faber',
      pl: 'Nasi młodzi bandurzyści w koncercie u Homo Faber',
      cz: 'Naši mladí banduristé na koncertě u Homo Faber',
      it: 'I nostri giovani suonatori di bandura in concerto da Homo Faber'
    },
    lead: {
      en: 'A bandura ensemble from our music scholarship program gave a moving pre-Christmas concert at the Homo Faber premises.',
      pl: 'Zespół bandurzystów z naszego programu stypendialnego dał wzruszający przedświąteczny koncert w siedzibie Homo Faber.',
      cz: 'Bandurový soubor z našeho stipendijního programu uspořádal dojemný předvánoční koncert v sídle Homo Faber.',
      it: 'Un ensemble di bandura del nostro programma di borse di studio ha tenuto un commovente concerto prenatalizio nella sede di Homo Faber.'
    },
    body: {
      en: [
        'The Stock Foundation, together with the Homo Faber Association, runs music scholarships for talented young people from Ukraine who were forced to interrupt their education because of the war.',
        'On December 18th, a bandura ensemble gave a wonderful pre-Christmas concert that moved and inspired the audience.',
        'This initiative is important because it gives young people real support and a chance to continue developing their skills despite the difficult situation.'
      ],
      pl: [
        'Fundacja Stock wraz ze stowarzyszeniem Homo Faber prowadzi stypendia muzyczne dla utalentowanej młodzieży z Ukrainy, która z powodu wojny musiała przerwać edukację.',
        '18 grudnia zespół bandurzystów dał wspaniały przedświąteczny koncert, który wzruszył i zainspirował publiczność.',
        'Ta inicjatywa jest ważna, bo daje młodym ludziom realne wsparcie i szansę dalszego rozwijania umiejętności mimo trudnej sytuacji.'
      ],
      cz: [
        'Nadace Stock spolu se sdružením Homo Faber vede hudební stipendia pro talentované mladé lidi z Ukrajiny, kteří museli kvůli válce přerušit vzdělávání.',
        '18. prosince uspořádal bandurový soubor nádherný předvánoční koncert, který publikum dojal a inspiroval.',
        'Tato iniciativa je důležitá, protože dává mladým lidem skutečnou podporu a šanci dále rozvíjet své dovednosti navzdory obtížné situaci.'
      ],
      it: [
        'La Fondazione Stock, insieme all\u2019associazione Homo Faber, gestisce borse di studio musicali per giovani talentuosi dall\u2019Ucraina costretti a interrompere gli studi a causa della guerra.',
        'Il 18 dicembre un ensemble di bandura ha tenuto un meraviglioso concerto prenatalizio che ha commosso e ispirato il pubblico.',
        'Questa iniziativa è importante perché dà ai giovani un sostegno reale e la possibilità di continuare a sviluppare le proprie capacità nonostante la situazione difficile.'
      ]
    }
  },
  {
    id: 'florence', ts: '2025-11-18', cat: 'art', img: '/uploads/news-florence.jpg',
    date: { en: '18 November 2025', pl: '18 listopada 2025', cz: '18. listopadu 2025', it: '18 novembre 2025' },
    title: {
      en: 'Art curator Barbara Czajkowska takes residents of DPS to Florence',
      pl: 'Kustosz Barbara Czajkowska zabiera mieszkańców DPS do Florencji',
      cz: 'Kurátorka Barbara Czajkowska bere obyvatele DPS do Florencie',
      it: 'La curatrice Barbara Czajkowska porta i residenti del DPS a Firenze'
    },
    lead: {
      en: 'A talk about the Galleria degli Uffizi brought Botticelli, Michelangelo and Leonardo to the Social Welfare Home on Ametystowa Street.',
      pl: 'Opowieść o Galerii Uffizi przeniosła Botticellego, Michała Anioła i Leonarda do Domu Pomocy Społecznej przy ul. Ametystowej.',
      cz: 'Vyprávění o Galerii Uffizi přeneslo Botticelliho, Michelangela a Leonarda do domova sociální péče na ulici Ametystowa.',
      it: 'Una conferenza sulla Galleria degli Uffizi ha portato Botticelli, Michelangelo e Leonardo nella casa di assistenza sociale di via Ametystowa.'
    },
    body: {
      en: [
        'On 18 November a special meeting took place at the Social Welfare Home on Ametystowa Street in Lublin. Our Foundation invited Barbara Czajkowska, an experienced art curator, who led a talk about the collections of a major museum in Florence — the Galleria degli Uffizi.',
        'She spoke about works by artists such as Botticelli, Michelangelo and Leonardo da Vinci, explaining their stories in a clear and engaging way. She also described how these artworks ended up in Florence and what makes this museum so important today.',
        'Residents listened with great interest, and many said they felt as if they were actually there, walking through the museum halls and seeing the art with their own eyes. We are glad we could bring a piece of Florence to Ametystowa Street and make the day a bit more special.'
      ],
      pl: [
        '18 listopada w Domu Pomocy Społecznej przy ul. Ametystowej w Lublinie odbyło się wyjątkowe spotkanie. Nasza Fundacja zaprosiła Barbarę Czajkowską, doświadczoną kustosz, która poprowadziła opowieść o zbiorach jednego z najważniejszych muzeów Florencji — Galerii Uffizi.',
        'Opowiadała o dziełach artystów takich jak Botticelli, Michał Anioł i Leonardo da Vinci, przystępnie i zajmująco wyjaśniając ich historie. Opisała też, jak te dzieła trafiły do Florencji i co czyni to muzeum tak ważnym dzisiaj.',
        'Mieszkańcy słuchali z ogromnym zainteresowaniem, a wielu mówiło, że czuli się, jakby naprawdę tam byli — spacerowali po salach muzeum i oglądali sztukę na własne oczy. Cieszymy się, że mogliśmy przenieść kawałek Florencji na ulicę Ametystową.'
      ],
      cz: [
        '18. listopadu se v domově sociální péče na ulici Ametystowa v Lublinu konalo zvláštní setkání. Naše nadace pozvala Barbaru Czajkowskou, zkušenou kurátorku, která vedla vyprávění o sbírkách jednoho z nejvýznamnějších muzeí Florencie — Galerie Uffizi.',
        'Hovořila o dílech umělců jako Botticelli, Michelangelo a Leonardo da Vinci a jasně a poutavě vysvětlovala jejich příběhy. Popsala také, jak se tato díla dostala do Florencie a co dělá toto muzeum tak významným dodnes.',
        'Obyvatelé poslouchali s velkým zájmem a mnozí říkali, že se cítili, jako by tam skutečně byli — procházeli sály muzea a viděli umění na vlastní oči. Jsme rádi, že jsme mohli přinést kousek Florencie na ulici Ametystowa.'
      ],
      it: [
        'Il 18 novembre si è svolto un incontro speciale nella casa di assistenza sociale di via Ametystowa a Lublino. La nostra Fondazione ha invitato Barbara Czajkowska, esperta curatrice d\u2019arte, che ha guidato una conferenza sulle collezioni di un grande museo di Firenze — la Galleria degli Uffizi.',
        'Ha parlato di opere di artisti come Botticelli, Michelangelo e Leonardo da Vinci, spiegandone le storie in modo chiaro e coinvolgente. Ha anche raccontato come queste opere siano arrivate a Firenze e cosa renda questo museo così importante oggi.',
        'I residenti hanno ascoltato con grande interesse e molti hanno detto di essersi sentiti come se fossero davvero lì, camminando per le sale del museo. Siamo felici di aver portato un pezzo di Firenze in via Ametystowa.'
      ]
    }
  },
  {
    id: 'castlehill', ts: '2025-10-24', cat: 'art', img: '/uploads/news-castlehill.jpg',
    date: { en: '24 October 2025', pl: '24 października 2025', cz: '24. října 2025', it: '24 ottobre 2025' },
    title: {
      en: 'Anna Czajczyk leads a history session for seniors at City Hall',
      pl: 'Anna Czajczyk prowadzi spotkanie historyczne dla seniorów w ratuszu',
      cz: 'Anna Czajczyk vede historické setkání pro seniory na radnici',
      it: 'Anna Czajczyk guida una sessione di storia per anziani al municipio'
    },
    lead: {
      en: 'A talk about the history of Lublin\u2019s Castle Hill — from the medieval stronghold to the Chapel of the Holy Trinity.',
      pl: 'Opowieść o historii lubelskiego Wzgórza Zamkowego — od średniowiecznego grodu po Kaplicę Trójcy Świętej.',
      cz: 'Vyprávění o historii lublinského Zámeckého vrchu — od středověkého hradiště po kapli Nejsvětější Trojice.',
      it: 'Una conferenza sulla storia della Collina del Castello di Lublino — dalla fortezza medievale alla Cappella della Santissima Trinità.'
    },
    body: {
      en: [
        'On October 24, an event for seniors was held at the City Hall, featuring Anna Czajczyk, an experienced art curator. She led a talk about the history of Lublin\u2019s Castle Hill, focusing on how the site changed over the centuries.',
        'She spoke about the origins of the medieval stronghold, the construction of the Gothic tower, and the later transformation of the castle into a prison in the 19th and 20th century. She also explained how the Chapel of the Holy Trinity became one of the most important monuments of Polish medieval art.',
        'Participants appreciated the chance to learn about local history in a clear and accessible way.'
      ],
      pl: [
        '24 października w ratuszu odbyło się wydarzenie dla seniorów z udziałem Anny Czajczyk, doświadczonej kustosz. Poprowadziła opowieść o historii lubelskiego Wzgórza Zamkowego, skupiając się na tym, jak to miejsce zmieniało się przez wieki.',
        'Mówiła o początkach średniowiecznego grodu, budowie gotyckiej wieży i późniejszym przekształceniu zamku w więzienie w XIX i XX wieku. Wyjaśniła też, jak Kaplica Trójcy Świętej stała się jednym z najważniejszych zabytków polskiej sztuki średniowiecznej.',
        'Uczestnicy docenili możliwość poznania lokalnej historii w przystępny i klarowny sposób.'
      ],
      cz: [
        '24. října se na radnici konala akce pro seniory s Annou Czajczyk, zkušenou kurátorkou. Vedla vyprávění o historii lublinského Zámeckého vrchu se zaměřením na to, jak se toto místo měnilo v průběhu staletí.',
        'Hovořila o počátcích středověkého hradiště, stavbě gotické věže a pozdější přeměně hradu ve vězení v 19. a 20. století. Vysvětlila také, jak se kaple Nejsvětější Trojice stala jednou z nejvýznamnějších památek polského středověkého umění.',
        'Účastníci ocenili možnost poznat místní historii jasným a přístupným způsobem.'
      ],
      it: [
        'Il 24 ottobre si è tenuto al municipio un evento per anziani con Anna Czajczyk, esperta curatrice d\u2019arte. Ha guidato una conferenza sulla storia della Collina del Castello di Lublino, concentrandosi su come il luogo sia cambiato nei secoli.',
        'Ha parlato delle origini della fortezza medievale, della costruzione della torre gotica e della successiva trasformazione del castello in prigione nel XIX e XX secolo. Ha anche spiegato come la Cappella della Santissima Trinità sia diventata uno dei più importanti monumenti dell\u2019arte medievale polacca.',
        'I partecipanti hanno apprezzato la possibilità di conoscere la storia locale in modo chiaro e accessibile.'
      ]
    }
  },
  {
    id: 'sisan', ts: '2024-10-29', cat: 'community', img: '/uploads/sisan-bridge.jpg', images: ['/uploads/sisan-bridge.jpg', '/uploads/sisan-work.jpg'],
    date: { en: 'October 2024', pl: 'Październik 2024', cz: 'Říjen 2024', it: 'Ottobre 2024' },
    title: {
      en: 'Flavours of Change grants: a community initiative in Šišan, Croatia',
      pl: 'Granty Flavours of Change: inicjatywa społeczna w Šišan w Chorwacji',
      cz: 'Granty Flavours of Change: komunitní iniciativa v Šišanu v Chorvatsku',
      it: 'Borse Flavours of Change: un\u2019iniziativa comunitaria a Šišan, in Croazia'
    },
    lead: {
      en: 'In Šišan, Croatia, the local kindergarten \u201eBubamara\u201d was transformed into a vibrant space for education and play through a community-driven project.',
      pl: 'W chorwackim Šišan lokalne przedszkole \u201eBubamara\u201d zmieniło się w tętniącą życiem przestrzeń edukacji i zabawy dzięki projektowi społeczności.',
      cz: 'V chorvatském Šišanu se místní školka \u201eBubamara\u201d proměnila v živý prostor pro vzdělávání a hru díky komunitnímu projektu.',
      it: 'A Šišan, in Croazia, l\u2019asilo locale \u201eBubamara\u201d è stato trasformato in un vivace spazio di educazione e gioco grazie a un progetto della comunità.'
    },
    body: {
      en: [
        'In Šišan, Croatia, the local kindergarten \u201eBubamara\u201d was transformed into a vibrant space for education and play through a community-driven project involving 24 volunteers, educators and residents. Funded partly by the Stock Foundation, the project focused on creating a wooden bridge, planting Mediterranean greenery, and adding colorful finishing touches.',
        'The initiative brought together parents, staff and professionals to complete 159 hours of work — including 40 hours of preparation, 64 hours of construction and landscaping, and 76 hours for planting and final details.',
        'The result is a play area that doubles as an educational space, fostering creativity, teamwork and environmental awareness.'
      ],
      pl: [
        'W chorwackim Šišan lokalne przedszkole \u201eBubamara\u201d zostało przekształcone w tętniącą życiem przestrzeń edukacji i zabawy dzięki projektowi społeczności, w który zaangażowało się 24 wolontariuszy, wychowawców i mieszkańców. Projekt, częściowo sfinansowany przez Fundację Stock, objął budowę drewnianego mostku, sadzenie śródziemnomorskiej zieleni i kolorowe wykończenia.',
        'Inicjatywa połączyła rodziców, kadrę i specjalistów — łącznie 159 godzin pracy: 40 godzin przygotowań, 64 godziny budowy i prac ogrodowych oraz 76 godzin sadzenia i wykończeń.',
        'Efektem jest plac zabaw pełniący jednocześnie funkcję przestrzeni edukacyjnej — rozwijającej kreatywność, pracę zespołową i świadomość ekologiczną.'
      ],
      cz: [
        'V chorvatském Šišanu byla místní školka \u201eBubamara\u201d proměněna v živý prostor pro vzdělávání a hru díky komunitnímu projektu, do něhož se zapojilo 24 dobrovolníků, pedagogů a obyvatel. Projekt, částečně financovaný Nadací Stock, zahrnoval stavbu dřevěného mostku, výsadbu středomořské zeleně a barevné dokončovací práce.',
        'Iniciativa spojila rodiče, personál a odborníky — celkem 159 hodin práce: 40 hodin příprav, 64 hodin stavby a terénních úprav a 76 hodin výsadby a závěrečných detailů.',
        'Výsledkem je hřiště, které slouží zároveň jako vzdělávací prostor — rozvíjí kreativitu, týmovou práci a ekologické povědomí.'
      ],
      it: [
        'A Šišan, in Croazia, l\u2019asilo locale \u201eBubamara\u201d è stato trasformato in un vivace spazio di educazione e gioco grazie a un progetto guidato dalla comunità con 24 volontari, educatori e residenti. Finanziato in parte dalla Fondazione Stock, il progetto ha riguardato la costruzione di un ponte di legno, la piantumazione di verde mediterraneo e colorati tocchi finali.',
        'L\u2019iniziativa ha riunito genitori, personale e professionisti per completare 159 ore di lavoro — di cui 40 di preparazione, 64 di costruzione e sistemazione del verde e 76 di piantumazione e dettagli finali.',
        'Il risultato è un\u2019area giochi che è anche uno spazio educativo, che favorisce creatività, lavoro di squadra e consapevolezza ambientale.'
      ]
    }
  },
  {
    id: 'cleanup', ts: '2025-09-19', cat: 'community', img: '/uploads/news-cleanup.jpg',
    date: { en: '19 September 2025', pl: '19 września 2025', cz: '19. září 2025', it: '19 settembre 2025' },
    title: {
      en: 'Stock volunteers collected nearly 3 tons of waste',
      pl: 'Wolontariusze Stock zebrali blisko 3 tony odpadów',
      cz: 'Dobrovolníci Stock sesbírali téměř 3 tuny odpadu',
      it: 'I volontari Stock hanno raccolto quasi 3 tonnellate di rifiuti'
    },
    lead: {
      en: 'The Stock Foundation organized a major clean-up of the Vistula River together with volunteers from the Warsaw office.',
      pl: 'Fundacja Stock zorganizowała wielkie sprzątanie Wisły wspólnie z wolontariuszami z warszawskiego biura.',
      cz: 'Nadace Stock uspořádala velký úklid Visly společně s dobrovolníky z varšavské kanceláře.',
      it: 'La Fondazione Stock ha organizzato una grande pulizia della Vistola insieme ai volontari dell’ufficio di Varsavia.'
    },
    body: {
      en: [
        'On 19 September, the Stock Foundation organized a major clean-up of the Vistula River together with volunteers from our Warsaw office. A total of 60 volunteers joined forces to take care of the riverbanks — with great weather and even greater energy, our teams rolled up their sleeves and got to work, supported on-site by the dedicated team from “Czyste Rzeki”.',
        'In a friendly spirit of competition, participants formed five-person teams to compete for the title of “Cleaning Champions”. The winning group — Kubusie from Łódź — collected an impressive 100 kg of waste. Together, all teams removed nearly 3 tons of trash.',
        'The cleanup ran from 12:00 to 16:00, with volunteers equipped with gloves, bags, mosquito repellent and water, and four lifeguards ensuring everyone’s safety. After the work was done, we wrapped up the day with pizza and a moment to celebrate our shared success.',
        'Thank you to every volunteer for your commitment, energy and heart. Together, we make a real difference — and we look forward to doing it again next year.'
      ],
      pl: [
        '19 września Fundacja Stock zorganizowała wielkie sprzątanie Wisły wspólnie z wolontariuszami z naszego warszawskiego biura. Aż 60 wolontariuszy połączyło siły, by zadbać o brzegi rzeki — przy pięknej pogodzie i jeszcze większej energii nasze zespoły zakasały rękawy i wzięły się do pracy, wspierane na miejscu przez ekipę „Czystych Rzek”.',
        'W duchu przyjaznej rywalizacji uczestnicy utworzyli pięcioosobowe drużyny, walcząc o tytuł „Mistrzów Sprzątania”. Zwycięska grupa — Kubusie z Łodzi — zebrała imponujące 100 kg odpadów. Łącznie wszystkie zespoły usunęły blisko 3 tony śmieci.',
        'Sprzątanie trwało od 12:00 do 16:00, a wolontariusze zostali wyposażeni w rękawice, worki, środki na komary i wodę; nad bezpieczeństwem czuwało czterech ratowników. Po skończonej pracy zakończyliśmy dzień pizzą i chwilą świętowania wspólnego sukcesu.',
        'Dziękujemy każdemu wolontariuszowi za zaangażowanie, energię i serce. Razem robimy prawdziwą różnicę — i już nie możemy się doczekać kolejnej edycji za rok.'
      ],
      cz: [
        '19. září uspořádala Nadace Stock velký úklid Visly společně s dobrovolníky z naší varšavské kanceláře. Celkem 60 dobrovolníků spojilo síly, aby se postaralo o břehy řeky — za krásného počasí a s ještě větší energií si naše týmy vyhrnuly rukávy a pustily se do práce, na místě podporovány týmem „Czyste Rzeki“.',
        'V přátelském soutěžním duchu vytvořili účastníci pětičlenné týmy a bojovali o titul „Mistrů úklidu“. Vítězná skupina — Kubusie z Lodže — sesbírala úctyhodných 100 kg odpadu. Všechny týmy dohromady odstranily téměř 3 tuny odpadků.',
        'Úklid probíhal od 12:00 do 16:00; dobrovolníci dostali rukavice, pytle, repelent a vodu a na bezpečnost dohlíželi čtyři plavčíci. Po skončení práce jsme den zakončili pizzou a chvílí oslavy společného úspěchu.',
        'Děkujeme každému dobrovolníkovi za nasazení, energii a srdce. Společně děláme skutečný rozdíl — a už se těšíme na příští rok.'
      ],
      it: [
        'Il 19 settembre la Fondazione Stock ha organizzato una grande pulizia della Vistola insieme ai volontari del nostro ufficio di Varsavia. Ben 60 volontari hanno unito le forze per prendersi cura delle rive del fiume — con un tempo splendido e un’energia ancora più grande, i nostri team si sono rimboccati le maniche, supportati sul posto dal team di “Czyste Rzeki”.',
        'In uno spirito di amichevole competizione, i partecipanti hanno formato squadre di cinque persone per contendersi il titolo di “Campioni della Pulizia”. Il gruppo vincitore — i Kubusie di Łódź — ha raccolto ben 100 kg di rifiuti. Insieme, tutte le squadre hanno rimosso quasi 3 tonnellate di spazzatura.',
        'La pulizia si è svolta dalle 12:00 alle 16:00, con i volontari dotati di guanti, sacchi, repellente per zanzare e acqua, e quattro bagnini a garantire la sicurezza di tutti. A lavoro finito, abbiamo concluso la giornata con una pizza e un momento per celebrare il successo comune.',
        'Grazie a ogni volontario per l’impegno, l’energia e il cuore. Insieme facciamo davvero la differenza — e non vediamo l’ora di rifarlo l’anno prossimo.'
      ]
    }
  },
  {
    id: 'opp', ts: '2025-09-12', cat: 'community', img: '/uploads/news-opp.png',
    date: { en: '12 September 2025', pl: '12 września 2025', cz: '12. září 2025', it: '12 settembre 2025' },
    title: {
      en: 'Stock Foundation becomes a Public Benefit Organization (OPP)',
      pl: 'Fundacja Stock z oficjalnym statusem OPP',
      cz: 'Nadace Stock získala status veřejně prospěšné organizace (OPP)',
      it: 'La Fondazione Stock diventa Organizzazione di Pubblica Utilità (OPP)'
    },
    lead: {
      en: 'We are proud to share that the Stock Foundation has officially obtained the status of a Public Benefit Organization.',
      pl: 'Z dumą informujemy, że Fundacja Stock oficjalnie uzyskała status Organizacji Pożytku Publicznego.',
      cz: 'S hrdostí oznamujeme, že Nadace Stock oficiálně získala status veřejně prospěšné organizace.',
      it: 'Siamo orgogliosi di annunciare che la Fondazione Stock ha ufficialmente ottenuto lo status di Organizzazione di Pubblica Utilità.'
    },
    body: {
      en: [
        'We are proud to share that the Stock Foundation has officially obtained the status of a Public Benefit Organization (OPP). This designation is granted to institutions that meet strict legal and organizational standards and operate with full transparency and professionalism.',
        'With this status we reaffirm our credibility and openness to donors, partners and the public. We can now receive 1.5% of personal income tax contributions in Poland, and we gain access to new public grants and funding opportunities.',
        'The OPP status also strengthens our position in cooperation with institutions, partner organizations and volunteers. This is an important milestone in the development of the Stock Foundation, enabling us to act even more effectively and better serve our community.'
      ],
      pl: [
        'Z dumą informujemy, że Fundacja Stock oficjalnie uzyskała status Organizacji Pożytku Publicznego (OPP). Status ten przyznawany jest instytucjom, które spełniają rygorystyczne standardy prawne i organizacyjne oraz działają w pełni przejrzyście i profesjonalnie.',
        'Dzięki temu statusowi potwierdzamy naszą wiarygodność i otwartość wobec darczyńców, partnerów i opinii publicznej. Możemy teraz otrzymywać 1,5% podatku dochodowego od osób fizycznych, zyskujemy też dostęp do nowych grantów publicznych i możliwości finansowania.',
        'Status OPP wzmacnia również naszą pozycję we współpracy z instytucjami, organizacjami partnerskimi i wolontariuszami. To ważny kamień milowy w rozwoju Fundacji Stock, który pozwala nam działać jeszcze skuteczniej i lepiej służyć naszej społeczności.'
      ],
      cz: [
        'S hrdostí oznamujeme, že Nadace Stock oficiálně získala status veřejně prospěšné organizace (OPP). Tento status je udělován institucím, které splňují přísné právní a organizační standardy a působí zcela transparentně a profesionálně.',
        'Tímto statusem potvrzujeme svou důvěryhodnost a otevřenost vůči dárcům, partnerům i veřejnosti. Nyní můžeme v Polsku přijímat 1,5 % z daně z příjmu fyzických osob a získáváme přístup k novým veřejným grantům a možnostem financování.',
        'Status OPP také posiluje naši pozici ve spolupráci s institucemi, partnerskými organizacemi a dobrovolníky. Je to důležitý milník v rozvoji Nadace Stock, který nám umožňuje jednat ještě efektivněji a lépe sloužit naší komunitě.'
      ],
      it: [
        'Siamo orgogliosi di annunciare che la Fondazione Stock ha ufficialmente ottenuto lo status di Organizzazione di Pubblica Utilità (OPP). Questa qualifica viene concessa alle istituzioni che soddisfano rigorosi standard legali e organizzativi e operano con piena trasparenza e professionalità.',
        'Con questo status riaffermiamo la nostra credibilità e apertura verso donatori, partner e pubblico. Possiamo ora ricevere l’1,5% delle imposte sul reddito delle persone fisiche in Polonia e otteniamo accesso a nuove sovvenzioni pubbliche e opportunità di finanziamento.',
        'Lo status OPP rafforza inoltre la nostra posizione nella cooperazione con istituzioni, organizzazioni partner e volontari. È una tappa importante nello sviluppo della Fondazione Stock, che ci permette di agire in modo ancora più efficace e di servire meglio la nostra comunità.'
      ]
    }
  },
  {
    id: 'dpsday', ts: '2025-06-16', cat: 'community', img: '/uploads/news-dpsday.jpg',
    date: { en: '16 June 2025', pl: '16 czerwca 2025', cz: '16. června 2025', it: '16 giugno 2025' },
    title: {
      en: 'A special day out for residents of the Kosmonautów care home',
      pl: 'Wyjątkowy spacer mieszkańców DPS przy ul. Kosmonautów',
      cz: 'Výjimečný výlet obyvatel domova na ulici Kosmonautów',
      it: 'Una giornata speciale per i residenti della casa di cura di via Kosmonautów'
    },
    lead: {
      en: 'For the first time, volunteers took wheelchair users from the care home on a long, joyful walk through the streets of Lublin.',
      pl: 'Po raz pierwszy wolontariusze zabrali mieszkańców poruszających się na wózkach na długi, radosny spacer ulicami Lublina.',
      cz: 'Dobrovolníci poprvé vzali obyvatele na vozíčcích na dlouhou, radostnou procházku ulicemi Lublinu.',
      it: 'Per la prima volta i volontari hanno portato i residenti in sedia a rotelle a una lunga e gioiosa passeggiata per le vie di Lublino.'
    },
    body: {
      en: [
        'The Stock Foundation had the honour of supporting a truly special initiative for people with disabilities living at the care home on Kosmonautów Street in Lublin.',
        'For the first time, a group of volunteers — including one from our Foundation — took residents using wheelchairs on a long and joyful walk through the city. The route started at the care home and led through Lublin’s streets, across the main pedestrian area, past Litewski Square, and all the way to Ludowy Park. After the walk, Foundation-sponsored minibuses brought everyone back safely.',
        'The atmosphere was cheerful and full of positive energy. It’s not every day that such an outing is possible, and it was clear how much it meant to the residents. Our volunteers came away with full hearts and the satisfaction of having brought a little sunshine into someone’s day. We’re grateful to have been part of this day — and we’re already looking forward to the next one.'
      ],
      pl: [
        'Fundacja Stock miała zaszczyt wesprzeć naprawdę wyjątkową inicjatywę dla osób z niepełnosprawnościami mieszkających w Domu Pomocy Społecznej przy ul. Kosmonautów w Lublinie.',
        'Po raz pierwszy grupa wolontariuszy — w tym jeden z naszej Fundacji — zabrała mieszkańców poruszających się na wózkach na długi, radosny spacer po mieście. Trasa zaczynała się przy DPS i prowadziła ulicami Lublina, przez deptak, obok placu Litewskiego, aż do Parku Ludowego. Po spacerze sponsorowane przez Fundację busy bezpiecznie odwiozły wszystkich z powrotem.',
        'Atmosfera była pogodna i pełna pozytywnej energii. Taka wyprawa nie zdarza się codziennie i było widać, jak wiele znaczyła dla mieszkańców. Nasi wolontariusze wrócili z pełnymi sercami i satysfakcją, że wnieśli trochę słońca w czyjś dzień. Jesteśmy wdzięczni, że mogliśmy być częścią tego dnia — i już czekamy na kolejny.'
      ],
      cz: [
        'Nadace Stock měla tu čest podpořit skutečně výjimečnou iniciativu pro osoby s postižením žijící v domově sociální péče na ulici Kosmonautów v Lublinu.',
        'Skupina dobrovolníků — včetně jednoho z naší nadace — poprvé vzala obyvatele na vozíčcích na dlouhou a radostnou procházku městem. Trasa začínala u domova a vedla ulicemi Lublinu, přes hlavní pěší zónu, kolem Litevského náměstí až do Lidového parku. Po procházce všechny bezpečně odvezly minibusy financované nadací.',
        'Atmosféra byla veselá a plná pozitivní energie. Takový výlet není možný každý den a bylo vidět, jak moc pro obyvatele znamenal. Naši dobrovolníci odcházeli s plným srdcem a s pocitem, že do něčího dne přinesli trochu slunce. Jsme vděční, že jsme mohli být součástí tohoto dne — a už se těšíme na další.'
      ],
      it: [
        'La Fondazione Stock ha avuto l’onore di sostenere un’iniziativa davvero speciale per le persone con disabilità che vivono nella casa di cura di via Kosmonautów a Lublino.',
        'Per la prima volta un gruppo di volontari — tra cui uno della nostra Fondazione — ha portato i residenti in sedia a rotelle a una lunga e gioiosa passeggiata per la città. Il percorso è partito dalla casa di cura e ha attraversato le vie di Lublino, l’area pedonale principale, piazza Litewski, fino al Parco Ludowy. Dopo la passeggiata, i minibus sponsorizzati dalla Fondazione hanno riportato tutti a casa in sicurezza.',
        'L’atmosfera era allegra e piena di energia positiva. Non capita tutti i giorni una simile uscita, ed era evidente quanto significasse per i residenti. I nostri volontari sono tornati con il cuore pieno e la soddisfazione di aver portato un po’ di sole nella giornata di qualcuno. Siamo grati di aver fatto parte di questa giornata — e non vediamo l’ora della prossima.'
      ]
    }
  },
  {
    id: 'training25', ts: '2025-05-28', cat: 'community', img: '/uploads/news-training25.jpg',
    date: { en: '28 May 2025', pl: '28 maja 2025', cz: '28. května 2025', it: '28 maggio 2025' },
    title: {
      en: 'Training day for social workers at the care home',
      pl: 'Dzień szkoleniowy dla pracowników socjalnych DPS',
      cz: 'Školicí den pro sociální pracovníky domova',
      it: 'Giornata di formazione per gli operatori sociali della casa di cura'
    },
    lead: {
      en: 'A session for the social work staff of the Social Welfare Home focused on supporting individuals at risk of addiction.',
      pl: 'Warsztaty dla kadry Domu Pomocy Społecznej poświęcone wspieraniu osób zagrożonych uzależnieniem.',
      cz: 'Setkání pro personál domova sociální péče zaměřené na podporu osob ohrožených závislostí.',
      it: 'Una sessione per il personale della casa di assistenza sociale dedicata al sostegno delle persone a rischio di dipendenza.'
    },
    body: {
      en: [
        'On May 28, the Stock Foundation organized another session for the social work staff of the Social Welfare Home for people with disabilities, focused on supporting individuals at risk of addiction.',
        'The workshop combined theoretical and practical elements: participants learned about the impact of addiction, analyzed case studies to identify warning signs, and engaged in a Q&A with our experienced therapists, Anna Kalbus and Jerzy Brożyna.',
        'This training is crucial because social workers are often the first to notice when someone is struggling. By deepening their understanding and honing their practical skills, the team will be better equipped to assist people in crisis and strengthen efforts in addiction prevention. Thank you to all the social workers who took part — your dedication helps create a safer and more supportive community.'
      ],
      pl: [
        '28 maja Fundacja Stock zorganizowała kolejne spotkanie dla kadry socjalnej Domu Pomocy Społecznej dla osób z niepełnosprawnościami, poświęcone wspieraniu osób zagrożonych uzależnieniem.',
        'Warsztaty łączyły elementy teoretyczne i praktyczne: uczestnicy poznali mechanizmy uzależnienia, analizowali studia przypadków, ucząc się rozpoznawać sygnały ostrzegawcze, oraz wzięli udział w sesji pytań i odpowiedzi z naszymi doświadczonymi terapeutami — Anną Kalbus i Jerzym Brożyną.',
        'To szkolenie jest kluczowe, bo pracownicy socjalni często jako pierwsi zauważają, że ktoś sobie nie radzi. Pogłębiając wiedzę i szlifując praktyczne umiejętności, zespół będzie lepiej przygotowany do pomocy osobom w kryzysie i wzmocni działania w zakresie profilaktyki uzależnień. Dziękujemy wszystkim pracownikom socjalnym za udział — wasze zaangażowanie pomaga tworzyć bezpieczniejszą i bardziej wspierającą społeczność.'
      ],
      cz: [
        '28. května uspořádala Nadace Stock další setkání pro sociální personál domova sociální péče pro osoby s postižením, zaměřené na podporu lidí ohrožených závislostí.',
        'Workshop kombinoval teoretické a praktické prvky: účastníci se seznámili s dopady závislosti, analyzovali případové studie, aby rozpoznali varovné signály, a zapojili se do diskuse s našimi zkušenými terapeuty Annou Kalbus a Jerzym Brożynou.',
        'Toto školení je klíčové, protože sociální pracovníci si často jako první všimnou, že se někdo potýká s problémy. Prohloubením znalostí a praktických dovedností bude tým lépe připraven pomáhat lidem v krizi a posilovat prevenci závislostí. Děkujeme všem sociálním pracovníkům za účast — vaše nasazení pomáhá vytvářet bezpečnější a podporující komunitu.'
      ],
      it: [
        'Il 28 maggio la Fondazione Stock ha organizzato un’altra sessione per il personale sociale della casa di assistenza per persone con disabilità, dedicata al sostegno delle persone a rischio di dipendenza.',
        'Il laboratorio ha unito elementi teorici e pratici: i partecipanti hanno appreso l’impatto delle dipendenze, analizzato casi di studio per riconoscere i segnali d’allarme e partecipato a un confronto con i nostri esperti terapeuti, Anna Kalbus e Jerzy Brożyna.',
        'Questa formazione è fondamentale perché gli operatori sociali sono spesso i primi ad accorgersi quando qualcuno è in difficoltà. Approfondendo la comprensione e affinando le competenze pratiche, il team sarà meglio preparato ad assistere le persone in crisi e a rafforzare la prevenzione delle dipendenze. Grazie a tutti gli operatori sociali che hanno partecipato — la vostra dedizione aiuta a creare una comunità più sicura e solidale.'
      ]
    }
  },
  {
    id: 'culturday', ts: '2025-04-09', cat: 'art', img: '/uploads/news-culturday.jpg',
    date: { en: '9 April 2025', pl: '9 kwietnia 2025', cz: '9. dubna 2025', it: '9 aprile 2025' },
    title: {
      en: 'A day of cultural encounters with the Stock Foundation',
      pl: 'Dzień kulturalnych spotkań z Fundacją Stock',
      cz: 'Den kulturních setkání s Nadací Stock',
      it: 'Una giornata di incontri culturali con la Fondazione Stock'
    },
    lead: {
      en: 'Polish patriotic painting and a virtual journey through the Vatican Museums — two art events in one day, for two different communities.',
      pl: 'Polskie malarstwo patriotyczne i wirtualna podróż po Muzeach Watykańskich — dwa wydarzenia jednego dnia, dla dwóch różnych społeczności.',
      cz: 'Polské vlastenecké malířství a virtuální cesta po Vatikánských muzeích — dvě umělecké akce v jednom dni, pro dvě různé komunity.',
      it: 'La pittura patriottica polacca e un viaggio virtuale nei Musei Vaticani — due eventi d’arte in un giorno, per due comunità diverse.'
    },
    body: {
      en: [
        'On April 9, the Stock Foundation organized two enriching art events, bringing the joy of art to two different communities.',
        'The first took place at a care home for individuals with disabilities, where Ms. Jolanta Polańska, an esteemed art curator from the National Museum, presented a digital exhibition highlighting patriotic themes in Polish painting. The session featured works by Jan Matejko and the Kossak family, offering residents a meaningful connection to national heritage.',
        'Later that day, Ms. Barbara Czajkowska, also from the National Museum, led a presentation at the City Hall on the Vatican Museums’ collections. The event, aimed at seniors, was very well received — many attendees said it felt as though they had personally toured the Vatican. We were honored by the presence of Lublin’s Deputy Mayor for Social Affairs, Anna Augustyniak, who attended the event.'
      ],
      pl: [
        '9 kwietnia Fundacja Stock zorganizowała dwa wzbogacające wydarzenia artystyczne, niosąc radość ze sztuki dwóm różnym społecznościom.',
        'Pierwsze odbyło się w domu opieki dla osób z niepełnosprawnościami, gdzie pani Jolanta Polańska, ceniona kustosz Muzeum Narodowego, zaprezentowała cyfrową wystawę poświęconą wątkom patriotycznym w polskim malarstwie. Pokaz obejmował dzieła Jana Matejki i rodziny Kossaków, dając mieszkańcom żywy kontakt z narodowym dziedzictwem.',
        'Tego samego dnia pani Barbara Czajkowska, również z Muzeum Narodowego, poprowadziła w ratuszu prezentację o zbiorach Muzeów Watykańskich. Wydarzenie skierowane do seniorów spotkało się z gorącym przyjęciem — wielu uczestników mówiło, że czuli się, jakby osobiście zwiedzili Watykan. Zaszczyciła nas obecność zastępczyni prezydenta Lublina ds. społecznych, pani Anny Augustyniak.'
      ],
      cz: [
        '9. dubna uspořádala Nadace Stock dvě obohacující umělecké akce a přinesla radost z umění dvěma různým komunitám.',
        'První se konala v domově pro osoby s postižením, kde paní Jolanta Polańska, uznávaná kurátorka Národního muzea, představila digitální výstavu věnovanou vlasteneckým tématům v polském malířství. Prezentace zahrnovala díla Jana Matejky a rodiny Kossaků a nabídla obyvatelům živé spojení s národním dědictvím.',
        'Později téhož dne vedla paní Barbara Czajkowska, rovněž z Národního muzea, na radnici prezentaci o sbírkách Vatikánských muzeí. Akce určená seniorům se setkala s vřelým přijetím — mnozí účastníci říkali, že měli pocit, jako by Vatikán osobně navštívili. Poctila nás přítomnost zástupkyně primátora Lublinu pro sociální věci, paní Anny Augustyniak.'
      ],
      it: [
        'Il 9 aprile la Fondazione Stock ha organizzato due arricchenti eventi artistici, portando la gioia dell’arte a due comunità diverse.',
        'Il primo si è svolto in una casa di cura per persone con disabilità, dove la signora Jolanta Polańska, stimata curatrice del Museo Nazionale, ha presentato una mostra digitale dedicata ai temi patriottici nella pittura polacca. La sessione ha incluso opere di Jan Matejko e della famiglia Kossak, offrendo ai residenti un legame significativo con il patrimonio nazionale.',
        'Più tardi, lo stesso giorno, la signora Barbara Czajkowska, anche lei del Museo Nazionale, ha tenuto al municipio una presentazione sulle collezioni dei Musei Vaticani. L’evento, rivolto agli anziani, è stato accolto con entusiasmo — molti partecipanti hanno detto di essersi sentiti come se avessero visitato personalmente il Vaticano. Siamo stati onorati dalla presenza della vicesindaca di Lublino per gli affari sociali, Anna Augustyniak.'
      ]
    }
  },
  {
    id: 'dpsart', ts: '2025-02-20', cat: 'art', img: '/uploads/news-dpsart.jpg',
    date: { en: '20 February 2025', pl: '20 lutego 2025', cz: '20. února 2025', it: '20 febbraio 2025' },
    title: {
      en: 'Partnering with a Lublin care home to bring art to residents',
      pl: 'Partnerstwo z lubelskim DPS — sztuka dla mieszkańców',
      cz: 'Partnerství s lublinským domovem — umění pro obyvatele',
      it: 'Partnership con una casa di cura di Lublino per portare l’arte ai residenti'
    },
    lead: {
      en: 'A new partnership with the Social Welfare Home at Kosmonautów Street begins with a multimedia journey through the masterpieces of the Louvre.',
      pl: 'Nowe partnerstwo z Domem Pomocy Społecznej przy ul. Kosmonautów rozpoczyna multimedialna podróż po arcydziełach Luwru.',
      cz: 'Nové partnerství s domovem sociální péče na ulici Kosmonautów začíná multimediální cestou po mistrovských dílech Louvru.',
      it: 'Una nuova partnership con la casa di assistenza sociale di via Kosmonautów inizia con un viaggio multimediale tra i capolavori del Louvre.'
    },
    body: {
      en: [
        'The Stock Foundation announced a new partnership with the Social Welfare Home for Physically Disabled Individuals, located at 78 Kosmonautów Street in Lublin. This collaboration aims to enrich the cultural experiences of the home’s residents through a series of art-focused events.',
        'The Social Welfare Home specializes in providing care and rehabilitation for adults with physical disabilities, including conditions such as multiple sclerosis, spinal cord injuries, traumatic brain injuries, post-stroke states and muscular dystrophy. The facility accommodates 90 residents, most of whom use wheelchairs, and offers daily care, medical supervision, physical rehabilitation and occupational therapy.',
        'The partnership commenced with an event titled “Encounter with Art”, held in the home’s main hall. Magdalena Norkowska, a distinguished curator from the National Museum in Lublin, delivered an engaging multimedia presentation showcasing masterpieces from the Louvre. The event attracted nearly 40 participants, all of whom expressed great enthusiasm and appreciation.',
        'Building on this success, the Stock Foundation and the Social Welfare Home plan to continue organizing similar art events, giving residents ongoing opportunities to engage with and appreciate art.'
      ],
      pl: [
        'Fundacja Stock ogłosiła nowe partnerstwo z Domem Pomocy Społecznej dla Osób Niepełnosprawnych Fizycznie przy ul. Kosmonautów 78 w Lublinie. Współpraca ma wzbogacić życie kulturalne mieszkańców poprzez cykl wydarzeń poświęconych sztuce.',
        'DPS specjalizuje się w opiece i rehabilitacji dorosłych z niepełnosprawnościami ruchowymi — m.in. ze stwardnieniem rozsianym, urazami rdzenia kręgowego, urazami mózgu, stanami po udarach i dystrofią mięśniową. Placówka mieści 90 mieszkańców, w większości poruszających się na wózkach, i zapewnia codzienną opiekę, nadzór medyczny, rehabilitację oraz terapię zajęciową.',
        'Partnerstwo zainaugurowało wydarzenie „Spotkanie ze Sztuką” w głównej sali domu. Magdalena Norkowska, znakomita kustosz Muzeum Narodowego w Lublinie, poprowadziła wciągającą multimedialną prezentację arcydzieł Luwru. W wydarzeniu wzięło udział blisko 40 uczestników, którzy przyjęli je z ogromnym entuzjazmem.',
        'Zachęcone tym sukcesem Fundacja Stock i DPS planują kontynuować podobne wydarzenia, dając mieszkańcom stały kontakt ze sztuką.'
      ],
      cz: [
        'Nadace Stock oznámila nové partnerství s domovem sociální péče pro osoby s tělesným postižením na ulici Kosmonautów 78 v Lublinu. Cílem spolupráce je obohatit kulturní život obyvatel prostřednictvím série uměleckých akcí.',
        'Domov se specializuje na péči a rehabilitaci dospělých s tělesným postižením — mimo jiné s roztroušenou sklerózou, poraněními míchy, úrazy mozku, stavy po mrtvici a svalovou dystrofií. Zařízení má 90 obyvatel, většina z nich používá invalidní vozík, a poskytuje každodenní péči, lékařský dohled, rehabilitaci a ergoterapii.',
        'Partnerství zahájila akce „Setkání s uměním“ v hlavním sále domova. Magdalena Norkowska, vynikající kurátorka Národního muzea v Lublinu, přednesla poutavou multimediální prezentaci mistrovských děl Louvru. Akce přilákala téměř 40 účastníků, kteří ji přijali s velkým nadšením.',
        'V návaznosti na tento úspěch plánují Nadace Stock a domov pokračovat v podobných akcích a dávat obyvatelům trvalý kontakt s uměním.'
      ],
      it: [
        'La Fondazione Stock ha annunciato una nuova partnership con la Casa di Assistenza Sociale per Persone con Disabilità Fisiche, situata in via Kosmonautów 78 a Lublino. La collaborazione mira ad arricchire la vita culturale dei residenti attraverso una serie di eventi dedicati all’arte.',
        'La struttura è specializzata nella cura e riabilitazione di adulti con disabilità fisiche — tra cui sclerosi multipla, lesioni del midollo spinale, traumi cranici, esiti di ictus e distrofia muscolare. Ospita 90 residenti, la maggior parte dei quali usa la sedia a rotelle, e offre assistenza quotidiana, supervisione medica, riabilitazione e terapia occupazionale.',
        'La partnership è iniziata con l’evento “Incontro con l’Arte”, tenutosi nella sala principale della casa. Magdalena Norkowska, illustre curatrice del Museo Nazionale di Lublino, ha presentato un coinvolgente viaggio multimediale tra i capolavori del Louvre. L’evento ha attirato quasi 40 partecipanti, che lo hanno accolto con grande entusiasmo.',
        'Sulla scia di questo successo, la Fondazione Stock e la casa di assistenza intendono continuare a organizzare eventi simili, offrendo ai residenti un contatto costante con l’arte.'
      ]
    }
  },
  {
    id: 'matejko', ts: '2025-02-13', cat: 'art', img: '/uploads/news-matejko.jpg',
    date: { en: '13 February 2025', pl: '13 lutego 2025', cz: '13. února 2025', it: '13 febbraio 2025' },
    title: {
      en: 'Matejko — an Encounter with Art at the National Museum',
      pl: 'Matejko — Spotkanie ze Sztuką w Muzeum Narodowym',
      cz: 'Matejko — Setkání s uměním v Národním muzeu',
      it: 'Matejko — un Incontro con l’Arte al Museo Nazionale'
    },
    lead: {
      en: 'A journey through history and patriotism in the work of one of Poland’s greatest painters, organized with the Department of Social Initiatives.',
      pl: 'Podróż przez historię i patriotyzm w twórczości jednego z największych polskich malarzy, zorganizowana z Wydziałem Inicjatyw Społecznych.',
      cz: 'Cesta historií a vlastenectvím v díle jednoho z největších polských malířů, uspořádaná s odborem sociálních iniciativ.',
      it: 'Un viaggio nella storia e nel patriottismo nell’opera di uno dei più grandi pittori polacchi, organizzato con il Dipartimento delle Iniziative Sociali.'
    },
    body: {
      en: [
        'The National Museum hosted another Encounter with Art event, organized in cooperation with the Department of Social Initiatives of the City Hall. It was a unique opportunity to explore the work of one of Poland’s greatest painters — Jan Matejko — both a patriot and a visionary of Poland’s past. The event was attended by individuals who require daily assistance and have limited access to art; by co-organizing it, the Stock Foundation is embracing a new direction in its activities and will be funding more such events throughout the year.',
        'Jolanta Polańska, a curator from the National Museum, took the participants on a journey through history, patriotism and the remarkable vision of the artist. The meeting began with a screening in the museum’s cinema hall, featuring a presentation on Matejko — not only as a painter but also as a visionary shaping Poland’s historical narrative.',
        'The second part was a visit to the Gallery of Polish Painting, where attendees stopped at two of Matejko’s masterpieces, including The Union of Lublin. These works served as an example of how the artist recreated and shaped the past — a unique opportunity to see history through the eyes of a great artist.'
      ],
      pl: [
        'Muzeum Narodowe gościło kolejne Spotkanie ze Sztuką, zorganizowane we współpracy z Wydziałem Inicjatyw Społecznych ratusza. Była to wyjątkowa okazja, by poznać twórczość jednego z największych polskich malarzy — Jana Matejki — patrioty i wizjonera polskiej przeszłości. W wydarzeniu wzięły udział osoby wymagające codziennego wsparcia, mające ograniczony dostęp do sztuki; współorganizując je, Fundacja Stock otwiera nowy kierunek działań i będzie finansować kolejne takie wydarzenia przez cały rok.',
        'Jolanta Polańska, kustosz Muzeum Narodowego, zabrała uczestników w podróż przez historię, patriotyzm i niezwykłą wizję artysty. Spotkanie rozpoczął pokaz w sali kinowej muzeum — prezentacja o Matejce nie tylko jako malarzu, ale i wizjonerze kształtującym narodową opowieść o przeszłości.',
        'Drugą częścią była wizyta w Galerii Malarstwa Polskiego, gdzie uczestnicy zatrzymali się przy dwóch arcydziełach Matejki, w tym przy „Unii Lubelskiej”. Dzieła te pokazały, jak artysta odtwarzał i kształtował przeszłość — to była wyjątkowa okazja, by zobaczyć historię oczami wielkiego twórcy.'
      ],
      cz: [
        'Národní muzeum hostilo další Setkání s uměním, uspořádané ve spolupráci s odborem sociálních iniciativ radnice. Byla to jedinečná příležitost poznat dílo jednoho z největších polských malířů — Jana Matejky — vlastence a vizionáře polské minulosti. Akce se zúčastnili lidé, kteří potřebují každodenní pomoc a mají omezený přístup k umění; spolupořádáním této akce Nadace Stock otevírá nový směr své činnosti a bude podobné akce financovat po celý rok.',
        'Jolanta Polańska, kurátorka Národního muzea, vzala účastníky na cestu historií, vlastenectvím a pozoruhodnou vizí umělce. Setkání zahájila projekce v kinosále muzea — prezentace o Matejkovi nejen jako malíři, ale i vizionáři formujícím polské historické vyprávění.',
        'Druhou částí byla návštěva Galerie polského malířství, kde se účastníci zastavili u dvou Matejkových mistrovských děl, včetně „Lublinské unie“. Tato díla ukázala, jak umělec znovu vytvářel a formoval minulost — jedinečná příležitost vidět dějiny očima velkého tvůrce.'
      ],
      it: [
        'Il Museo Nazionale ha ospitato un altro Incontro con l’Arte, organizzato in collaborazione con il Dipartimento delle Iniziative Sociali del municipio. È stata un’occasione unica per esplorare l’opera di uno dei più grandi pittori polacchi — Jan Matejko — patriota e visionario del passato della Polonia. All’evento hanno partecipato persone che necessitano di assistenza quotidiana e hanno un accesso limitato all’arte; co-organizzandolo, la Fondazione Stock apre una nuova direzione delle sue attività e finanzierà altri eventi simili durante l’anno.',
        'Jolanta Polańska, curatrice del Museo Nazionale, ha condotto i partecipanti in un viaggio attraverso la storia, il patriottismo e la straordinaria visione dell’artista. L’incontro è iniziato con una proiezione nella sala cinema del museo — una presentazione su Matejko non solo come pittore, ma anche come visionario che ha plasmato la narrazione storica polacca.',
        'La seconda parte è stata la visita alla Galleria della Pittura Polacca, dove i partecipanti si sono fermati davanti a due capolavori di Matejko, tra cui “L’Unione di Lublino”. Queste opere hanno mostrato come l’artista ricreava e plasmava il passato — un’occasione unica per vedere la storia con gli occhi di un grande artista.'
      ]
    }
  },
  {
    id: 'louvre', ts: '2024-10-02', cat: 'art', img: '/uploads/news-louvre.jpg',
    date: { en: 'October 2024', pl: 'Październik 2024', cz: 'Říjen 2024', it: 'Ottobre 2024' },
    title: {
      en: 'Encounters with Art — between the Louvre and Versailles',
      pl: 'Spotkania ze Sztuką — między Luwrem a Wersalem',
      cz: 'Setkání s uměním — mezi Louvrem a Versailles',
      it: 'Incontri con l’Arte — tra il Louvre e Versailles'
    },
    lead: {
      en: 'Curator Magdalena Norkowska took senior citizens on a journey to the residence of the Sun King, in one of the representative rooms of the City Hall.',
      pl: 'Kustosz Magdalena Norkowska zabrała seniorów w podróż do rezydencji Króla Słońce, w jednej z reprezentacyjnych sal ratusza.',
      cz: 'Kurátorka Magdalena Norkowska vzala seniory na cestu do rezidence Krále Slunce v jednom z reprezentativních sálů radnice.',
      it: 'La curatrice Magdalena Norkowska ha portato gli anziani in viaggio verso la residenza del Re Sole, in una delle sale di rappresentanza del municipio.'
    },
    body: {
      en: [
        'The Encounters with Art project, carried out jointly with the City Hall and the National Museum in Lublin for senior citizens, is developing dynamically. We would like to thank Ms Anna Augustyniak, Deputy Mayor of Lublin for Social Affairs, and Mr Sławomir Skowronek from the Department of Social Initiatives and Programmes for opening the meeting. The project attracted another outstanding curator, Ms Magdalena Norkowska, who gave a lecture entitled “Between the Louvre and Versailles” in one of the representative rooms of the City Hall.',
        'Participants learned about the history of Versailles — its origins and its role as the seat of the monarch, along with the historical background of the state under Louis XIV. They saw the monuments that can still be admired today in the residence, which became the king’s official home in the second half of the 17th century after a major reconstruction. Louis XIV moved to Versailles in 1682 and gradually transferred the royal court there; the palace became the largest in Europe and, as one of the finest works of Classical Baroque, took over from Paris as the capital of France.',
        'The history of the palace generated great interest among the participants, and after the lecture there was time for questions, followed by a small refreshment.'
      ],
      pl: [
        'Projekt Spotkań ze Sztuką, realizowany wspólnie z ratuszem i Muzeum Narodowym w Lublinie z myślą o seniorach, rozwija się dynamicznie. Dziękujemy pani Annie Augustyniak, zastępczyni prezydenta Lublina ds. społecznych, oraz panu Sławomirowi Skowronkowi z Wydziału Inicjatyw i Programów Społecznych za otwarcie spotkania. Projekt przyciągnął kolejną wybitną kustosz — panią Magdalenę Norkowską, która w jednej z reprezentacyjnych sal ratusza wygłosiła wykład „Między Luwrem a Wersalem”.',
        'Uczestnicy poznali historię Wersalu — jego początki i rolę jako siedziby monarchy, wraz z tłem historycznym państwa za panowania Ludwika XIV. Zobaczyli zabytki, które do dziś można podziwiać w rezydencji, będącej oficjalną siedzibą króla od drugiej połowy XVII wieku, po wielkiej przebudowie pałacu. Ludwik XIV przeniósł się do Wersalu w 1682 roku i stopniowo przeniósł tam dwór królewski; pałac stał się największym w Europie, a jako jedno z najświetniejszych dzieł klasycystycznego baroku przejął od Paryża rolę stolicy Francji.',
        'Historia pałacu wzbudziła ogromne zainteresowanie uczestników, a po wykładzie był czas na pytania i mały poczęstunek.'
      ],
      cz: [
        'Projekt Setkání s uměním, realizovaný společně s radnicí a Národním muzeem v Lublinu pro seniory, se dynamicky rozvíjí. Děkujeme paní Anně Augustyniak, zástupkyni primátora Lublinu pro sociální věci, a panu Sławomiru Skowronkovi z odboru sociálních iniciativ a programů za zahájení setkání. Projekt přilákal další vynikající kurátorku — paní Magdalenu Norkowskou, která v jednom z reprezentativních sálů radnice přednesla přednášku „Mezi Louvrem a Versailles“.',
        'Účastníci se seznámili s historií Versailles — s jeho počátky a rolí sídla panovníka, spolu s historickým pozadím státu za vlády Ludvíka XIV. Viděli památky, které lze v rezidenci obdivovat dodnes; oficiálním sídlem krále se stala ve druhé polovině 17. století po velké přestavbě. Ludvík XIV. se do Versailles přestěhoval v roce 1682 a postupně tam přenesl královský dvůr; palác se stal největším v Evropě a jako jedno z nejskvělejších děl klasicistního baroka převzal od Paříže roli hlavního města Francie.',
        'Historie paláce vzbudila u účastníků velký zájem a po přednášce byl čas na dotazy a malé občerstvení.'
      ],
      it: [
        'Il progetto Incontri con l’Arte, realizzato insieme al municipio e al Museo Nazionale di Lublino per gli anziani, si sviluppa dinamicamente. Ringraziamo la signora Anna Augustyniak, vicesindaca di Lublino per gli affari sociali, e il signor Sławomir Skowronek del Dipartimento delle Iniziative e dei Programmi Sociali per aver aperto l’incontro. Il progetto ha attirato un’altra eccellente curatrice — la signora Magdalena Norkowska, che in una delle sale di rappresentanza del municipio ha tenuto la conferenza “Tra il Louvre e Versailles”.',
        'I partecipanti hanno conosciuto la storia di Versailles — le sue origini e il suo ruolo di sede del monarca, insieme al contesto storico dello Stato sotto Luigi XIV. Hanno visto i monumenti che ancora oggi si possono ammirare nella residenza, divenuta dimora ufficiale del re nella seconda metà del XVII secolo dopo una grande ricostruzione. Luigi XIV si trasferì a Versailles nel 1682 e vi spostò gradualmente la corte reale; il palazzo divenne il più grande d’Europa e, come una delle più belle opere del barocco classico, prese da Parigi il ruolo di capitale della Francia.',
        'La storia del palazzo ha suscitato grande interesse tra i partecipanti e, dopo la conferenza, c’è stato tempo per le domande, seguite da un piccolo rinfresco.'
      ]
    }
  },
  {
    id: 'training24', ts: '2024-09-02', cat: 'community', img: '/uploads/news-training24.jpg',
    date: { en: 'September 2024', pl: 'Wrzesień 2024', cz: 'Září 2024', it: 'Settembre 2024' },
    title: {
      en: 'Trainings for social workers — a new Foundation initiative',
      pl: 'Szkolenia dla pracowników socjalnych — nowa inicjatywa Fundacji',
      cz: 'Školení pro sociální pracovníky — nová iniciativa nadace',
      it: 'Formazione per gli operatori sociali — una nuova iniziativa della Fondazione'
    },
    lead: {
      en: 'Twenty-five social workers took part in the first trainings on supporting people at risk of addiction, led by psychologists Anna Kalbus and Jerzy Brożyna.',
      pl: 'Dwudziestu pięciu pracowników socjalnych wzięło udział w pierwszych szkoleniach ze wspierania osób zagrożonych uzależnieniem, prowadzonych przez psychologów Annę Kalbus i Jerzego Brożynę.',
      cz: 'Dvacet pět sociálních pracovníků se zúčastnilo prvních školení o podpoře osob ohrožených závislostí pod vedením psychologů Anny Kalbus a Jerzyho Brożyny.',
      it: 'Venticinque operatori sociali hanno partecipato alle prime formazioni sul sostegno alle persone a rischio di dipendenza, condotte dagli psicologi Anna Kalbus e Jerzy Brożyna.'
    },
    body: {
      en: [
        'Training for social workers in dealing with people at risk of addiction is a new initiative of the Stock Foundation, run in cooperation with the Support Centre Complex. Their social workers help dozens of people every day and come across cases that require good recognition, empathy and professional preparation. During the trainings, participants get to know the mechanisms of addiction development and gain knowledge of the available forms of assistance.',
        'Twenty-five people took part in the first trainings, led by our experienced psychologists, Ms Anna Kalbus and Mr Jerzy Brożyna. The sessions consisted of mini-lectures, psycho-education and a workshop part — group work and various types of exercises. Participants learnt how to work with people affected by addiction, how the family system functions when addiction is present, and strategies and techniques for helping such families.',
        'The training enabled them to acquire competences for better coping with difficult situations and to learn about their own resources and limitations. The workshop character encouraged active participation in discussions and exercises — participants now better understand the problem of addiction and can distinguish harmful behaviour from effective help.'
      ],
      pl: [
        'Szkolenia dla pracowników socjalnych z pracy z osobami zagrożonymi uzależnieniem to nowa inicjatywa Fundacji Stock, realizowana we współpracy z Zespołem Ośrodków Wsparcia. Tamtejsi pracownicy socjalni pomagają codziennie dziesiątkom osób i spotykają przypadki wymagające dobrego rozpoznania, empatii i profesjonalnego przygotowania. Podczas szkoleń uczestnicy poznają mechanizmy rozwoju uzależnienia i dostępne formy pomocy.',
        'W pierwszych szkoleniach wzięło udział dwadzieścia pięć osób, a poprowadzili je nasi doświadczeni psychologowie — pani Anna Kalbus i pan Jerzy Brożyna. Zajęcia składały się z mini-wykładów, psychoedukacji oraz części warsztatowej — pracy w grupach i różnego rodzaju ćwiczeń. Uczestnicy uczyli się, jak pracować z osobami uzależnionymi, jak funkcjonuje system rodzinny, w którym pojawia się uzależnienie, oraz poznawali strategie i techniki pomocy takim rodzinom.',
        'Szkolenie pozwoliło im zdobyć kompetencje do lepszego radzenia sobie w trudnych sytuacjach oraz poznać własne zasoby i ograniczenia. Warsztatowy charakter zachęcał do aktywnego udziału w dyskusjach i ćwiczeniach — uczestnicy lepiej rozumieją teraz problem uzależnień i potrafią odróżnić zachowania szkodliwe od skutecznej pomocy.'
      ],
      cz: [
        'Školení sociálních pracovníků v práci s lidmi ohroženými závislostí je nová iniciativa Nadace Stock, realizovaná ve spolupráci s Komplexem podpůrných center. Tamní sociální pracovníci denně pomáhají desítkám lidí a setkávají se s případy, které vyžadují dobré rozpoznání, empatii a profesionální přípravu. Během školení se účastníci seznamují s mechanismy rozvoje závislosti a s dostupnými formami pomoci.',
        'Prvních školení se zúčastnilo dvacet pět osob a vedli je naši zkušení psychologové — paní Anna Kalbus a pan Jerzy Brożyna. Lekce se skládaly z mini-přednášek, psychoedukace a workshopové části — skupinové práce a různých cvičení. Účastníci se učili, jak pracovat s lidmi se závislostí, jak funguje rodinný systém, v němž se závislost objevuje, a poznávali strategie a techniky pomoci takovým rodinám.',
        'Školení jim umožnilo získat kompetence pro lepší zvládání obtížných situací a poznat vlastní zdroje i limity. Workshopový charakter podporoval aktivní účast v diskusích a cvičeních — účastníci nyní lépe rozumějí problému závislostí a dokážou odlišit škodlivé chování od účinné pomoci.'
      ],
      it: [
        'La formazione degli operatori sociali nel lavoro con persone a rischio di dipendenza è una nuova iniziativa della Fondazione Stock, realizzata in collaborazione con il Complesso dei Centri di Sostegno. I loro operatori aiutano ogni giorno decine di persone e incontrano casi che richiedono buona capacità di riconoscimento, empatia e preparazione professionale. Durante le formazioni i partecipanti conoscono i meccanismi di sviluppo delle dipendenze e le forme di aiuto disponibili.',
        'Alle prime formazioni hanno partecipato venticinque persone, guidate dai nostri esperti psicologi — la signora Anna Kalbus e il signor Jerzy Brożyna. Le sessioni comprendevano mini-lezioni, psicoeducazione e una parte laboratoriale — lavoro di gruppo e vari tipi di esercizi. I partecipanti hanno imparato come lavorare con le persone dipendenti, come funziona il sistema familiare in presenza di una dipendenza, e strategie e tecniche per aiutare queste famiglie.',
        'La formazione ha permesso loro di acquisire competenze per affrontare meglio le situazioni difficili e di conoscere le proprie risorse e i propri limiti. Il carattere laboratoriale ha incoraggiato la partecipazione attiva a discussioni ed esercizi — ora i partecipanti comprendono meglio il problema delle dipendenze e sanno distinguere i comportamenti dannosi dall’aiuto efficace.'
      ]
    }
  },
  {
    id: 'musicprog', ts: '2024-08-25', cat: 'scholar', img: '/uploads/news-musicprog.jpg',
    date: { en: 'August 2024', pl: 'Sierpień 2024', cz: 'Srpen 2024', it: 'Agosto 2024' },
    title: {
      en: 'Musical scholarship — an exceptional guitar for our students',
      pl: 'Stypendia muzyczne — wyjątkowa gitara dla naszych podopiecznych',
      cz: 'Hudební stipendia — výjimečná kytara pro naše studenty',
      it: 'Borse di studio musicali — una chitarra eccezionale per i nostri studenti'
    },
    lead: {
      en: 'An anonymous volunteer donated a remarkable electric guitar, crafted in 1993 by the outstanding luthier Maciej Mensfeld, for the youth in our scholarship programme.',
      pl: 'Anonimowy wolontariusz przekazał młodzieży z naszego programu stypendialnego niezwykłą gitarę elektryczną, wykonaną w 1993 roku przez wybitnego lutnika Macieja Mensfelda.',
      cz: 'Anonymní dobrovolník věnoval mládeži z našeho stipendijního programu pozoruhodnou elektrickou kytaru, vyrobenou v roce 1993 vynikajícím houslařem Maciejem Mensfeldem.',
      it: 'Un volontario anonimo ha donato ai giovani del nostro programma di borse di studio una straordinaria chitarra elettrica, realizzata nel 1993 dall’eccellente liutaio Maciej Mensfeld.'
    },
    body: {
      en: [
        'The Stock Foundation scholarship programme, run in Lublin together with Homo Faber, offers support to talented Ukrainian youth. Recently, one of our foundation’s volunteers, who wishes to remain anonymous, donated an exceptional electric guitar for the young people in the programme.',
        'It is a superb instrument characterised by the excellent quality of its workmanship and accessories. It was made in 1993 by the outstanding luthier Maciej Mensfeld in his workshop in Nowy Targ. Danilo, who uses this guitar most often, says that playing has not been this easy for him in a long time.',
        'The guitar ensemble’s classes are led by the eminent pedagogue Mirek Sokołowski.'
      ],
      pl: [
        'Program stypendialny Fundacji Stock, prowadzony w Lublinie wspólnie z Homo Faber, wspiera utalentowaną młodzież z Ukrainy. Niedawno jeden z wolontariuszy naszej fundacji, który pragnie pozostać anonimowy, przekazał młodzieży z programu wyjątkową gitarę elektryczną.',
        'To znakomity instrument, wyróżniający się doskonałą jakością wykonania i użytych podzespołów. Został zbudowany w 1993 roku przez wybitnego lutnika Macieja Mensfelda w jego pracowni w Nowym Targu. Danilo, który korzysta z tej gitary najczęściej, mówi, że od dawna nie grało mu się tak łatwo.',
        'Zajęcia zespołu gitarowego prowadzi znakomity pedagog Mirek Sokołowski.'
      ],
      cz: [
        'Stipendijní program Nadace Stock, vedený v Lublinu společně s Homo Faber, podporuje talentovanou ukrajinskou mládež. Nedávno jeden z dobrovolníků naší nadace, který si přeje zůstat v anonymitě, věnoval mladým lidem z programu výjimečnou elektrickou kytaru.',
        'Je to skvělý nástroj, který se vyznačuje vynikající kvalitou zpracování i použitých komponentů. Vyrobil jej v roce 1993 vynikající houslař Maciej Mensfeld ve své dílně v Novém Targu. Danilo, který kytaru používá nejčastěji, říká, že už dlouho se mu nehrálo tak snadno.',
        'Hodiny kytarového souboru vede vynikající pedagog Mirek Sokołowski.'
      ],
      it: [
        'Il programma di borse di studio della Fondazione Stock, gestito a Lublino insieme a Homo Faber, sostiene giovani talenti ucraini. Di recente uno dei volontari della nostra fondazione, che desidera restare anonimo, ha donato ai giovani del programma una chitarra elettrica eccezionale.',
        'È uno strumento superbo, caratterizzato dall’eccellente qualità della lavorazione e degli accessori. È stato realizzato nel 1993 dall’eccellente liutaio Maciej Mensfeld nel suo laboratorio di Nowy Targ. Danilo, che usa questa chitarra più spesso, dice che da tempo non gli era così facile suonare.',
        'Le lezioni dell’ensemble di chitarre sono guidate dall’eminente pedagogo Mirek Sokołowski.'
      ]
    }
  },
  {
    id: 'emotions', ts: '2024-08-15', cat: 'art', img: '/uploads/news-emotions.jpg',
    date: { en: 'August 2024', pl: 'Sierpień 2024', cz: 'Srpen 2024', it: 'Agosto 2024' },
    title: {
      en: 'Meetings with Art — emotions in art',
      pl: 'Spotkania ze Sztuką — emocje w sztuce',
      cz: 'Setkání s uměním — emoce v umění',
      it: 'Incontri con l’Arte — le emozioni nell’arte'
    },
    lead: {
      en: 'Danuta Szewczyk-Prokurat led seniors through one of the most important concepts connected with art — and for the first time every participant joined the discussion.',
      pl: 'Danuta Szewczyk-Prokurat poprowadziła seniorów przez jedno z najważniejszych pojęć związanych ze sztuką — i po raz pierwszy każdy uczestnik włączył się do dyskusji.',
      cz: 'Danuta Szewczyk-Prokurat provedla seniory jedním z nejdůležitějších pojmů spojených s uměním — a poprvé se do diskuse zapojil každý účastník.',
      it: 'Danuta Szewczyk-Prokurat ha guidato gli anziani attraverso uno dei concetti più importanti legati all’arte — e per la prima volta ogni partecipante si è unito alla discussione.'
    },
    body: {
      en: [
        'Another Encounter with Art took place, this time for elderly people under the care of the Department of Initiatives and Social Programmes of the Lublin City Hall. The topic of the lecture, led by Mrs Danuta Szewczyk-Prokurat, was one of the most important concepts connected with art — emotions.',
        'Throughout the ages, artists have expressed their emotions through their works, while incorporating elements intended to evoke specific associations and feelings in the audience. In architecture, every element of a building mattered — its scale, the light, the stained glass windows. In sacred architecture, carefully designed elements were intended to evoke a sense of the sacred; darker, less lit spaces created an atmosphere of mystery and spiritual focus.',
        'In the workshop part, participants received reproductions of works of art and chose the ones that stirred their emotions. Analysing different artistic means and their effects, they explored the feelings evoked by specific works. For the first time, literally every participant was actively involved in a discussion about their impressions.',
        'The Encounters with Art project is realized jointly with the National Museum in Lublin. Its aim is to facilitate contact with art for people who have difficult access to it, to educate and to inspire.'
      ],
      pl: [
        'Odbyło się kolejne Spotkanie ze Sztuką — tym razem dla osób starszych pod opieką Wydziału Inicjatyw i Programów Społecznych lubelskiego ratusza. Tematem wykładu, który poprowadziła pani Danuta Szewczyk-Prokurat, było jedno z najważniejszych pojęć związanych ze sztuką — emocje.',
        'Przez wieki artyści wyrażali swoje emocje poprzez tworzone dzieła, wplatając w nie jednocześnie elementy mające wywołać u odbiorców określone skojarzenia i uczucia. W architekturze znaczenie miał każdy element budowli — jej skala, światło, witraże. W architekturze sakralnej starannie zaprojektowane elementy miały budzić poczucie sacrum; ciemniejsze, słabiej oświetlone przestrzenie tworzyły atmosferę tajemnicy i duchowego skupienia.',
        'W części warsztatowej uczestnicy otrzymali reprodukcje dzieł sztuki i wybierali te, które poruszały ich emocje. Analizując różne środki artystyczne i efekty ich zastosowania, przyglądali się uczuciom, jakie budzą konkretne dzieła. Po raz pierwszy dosłownie każdy uczestnik spotkania aktywnie włączył się w rozmowę o swoich wrażeniach.',
        'Projekt Spotkania ze Sztuką realizowany jest wspólnie z Muzeum Narodowym w Lublinie. Jego celem jest ułatwianie kontaktu ze sztuką osobom, które mają do niej utrudniony dostęp, edukacja i inspiracja.'
      ],
      cz: [
        'Konalo se další Setkání s uměním — tentokrát pro starší osoby v péči odboru iniciativ a sociálních programů lublinské radnice. Tématem přednášky, kterou vedla paní Danuta Szewczyk-Prokurat, byl jeden z nejdůležitějších pojmů spojených s uměním — emoce.',
        'Po staletí umělci vyjadřovali své emoce prostřednictvím svých děl a zároveň do nich vkládali prvky, které měly u diváků vyvolat konkrétní asociace a pocity. V architektuře záležel každý prvek stavby — její měřítko, světlo, vitráže. V sakrální architektuře měly pečlivě navržené prvky vyvolávat pocit posvátna; tmavší, méně osvětlené prostory vytvářely atmosféru tajemství a duchovního soustředění.',
        'Ve workshopové části dostali účastníci reprodukce uměleckých děl a vybírali ta, která v nich vzbuzovala emoce. Analýzou různých uměleckých prostředků a jejich účinků zkoumali pocity, jaké konkrétní díla vyvolávají. Poprvé se doslova každý účastník setkání aktivně zapojil do rozhovoru o svých dojmech.',
        'Projekt Setkání s uměním je realizován společně s Národním muzeem v Lublinu. Jeho cílem je usnadňovat kontakt s uměním lidem, kteří k němu mají ztížený přístup, vzdělávat a inspirovat.'
      ],
      it: [
        'Si è svolto un altro Incontro con l’Arte — questa volta per le persone anziane assistite dal Dipartimento delle Iniziative e dei Programmi Sociali del municipio di Lublino. Il tema della conferenza, guidata dalla signora Danuta Szewczyk-Prokurat, era uno dei concetti più importanti legati all’arte — le emozioni.',
        'Nel corso dei secoli gli artisti hanno espresso le proprie emozioni attraverso le loro opere, inserendovi al tempo stesso elementi destinati a evocare nel pubblico associazioni e sentimenti specifici. In architettura contava ogni elemento dell’edificio — la scala, la luce, le vetrate. Nell’architettura sacra, elementi accuratamente progettati dovevano evocare il senso del sacro; spazi più scuri e meno illuminati creavano un’atmosfera di mistero e raccoglimento spirituale.',
        'Nella parte laboratoriale i partecipanti hanno ricevuto riproduzioni di opere d’arte e hanno scelto quelle che suscitavano le loro emozioni. Analizzando i diversi mezzi artistici e i loro effetti, hanno esplorato i sentimenti evocati da opere specifiche. Per la prima volta, letteralmente ogni partecipante si è attivamente coinvolto nella discussione sulle proprie impressioni.',
        'Il progetto Incontri con l’Arte è realizzato insieme al Museo Nazionale di Lublino. Il suo scopo è facilitare il contatto con l’arte alle persone che vi hanno un accesso difficile, educare e ispirare.'
      ]
    }
  },
  {
    id: 'czerniecin', ts: '2024-08-02', cat: 'community', img: '/uploads/news-czerniecin.jpg',
    date: { en: 'August 2024', pl: 'Sierpień 2024', cz: 'Srpen 2024', it: 'Agosto 2024' },
    title: {
      en: 'Flavours of Change — a grant for the Czernięcin fire brigade',
      pl: 'Flavours of Change — grant dla OSP Czernięcin',
      cz: 'Flavours of Change — grant pro hasiče z Czernięcina',
      it: 'Flavours of Change — una sovvenzione per i vigili del fuoco di Czernięcin'
    },
    lead: {
      en: 'Volunteer Sebastian Puchała obtained funds to renovate the fire station — cutting the brigade’s response time to under four minutes.',
      pl: 'Wolontariusz Sebastian Puchała pozyskał środki na remont remizy — skracając czas reakcji strażaków do poniżej czterech minut.',
      cz: 'Dobrovolník Sebastian Puchała získal prostředky na renovaci hasičské zbrojnice — a zkrátil dobu reakce sboru pod čtyři minuty.',
      it: 'Il volontario Sebastian Puchała ha ottenuto i fondi per ristrutturare la caserma — riducendo i tempi di risposta a meno di quattro minuti.'
    },
    body: {
      en: [
        'The Stock Foundation’s “Flavours of Change Grants” programme supports local communities through grants for aid projects in which employees of Stock Polska get involved as volunteers. It was launched at the beginning of the year, and the winners included projects from the Czech Republic, Italy, Poland and Croatia. This time, a grant went to the Volunteer Fire Brigade in Czernięcin near Lublin.',
        'Sebastian Puchała, actively involved as a volunteer, obtained funds for the renovation of the fire station. The renovated exit and a new drainage system will speed up the response time of the fire brigade and reduce the time from call-out to action to less than four minutes. Better working conditions translate directly into more efficient rescue operations.',
        'The brigade has 30 firefighters and one vehicle at its disposal — a worn-out Star was replaced by a more modern MAN. The unit recently celebrated its magnificent 100th anniversary and proudly looks to both the past and the future — young people are keen to get involved in its activities.',
        'The initiatives supported by the Stock Foundation strengthen local communities and contribute to improving their safety, and the volunteers’ involvement makes a real difference to the quality of life in these communities.'
      ],
      pl: [
        'Program „Flavours of Change Grants” Fundacji Stock wspiera lokalne społeczności grantami na projekty pomocowe, w które jako wolontariusze angażują się pracownicy Stock Polska. Ruszył na początku roku, a wśród zwycięzców znalazły się projekty z Czech, Włoch, Polski i Chorwacji. Tym razem grant trafił do Ochotniczej Straży Pożarnej w Czernięcinie koło Lublina.',
        'Sebastian Puchała, aktywnie zaangażowany jako wolontariusz, pozyskał środki na remont remizy. Wyremontowany wyjazd i nowy system odwodnienia przyspieszą reakcję straży i skrócą czas od wezwania do akcji do niecałych czterech minut. Lepsze warunki pracy przekładają się bezpośrednio na sprawniejsze akcje ratunkowe.',
        'Jednostka dysponuje 30 strażakami i jednym wozem — wysłużonego Stara zastąpił nowocześniejszy MAN. OSP niedawno świętowała wspaniałe 100-lecie i z dumą patrzy zarówno w przeszłość, jak i w przyszłość — w jej działalność chętnie angażują się młodzi.',
        'Inicjatywy wspierane przez Fundację Stock wzmacniają lokalne społeczności i poprawiają ich bezpieczeństwo, a zaangażowanie wolontariuszy realnie zmienia jakość życia w tych miejscowościach.'
      ],
      cz: [
        'Program „Flavours of Change Grants“ Nadace Stock podporuje místní komunity granty na pomocné projekty, do nichž se jako dobrovolníci zapojují zaměstnanci Stock Polska. Byl spuštěn začátkem roku a mezi vítězi byly projekty z Česka, Itálie, Polska a Chorvatska. Tentokrát grant putoval k dobrovolným hasičům v Czernięcině u Lublinu.',
        'Sebastian Puchała, aktivně zapojený jako dobrovolník, získal prostředky na renovaci hasičské zbrojnice. Opravený výjezd a nový odvodňovací systém urychlí reakci sboru a zkrátí dobu od výzvy k zásahu na méně než čtyři minuty. Lepší pracovní podmínky se přímo promítají do efektivnějších záchranných akcí.',
        'Jednotka má k dispozici 30 hasičů a jedno vozidlo — opotřebovaný Star nahradil modernější MAN. Sbor nedávno oslavil velkolepé 100. výročí a hrdě hledí do minulosti i budoucnosti — do jeho činnosti se rádi zapojují mladí lidé.',
        'Iniciativy podporované Nadací Stock posilují místní komunity a přispívají ke zlepšení jejich bezpečnosti a zapojení dobrovolníků skutečně mění kvalitu života v těchto obcích.'
      ],
      it: [
        'Il programma “Flavours of Change Grants” della Fondazione Stock sostiene le comunità locali con sovvenzioni per progetti di aiuto in cui i dipendenti di Stock Polska si impegnano come volontari. È stato lanciato all’inizio dell’anno e tra i vincitori figurano progetti da Repubblica Ceca, Italia, Polonia e Croazia. Questa volta la sovvenzione è andata ai Vigili del Fuoco Volontari di Czernięcin, vicino a Lublino.',
        'Sebastian Puchała, attivamente impegnato come volontario, ha ottenuto i fondi per la ristrutturazione della caserma. L’uscita rinnovata e un nuovo sistema di drenaggio accelereranno i tempi di risposta e ridurranno il tempo dalla chiamata all’azione a meno di quattro minuti. Migliori condizioni di lavoro si traducono direttamente in operazioni di soccorso più efficienti.',
        'La brigata dispone di 30 vigili del fuoco e di un veicolo — un logoro Star è stato sostituito da un più moderno MAN. L’unità ha recentemente celebrato il suo magnifico centenario e guarda con orgoglio sia al passato che al futuro — i giovani sono desiderosi di partecipare alle sue attività.',
        'Le iniziative sostenute dalla Fondazione Stock rafforzano le comunità locali e contribuiscono a migliorarne la sicurezza, e l’impegno dei volontari fa davvero la differenza per la qualità della vita di queste comunità.'
      ]
    }
  },
  {
    id: 'viktoria', ts: '2024-07-22', cat: 'scholar', img: '/uploads/cover-scholar.svg',
    date: { en: 'July 2024', pl: 'Lipiec 2024', cz: 'Červenec 2024', it: 'Luglio 2024' },
    title: {
      en: 'Scholarship programme — the successes of Viktoria Pronchakova',
      pl: 'Program stypendialny — sukcesy Viktorii Pronchakovej',
      cz: 'Stipendijní program — úspěchy Viktorie Pronchakovové',
      it: 'Programma di borse di studio — i successi di Viktoria Pronchakova'
    },
    lead: {
      en: 'Viktoria, supported by our scholarship programme, won medals at the Ukrainian Cadet Swimming Championships near Kyiv.',
      pl: 'Wspierana przez nasz program stypendialny Viktoria zdobyła medale na mistrzostwach Ukrainy kadetów w pływaniu pod Kijowem.',
      cz: 'Viktoria, podporovaná naším stipendijním programem, získala medaile na ukrajinském mistrovství kadetů v plavání u Kyjeva.',
      it: 'Viktoria, sostenuta dal nostro programma di borse di studio, ha vinto medaglie ai Campionati ucraini di nuoto per cadetti vicino a Kiev.'
    },
    body: {
      en: [
        'Great news! Viktoria Pronchakova, who is supported by the Stock Foundation in swimming classes as part of our scholarship programme run jointly with Homo Faber in Lublin — where several young athletes train alongside a large group of musicians — won prizes at the Ukrainian Cadet Swimming Championships. They were held on 27–29 June in Brovary near Kyiv and attended by about 300 participants from 19 regions of Ukraine. The Donetsk region team, which includes Viktoria, took 2nd place in the Championships.',
        'Viktoria herself won a silver medal in the 4×50 swimming relay and a bronze medal in the freestyle relay. With her results she entered the TOP 8 swimmers of the Championships: 4th place in the 100 m freestyle, 6th place in the 200 m backstroke, and 8th place in the 800 m and 400 m freestyle.',
        'Congratulations to Viktoria — we are extremely happy to support such a talented athlete!'
      ],
      pl: [
        'Świetne wieści! Viktoria Pronchakova, którą Fundacja Stock wspiera w zajęciach pływackich w ramach programu stypendialnego prowadzonego wspólnie z Homo Faber w Lublinie — gdzie obok dużej grupy muzyków trenuje też kilkoro młodych sportowców — zdobyła nagrody na mistrzostwach Ukrainy kadetów w pływaniu. Odbyły się one 27–29 czerwca w Browarach pod Kijowem, a wzięło w nich udział około 300 uczestników z 19 regionów Ukrainy. Drużyna obwodu donieckiego, w której płynie Viktoria, zajęła w mistrzostwach 2. miejsce.',
        'Sama Viktoria zdobyła srebrny medal w sztafecie 4×50 m i brązowy w sztafecie kraulowej. Swoimi wynikami weszła do TOP 8 pływaczek mistrzostw: 4. miejsce na 100 m stylem dowolnym, 6. na 200 m stylem grzbietowym oraz 8. na 800 m i 400 m stylem dowolnym.',
        'Gratulujemy Viktorii — ogromnie cieszymy się, że możemy wspierać tak utalentowaną zawodniczkę!'
      ],
      cz: [
        'Skvělé zprávy! Viktoria Pronchakovová, kterou Nadace Stock podporuje v plaveckých lekcích v rámci stipendijního programu vedeného společně s Homo Faber v Lublinu — kde vedle velké skupiny hudebníků trénuje i několik mladých sportovců — získala ceny na ukrajinském mistrovství kadetů v plavání. Konalo se 27.–29. června v Brovarech u Kyjeva a zúčastnilo se ho asi 300 závodníků z 19 regionů Ukrajiny. Tým Doněcké oblasti, jehož je Viktoria členkou, obsadil na mistrovství 2. místo.',
        'Sama Viktoria získala stříbrnou medaili ve štafetě 4×50 m a bronzovou ve štafetě volným způsobem. Svými výsledky se dostala do TOP 8 plavkyň mistrovství: 4. místo na 100 m volným způsobem, 6. místo na 200 m znak a 8. místo na 800 m a 400 m volným způsobem.',
        'Gratulujeme Viktorii — máme obrovskou radost, že můžeme podporovat tak talentovanou sportovkyni!'
      ],
      it: [
        'Ottime notizie! Viktoria Pronchakova, sostenuta dalla Fondazione Stock nei corsi di nuoto nell’ambito del programma di borse di studio gestito insieme a Homo Faber a Lublino — dove accanto a un folto gruppo di musicisti si allenano anche diversi giovani atleti — ha vinto premi ai Campionati ucraini di nuoto per cadetti. Si sono svolti dal 27 al 29 giugno a Brovary, vicino a Kiev, con circa 300 partecipanti da 19 regioni dell’Ucraina. La squadra della regione di Donetsk, di cui Viktoria fa parte, ha conquistato il 2° posto ai Campionati.',
        'Viktoria ha vinto una medaglia d’argento nella staffetta 4×50 e una di bronzo nella staffetta stile libero. Con i suoi risultati è entrata nella TOP 8 delle nuotatrici dei Campionati: 4° posto nei 100 m stile libero, 6° nei 200 m dorso e 8° negli 800 m e 400 m stile libero.',
        'Congratulazioni a Viktoria — siamo felicissimi di sostenere un’atleta così talentuosa!'
      ]
    }
  },
  {
    id: 'mirek', ts: '2024-07-15', cat: 'scholar', img: '/uploads/news-mirek.jpg',
    date: { en: 'July 2024', pl: 'Lipiec 2024', cz: 'Červenec 2024', it: 'Luglio 2024' },
    title: {
      en: 'Meet the educator behind our guitar ensemble — Mirek Sokołowski',
      pl: 'Poznajcie opiekuna naszego zespołu gitarowego — Mirka Sokołowskiego',
      cz: 'Poznejte pedagoga našeho kytarového souboru — Mirka Sokołowského',
      it: 'Vi presentiamo l’educatore del nostro ensemble di chitarre — Mirek Sokołowski'
    },
    lead: {
      en: 'The guitar ensemble founded in May 2022 flourishes under a teacher with 25 years of experience on stages in Poland and France.',
      pl: 'Zespół gitarowy założony w maju 2022 roku rozkwita pod okiem nauczyciela z 25-letnim doświadczeniem na scenach Polski i Francji.',
      cz: 'Kytarový soubor založený v květnu 2022 vzkvétá pod vedením učitele s 25 lety zkušeností na pódiích v Polsku a ve Francii.',
      it: 'L’ensemble di chitarre fondato nel maggio 2022 fiorisce sotto la guida di un insegnante con 25 anni di esperienza sui palchi di Polonia e Francia.'
    },
    body: {
      en: [
        'The Stock Foundation continues its programme to support talented Ukrainian youth. One of the most active groups is the guitar ensemble founded in May 2022. Since then, dozens of people with different levels of musical education have participated in the classes — some studied at music schools, others practised as a hobby. The line-up is now quite stable: about 10 young people, from primary school to junior high school age, most of whom have lived in Poland for a long time and attend school here. Their level can be described as “advanced debutants”, and classes are held twice a week.',
        'The ensemble is led by an outstanding educator, Mirek Sokołowski — author of lyrics and music animator. Mirek has been a guitar teacher in Poland and France for almost 25 years and has given several hundred concerts in France, Switzerland and Poland. Together with the Lyon-based band Malossol, he won the 14th edition of the Musicales de Bastia festival in Corsica, and in 2010, with the Lublin-based Couleur Café, he received the W. Bellon Award at the Student Song Festival in Kraków.',
        'Currently, he runs guitar workshops under the auspices of Homo Faber and the Stock Foundation, works as a music instructor in community centres, and infects young adepts of the art with his passion for music. The ensemble under his care performs at concerts given by our scholarship holders — for example at Baobab, or at the recent concert summarising the school year at the Culture Workshop.'
      ],
      pl: [
        'Fundacja Stock kontynuuje program wspierania utalentowanej młodzieży z Ukrainy. Jedną z najaktywniejszych grup jest zespół gitarowy założony w maju 2022 roku. Od tego czasu w zajęciach uczestniczyły dziesiątki osób o różnym poziomie muzycznego wykształcenia — jedni uczyli się w szkołach muzycznych, inni grali hobbystycznie. Skład jest już dość stabilny: około 10 młodych osób, od czwartej klasy podstawówki po gimnazjum, w większości od dawna mieszkających w Polsce i uczących się tutaj. Ich poziom można określić jako „zaawansowani debiutanci”, a zajęcia odbywają się dwa razy w tygodniu.',
        'Zespół prowadzi wybitny pedagog Mirek Sokołowski — autor tekstów i animator muzyczny. Mirek od blisko 25 lat uczy gry na gitarze w Polsce i we Francji, ma za sobą kilkaset koncertów we Francji, Szwajcarii i Polsce. Z lyońskim zespołem Malossol wygrał 14. edycję festiwalu Musicales de Bastia na Korsyce, a w 2010 roku z lubelskim Couleur Café zdobył nagrodę im. W. Bellona na Studenckim Festiwalu Piosenki w Krakowie.',
        'Obecnie prowadzi warsztaty gitarowe pod auspicjami Homo Faber i Fundacji Stock, pracuje jako instruktor muzyczny w domach kultury i zaraża młodych adeptów sztuki swoją pasją do muzyki. Zespół pod jego opieką występuje na koncertach naszych stypendystów — m.in. w Baobabie czy na niedawnym koncercie podsumowującym rok szkolny w Warsztatach Kultury.'
      ],
      cz: [
        'Nadace Stock pokračuje v programu podpory talentované ukrajinské mládeže. Jednou z nejaktivnějších skupin je kytarový soubor založený v květnu 2022. Od té doby se lekcí zúčastnily desítky lidí s různou úrovní hudebního vzdělání — někteří studovali na hudebních školách, jiní hráli jako koníček. Sestava je nyní poměrně stabilní: asi 10 mladých lidí od základní školy po nižší střední, z nichž většina žije v Polsku už dlouho a chodí zde do školy. Jejich úroveň lze popsat jako „pokročilí debutanti“ a lekce se konají dvakrát týdně.',
        'Soubor vede vynikající pedagog Mirek Sokołowski — autor textů a hudební animátor. Mirek učí hru na kytaru v Polsku a ve Francii téměř 25 let a má za sebou několik set koncertů ve Francii, Švýcarsku a Polsku. S lyonskou kapelou Malossol vyhrál 14. ročník festivalu Musicales de Bastia na Korsice a v roce 2010 s lublinskou Couleur Café získal cenu W. Bellona na Studentském festivalu písně v Krakově.',
        'V současnosti vede kytarové dílny pod záštitou Homo Faber a Nadace Stock, pracuje jako hudební instruktor v kulturních centrech a nakažuje mladé adepty umění svou vášní pro hudbu. Soubor pod jeho vedením vystupuje na koncertech našich stipendistů — například v Baobabu nebo na nedávném koncertě shrnujícím školní rok v Dílně kultury.'
      ],
      it: [
        'La Fondazione Stock continua il suo programma di sostegno ai giovani talenti ucraini. Uno dei gruppi più attivi è l’ensemble di chitarre fondato nel maggio 2022. Da allora alle lezioni hanno partecipato decine di persone con diversi livelli di educazione musicale — alcuni hanno studiato nelle scuole di musica, altri suonavano per hobby. La formazione è ormai piuttosto stabile: circa 10 giovani, dalla scuola primaria alle medie, la maggior parte dei quali vive in Polonia da tempo e frequenta qui la scuola. Il loro livello si può definire “debuttanti avanzati”, e le lezioni si tengono due volte a settimana.',
        'L’ensemble è guidato da un eccellente educatore, Mirek Sokołowski — autore di testi e animatore musicale. Mirek insegna chitarra in Polonia e in Francia da quasi 25 anni e ha tenuto diverse centinaia di concerti in Francia, Svizzera e Polonia. Con la band lionese Malossol ha vinto la 14ª edizione del festival Musicales de Bastia in Corsica e nel 2010, con i Couleur Café di Lublino, ha ricevuto il Premio W. Bellon al Festival della Canzone Studentesca di Cracovia.',
        'Attualmente conduce laboratori di chitarra sotto l’egida di Homo Faber e della Fondazione Stock, lavora come istruttore musicale nei centri culturali e contagia i giovani adepti dell’arte con la sua passione per la musica. L’ensemble sotto la sua guida si esibisce ai concerti dei nostri borsisti — ad esempio al Baobab o al recente concerto di fine anno scolastico al Laboratorio di Cultura.'
      ]
    }
  },
  {
    id: 'concert24', ts: '2024-06-10', cat: 'scholar', img: '/uploads/cover-scholar.svg',
    date: { en: 'June 2024', pl: 'Czerwiec 2024', cz: 'Červen 2024', it: 'Giugno 2024' },
    title: {
      en: 'Concert of scholarship recipients — a year of work and talent',
      pl: 'Koncert stypendystów — rok pracy i talentu',
      cz: 'Koncert stipendistů — rok práce a talentu',
      it: 'Concerto dei borsisti — un anno di lavoro e talento'
    },
    lead: {
      en: 'At the Culture Workshops in Lublin, our scholarship recipients summed up a year of honing their talents — with a hall filled to the brim.',
      pl: 'W Warsztatach Kultury w Lublinie nasi stypendyści podsumowali rok szlifowania talentów — przy sali wypełnionej po brzegi.',
      cz: 'V Dílnách kultury v Lublinu naši stipendisté shrnuli rok pilování talentů — před sálem zaplněným do posledního místa.',
      it: 'Ai Laboratori di Cultura di Lublino i nostri borsisti hanno riassunto un anno di perfezionamento dei loro talenti — con la sala piena fino all’orlo.'
    },
    body: {
      en: [
        'A lovely concert of scholarship recipients was held at the Culture Workshops in Lublin, summing up a year of work and honing talents. The Stock Foundation continues its programme to support talented Ukrainian youth, enabling them to continue their musical education interrupted by the war.',
        'At the concert, we had the pleasure of listening to the “Veselyki” choir under the direction of Halyna and Aleksandr Navrocki, as well as original lyrics by Mirek Sokołowski accompanied by the guitar ensemble he leads. The band played impressions in a rock and roll atmosphere, summarising the themes they had worked on over the past year.',
        'The performance of a song with a bandura — under the coaching of Ola Maciupa — caused great enthusiasm. The audience was wonderful, and the hall was filled to the brim.'
      ],
      pl: [
        'W Warsztatach Kultury w Lublinie odbył się piękny koncert stypendystów, podsumowujący rok pracy i szlifowania talentów. Fundacja Stock kontynuuje program wspierania utalentowanej młodzieży z Ukrainy, umożliwiając jej kontynuowanie edukacji muzycznej przerwanej przez wojnę.',
        'Podczas koncertu mieliśmy przyjemność wysłuchać chóru „Veselyki” pod dyrekcją Halyny i Aleksandra Navrockich, a także autorskich tekstów Mirka Sokołowskiego z towarzyszeniem prowadzonego przez niego zespołu gitarowego. Zespół zagrał impresje w rockandrollowym klimacie, podsumowując tematy, nad którymi pracował przez ostatni rok.',
        'Wykonanie piosenki z bandurą — pod opieką Oli Maciupy — wywołało wielki entuzjazm. Publiczność była wspaniała, a sala wypełniona po brzegi.'
      ],
      cz: [
        'V Dílnách kultury v Lublinu se konal krásný koncert stipendistů, který shrnul rok práce a pilování talentů. Nadace Stock pokračuje v programu podpory talentované ukrajinské mládeže a umožňuje jí pokračovat v hudebním vzdělávání přerušeném válkou.',
        'Na koncertě jsme si s potěšením poslechli sbor „Veselyki“ pod vedením Halyny a Aleksandra Navrockých a také autorské texty Mirka Sokołowského za doprovodu kytarového souboru, který vede. Kapela zahrála imprese v rokenrolové atmosféře a shrnula témata, na nichž v uplynulém roce pracovala.',
        'Provedení písně s bandurou — pod vedením Oly Maciupy — vyvolalo velké nadšení. Publikum bylo skvělé a sál byl zaplněn do posledního místa.'
      ],
      it: [
        'Ai Laboratori di Cultura di Lublino si è tenuto un bellissimo concerto dei borsisti, che ha riassunto un anno di lavoro e di perfezionamento dei talenti. La Fondazione Stock continua il suo programma di sostegno ai giovani talenti ucraini, permettendo loro di proseguire l’educazione musicale interrotta dalla guerra.',
        'Al concerto abbiamo avuto il piacere di ascoltare il coro “Veselyki” diretto da Halyna e Aleksandr Navrocki, oltre ai testi originali di Mirek Sokołowski accompagnati dall’ensemble di chitarre da lui guidato. Il gruppo ha suonato impressioni in atmosfera rock and roll, riassumendo i temi su cui aveva lavorato nell’ultimo anno.',
        'L’esecuzione di una canzone con la bandura — sotto la guida di Ola Maciupa — ha suscitato grande entusiasmo. Il pubblico è stato meraviglioso e la sala era piena fino all’orlo.'
      ]
    }
  },
  {
    id: 'markuszow', ts: '2024-06-02', cat: 'community', img: '/uploads/news-markuszow.jpg',
    date: { en: 'June 2024', pl: 'Czerwiec 2024', cz: 'Červen 2024', it: 'Giugno 2024' },
    title: {
      en: 'Flavours of Change — a grant for the Markuszów fire brigade',
      pl: 'Flavours of Change — grant dla OSP Markuszów',
      cz: 'Flavours of Change — grant pro hasiče z Markuszówa',
      it: 'Flavours of Change — una sovvenzione per i vigili del fuoco di Markuszów'
    },
    lead: {
      en: 'Volunteer Kasia Brillowska won a grant to equip the Youth Fire Team — from combat training gear to training clothing.',
      pl: 'Wolontariuszka Kasia Brillowska zdobyła grant na wyposażenie Młodzieżowej Drużyny Pożarniczej — od sprzętu do ćwiczeń bojowych po odzież treningową.',
      cz: 'Dobrovolnice Kasia Brillowska získala grant na vybavení mládežnického hasičského družstva — od výcvikového vybavení po tréninkové oblečení.',
      it: 'La volontaria Kasia Brillowska ha vinto una sovvenzione per equipaggiare la Squadra Giovanile dei Vigili del Fuoco — dall’attrezzatura di addestramento all’abbigliamento sportivo.'
    },
    body: {
      en: [
        'A new project under the Stock Foundation’s Flavours of Change Grants Programme is supporting the Voluntary Fire Brigade in Markuszów. Kasia Brillowska, a volunteer with the Stock Foundation who helps the brigade, won a grant to fund equipment for the Youth Fire Team: elements of combat-training equipment — a footbridge, a pouring shield, a knotting station — as well as training clothing, including a set of training clothes and fleece hoodies for the young people.',
        'The Youth Fire Team has recently been operating at the Markuszów Voluntary Fire Brigade and is currently preparing to take part in fire-fighting competitions. The meetings, which take place every Friday at the primary school, include learning how to tie knots, operate a fire extinguisher, connect hoses and recognize individual pieces of equipment.',
        'The classes popularize fire safety among young people and are, at the same time, a good way for them to spend their time. The aim of the initiative is to ensure the continuity of the fire brigade’s operations by training young people, involving them in the local community and improving its safety.'
      ],
      pl: [
        'Nowy projekt w ramach programu Flavours of Change Grants Fundacji Stock wspiera Ochotniczą Straż Pożarną w Markuszowie. Kasia Brillowska, wolontariuszka Fundacji Stock pomagająca OSP, zdobyła grant na sfinansowanie wyposażenia Młodzieżowej Drużyny Pożarniczej: elementów sprzętu do ćwiczeń bojowych — kładki, tarczy nalewowej, stanowiska do wiązania węzłów — a także odzieży treningowej, w tym kompletu strojów i polarowych bluz dla młodzieży.',
        'Młodzieżowa Drużyna Pożarnicza działa przy OSP Markuszów od niedawna i obecnie przygotowuje się do udziału w zawodach pożarniczych. Spotkania, które odbywają się w każdy piątek w szkole podstawowej, obejmują naukę wiązania węzłów, obsługi gaśnicy, łączenia węży i rozpoznawania poszczególnych elementów sprzętu.',
        'Zajęcia popularyzują wśród młodych tematykę bezpieczeństwa pożarowego i są jednocześnie dobrym sposobem spędzania czasu. Celem inicjatywy jest zapewnienie ciągłości działania straży poprzez szkolenie młodzieży, angażowanie jej w życie lokalnej społeczności i poprawę jej bezpieczeństwa.'
      ],
      cz: [
        'Nový projekt v rámci programu Flavours of Change Grants Nadace Stock podporuje dobrovolné hasiče v Markuszówě. Kasia Brillowska, dobrovolnice Nadace Stock, která sboru pomáhá, získala grant na financování vybavení mládežnického hasičského družstva: prvků výcvikového vybavení — lávky, nalévacího terče, stanoviště pro vázání uzlů — a také tréninkového oblečení, včetně sady dresů a fleecových mikin pro mladé.',
        'Mládežnické hasičské družstvo působí u dobrovolných hasičů v Markuszówě teprve krátce a v současnosti se připravuje na účast v hasičských soutěžích. Setkání, která se konají každý pátek na základní škole, zahrnují nácvik vázání uzlů, obsluhy hasicího přístroje, spojování hadic a rozpoznávání jednotlivých částí vybavení.',
        'Lekce popularizují mezi mladými požární bezpečnost a jsou zároveň dobrým způsobem trávení času. Cílem iniciativy je zajistit kontinuitu činnosti sboru výcvikem mladých lidí, jejich zapojením do místní komunity a zlepšením její bezpečnosti.'
      ],
      it: [
        'Un nuovo progetto nell’ambito del programma Flavours of Change Grants della Fondazione Stock sostiene i Vigili del Fuoco Volontari di Markuszów. Kasia Brillowska, volontaria della Fondazione Stock che aiuta la brigata, ha vinto una sovvenzione per finanziare l’equipaggiamento della Squadra Giovanile: elementi per l’addestramento — una passerella, uno scudo di versamento, una postazione per i nodi — oltre ad abbigliamento da allenamento, con un set di divise e felpe in pile per i ragazzi.',
        'La Squadra Giovanile opera da poco presso i Vigili del Fuoco Volontari di Markuszów e si sta preparando a partecipare alle gare antincendio. Gli incontri, che si tengono ogni venerdì presso la scuola primaria, comprendono l’apprendimento dei nodi, l’uso dell’estintore, il collegamento delle manichette e il riconoscimento delle singole attrezzature.',
        'Le lezioni diffondono tra i giovani i temi della sicurezza antincendio e sono al tempo stesso un buon modo di trascorrere il tempo. L’obiettivo dell’iniziativa è garantire la continuità delle attività della brigata formando i giovani, coinvolgendoli nella comunità locale e migliorandone la sicurezza.'
      ]
    }
  },
  {
    id: 'polanska', ts: '2024-05-10', cat: 'art', img: '/uploads/cover-art.svg',
    date: { en: 'May 2024', pl: 'Maj 2024', cz: 'Květen 2024', it: 'Maggio 2024' },
    title: {
      en: 'Meetings with Art — curator Jolanta Polańska',
      pl: 'Spotkania ze Sztuką — kustosz Jolanta Polańska',
      cz: 'Setkání s uměním — kurátorka Jolanta Polańska',
      it: 'Incontri con l’Arte — la curatrice Jolanta Polańska'
    },
    lead: {
      en: 'The first events of our new initiative were led by the Senior Curator of the National Museum in Lublin, with over 40 years of museum experience.',
      pl: 'Pierwsze wydarzenia naszej nowej inicjatywy poprowadziła starsza kustosz Muzeum Narodowego w Lublinie, z ponad 40-letnim doświadczeniem muzealnym.',
      cz: 'První akce naší nové iniciativy vedla starší kurátorka Národního muzea v Lublinu s více než 40 lety muzejní praxe.',
      it: 'I primi eventi della nostra nuova iniziativa sono stati guidati dalla curatrice senior del Museo Nazionale di Lublino, con oltre 40 anni di esperienza museale.'
    },
    body: {
      en: [
        'The first events of the new Stock Foundation initiative, Encounters with Art, were led by Ms Jolanta Polańska, Senior Curator at the National Museum in Lublin — the museum provides substantive support to our project. Ms Jolanta has impressive experience of over 40 years working at the museum and has curated many exhibitions. She conducts classes on museum activities and art history, and has been running a museum section for the Lublin University of the Third Age for 10 years.',
        'Lectures from the Encounters with Art series were held at the headquarters of the Complex of Support Centres at Lwowska 28 in Lublin. Ms Jolanta invited the guests into the fascinating world of the artistic Kossak family.',
        'The meetings were very popular with seniors, attracting many people who receive assistance from the Complex of Support Centres. The initiative aims to facilitate contact with art for people who have difficult access to it or need support for various personal reasons.'
      ],
      pl: [
        'Pierwsze wydarzenia nowej inicjatywy Fundacji Stock — Spotkań ze Sztuką — poprowadziła pani Jolanta Polańska, starsza kustosz Muzeum Narodowego w Lublinie; muzeum zapewnia naszemu projektowi wsparcie merytoryczne. Pani Jolanta ma imponujące, ponad 40-letnie doświadczenie pracy w muzeum i kuratorowała wiele wystaw. Prowadzi zajęcia o działalności muzealnej i historii sztuki, a od 10 lat kieruje sekcją muzealną Lubelskiego Uniwersytetu Trzeciego Wieku.',
        'Wykłady z cyklu Spotkania ze Sztuką odbyły się w siedzibie Zespołu Ośrodków Wsparcia przy ul. Lwowskiej 28 w Lublinie. Pani Jolanta zaprosiła gości do fascynującego świata artystycznej rodziny Kossaków.',
        'Spotkania cieszyły się dużą popularnością wśród seniorów, przyciągając wiele osób korzystających z pomocy Zespołu Ośrodków Wsparcia. Celem inicjatywy jest ułatwianie kontaktu ze sztuką osobom, które mają do niej utrudniony dostęp lub z różnych osobistych powodów potrzebują wsparcia.'
      ],
      cz: [
        'První akce nové iniciativy Nadace Stock — Setkání s uměním — vedla paní Jolanta Polańska, starší kurátorka Národního muzea v Lublinu; muzeum poskytuje našemu projektu odbornou podporu. Paní Jolanta má úctyhodné více než 40leté zkušenosti z práce v muzeu a kurátorovala mnoho výstav. Vede lekce o muzejní činnosti a dějinách umění a už 10 let řídí muzejní sekci Lublinské univerzity třetího věku.',
        'Přednášky z cyklu Setkání s uměním se konaly v sídle Komplexu podpůrných center na ulici Lwowska 28 v Lublinu. Paní Jolanta pozvala hosty do fascinujícího světa umělecké rodiny Kossaků.',
        'Setkání se u seniorů těšila velké oblibě a přilákala mnoho lidí, kteří využívají pomoci Komplexu podpůrných center. Cílem iniciativy je usnadňovat kontakt s uměním lidem, kteří k němu mají ztížený přístup nebo z různých osobních důvodů potřebují podporu.'
      ],
      it: [
        'I primi eventi della nuova iniziativa della Fondazione Stock — Incontri con l’Arte — sono stati guidati dalla signora Jolanta Polańska, curatrice senior del Museo Nazionale di Lublino; il museo fornisce supporto scientifico al nostro progetto. La signora Jolanta ha un’esperienza impressionante di oltre 40 anni di lavoro al museo e ha curato molte mostre. Tiene lezioni sulle attività museali e sulla storia dell’arte e da 10 anni dirige la sezione museale dell’Università della Terza Età di Lublino.',
        'Le conferenze del ciclo Incontri con l’Arte si sono tenute nella sede del Complesso dei Centri di Sostegno in via Lwowska 28 a Lublino. La signora Jolanta ha invitato gli ospiti nell’affascinante mondo dell’artistica famiglia Kossak.',
        'Gli incontri sono stati molto apprezzati dagli anziani, attirando molte persone assistite dal Complesso dei Centri di Sostegno. L’iniziativa mira a facilitare il contatto con l’arte alle persone che vi hanno un accesso difficile o che per varie ragioni personali hanno bisogno di sostegno.'
      ]
    }
  },
  {
    id: 'godow', ts: '2024-05-02', cat: 'community', img: '/uploads/cover-community.svg',
    date: { en: 'May 2024', pl: 'Maj 2024', cz: 'Květen 2024', it: 'Maggio 2024' },
    title: {
      en: 'Flavours of Change — a defibrillator for the Godów fire brigade',
      pl: 'Flavours of Change — defibrylator dla OSP Godów',
      cz: 'Flavours of Change — defibrilátor pro hasiče z Godówa',
      it: 'Flavours of Change — un defibrillatore per i vigili del fuoco di Godów'
    },
    lead: {
      en: 'One of the first employee-volunteering projects equips firefighters with an AED defibrillator, a training unit and a medical manikin.',
      pl: 'Jeden z pierwszych projektów wolontariatu pracowniczego wyposaża strażaków w defibrylator AED, egzemplarz szkoleniowy i fantom medyczny.',
      cz: 'Jeden z prvních projektů zaměstnaneckého dobrovolnictví vybavuje hasiče defibrilátorem AED, cvičným přístrojem a zdravotnickou figurínou.',
      it: 'Uno dei primi progetti di volontariato aziendale fornisce ai vigili del fuoco un defibrillatore AED, un’unità di addestramento e un manichino medico.'
    },
    body: {
      en: [
        'We are pleased to present one of the first projects implemented as part of the Stock Foundation’s Employee Volunteering Programme. The Godów Volunteer Fire Brigade will be equipped with an AED defibrillator along with an AED training defibrillator and a medical manikin. The aim of the project is both to enhance the medical skills of firefighters and to provide first aid training in the local community — benefiting the community as well as those injured in road accidents.',
        'The project will involve the fire brigade, the local community and Stock Polska employees. Experienced firefighters will share their knowledge of first aid and of how to act during road accidents and fires.',
        'Such initiatives raise awareness of the importance of emergency preparedness and safety in the community, and the time dedicated by volunteer employees is an exemplary act of commitment to community safety and well-being — fitting perfectly with the objectives of our programme.'
      ],
      pl: [
        'Z przyjemnością przedstawiamy jeden z pierwszych projektów realizowanych w ramach Programu Wolontariatu Pracowniczego Fundacji Stock. Ochotnicza Straż Pożarna w Godowie zostanie wyposażona w defibrylator AED wraz z egzemplarzem szkoleniowym i fantomem medycznym. Celem projektu jest zarówno podniesienie umiejętności medycznych strażaków, jak i szkolenia z pierwszej pomocy dla lokalnej społeczności — skorzystają na tym mieszkańcy oraz poszkodowani w wypadkach drogowych.',
        'W projekt zaangażują się strażacy, lokalna społeczność i pracownicy Stock Polska. Doświadczeni strażacy podzielą się wiedzą o pierwszej pomocy oraz o tym, jak zachować się podczas wypadków drogowych i pożarów.',
        'Takie inicjatywy budują świadomość znaczenia gotowości ratunkowej i bezpieczeństwa w społeczności, a czas poświęcony przez pracowników-wolontariuszy to wzorowy przykład zaangażowania na rzecz bezpieczeństwa i dobrostanu wspólnoty — doskonale wpisujący się w cele naszego programu.'
      ],
      cz: [
        'S potěšením představujeme jeden z prvních projektů realizovaných v rámci Programu zaměstnaneckého dobrovolnictví Nadace Stock. Dobrovolní hasiči v Godówě budou vybaveni defibrilátorem AED spolu s cvičným defibrilátorem a zdravotnickou figurínou. Cílem projektu je jednak zvýšit zdravotnické dovednosti hasičů, jednak poskytovat školení první pomoci v místní komunitě — ku prospěchu obyvatel i zraněných při dopravních nehodách.',
        'Do projektu se zapojí hasiči, místní komunita a zaměstnanci Stock Polska. Zkušení hasiči se podělí o znalosti první pomoci a o to, jak jednat při dopravních nehodách a požárech.',
        'Takové iniciativy zvyšují povědomí o významu připravenosti na mimořádné situace a bezpečnosti v komunitě a čas věnovaný zaměstnanci-dobrovolníky je příkladným projevem angažovanosti pro bezpečnost a blaho společenství — dokonale odpovídajícím cílům našeho programu.'
      ],
      it: [
        'Siamo lieti di presentare uno dei primi progetti realizzati nell’ambito del Programma di Volontariato Aziendale della Fondazione Stock. I Vigili del Fuoco Volontari di Godów saranno dotati di un defibrillatore AED insieme a un defibrillatore AED da addestramento e a un manichino medico. L’obiettivo del progetto è sia migliorare le competenze mediche dei vigili del fuoco sia offrire formazione di primo soccorso alla comunità locale — a beneficio dei residenti e dei feriti negli incidenti stradali.',
        'Il progetto coinvolgerà i vigili del fuoco, la comunità locale e i dipendenti di Stock Polska. Vigili del fuoco esperti condivideranno le loro conoscenze di primo soccorso e su come comportarsi durante incidenti stradali e incendi.',
        'Iniziative come questa accrescono la consapevolezza dell’importanza della preparazione alle emergenze e della sicurezza nella comunità, e il tempo dedicato dai dipendenti volontari è un esempio di impegno per la sicurezza e il benessere della collettività — perfettamente in linea con gli obiettivi del nostro programma.'
      ]
    }
  },
  {
    id: 'kossak', ts: '2024-04-02', cat: 'art', img: '/uploads/cover-art.svg',
    date: { en: 'April 2024', pl: 'Kwiecień 2024', cz: 'Duben 2024', it: 'Aprile 2024' },
    title: {
      en: 'Meetings with Art — the Kossak family',
      pl: 'Spotkania ze Sztuką — rodzina Kossaków',
      cz: 'Setkání s uměním — rodina Kossaků',
      it: 'Incontri con l’Arte — la famiglia Kossak'
    },
    lead: {
      en: 'The very first pilot meeting of our new initiative introduced over 55 participants to the fascinating world of Poland’s most artistic family.',
      pl: 'Pierwsze, pilotażowe spotkanie naszej nowej inicjatywy wprowadziło ponad 55 uczestników w fascynujący świat najbardziej artystycznej polskiej rodziny.',
      cz: 'Úplně první pilotní setkání naší nové iniciativy uvedlo více než 55 účastníků do fascinujícího světa nejumělečtější polské rodiny.',
      it: 'Il primissimo incontro pilota della nostra nuova iniziativa ha introdotto oltre 55 partecipanti nell’affascinante mondo della famiglia più artistica della Polonia.'
    },
    body: {
      en: [
        'We are pleased to introduce a new initiative of the Stock Foundation — Encounters with Art. The project aims to facilitate contact with art for people in need of support, seeking balance in their lives for various personal reasons. In partnership with the Association of Support Centres, we organised the first pilot meeting with art in Lublin, led by Ms Jolanta Polańska, Senior Curator at the National Museum in Lublin.',
        'The participants — over 55 people — had the opportunity to get to know the fascinating world of the Kossak family: the talented painters Juliusz, his sons Wojciech and Tadeusz, and his grandsons Jerzy and Karol, as well as the extraordinary women of the family — literary personalities Magdalena Samozwaniec, Maria Pawlikowska-Jasnorzewska, Zofia Kossak-Szczucka and Simona Kossak, professor of forestry sciences and a well-known environmental activist.',
        'Our initiative was very warmly received, and it was clear that it had a real, positive impact on the lives of older people.'
      ],
      pl: [
        'Z przyjemnością przedstawiamy nową inicjatywę Fundacji Stock — Spotkania ze Sztuką. Projekt ma ułatwiać kontakt ze sztuką osobom potrzebującym wsparcia, szukającym równowagi w życiu z różnych osobistych powodów. W partnerstwie z Zespołem Ośrodków Wsparcia zorganizowaliśmy w Lublinie pierwsze, pilotażowe spotkanie ze sztuką, które poprowadziła pani Jolanta Polańska, starsza kustosz Muzeum Narodowego w Lublinie.',
        'Uczestnicy — ponad 55 osób — mieli okazję poznać fascynujący świat rodziny Kossaków: utalentowanych malarzy Juliusza, jego synów Wojciecha i Tadeusza oraz wnuków Jerzego i Karola, a także niezwykłe kobiety tej rodziny — osobowości literackie Magdalenę Samozwaniec, Marię Pawlikowską-Jasnorzewską, Zofię Kossak-Szczucką oraz Simonę Kossak, profesor nauk leśnych i znaną działaczkę ekologiczną.',
        'Nasza inicjatywa została przyjęta bardzo ciepło i było widać, że ma realny, pozytywny wpływ na życie osób starszych.'
      ],
      cz: [
        'S potěšením představujeme novou iniciativu Nadace Stock — Setkání s uměním. Projekt má usnadňovat kontakt s uměním lidem, kteří potřebují podporu a z různých osobních důvodů hledají v životě rovnováhu. V partnerství se Sdružením podpůrných center jsme v Lublinu uspořádali první pilotní setkání s uměním, které vedla paní Jolanta Polańska, starší kurátorka Národního muzea v Lublinu.',
        'Účastníci — více než 55 osob — měli příležitost poznat fascinující svět rodiny Kossaků: talentované malíře Juliusze, jeho syny Wojciecha a Tadeusze a vnuky Jerzyho a Karola, a také mimořádné ženy této rodiny — literární osobnosti Magdalenu Samozwaniec, Marii Pawlikowskou-Jasnorzewskou, Zofii Kossak-Szczuckou a Simonu Kossakovou, profesorku lesnických věd a známou ekologickou aktivistku.',
        'Naše iniciativa byla přijata velmi vřele a bylo zřejmé, že má skutečný, pozitivní dopad na životy starších lidí.'
      ],
      it: [
        'Siamo lieti di presentare una nuova iniziativa della Fondazione Stock — Incontri con l’Arte. Il progetto mira a facilitare il contatto con l’arte alle persone che hanno bisogno di sostegno e che, per varie ragioni personali, cercano equilibrio nella propria vita. In partenariato con l’Associazione dei Centri di Sostegno abbiamo organizzato a Lublino il primo incontro pilota con l’arte, guidato dalla signora Jolanta Polańska, curatrice senior del Museo Nazionale di Lublino.',
        'I partecipanti — oltre 55 persone — hanno avuto l’opportunità di conoscere l’affascinante mondo della famiglia Kossak: i talentuosi pittori Juliusz, i suoi figli Wojciech e Tadeusz e i nipoti Jerzy e Karol, oltre alle straordinarie donne della famiglia — le personalità letterarie Magdalena Samozwaniec, Maria Pawlikowska-Jasnorzewska, Zofia Kossak-Szczucka e Simona Kossak, professoressa di scienze forestali e nota attivista ambientale.',
        'La nostra iniziativa è stata accolta con grande calore ed era evidente il suo impatto reale e positivo sulla vita delle persone anziane.'
      ]
    }
  },
  {
    id: 'psych24', ts: '2024-03-08', cat: 'community', img: '/uploads/cover-community.svg',
    date: { en: 'March 2024', pl: 'Marzec 2024', cz: 'Březen 2024', it: 'Marzo 2024' },
    title: {
      en: 'Psychological support programme — Ms Alona’s story',
      pl: 'Program wsparcia psychologicznego — historia pani Alony',
      cz: 'Program psychologické podpory — příběh paní Alony',
      it: 'Programma di sostegno psicologico — la storia della signora Alona'
    },
    lead: {
      en: 'The courage to ask for help gave many refugee stories a happy ending. Today we share the first of them.',
      pl: 'Odwaga, by poprosić o pomoc, dała wielu uchodźczym historiom szczęśliwe zakończenie. Dziś dzielimy się pierwszą z nich.',
      cz: 'Odvaha požádat o pomoc dala mnoha uprchlickým příběhům šťastný konec. Dnes se dělíme o první z nich.',
      it: 'Il coraggio di chiedere aiuto ha dato a molte storie di rifugiati un lieto fine. Oggi condividiamo la prima di esse.'
    },
    body: {
      en: [
        'The success of the psychological support programme for refugees and their children run by the Stock Foundation is that so many people had the courage to ask for help. Thanks to this, many stories about the difficult beginnings of refugees have a happy ending. Today we want to share the first one.',
        'Ms Alona came to Poland with her eight-year-old daughter and settled in a refugee centre. After some time, overwhelmed by the situation she found herself in and by the fact that she had to cope with it alone, she started to abuse alcohol. She was given a helping hand by the manager of the centre, who called in a psychologist working with the Foundation.',
        'Ms Alona attended therapy regularly for 8 months and now stays in contact with a psychologist and attends AA meetings. The support has allowed her to stabilise her situation: she has been sober for a year and a half, has a permanent job and a Polish partner — they met at an AA group meeting, rent a flat together and have bought a car. She is planning to finish postgraduate school so that she can develop professionally. The stable family situation has also had a positive impact on her daughter, who is doing well in her new environment. We are very happy that the Foundation’s support has enabled Ms Alona to radically change her life.'
      ],
      pl: [
        'Sukcesem programu wsparcia psychologicznego dla uchodźców i ich dzieci prowadzonego przez Fundację Stock jest to, że tak wiele osób miało odwagę poprosić o pomoc. Dzięki temu wiele historii o trudnych początkach uchodźców ma szczęśliwe zakończenie. Dziś chcemy podzielić się pierwszą z nich.',
        'Pani Alona przyjechała do Polski z ośmioletnią córką i zamieszkała w ośrodku dla uchodźców. Po pewnym czasie, przytłoczona sytuacją, w której się znalazła, i tym, że musiała radzić sobie sama, zaczęła nadużywać alkoholu. Pomocną dłoń wyciągnęła do niej kierowniczka ośrodka, która wezwała współpracującą z Fundacją psycholożkę.',
        'Pani Alona przez 8 miesięcy regularnie uczęszczała na terapię, a dziś pozostaje w kontakcie z psychologiem i chodzi na spotkania AA. Wsparcie pozwoliło jej ustabilizować sytuację: od półtora roku jest trzeźwa, ma stałą pracę i polskiego partnera — poznali się na spotkaniu grupy AA, razem wynajmują mieszkanie i kupili samochód. Planuje ukończyć szkołę policealną, by rozwijać się zawodowo. Stabilna sytuacja rodzinna pozytywnie wpłynęła też na córkę, która dobrze odnajduje się w nowym środowisku. Bardzo się cieszymy, że wsparcie Fundacji pozwoliło pani Alonie radykalnie odmienić życie.'
      ],
      cz: [
        'Úspěchem programu psychologické podpory pro uprchlíky a jejich děti, který vede Nadace Stock, je to, že tolik lidí našlo odvahu požádat o pomoc. Díky tomu má mnoho příběhů o těžkých začátcích uprchlíků šťastný konec. Dnes se chceme podělit o první z nich.',
        'Paní Alona přijela do Polska s osmiletou dcerou a ubytovala se v uprchlickém centru. Po čase, zdrcená situací, v níž se ocitla, a tím, že na všechno byla sama, začala nadužívat alkohol. Pomocnou ruku jí podala vedoucí centra, která přivolala psycholožku spolupracující s nadací.',
        'Paní Alona docházela 8 měsíců pravidelně na terapii a dnes zůstává v kontaktu s psychologem a navštěvuje setkání AA. Podpora jí umožnila stabilizovat situaci: už rok a půl je střízlivá, má stálou práci a polského partnera — poznali se na setkání skupiny AA, společně si pronajímají byt a koupili auto. Plánuje dokončit pomaturitní studium, aby se mohla profesně rozvíjet. Stabilní rodinná situace měla pozitivní vliv i na její dceru, která si v novém prostředí vede dobře. Máme velkou radost, že podpora nadace umožnila paní Aloně radikálně změnit život.'
      ],
      it: [
        'Il successo del programma di sostegno psicologico per i rifugiati e i loro figli gestito dalla Fondazione Stock sta nel fatto che così tante persone hanno avuto il coraggio di chiedere aiuto. Grazie a questo, molte storie sui difficili inizi dei rifugiati hanno un lieto fine. Oggi vogliamo condividere la prima.',
        'La signora Alona è arrivata in Polonia con la figlia di otto anni e si è stabilita in un centro per rifugiati. Dopo qualche tempo, sopraffatta dalla situazione e dal fatto di doverla affrontare da sola, ha iniziato ad abusare di alcol. Le ha teso la mano la direttrice del centro, che ha chiamato una psicologa che collabora con la Fondazione.',
        'La signora Alona ha frequentato regolarmente la terapia per 8 mesi e oggi resta in contatto con la psicologa e partecipa agli incontri degli AA. Il sostegno le ha permesso di stabilizzare la sua situazione: è sobria da un anno e mezzo, ha un lavoro stabile e un compagno polacco — si sono conosciuti a un incontro del gruppo AA, affittano insieme un appartamento e hanno comprato un’auto. Progetta di terminare una scuola post-diploma per crescere professionalmente. La situazione familiare stabile ha avuto un effetto positivo anche sulla figlia, che si trova bene nel nuovo ambiente. Siamo molto felici che il sostegno della Fondazione abbia permesso alla signora Alona di cambiare radicalmente la sua vita.'
      ]
    }
  },
  {
    id: 'schools', ts: '2024-03-02', cat: 'community', img: '/uploads/cover-community.svg',
    date: { en: 'March 2024', pl: 'Marzec 2024', cz: 'Březen 2024', it: 'Marzo 2024' },
    title: {
      en: 'Supporting Lublin schools — summary of 2023',
      pl: 'Wsparcie lubelskich szkół — podsumowanie 2023',
      cz: 'Podpora lublinských škol — shrnutí roku 2023',
      it: 'Sostegno alle scuole di Lublino — bilancio del 2023'
    },
    lead: {
      en: 'Nine schools, 3,800 pupils — including 800 children from Ukraine — and equipment that serves everyone and helps refugees integrate.',
      pl: 'Dziewięć szkół, 3800 uczniów — w tym 800 dzieci z Ukrainy — i wyposażenie, które służy wszystkim i pomaga uchodźcom w integracji.',
      cz: 'Devět škol, 3 800 žáků — včetně 800 dětí z Ukrajiny — a vybavení, které slouží všem a pomáhá uprchlíkům s integrací.',
      it: 'Nove scuole, 3.800 alunni — tra cui 800 bambini dall’Ucraina — e attrezzature che servono a tutti e aiutano i rifugiati a integrarsi.'
    },
    body: {
      en: [
        'The Stock Foundation’s programme of supporting Lublin schools through direct donations is a high social impact initiative. The equipment purchased is available to all students and helps integrate refugees, and it will also serve other school purposes in the long term.',
        'In 2023, the programme reached 9 schools in Lublin and 3,800 pupils — beneficiaries of school aid, including 800 children from Ukraine. We funded 600 school kits, equipped classrooms with the necessary equipment and common rooms with new furniture, purchased materials and stationery, and supported the organisation of integration events.',
        'A key principle of the programme is the commitment to equality — the equipment purchased serves all pupils — and it plays an important role in integrating refugee pupils into the school community.'
      ],
      pl: [
        'Program Fundacji Stock wspierania lubelskich szkół poprzez bezpośrednie darowizny to inicjatywa o dużym oddziaływaniu społecznym. Zakupione wyposażenie jest dostępne dla wszystkich uczniów i pomaga w integracji uchodźców, a w dłuższej perspektywie będzie służyć także innym szkolnym celom.',
        'W 2023 roku program objął 9 lubelskich szkół i 3800 uczniów — beneficjentów pomocy szkolnej, w tym 800 dzieci z Ukrainy. Sfinansowaliśmy 600 wyprawek szkolnych, wyposażyliśmy klasy w niezbędny sprzęt, a świetlice w nowe meble, zakupiliśmy materiały i artykuły papiernicze oraz wsparliśmy organizację wydarzeń integracyjnych.',
        'Kluczową zasadą programu jest równość — zakupione wyposażenie służy wszystkim uczniom — a sam program odgrywa ważną rolę w integracji dzieci uchodźczych ze szkolną społecznością.'
      ],
      cz: [
        'Program Nadace Stock na podporu lublinských škol prostřednictvím přímých darů je iniciativou s velkým společenským dopadem. Zakoupené vybavení je k dispozici všem žákům, pomáhá s integrací uprchlíků a v dlouhodobém horizontu poslouží i dalším školním účelům.',
        'V roce 2023 program zahrnul 9 lublinských škol a 3 800 žáků — příjemců školní pomoci, včetně 800 dětí z Ukrajiny. Financovali jsme 600 školních sad, vybavili třídy potřebným zařízením a družiny novým nábytkem, nakoupili materiály a papírenské potřeby a podpořili pořádání integračních akcí.',
        'Klíčovou zásadou programu je rovnost — zakoupené vybavení slouží všem žákům — a program hraje důležitou roli v začleňování uprchlických dětí do školní komunity.'
      ],
      it: [
        'Il programma della Fondazione Stock di sostegno alle scuole di Lublino attraverso donazioni dirette è un’iniziativa ad alto impatto sociale. Le attrezzature acquistate sono a disposizione di tutti gli studenti, aiutano a integrare i rifugiati e a lungo termine serviranno anche ad altri scopi scolastici.',
        'Nel 2023 il programma ha raggiunto 9 scuole di Lublino e 3.800 alunni — beneficiari degli aiuti scolastici, tra cui 800 bambini dall’Ucraina. Abbiamo finanziato 600 kit scolastici, dotato le aule delle attrezzature necessarie e le sale comuni di nuovi mobili, acquistato materiali e articoli di cancelleria e sostenuto l’organizzazione di eventi di integrazione.',
        'Un principio chiave del programma è l’impegno per l’uguaglianza — le attrezzature acquistate servono a tutti gli alunni — e il programma svolge un ruolo importante nell’integrazione degli alunni rifugiati nella comunità scolastica.'
      ]
    }
  },
  {
    id: 'musicsummary', ts: '2024-02-10', cat: 'scholar', img: '/uploads/cover-scholar.svg',
    date: { en: 'February 2024', pl: 'Luty 2024', cz: 'Únor 2024', it: 'Febbraio 2024' },
    title: {
      en: 'Music scholarships — summary of 2023',
      pl: 'Stypendia muzyczne — podsumowanie 2023',
      cz: 'Hudební stipendia — shrnutí roku 2023',
      it: 'Borse di studio musicali — bilancio del 2023'
    },
    lead: {
      en: 'Ninety beneficiaries, 1,620 hours of music lessons and five Ukrainian teachers — a year of music as therapy.',
      pl: 'Dziewięćdziesięcioro beneficjentów, 1620 godzin lekcji muzyki i pięcioro ukraińskich nauczycieli — rok muzyki jako terapii.',
      cz: 'Devadesát příjemců, 1 620 hodin hudebních lekcí a pět ukrajinských učitelů — rok hudby jako terapie.',
      it: 'Novanta beneficiari, 1.620 ore di lezioni di musica e cinque insegnanti ucraini — un anno di musica come terapia.'
    },
    body: {
      en: [
        'The scholarship programme run in cooperation with the Homo Faber Association is another important project of the Stock Foundation. The initiative provides talented Ukrainian youth with the musical education interrupted by the war and helps them cope with difficult experiences through their involvement in music.',
        'In 2023, the programme supported 90 beneficiaries with 1,620 hours of music lessons, in cooperation with 5 highly qualified Ukrainian teachers. It gives young people a chance to continue the musical education interrupted by the outbreak of war and treats engagement in music and artistic expression as a therapeutic tool for coping with trauma.',
        'The programme supports young people in regaining their life balance — and at the same time creates an opportunity to employ and support Ukrainian teachers.'
      ],
      pl: [
        'Program stypendialny prowadzony we współpracy ze stowarzyszeniem Homo Faber to kolejny ważny projekt Fundacji Stock. Inicjatywa zapewnia utalentowanej młodzieży z Ukrainy edukację muzyczną przerwaną przez wojnę i pomaga radzić sobie z trudnymi doświadczeniami poprzez zaangażowanie w muzykę.',
        'W 2023 roku program objął 90 beneficjentów i 1620 godzin lekcji muzyki, we współpracy z pięciorgiem wysoko wykwalifikowanych ukraińskich nauczycieli. Daje młodym szansę kontynuowania edukacji muzycznej przerwanej wybuchem wojny, a zaangażowanie w muzykę i ekspresję artystyczną traktuje jako narzędzie terapeutyczne w radzeniu sobie z traumą.',
        'Program wspiera młodych ludzi w odzyskiwaniu życiowej równowagi — a jednocześnie tworzy możliwość zatrudnienia i wsparcia ukraińskich nauczycieli.'
      ],
      cz: [
        'Stipendijní program vedený ve spolupráci se sdružením Homo Faber je dalším důležitým projektem Nadace Stock. Iniciativa poskytuje talentované ukrajinské mládeži hudební vzdělání přerušené válkou a pomáhá jí vyrovnávat se s těžkými zážitky prostřednictvím zapojení do hudby.',
        'V roce 2023 program podpořil 90 příjemců a 1 620 hodin hudebních lekcí ve spolupráci s pěti vysoce kvalifikovanými ukrajinskými učiteli. Dává mladým šanci pokračovat v hudebním vzdělávání přerušeném vypuknutím války a zapojení do hudby a uměleckého projevu chápe jako terapeutický nástroj pro zvládání traumatu.',
        'Program podporuje mladé lidi v znovunalezení životní rovnováhy — a zároveň vytváří příležitost zaměstnat a podpořit ukrajinské učitele.'
      ],
      it: [
        'Il programma di borse di studio gestito in collaborazione con l’associazione Homo Faber è un altro importante progetto della Fondazione Stock. L’iniziativa offre ai giovani talenti ucraini l’educazione musicale interrotta dalla guerra e li aiuta ad affrontare esperienze difficili attraverso il coinvolgimento nella musica.',
        'Nel 2023 il programma ha sostenuto 90 beneficiari con 1.620 ore di lezioni di musica, in collaborazione con 5 insegnanti ucraini altamente qualificati. Dà ai giovani la possibilità di continuare l’educazione musicale interrotta dallo scoppio della guerra e considera l’impegno nella musica e nell’espressione artistica uno strumento terapeutico per affrontare i traumi.',
        'Il programma sostiene i giovani nel ritrovare il proprio equilibrio di vita — e allo stesso tempo crea l’opportunità di impiegare e sostenere insegnanti ucraini.'
      ]
    }
  },
  {
    id: 'psychsummary', ts: '2024-02-05', cat: 'community', img: '/uploads/cover-community.svg',
    date: { en: 'February 2024', pl: 'Luty 2024', cz: 'Únor 2024', it: 'Febbraio 2024' },
    title: {
      en: 'Psychological support programme — summary',
      pl: 'Program wsparcia psychologicznego — podsumowanie',
      cz: 'Program psychologické podpory — shrnutí',
      it: 'Programma di sostegno psicologico — bilancio'
    },
    lead: {
      en: 'A hundred people supported and 1,200 hours of face-to-face sessions with experienced psychologists educated in Ukraine.',
      pl: 'Sto osób objętych wsparciem i 1200 godzin indywidualnych sesji z doświadczonymi psychologami wykształconymi w Ukrainie.',
      cz: 'Sto podpořených osob a 1 200 hodin osobních sezení se zkušenými psychology vzdělanými na Ukrajině.',
      it: 'Cento persone sostenute e 1.200 ore di sedute individuali con psicologi esperti formati in Ucraina.'
    },
    body: {
      en: [
        'The Stock Foundation has been addressing the challenges of the influx of refugees to Lublin since the beginning of the humanitarian crisis related to the war in Ukraine, implementing projects that support them in many aspects of their lives. One of these is a psychological support programme for traumatised refugees and their children.',
        'The programme provided psychological support to 100 people, with 1,200 hours of face-to-face sessions, in cooperation with 3 psychologists educated in Ukraine and fluent in Polish — therapists with many years of experience and high professional competence.',
        'The programme creates a safe and non-judgmental environment where individuals can talk about their difficult emotions and problems, learn practical tools for dealing with stress and trauma — relaxation techniques, mindfulness and breathing exercises — and effectively cope with the challenges of adapting to a new life situation.'
      ],
      pl: [
        'Fundacja Stock od początku kryzysu humanitarnego związanego z wojną w Ukrainie odpowiada na wyzwania napływu uchodźców do Lublina, realizując projekty wspierające ich w wielu aspektach życia. Jednym z nich jest program wsparcia psychologicznego dla straumatyzowanych uchodźców i ich dzieci.',
        'Program objął wsparciem psychologicznym 100 osób w ramach 1200 godzin indywidualnych sesji, we współpracy z trójką psychologów wykształconych w Ukrainie i biegle mówiących po polsku — terapeutów z wieloletnim doświadczeniem i wysokimi kompetencjami zawodowymi.',
        'Program tworzy bezpieczne, wolne od ocen środowisko, w którym można rozmawiać o trudnych emocjach i problemach, uczyć się praktycznych narzędzi radzenia sobie ze stresem i traumą — technik relaksacyjnych, ćwiczeń uważności i oddechowych — i skutecznie mierzyć się z wyzwaniami adaptacji do nowej sytuacji życiowej.'
      ],
      cz: [
        'Nadace Stock od začátku humanitární krize spojené s válkou na Ukrajině reaguje na výzvy přílivu uprchlíků do Lublinu a realizuje projekty, které je podporují v mnoha oblastech života. Jedním z nich je program psychologické podpory pro traumatizované uprchlíky a jejich děti.',
        'Program poskytl psychologickou podporu 100 osobám v rámci 1 200 hodin osobních sezení, ve spolupráci se třemi psychology vzdělanými na Ukrajině a plynně hovořícími polsky — terapeuty s mnohaletou praxí a vysokou odbornou kompetencí.',
        'Program vytváří bezpečné a nehodnotící prostředí, kde lidé mohou mluvit o svých těžkých emocích a problémech, učit se praktické nástroje pro zvládání stresu a traumatu — relaxační techniky, cvičení všímavosti a dechová cvičení — a účinně zvládat výzvy adaptace na novou životní situaci.'
      ],
      it: [
        'La Fondazione Stock affronta le sfide dell’afflusso di rifugiati a Lublino fin dall’inizio della crisi umanitaria legata alla guerra in Ucraina, realizzando progetti che li sostengono in molti aspetti della loro vita. Uno di questi è il programma di sostegno psicologico per i rifugiati traumatizzati e i loro figli.',
        'Il programma ha fornito sostegno psicologico a 100 persone, con 1.200 ore di sedute individuali, in collaborazione con 3 psicologi formati in Ucraina e fluenti in polacco — terapeuti con molti anni di esperienza e alta competenza professionale.',
        'Il programma crea un ambiente sicuro e privo di giudizio in cui le persone possono parlare delle proprie emozioni e difficoltà, apprendere strumenti pratici per affrontare stress e traumi — tecniche di rilassamento, esercizi di mindfulness e di respirazione — e affrontare efficacemente le sfide dell’adattamento a una nuova situazione di vita.'
      ]
    }
  },
  {
    id: 'polishcourses', ts: '2024-02-02', cat: 'community', img: '/uploads/cover-community.svg',
    date: { en: 'February 2024', pl: 'Luty 2024', cz: 'Únor 2024', it: 'Febbraio 2024' },
    title: {
      en: 'Polish language courses — summary',
      pl: 'Kursy języka polskiego — podsumowanie',
      cz: 'Kurzy polštiny — shrnutí',
      it: 'Corsi di lingua polacca — bilancio'
    },
    lead: {
      en: 'Over 100 participants and 632 lessons — language skills that turned into jobs, diplomas and new beginnings.',
      pl: 'Ponad 100 uczestników i 632 lekcje — kompetencje językowe, które zamieniły się w pracę, dyplomy i nowe początki.',
      cz: 'Přes 100 účastníků a 632 lekcí — jazykové dovednosti, které se proměnily v práci, diplomy a nové začátky.',
      it: 'Oltre 100 partecipanti e 632 lezioni — competenze linguistiche trasformate in lavoro, diplomi e nuovi inizi.'
    },
    body: {
      en: [
        'The start of the new year is a great time to sum up one of the Stock Foundation’s earliest initiatives — the Spirit of Ukraine refugee programme and its Polish language courses. Funded by us, the programme was implemented from July 2022 to December 2023 in cooperation with IKO, the Institute for the Education of Foreigners.',
        'More than 100 people took part — 60% at beginner level and 40% at intermediate level — completing 632 lessons in 7 groups. Participants acquired language competences allowing them to communicate in Polish, which facilitated their integration and enabled them to take up employment.',
        'According to the participants, the assistance had a real impact on their lives: Ms Viktoria has started working at a school, Ms Tetiana from Hrubieszów passed the examination at the Medical Chamber and works as a doctor at a hospital, Ms Anna works as a dentist, Ms Maja has moved to Warsaw, Ms Yulia works at a company in Lublin and Ms Tetiana works as an office technician at the municipality office. We thank everyone for their involvement and congratulate them on their successes!'
      ],
      pl: [
        'Początek nowego roku to świetny moment na podsumowanie jednej z najwcześniejszych inicjatyw Fundacji Stock — programu dla uchodźców Spirit of Ukraine i kursów języka polskiego. Finansowany przez nas program był realizowany od lipca 2022 do grudnia 2023 roku we współpracy z IKO — Instytutem Kształcenia Obcokrajowców.',
        'Wzięło w nim udział ponad 100 osób — 60% na poziomie początkującym i 40% średnio zaawansowanym — które ukończyły 632 lekcje w 7 grupach. Uczestnicy zdobyli kompetencje językowe pozwalające porozumiewać się po polsku, co ułatwiło im integrację i podjęcie pracy.',
        'Jak mówią sami uczestnicy, pomoc realnie wpłynęła na ich życie: pani Viktoria zaczęła pracować w szkole, pani Tetiana z Hrubieszowa zdała egzamin w Izbie Lekarskiej i pracuje jako lekarka w szpitalu, pani Anna pracuje jako dentystka, pani Maja przeprowadziła się do Warszawy, pani Yulia pracuje w lubelskiej firmie, a pani Tetiana jako technik biurowy w urzędzie gminy. Dziękujemy wszystkim za zaangażowanie i gratulujemy sukcesów!'
      ],
      cz: [
        'Začátek nového roku je skvělý čas ke shrnutí jedné z nejstarších iniciativ Nadace Stock — programu pro uprchlíky Spirit of Ukraine a kurzů polštiny. Námi financovaný program probíhal od července 2022 do prosince 2023 ve spolupráci s IKO — Institutem vzdělávání cizinců.',
        'Zúčastnilo se ho více než 100 osob — 60 % na začátečnické úrovni a 40 % na středně pokročilé — které absolvovaly 632 lekcí v 7 skupinách. Účastníci získali jazykové kompetence umožňující komunikovat v polštině, což jim usnadnilo integraci a nástup do zaměstnání.',
        'Podle samotných účastníků měla pomoc skutečný dopad na jejich životy: paní Viktoria začala pracovat ve škole, paní Tetiana z Hrubieszówa složila zkoušku u lékařské komory a pracuje jako lékařka v nemocnici, paní Anna pracuje jako zubařka, paní Maja se přestěhovala do Varšavy, paní Yulia pracuje ve firmě v Lublinu a paní Tetiana jako administrativní technička na obecním úřadě. Děkujeme všem za nasazení a gratulujeme k úspěchům!'
      ],
      it: [
        'L’inizio del nuovo anno è un ottimo momento per fare il bilancio di una delle prime iniziative della Fondazione Stock — il programma per rifugiati Spirit of Ukraine e i corsi di lingua polacca. Finanziato da noi, il programma è stato realizzato da luglio 2022 a dicembre 2023 in collaborazione con IKO, l’Istituto per l’Educazione degli Stranieri.',
        'Vi hanno partecipato oltre 100 persone — il 60% a livello principiante e il 40% a livello intermedio — completando 632 lezioni in 7 gruppi. I partecipanti hanno acquisito competenze linguistiche che permettono loro di comunicare in polacco, facilitando l’integrazione e l’accesso al lavoro.',
        'Secondo i partecipanti stessi, l’aiuto ha avuto un impatto reale sulle loro vite: la signora Viktoria ha iniziato a lavorare a scuola, la signora Tetiana di Hrubieszów ha superato l’esame presso l’Ordine dei Medici e lavora come medico in ospedale, la signora Anna lavora come dentista, la signora Maja si è trasferita a Varsavia, la signora Yulia lavora in un’azienda di Lublino e la signora Tetiana come tecnico d’ufficio presso il comune. Ringraziamo tutti per l’impegno e ci congratuliamo per i successi!'
      ]
    }
  },
  {
    id: 'floc2024', ts: '2024-01-10', cat: 'community', img: '/uploads/cover-community.svg',
    date: { en: 'January 2024', pl: 'Styczeń 2024', cz: 'Leden 2024', it: 'Gennaio 2024' },
    title: {
      en: 'Flavours of Change Grants — let’s change the world together',
      pl: 'Granty Flavours of Change — zmieniajmy świat razem',
      cz: 'Granty Flavours of Change — měňme svět společně',
      it: 'Flavours of Change Grants — cambiamo il mondo insieme'
    },
    lead: {
      en: 'We launched our international employee volunteering programme — grants of up to €2,200 for community projects submitted by Stock employees.',
      pl: 'Wystartował nasz międzynarodowy program wolontariatu pracowniczego — granty do 2200 euro na projekty społeczne zgłaszane przez pracowników Stock.',
      cz: 'Spustili jsme náš mezinárodní program zaměstnaneckého dobrovolnictví — granty až 2 200 eur na komunitní projekty podávané zaměstnanci Stock.',
      it: 'Abbiamo lanciato il nostro programma internazionale di volontariato aziendale — sovvenzioni fino a 2.200 euro per progetti comunitari presentati dai dipendenti Stock.'
    },
    body: {
      en: [
        'We ended the year with great excitement by announcing the launch of our international Stock Foundation employee volunteer programme — Flavours of Change Grants!',
        'The main objectives of the programme are to encourage Stock Spirits Group staff to volunteer and participate in projects for the benefit of their communities, to support projects that respond to the diverse needs of the community, and to develop a sense of social responsibility among employees.',
        'The Foundation encourages all SSG employees wishing to contribute to their community to submit projects that need financial support. Grants of up to €2,200 are available, depending on the scope and impact of the proposed project.',
        'We are looking for projects that align with our mission of support, inclusivity, community engagement, education and environmental sustainability — across areas such as health, arts and culture, community services and improving the local environment. We want them to address immediate needs and make the greatest difference.'
      ],
      pl: [
        'Rok zakończyliśmy wielką ekscytacją, ogłaszając start międzynarodowego programu wolontariatu pracowniczego Fundacji Stock — Flavours of Change Grants!',
        'Główne cele programu to zachęcanie pracowników Stock Spirits Group do wolontariatu i udziału w projektach na rzecz ich społeczności, wspieranie projektów odpowiadających na różnorodne potrzeby wspólnot oraz rozwijanie poczucia odpowiedzialności społecznej wśród pracowników.',
        'Fundacja zachęca wszystkich pracowników SSG, którzy chcą działać na rzecz swojej społeczności, do zgłaszania projektów potrzebujących wsparcia finansowego. Dostępne są granty do 2200 euro, w zależności od zakresu i oddziaływania proponowanego projektu.',
        'Szukamy projektów zgodnych z naszą misją wsparcia, włączania, zaangażowania społecznego, edukacji i zrównoważonego rozwoju — w obszarach takich jak zdrowie, sztuka i kultura, usługi dla społeczności czy poprawa lokalnego środowiska. Chcemy, by odpowiadały na pilne potrzeby i robiły jak największą różnicę.'
      ],
      cz: [
        'Rok jsme zakončili s velkým nadšením oznámením startu mezinárodního programu zaměstnaneckého dobrovolnictví Nadace Stock — Flavours of Change Grants!',
        'Hlavními cíli programu je povzbuzovat zaměstnance Stock Spirits Group k dobrovolnictví a účasti na projektech ve prospěch jejich komunit, podporovat projekty reagující na rozmanité potřeby společenství a rozvíjet u zaměstnanců smysl pro společenskou odpovědnost.',
        'Nadace vyzývá všechny zaměstnance SSG, kteří chtějí přispět své komunitě, aby podávali projekty potřebující finanční podporu. K dispozici jsou granty až do výše 2 200 eur, v závislosti na rozsahu a dopadu navrhovaného projektu.',
        'Hledáme projekty v souladu s naší misí podpory, inkluzivity, komunitního zapojení, vzdělávání a environmentální udržitelnosti — v oblastech jako zdraví, umění a kultura, služby pro komunitu či zlepšování místního prostředí. Chceme, aby reagovaly na naléhavé potřeby a přinášely co největší změnu.'
      ],
      it: [
        'Abbiamo concluso l’anno con grande entusiasmo annunciando il lancio del programma internazionale di volontariato dei dipendenti della Fondazione Stock — Flavours of Change Grants!',
        'Gli obiettivi principali del programma sono incoraggiare il personale di Stock Spirits Group a fare volontariato e a partecipare a progetti a beneficio delle proprie comunità, sostenere progetti che rispondono ai diversi bisogni della comunità e sviluppare il senso di responsabilità sociale tra i dipendenti.',
        'La Fondazione incoraggia tutti i dipendenti SSG che desiderano contribuire alla propria comunità a presentare progetti che necessitano di sostegno finanziario. Sono disponibili sovvenzioni fino a 2.200 euro, a seconda della portata e dell’impatto del progetto proposto.',
        'Cerchiamo progetti in linea con la nostra missione di sostegno, inclusività, impegno comunitario, educazione e sostenibilità ambientale — in ambiti come la salute, l’arte e la cultura, i servizi alla comunità e il miglioramento dell’ambiente locale. Vogliamo che rispondano a bisogni immediati e facciano la differenza più grande possibile.'
      ]
    }
  },
  {
    id: 'winterconcert', ts: '2024-01-05', cat: 'scholar', img: '/uploads/cover-scholar.svg',
    date: { en: 'January 2024', pl: 'Styczeń 2024', cz: 'Leden 2024', it: 'Gennaio 2024' },
    title: {
      en: 'Concert “Winter Painted with Sound”',
      pl: 'Koncert „Zima malowana dźwiękiem”',
      cz: 'Koncert „Zima malovaná zvukem“',
      it: 'Concerto “L’inverno dipinto con il suono”'
    },
    lead: {
      en: 'Choir, guitars, accordion, piano, violin and bandura filled the Baobab with a festive mood at our scholarship recipients’ concert.',
      pl: 'Chór, gitary, akordeon, fortepian, skrzypce i bandura wypełniły Baobab świątecznym nastrojem na koncercie naszych stypendystów.',
      cz: 'Sbor, kytary, akordeon, klavír, housle a bandura naplnily Baobab sváteční náladou na koncertě našich stipendistů.',
      it: 'Coro, chitarre, fisarmonica, pianoforte, violino e bandura hanno riempito il Baobab di atmosfera festiva al concerto dei nostri borsisti.'
    },
    body: {
      en: [
        'We recently had the pleasure of listening to our scholarship recipients at the “Winter Painted with Sound” concert hosted by Homo Faber. The singing of the choir and the sounds of the guitar, accordion, piano, violin, bandura and other instruments filled the Baobab, putting the participants in a festive mood.',
        'The Stock Foundation scholarship programme, of which Homo Faber is a partner, enables talented Ukrainian children to continue their musical education interrupted by the outbreak of war, and also supports the professional activation of Ukrainian teachers.',
        'The young musicians have the opportunity to continue their passion and develop their skills, which helps them regain their life balance. During this special concert, they showcased their talents to us — magical moments indeed.'
      ],
      pl: [
        'Niedawno mieliśmy przyjemność słuchać naszych stypendystów na koncercie „Zima malowana dźwiękiem” zorganizowanym przez Homo Faber. Śpiew chóru oraz dźwięki gitary, akordeonu, fortepianu, skrzypiec, bandury i innych instrumentów wypełniły Baobab, wprowadzając uczestników w świąteczny nastrój.',
        'Program stypendialny Fundacji Stock, którego partnerem jest Homo Faber, umożliwia utalentowanym ukraińskim dzieciom kontynuowanie edukacji muzycznej przerwanej wybuchem wojny, a także wspiera aktywizację zawodową ukraińskich nauczycieli.',
        'Młodzi muzycy mogą kontynuować swoją pasję i rozwijać umiejętności, co pomaga im odzyskiwać życiową równowagę. Podczas tego wyjątkowego koncertu pokazali nam swoje talenty — to były naprawdę magiczne chwile.'
      ],
      cz: [
        'Nedávno jsme měli to potěšení poslechnout si naše stipendisty na koncertě „Zima malovaná zvukem“, který uspořádal Homo Faber. Zpěv sboru a zvuky kytary, akordeonu, klavíru, houslí, bandury a dalších nástrojů naplnily Baobab a navodily účastníkům sváteční náladu.',
        'Stipendijní program Nadace Stock, jehož partnerem je Homo Faber, umožňuje talentovaným ukrajinským dětem pokračovat v hudebním vzdělávání přerušeném vypuknutím války a podporuje také profesní aktivizaci ukrajinských učitelů.',
        'Mladí hudebníci mohou pokračovat ve své vášni a rozvíjet své dovednosti, což jim pomáhá znovu nalézt životní rovnováhu. Během tohoto výjimečného koncertu nám předvedli své talenty — byly to opravdu kouzelné okamžiky.'
      ],
      it: [
        'Di recente abbiamo avuto il piacere di ascoltare i nostri borsisti al concerto “L’inverno dipinto con il suono” ospitato da Homo Faber. Il canto del coro e i suoni di chitarra, fisarmonica, pianoforte, violino, bandura e altri strumenti hanno riempito il Baobab, mettendo i partecipanti in un’atmosfera festiva.',
        'Il programma di borse di studio della Fondazione Stock, di cui Homo Faber è partner, permette ai bambini ucraini di talento di continuare l’educazione musicale interrotta dallo scoppio della guerra e sostiene anche l’attivazione professionale degli insegnanti ucraini.',
        'I giovani musicisti hanno l’opportunità di coltivare la loro passione e sviluppare le proprie capacità, il che li aiuta a ritrovare l’equilibrio nella vita. Durante questo concerto speciale ci hanno mostrato i loro talenti — momenti davvero magici.'
      ]
    }
  }
];

/* Keep the list in chronological order (newest first) regardless of file order.
   Every page (news grid, featured, homepage strip, "more news") relies on this. */
window.ARTICLES.sort(function (a, b) { return (b.ts || '').localeCompare(a.ts || ''); });
