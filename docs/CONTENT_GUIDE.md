# Content Strategy & Maintenance Guide

This document defines the principles for managing, authoring, and updating content across `dvbarannik.github.io`.

---

## 1. Professional Positioning & Brand Narrative

The portfolio presents a unified professional identity:
> **Software Engineer · Tech Lead · PhD**

Rather than pigeonholing the profile as exclusively a mobile developer, the content articulates a multi-disciplinary technical leader capable of:
1. **Architecture & Product Delivery:** End-to-end execution across Android, Web, Systems, and Cloud.
2. **Applied Research & Engineering Rigor:** Academic foundation (PhD), cryptographic and information security research, algorithmic optimization.
3. **Engineering Leadership:** Mentorship, cross-functional collaboration, technical decision-making, and CI/CD quality standards.

### 1.1 The Golden Rule: Visuals First, Copy Second
> [!IMPORTANT]
> **Write content for eyes that scan, not eyes that read.**
> Visitors will not read paragraphs on initial encounter. Every content addition must be structured around visual anchoring:
> - **Visual anchors come first:** Bold metrics (`9+ years`, `35% faster`, `10M+ users`), company logos, technology pills, and high-quality banners/GIFs.
> - **Headings and lead sentences must deliver 80% of the value:** If a reader skims only the bold words and titles, they must still grasp the full accomplishment.
> - **Paragraphs are strictly "details on demand":** Detailed prose belongs inside expandable drawers, modals, or dedicated project pages.

### 1.2 The Principle of Parity: All Projects Are of Paramount Importance

> [!IMPORTANT]
> **Never divide projects into "major" vs "minor". Every project is the most important one.**
> For Dmytro, every client and product is equally vital:
> - A massive commercial streaming service with 10M+ users (MEGOGO)
> - An enterprise client mobile architecture (CHI Software)
> - An indie bionic medical portal or HVAC platform (ESMEE, ProKlimat)
> - A low-level C++20 algorithmic codec or patent (LibPolyCodec)
> - An IoT telemetry system (LoRa, ESP32)
> - An indie game or productivity tool (Tic-Tac-Toe 5.0★, People Notes)
> - A scientific research grant, state competition, or peer-reviewed publication
>
> **The Content Rule:** Every project receives the exact same tier of narrative respect, clear architectural framing, and verified results. We never write "just a pet project" or "a small side tool". Potential clients must see that whatever problem they bring, it will be treated with absolute focus, senior craftsmanship, and long-term accountability.
>
> **Multi-Domain Breadth:** The portfolio demonstrates versatile capabilities across the entire technological spectrum — Android, KMP, Flutter, Web & Edge, Embedded, IoT, and R&D/Grants — showing a versatile engineering leader capable of steering any technology project to success.

---

## 2. Role of Archived Resumes (`archive/resume/`)

The repository maintains historical resumes in `archive/resume/`:
- `Android developer_ Dmytro B 31.01.25.docx`
- `Android developer_ Dmytro B 31.01.25.pdf`

### 2.1 Why They Are Not the Single Source of Truth (SSOT)
- **Historical Narrow Framing:** These files were tailored specifically for traditional Android developer roles and do not capture the full scope of Tech Lead responsibilities, multi-platform systems, or research leadership.
- **Static Snapshots:** They reflect state as of January 2025 and lack newer accomplishments, refactored project structures, and modern presentation standards.

### 2.2 How to Leverage Archived Resumes
- **Filling Information Gaps:** Consult these documents to retrieve exact employment dates, company legal names, historical tool versions, and past responsibilities.
- **Reframing Strategy:** When migrating legacy bullet points into the portfolio:
  - Shift focus from passive task execution ("Worked on bug fixes") to proactive leadership and architectural impact ("Architected streaming pipeline reducing frame drops by 35%").
  - Use the STAR framework (detailed below).

---

## 3. Authoring Content: The STAR Impact Framework

Every project description and career milestone should prioritize measurable engineering outcomes over technology lists:

- **Situation:** Brief context of the problem, domain, and scale.
- **Task:** The specific engineering objective or architectural bottleneck.
- **Action:** Design decisions made, patterns introduced, libraries vetted, or team initiatives led.
- **Result:** Verifiable outcome (e.g., % performance gain, crash rate reduction, time-to-market speedup, user base reached).

### Example Transformation
- ❌ *Weak:* "Developed Android video player using ExoPlayer and Kotlin."
- ✅ *Strong:* "Re-engineered core playback module with custom ExoPlayer buffer managers and Jetpack Compose, cutting initial buffering latency by 28% across 10M+ active users."

---

## 4. How to Update Portfolio Content

Content is strictly decoupled from layout logic and resides in `locales/{en,uk}/` and `src/`.

### 4.1 Adding a New Career Tenure
1. **Define Visual Branding (if new company):**  
   Open [`src/companies.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/src/companies.js) and add the company configuration:
   ```javascript
   'Company Name': {
       shortName: 'ShortName',
       color: '#HEXCOLOR',
       cssVar: 'var(--company-token, #HEXCOLOR)',
       icon: 'fas fa-icon-name',
       logoImg: 'images/companies/logo.svg'
   }
   ```
2. **Add English Milestone:**  
   Open [`locales/en/experience.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/locales/en/experience.js) and insert the new milestone object (dates, role, key achievements, tech tags).
3. **Add Ukrainian Milestone:**  
   Open [`locales/uk/experience.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/locales/uk/experience.js) and insert the matching Ukrainian translation.

### 4.2 Adding a New Project
1. **Register Project ID & Static Metadata:**  
   Open [`src/project-data.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/src/project-data.js) if global flags or company mappings are required.
2. **Add English Project Description:**  
   Open [`locales/en/projects.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/locales/en/projects.js):
   ```javascript
   {
       id: 'my-new-project',
       title: 'Project Title',
       category: 'mobile', // 'mobile' | 'web' | 'systems' | 'research'
       company: 'Company Name',
       period: '2024 - 2025',
       description: 'Short summary for card.',
       longDescription: 'Comprehensive technical deep-dive for modal and static page.',
       techStack: ['Kotlin', 'Compose', 'Coroutines', 'Ktor'],
       icon: 'images/projects/icon.png',
       banner: 'images/projects/banner.jpg',
       highlights: ['Key outcome 1', 'Key outcome 2'],
       links: {
           github: 'https://github.com/...',
           live: 'https://...'
       }
   }
   ```
3. **Add Ukrainian Project Description:**  
   Open [`locales/uk/projects.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/locales/uk/projects.js) and add the localized entry with the identical `id`.
4. **Place Media Assets:**  
   Save icons and screenshots into [`public/images/projects/`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/public/images/projects/).
5. **Rebuild Static Pages:**  
   Run `npm run build` so `scripts/generate-project-pages.mjs` outputs the new `/projects/my-new-project/index.html` page.

### 4.3 Updating Skills & Research
- Skills summary: [`locales/{en,uk}/skills.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/locales/en/skills.js)
- In-depth skill narratives: [`locales/{en,uk}/skillsDetails.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/locales/en/skillsDetails.js)
- Academic publications and research: [`locales/{en,uk}/research.js`](file:///Users/dima_barannik/Documents/GitHub/dvbarannik.github.io/locales/en/research.js)

### 4.4 Project Visual Asset Standards ("No Blank Placeholders")

> [!IMPORTANT]
> **Every Project Must Have a High-Quality Visual Banner.**
> In accordance with the *Visual First* and *Project Parity* principles, no project card may rely on plain colored gradient fallback rectangles. Every single one of the 25+ projects must have:
> 1. **Visual Cover Banner (`banner`):** 16:9 aspect ratio, minimum 1200×675px resolution, optimized WebP/JPEG (`public/images/projects/<id>_banner.jpg`).
>    - *Client / Consumer Apps (Mobile, Web):* Polished product interface mockups, real app screenshots, or responsive device frames.
>    - *Low-Level / Backend / Systems (C++, Compression):* Clean technical architecture diagrams, SIMD data flow schematics, or benchmark graphs.
>    - *IoT & Hardware (ESP32, LoRa):* Real hardware board photography, circuit wiring diagrams, or telemetry network topology maps.
>    - *Research & Grants:* Academic poster headers, patent figure schematics, or publication visual abstracts.
> 2. **Project Icon (`icon`):** 1:1 aspect ratio square vector SVG or PNG (`public/images/projects/<id>_icon.png`).
> 3. **Result:** Eliminates the visual perception of "abandoned" or "less important" projects. Every card commands equal visual dignity and executive credibility.

---

## 5. Bilingual Consistency Checklist

Before committing changes:
- [ ] English and Ukrainian entries have matching keys and IDs.
- [ ] Dates and timelines align across both languages.
- [ ] Every project has a dedicated icon and a 16:9 visual cover banner (no plain color boxes).
- [ ] Links and media URLs resolve without 404 errors.
- [ ] Technical terms in Ukrainian use natural engineering terminology rather than transliteration.
- [ ] Running `npm run build` generates all static project landing pages without warnings.
