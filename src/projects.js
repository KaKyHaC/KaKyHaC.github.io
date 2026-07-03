export const projects = [
    {
        id: 'lucky-loot-boxes',
        title: '67 Lucky Loot Boxes',
        role: 'Solo Android Developer',
        company: 'Solo Project',
        date: 'May 2026',
        description: 'A highly engaging drop simulator game where players open loot boxes to build collections of rare items. Features include distinct rarity tiers (Common to Legendary), themed seasons (Cosmic Wonders, Wild Animals), daily streak bonuses, crafting systems, and smooth unboxing animations.',
        tasks: [
            'Engineered the underlying probability algorithms to simulate a balanced and exciting rarity economy.',
            'Designed fluid, satisfying animations for box-opening sequences and implemented an auto-roll system for fast progression.',
            'Added themed seasonal updates and integrated a new "Pick 1 of 3" mechanic alongside AdMob and Google Play Billing.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'AdMob', 'Google Play Billing'],
        tags: ['Kotlin', 'Jetpack Compose', 'Casual Game', 'AdMob'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #FFCA28, #F57F17)'
    },
    {
        id: 'megogo',
        title: 'Megogo Mobile/ATV App',
        role: 'Android Developer',
        company: 'Megogo',
        date: 'Mar 2025 – Nov 2025',
        description: 'A large-scale video streaming service for Android phones and Android TV. The application delivers Live TV and VOD with a massive catalog, user profiles, parental controls, and fast, high-quality playback via ExoPlayer (Leanback for TV).',
        tasks: [
            'Migrated legacy XML-based screens to Jetpack Compose, significantly improving UI rendering performance and long-term code maintainability.',
            'Implemented channel availability and playback entry logic, handling in-app purchases and secure parental controls.',
            'Developed complex deep link handling capabilities using Install Referrer and custom URI schemes to boost marketing and user acquisition.',
            'Strengthened navigation flow, improved error handling across multiple modules, and increased overall unit test coverage.'
        ],
        technologies: ['Kotlin', 'Java', 'Jetpack Compose', 'RxJava', 'Dagger 2', 'Android TV (Leanback)', 'ExoPlayer', 'Retrofit', 'OkHttp', 'Glide', 'WorkManager', 'Navigation Component', 'JUnit', 'Mockito', 'Robolectric'],
        tags: ['Kotlin', 'Jetpack Compose', 'Android TV', 'ExoPlayer', 'Retrofit', 'Dagger 2'],
        imagePlaceholder: 'M',
        imageColor: 'linear-gradient(135deg, #43A047, #2E7D32)'
    },
    {
        id: 'tic-tac-toe',
        title: 'Tic-Tac-Toe 3 Player: X O D',
        role: 'Solo Android Developer',
        company: 'Solo Project',
        date: 'Mar 2025 – Present',
        description: 'An innovative and chaotic multiplayer twist on classic tic-tac-toe designed for 3 players (X, O, ∆). Features a scalable board (from 3x3 up to 7x7), unique AI opponents, ranked online matchmaking, custom dynamic backgrounds (Aurora, Neon), and immersive haptics.',
        tasks: [
            'Designed a unique 3-player game board with custom winning/blocking logic and developed 5 difficulty levels for AI opponents.',
            'Integrated Google Play Games Services to power the achievement system, leaderboards, and user authentication.',
            'Architected local, ranked, and real-time online multiplayer modes utilizing Firebase Firestore.',
            'Created an animated UI with custom shadows, seamless screen transitions, daily missions, and a session-based matchmaking rating system.'
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
        role: 'Solo Android Developer',
        company: 'Solo Project',
        date: 'Jan 2025 – Present',
        description: 'A comprehensive personal CRM and contact management application (rated 4.6/5). It enables users to organize detailed profiles, track important dates and events, monitor shared finances, and categorize social connections using a clean, customizable dashboard.',
        tasks: [
            'Designed and developed the entire application architecture from scratch using modern Jetpack Compose principles.',
            'Implemented a robust database layer with Firebase Firestore to ensure seamless cross-device data synchronization.',
            'Developed a custom, reliable notification system for birthdays and event reminders via Android WorkManager.',
            'Integrated Google Play Billing and AdMob, allowing users to purchase premium features or remove advertisements.'
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
        title: 'Resistance: Multiplayer Game',
        role: 'Solo Android Developer',
        company: 'Solo Project',
        date: 'Dec 2024 – Present',
        description: 'A high-stakes Cold War-era online multiplayer social deduction game inspired by The Resistance: Avalon. Players are secretly assigned roles (e.g., Detective, Hitman, Mole) and must use strategy, deception, and real-time chat to succeed or sabotage missions.',
        tasks: [
            'Developed real-time online multiplayer game logic and state synchronization using Firebase Firestore.',
            'Implemented anonymous secure authentication via Firebase Auth.',
            'Designed a stunning cyberpunk "tactical terminal" aesthetic UI entirely with Jetpack Compose and Material 3.',
            'Engineered complex role-based interactions, including a "Final Assassin Shot" mechanic, and optimized procedural audio handling.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase Firestore', 'Firebase Authentication', 'Hilt', 'Coroutines', 'Flow', 'Navigation Component', 'Material 3', 'Timber', 'JUnit', 'Mockk'],
        tags: ['Kotlin', 'Jetpack Compose', 'Firestore', 'Auth', 'Hilt'],
        imagePlaceholder: 'R',
        imageColor: 'linear-gradient(135deg, #E53935, #C62828)'
    },
    {
        id: 'epic-clicker',
        title: '67 Brainrot Clicker',
        role: 'Solo Android Developer',
        company: 'Solo Project',
        date: 'Feb 2024 – Present',
        description: 'A meme-fueled idle clicker game where players tap to unlock characters, earn Respect, and climb global leaderboards. The game features seasonal leaderboards, unlockable hero abilities, offline progress, and deep combo synergies.',
        tasks: [
            'Drove the project through the full lifecycle: from core game design, balance, and UI/UX to engineering and Google Play publishing.',
            'Built a modular hero and skin system with unique abilities (e.g., hold-to-auto-tap, x10 critical taps, investment scaling).',
            'Automated app localization into 15+ languages using a custom Python script and the Gemini API, maintaining XML tags and adapting slang.',
            'Instrumented analytics, Remote Config A/B tests, and crash reporting to optimize performance and retention.'
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
        id: 'symmetry',
        title: 'Symmetry',
        role: 'Android Developer',
        company: 'CHI Software',
        date: 'Sep 2024 – Dec 2024',
        description: 'An enterprise application for safety inspectors and their customers. Inspectors use the app\'s camera tools to detect gas leaks, automatically tagging media with geolocation data. Customers can view the results, track meta-data, and monitor danger spots via a map interface.',
        tasks: [
            'Integrated CameraX for capturing and processing high-quality media during field inspections, saving metadata directly into Room.',
            'Implemented Google Maps SDK for accurate geospatial visualization of inspection spots and gas leaks.',
            'Configured secure user authentication, identity management, and server data syncing through AWS Cognito and Retrofit.'
        ],
        technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AWS Cognito', 'Retrofit', 'Google Maps', 'CameraX', 'Coil', 'Hilt', 'Coroutines', 'Flow', 'Navigation Component'],
        tags: ['CameraX', 'Google Maps', 'AWS Cognito', 'Room', 'Retrofit'],
        imagePlaceholder: 'S',
        imageColor: 'linear-gradient(135deg, #4CAF50, #2E7D32)'
    },
    {
        id: 'smart-home',
        title: 'Smart Home',
        role: 'Lead Android Developer',
        company: 'CHI Software',
        date: 'Jul 2023 – Aug 2024',
        description: 'A centralized control hub application for smart house systems. Users can configure rooms, manage lighting, adjust climate thermostats, monitor live security cameras, and control automated shades across mobile devices, tablets, and dedicated smart panels (TSW, TST, TSR).',
        tasks: [
            'Led the Android development team, conducting strict code reviews with a primary focus on app security, performance, and memory management.',
            'Mentored junior developers, establishing best practices and fostering a culture of continuous technical improvement.',
            'Architected and deployed new hardware integration features, ensuring stable communication with legacy home automation APIs.',
            'Automated the build and deployment processes by setting up robust CI/CD pipelines.'
        ],
        technologies: ['Kotlin', 'MVP', 'Koin', 'RxJava2', 'Room', 'Glide', 'JUnit', 'CI/CD pipelines'],
        tags: ['Kotlin', 'MVP', 'Koin', 'RxJava2', 'CI/CD'],
        imagePlaceholder: 'S',
        imageColor: 'linear-gradient(135deg, #3949AB, #283593)'
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        role: 'Android Developer',
        company: 'CHI Software',
        date: 'Nov 2022 – Jun 2023',
        description: 'A comprehensive B2B/B2C medical portal tailored for patients and doctors. Features include personal account management, integrated telemedicine (secure text, audio, and video consultations), an online marketplace for medical preparations, and a medical forum.',
        tasks: [
            'Designed and integrated complex telehealth features within a robust MVVM and Clean Architecture framework.',
            'Conducted thorough testing of new healthcare features, documenting extensive test plans to meet medical software compliance standards.',
            'Handled regular maintenance and resolved critical bugs to maximize app stability for crucial doctor-patient communications.'
        ],
        technologies: ['Kotlin', 'MVVM', 'Dagger-Android', 'RxJava2', 'Room', 'Navigation Component'],
        tags: ['Kotlin', 'MVVM', 'Dagger-Android', 'RxJava2', 'Room'],
        imagePlaceholder: 'H',
        imageColor: 'linear-gradient(135deg, #00897B, #00695C)'
    },
    {
        id: 'car-plate',
        title: 'Car Plate Recognition',
        role: 'Android Developer',
        company: 'CHI Software',
        date: 'May 2022 – Oct 2022',
        description: 'An AI-driven real-time car plate recognition tool. The app analyzes high-speed live camera streams, stores recognized license plates with accompanying photos, allows local database searching, and synchronizes data with remote servers.',
        tasks: [
            'Integrated a native C++ ALPR (Automatic License Plate Recognition) OCR library into the Android ecosystem using JNI.',
            'Bridged Java and native C++ code to optimize high-framerate real-time video processing via the Camera 2 API.',
            'Optimized memory consumption to prevent leaks during continuous long-term camera operations and handled local caching with Room.'
        ],
        technologies: ['Kotlin', 'C++', 'NDK', 'Dagger 2', 'Retrofit 2', 'Room', 'RxJava', 'Jetpack', 'Camera 2', 'JNI'],
        tags: ['Kotlin', 'C++', 'NDK', 'Camera 2', 'JNI'],
        imagePlaceholder: 'C',
        imageColor: 'linear-gradient(135deg, #607D8B, #455A64)'
    },
    {
        id: 'liftapp',
        title: 'LiftApp',
        role: 'Android Developer',
        company: 'CHI Software',
        date: 'Nov 2021 – Apr 2022',
        description: 'A hardware-integrated digital dashboard for elevators. Renders dynamic information to passengers, including real-time floor numbers, traffic direction, news feeds, and promotional images directly on tablet displays installed in the elevator cab.',
        tasks: [
            'Utilized a native C++ SerialPort library to directly monitor, decode, and process physical hardware signals from the elevator\'s FT232 port.',
            'Adapted the UI layer and optimized performance specifically for continuous, 24/7 operation on Android tablet devices.'
        ],
        technologies: ['Java', 'Android NDK', 'C++', 'SerialPort library'],
        tags: ['Java', 'Android NDK', 'C++', 'Hardware Integration'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #FF7043, #D84315)'
    },
    {
        id: 'liftapp-remote',
        title: 'LiftApp Remote Setup',
        role: 'Android Developer',
        company: 'CHI Software',
        date: 'Mar 2021 – Oct 2021',
        description: 'A specialized remote configuration utility for elevator technicians. Allows maintenance workers to wirelessly connect to the main LiftApp panels and update configuration parameters safely without needing physical access to the device ports.',
        tasks: [
            'Engineered a reliable local wireless connection protocol utilizing Wi-Fi Direct to securely transmit configuration payloads.',
            'Refactored legacy network-handling code to dramatically improve connection stability, maintainability, and data transfer speeds.'
        ],
        technologies: ['Java', 'Wi-Fi Direct'],
        tags: ['Java', 'Wi-Fi Direct', 'Networking'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #8D6E63, #5D4037)'
    },
    {
        id: 'liftapp-bootloader',
        title: 'LiftApp Bootloader',
        role: 'Android Developer',
        company: 'CHI Software',
        date: 'Sep 2020 – Mar 2021',
        description: 'A background system application requiring root privileges, designed to manage the lifecycle of the main LiftApp software. It acts as an OTA update manager that automatically detects, silently installs, and launches new application versions.',
        tasks: [
            'Implemented silent, automated software installation routines by executing low-level root commands within the Android OS.',
            'Configured broadcast receivers for boot events to manage the device lifecycle and ensure the main LiftApp launches instantly upon system boot.'
        ],
        technologies: ['Java', 'Root Access', 'Android System Permissions'],
        tags: ['Java', 'Root Access', 'System Administration'],
        imagePlaceholder: 'L',
        imageColor: 'linear-gradient(135deg, #424242, #212121)'
    },
    {
        id: 'music-streaming-2020',
        title: 'Music Streaming',
        role: 'Android Developer',
        company: 'Nitrix Studio',
        date: 'Feb 2020 – Sep 2020',
        description: 'A premium music streaming platform focused on delivering an enhanced audio experience. Capabilities include full background playback, downloading tracks for offline listening, comprehensive playlist management, and deep integration with Android Auto.',
        tasks: [
            'Developed complex microservices to support a modular and highly scalable backend architecture.',
            'Designed and implemented fresh UI components for intuitive user navigation.',
            'Configured media playback using ExoPlayer and managed offline downloading logic utilizing the Fetch 2 library.',
            'Optimized local database stored procedures to guarantee lightning-fast track retrieval.'
        ],
        technologies: ['Java', 'ExoPlayer', 'Android Auto', 'Dagger 2', 'Fetch 2', 'RxJava'],
        tags: ['Java', 'ExoPlayer', 'Android Auto', 'Dagger 2'],
        imagePlaceholder: 'M',
        imageColor: 'linear-gradient(135deg, #EC407A, #C2185B)'
    },
    {
        id: 'image-compression',
        title: 'Image Compression & Steganography',
        role: 'Android Developer',
        company: 'Nitrix Studio',
        date: 'Aug 2019 – Feb 2020',
        description: 'A specialized security utility designed to compress and encode images while applying advanced steganography techniques. This allows users to secretly embed and extract hidden data within standard image files across both mobile and desktop platforms.',
        tasks: [
            'Architected and engineered the application from scratch using Kotlin and Spring Framework for the backend processing.',
            'Implemented complex image processing algorithms to safely manipulate pixel data without corrupting the hidden payload.',
            'Authored detailed technical documentation and executed comprehensive test plans to ensure encryption logic integrity.'
        ],
        technologies: ['Kotlin', 'Spring Framework', 'Custom Image Processing Algorithms'],
        tags: ['Kotlin', 'Spring Framework', 'Steganography'],
        imagePlaceholder: 'I',
        imageColor: 'linear-gradient(135deg, #7E57C2, #512DA8)'
    },
    {
        id: 'music-platform-2019',
        title: 'Music Streaming Platform',
        role: 'Android Developer',
        company: 'Nitrix Studio',
        date: 'Jan 2019 – Aug 2019',
        description: 'A robust digital streaming ecosystem enabling users to discover music, organize extensive playlists, cache tracks for offline use, and natively share content with friends through dynamic links.',
        tasks: [
            'Built the application adhering strictly to Clean Architecture and MVVM patterns to ensure a maintainable codebase.',
            'Managed complex dependency injection hierarchies with Dagger 2.',
            'Engineered a feature-rich audio player using ExoPlayer and programmed reliable offline file synchronization with Fetch.',
            'Integrated Firebase Dynamic Links to facilitate seamless content sharing and user onboarding.'
        ],
        technologies: ['Kotlin', 'ExoPlayer', 'Dagger 2', 'Fetch 2', 'Retrofit 2', 'Room', 'RxJava', 'Jetpack', 'Firebase Dynamic Links'],
        tags: ['Kotlin', 'Clean Architecture', 'ExoPlayer', 'MVVM'],
        imagePlaceholder: 'M',
        imageColor: 'linear-gradient(135deg, #AB47BC, #7B1FA2)'
    },
    {
        id: 'card-game-calculator',
        title: 'Card Game Score Calculator',
        role: 'Flutter Developer',
        company: 'Nitrix Studio',
        date: 'Jul 2018 – Dec 2018',
        description: 'A versatile cross-platform Flutter utility for tracking scores in popular card games. The app features multiple distinct game modes, detailed score history logs, engaging UI animations, premium subscription models, and dual-language localization.',
        tasks: [
            'Designed and implemented new features in Dart to meet core player needs and improve the tracking experience.',
            'Integrated Firebase AdMob for monetization and Flutter In-App Purchases for premium subscriptions.',
            'Wrote comprehensive unit tests for Dart business logic and refactored the codebase to ensure smooth 60fps animations.'
        ],
        technologies: ['Dart', 'Flutter', 'flutter_svg', 'vibration', 'shared_preferences', 'json_serializable', 'firebase_admob', 'package_info', 'firebase_core', 'firebase_crashlytics', 'flutter_inapp_purchase'],
        tags: ['Dart', 'Flutter', 'Cross-Platform', 'Firebase'],
        imagePlaceholder: 'C',
        imageColor: 'linear-gradient(135deg, #26A69A, #00695C)'
    },
    {
        id: 'media-streaming-2018',
        title: 'Media Streaming Service',
        role: 'Android Developer',
        company: 'IT Company',
        date: 'Jan 2018 – Jul 2018',
        description: 'A comprehensive media portal delivering high-quality streaming for movies, TV series, and live broadcasting. The app is highly optimized for large screens, utilizing Android TV libraries to ensure a seamless couch-viewing experience.',
        tasks: [
            'Executed a Single Activity Architecture based on Clean Architecture principles and managed UI states with MVVM/LiveData.',
            'Developed a universal media player bridging ExoPlayer and VLC to natively decode varied and complex video formats (e.g., AVI).',
            'Adapted the user interface specifically for Android TV using the Leanback library to support remote-control navigation.'
        ],
        technologies: ['Kotlin', 'ExoPlayer', 'VLC', 'Dagger 2', 'Fetch 2', 'Retrofit 2', 'Room', 'RxJava', 'Jetpack', 'Android Leanback'],
        tags: ['Kotlin', 'ExoPlayer', 'VLC', 'Android TV'],
        imagePlaceholder: 'M',
        imageColor: 'linear-gradient(135deg, #5C6BC0, #283593)'
    },
    {
        id: 'resistance-local',
        title: 'Resistance: Local Game',
        role: 'Flutter Developer / Solo Developer',
        company: 'IT Company',
        date: 'Sep 2017 – Jan 2018',
        description: 'A digital, cross-platform adaptation of the famous social deduction board game. Designed to be played locally by 5 to 10 players on a single device. Features a modern glassmorphism UI, detailed mission tracking histories, and dynamic visual theming.',
        tasks: [
            'Architected the application state and core game loop logic using the BLoC pattern in Dart.',
            'Developed highly polished dark and light themes utilizing modern UI design principles and smooth slide animations.',
            'Continually maintained the project, completely migrating the codebase to Null Safety and addressing performance bottlenecks.'
        ],
        technologies: ['Dart', 'Flutter', 'BLoC', 'firebase_admob', 'shared_preferences', 'flutter_html', 'flutter_socket_io', 'firebase_core', 'firebase_crashlytics'],
        tags: ['Dart', 'Flutter', 'BLoC', 'Party Game'],
        imagePlaceholder: 'R',
        imageColor: 'linear-gradient(135deg, #D32F2F, #B71C1C)'
    }
];
