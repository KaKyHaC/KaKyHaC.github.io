import { $, safe } from '../utils/dom.js';
import { copy } from '../modules/copy.js';

const HONOURS_RE = /honours|відзнак/i;

/** Guilloché rosette used as a security pattern on the diploma back side. */
const guilloche = `
  <svg class="edu-guilloche" viewBox="0 0 200 200" aria-hidden="true">
    ${Array.from({ length: 12 }, (_, i) => `<ellipse cx="100" cy="100" rx="92" ry="34" transform="rotate(${i * 15} 100 100)"/>`).join('')}
    <circle cx="100" cy="100" r="58"/><circle cx="100" cy="100" r="22"/>
  </svg>`;

const seal = (label) => `
  <div class="edu-seal" aria-hidden="true">
    <svg viewBox="0 0 100 100">
      <defs><path id="edu-seal-arc" d="M50 50 m-36 0 a36 36 0 1 1 72 0 a36 36 0 1 1 -72 0"/></defs>
      <circle cx="50" cy="50" r="46"/><circle cx="50" cy="50" r="28"/>
      <text><textPath href="#edu-seal-arc">${safe(label)} · ${safe(label)} ·</textPath></text>
    </svg>
    <i class="fas fa-graduation-cap"></i>
  </div>`;

function card({ size, index, front, back, label, c }) {
  return `
    <article class="edu-card edu-card-${size} edu-lvl-${index + 1} reveal" style="--i:${index}">
      <span class="edu-node" aria-hidden="true">0${index + 1}</span>
      <button type="button" class="edu-flip" aria-pressed="false" aria-label="${safe(label)} — ${c.educationFlip}">
        <span class="edu-inner">
          <span class="edu-face edu-front"><span class="edu-glare" aria-hidden="true"></span>${front}
            <span class="edu-hint" aria-hidden="true"><i class="fas fa-sync-alt"></i> ${c.educationDiploma}</span>
          </span>
          <span class="edu-face edu-back" aria-hidden="true">${guilloche}${back}
            <span class="edu-hint" aria-hidden="true"><i class="fas fa-undo-alt"></i> ${c.educationFlipBack}</span>
          </span>
        </span>
      </button>
    </article>`;
}

export function renderEducation(data) {
  const c = copy();
  const degrees = [...(data.higher_education?.degrees || [])].reverse();
  const certificates = [...(data.secondary_education?.certificates || [])]
    .sort((a, b) => Number(a.graduation_year) - Number(b.graduation_year));

  const degreeCards = degrees.map((d, index) => {
    const honours = HONOURS_RE.test(d.level);
    const title = safe(d.level.replace(/\s*\((with honours|з відзнакою)\)/i, ''));
    const badges = [
      honours && `<span class="edu-badge"><i class="fas fa-award" aria-hidden="true"></i>${c.educationHonours}</span>`,
      d.research_focus && `<span class="edu-badge"><i class="fas fa-flask" aria-hidden="true"></i>${c.educationDegreeBadge}</span>`
    ].filter(Boolean).join('');
    const front = `
      <span class="edu-date">${safe(d.start_year)} — ${safe(d.end_year)}<span class="edu-dur">${Number(d.end_year) - Number(d.start_year)} ${c.educationYears}</span></span>
      <span class="edu-title">${title}</span>
      <span class="edu-specialty">${safe(d.specialty)}</span>
      ${d.educational_program ? `<span class="edu-program"><b>${c.educationProgram}</b>${safe(d.educational_program)}</span>` : ''}
      ${badges ? `<span class="edu-badges">${badges}</span>` : ''}
      ${d.research_focus ? `<span class="edu-focus"><b>${c.educationFocus}</b> ${safe(d.research_focus)}</span>` : ''}`;
    const back = `
      <span class="edu-back-label">${c.educationDiploma}</span>
      <span class="edu-id">${safe(d.diploma_id || '')}</span>
      <span class="edu-back-title">${title}</span>
      ${d.educational_program ? `<span class="edu-row"><b>${c.educationProgram}</b>${safe(d.educational_program)}</span>` : ''}
      <span class="edu-row"><b>${safe(d.institution)}</b>${safe(d.graduation_details)}</span>
      ${seal(c.educationVerified)}`;
    return card({ size: 'lg', index, front, back, label: d.level, c });
  }).join('');

  const certCards = certificates.map((item, index) => {
    const front = `
      <span class="edu-date">${safe(item.graduation_year)}</span>
      <span class="edu-title">${safe(item.level)}</span>
      ${item.achievements ? `<span class="edu-medal"><span class="edu-medal-disc" aria-hidden="true"><i class="fas fa-medal"></i></span>${safe(item.achievements)}</span>` : ''}`;
    const back = `
      <span class="edu-back-label">${c.educationCertificate}</span>
      <span class="edu-id">${safe(item.certificate_id || '')}</span>
      <span class="edu-row">${safe(item.graduation_details)}</span>`;
    return card({ size: 'sm', index, front, back, label: item.level, c });
  }).join('');

  const html = `
    <div class="education-track-heading reveal"><p class="eyebrow">${c.educationHigher}<span class="edu-uni-head"> · ${c.educationUniShort}</span></p></div>
    <div class="edu-path edu-track">
      <svg class="edu-connector" aria-hidden="true"><path class="edu-line"/><path class="edu-spark"/></svg>
      ${degreeCards}
    </div>
    <aside class="edu-secondary reveal">
      <div class="secondary-heading">
        <p class="eyebrow">${c.educationFoundation}</p>
        <p>${c.educationFoundationIntro}</p>
      </div>
      <div class="edu-secondary-grid edu-track"><svg class="edu-connector" aria-hidden="true"><path class="edu-line"/><path class="edu-spark"/></svg>${certCards}</div>
    </aside>`;

  const timeline = $('#education-timeline');
  if (!timeline) return;
  timeline.innerHTML = html;
  bindCards(timeline);
}

function bindCards(root) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Trajectory is computed from real node positions, so it always connects them exactly.
  root.querySelectorAll('.edu-track').forEach(track => {
    const svg = track.querySelector('.edu-connector');
    const draw = () => {
      const box = track.getBoundingClientRect();
      const pts = [...track.querySelectorAll('.edu-node')].map(n => {
        const r = n.getBoundingClientRect();
        return [r.left + r.width / 2 - box.left, r.top + r.height / 2 - box.top];
      });
      if (pts.length < 2 || getComputedStyle(svg).display === 'none') return;
      svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
      const d = 'M ' + pts.map(p => p.map(v => v.toFixed(1)).join(' ')).join(' L ');
      svg.querySelectorAll('path').forEach(p => { p.setAttribute('d', d); p.setAttribute('pathLength', '1'); });
    };
    new ResizeObserver(draw).observe(track);
    track.addEventListener('transitionend', e => { if (e.target.classList.contains('edu-card')) draw(); });
    draw();
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { track.classList.add('drawn'); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(track);
  });

  root.querySelectorAll('.edu-flip').forEach(btn => {
    const back = btn.querySelector('.edu-back');
    const front = btn.querySelector('.edu-front');
    btn.addEventListener('click', () => {
      const flipped = btn.getAttribute('aria-pressed') !== 'true';
      btn.setAttribute('aria-pressed', String(flipped));
      back.setAttribute('aria-hidden', String(!flipped));
      front.setAttribute('aria-hidden', String(flipped));
    });

    if (reduce || !fine) return;
    const cardEl = btn.closest('.edu-card');
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      cardEl.style.setProperty('--rx', `${(0.5 - y) * 8}deg`);
      cardEl.style.setProperty('--ry', `${(x - 0.5) * 10}deg`);
      cardEl.style.setProperty('--gx', `${x * 100}%`);
      cardEl.style.setProperty('--gy', `${y * 100}%`);
    });
    btn.addEventListener('pointerleave', () => {
      cardEl.style.setProperty('--rx', '0deg');
      cardEl.style.setProperty('--ry', '0deg');
    });
  });
}
