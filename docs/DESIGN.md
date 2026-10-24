# Portfolio Design System & UX Principles

This document establishes the visual philosophy, design tokens, typography, layout rules, and accessibility standards for `dvbarannik.github.io`.

---

## 1. Core Design Philosophy

### 1.1 The Cardinal Rule: Visual Over Text ("Visual First, Details on Demand")

> [!IMPORTANT]
> **Visual perception dominates text.** 
> Nobody reads paragraphs or walls of text during the first scan. Recruiters, engineering leaders, and collaborators form their opinion in the first **3 to 5 seconds** purely through visual composition, company logos, badges, spatial scale, timeline geometry, and screenshots. 
> 
> **If an achievement or capability is not obvious visually at a glance, for 90% of visitors it does not exist.** 
> Long-form text is strictly a secondary tier (*details on demand*), reserved for visitors who have already been visually hooked and choose to inspect deeper via modals or project deep-dive pages.

- **Immediate Hierarchy:** Visual composition, spatial scale, badges, and company branding communicate role levels, scope, and career progression in seconds.
- **Progressive Disclosure:** Deep technical discussions, code architectures, and comprehensive project metrics are available on demand (via expandable timeline items, interactive modal dialogs, and dedicated project URLs).

### 1.2 Honest Representation & Data Accuracy
- **Real Dates & Proportions:** The career timeline accurately reflects chronological durations and overlap (e.g., concurrent academia/PhD research and commercial software leadership).
- **Branding Tokens:** Company and partner identities use approved colors, always accompanied by text labels and vector SVG icons to avoid relying on color alone.
- **Verifiable Proof:** Statements are backed by live links, GitHub repositories, publication DOIs, or patent/patent-pending references.

### 1.3 Purpose-Driven Aesthetics
- Avoid gratuitous animation or 3D canvas noise that distracts from technical competence or slows down mobile devices.
- Every visual device must serve the portfolio narrative: demonstrating engineering rigor, clarity of thought, and technical leadership.

---

## 2. Color System & Theming

The visual system uses CSS Custom Properties defined in `src/style.css`. The default experience is a sleek, dark technical theme with a high-contrast light theme toggle.

### 2.1 Core Neutral Palette

| Token | Dark Mode Value | Light Mode Value | Purpose |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#0f172a` (Deep Slate) | `#f8fafc` (Clean Slate) | Page root background |
| `--bg-secondary` | `#1e293b` (Elevated Surface)| `#ffffff` (Pure White) | Card surfaces, modals |
| `--bg-tertiary` | `#334155` (Subtle Fill) | `#f1f5f9` (Light Gray) | Pill tags, input backgrounds |
| `--text-primary` | `#f8fafc` (Near White) | `#0f172a` (Dark Slate) | Headings, primary content |
| `--text-secondary`| `#94a3b8` (Muted Slate) | `#475569` (Charcoal Slate)| Subheadings, descriptions |
| `--text-muted` | `#64748b` (Soft Gray) | `#94a3b8` (Subtle Gray) | Meta labels, timestamps |
| `--border-subtle` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` | Dividers, card borders |
| `--accent` | `#38bdf8` (Vibrant Cyan) | `#0284c7` (Deep Sky Blue)| Focus rings, primary buttons |

### 2.2 Company Branding Tokens
To visually differentiate professional tenures on the interactive timeline:

- `--company-megogo`: `rgba(93, 189, 211, 1)` (Streaming / Media)
- `--company-chi`: `#E040FB` (Enterprise Mobile & Cloud)
- `--company-nitrix`: `#8E24AA` (Studio / Client Development)
- `--company-khnuia`: `#1E3A8A` (Higher Education & Research)
- `--company-miti`: `#147F36` (Military Institute of Telecommunications)
- `--company-solo`: `#E11D74` (Independent Products & Indie Dev)

---

## 3. Typography & Hierarchy

### 3.1 Font Stack
- Primary Sans-Serif: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Monospace / Code: `"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Consolas, monospace`

### 3.2 Fluid Typography Tokens
Typography scales dynamically using CSS `clamp()` to guarantee balanced proportions across phones, tablets, and wide monitors:

- **Hero Title (`h1`):** `clamp(2.25rem, 5vw + 1rem, 4rem)` (bold, tight line-height `1.1`)
- **Section Heading (`h2`):** `clamp(1.75rem, 3vw + 0.5rem, 2.5rem)`
- **Subsection Heading (`h3`):** `clamp(1.25rem, 2vw + 0.25rem, 1.75rem)`
- **Body Text:** `1rem` to `1.125rem` (line-height `1.6` to `1.7` for comfortable scanning)
- **Small / Metadata:** `0.875rem` (uppercase tracking `0.05em` where appropriate)

---

## 4. Interactive Components

### 4.1 Career Timeline
- Continuous visual spine connecting roles chronologically.
- Responsive layout: transforms from a dual-sided timeline on desktop to a compact left-aligned rail on mobile screens.
- Interactive expansion: clicking any milestone toggles detailed achievements and key responsibilities.

### 4.2 Project Showcase Cards
- Card layout featuring project banner/icon, technology badge pills, concise summary, and action links.
- Interactive hover lifts card slightly (`translateY(-4px)`) and highlights border with subtle glow.
- Trigger for modal deep dive or direct navigation to dedicated static project page.

### 4.3 Modal Dialogs
- Backdrop blur (`backdrop-filter: blur(8px)`) with dimmed overlay.
- Accessible dismiss triggers: `Escape` key, click outside modal dialog, and explicit close button `×`.
- Background body scroll locking while modal is active.

---

## 5. Accessibility (A11y) & Performance

1. **Contrast Compliance:** All text meets or exceeds WCAG 2.1 AA contrast ratios (minimum 4.5:1 for standard text, 3:1 for large text).
2. **Keyboard Navigation:**
   - Logical tab ordering across all interactive elements.
   - Distinct, visible focus rings on `:focus-visible` (using `--accent`).
   - Modal focus trapping and restoration upon close.
3. **Motion Sensitivity:**
   - All CSS animations, smooth scrolls, and transitions are governed by:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, *::before, *::after {
         animation-duration: 0.01ms !important;
         animation-iteration-count: 1 !important;
         transition-duration: 0.01ms !important;
         scroll-behavior: auto !important;
       }
     }
     ```
4. **Touch & Mobile Targets:** All buttons and interactive pills maintain a minimum hit target size of 44x44px.
