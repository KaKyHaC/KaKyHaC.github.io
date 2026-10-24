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

---

## 5. Bilingual Consistency Checklist

Before committing changes:
- [ ] English and Ukrainian entries have matching keys and IDs.
- [ ] Dates and timelines align across both languages.
- [ ] Links and media URLs resolve without 404 errors.
- [ ] Technical terms in Ukrainian use natural engineering terminology rather than transliteration.
- [ ] Running `npm run build` generates all static project landing pages without warnings.
