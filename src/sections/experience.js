import { $, $$, safe } from '../utils/dom.js';
import { copy } from '../modules/copy.js';
import { getLang } from '../i18n/index.js';
import { getCompanyConfig } from '../companies.js';
import { setActiveCompany, syncUrl, renderProjects } from './projects.js';

export const toMonthIndex = value => {
  const match = String(value || '').match(/^(\d{2})\.(\d{4})$/);
  return match ? Number(match[2]) * 12 + Number(match[1]) - 1 : null;
};

export const companyMark = company => company.logoImg
  ? `<img src="/${safe(company.logoImg)}" alt="" loading="lazy">`
  : `<i class="${safe(company.icon || 'fas fa-building')}" aria-hidden="true"></i>`;

export function renderTimelineIntro(experience) {
  const uk = getLang() === 'uk';
  const commercial = experience.filter(item => ['Commercial', 'Комерційна'].includes(item.category)).length;
  const introEl = $('#timeline-intro');
  if (!introEl) return;

  introEl.innerHTML = `
    <div class="timeline-intro-copy">
      <p class="eyebrow">${uk ? 'Кар’єрна хронологія' : 'Career timeline'}</p>
      <h3>${uk ? 'Ролі, у яких відповідальність зростала разом зі складністю задач.' : 'Roles where responsibility grew with the complexity of the work.'}</h3>
      <p>${uk ? 'Комерційна розробка, власні продукти й академічна робота показані як одна послідовна практика.' : 'Commercial engineering, independent products and academic work shown as one continuous practice.'}</p>
    </div>
    <div class="timeline-stats">
      <div><strong>2017</strong><span>${uk ? 'початок кар’єри' : 'career started'}</span></div>
      <div><strong>${experience.length}</strong><span>${uk ? 'професійних ролей' : 'professional roles'}</span></div>
      <div><strong>${commercial}</strong><span>${uk ? 'комерційні етапи' : 'commercial chapters'}</span></div>
    </div>
  `;
}

export function renderExperience(data) {
  const c = copy();
  const uk = getLang() === 'uk';
  const labels = uk
    ? { time: 'Час', present: 'Зараз', hint: 'Оберіть смугу, щоб переглянути роль і період', details: 'Деталі кар’єрних етапів' }
    : { time: 'Time', present: 'Present', hint: 'Select a bar to view its role and period', details: 'Career chapter details' };

  const now = new Date();
  const currentMonth = now.getFullYear() * 12 + now.getMonth();
  const currentBoundary = currentMonth + 1;

  const entries = data.map((exp, index) => {
    const company = getCompanyConfig(exp.company_name);
    const start = toMonthIndex(exp.start_date);
    const parsedEnd = toMonthIndex(exp.end_date);
    const endBoundary = exp.is_current ? currentBoundary : (parsedEnd === null ? null : parsedEnd + 1);
    return { exp, index, company, start, endBoundary };
  });

  const plotted = entries.filter(item => item.start !== null && item.endBoundary !== null);
  const firstMonth = Math.min(...plotted.map(item => item.start));
  const lastBoundary = Math.max(currentBoundary, ...plotted.map(item => item.endBoundary));
  const range = Math.max(1, lastBoundary - firstMonth);
  const laneOrder = ['DᎥᗰᗩᒪᎥᑎᗩ', 'IT Co.', 'Nitrix', 'CHI', 'MEGOGO', 'MITI', 'KhNUIA'];
  plotted.sort((a, b) => laneOrder.indexOf(a.company.shortName) - laneOrder.indexOf(b.company.shortName));

  const firstYear = Math.floor(firstMonth / 12);
  const lastYear = Math.floor((lastBoundary - 1) / 12);
  const ticks = [];
  for (let year = lastYear; year >= firstYear; year--) {
    const boundary = year === firstYear ? firstMonth : year * 12;
    if (boundary > lastBoundary) continue;
    const top = (lastBoundary - boundary) / range * 100;
    const minor = year !== firstYear && year !== lastYear && (year - firstYear) % 2 !== 0;
    ticks.push({ year, top, minor });
  }

  const barLabel = item => `${item.exp.company_name}, ${item.exp.role}, ${item.exp.start_date} — ${item.exp.end_date}`;
  const bars = plotted.map(item => {
    const top = (lastBoundary - item.endBoundary) / range * 100;
    const height = (item.endBoundary - item.start) / range * 100;
    return `
      <div class="career-lane" style="--company-color:${safe(item.company.color || 'var(--accent)')}">
        <button type="button" class="career-bar${item.exp.is_current ? ' is-current' : ''}" data-experience-index="${item.index}" style="--bar-top:${top.toFixed(3)}%;--bar-height:${height.toFixed(3)}%" aria-label="${safe(barLabel(item))}">
          <span class="career-bar-core"></span>
          <span class="career-bar-end" aria-hidden="true"></span>
        </button>
      </div>
    `;
  }).join('');

  const axisTicks = ticks.map(tick => `<span class="career-axis-tick${tick.minor ? ' is-minor' : ''}" style="--tick-top:${tick.top.toFixed(3)}%">${tick.year}</span>`).join('');
  const gridTicks = ticks.map(tick => `<span class="career-grid-line${tick.minor ? ' is-minor' : ''}" style="--tick-top:${tick.top.toFixed(3)}%"></span>`).join('');

  const strip = $('#approach-strip');
  if (strip) {
    strip.innerHTML = c.approach.map((item, i) => `
      <div class="approach-step" data-step="${item.num}">
        <div class="approach-step-top">
          <div class="approach-step-icon"><i class="${item.icon}" aria-hidden="true"></i></div>
          <span class="approach-step-num">${item.num}</span>
        </div>
        <div class="approach-step-bottom">
          <strong class="approach-step-title">${safe(item.title)}</strong>
          ${i < c.approach.length - 1 ? `<span class="approach-step-arrow" aria-hidden="true"><i class="fas fa-arrow-right"></i></span>` : `<span class="approach-step-loop" aria-hidden="true" title="${uk ? 'Безперервний цикл' : 'Continuous cycle'}"><i class="fas fa-redo-alt"></i></span>`}
        </div>
      </div>
    `).join('');
  }

  const chart = $('#career-chart');
  if (chart) {
    chart.innerHTML = `
      <section class="career-visual reveal" aria-label="${uk ? 'Візуальна кар’єрна хронологія' : 'Visual career timeline'}">
        <div class="career-chart-grid">
          <div class="career-axis" aria-hidden="true"><strong>${labels.present}</strong>${axisTicks}</div>
          <div class="career-plot">
            <span class="career-now-line"></span>
            ${gridTicks}
            <div class="career-lanes" style="--lane-count:${plotted.length}">${bars}</div>
          </div>
        </div>
        <div id="career-readout" class="career-readout" aria-live="polite">
          <i class="fas fa-arrow-up" aria-hidden="true"></i><span>${labels.hint}</span>
        </div>
      </section>
    `;
  }

  const detailsLabel = $('#career-details-label');
  if (detailsLabel) detailsLabel.textContent = labels.details;

  const timeline = $('#experience-timeline');
  if (timeline) {
    timeline.innerHTML = data.map((exp, index) => {
      const company = getCompanyConfig(exp.company_name);
      const period = `${exp.start_date} — ${exp.end_date}`;
      return `
        <details class="experience-item reveal" data-experience-index="${index}" style="--company-color:${safe(company.color || 'var(--accent)')}">
          <summary class="experience-summary">
            <span class="experience-logo">${companyMark(company)}</span>
            <span class="experience-position">
              <span class="experience-company">${safe(exp.company_name)}${exp.is_current ? `<span class="current-badge">${c.current}</span>` : ''}</span>
              <span class="experience-role">${safe(exp.role)}</span>
              <span class="sr-only">${safe(period)}</span>
            </span>
            <i class="fas fa-chevron-down experience-chevron"></i>
          </summary>
          <div class="experience-body">
            <p class="experience-period">${safe(period)}</p>
            <ul>${(exp.tasks || []).map(t => `<li>${safe(t)}</li>`).join('')}</ul>
            <button class="company-projects" data-company="${safe(exp.company_name)}">${c.companyProjects} →</button>
          </div>
        </details>
      `;
    }).join('');
  }

  const setActive = index => {
    const item = entries.find(entry => entry.index === Number(index));
    if (!item) return;
    $$('[data-experience-index]').forEach(node => node.classList.toggle('is-active', Number(node.dataset.experienceIndex) === item.index));
    const readout = $('#career-readout');
    if (readout) {
      readout.innerHTML = `<span class="career-readout-swatch" style="--company-color:${safe(item.company.color || 'var(--accent)')}"></span><strong>${safe(item.exp.company_name)}</strong><span>${safe(item.exp.role)}</span><small>${safe(item.exp.start_date)} — ${safe(item.exp.end_date)}</small>`;
    }
  };

  $$('.career-bar').forEach(trigger => {
    trigger.addEventListener('mouseenter', () => setActive(trigger.dataset.experienceIndex));
    trigger.addEventListener('focus', () => setActive(trigger.dataset.experienceIndex));
    trigger.addEventListener('click', () => {
      const item = $(`.experience-item[data-experience-index="${trigger.dataset.experienceIndex}"]`);
      setActive(trigger.dataset.experienceIndex);
      if (item) {
        item.open = true;
        item.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      }
    });
  });

  $$('.experience-item').forEach(item => {
    const activate = () => setActive(item.dataset.experienceIndex);
    item.addEventListener('mouseenter', activate);
    item.querySelector('summary')?.addEventListener('focus', activate);
    item.addEventListener('toggle', () => {
      if (item.open) activate();
    });
  });

  $$('.company-projects').forEach(b => b.addEventListener('click', () => {
    setActiveCompany(b.dataset.company);
    syncUrl();
    renderProjects();
    $('#projects')?.scrollIntoView({ behavior: 'smooth' });
  }));
}
