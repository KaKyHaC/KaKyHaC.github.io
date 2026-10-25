import './project.css';
import { loadNamespace, getLang, setLang } from './i18n/index.js';
import { DOMAIN_META, enrichProject, projectUrl } from './project-data.js';
import { trackProjectLinkClick, trackProjectView, trackThemeSwitch } from './analytics.js';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const safe = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const id = location.pathname.match(/\/projects\/([^/]+)/)?.[1] || new URLSearchParams(location.search).get('id');

const labels = {
  en: {
    back: 'All projects',
    context: 'Context',
    work: 'Work & decisions',
    results: 'Results & constraints',
    tech: 'Technologies',
    links: 'Links',
    role: 'Role',
    period: 'Period',
    directions: 'Directions',
    next: 'Continue exploring',
    contact: 'Discuss a project',
    notFound: 'Project not found'
  },
  uk: {
    back: 'Усі проєкти',
    context: 'Контекст',
    work: 'Робота та рішення',
    results: 'Результати й обмеження',
    tech: 'Технології',
    links: 'Посилання',
    role: 'Роль',
    period: 'Період',
    directions: 'Напрями',
    next: 'Продовжити перегляд',
    contact: 'Обговорити проєкт',
    notFound: 'Проєкт не знайдено'
  }
};

function externalLinks(p, l) {
  return [
    ['liveLink', 'fas fa-globe', 'Website'],
    ['playStoreLink', 'fab fa-google-play', 'Google Play'],
    ['githubLink', 'fab fa-github', 'GitHub']
  ]
    .filter(([key]) => p[key])
    .map(([key, icon, name]) => `<a href="${p[key]}" target="_blank" rel="noopener" data-external><i class="${icon}"></i> ${name} ↗</a>`)
    .join('');
}

let ticking = false;
function updateScrollState() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

  const bar = $('#nav-progress-bar');
  if (bar) {
    bar.style.width = `${progress}%`;
    bar.setAttribute('aria-valuenow', Math.round(progress));
  }

  const heroH1 = $('.project-hero h1');
  const nav = $('#project-nav');
  if (nav) {
    const isPastHero = heroH1 ? heroH1.getBoundingClientRect().top < 36 : scrollTop > 100;
    if (isPastHero) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollState);
    ticking = true;
  }
}, { passive: true });

window.addEventListener('resize', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollState);
    ticking = true;
  }
}, { passive: true });

function syncThemeIcon() {
  const isLight = document.documentElement.dataset.theme === 'light';
  const icon = $('#theme-toggle i');
  if (icon) {
    icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
  }
}

async function render() {
  const [raw] = await Promise.all([loadNamespace('projects')]);
  const all = raw.map(enrichProject);
  const p = all.find(x => x.id === id);
  const l = labels[getLang()];

  $('#back-label').textContent = l.back;
  $('#footer-contact').textContent = l.contact;
  $('#lang-toggle').textContent = getLang() === 'en' ? 'UA' : 'EN';

  if (!p) {
    $('#project-root').innerHTML = `
      <div class="project-page project-hero">
        <h1>${l.notFound}</h1>
        <a class="text-link" href="/#projects">${l.back} →</a>
      </div>
    `;
    return;
  }

  document.title = `${p.title} — Dmytro Barannik`;
  trackProjectView(p.title);

  // Dynamic scrolled title for desktop center cross-fade
  const scrolledTitleEl = $('#nav-scrolled-title');
  if (scrolledTitleEl) {
    const primaryDomain = p.domains[0];
    const domainName = (DOMAIN_META[primaryDomain] && DOMAIN_META[primaryDomain][getLang()]) || primaryDomain;
    const domainBadge = primaryDomain ? `<span class="project-domain domain-${primaryDomain}">${domainName}</span>` : '';
    scrolledTitleEl.innerHTML = `${domainBadge}<span class="nav-project-name" title="${safe(p.title)}">${safe(p.title)}</span>`;
  }

  // Dynamic mobile title next to back arrow
  const mobileTitleEl = $('#nav-mobile-title');
  if (mobileTitleEl) {
    mobileTitleEl.innerHTML = `<span class="nav-mobile-name" title="${safe(p.title)}">${safe(p.title)}</span>`;
  }

  const next = all[(all.indexOf(p) + 1) % all.length];
  $('#project-root').innerHTML = `
    <article class="project-page">
      <header class="project-hero">
        <div class="project-domains" style="margin-bottom:20px">
          ${p.domains.map(d => `<span class="project-domain domain-${d}">${(DOMAIN_META[d] && DOMAIN_META[d][getLang()]) || d}</span>`).join('')}
        </div>
        <h1>${safe(p.title)}</h1>
        <p class="project-lead">${safe(p.description)}</p>
        <div class="project-facts">
          <div class="project-fact">
            <span>${l.role}</span>
            <strong>${safe(p.role)}</strong>
          </div>
          <div class="project-fact">
            <span>${l.period}</span>
            <strong>${safe(p.date)}</strong>
          </div>
          <div class="project-fact">
            <span>${l.directions}</span>
            <div class="project-domains" style="margin-top:6px">
              ${p.domains.map(d => `<span class="project-domain domain-${d}">${(DOMAIN_META[d] && DOMAIN_META[d][getLang()]) || d}</span>`).join('')}
            </div>
          </div>
        </div>
      </header>
      <div class="project-media">
        ${p.banner ? `<img src="/${p.banner}" alt="${safe(p.title)}">` : `<div class="fallback" style="background:${p.imageColor}">${safe(p.title)}</div>`}
      </div>
      <div class="project-content">
        <aside class="project-aside">
          <h3>${l.tech}</h3>
          <div class="tag-list">
            ${p.technologies.map(t => `<span>${safe(t)}</span>`).join('')}
          </div>
          ${externalLinks(p, l) ? `<h3>${l.links}</h3><div class="external-links">${externalLinks(p, l)}</div>` : ''}
        </aside>
        <div>
          <section class="project-section">
            <p class="eyebrow">01</p>
            <h2>${l.context}</h2>
            <p>${safe(p.description)}</p>
          </section>
          <section class="project-section">
            <p class="eyebrow">02</p>
            <h2>${l.work}</h2>
            <ul>${p.tasks.map(t => `<li>${safe(t)}</li>`).join('')}</ul>
          </section>
          <section class="project-section">
            <p class="eyebrow">03</p>
            <h2>${l.results}</h2>
            <p>${getLang() === 'uk' ? 'Сторінка містить лише підтверджені відомості з опису проєкту. Додаткові метрики та обмеження не вказані, якщо вони не були задокументовані.' : 'This page includes only confirmed information from the project record. Additional metrics and constraints are omitted when they were not documented.'}</p>
          </section>
        </div>
      </div>
      <aside class="project-next">
        <p class="eyebrow">${l.next}</p>
        <h2><a href="${projectUrl(next)}">${safe(next.title)} →</a></h2>
      </aside>
    </article>
  `;

  $$('[data-external]').forEach(a => a.addEventListener('click', () => trackProjectLinkClick(p.title, a.href)));

  updateScrollState();
}

$('#lang-toggle')?.addEventListener('click', () => setLang(getLang() === 'en' ? 'uk' : 'en', render));

$('#theme-toggle')?.addEventListener('click', () => {
  const light = document.documentElement.dataset.theme === 'light';
  if (light) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
  }
  trackThemeSwitch(light ? 'dark' : 'light');
  syncThemeIcon();
});

// Scroll to top when clicking the project title in sticky topbar
$('#nav-scrolled-title')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smart back-button: return to previous page position if came from home page
$('#nav-back-link')?.addEventListener('click', e => {
  if (document.referrer) {
    try {
      const refUrl = new URL(document.referrer);
      if (refUrl.origin === location.origin && !refUrl.pathname.startsWith('/projects/')) {
        e.preventDefault();
        history.back();
      }
    } catch {}
  }
});

// Clean up invalid lingering hash if present (e.g., #about)
if (location.hash && !$(location.hash)) {
  history.replaceState(null, '', location.pathname + location.search);
}

syncThemeIcon();
render();
