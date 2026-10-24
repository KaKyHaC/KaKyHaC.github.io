# Dmytro Barannik — Portfolio & Engineering Showcase

[![Live Site](https://img.shields.io/badge/Live_Portfolio-dvbarannik.github.io-blue?style=flat-square&logo=github)](https://dvbarannik.github.io/)
[![Tech Stack](https://img.shields.io/badge/Stack-Vite%205%20%7C%20Vanilla%20JS%20%7C%20CSS3-orange?style=flat-square)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-ISC-green?style=flat-square)](LICENSE)

Personal portfolio and technical showcase of **Dmytro Barannik, PhD** — Software Engineer, Tech Lead, and Researcher with 9+ years of engineering across mobile (Android), web, IoT, security systems, and applied computer science.

---

## 🌟 Key Features

- **Blazing Fast & Zero Bloat:** Built with pure Vanilla JavaScript (ES modules) and optimized CSS on top of Vite 5 — zero heavy frontend frameworks, near-instant load times.
- **Dynamic Localization (i18n):** Seamless runtime language switching (**English** / **Ukrainian**) with lazy-loaded translation namespaces, browser locale detection, and zero network redundancy.
- **Visual-First Interactive Timeline:** Chronological career journey visualizing roles, companies, tenures, and technology stacks at a glance.
- **Deep-Dive Project Showcase:** Filterable project catalog with comprehensive modals, architecture highlights, and dedicated static project pages for SEO and social sharing.
- **Adaptive Dark & Light Themes:** Curated CSS variable design tokens respecting system preferences with manual toggle.
- **Accessible & Responsive:** Mobile-first layout, full keyboard navigation, visible focus indicators, and complete support for `prefers-reduced-motion`.
- **Static Page Generation (SSG) for Projects:** Built-in post-build script generates individual `/projects/:id` landing pages with pre-populated OpenGraph meta tags for rich social sharing cards.

---

## 🏗️ Project Architecture

```
dvbarannik.github.io/
├── archive/                  # Historical assets and reference materials (not SSOT)
│   └── resume/               # Legacy resumes (PDF/DOCX) used for filling timeline gaps
├── docs/                     # Comprehensive project documentation
│   ├── ARCHITECTURE.md       # Technical architecture, routing, build, and i18n
│   ├── DESIGN.md             # Design tokens, UX principles, and accessibility
│   ├── CONTENT_GUIDE.md      # Content management, STAR guidelines, adding projects
│   └── RESUME_STRATEGY.md    # Strategy & technical roadmap for automated modern CV
├── locales/                  # Localized content namespaces (English & Ukrainian)
│   ├── en/                   # English content (projects, experience, skills, ui...)
│   └── uk/                   # Ukrainian content (projects, experience, skills, ui...)
├── public/                   # Static assets served as-is
│   ├── images/               # Project screenshots, company logos, profile pictures
│   │   └── qr/               # QR code assets
│   └── Dmytro_Barannik_CV.pdf# Current downloadable CV (temporary, pending generator)
├── scripts/                  # Build and maintenance scripts
│   └── generate-project-pages.mjs # Pre-renders static project landing pages
├── src/                      # Application source code
│   ├── i18n/                 # Localization engine and namespace loader
│   ├── analytics.js          # Privacy-friendly event tracking (Firebase)
│   ├── companies.js          # Company branding and metadata configuration
│   ├── project-data.js       # Core project registry
│   ├── main.js               # Portfolio UI logic and event handlers
│   ├── project.js            # Standalone project page runner
│   ├── style.css             # Main stylesheet and design system
│   └── project.css           # Project detail page styles
├── index.html                # Vite SPA entrypoint
├── project.html              # Template for standalone project pages
├── vite.config.js            # Vite multi-page configuration
└── package.json              # Project dependencies and npm scripts
```

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (comes with Node.js)

### Installation
```bash
# Clone the repository
git clone https://github.com/dvbarannik/dvbarannik.github.io.git
cd dvbarannik.github.io

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. Vite provides instant Hot Module Replacement (HMR).

### Production Build & SSG
```bash
npm run build
```
This runs Vite's optimized production bundler and triggers `scripts/generate-project-pages.mjs` to generate individual project routes in `dist/projects/`.

### Preview Production Build
```bash
npm run preview
```

---

## 📚 Documentation

For detailed guides and architecture specifications, consult the [`docs/`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/docs) folder:

- 📐 [**ARCHITECTURE.md**](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/docs/ARCHITECTURE.md): Multi-page strategy, lazy-loaded i18n system, Firebase analytics, and deployment details.
- 🎨 [**DESIGN.md**](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/docs/DESIGN.md): Visual principles, theme tokens, typography, motion philosophy, and WCAG AA accessibility.
- ✍️ [**CONTENT_GUIDE.md**](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/docs/CONTENT_GUIDE.md): Content creation guidelines, STAR achievement framing, adding companies/projects, and legacy archive role.
- 📄 [**RESUME_STRATEGY.md**](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/docs/RESUME_STRATEGY.md): Roadmap for automated, modern, ATS-friendly CV generation via HTML/CSS & Puppeteer.
- 🗄️ [**archive/resume/README.md**](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/archive/resume/README.md): Information regarding historical resume files and their usage as reference context.

---

## 💎 Core Principles

1. **Visual Dominance over Text ("Visual First, Details on Demand"):** Visual perception dominates text. Scale, company logos, badges, timeline geometry, and metrics communicate seniority and scope within the first 3–5 seconds. Long-form copy is strictly a secondary tier (*details on demand*) for visitors who choose to dive deeper.
2. **Equal Engineering Stature (All Projects Are Paramount):** No artificial division into "important" vs "minor" projects. Whether a streaming giant with millions of users (MEGOGO), an enterprise architecture (CHI), a boutique startup, a low-level C++ codec, an IoT hardware network, or a scientific grant — every product receives the exact same uncompromising standard of architectural care, craft, and accountability. Prospective clients see that whatever product they bring, it is treated with the highest priority.
3. **Versatile Multi-Disciplinary Spectrum:** Engineering leadership across native Android, KMP, Flutter, Modern Web & Edge, Embedded / C++, IoT, and applied research grants and competitions without being confined to a single narrow silo.
4. **Honest Engineering & Verifiable Outcomes:** Timelines reflect real dates; projects highlight architectural decisions and measurable impact rather than generic buzzwords.
5. **Decoupled Content & Localization:** Content is isolated into bilingual data modules (`locales/`), allowing effortless updates without modifying presentation code.
6. **Performance & Sustainability:** Zero unnecessary libraries. Native web platform capabilities are preferred whenever possible.

---

## 👤 Author

**Dmytro Barannik, PhD**  
- Website: [dvbarannik.github.io](https://dvbarannik.github.io/)  
- LinkedIn: [linkedin.com/in/dmytro-barannik](https://www.linkedin.com/in/dmytro-barannik/)  
- GitHub: [@dvbarannik](https://github.com/dvbarannik)
