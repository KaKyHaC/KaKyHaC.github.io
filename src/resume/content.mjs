// Editorial content for the two role-specific CVs. Historical employers, roles,
// dates, degree records and project links are resolved from the portfolio data.

export const verifiedMetrics = {
    googlePlayDownloads: {
        display: '25,000+',
        label: 'cumulative Google Play downloads',
        source: 'Candidate-confirmed total across published Dimalina apps',
        checkedAt: '2026-10-24'
    },
    ticTacToeDownloads: {
        display: '10K+',
        label: 'Google Play downloads',
        source: 'https://play.google.com/store/apps/details?id=com.dvbarannik.tictactoy',
        checkedAt: '2026-10-24'
    }
};

export const summaries = {
    android: 'Android developer delivering Kotlin and Java applications since 2017 across streaming, healthcare, connected devices and independently published products. Combines hands-on feature development with legacy modernization, release ownership, code review and mentoring.',
    software: 'Software engineer delivering production applications since 2017, with commercial depth in Android and Flutter and hands-on work across web, C++ and IoT. Turns product requirements and research ideas into maintained software, from architecture and implementation to review, release and support.'
};

export const focusLines = {
    android: 'Kotlin · Jetpack Compose · Coroutines & Flow · Android TV · Media · Device integration',
    software: 'Android & Flutter · Web & Edge · Modern C++ · IoT · Applied research'
};

export const proofPoints = {
    android: [
        [verifiedMetrics.googlePlayDownloads.display, 'Google Play downloads'],
        ['2017-present', 'Android delivery'],
        ['Mobile · TV · Devices', 'Production contexts']
    ],
    software: [
        [verifiedMetrics.googlePlayDownloads.display, 'Google Play downloads'],
        ['PhD + patent', 'Applied research'],
        ['Mobile · Web · C++ · IoT', 'Engineering range']
    ]
};

export const independentWork = {
    company: 'DᎥᗰᗩᒪᎥᑎᗩ',
    displayCompany: 'Dimalina Studio',
    androidBullets: [
        { lead: 'Published and maintained a portfolio of Android products', text: `with ${verifiedMetrics.googlePlayDownloads.display} cumulative Google Play downloads, owning product design, implementation, monetization and release support.` },
        { lead: 'Tic-Tac-Toe: 3 Player Game', text: `reached ${verifiedMetrics.ticTacToeDownloads.display} downloads; built local, online and ranked play, Firestore synchronization, configurable AI opponents and a Jetpack Compose UI.` },
        { lead: 'People Notes: AI Agent CRM', text: 'shipped an offline-capable personal CRM with cloud sync, reminders and Play Billing; integrated Gemini to interpret requests and propose contact or event changes for user review before saving.' }
    ],
    softwareBullets: [
        { lead: 'Built and published a multi-product Android portfolio', text: `with ${verifiedMetrics.googlePlayDownloads.display} cumulative downloads, covering product design, implementation, Firebase services, monetization and Google Play delivery.` },
        { lead: 'Released consumer products with real-time and AI features', text: 'including online multiplayer and a Gemini-powered personal CRM that proposes structured contact and event updates for explicit user confirmation.' },
        { lead: 'Applied AI-assisted development in daily delivery', text: 'for task decomposition, implementation and test drafting; reviewed generated changes and validated them through builds, automated tests and manual checks.' }
    ]
};

export const career = {
    MEGOGO: {
        company: 'MEGOGO',
        android: [
            { lead: 'Modernized production UI', text: 'by migrating legacy XML screens to Jetpack Compose across the mobile and Android TV streaming application.' },
            { lead: 'Implemented playback and access flows', text: 'for channel availability, purchase handling and parental controls in a large streaming product.' },
            { lead: 'Built acquisition and navigation paths', text: 'with Install Referrer, custom URI schemes, improved error handling and multi-module navigation fixes.' }
        ],
        software: [
            { lead: 'Modernized the Android streaming client', text: 'by migrating legacy XML UI to Jetpack Compose and improving navigation and error handling across modules.' },
            { lead: 'Delivered playback entry, access-control and deep-link flows', text: 'for mobile and Android TV using ExoPlayer-related product workflows, Install Referrer and custom URI schemes.' }
        ]
    },
    'CHI Software': {
        company: 'CHI Software',
        android: [
            { lead: 'Delivered Android applications', text: 'for healthcare, smart home and field inspection products using Kotlin, MVVM, Clean Architecture, Coroutines and Flow.' },
            { lead: 'Integrated camera and native processing', text: 'with CameraX/Camera2, geotagged media, Room and a C++ OCR engine connected through JNI/NDK.' },
            { lead: 'Led Android delivery on Smart Home', text: 'reviewing code, mentoring developers and establishing build and deployment pipelines.' }
        ],
        software: [
            { lead: 'Delivered mobile systems across healthcare, smart home and security', text: 'combining Kotlin architectures with camera, map, authentication, local data and hardware integrations.' },
            { lead: 'Led technical delivery', text: 'through architecture decisions, code review, developer mentoring, technical interviews and CI/CD practices.' }
        ]
    },
    'Nitrix Studio': {
        company: 'Nitrix Studio',
        shared: [
            { lead: 'Built native Android and Flutter applications', text: 'using Kotlin, Java, Dart, MVVM/MVP and BLoC with REST APIs, WebSockets and local persistence.' },
            { lead: 'Delivered media experiences', text: 'with ExoPlayer playback, offline downloads, Android Auto integration and Android TV adaptation.' }
        ]
    },
    'IT Company': {
        company: 'IT Company',
        shared: [
            { lead: 'Developed LiftApp elevator dashboards', text: 'in Java with a native C++ SerialPort library for continuous FT232 hardware communication.' },
            { lead: 'Built device-management workflows', text: 'for Wi-Fi Direct remote configuration, boot handling and automated application updates on installed tablets.' }
        ]
    }
};

export const androidSkills = [
    ['Android & UI', 'Kotlin, Java, Android SDK, Jetpack Compose, XML Views, Material 3, Android TV'],
    ['Architecture & async', 'MVVM, MVI, Clean Architecture, Coroutines, Flow, RxJava, Dagger/Hilt, Koin'],
    ['Data & integration', 'Room, Retrofit, OkHttp, REST, WebSockets, Firebase, WorkManager, Play Billing'],
    ['Media & devices', 'ExoPlayer, Android Auto, CameraX/Camera2, BLE, Wi-Fi Direct, NDK/JNI'],
    ['Quality & delivery', 'JUnit, Mockito, Robolectric, debugging, code review, CI/CD, Google Play releases'],
    ['AI-assisted delivery', 'Task decomposition, implementation and test drafting, code review, build and behavior validation']
];

export const softwareSkills = [
    ['Mobile', 'Kotlin, Java, Jetpack Compose, Android SDK, KMP, Flutter/Dart, Coroutines, Flow'],
    ['Web & edge', 'Next.js, React, Astro, JavaScript, CSS, Cloudflare Pages, accessibility, structured data'],
    ['Systems & IoT', 'C++20, CMake, Android NDK/JNI, SIMD, ESP32, LoRa, MQTT, BLE, Wi-Fi Direct'],
    ['Architecture & data', 'Clean Architecture, MVVM/MVI, REST, WebSockets, Room, Firebase, SQLite'],
    ['Quality & delivery', 'JUnit, Mockito, Robolectric, code review, CI/CD, release ownership, technical mentoring'],
    ['AI-assisted delivery', 'Task decomposition, implementation and test drafting, code review, build and behavior validation']
];

export const projects = {
    androidSecondary: [
        { id: 'epic-clicker', lead: 'Built an offline-capable idle game', text: 'with modular characters, progression systems, Firebase Analytics, Remote Config, Crashlytics and automated localization support.' },
        { id: 'lucky-loot-boxes', lead: 'Implemented a collection and probability-driven game', text: 'with Compose animations, Play Games cloud sync, achievements, leaderboards, AdMob and Play Billing.' }
    ],
    softwarePrimary: [
        { id: 'esmee-bionics', lead: 'Built a modular medical product platform', text: 'in Next.js and React with accessible product pathways, patient inquiry flows, structured medical metadata and Cloudflare Pages delivery.' },
        { id: 'libpolycodec', lead: 'Developed a cross-platform C++20 compression library', text: 'with modular encode/decode pipelines, explicit allocation policies, CMake toolchains and SIMD implementations for desktop and mobile.' }
    ],
    softwareSecondary: [
        { id: 'pro-klimat', lead: 'Built an Astro-based commercial HVAC platform', text: 'with service configuration, quote calculators, persistent theming, structured search metadata and edge deployment.' },
        { id: 'lora-iot-network', lead: 'Developed ESP32/LoRa telemetry firmware', text: 'with sensor acquisition, radio communication, MQTT integration and embedded C++ components.' }
    ]
};

export const additionalEngineering = 'Additional hands-on work: Kotlin Multiplatform, Flutter/Dart, Next.js/Astro, C++20 and ESP32/LoRa.';
export const languages = 'English - B2 (Upper-Intermediate); Ukrainian - native.';
