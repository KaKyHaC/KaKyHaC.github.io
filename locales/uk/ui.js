/** UI strings — Ukrainian */
export default {
    meta: {
        lang: 'uk',
        description: 'Дмитро Баранник — Senior / Staff інженер-програміст · Техлід · PhD',
        ogTitle: 'Дмитро Баранник — Senior / Staff інженер-програміст · Техлід · PhD',
        ogDescription: 'Senior / Staff інженер-програміст · Техлід · PhD. 9+ років комерційного досвіду.',
    },
    profile: {
        role: 'Senior / Staff інженер-програміст',
        subRole: 'Техлід · PhD',
        tagline: '9+ років створення високопродуктивного та масштабованого програмного забезпечення.',
        downloadCV: 'Завантажити CV',
    },
    cvModal: {
        "closeLabel": "Закрити діалог",
        "kicker": "РЕЗЮМЕ PDF",
        "directLabel": "Android CV · Пряме завантаження",

        "title": "Завантажити CV",
        "subtitle": "Оберіть напрям відповідно до вакансії:",
        "staffBadge": "Mobile, web, системи та дослідження",
        "staffTitle": "Software Engineer",
        "staffDesc": "Комерційний mobile-досвід, випущені web, C++ та IoT-проєкти, власні продукти, PhD-дослідження і патент.",
        "staffBtn": "Завантажити Software Engineer CV",
        "androidBadge": "Основне CV · Практична розробка",
        "androidTitle": "Android Developer",
        "androidDesc": "Kotlin, Compose, стрімінг та інтеграція пристроїв, 25 000+ завантажень у Google Play і випущена Gemini-функція.",
        "androidBtn": "Завантажити Android CV",
        "footerNote": "Двосторінкові PDF англійською з текстом, який можна виділити. Пряме завантаження відкриває Android CV.",
        "format": "2 сторінки · Англійською",
        "textFormat": "Текст можна виділити"
},
    nav: {
        about: 'Про мене',
        skills: 'Компетенції',
        experience: 'Досвід',
        projects: 'Проєкти',
        education: 'Освіта',
        research: 'Дослідження та R&D',
    },
    sections: {
        about: 'Про мене',
        skills: 'Компетенції',
        experience: 'Досвід',
        projects: 'Проєкти',
        education: 'Освіта',
        research: 'Дослідження та R&D',
    },
    about: {
        title1: 'Senior / Staff інженер-програміст · Техлід · PhD',
        bio1: 'Старший / Staff інженер-програміст і техлід з понад 9 роками комерційного досвіду проектування та створення високонавантажених, відмовостійких систем. Мій інженерний фундамент базується на глибокій технологічній зрілості: від масштабованих мобільних стрімінгових архітектур (Kotlin, Clean Architecture, Coroutines) і низькорівневих алгоритмічних рушіїв (C++20, SIMD-векторизація, zero-allocation пам\'ять) до розподілених IoT-прошивок і сучасних веб-платформ.',
        bio4: 'У цих напрямах моя робота не обмежується реалізацією: я перетворюю продуктові й операційні обмеження на технічні рішення, узгоджую застосунок, бекенд, обладнання та процес доставки й залишаюся відповідальним за підтримуваність після релізу. Технології змінюються разом із задачею, стандарт відповідальності — ні.',
        bio2: '<strong>Agentic Software Engineering:</strong> ШІ-оркестрація — ключова складова мого інженерного процесу. Працюючи в ролі техліда над автономними кодуючими агентами (Google Antigravity з Gemini, GPT/Codex), я керую розробкою на основі специфікацій (spec-driven development), задаю суворі архітектурні обмеження та впроваджую верифікаційні цикли тестування.',
        bio3: '<i>Ціную продуктову майстерність, прагматичний системний дизайн та прозору Agile/Scrum-культуру, що заохочує швидкі інновації, здоровий зворотний зв\'язок та інженерну досконалість.</i>',
        title2: 'Продукт та лідерство',
        leadership1: '<strong>Інді-розробка (DᎥᗰᗩᒪᎥᑎᗩ):</strong> Створив та опублікував низку комерційних продуктів із сумарним обсягом понад <strong>25,000+ завантажень</strong> та відмінним рейтингом <strong>5.0★</strong>. Серед флагманів: <em>Tic-Tac-Toe: 3 Player Game</em> (10,000+ завантажень, 5.0★), <em>Brainrot Clicker: Aura Farming</em> (10,000+ завантажень, 5.0★) та <em>People Notes: AI Agent CRM</em> (5.0★). Керував повним продуктовим циклом, бекендом реального часу (Firestore) та монетизацією.',
        leadership2: '<strong>Технічне лідерство та менторство:</strong> Практичний досвід керівництва командами інженерів, проведення архітектурних рев\'ю та code review, налаштування пайплайнів контролю якості (CI/CD) та наставництва інженерів.',
        title3: 'Дослідження та академічна діяльність',
        research1: '<strong>Академічний статус:</strong> Кандидат наук за спеціальністю «Електронні комунікації та радіотехніка» (НУРЕ, 2025). Доцент кафедри протидії кіберзлочинності Харківського національного університету внутрішніх справ (ХНУВС).',
        research2: '<strong>Досягнення:</strong> Власник патенту на метод нерівноважного позиційного кодування для зменшення інтенсивності відеопотоку. Автор наукових публікацій у виданнях Scopus (Q3). Стипендіат Кабінету Міністрів України для молодих вчених (2025).',
        bento: [
            {
                kind: 'scope',
                index: '01',
                isWide: true,
                color: 'var(--accent)',
                rgb: 'var(--accent-rgb)',
                icon: 'fas fa-sitemap',
                metric: '9+',
                metricLabel: 'років системної архітектури',
                title: 'Наскрізна архітектура цифрових продуктів',
                points: [
                    {
                        lead: 'Клієнтські платформи',
                        text: 'Проєктування чуйних інтерфейсів на Android (Jetpack Compose), iOS, десктопі (Compose Multiplatform) та сучасному вебі з детермінованим MVI-станом.'
                    },
                    {
                        lead: 'Спільний Core & Власні SDK',
                        text: 'Створення єдиного джерела правди на Kotlin Multiplatform та C++, що заощаджує до 40% бюджету та виключає розсинхрон логіки між платформами.'
                    },
                    {
                        lead: 'Хмара, Дата-Синхронізація & IoT',
                        text: 'Побудова високонавантажених серверних API, локальних offline-first баз даних (Room/SQLite) та телеметричних мостів до IoT-пристроїв (ESP32/BLE).'
                    },
                    {
                        lead: 'Ентерпрайз-надійність & Швидкість',
                        text: 'Забезпечення нульових крашів, автоматизованих шлюзів перевірки CI/CD та швидкого виходу продуктів на ринок (Time-to-Market).'
                    }
                ],
                tags: ['Enterprise Architecture', 'Mobile · Desktop · Web', 'KMP & SDK Core', 'Cloud & IoT'],
                back: {
                    badge: 'ЕНТЕРПРАЙЗ-ТОПОЛОГІЯ ПРОДУКТУ',
                    flipLabel: '3D Екосистема',
                    flipAria: 'Перевернути картку для перегляду 360-градусної карти архітектури цифрових продуктів',
                    frontHint: '3D-мапа: Mobile, Desktop, Web, Shared SDK & Cloud Backend',
                    icon: 'fas fa-network-wired',
                    title: '360° Архітектурна карта цифрових продуктів',
                    subtitle: 'Від користувацьких інтерфейсів та спільного SDK-ядра до хмарних сервісів та IoT',
                    callouts: [
                        {
                            lead: 'Єдине джерело правди (KMP & C++)',
                            text: 'До 40% економії бюджету та гарантія повної узгодженості логіки на iOS, Android, десктопі й вебі.'
                        },
                        {
                            lead: 'Offline-First надійність',
                            text: 'Миттєвий відгук UI, локальне кешування в SQLite/Room та бекграундна синхронізація без втрат даних.'
                        },
                        {
                            lead: 'End-to-End масштабування',
                            text: 'Єдина звʼязка від апаратних датчиків (ESP32/BLE) до високонавантажених хмарних API та мікросервісів.'
                        }
                    ],
                    diagramLabels: {
                        title: '360° Архітектурна карта цифрових продуктів',
                        swipeHint: 'Свайпайте схему по горизонталі для деталей',
                        mobileHeader: '📱 МОБІЛЬНІ (ANDROID & iOS)',
                        mobileTech: 'Jetpack Compose · Flutter',
                        mobileSub1: '60/120 FPS Плавні інтерфейси',
                        mobileSub2: 'Offline-First та реактивний стан',
                        desktopHeader: '💻 ДЕСКТОП (macOS & WIN)',
                        desktopTech: 'Compose Multiplatform · C++',
                        desktopSub1: 'Високопродуктивний нативний софт',
                        desktopSub2: 'Прямий доступ до OS та памʼяті',
                        webHeader: '🌐 СУЧАСНИЙ ВЕБ ТА ПОРТАЛИ',
                        webTech: 'React · Astro · Edge SSR',
                        webSub1: 'SaaS-дашборди та B2B-портали',
                        webSub2: 'Миттєвий LCP · Нульовий CLS',
                        flowMvi: '▲▼ ЄДИНИЙ MVI-СТАН ТА РЕАКТИВНИЙ ПОТІК ДАНИХ',
                        coreHeader: '⚡ СПІЛЬНЕ БІЗНЕС-ЯДРО ТА REUSABLE SDKs',
                        coreTruth: '✓ 100% ЄДИНЕ ДЖЕРЕЛО ПРАВДИ',
                        kmpTitle: 'Чистий KMP Domain Engine',
                        kmpSub1: 'Повна ізоляція від платформ',
                        kmpSub2: 'Детермінована бізнес-логіка',
                        sdkTitle: 'Кросплатформні Client SDKs',
                        sdkSub1: 'Спільні для всіх фронтендів',
                        sdkSub2: 'Вдвічі швидший Time-to-Market',
                        cppTitle: 'Алгоритмічне C++20 ядро',
                        cppSub1: 'SIMD та Zero-Alloc пули памʼяті',
                        cppSub2: 'Максимальна швидкість обробки',
                        flowTransport: '🔒 ЗАХИЩЕНИЙ REST · WEBSOCKETS · GRPC · EVENT BUS · HAL',
                        cloudHeader: '☁️ ХМАРНИЙ BACKEND ТА APIs',
                        cloudTech: 'Serverless · Ktor · Microservices',
                        cloudSub1: 'Високонавантажена архітектура',
                        cloudSub2: 'Розподілена Auth та Edge Gateways',
                        dataHeader: '🗄️ OFFLINE-FIRST СИНХРОНІЗАЦІЯ',
                        dataTech: 'Room · SQLite · Realtime DB',
                        dataSub1: 'Гарантія збереження даних',
                        dataSub2: 'Автоматичне вирішення конфліктів',
                        iotHeader: '📡 ПІДКЛЮЧЕНИЙ IOT ТА EDGE',
                        iotTech: 'ESP32 · BLE 5.0 · LoRaWAN',
                        iotSub1: 'Сенсори телеметрії та мікроцикли',
                        iotSub2: 'Hardware Abstraction Layer (HAL)'
                    }
                }
            },
            {
                kind: 'agentic',
                index: '02',
                isWide: false,
                color: 'var(--domain-iot)',
                rgb: 'var(--domain-iot-rgb)',
                icon: 'fas fa-robot',
                metric: '8x',
                metricLabel: 'прискорення за рахунок AI-роїв',
                title: 'Agentic AI інженерія & оркестрація',
                points: [
                    {
                        lead: 'Управління роями агентів',
                        text: 'Управління роями автономних кодуючих агентів (Antigravity, Gemini, Claude, Codex) із суворими архітектурними обмеженнями та контролем відхилень.'
                    },
                    {
                        lead: 'Spec-Driven Engineering',
                        text: 'Розробка на основі формальних специфікацій (Spec-Driven Dev), строгих контрактів типів API та детальних критеріїв прийомки до старту генерації коду.'
                    },
                    {
                        lead: 'Zero-Trust верифікаційні цикли',
                        text: 'Запровадження автоматичних AST/linter перевірок, контрактних тест-сьютів та верифікаційних циклів, що повністю унеможливлюють галюцинації.'
                    }
                ],
                tags: ['Autonomous Swarms', 'Spec-Driven Dev', 'Zero-Trust TDD'],
                back: {
                    badge: 'ПАРАЛЕЛЬНИЙ AI-РІЙ ТА ШЛЮЗ ЯКОСТІ',
                    flipLabel: '3D Рій',
                    flipAria: 'Перевернути картку для перегляду конвеєра паралельних AI-агентів',
                    frontHint: '3D-топологія: Паралельний AI-рій 4x & Шлюз якості',
                    icon: 'fas fa-network-wired',
                    title: 'Оркестрація паралельного AI-рою',
                    subtitle: 'Оркестратор синхронно координує 4 спеціалізованих агенти через строгий верифікаційний шлюз',
                    callouts: [
                        {
                            lead: 'Декомпозиція контракту',
                            text: 'Строгі типи й формальні критерії прийомки до генерації коду.'
                        },
                        {
                            lead: 'Паралельний 4x-рій',
                            text: 'Синхронна генерація коду, TDD-тестів, AST-лінтера та CI/CD.'
                        },
                        {
                            lead: 'Zero-Hallucination Gate',
                            text: '100% верифікація тестів без дрейфу архітектури.'
                        }
                    ],
                    diagramLabels: {
                        title: 'Топологія паралельного рою та шлюз якості',
                        verified: '100% Верифіковано · 0 Drift'
                    }
                }
            },
            {
                kind: 'product',
                index: '03',
                isWide: false,
                color: 'var(--domain-android)',
                rgb: 'var(--domain-android-rgb)',
                icon: 'fas fa-rocket',
                metric: '25k+',
                metricLabel: 'завантажень · 6 додатків',
                title: 'Продуктовий цикл & Інді-масштаб',
                points: [
                    {
                        lead: 'Студія DᎥᗰᗩᒪᎥᑎᗩ',
                        text: 'Створення та реліз 6 комерційних Android-додатків із 25,000+ сумарних завантажень у Google Play з повним володінням архітектурою та релізом.'
                    },
                    {
                        lead: 'Повний життєвий цикл',
                        text: 'Повний цикл solo-розробки: дизайн інтерфейсів у Figma, нативна Android-архітектура, публікація в Google Play Console та ASO-оптимізація.'
                    },
                    {
                        lead: 'Хмара & Монетизація',
                        text: 'Інтеграція бекенду реального часу (Firestore), офлайн-синхронізації, платіжних систем Google Play (IAP) та оптимізації монетизації AdMob.'
                    }
                ],
                tags: ['DᎥᗰᗩᒪᎥᑎᗩ Studio', '6 додатків Google Play', '25,000+ завантажень'],
                back: {
                    badge: 'ПОРТФОЛІО GOOGLE PLAY (6 ДОДАТКІВ)',
                    flipLabel: '3D Додатки',
                    flipAria: 'Перевернути картку для перегляду опублікованих додатків Google Play',
                    frontHint: '3D-вітрина: 6 комерційних додатків Google Play',
                    icon: 'fab fa-google-play',
                    title: 'DᎥᗰᗩᒪᎥᑎᗩ Studio: Опубліковані додатки',
                    subtitle: 'Повний solo-цикл: від UI/UX концепту у Figma до релізу в Google Play',
                    apps: [
                        {
                            id: 'tictactoe',
                            name: 'Tic-Tac-Toe 3P',
                            tag: '10K+ DL · Мультиплеєр',
                            icon: 'images/projects/tictactoe_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.tictactoy'
                        },
                        {
                            id: 'peoplenotes',
                            name: 'People Notes AI',
                            tag: 'Gemini AI · Офлайн CRM',
                            icon: 'images/projects/peoplenotes_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.peoplenotes'
                        },
                        {
                            id: 'lucky',
                            name: 'Lucky Loot Boxes',
                            tag: 'Симулятор лутбоксів',
                            icon: 'images/projects/lucky_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.luckylootbox'
                        },
                        {
                            id: 'brainrot',
                            name: 'Brainrot Clicker',
                            tag: 'Аркадний клікер',
                            icon: 'images/projects/brainrotclicker_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.brainrotclicker2'
                        },
                        {
                            id: 'nightfall',
                            name: 'Operation Nightfall',
                            tag: 'Тактичний екшен',
                            icon: 'images/projects/resistance_multiplayer_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.operation.nightfall'
                        },
                        {
                            id: 'resistance',
                            name: 'The Resistance',
                            tag: 'Соціальна дедукція',
                            icon: 'images/projects/resistance_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.divan.theresistance'
                        }
                    ],
                    callouts: [
                        {
                            lead: 'Solo-розробка',
                            text: 'UI/UX дизайн у Figma, нативна архітектура, Firestore та Google Play IAP.'
                        },
                        {
                            lead: 'Стабільність & ASO',
                            text: '0% крашів, регулярні OTA-оновлення та високий рейтинг у сторі.'
                        }
                    ],
                    primaryAction: {
                        label: 'Профіль розробника у Google Play',
                        href: 'https://play.google.com/store/apps/dev?id=7572188664286438813',
                        icon: 'fab fa-google-play',
                        external: true
                    }
                }
            },
            {
                kind: 'research',
                index: '04',
                isWide: true,
                color: 'var(--domain-research)',
                rgb: 'var(--domain-research-rgb)',
                icon: 'fas fa-microscope',
                metric: 'PhD',
                metricLabel: '1 патент · 68 публікацій',
                title: 'Науковий R&D та кібербезпека',
                points: [
                    {
                        lead: 'Академічний статус & Викладання',
                        text: 'Кандидат технічних наук (PhD, НУРЕ, 2025). Доцент кафедри протидії кіберзлочинності ХНУВС, викладання кібербезпеки та захисту даних.'
                    },
                    {
                        lead: 'Запатентований відеокодек',
                        text: 'Автор патенту на метод нерівноважного позиційного кодування відеопотоків для каналів зв\'язку із критично низькою пропускною здатністю.'
                    },
                    {
                        lead: 'Публікації у Scopus',
                        text: 'Автор понад 68 наукових праць, включно зі статтями у виданнях Scopus Q3 з комбінаторного стиснення даних, криптостійкості та потокових протоколів.'
                    },
                    {
                        lead: 'Державне визнання',
                        text: 'Стипендіат Кабінету Міністрів України для молодих вчених (2025) за вагомий внесок у прикладні наукові розробки та технології захисту інформації.'
                    }
                ],
                tags: ['PhD у телекомі', 'Патент на відеокодек', 'Scopus Q3', 'Кафедра кіберзлочинності'],
                back: {
                    badge: 'ПАТЕНТ ТА БЕНЧМАРК ПРОДУКТИВНОСТІ',
                    flipLabel: '3D Радар',
                    flipAria: 'Перевернути картку для перегляду радарної діаграми бенчмарку LibPolyCodec',
                    frontHint: '3D-радар: бенчмарк продуктивності та надійності LibPolyCodec',
                    icon: 'fas fa-certificate',
                    title: 'LibPolyCodec vs. Графічні кодеки',
                    subtitle: 'Високопродуктивний C++20 рушій для потокового стиснення та авіоніки БПЛА',
                    callouts: [
                        {
                            lead: 'Апаратне прискорення SIMD',
                            text: '4.2x прискорення обробки завдяки AVX2 та ARM NEON для 60+ FPS потоків'
                        },
                        {
                            lead: 'Абсолютний Zero-Allocation',
                            text: '0 байт динамічного heap на гарячому шляху, 64KB статичний пул для БПЛА'
                        },
                        {
                            lead: 'Патент та Надійність',
                            text: 'Державний патент України, нуль C++ exceptions (poly::Status), захищений .BAR'
                        }
                    ],
                    primaryAction: {
                        label: 'Кейс дослідження та репозиторій LibPolyCodec',
                        href: '/projects/libpolycodec/',
                        icon: 'fas fa-arrow-right',
                        external: false
                    },
                    radarLabels: {
                        title: 'LibPolyCodec проти стандартних кодеків (5-осьовий радар)',
                        legendLib: 'LibPolyCodec (C++20)',
                        legendGen: 'Стандартні (JPEG / HEVC Intra)',
                        axis1: 'Швидкість (SIMD)',
                        axis2: 'Стиснення',
                        axis3: 'Zero-Alloc',
                        axis4: 'БПЛА / Авіоніка',
                        axis5: 'Надійність',
                        metric1Label: '⚡ Пропускна здатність',
                        metric1Val: '4.2x (60+ FPS)',
                        metric2Label: '📦 Коефіцієнт стиснення',
                        metric2Val: '+28% (Радіоканал)',
                        metric3Label: '🧠 Детермінізм пам\'яті',
                        metric3Val: '0B Heap (Zero-Alloc)',
                        metric4Label: '🛸 Авіоніка та БПЛА',
                        metric4Val: '64KB Статичний пул',
                        metric5Label: '🔒 Надійність та Захист',
                        metric5Val: 'poly::Status / .BAR'
                    }
                }
            }
        ],
    },
    skills: {
        programming_languages: 'Мови',
        android_core_and_ui: 'Android та Mobile',
        architecture_and_design: 'Архітектура та дизайн',
        asynchrony_and_networking: 'Мережа та асинхронність',
        databases_and_local_storage: 'Сховища даних',
        cloud_and_backend: 'Хмара та авторизація',
        dependency_injection: 'Dependency Injection',
        multimedia_hardware_and_camera: 'Медіа та залізо',
        testing_and_debugging: 'Тестування та профілювання',
        monetization_analytics_and_devops: 'DevOps та розвиток продукту',
        systems_and_cpp: 'Системи та C++20',
        modern_web_and_edge: 'Веб та Edge (AI)',
        iot_and_embedded: 'IoT та Embedded',
        cybersecurity_and_research: 'Кібербезпека та R&D',
        inferred_game_dev_and_publishing: 'Гейм Дев та публікація',
        ai_orchestration_and_agentic_engineering: 'ШІ-оркестрація та агенти',
    },
    skillsGroups: {
        core: 'Стратегічні драйвери',
        platforms: 'Платформи та екосистема',
        foundation: 'Інженерне ядро',
        quality: 'Якість та реліз',
    },
    directionsUi: {
        activeFilter: 'Активний фільтр · Клікніть для скидання',
        clickToFilter: 'Фільтрувати портфоліо за цим напрямом',
    },
    skillsUi: {
        allDomains: 'Усі спеціалізації',
        filterDomainAria: 'Фільтрувати компетенції за доменом',
        overviewTitle: 'Швидкий огляд розділу',
        overviewHint: 'Клікніть на навичку для переходу до досьє',
        skillsCount: 'Навичок у розділі',
        projectsCount: 'Задіяно в проєктах',
        categoryDossier: 'Розділ досьє',
        totalCategories: 'Категорії',
        skillsUnit: 'навичок',
        projectsUnit: 'проєктів',
    },
    experience: {
        projectsBtn: 'Проєкти',
        present: 'дотепер',
    },
    projects: {
        sectionTitle: 'Проєкти',
        clearFilter: 'Скинути фільтр',
        domainFilters: {
            all: 'Усі',
            mobile: 'Mobile',
            systems: 'Системи та C++',
            web: 'Веб-платформи',
            iot: 'IoT та Embedded',
        },
        keyAchievements: 'Ключові досягнення',
        technologies: 'Технології',
        openLink: 'Відкрити',
        googlePlay: 'Google Play',
        github: 'GitHub',
        website: 'Перейти на сайт',
        noProjects: 'Не знайдено проєктів за вибраним фільтром.',
    },
    research: {
        patents: 'Патенти',
        publications: 'Наукові публікації',
        conferences: 'Конференції',
        awards: 'Нагороди та діяльність',
    },
    education: {
        researchFocus: 'Напрям досліджень:',
    },
};
