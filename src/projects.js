export const projects = [
    {
        id: 'peoplenotes',
        title: 'People Notes (MyPeople)',
        role: 'Solo Project',
        date: 'Dec 2024 – Present',
        description: 'A personal contact management application that allows users to store and organize detailed information about people, track key events, and maintain important notes.',
        tasks: [
            'Designed and built the application from scratch using Jetpack Compose.',
            'Implemented local and cloud data synchronization using Firestore and Room.',
            'Integrated WorkManager for background tasks and AdMob for monetization.',
            'Used Hilt for dependency injection.'
        ],
        tags: ['Compose', 'Firestore', 'Hilt', 'WorkManager', 'AdMob'],
        imagePlaceholder: 'P',
        imageColor: 'linear-gradient(135deg, #FFD700, #FF8C00)'
    },
    {
        id: 'resistance',
        title: 'Resistance: Nightfall',
        role: 'Solo Project',
        date: 'Jan 2025 – Present',
        description: 'A multiplayer social deduction game inspired by The Resistance: Avalon. Players take on secret roles, form teams, and attempt to complete or sabotage missions through strategy and deception.',
        tasks: [
            'Developed real-time multiplayer networking logic using Firebase Realtime Database.',
            'Created responsive and animated UI components with Jetpack Compose.',
            'Implemented state management using Kotlin Coroutines and Flow.'
        ],
        tags: ['Compose', 'Firebase Realtime', 'Flow', 'Multiplayer'],
        imagePlaceholder: 'R',
        imageColor: 'linear-gradient(135deg, #1A1A2E, #16213E)'
    },
    {
        id: 'symmetry',
        title: 'Symmetry',
        role: 'Android Developer',
        date: 'Sep 2024 – Dec 2024',
        description: 'App for inspectors and customers. Inspectors detect gas leaks using a camera and automatically save found spots with media and location. Customers can check inspections on a map.',
        tasks: [
            'Integrated CameraX for capturing and processing media during inspections.',
            'Implemented Google Maps for geospatial tracking of leaks.',
            'Handled secure authentication and data syncing via AWS Cognito and Room.'
        ],
        tags: ['CameraX', 'Google Maps', 'AWS Cognito', 'Room'],
        imagePlaceholder: 'S',
        imageColor: 'linear-gradient(135deg, #4CAF50, #2E7D32)'
    },
    {
        id: 'smarthome',
        title: 'Smart Home',
        role: 'Lead Android Dev',
        date: 'Jul 2023 – Aug 2024',
        description: 'Application to have control over the smart house and its systems. Users are able to setup different variety of home and rooms settings, control lights, shades, fans, and thermostats, observe live from cameras.',
        tasks: [
            'Led the Android development team and defined the app architecture (MVP).',
            'Implemented reactive data flows using RxJava2 and dependency injection with Koin.',
            'Integrated IoT protocols for real-time device control and camera streaming.'
        ],
        tags: ['MVP', 'RxJava2', 'Koin', 'IoT'],
        imagePlaceholder: 'H',
        imageColor: 'linear-gradient(135deg, #00C9FF, #92FE9D)'
    },
    {
        id: 'carplate',
        title: 'Car Plate Recognition',
        role: 'Android Developer',
        date: 'May 2022 – Oct 2022',
        description: 'Application for real-time car plate recognition using camera. The app analyzes images in real-time, stores found plates with photos, and allows searching through the database.',
        tasks: [
            'Utilized Camera 2 API for high-performance image capture.',
            'Integrated C++ OCR libraries using Android NDK and JNI for fast processing.',
            'Optimized memory usage for real-time video frame analysis.'
        ],
        tags: ['C++', 'NDK / JNI', 'Camera 2', 'OCR'],
        imagePlaceholder: 'C',
        imageColor: 'linear-gradient(135deg, #FF416C, #FF4B2B)'
    },
    {
        id: 'elevator',
        title: 'Elevator Displays & Config',
        role: 'Android Developer',
        date: '2020 – 2022',
        description: 'Developed multiple system apps for elevator displays: an information display system interpreting FT232 signals, a Wi-Fi Direct remote config tool, and an auto-installer running with root access.',
        tasks: [
            'Developed hardware-level communication using C++ SerialPort.',
            'Implemented peer-to-peer device configuration via Wi-Fi Direct.',
            'Created background services requiring Root Access for automated installations.'
        ],
        tags: ['Root Access', 'Wi-Fi Direct', 'SerialPort (C++)'],
        imagePlaceholder: 'E',
        imageColor: 'linear-gradient(135deg, #8E2DE2, #4A00E0)'
    }
];
