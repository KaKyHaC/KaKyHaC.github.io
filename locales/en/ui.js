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
                metricLabel: 'velocity via autonomous agents',
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
                metricLabel: 'downloads · 5.0★ rating',
                title: 'Product Ownership & Indie Scale',
                points: [
                    {
                        lead: 'DᎥᗰᗩᒪᎥᑎᗩ Studio',
                        text: 'Bootstrapped and shipped independent commercial products with 10k+ downloads each (Tic-Tac-Toe 3-Player, Brainrot Clicker, People Notes CRM).'
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
                tags: ['PhD in Telecom', 'Positional Video Patent', 'Scopus Q3', 'Cybercrime Dept']
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
