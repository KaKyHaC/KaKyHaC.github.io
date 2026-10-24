// Editorial selections only. Employers, roles, dates, project titles/links and
// degrees come from the portfolio. Do not add metrics without supporting evidence.
export const summaries = {
    android: 'Android developer building Kotlin and Java applications since 2017. Experience at MEGOGO and CHI Software across streaming, healthcare and connected devices. Hands-on work with Jetpack Compose, Coroutines, Flow, Room and REST APIs, alongside independently published Google Play apps. Seeking a hands-on Android development role.',
    software: 'Software engineer building applications since 2017, with commercial Android and Flutter experience at MEGOGO, CHI Software and Nitrix Studio. Work spans connected devices, independently published products, web applications and C++ libraries. Combines implementation, code review and mentoring with applied research in secure data transmission.'
};

export const career = [
    { company: 'MEGOGO', bullets: [
        'Migrated legacy XML screens to Jetpack Compose in the mobile and Android TV streaming application.',
        'Implemented channel availability and playback entry logic, in-app purchase handling and parental controls.',
        'Built deep-link handling with Install Referrer and custom URI schemes; improved navigation and error handling.'
    ] },
    { company: 'CHI Software', bullets: [
        'Developed Android applications for healthcare, smart home and field inspections using Kotlin, MVVM, Clean Architecture, Coroutines and Flow.',
        'Symmetry: integrated CameraX, Room, Google Maps, AWS Cognito and Retrofit for inspections with geotagged media.',
        'Smart Home: led Android development, reviewed code, mentored developers and set up build and deployment pipelines.',
        'Car Plate Recognition: integrated a native C++ OCR library via JNI/NDK, processed Camera2 frames and managed local caching with Room.'
    ] },
    { company: 'Nitrix Studio', bullets: [
        'Built native Kotlin/Java and Flutter applications using MVVM/MVP and BLoC; integrated REST APIs, WebSockets and local storage.',
        'Implemented ExoPlayer media playback, offline downloads and Android Auto integration in music applications; adapted video UI for Android TV.'
    ] },
    { company: 'IT Company', bullets: [
        'Developed LiftApp elevator dashboards in Java, integrating a native C++ SerialPort library for FT232 hardware communication.',
        'Built Wi-Fi Direct remote configuration and Android boot/update workflows for installed tablet devices.'
    ] }
];

export const skills = [
    ['Languages & UI', 'Kotlin, Java, Jetpack Compose, XML layouts, Android SDK, Android TV'],
    ['Architecture', 'MVVM, MVI, Clean Architecture, Coroutines, Flow, RxJava, Dagger/Hilt, Koin'],
    ['Data & integration', 'Room, Retrofit, OkHttp, REST, WebSockets, Firebase, WorkManager'],
    ['Media & hardware', 'ExoPlayer, Android Auto, CameraX/Camera2, BLE, Wi-Fi Direct, NDK/JNI'],
    ['Quality & delivery', 'JUnit, Mockito, Robolectric, code review, CI/CD, Google Play publishing']
];

export const products = [
    { id: 'tic-tac-toe', text: 'Built a three-player board game with online matchmaking, Firestore synchronization and configurable AI difficulty. Implemented the UI with Jetpack Compose and Material 3.' },
    { id: 'people-notes', text: 'Built an offline-first contact journal with Room, search and filtering, background reminders and Google Play Billing.' },
    { id: 'epic-clicker', text: 'Developed an Android idle game with offline progress and modular characters. Integrated Firebase analytics, Remote Config and crash reporting; automated app localization.' }
];

export const engineeringProjects = [
    { id: 'esmee-bionics', text: 'Built a Next.js / React prosthetics platform with product pathways, patient inquiry flows and Cloudflare Pages deployment.' },
    { id: 'pro-klimat', text: 'Built an Astro HVAC website with service configuration, quote calculators, persistent themes and structured search metadata.' },
    { id: 'libpolycodec', text: 'Developed a C++20 compression library with modular encoding/decoding pipelines, explicit allocation policies and SIMD implementations for desktop and mobile.' },
    { id: 'lora-iot-network', text: 'Developed ESP32 / LoRa sensor telemetry with radio communication, MQTT integration and embedded C++ firmware.' }
];

// No CEFR level is asserted until confirmed by the candidate.
export const languages = 'Ukrainian (native); English.';
