/**
 * Projects data — Ukrainian
 * Fields NOT translated: id, company, tags, technologies, imagePlaceholder,
 *   imageColor, icon, banner, playStoreLink, githubLink
 * Fields translated: title, role, date, description, tasks[]
 */
export default [
    {
        id: 'libpolycodec',
        title: 'LibPolyCodec: Бібліотека стиснення даних',
        role: 'Архітектор C++ програмного забезпечення',
        company: 'MITI',
        date: 'Червень 2026 – по теперішній час',
        description: 'Високопродуктивна кросплатформна C++ бібліотека для статичної та потокової обробки зображень (стиснення, криптографія, стеганографія). Розроблена для максимальної швидкості та ефективності на різних архітектурах — від десктоп/мобільних платформ до мікроконтролерів БПЛА — з використанням поліадичного алгоритму кодування (OPC).',
        tasks: [
            'Спроєктовано 4-рівневий конвеєр з управлінням даними (Data, Pipeline, Modules, Session) з незалежними модулями та симетричними ланцюжками кодування/декодування.',
            'Розроблено модель пам\'яті «Абсолютний нульовий розподіл» та «Без виключень» з використанням AllocPolicy під час компіляції (HeapAllocPolicy для загального використання, StaticPoolPolicy для вбудованих систем).',
            'Реалізовано алгоритм OPC3 (поліадичне кодування) з підтримкою BigInteger та гібридним апаратним прискоренням (SIMD AVX/SSE для десктоп, NEON для мобільних).',
            'Розроблено уніфікований фасад CodecSession, що підтримує пакетну обробку без розподілу пам\'яті, «гарячу» реконфігурацію та адаптивний ROI через InformativenessMap.'
        ],
        technologies: ['C++20', 'CMake', 'Polyadic Coding', 'SIMD (AVX/NEON)', 'Data-Driven Pipeline', 'Zero-Allocation', 'Android NDK'],
        tags: ['C++20', 'Architecture', 'Compression', 'SIMD', 'Cross-platform'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #1565C0, #0D47A1)',
        icon: 'images/projects/libpolycodec_icon.png',
        banner: 'images/projects/libpolycodec_banner.jpg',
        githubLink: 'https://github.com/dvbarannik/libpolycodec'
    },
    {
        id: 'lucky-loot-boxes',
        title: '67 Lucky Loot Boxes',
        role: 'Самостійний Android-розробник',
        company: 'Solo Project',
        date: 'Травень 2026',
        description: 'Захоплюючий симулятор відкриття скринь, де гравці збирають колекції рідкісних предметів. Особливості: рівні рідкісності (від звичайного до легендарного), тематичні сезони (Космічні чудеса, Дикі тварини), бонуси за щоденну серію, системи крафтингу та плавні анімації відкриття.',
        tasks: [
            'Розроблено алгоритми ймовірностей для симуляції збалансованої та захоплюючої економіки рідкісності.',
            'Спроєктовано плавні анімації відкриття скринь та реалізовано систему авторолу для швидкого прогресу.',
            'Додано тематичні сезонні оновлення та нову механіку «Вибери 1 з 3» разом з AdMob та Google Play Billing.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'AdMob', 'Google Play Billing'],
        tags: ['Kotlin', 'Jetpack Compose', 'Casual Game', 'AdMob'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #FFCA28, #F57F17)',
        icon: 'images/projects/lucky_icon.png',
        banner: 'images/projects/lucky_banner.jpg',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.dvbarannik.luckylootbox'
    },
    {
        id: 'lora-iot-network',
        title: 'Розподілена IoT LoRa сенсорна мережа',
        role: 'Інженер вбудованого ПЗ IoT',
        company: 'MITI',
        date: 'Вересень 2025 – Грудень 2025',
        description: 'Розробка та розгортання розподіленої низькоенергетичної сенсорної мережі на основі плат ESP32 (LilyGO LoRa32). Проєкт охоплює весь стек: від оптимізації низькорівневих параметрів радіо та інтеграції сенсорів (DHT22, PIR, вібрація) до захищеної зашифрованої передачі телеметрії та візуалізації даних в реальному часі через MQTT та Node-RED.',
        tasks: [
            'Спроєктовано розподілені сенсорні вузли для моніторингу навколишнього середовища (температура/вологість) та периметральної безпеки (рух/вібрація).',
            'Налаштовано фізичні параметри LoRa (SF, BW, CR, Preamble) для досягнення балансу між дальністю, енергоефективністю та надійністю.',
            'Реалізовано захищений канал зв\'язку з шифруванням AES-128 та кастомними протоколами надійної доставки пакетів.',
            'Розроблено масштабований конвеєр даних на основі Mosquitto MQTT брокера та Node-RED для візуалізації, виявлення аномалій та сповіщень.'
        ],
        technologies: ['C++', 'Arduino Framework', 'ESP32', 'LoRa (SX1276)', 'MQTT', 'Node-RED', 'AES-128'],
        tags: ['IoT', 'Embedded Systems', 'Telecommunications', 'LoRaWAN', 'Firmware'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #FF6F00, #BF360C)',
        icon: 'images/projects/lora_iot_icon.png',
        banner: 'images/projects/lora_iot_banner.jpg',
        githubLink: 'https://github.com/dvbarannik/lora-iot-system'
    },
    {
        id: 'megogo',
        title: 'Megogo Mobile/ATV застосунок',
        role: 'Android-розробник',
        company: 'Megogo',
        date: 'Березень 2025 – Листопад 2025',
        description: 'Масштабний сервіс потокового відео для Android-телефонів та Android TV. Застосунок надає Live TV та VOD з величезним каталогом, профілями користувачів, батьківським контролем та якісним відтворенням через ExoPlayer (Leanback для TV).',
        tasks: [
            'Міграція застарілих XML-екранів на Jetpack Compose зі значним покращенням продуктивності рендерингу UI.',
            'Реалізація логіки доступності каналів та відтворення з обробкою покупок у застосунку та батьківського контролю.',
            'Розробка складної обробки deep link за допомогою Install Referrer та кастомних URI-схем для маркетингу.',
            'Покращення навігаційних потоків, обробки помилок та збільшення покриття юніт-тестами.'
        ],
        technologies: ['Kotlin', 'Java', 'Jetpack Compose', 'RxJava', 'Dagger 2', 'Android TV (Leanback)', 'ExoPlayer', 'Retrofit', 'OkHttp', 'Glide', 'WorkManager', 'Navigation Component', 'JUnit', 'Mockito', 'Robolectric'],
        tags: ['Kotlin', 'Jetpack Compose', 'Android TV', 'ExoPlayer', 'Retrofit', 'Dagger 2'],
        imagePlaceholder: 'M',
        imageColor: 'linear-gradient(135deg, #43A047, #2E7D32)'
    },
    {
        id: 'tic-tac-toe',
        title: 'Хрестики-нулики 3 гравці: X O D',
        role: 'Самостійний Android-розробник',
        company: 'Solo Project',
        date: 'Березень 2025 – по теперішній час',
        description: 'Інноваційний та хаотичний мультиплеєрний варіант класичних хрестиків-нуликів для 3 гравців (X, O, ∆). Масштабоване поле (від 3x3 до 7x7), унікальні ШІ-суперники, рейтинговий онлайн-матчмейкінг, кастомні динамічні фони (Аврора, Неон) та захоплива тактильна взаємодія.',
        tasks: [
            'Спроєктовано унікальне ігрове поле для 3 гравців з кастомною логікою виграшу/блокування та 5 рівнями складності для ШІ.',
            'Інтегровано Google Play Games Services для системи досягнень, таблиць лідерів та автентифікації.',
            'Спроєктовано локальний, рейтинговий та онлайн-мультиплеєр в реальному часі з Firebase Firestore.',
            'Розроблено анімований UI з кастомними тінями, плавними переходами, щоденними місіями та рейтинговою системою матчмейкінгу.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase Firestore', 'Google Play Games Services', 'Hilt', 'Coroutines', 'Flow', 'Material 3', 'Navigation Component', 'AdMob', 'JUnit', 'Robolectric'],
        tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Google Play Games', 'Hilt'],
        imagePlaceholder: 'T',
        imageColor: 'linear-gradient(135deg, #8E24AA, #6A1B9A)',
        icon: 'images/projects/tictactoe_icon.png',
        banner: 'images/projects/tictactoe_banner.jpg',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.dvbarannik.tictactoy'
    },
    {
        id: 'people-notes',
        title: 'People Notes (MyPeople)',
        role: 'Самостійний Android-розробник',
        company: 'Solo Project',
        date: 'Січень 2025 – по теперішній час',
        description: 'Комплексний персональний CRM та застосунок управління контактами (рейтинг 4.6/5). Дозволяє організовувати детальні профілі, відстежувати важливі дати та події, контролювати спільні фінанси та категоризувати соціальні зв\'язки через зручний дашборд.',
        tasks: [
            'Спроєктовано та розроблено архітектуру застосунку з нуля на основі сучасних принципів Jetpack Compose.',
            'Реалізовано надійний шар бази даних з Firebase Firestore для безперебійної синхронізації між пристроями.',
            'Розроблено надійну систему сповіщень для нагадувань про дні народження та події через Android WorkManager.',
            'Інтегровано Google Play Billing та AdMob для можливості придбання преміум-функцій або відключення реклами.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase Firestore', 'Firebase Storage', 'Hilt', 'Coroutines', 'Flow', 'WorkManager', 'Navigation Component', 'Material 3', 'Google Play Billing', 'AdMob'],
        tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'WorkManager', 'Billing'],
        imagePlaceholder: 'P',
        imageColor: 'linear-gradient(135deg, #00ACC1, #00838F)',
        icon: 'images/projects/peoplenotes_icon.png',
        banner: 'images/projects/peoplenotes_banner.png',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.dvbarannik.peoplenotes'
    },
    {
        id: 'resistance-multiplayer',
        title: 'Resistance: Мультиплеєр',
        role: 'Самостійний Android-розробник',
        company: 'Solo Project',
        date: 'Грудень 2024 – по теперішній час',
        description: 'Онлайн-гра в жанрі соціальної дедукції у стилі «Холодної війни», натхненна The Resistance: Avalon. Гравці отримують секретні ролі (Детектив, Кілер, Крот) та мають використовувати стратегію, обман та чат у реальному часі для виконання або зриву місій.',
        tasks: [
            'Розроблено ігрову логіку онлайн-мультиплеєра та синхронізацію станів у реальному часі через Firebase Firestore.',
            'Реалізовано анонімну безпечну автентифікацію через Firebase Auth.',
            'Спроєктовано ефектний кіберпанк UI в стилі «тактичного термінала» повністю на Jetpack Compose та Material 3.',
            'Розроблено складні рольові взаємодії, включаючи механіку «Фінального пострілу Вбивці», та оптимізовано процедурне аудіо.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase Firestore', 'Firebase Authentication', 'Hilt', 'Coroutines', 'Flow', 'Navigation Component', 'Material 3', 'Timber', 'JUnit', 'Mockk'],
        tags: ['Kotlin', 'Jetpack Compose', 'Firestore', 'Auth', 'Hilt'],
        imagePlaceholder: 'R',
        imageColor: 'linear-gradient(135deg, #E53935, #C62828)',
        icon: 'images/projects/resistance_multiplayer_icon.png',
        banner: 'images/projects/resistance_multiplayer_banner.jpg',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.dvbarannik.operation.nightfall'
    },
    {
        id: 'symmetry',
        title: 'Symmetry',
        role: 'Android-розробник',
        company: 'CHI Software',
        date: 'Вересень 2024 – Березень 2025',
        description: 'Корпоративний застосунок для інспекторів безпеки та їхніх клієнтів. Інспектори використовують інструменти камери для виявлення витоків газу, автоматично позначаючи медіафайли геолокацією. Клієнти можуть переглядати результати та відстежувати небезпечні ділянки на карті.',
        tasks: [
            'Інтегровано CameraX для захоплення та обробки медіа під час польових інспекцій зі збереженням метаданих у Room.',
            'Реалізовано Google Maps SDK для точної геопросторової візуалізації місць інспекцій та витоків газу.',
            'Налаштовано безпечну автентифікацію та синхронізацію даних через AWS Cognito та Retrofit.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AWS Cognito', 'Retrofit', 'Google Maps', 'CameraX', 'Coil', 'Hilt', 'Coroutines', 'Flow', 'Navigation Component'],
        tags: ['CameraX', 'Google Maps', 'AWS Cognito', 'Room', 'Retrofit'],
        imagePlaceholder: 'S',
        imageColor: 'linear-gradient(135deg, #4CAF50, #2E7D32)'
    },
    {
        id: 'epic-clicker',
        title: '67 Brainrot Clicker',
        role: 'Самостійний Android-розробник',
        company: 'Solo Project',
        date: 'Лютий 2024 – по теперішній час',
        description: 'Мем-кликер у стилі idle-гри, де гравці тапають, щоб розблокувати персонажів, заробляти Повагу та підніматися в глобальних рейтингах. Гра має сезонні таблиці лідерів, здібності героїв, офлайн-прогрес та глибокі синергії комбо.',
        tasks: [
            'Провів проєкт через повний цикл: від дизайну гри та балансу до розробки та публікації у Google Play.',
            'Побудовано модульну систему героїв та скінів з унікальними здібностями (авто-тап, x10 критичних тапів, інвестиційне масштабування).',
            'Автоматизовано локалізацію застосунку на 15+ мов за допомогою кастомного Python-скрипта та Gemini API зі збереженням XML-тегів.',
            'Налаштовано аналітику, A/B-тести через Remote Config та звіти про збої для оптимізації утримання.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase Firestore', 'Remote Config', 'Firebase Analytics', 'Crashlytics', 'Hilt', 'Coroutines', 'Flow', 'Material 3', 'Navigation Component', 'AdMob'],
        tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'AdMob', 'Game Dev'],
        imagePlaceholder: 'E',
        imageColor: 'linear-gradient(135deg, #FFB300, #F39C12)',
        icon: 'images/projects/brainrotclicker_icon.png',
        banner: 'images/projects/brainrotclicker_banner.jpg',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.dvbarannik.brainrotclicker2'
    },
    {
        id: 'smart-home',
        title: 'Розумний Дім',
        role: 'Lead Android Developer',
        company: 'CHI Software',
        date: 'Грудень 2022 – Серпень 2024',
        description: 'Централізований хаб для управління системами розумного будинку. Користувачі можуть налаштовувати кімнати, управляти освітленням, термостатами, живими камерами безпеки та автоматизованими шторами з мобільних пристроїв, планшетів та спеціальних панелей (TSW, TST, TSR).',
        tasks: [
            'Керував командою Android-розробників, проводячи суворий code review з акцентом на безпеку, продуктивність та управління пам\'яттю.',
            'Менторив молодших розробників, встановлюючи найкращі практики та культуру безперервного технічного вдосконалення.',
            'Спроєктував та впровадив функції інтеграції нового заліза зі стабільною взаємодією з legacy API автоматизації будинку.',
            'Автоматизував процеси збірки та розгортання шляхом налаштування надійних CI/CD-пайплайнів.'
        ],
        technologies: ['Kotlin', 'MVP', 'Koin', 'RxJava2', 'Room', 'Glide', 'JUnit', 'CI/CD pipelines'],
        tags: ['Kotlin', 'MVP', 'Koin', 'RxJava2', 'CI/CD'],
        imagePlaceholder: 'S',
        imageColor: 'linear-gradient(135deg, #3949AB, #283593)'
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        role: 'Android-розробник',
        company: 'CHI Software',
        date: 'Червень 2021 – Листопад 2022',
        description: 'Комплексний B2B/B2C медичний портал для пацієнтів та лікарів. Функції: управління особистим кабінетом, інтегрована телемедицина (текстові, аудіо та відеоконсультації), онлайн-маркетплейс медичних препаратів та медичний форум.',
        tasks: [
            'Спроєктовано та інтегровано складні телемедичні функції у рамках MVVM та Clean Architecture.',
            'Проведено ретельне тестування нових медичних функцій з документуванням тест-планів для відповідності стандартам медичного ПЗ.',
            'Регулярне технічне обслуговування та виправлення критичних помилок для максимальної стабільності при взаємодії лікар-пацієнт.'
        ],
        technologies: ['Kotlin', 'MVVM', 'Dagger-Android', 'RxJava2', 'Room', 'Navigation Component'],
        tags: ['Kotlin', 'MVVM', 'Dagger-Android', 'RxJava2', 'Room'],
        imagePlaceholder: 'H',
        imageColor: 'linear-gradient(135deg, #00897B, #00695C)'
    },
    {
        id: 'car-plate',
        title: 'Розпізнавання автомобільних номерів',
        role: 'Android-розробник',
        company: 'CHI Software',
        date: 'Вересень 2020 – Травень 2021',
        description: 'Інструмент розпізнавання автономерів в реальному часі на базі ШІ. Застосунок аналізує швидкісні відеопотоки з камери, зберігає розпізнані номерні знаки з фото, дозволяє пошук по локальній базі даних та синхронізує дані з серверами.',
        tasks: [
            'Інтегровано нативну C++ ALPR (Automatic License Plate Recognition) OCR бібліотеку в екосистему Android через JNI.',
            'Побудовано міст між Java та нативним C++ кодом для оптимізації обробки відеопотоку з великою частотою кадрів через Camera 2 API.',
            'Оптимізовано споживання пам\'яті для запобігання витокам під час тривалих безперервних операцій з камерою та локальне кешування через Room.'
        ],
        technologies: ['Kotlin', 'C++', 'NDK', 'Dagger 2', 'Retrofit 2', 'Room', 'RxJava', 'Jetpack', 'Camera 2', 'JNI'],
        tags: ['Kotlin', 'C++', 'NDK', 'Camera 2', 'JNI'],
        imagePlaceholder: 'C',
        imageColor: 'linear-gradient(135deg, #607D8B, #455A64)'
    },
    {
        id: 'music-streaming-2020',
        title: 'Music Streaming',
        role: 'Android-розробник',
        company: 'Nitrix Studio',
        date: 'Квітень 2020 – Серпень 2020',
        description: 'Преміальна платформа потокової музики, орієнтована на покращений аудіо досвід. Можливості: повне фонове відтворення, завантаження треків для прослуховування офлайн, управління плейлистами та глибока інтеграція з Android Auto.',
        tasks: [
            'Розроблено складні мікросервіси для підтримки модульної та масштабованої бекенд-архітектури.',
            'Спроєктовано та реалізовано нові UI-компоненти для зручної навігації.',
            'Налаштовано медіавідтворення через ExoPlayer та управління офлайн-завантаженням через бібліотеку Fetch 2.',
            'Оптимізовано збережені процедури локальної бази даних для блискавичного завантаження треків.'
        ],
        technologies: ['Java', 'ExoPlayer', 'Android Auto', 'Dagger 2', 'Fetch 2', 'RxJava'],
        tags: ['Java', 'ExoPlayer', 'Android Auto', 'Dagger 2'],
        imagePlaceholder: 'M',
        imageColor: 'linear-gradient(135deg, #EC407A, #C2185B)'
    },
    {
        id: 'image-compression',
        title: 'Стиснення та стеганографія зображень',
        role: 'Android-розробник',
        company: 'Nitrix Studio',
        date: 'Листопад 2019 – Березень 2020',
        description: 'Спеціалізована утиліта безпеки для стиснення та кодування зображень із застосуванням передових технік стеганографії. Дозволяє таємно вбудовувати та витягувати приховані дані зі звичайних файлів зображень на мобільних та десктопних платформах.',
        tasks: [
            'Спроєктовано та розроблено застосунок з нуля на Kotlin та Spring Framework для обробки на бекенді.',
            'Реалізовано складні алгоритми обробки зображень для безпечного маніпулювання даними пікселів без пошкодження прихованого вмісту.',
            'Написано детальну технічну документацію та проведено комплексні тест-плани для перевірки цілісності логіки шифрування.'
        ],
        technologies: ['Kotlin', 'Spring Framework', 'Custom Image Processing Algorithms'],
        tags: ['Kotlin', 'Spring Framework', 'Steganography'],
        imagePlaceholder: 'I',
        imageColor: 'linear-gradient(135deg, #7E57C2, #512DA8)'
    },
    {
        id: 'music-platform-2019',
        title: 'Платформа потокової музики',
        role: 'Android-розробник',
        company: 'Nitrix Studio',
        date: 'Червень 2019 – Жовтень 2019',
        description: 'Надійна цифрова стрімінгова екосистема, що дозволяє відкривати музику, організовувати великі плейлисти, кешувати треки для офлайн-використання та нативно ділитися контентом через динамічні посилання.',
        tasks: [
            'Побудовано застосунок строго за Clean Architecture та MVVM для підтримуваної кодової бази.',
            'Управляли складними ієрархіями ін\'єкції залежностей через Dagger 2.',
            'Розроблено багатофункціональний аудіоплеєр на ExoPlayer та надійна офлайн-синхронізація файлів через Fetch.',
            'Інтегровано Firebase Dynamic Links для безперебійного обміну контентом та залучення нових користувачів.'
        ],
        technologies: ['Kotlin', 'ExoPlayer', 'Dagger 2', 'Fetch 2', 'Retrofit 2', 'Room', 'RxJava', 'Jetpack', 'Firebase Dynamic Links'],
        tags: ['Kotlin', 'Clean Architecture', 'ExoPlayer', 'MVVM'],
        imagePlaceholder: 'M',
        imageColor: 'linear-gradient(135deg, #AB47BC, #7B1FA2)'
    },
    {
        id: 'card-game-calculator',
        title: 'Калькулятор очок карткових ігор',
        role: 'Flutter-розробник',
        company: 'Nitrix Studio',
        date: 'Січень 2019 – Травень 2019',
        description: 'Кросплатформна Flutter-утиліта для підрахунку очок у популярних карткових іграх. Декілька режимів гри, детальна історія рахунків, анімації UI, преміальні підписки та двомовна локалізація.',
        tasks: [
            'Спроєктовано та реалізовано нові функції на Dart для покращення досвіду відстеження.',
            'Інтегровано Firebase AdMob для монетизації та Flutter In-App Purchases для преміальних підписок.',
            'Написано комплексні юніт-тести для Dart бізнес-логіки та рефакторинг для плавних 60fps анімацій.'
        ],
        technologies: ['Dart', 'Flutter', 'flutter_svg', 'vibration', 'shared_preferences', 'json_serializable', 'firebase_admob', 'package_info', 'firebase_core', 'firebase_crashlytics', 'flutter_inapp_purchase'],
        tags: ['Dart', 'Flutter', 'Cross-Platform', 'Firebase'],
        imagePlaceholder: 'C',
        imageColor: 'linear-gradient(135deg, #26A69A, #00695C)'
    },
    {
        id: 'media-streaming-2018',
        title: 'Сервіс медіастрімінгу',
        role: 'Android-розробник',
        company: 'Nitrix Studio',
        date: 'Серпень 2018 – Грудень 2018',
        description: 'Комплексний медіапортал для перегляду фільмів, серіалів та прямих трансляцій у високій якості. Застосунок оптимізовано для великих екранів із використанням бібліотек Android TV для зручного перегляду з дивана.',
        tasks: [
            'Реалізовано Single Activity Architecture на основі Clean Architecture та управління UI-станами через MVVM/LiveData.',
            'Розроблено універсальний медіаплеєр на основі ExoPlayer та VLC для декодування складних форматів відео (наприклад, AVI).',
            'Адаптовано UI для Android TV за допомогою бібліотеки Leanback для навігації з пульта.'
        ],
        technologies: ['Kotlin', 'ExoPlayer', 'VLC', 'Dagger 2', 'Fetch 2', 'Retrofit 2', 'Room', 'RxJava', 'Jetpack', 'Android Leanback'],
        tags: ['Kotlin', 'ExoPlayer', 'VLC', 'Android TV'],
        imagePlaceholder: 'M',
        imageColor: 'linear-gradient(135deg, #5C6BC0, #283593)'
    },
    {
        id: 'liftapp-remote',
        title: 'LiftApp Дистанційне налаштування',
        role: 'Android-розробник',
        company: 'IT Company',
        date: 'Квітень 2018 – Червень 2018',
        description: 'Спеціалізована утиліта дистанційного конфігурування для техніків ліфтів. Дозволяє технічному персоналу бездротово підключатися до головних панелей LiftApp та оновлювати параметри конфігурації без фізичного доступу до портів пристрою.',
        tasks: [
            'Розроблено надійний протокол локального бездротового з\'єднання через Wi-Fi Direct для безпечної передачі конфігурацій.',
            'Рефакторинг застарілого коду обробки мережі для суттєвого покращення стабільності з\'єднання та швидкості передачі даних.'
        ],
        technologies: ['Java', 'Wi-Fi Direct'],
        tags: ['Java', 'Wi-Fi Direct', 'Networking'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #8D6E63, #5D4037)'
    },
    {
        id: 'liftapp-bootloader',
        title: 'LiftApp Завантажувач',
        role: 'Android-розробник',
        company: 'IT Company',
        date: 'Січень 2018 – Березень 2018',
        description: 'Фоновий системний застосунок з root-правами для управління життєвим циклом основного ПЗ LiftApp. Виступає як OTA-менеджер оновлень, що автоматично виявляє, безшумно встановлює та запускає нові версії застосунку.',
        tasks: [
            'Реалізовано процедури беззвучного автоматизованого встановлення ПЗ шляхом виконання низькорівневих root-команд в Android OS.',
            'Налаштовано broadcast-ресивери для подій завантаження системи для управління пристроєм та миттєвого запуску LiftApp після перезавантаження.'
        ],
        technologies: ['Java', 'Root Access', 'Android System Permissions'],
        tags: ['Java', 'Root Access', 'System Administration'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #424242, #212121)'
    },
    {
        id: 'resistance-local',
        title: 'Resistance: Локальна гра',
        role: 'Flutter-розробник / Самостійний розробник',
        company: 'DᎥᗰᗩᒪᎥᑎᗩ',
        date: 'Вересень 2017 – Січень 2018',
        description: 'Цифрова кросплатформна адаптація знаменитої настільної гри в жанрі соціальної дедукції. Розроблена для локальної гри 5-10 гравців на одному пристрої. Сучасний UI в стилі глазоморфізму, детальна історія місій та динамічні теми оформлення.',
        tasks: [
            'Спроєктовано стан застосунку та ігровий цикл за патерном BLoC на Dart.',
            'Розроблено відполіровані темну та світлу теми з сучасними принципами UI-дизайну та плавними анімаціями.',
            'Регулярна підтримка проєкту: повна міграція кодової бази на Null Safety та виправлення вузьких місць продуктивності.'
        ],
        technologies: ['Dart', 'Flutter', 'BLoC', 'firebase_admob', 'shared_preferences', 'flutter_html', 'flutter_socket_io', 'firebase_core', 'firebase_crashlytics'],
        tags: ['Dart', 'Flutter', 'BLoC', 'Party Game'],
        imagePlaceholder: 'R',
        imageColor: 'linear-gradient(135deg, #D32F2F, #B71C1C)',
        icon: 'images/projects/resistance_icon.png',
        banner: 'images/projects/resistance_banner.jpg',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.divan.theresistance'
    },
    {
        id: 'liftapp',
        title: 'LiftApp',
        role: 'Android-розробник',
        company: 'IT Company',
        date: 'Вересень 2017 – Грудень 2017',
        description: 'Апаратно-інтегрований цифровий дашборд для ліфтів. Відображає динамічну інформацію для пасажирів: номер поверху в реальному часі, напрямок руху, стрічку новин та рекламні зображення на планшетах, встановлених у кабіні ліфта.',
        tasks: [
            'Нативна C++ SerialPort бібліотека для прямого моніторингу, декодування та обробки апаратних сигналів порту FT232 ліфта.',
            'Адаптовано UI та оптимізовано продуктивність для безперервної цілодобової роботи на Android-планшетах.'
        ],
        technologies: ['Java', 'Android NDK', 'C++', 'SerialPort library'],
        tags: ['Java', 'Android NDK', 'C++', 'Hardware Integration'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #FF7043, #D84315)'
    }
];
