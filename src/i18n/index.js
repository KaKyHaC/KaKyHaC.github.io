/**
 * i18n Core — Namespace-per-module localization engine
 *
 * - Zero dependencies (vanilla JS + Vite dynamic import)
 * - In-memory cache: repeated lang switches are instant
 * - Auto-detect: browser ru/uk → show Ukrainian
 */

const SUPPORTED_LANGS = ['en', 'uk'];
const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'lang';

// ----- Language detection -----

function detectInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    // Ukrainian or Russian browser → show Ukrainian
    if (browserLang.startsWith('uk') || browserLang.startsWith('ru')) return 'uk';

    return DEFAULT_LANG;
}

let currentLang = detectInitialLang();

// ----- Namespace cache -----

const cache = {};

/**
 * Dynamically load a locale namespace file.
 * Returns the default export of locales/{lang}/{ns}.js
 * Cached per (lang, ns) pair — no duplicate network requests.
 *
 * @param {string} ns  - namespace name, e.g. 'ui', 'projects', 'experience'
 * @param {string} [lang] - override lang (default: currentLang)
 */
export async function loadNamespace(ns, lang = currentLang) {
    const key = `${lang}/${ns}`;
    if (cache[key]) return cache[key];

    // Vite resolves dynamic imports and creates chunks automatically
    const mod = await import(`../../locales/${lang}/${ns}.js`);
    const data = mod.default ?? Object.values(mod)[0];
    cache[key] = data;
    return data;
}

// ----- Public API -----

export function getLang() {
    return currentLang;
}

export function getSupportedLangs() {
    return [...SUPPORTED_LANGS];
}

/**
 * Change language and trigger a full re-render.
 * renderAll is injected from main.js to avoid circular deps.
 * @param {string} lang
 * @param {Function} renderAll
 */
export async function setLang(lang, renderAll) {
    if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    if (typeof renderAll === 'function') await renderAll();
}
