import { $, $$, safe } from '../utils/dom.js';
import { copy } from '../modules/copy.js';
import { getLang } from '../i18n/index.js';
import { DOMAIN_META, DOMAIN_ORDER } from '../project-data.js';
import { getProjects, setActiveDomain, syncUrl, renderProjectFilters, renderProjects } from './projects.js';

export function renderDirections() {
  const c = copy();
  const projects = getProjects();
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
    return `<button class="direction-card reveal direction-${key}" data-domain="${key}" style="--domain-color:${colors.hex};--domain-rgb:${colors.rgb}">
      <div class="direction-card-header">
        <i class="${DOMAIN_META[key].icon}" aria-hidden="true"></i>
        <span class="direction-card-index">${idxFormatted}</span>
      </div>
      <h3>${DOMAIN_META[key][getLang()]}</h3>
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
      setActiveDomain(btn.dataset.domain);
      syncUrl();
      renderProjectFilters();
      renderProjects();
      const projectsEl = $('#projects');
      if (projectsEl) {
        const isReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        projectsEl.scrollIntoView({ behavior: isReduced ? 'auto' : 'smooth' });
      }
    });
  });
}
