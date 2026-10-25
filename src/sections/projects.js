import { $, $$, safe } from '../utils/dom.js';
import { copy } from '../modules/copy.js';
import { getLang } from '../i18n/index.js';
import { getCompanyConfig } from '../companies.js';
import { trackProjectView } from '../analytics.js';
import { DOMAIN_META, DOMAIN_ORDER, projectUrl } from '../project-data.js';
import { observeReveals } from '../modules/reveals.js';
import { getActiveDomain, setGlobalDomain, subscribeDomain, initDomain } from '../modules/domain.js';

let projects = [];
let activeCompany = null;
let searchQuery = '';
let isSubscribed = false;

export function initProjectsState() {
  initDomain();
  const params = new URLSearchParams(location.search);
  if (params.has('company')) {
    activeCompany = params.get('company');
  }
  if (params.has('q')) {
    searchQuery = params.get('q') || '';
  }

  if (!location.search && location.hash === '#projects') {
    try {
      const state = JSON.parse(sessionStorage.getItem('portfolioFilters') || '{}');
      activeCompany = state.company || null;
      searchQuery = state.query || '';
    } catch {}
  }

  const searchInput = $('#project-search');
  if (searchInput) searchInput.value = searchQuery;

  document.addEventListener('click', event => {
    if (event.target.closest('[data-project]')) {
      sessionStorage.setItem('portfolioFilters', JSON.stringify({
        domain: getActiveDomain(),
        company: activeCompany,
        query: searchQuery
      }));
    }
  });

  if (!isSubscribed) {
    subscribeDomain(domain => {
      $$('#domain-filters .filter-chip').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.domain === domain);
      });
      renderProjects();
    });
    isSubscribed = true;
  }
}

export function setProjects(list) {
  projects = list;
}

export function getProjects() {
  return projects;
}

export { getActiveDomain };

export function setActiveDomain(domain) {
  setGlobalDomain(domain, { source: 'projects' });
}

export function getActiveCompany() {
  return activeCompany;
}

export function setActiveCompany(company) {
  activeCompany = company;
}

export function getSearchQuery() {
  return searchQuery;
}

export function setSearchQuery(query) {
  searchQuery = query;
}

export function syncUrl() {
  const params = new URLSearchParams(location.search);
  const activeDomain = getActiveDomain();
  if (activeDomain !== 'all') params.set('domain', activeDomain);
  else params.delete('domain');
  if (activeCompany) params.set('company', activeCompany);
  else params.delete('company');
  if (searchQuery) params.set('q', searchQuery);
  else params.delete('q');

  const queryStr = params.toString();
  const hash = location.hash || '';
  const nextUrl = queryStr ? `${location.pathname}?${queryStr}${hash}` : `${location.pathname}${hash}`;
  history.replaceState(null, '', nextUrl);
}

export function filteredProjects() {
  const activeDomain = getActiveDomain();
  const q = searchQuery.trim().toLowerCase();
  return projects.filter(p =>
    (activeDomain === 'all' || p.domains.includes(activeDomain)) &&
    (!activeCompany || getCompanyConfig(p.company).shortName === getCompanyConfig(activeCompany).shortName) &&
    (!q || [p.title, p.description, p.role, ...p.technologies, ...p.tags].join(' ').toLowerCase().includes(q))
  );
}

export function renderProjectFilters() {
  const c = copy();
  const lang = getLang();
  const activeDomain = getActiveDomain();
  const filtersEl = $('#domain-filters');
  if (!filtersEl) return;

  filtersEl.innerHTML = DOMAIN_ORDER.map(key => {
    const isActive = key === activeDomain;
    if (key === 'all') {
      return `<button type="button" class="filter-chip filter-chip-all ${isActive ? 'active' : ''}" data-domain="all"><span>${c.filters.all}</span></button>`;
    }
    const meta = DOMAIN_META[key] || {};
    const label = meta[lang] || key;
    return `<button type="button" class="filter-chip filter-chip-${key} ${isActive ? 'active' : ''}" data-domain="${key}" aria-label="${safe(label)}" title="${safe(label)}"><i class="${safe(meta.icon || 'fas fa-tag')}" aria-hidden="true"></i><span class="filter-chip-label">${safe(label)}</span></button>`;
  }).join('');

  $$('#domain-filters .filter-chip').forEach(btn => btn.addEventListener('click', () => {
    setGlobalDomain(btn.dataset.domain, { source: 'projects' });
  }));
}

export function renderProjects() {
  const c = copy();
  const activeDomain = getActiveDomain();
  const list = filteredProjects();
  const countEl = $('#project-count');
  if (countEl) countEl.textContent = c.filters.found(list.length);

  const clearBtn = $('#clear-filter-btn');
  if (clearBtn) {
    clearBtn.classList.toggle('hidden', activeDomain === 'all' && !activeCompany && !searchQuery);
  }

  const container = $('#projects-container');
  if (!container) return;

  container.innerHTML = list.length ? list.map(p => `
    <a class="project-card reveal" href="${projectUrl(p)}" data-project="${safe(p.title)}">
      <div class="project-cover">
        ${p.banner ? `<img src="/${p.banner}" alt="" loading="lazy">` : `<div class="project-fallback" style="background:${p.imageColor}">${safe(p.title)}</div>`}
      </div>
      <div class="project-body">
        <span class="project-meta">${safe(p.role)} · ${safe(p.date)}</span>
        <h3>${safe(p.title)}</h3>
        <p>${safe(p.description)}</p>
        <div class="project-footer">
          <div class="project-domains">
            ${p.domains.map(d => `<span class="project-domain domain-${d}">${(DOMAIN_META[d] && DOMAIN_META[d][getLang()]) || d}</span>`).join('')}
          </div>
          <span aria-label="${c.project}">↗</span>
        </div>
      </div>
    </a>
  `).join('') : `
    <div class="empty-state">${c.filters.empty}<br><a href="#contact" class="text-link">${c.nav.contact} →</a></div>
  `;

  $$('[data-project]').forEach(a => a.addEventListener('click', () => {
    trackProjectView(a.dataset.project);
    sessionStorage.setItem('portfolioScroll', String(scrollY));
  }));

  observeReveals();
}
