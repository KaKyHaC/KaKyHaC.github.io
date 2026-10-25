/** UI strings for English */
export default {
    meta: {
        lang: 'en',
        description: 'Dmytro Barannik - Senior / Staff Software Engineer | Tech Lead | PhD',
        ogTitle: 'Dmytro Barannik - Senior / Staff Software Engineer | Tech Lead | PhD',
        ogDescription: 'Senior / Staff Software Engineer | Tech Lead | PhD with 9+ years of commercial experience.',
    },
    profile: {
        role: 'Senior / Staff Software Engineer',
        subRole: 'Tech Lead | PhD',
        tagline: '9+ years of crafting high-performance, scalable software experiences.',
        downloadCV: 'Download CV',
    },
    cvModal: {
        "closeLabel": "Close dialog",
        "kicker": "PDF RESUME",
        "directLabel": "Android CV · Direct download",

        "title": "Download CV",
        "subtitle": "Choose the focus that matches the role:",
        "staffBadge": "Mobile, web, systems & research",
        "staffTitle": "Software Engineer",
        "staffDesc": "Production mobile experience plus shipped web, C++ and IoT work, independent products, PhD research and a patent.",
        "staffBtn": "Download Software Engineer CV",
        "androidBadge": "Primary CV · Hands-on development",
        "androidTitle": "Android Developer",
        "androidDesc": "Kotlin, Compose, streaming and device integration, with 25,000+ Google Play downloads and a shipped Gemini feature.",
        "androidBtn": "Download Android CV",
        "footerNote": "Two-page PDFs in English with selectable text. The direct download opens the Android CV.",
        "format": "2 pages · English",
        "textFormat": "Selectable text"
},
    nav: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        research: 'Research & Publications',
    },
    sections: {
        about: 'About Me',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        research: 'Research & Publications',
    },
    about: {
        title1: 'Senior / Staff Software Engineer | Tech Lead | PhD',
        bio1: 'I am a Senior / Staff Software Engineer and Tech Lead with over 9 years of commercial experience architecting and delivering high-load, resilient software systems. My foundation is built on deep technological maturity: from high-throughput mobile streaming architectures (Kotlin, Clean Architecture, Coroutines) and low-level algorithmic engines (C++20, SIMD vectorization, zero-allocation memory models) to distributed IoT firmware and modern edge web platforms.',
        bio4: 'Across these domains, I work beyond implementation: I translate product and operational constraints into technical decisions, connect application, backend, hardware and delivery concerns, and stay accountable for maintainability after release. The technology changes with the problem; the standard of ownership does not.',
        bio2: '<strong>Agentic Software Engineering:</strong> AI orchestration is a central pillar of my engineering workflow. Operating as a Tech Lead over autonomous coding agents (Google Antigravity with Gemini, GPT/Codex), I drive spec-driven development, define strict architectural guardrails, and enforce zero-trust test-driven verification loops.',
        bio3: '<i>I champion product craftsmanship, pragmatic system design, and transparent Agile/Scrum cultures that foster rapid innovation, healthy peer reviews, and engineering excellence.</i>',
        title2: 'Product & Leadership',
        leadership1: '<strong>Indie Development (DᎥᗰᗩᒪᎥᑎᗩ):</strong> Built and published multiple commercial products with <strong>25,000+ total downloads</strong> and an exceptional <strong>5.0★ rating</strong>. Highlights include <em>Tic-Tac-Toe: 3 Player Game</em> (10,000+ downloads, 5.0★), <em>Brainrot Clicker: Aura Farming</em> (10,000+ downloads, 5.0★), and <em>People Notes: AI Agent CRM</em> (5.0★). Managed full product lifecycles, real-time multiplayer backends (Firestore), and monetization.',
        leadership2: '<strong>Technical Leadership & Mentorship:</strong> Extensive experience steering engineering teams, conducting rigorous architecture and code reviews, establishing CI/CD quality gates, and coaching engineers toward technical autonomy.',
        title3: 'Research & Academic',
        research1: '<strong>Academic Status:</strong> PhD in Electronic Communications and Radio Engineering (NURE, 2025). Associate Professor at the Department of Combating Cybercrime at Kharkiv National University of Internal Affairs (KhNUIA).',
        research2: '<strong>Achievements:</strong> Holder of a patent for non-equilibrium positional video stream coding. Author of multiple peer-reviewed publications in Scopus-indexed journals (Q3). Recipient of the Cabinet of Ministers of Ukraine Scholarship for Young Scientists (2025).',
        bento: [
            {
                kind: 'scope',
                index: '01',
                isWide: true,
                color: 'var(--accent)',
                rgb: 'var(--accent-rgb)',
                icon: 'fas fa-sitemap',
                metric: '9+',
                metricLabel: 'years commercial engineering',
                title: 'Systems Architecture & Tech Lead',
                points: [
                    {
                        lead: 'High-Throughput Streaming',
                        text: 'Architected multi-million user streaming ecosystems with Kotlin, Clean Architecture, ExoPlayer, and custom buffering pipelines for zero-stutter playback under low-latency constraints.'
                    },
                    {
                        lead: 'Low-Level SIMD & C++20',
                        text: 'Authored high-performance algorithmic modules with C++20, SIMD vectorization (AVX2/NEON), and zero-allocation memory pools for real-time video/audio codec operations.'
                    },
                    {
                        lead: 'Multiplatform & IoT Telemetry',
                        text: 'Engineered end-to-end architectures spanning KMP shared business logic, distributed ESP32/LoRa telemetry networks, and modern edge web interfaces.'
                    },
                    {
                        lead: 'Production Reliability & Ownership',
                        text: 'Enforced strict memory leak elimination, CI/CD quality gates, and automated test suites, taking full accountability for system stability post-release.'
                    }
                ],
                tags: ['High-Load Mobile', 'Clean Architecture', 'C++20 & SIMD', 'IoT & Edge'],
                back: {
                    badge: 'CLEAN ARCHITECTURE BLUEPRINT',
                    flipLabel: '3D Architecture',
                    flipAria: 'Flip card to view universal clean architecture blueprint',
                    frontHint: '3D Blueprint: Universal Clean Architecture Topology',
                    icon: 'fas fa-layer-group',
                    title: 'Universal 3-Layer Clean Architecture',
                    subtitle: 'Strict dependency inversion: Domain Core is 100% decoupled from frameworks & SDKs',
                    callouts: [
                        {
                            lead: 'Dependency Inversion',
                            text: 'Outer layers depend inward on Domain Core interfaces.'
                        },
                        {
                            lead: 'Pure Domain Isolation',
                            text: '100% pure Kotlin with zero third-party SDK dependencies.'
                        },
                        {
                            lead: 'Unidirectional MVI',
                            text: 'UI Intent ➔ UseCase ➔ deterministic 60 FPS StateFlow.'
                        }
                    ],
                    diagramLabels: {
                        title: 'Enterprise Clean Architecture Topology & Dependency Rule',
                        dependencyRule: 'Dependencies Point Inward → Domain',
                        flow: 'Unidirectional StateFlow'
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
                metricLabel: 'velocity via parallel swarms',
                title: 'Agentic AI & Swarm Orchestration',
                points: [
                    {
                        lead: 'Autonomous Swarm Leadership',
                        text: 'Directing autonomous coding agent swarms (Antigravity, Gemini, Claude, Codex) with explicit architectural guardrails and zero-drift directives.'
                    },
                    {
                        lead: 'Spec-Driven Engineering',
                        text: 'Formulating formal technical specifications, strict type contracts, and comprehensive acceptance criteria before executing code generation.'
                    },
                    {
                        lead: 'Zero-Trust Verification Loops',
                        text: 'Enforcing automated AST/linter validations, contract test suites, and strict human-in-the-loop gates to eliminate hallucinations completely.'
                    }
                ],
                tags: ['Autonomous Swarms', 'Spec-Driven Dev', 'Zero-Trust TDD'],
                back: {
                    badge: 'PARALLEL SWARM PIPELINE',
                    flipLabel: '3D Swarm',
                    flipAria: 'Flip card to view parallel agentic swarm workflow',
                    frontHint: '3D Topology: 4x Parallel Swarm & Quality Gate',
                    icon: 'fas fa-network-wired',
                    title: 'Parallel Multi-Agent Swarm Orchestration',
                    subtitle: 'Orchestrator dispatches 4 parallel worker agents directly into an AST & TDD quality gate',
                    callouts: [
                        {
                            lead: 'Contract Decomposition',
                            text: 'Strict type contracts and formal acceptance specs prior to codegen.'
                        },
                        {
                            lead: '4x Parallel Swarm',
                            text: 'Simultaneous code, test suites, AST linting, and CI pipelines.'
                        },
                        {
                            lead: 'Zero-Hallucination Gate',
                            text: '100% test pass on verification loops with zero drift.'
                        }
                    ],
                    diagramLabels: {
                        title: 'Parallel Swarm Topology & Quality Gate',
                        verified: '100% Verified · 0 Drift'
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
                metricLabel: 'downloads · 6 published apps',
                title: 'Product Ownership & Indie Scale',
                points: [
                    {
                        lead: 'DᎥᗰᗩᒪᎥᑎᗩ Studio',
                        text: 'Bootstrapped and shipped 6 independent Android products with 25,000+ total downloads on Google Play, owning product design, architecture, and deployment.'
                    },
                    {
                        lead: 'End-to-End Execution',
                        text: 'Owned complete product lifecycles solo: UX/UI Figma design, Kotlin/Android architecture, Google Play store deployment, and ASO optimization.'
                    },
                    {
                        lead: 'Cloud & Monetization',
                        text: 'Integrated real-time Cloud Firestore backends, offline-first synchronization, Google Play In-App Purchases, and optimized AdMob mediation.'
                    }
                ],
                tags: ['DᎥᗰᗩᒪᎥᑎᗩ Studio', '6 Google Play Apps', '25,000+ Downloads'],
                back: {
                    badge: 'GOOGLE PLAY PORTFOLIO (6 APPS)',
                    flipLabel: '3D Apps',
                    flipAria: 'Flip card to view published Google Play apps',
                    frontHint: '3D Showcase: 6 Published Google Play Android Apps',
                    icon: 'fab fa-google-play',
                    title: 'DᎥᗰᗩᒪᎥᑎᗩ Studio: Published Apps',
                    subtitle: 'Full solo cycle: from UI/UX in Figma to Google Play production',
                    apps: [
                        {
                            id: 'tictactoe',
                            name: 'Tic-Tac-Toe 3P',
                            tag: '10K+ DL · Multiplayer',
                            icon: 'images/projects/tictactoe_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.tictactoy'
                        },
                        {
                            id: 'peoplenotes',
                            name: 'People Notes AI',
                            tag: 'Gemini AI · Offline CRM',
                            icon: 'images/projects/peoplenotes_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.peoplenotes'
                        },
                        {
                            id: 'lucky',
                            name: 'Lucky Loot Boxes',
                            tag: 'Loot Box Simulator',
                            icon: 'images/projects/lucky_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.luckylootbox'
                        },
                        {
                            id: 'brainrot',
                            name: 'Brainrot Clicker',
                            tag: 'Arcade Clicker',
                            icon: 'images/projects/brainrotclicker_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.brainrotclicker2'
                        },
                        {
                            id: 'nightfall',
                            name: 'Operation Nightfall',
                            tag: 'Tactical Action',
                            icon: 'images/projects/resistance_multiplayer_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.dvbarannik.operation.nightfall'
                        },
                        {
                            id: 'resistance',
                            name: 'The Resistance',
                            tag: 'Social Deduction',
                            icon: 'images/projects/resistance_icon.png',
                            playUrl: 'https://play.google.com/store/apps/details?id=com.divan.theresistance'
                        }
                    ],
                    callouts: [
                        {
                            lead: 'Solo Engineering',
                            text: 'Figma UI/UX design, native Android, Firestore, and Google Play IAP.'
                        },
                        {
                            lead: 'Stability & ASO',
                            text: 'Zero crash rate, rapid OTA releases, and organic store discovery.'
                        }
                    ],
                    primaryAction: {
                        label: 'Google Play Developer Profile',
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
                metricLabel: '1 patent · 68 peer-reviewed pubs',
                title: 'Applied Research & Deep Tech',
                points: [
                    {
                        lead: 'Academic Status & Teaching',
                        text: 'PhD in Electronic Communications (NURE, 2025). Associate Professor at the Department of Combating Cybercrime (KhNUIA), lecturing on cybersecurity.'
                    },
                    {
                        lead: 'Patented Video Compression',
                        text: 'Inventor of a patented non-equilibrium positional video stream coding method optimized for severe bandwidth constraints and noisy tactical links.'
                    },
                    {
                        lead: 'Scopus Publications',
                        text: 'Published 68+ academic papers, including Q3 Scopus-indexed research on combinatorial data compression, cryptographic resilience, and streaming protocols.'
                    },
                    {
                        lead: 'State Honors & Recognition',
                        text: 'Awarded the prestigious Cabinet of Ministers of Ukraine Scholarship for Young Scientists (2025) for exceptional contributions to applied defense tech.'
                    }
                ],
                tags: ['PhD in Telecom', 'Positional Video Patent', 'Scopus Q3', 'Cybercrime Dept'],
                back: {
                    badge: 'PATENT SPEC & 5-AXIS RADAR BENCHMARK',
                    flipLabel: '3D Radar',
                    flipAria: 'Flip card to view LibPolyCodec 5-axis performance radar chart',
                    frontHint: '3D Radar: 5-Axis Multi-Metric LibPolyCodec Benchmark',
                    icon: 'fas fa-certificate',
                    title: 'LibPolyCodec vs. Standard Codecs',
                    subtitle: 'Patented non-equilibrium positional compression and C++20 zero-allocation engine',
                    callouts: [
                        {
                            lead: 'Zero-Alloc Heap',
                            text: '0 bytes dynamic allocations on static memory pools'
                        },
                        {
                            lead: 'SIMD AVX2 / NEON',
                            text: '4.2x hardware vector stream acceleration'
                        },
                        {
                            lead: 'Patent & Scopus Q3',
                            text: 'State patent of Ukraine and 68+ scientific publications'
                        }
                    ],
                    primaryAction: {
                        label: 'LibPolyCodec Case Study & Repository',
                        href: '/projects/libpolycodec/',
                        icon: 'fas fa-arrow-right',
                        external: false
                    },
                    radarLabels: {
                        title: 'LibPolyCodec vs. Standard Codecs (5-Axis Multi-Metric Radar)',
                        legendLib: 'LibPolyCodec (C++20)',
                        legendGen: 'Standard (Zstd / Gzip)',
                        axis1: 'Speed (SIMD)',
                        axis2: 'Compression',
                        axis3: 'Zero-Alloc',
                        axis4: 'UAV / IoT',
                        axis5: 'Security'
                    }
                }
            }
        ],
    },
    skills: {
        programming_languages: 'Languages',
        android_core_and_ui: 'Android & Mobile',
        architecture_and_design: 'Architecture & Design',
        asynchrony_and_networking: 'Network & Concurrency',
        databases_and_local_storage: 'Data Storage',
        cloud_and_backend: 'Cloud & Auth',
        dependency_injection: 'Dependency Injection',
        multimedia_hardware_and_camera: 'Media & Hardware',
        testing_and_debugging: 'Testing & Profiling',
        monetization_analytics_and_devops: 'DevOps & Product Growth',
        systems_and_cpp: 'Systems & C++20',
        modern_web_and_edge: 'Modern Web & Edge (AI)',
        iot_and_embedded: 'IoT & Embedded',
        cybersecurity_and_research: 'Cybersecurity & R&D',
        inferred_game_dev_and_publishing: 'Game Dev & Publishing',
        ai_orchestration_and_agentic_engineering: 'AI Orchestration & Agents',
    },
    skillsGroups: {
        core: 'Core & Leadership',
        platforms: 'Platforms & Ecosystem',
        foundation: 'Engineering Foundation',
        quality: 'Quality & Delivery',
    },
    directionsUi: {
        activeFilter: 'Active filter · Click to reset',
        clickToFilter: 'Filter portfolio by this direction',
    },
    skillsUi: {
        allDomains: 'All Specializations',
        filterDomainAria: 'Filter competencies by technical domain',
        overviewTitle: 'Chapter at a Glance',
        overviewHint: 'Click any skill to jump to production dossier',
        skillsCount: 'Skills in chapter',
        projectsCount: 'Connected projects',
        categoryDossier: 'Dossier chapter',
        totalCategories: 'Categories',
        skillsUnit: 'skills',
        projectsUnit: 'projects',
    },
    experience: {
        projectsBtn: 'Projects',
        present: 'Present',
    },
    projects: {
        sectionTitle: 'Projects',
        clearFilter: 'Clear Filter',
        domainFilters: {
            all: 'All',
            mobile: 'Mobile',
            systems: 'Systems & C++',
            web: 'Modern Web',
            iot: 'IoT & Embedded',
        },
        keyAchievements: 'Key Achievements',
        technologies: 'Technologies',
        openLink: 'Open Link',
        googlePlay: 'Google Play',
        github: 'GitHub',
        website: 'Visit Website',
        noProjects: 'No projects found matching the selected filter.',
    },
    research: {
        patents: 'Patents',
        publications: 'Scientific Publications',
        conferences: 'Conference Proceedings',
        awards: 'Awards & Activities',
    },
    education: {
        researchFocus: 'Research Focus:',
    },
};
