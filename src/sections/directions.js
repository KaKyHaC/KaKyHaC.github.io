import { $, $$, safe } from '../utils/dom.js';
import { copy } from '../modules/copy.js';
import { getLang } from '../i18n/index.js';
import { DOMAIN_META, DOMAIN_ORDER } from '../project-data.js';
import { getProjects } from './projects.js';
import { getActiveDomain, setGlobalDomain, subscribeDomain } from '../modules/domain.js';

let isSubscribed = false;

function updateDirectionsCardsActive(activeDomain) {
  $$('.direction-card').forEach(btn => {
    const isActive = btn.dataset.domain === activeDomain;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

export function renderDirections() {
  const c = copy();
  const lang = getLang();
  const projects = getProjects();
  const activeDomain = getActiveDomain();

  const domainColors = {
    android: { hex: '#10b981', rgb: '16, 185, 129' },
    flutter: { hex: '#38bdf8', rgb: '56, 189, 248' },
    web: { hex: '#818cf8', rgb: '129, 140, 248' },
    iot: { hex: '#22d3ee', rgb: '34, 211, 238' },
    embedded: { hex: '#f59e0b', rgb: '245, 158, 11' },
    research: { hex: '#f43f5e', rgb: '244, 63, 94' }
  };

  const grid = $('#directions-grid');
  if (!grid) return;

  grid.innerHTML = DOMAIN_ORDER.slice(1).map((key, idx) => {
    const count = projects.filter(p => p.domains.includes(key)).length;
    const colors = domainColors[key] || { hex: 'var(--accent)', rgb: 'var(--accent-rgb)' };
    const idxFormatted = String(idx + 1).padStart(2, '0');
    const isActive = key === activeDomain;

    return `<button type="button" class="direction-card reveal direction-${key} ${isActive ? 'is-active' : ''}" data-domain="${key}" aria-pressed="${isActive}" style="--domain-color:${colors.hex};--domain-rgb:${colors.rgb}">
      <div class="direction-card-header">
        <i class="${DOMAIN_META[key].icon}" aria-hidden="true"></i>
        <span class="direction-card-index"><span class="direction-active-dot" aria-hidden="true"></span>${idxFormatted}</span>
      </div>
      <h3>${DOMAIN_META[key][lang]}</h3>
      <p>${c.directionText[key]}</p>
      <span class="direction-count">${c.filters.found(count)} <span class="arrow" aria-hidden="true">→</span></span>
    </button>`;
  }).join('');

  $$('.direction-card').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--spotlight-x', `${x}px`);
      btn.style.setProperty('--spotlight-y', `${y}px`);
      btn.style.setProperty('--spotlight-opacity', '1');
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('--spotlight-opacity', '0');
    });
    btn.addEventListener('click', () => {
      const domain = btn.dataset.domain;
      const isAlreadyActive = domain === getActiveDomain();
      if (isAlreadyActive) {
        // Toggle off back to all without scrolling
        setGlobalDomain('all', { source: 'directions' });
      } else {
        // Activate domain and smoothly scroll to Projects section
        setGlobalDomain(domain, { source: 'directions', scrollTarget: '#projects' });
      }
    });
  });

  if (!isSubscribed) {
    subscribeDomain(domain => updateDirectionsCardsActive(domain));
    isSubscribed = true;
  }
}
