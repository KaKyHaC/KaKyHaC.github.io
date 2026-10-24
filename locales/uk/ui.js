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
        title: 'Завантажити резюме (PDF)',
        subtitle: 'Оберіть версію резюме, оптимізовану під ваш запит:',
        staffBadge: 'Універсальний · Staff / Lead · PhD',
        staffTitle: 'Staff Software Engineer & Tech Lead',
        staffDesc: 'Оркестрація автономних ІІ-агентів, низькорівневий C++20 SIMD, стрімінг високого навантаження (MEGOGO), мультиплатформна архітектура, PhD та патенти.',
        staffBtn: 'Завантажити Staff CV (PDF)',
        androidBadge: 'Мобільна розробка · 9+ років',
        androidTitle: 'Senior / Lead Android Developer',
        androidDesc: '9+ років нативного Android, Jetpack Compose, Coroutines & Flow, Clean Architecture, стрімінг ExoPlayer, Room, NDK.',
        androidBtn: 'Завантажити Android CV (PDF)',
        footerNote: 'Обидва резюме — це 100% сумісні з ATS векторні 2-сторінкові PDF (англійською мовою).',
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
                metricLabel: 'років комерційної інженерії',
                title: 'Системна архітектура & Техлід',
                points: [
                    {
                        lead: 'Високонавантажений потоковий стрімінг',
                        text: 'Проєктування стрімінгових екосистем для мільйонів користувачів на Kotlin, Clean Architecture, ExoPlayer та кастомних буферах для безшовного відтворення при жорстких обмеженнях затримок.'
                    },
                    {
                        lead: 'Низькорівневий SIMD & C++20',
                        text: 'Розробка високонавантажених алгоритмічних модулів на C++20, SIMD-векторизації (AVX2/NEON) та zero-allocation пулах пам’яті для операцій відео/аудіо кодеків у реальному часі.'
                    },
                    {
                        lead: 'Мультиплатформа & IoT телеметрія',
                        text: 'Побудова наскрізних систем: від спільної бізнес-логіки на KMP до розподілених IoT-мереж телеметрії (ESP32/LoRa) та сучасних edge веб-інтерфейсів.'
                    },
                    {
                        lead: 'Наскрізна відповідальність за надійність',
                        text: 'Забезпечення надійності: повне усунення витоків пам\'яті (LeakCanary/Profiler), суворі CI/CD quality gates та наскрізна відповідальність за стабільність після релізу.'
                    }
                ],
                tags: ['High-Load Mobile', 'Clean Architecture', 'C++20 & SIMD', 'IoT & Edge']
            },
            {
                kind: 'agentic',
                index: '02',
                isWide: false,
                color: 'var(--domain-iot)',
                rgb: 'var(--domain-iot-rgb)',
                icon: 'fas fa-robot',
                metric: '10x',
                metricLabel: 'інженерна продуктивність з AI',
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
                tags: ['Autonomous Swarms', 'Spec-Driven Dev', 'Zero-Trust TDD']
            },
            {
                kind: 'product',
                index: '03',
                isWide: false,
                color: 'var(--domain-android)',
                rgb: 'var(--domain-android-rgb)',
                icon: 'fas fa-rocket',
                metric: '25k+',
                metricLabel: 'завантажень · рейтинг 5.0★',
                title: 'Продуктовий цикл & Інді-масштаб',
                points: [
                    {
                        lead: 'Студія DᎥᗰᗩᒪᎥᑎᗩ',
                        text: 'Самостійний запуск та паблішинг комерційних продуктів із 10k+ завантажень кожен (Tic-Tac-Toe: 3 Player, Brainrot Clicker, People Notes CRM) із рейтингом 5.0★.'
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
                tags: ['DᎥᗰᗩᒪᎥᑎᗩ Studio', 'Google Play 5.0★', 'Realtime Firestore']
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
                tags: ['PhD у телекомі', 'Патент на відеокодек', 'Scopus Q3', 'Кафедра кіберзлочинності']
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
