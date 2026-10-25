import { $, $$, safe } from '../utils/dom.js';
import { getLang } from '../i18n/index.js';

function renderScopeIllustration(b, color, rgb) {
  const lbl = b.diagramLabels || {};
  const gradId = 'clean-arch-grad-' + String(color).replace(/[^a-zA-Z0-9]/g, '');
  return `
  <div class="profile-back-visual profile-visual-scope">
    <div class="visual-header">
      <span class="visual-title"><i class="fas fa-layer-group" aria-hidden="true"></i> ${safe(lbl.title || 'Enterprise Clean Architecture Topology')}</span>
      <span class="visual-live-tag"><span class="live-dot"></span> CLEAN CORE</span>
    </div>
    <div class="visual-svg-wrap">
      <svg viewBox="0 0 540 85" fill="none" xmlns="http://www.w3.org/2000/svg" class="blueprint-svg clean-arch-svg">
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${color}" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.9"/>
          </linearGradient>
        </defs>

        <!-- Layer 1: Presentation (Outer Tier) -->
        <g transform="translate(10, 10)">
          <rect width="160" height="65" rx="7" fill="rgba(${rgb}, 0.08)" stroke="${color}" stroke-width="1.3"/>
          <text x="80" y="22" font-size="9" fill="${color}" font-weight="750" text-anchor="middle" font-family="monospace">01 PRESENTATION</text>
          <text x="80" y="38" font-size="7.8" fill="var(--text)" text-anchor="middle" font-family="monospace">Jetpack Compose · MVI</text>
          <text x="80" y="52" font-size="7.5" fill="var(--muted)" text-anchor="middle" font-family="monospace">StateFlow · 60 FPS</text>
        </g>

        <!-- Inward Dependency Arrow 1 -->
        <g transform="translate(175, 42)">
          <path d="M 0 0 L 15 0" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="3 2" class="flow-link"/>
          <polygon points="17,0 12,-3 12,3" fill="#38bdf8"/>
        </g>

        <!-- Layer 2: Domain Core (Heart of the System) -->
        <g transform="translate(195, 8)">
          <rect width="160" height="69" rx="8" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-width="1.8"/>
          <text x="80" y="22" font-size="9.5" fill="#38bdf8" font-weight="800" text-anchor="middle" font-family="monospace">02 DOMAIN CORE</text>
          <text x="80" y="38" font-size="8" fill="var(--text)" font-weight="600" text-anchor="middle" font-family="monospace">Pure Use Cases &amp; Entities</text>
          <text x="80" y="52" font-size="7.5" fill="#4ade80" text-anchor="middle" font-family="monospace">100% Isolated · 0 SDK Deps</text>
        </g>

        <!-- Inward Dependency Arrow 2 -->
        <g transform="translate(360, 42)">
          <path d="M 15 0 L 0 0" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="3 2" class="flow-link"/>
          <polygon points="-2,0 3,-3 3,3" fill="#38bdf8"/>
        </g>

        <!-- Layer 3: Data & Infrastructure -->
        <g transform="translate(380, 10)">
          <rect width="150" height="65" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
          <text x="75" y="22" font-size="9" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="monospace">03 DATA &amp; INFRA</text>
          <text x="75" y="38" font-size="7.8" fill="var(--text)" text-anchor="middle" font-family="monospace">Repository Pattern · Room</text>
          <text x="75" y="52" font-size="7.5" fill="var(--muted)" text-anchor="middle" font-family="monospace">Ktor · WebSockets · SIMD</text>
        </g>
      </svg>
    </div>
    <div class="visual-chips">
      <span class="blueprint-chip verified"><i class="fas fa-compress-arrows-alt"></i> ${safe(lbl.dependencyRule || 'Dependencies Point Inward')}</span>
      <span class="blueprint-chip"><i class="fas fa-cube"></i> Pure Kotlin Domain</span>
      <span class="blueprint-chip"><i class="fas fa-sync-alt"></i> ${safe(lbl.flow || 'Unidirectional MVI')}</span>
    </div>
  </div>`;
}

function renderAgenticIllustration(b, color, rgb) {
  const lbl = b.diagramLabels || {};
  return `
  <div class="profile-back-visual profile-visual-agentic">
    <div class="visual-header">
      <span class="visual-title"><i class="fas fa-network-wired" aria-hidden="true"></i> ${safe(lbl.title || 'Parallel Swarm Topology & Quality Gate')}</span>
      <span class="visual-live-tag"><span class="live-dot live-agent"></span> 4x PARALLEL</span>
    </div>
    <div class="visual-svg-wrap">
      <svg viewBox="0 0 380 92" fill="none" xmlns="http://www.w3.org/2000/svg" class="blueprint-svg">
        <path class="flow-link" d="M 52 46 L 140 16" stroke="rgba(${rgb}, 0.45)" stroke-width="1.4" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 52 46 L 140 36" stroke="rgba(${rgb}, 0.45)" stroke-width="1.4" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 52 46 L 140 56" stroke="rgba(${rgb}, 0.45)" stroke-width="1.4" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 52 46 L 140 76" stroke="rgba(${rgb}, 0.45)" stroke-width="1.4" stroke-dasharray="4 3"/>

        <path class="flow-link" d="M 215 16 L 305 46" stroke="rgba(34,197,94, 0.55)" stroke-width="1.4" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 215 36 L 305 46" stroke="rgba(34,197,94, 0.55)" stroke-width="1.4" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 215 56 L 305 46" stroke="rgba(34,197,94, 0.55)" stroke-width="1.4" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 215 76 L 305 46" stroke="rgba(34,197,94, 0.55)" stroke-width="1.4" stroke-dasharray="4 3"/>

        <!-- Orchestrator Node -->
        <circle cx="52" cy="46" r="18" fill="rgba(${rgb}, 0.16)" stroke="${color}" stroke-width="1.8"/>
        <circle cx="52" cy="46" r="7" fill="${color}" class="pulse-ring"/>
        <text x="52" y="75" font-size="7.5" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="monospace">ORCHESTRATOR</text>

        <!-- 4 Parallel Worker Agents -->
        <g transform="translate(140, 8)">
          <rect width="75" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(${rgb}, 0.35)"/>
          <text x="37" y="11.5" font-size="7.5" fill="var(--text)" text-anchor="middle" font-family="monospace">Code Gen</text>
        </g>
        <g transform="translate(140, 28)">
          <rect width="75" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(${rgb}, 0.35)"/>
          <text x="37" y="11.5" font-size="7.5" fill="var(--text)" text-anchor="middle" font-family="monospace">TDD Tests</text>
        </g>
        <g transform="translate(140, 48)">
          <rect width="75" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(${rgb}, 0.35)"/>
          <text x="37" y="11.5" font-size="7.5" fill="var(--text)" text-anchor="middle" font-family="monospace">AST Audit</text>
        </g>
        <g transform="translate(140, 68)">
          <rect width="75" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(${rgb}, 0.35)"/>
          <text x="37" y="11.5" font-size="7.5" fill="var(--text)" text-anchor="middle" font-family="monospace">CI / CD</text>
        </g>

        <!-- Quality Gate -->
        <g transform="translate(305, 32)">
          <rect width="68" height="28" rx="6" fill="rgba(34, 197, 94, 0.14)" stroke="#22c55e" stroke-width="1.6"/>
          <text x="34" y="13.5" font-size="8" fill="#4ade80" font-weight="750" text-anchor="middle" font-family="monospace">AST &amp; TDD</text>
          <text x="34" y="23.5" font-size="7.5" fill="#86efac" text-anchor="middle" font-family="monospace">✓ VERIFIED</text>
        </g>
      </svg>
    </div>
    <div class="visual-chips">
      <span class="blueprint-chip verified"><i class="fas fa-check-double"></i> ${safe(lbl.verified || '100% Verified · 0 Drift')}</span>
      <span class="blueprint-chip"><i class="fas fa-bolt"></i> 8x Velocity</span>
      <span class="blueprint-chip"><i class="fas fa-shield-alt"></i> Zero Hallucinations</span>
    </div>
  </div>`;
}

function renderDimalinaAppsGrid(b) {
  const apps = b.apps || [];
  return `
  <div class="dimalina-apps-container">
    <div class="dimalina-apps-grid">
      ${apps.map(app => `
        <a href="${safe(app.playUrl)}" target="_blank" rel="noopener noreferrer" class="dimalina-app-card" aria-label="${safe(app.name)} on Google Play">
          <img src="${safe(app.icon)}" alt="${safe(app.name)}" class="dimalina-app-icon" width="34" height="34" loading="lazy" />
          <div class="dimalina-app-info">
            <span class="dimalina-app-name">${safe(app.name)}</span>
            <span class="dimalina-app-tag">${safe(app.tag)}</span>
          </div>
          <span class="dimalina-app-badge" aria-hidden="true" title="Open on Google Play">
            <i class="fab fa-google-play"></i>
          </span>
        </a>
      `).join('')}
    </div>
    <div class="visual-chips dimalina-chips">
      <span class="blueprint-chip rating-chip"><i class="fas fa-star"></i> 5.0 ★ Google Play</span>
      <span class="blueprint-chip verified"><i class="fas fa-check-circle"></i> 25,000+ Downloads</span>
      <span class="blueprint-chip"><i class="fas fa-user-check"></i> 100% Solo Delivery</span>
    </div>
  </div>`;
}

function renderResearchRadarIllustration(b, color, rgb) {
  const lbl = b.radarLabels || {};
  return `
  <div class="profile-back-visual profile-visual-research">
    <div class="visual-header">
      <span class="visual-title"><i class="fas fa-crosshairs" aria-hidden="true"></i> ${safe(lbl.title || 'LibPolyCodec vs. Standard Codecs (5-Axis Multi-Metric Radar)')}</span>
      <span class="visual-live-tag"><span class="live-dot live-rose"></span> BENCHMARK</span>
    </div>
    <div class="visual-svg-wrap">
      <svg viewBox="0 0 540 148" fill="none" xmlns="http://www.w3.org/2000/svg" class="blueprint-svg radar-svg">
        <!-- Center (108, 76), R=54 -->
        <!-- Concentric Pentagons -->
        <!-- Level 1 (33%): R=18 -->
        <polygon points="108,58 125,70 119,91 97,91 91,70" stroke="rgba(255,255,255,0.08)" stroke-width="1" fill="none"/>
        <!-- Level 2 (66%): R=36 -->
        <polygon points="108,40 142,65 129,105 87,105 74,65" stroke="rgba(255,255,255,0.11)" stroke-width="1" fill="none"/>
        <!-- Level 3 (100%): R=54 -->
        <polygon points="108,22 159,59 140,120 76,120 57,59" stroke="rgba(255,255,255,0.16)" stroke-width="1.3" fill="none"/>

        <!-- 5 Axis Spokes from center (108, 76) -->
        <line x1="108" y1="76" x2="108" y2="22" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="108" y1="76" x2="159" y2="59" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="108" y1="76" x2="140" y2="120" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="108" y1="76" x2="76" y2="120" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="108" y1="76" x2="57" y2="59" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>

        <!-- Generic Codecs Polygon (Zstd/Gzip) -->
        <polygon points="108,49 146,63 116,87 97,91 85,68" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.38)" stroke-width="1.4" stroke-dasharray="3 2"/>

        <!-- LibPolyCodec Glowing Polygon -->
        <polygon points="108,24 154,61 140,120 79,116 63,61" fill="rgba(${rgb}, 0.28)" stroke="${color}" stroke-width="2.3"/>
        <circle cx="108" cy="24" r="3.5" fill="${color}"/>
        <circle cx="154" cy="61" r="3.5" fill="${color}"/>
        <circle cx="140" cy="120" r="3.5" fill="${color}"/>
        <circle cx="79" cy="116" r="3.5" fill="${color}"/>
        <circle cx="63" cy="61" r="3.5" fill="${color}"/>

        <!-- Axis Labels: Collision-Free -->
        <text x="108" y="14" font-size="8" fill="${color}" font-weight="700" text-anchor="middle" font-family="monospace">${safe(lbl.axis1 || 'Speed')}</text>
        <text x="165" y="61" font-size="8" fill="var(--text)" text-anchor="start" font-family="monospace">${safe(lbl.axis2 || 'Ratio')}</text>
        <text x="144" y="132" font-size="8" fill="#4ade80" font-weight="700" text-anchor="start" font-family="monospace">${safe(lbl.axis3 || 'Zero-Alloc')}</text>
        <text x="72" y="132" font-size="8" fill="var(--text)" text-anchor="end" font-family="monospace">${safe(lbl.axis4 || 'UAV')}</text>
        <text x="51" y="61" font-size="8" fill="var(--text)" text-anchor="end" font-family="monospace">${safe(lbl.axis5 || 'Security')}</text>

        <!-- Right Side: Comparative Metrics Table -->
        <!-- Legend -->
        <g transform="translate(220, 10)">
          <rect width="10" height="10" rx="2" fill="${color}"/>
          <text x="16" y="8.5" font-size="8.5" fill="${color}" font-weight="750" font-family="monospace">${safe(lbl.legendLib || 'LibPolyCodec (C++20)')}</text>
          
          <rect x="155" y="1" width="10" height="8" rx="2" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" stroke-dasharray="2 2"/>
          <text x="172" y="8.5" font-size="8.5" fill="var(--muted)" font-family="monospace">${safe(lbl.legendGen || 'Generic Codecs (Zstd/Gzip)')}</text>
        </g>

        <!-- Metric 1: Throughput -->
        <g transform="translate(220, 31)">
          <text x="0" y="9" font-size="8" fill="var(--text)" font-family="monospace">⚡ Throughput (SIMD)</text>
          <rect x="155" y="2" width="105" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
          <rect x="155" y="2" width="100" height="8" rx="2" fill="${color}"/>
          <text x="268" y="9" font-size="8" fill="${color}" font-weight="700" font-family="monospace">95% (4.2x)</text>
        </g>

        <!-- Metric 2: Compression Ratio -->
        <g transform="translate(220, 52)">
          <text x="0" y="9" font-size="8" fill="var(--text)" font-family="monospace">📦 Compression Ratio</text>
          <rect x="155" y="2" width="105" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
          <rect x="155" y="2" width="92" height="8" rx="2" fill="${color}"/>
          <text x="268" y="9" font-size="8" fill="${color}" font-weight="700" font-family="monospace">88% (+28%)</text>
        </g>

        <!-- Metric 3: Memory Determinism -->
        <g transform="translate(220, 73)">
          <text x="0" y="9" font-size="8" fill="var(--text)" font-family="monospace">🧠 Memory Determinism</text>
          <rect x="155" y="2" width="105" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
          <rect x="155" y="2" width="105" height="8" rx="2" fill="#4ade80"/>
          <text x="268" y="9" font-size="8" fill="#4ade80" font-weight="750" font-family="monospace">100% (0B)</text>
        </g>

        <!-- Metric 4: Embedded & UAV -->
        <g transform="translate(220, 94)">
          <text x="0" y="9" font-size="8" fill="var(--text)" font-family="monospace">🛸 Embedded &amp; UAV</text>
          <rect x="155" y="2" width="105" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
          <rect x="155" y="2" width="96" height="8" rx="2" fill="${color}"/>
          <text x="268" y="9" font-size="8" fill="${color}" font-weight="700" font-family="monospace">92%</text>
        </g>

        <!-- Metric 5: Data Security -->
        <g transform="translate(220, 115)">
          <text x="0" y="9" font-size="8" fill="var(--text)" font-family="monospace">🔒 Positional Entropy</text>
          <rect x="155" y="2" width="105" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
          <rect x="155" y="2" width="94" height="8" rx="2" fill="${color}"/>
          <text x="268" y="9" font-size="8" fill="${color}" font-weight="700" font-family="monospace">90%</text>
        </g>
      </svg>
    </div>
    <div class="visual-chips">
      <span class="blueprint-chip verified"><i class="fas fa-graduation-cap"></i> Scopus Q3 · 68+ Pubs</span>
      <span class="blueprint-chip"><i class="fas fa-certificate"></i> State Patent of Ukraine</span>
      <span class="blueprint-chip"><i class="fas fa-microchip"></i> 0 Bytes Dynamic Alloc</span>
    </div>
  </div>`;
}

function renderCardIllustration(s) {
  const b = s.back || {};
  switch(s.kind) {
    case 'scope':
      return renderScopeIllustration(b, s.color, s.rgb);
    case 'agentic':
      return renderAgenticIllustration(b, s.color, s.rgb);
    case 'product':
      return renderDimalinaAppsGrid(b);
    case 'research':
      return renderResearchRadarIllustration(b, s.color, s.rgb);
    default:
      return '';
  }
}

export function renderProfile(ui) {
  const uk = getLang() === 'uk';
  if (!ui?.about?.bento) return;
  const sections = ui.about.bento;

  const notesEl = $('#profile-notes');
  if (notesEl) {
    notesEl.innerHTML = sections.map(s => {
      const b = s.back || {};
      const callouts = b.callouts || [];
      const primaryAction = b.primaryAction || null;

      return `
      <article class="profile-note profile-note-${s.kind}${s.isWide ? ' profile-note-wide' : ''} reveal"
               style="--card-color:${s.color};--card-rgb:${s.rgb}"
               tabindex="0"
               role="region"
               aria-expanded="false"
               aria-label="${safe(s.title)}"
               data-card-kind="${s.kind}">
        <div class="profile-note-flipper">
          <!-- FRONT FACE -->
          <div class="profile-note-face profile-note-front">
            <div class="profile-note-top">
              <div class="profile-note-top-left">
                <span class="profile-note-index">${s.index}</span>
                <span class="profile-note-icon"><i class="${s.icon}" aria-hidden="true"></i></span>
              </div>
              <button type="button" class="profile-note-flip-trigger" aria-label="${safe(b.flipAria || 'Flip card to view blueprint')}">
                <span class="flip-trigger-text">${safe(b.flipLabel || (uk ? '3D Схема' : '3D Blueprint'))}</span>
                <i class="fas fa-sync-alt flip-trigger-icon" aria-hidden="true"></i>
              </button>
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
            <div class="profile-note-front-footer">
              <span class="front-flip-hint">
                <i class="fas fa-cube flip-hint-cube" aria-hidden="true"></i>
                <span>${safe(b.frontHint || (uk ? 'Клікніть для 3D-схеми' : 'Click to flip 3D blueprint'))}</span>
              </span>
              <span class="front-flip-arrow" aria-hidden="true"><i class="fas fa-sync-alt"></i></span>
            </div>
          </div>

          <!-- BACK FACE (Single Focused Hero Accent) -->
          <div class="profile-note-face profile-note-back" aria-hidden="true">
            <div class="profile-note-top">
              <div class="profile-note-badge">
                <i class="${b.icon || 'fas fa-microchip'}" aria-hidden="true"></i>
                <span>${safe(b.badge || 'BLUEPRINT')}</span>
              </div>
              <button type="button" class="profile-note-close-btn" aria-label="${uk ? 'Повернутися' : 'Flip back'}">
                <span>${uk ? 'Назад' : 'Back'}</span>
                <i class="fas fa-undo-alt" aria-hidden="true"></i>
              </button>
            </div>

            <div class="profile-back-heading">
              <h4 class="profile-back-title">${safe(b.title || '')}</h4>
              <p class="profile-back-subtitle">${safe(b.subtitle || '')}</p>
            </div>

            <!-- The Single Hero Accent -->
            <div class="profile-back-hero-accent">
              ${renderCardIllustration(s)}
            </div>

            <!-- Focused Explanatory Callouts -->
            ${callouts.length ? `
            <div class="profile-back-callouts">
              ${callouts.map(c => `
                <div class="callout-item">
                  <span class="callout-dot"></span>
                  <div class="callout-body">
                    <strong class="callout-lead">${safe(c.lead)}:</strong>
                    <span class="callout-text">${safe(c.text)}</span>
                  </div>
                </div>
              `).join('')}
            </div>` : ''}

            <!-- Single Primary Action Link -->
            ${primaryAction ? `
            <div class="profile-back-action-wrap">
              <a href="${primaryAction.href}" class="profile-back-action-btn" ${primaryAction.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                <span>${safe(primaryAction.label)}</span>
                <i class="${primaryAction.icon || 'fas fa-arrow-right'}" aria-hidden="true"></i>
              </a>
            </div>` : ''}
          </div>
        </div>
      </article>
      `;
    }).join('');
  }

  const cards = $$('.profile-note');

  function flipCard(card, shouldFlip) {
    const isCurrentlyFlipped = card.classList.contains('is-flipped');
    const targetState = typeof shouldFlip === 'boolean' ? shouldFlip : !isCurrentlyFlipped;

    if (targetState) {
      // Focus mode: unflip any other flipped cards
      cards.forEach(c => {
        if (c !== card && c.classList.contains('is-flipped')) {
          flipCard(c, false);
        }
      });
      card.classList.add('is-flipped');
      card.setAttribute('aria-expanded', 'true');
      const back = card.querySelector('.profile-note-back');
      const front = card.querySelector('.profile-note-front');
      if (back) back.setAttribute('aria-hidden', 'false');
      if (front) front.setAttribute('aria-hidden', 'true');
    } else {
      card.classList.remove('is-flipped');
      card.setAttribute('aria-expanded', 'false');
      const back = card.querySelector('.profile-note-back');
      const front = card.querySelector('.profile-note-front');
      if (back) back.setAttribute('aria-hidden', 'true');
      if (front) front.setAttribute('aria-hidden', 'false');
    }
  }

  cards.forEach(card => {
    card.addEventListener('click', e => {
      // If clicking directly on an active link, let the link fire without flipping
      if (e.target.closest('a')) {
        return;
      }
      // If clicking close button on the back
      if (e.target.closest('.profile-note-close-btn')) {
        e.stopPropagation();
        flipCard(card, false);
        return;
      }
      // Otherwise toggle flip
      flipCard(card);
    });

    // Keyboard navigation (Enter / Space / Escape)
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('a') || e.target.closest('button')) return;
        e.preventDefault();
        flipCard(card);
      } else if (e.key === 'Escape' && card.classList.contains('is-flipped')) {
        e.preventDefault();
        flipCard(card, false);
      }
    });

    // 3D tilt + spotlight
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
      card.style.setProperty('--spotlight-opacity', '1');

      if (!card.classList.contains('is-flipped')) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((x - centerX) / centerX) * 4.5;
        const rotateX = -((y - centerY) / centerY) * 4.5;
        card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--spotlight-opacity', '0');
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });

  const appKicker = $('#approach-kicker');
  if (appKicker) appKicker.textContent = uk ? 'Робочий цикл' : 'Delivery loop';
  const appTitle = $('#approach-title');
  if (appTitle) appTitle.textContent = uk ? 'Як я рухаю технологічний проєкт уперед.' : 'How I move a technical project forward.';
}

