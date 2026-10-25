import { $, $$, safe } from '../utils/dom.js';
import { getLang } from '../i18n/index.js';

export function renderProfile(ui) {
  const uk = getLang() === 'uk';
  if (!ui?.about?.bento) return;
  const sections = ui.about.bento;

  const notesEl = $('#profile-notes');
  if (notesEl) {
    notesEl.innerHTML = sections.map(s => `
      <article class="profile-note profile-note-${s.kind}${s.isWide ? ' profile-note-wide' : ''} reveal" style="--card-color:${s.color};--card-rgb:${s.rgb}">
        <div class="profile-note-top">
          <span class="profile-note-index">${s.index}</span>
          <span class="profile-note-icon"><i class="${s.icon}" aria-hidden="true"></i></span>
        </div>
        <div class="profile-note-metric-group">
          <span class="profile-note-metric">${s.metric}</span>
          <span class="profile-note-metric-label">${s.metricLabel}</span>
        </div>
        <h3 class="profile-note-title">${s.title}</h3>
        <ul class="profile-note-points">
          ${s.points.map(p => `<li><strong>${safe(p.lead)}:</strong> ${safe(p.text)}</li>`).join('')}
        </ul>
        <div class="profile-note-tags">
          ${s.tags.map(t => `<span class="profile-note-tag">${safe(t)}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  $$('.profile-note').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
      card.style.setProperty('--spotlight-opacity', '1');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--spotlight-opacity', '0');
    });
  });

  const appKicker = $('#approach-kicker');
  if (appKicker) appKicker.textContent = uk ? 'Робочий цикл' : 'Delivery loop';
  const appTitle = $('#approach-title');
  if (appTitle) appTitle.textContent = uk ? 'Як я рухаю технологічний проєкт уперед.' : 'How I move a technical project forward.';
}
