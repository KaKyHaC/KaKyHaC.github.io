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
      <svg viewBox="0 0 540 162" fill="none" xmlns="http://www.w3.org/2000/svg" class="blueprint-svg clean-arch-svg">
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${color}" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.9"/>
          </linearGradient>
        </defs>

        <!-- Layer 1: Presentation (Outer Tier) -->
        <g transform="translate(10, 6)">
          <rect width="156" height="150" rx="11" fill="rgba(${rgb}, 0.08)" stroke="${color}" stroke-width="1.4"/>
          <rect x="11" y="8" width="134" height="26" rx="5" fill="rgba(${rgb}, 0.22)" stroke="${color}" stroke-width="1"/>
          <text x="78" y="25" font-size="11" fill="${color}" font-weight="850" text-anchor="middle" font-family="monospace">01 PRESENTATION</text>
          <text x="78" y="55" font-size="10.5" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Jetpack Compose · MVI</text>
          <rect x="14" y="69" width="128" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="78" y="85" font-size="9.5" fill="var(--text)" font-weight="650" text-anchor="middle" font-family="monospace">StateFlow · 60 FPS</text>
          <rect x="14" y="99" width="128" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)"/>
          <text x="78" y="114" font-size="8.8" fill="var(--muted)" font-weight="650" text-anchor="middle" font-family="monospace">Zero Business Logic</text>
          <text x="78" y="140" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">UI State &amp; Intent Pipeline</text>
        </g>

        <!-- Inward Dependency Arrow 1 -->
        <g transform="translate(169, 81)">
          <path d="M 0 0 L 17 0" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="3 2" class="flow-link"/>
          <polygon points="20,0 14,-3.5 14,3.5" fill="#38bdf8"/>
        </g>

        <!-- Layer 2: Domain Core (Heart of the System) -->
        <g transform="translate(189, 4)">
          <rect width="162" height="154" rx="13" fill="rgba(56, 189, 248, 0.14)" stroke="#38bdf8" stroke-width="2"/>
          <rect x="10" y="8" width="142" height="28" rx="6" fill="rgba(56, 189, 248, 0.28)" stroke="#38bdf8" stroke-width="1.2"/>
          <text x="81" y="26" font-size="11.5" fill="#38bdf8" font-weight="900" text-anchor="middle" font-family="monospace">02 DOMAIN CORE</text>
          <text x="81" y="56" font-size="11" fill="var(--text)" font-weight="800" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">UseCases &amp; Entities</text>
          <rect x="10" y="70" width="142" height="25" rx="5" fill="rgba(34, 197, 94, 0.16)" stroke="#22c55e" stroke-width="1.2"/>
          <text x="81" y="86" font-size="9.5" fill="#4ade80" font-weight="800" text-anchor="middle" font-family="monospace">100% Isolated · Pure Kotlin</text>
          <rect x="10" y="101" width="142" height="23" rx="4" fill="rgba(56, 189, 248, 0.08)" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1"/>
          <text x="81" y="116" font-size="9" fill="#38bdf8" font-weight="750" text-anchor="middle" font-family="monospace">0 SDK / Framework Deps</text>
          <text x="81" y="142" font-size="8.8" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Business Invariants &amp; Rules</text>
        </g>

        <!-- Inward Dependency Arrow 2 -->
        <g transform="translate(354, 81)">
          <path d="M 17 0 L 0 0" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="3 2" class="flow-link"/>
          <polygon points="-3,0 3,-3.5 3,3.5" fill="#38bdf8"/>
        </g>

        <!-- Layer 3: Data & Infrastructure -->
        <g transform="translate(374, 6)">
          <rect width="156" height="150" rx="11" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.22)" stroke-width="1.3"/>
          <rect x="11" y="8" width="134" height="26" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
          <text x="78" y="25" font-size="11" fill="var(--text)" font-weight="850" text-anchor="middle" font-family="monospace">03 DATA &amp; INFRA</text>
          <text x="78" y="55" font-size="10.5" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Repository Pattern · Room</text>
          <rect x="14" y="69" width="128" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
          <text x="78" y="85" font-size="9.5" fill="var(--text)" font-weight="650" text-anchor="middle" font-family="monospace">Ktor · WebSockets · SIMD</text>
          <rect x="14" y="99" width="128" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)"/>
          <text x="78" y="114" font-size="8.8" fill="var(--muted)" font-weight="650" text-anchor="middle" font-family="monospace">Offline-First &amp; Caching</text>
          <text x="78" y="140" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Implements Domain Interfaces</text>
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
      <svg viewBox="0 0 430 124" fill="none" xmlns="http://www.w3.org/2000/svg" class="blueprint-svg swarm-svg">
        <!-- Connecting flow lines Orchestrator -> Workers -->
        <path class="flow-link" d="M 76 62 C 104 62, 114 20, 142 20" stroke="rgba(${rgb}, 0.65)" stroke-width="1.8" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 76 62 C 104 62, 114 47, 142 47" stroke="rgba(${rgb}, 0.65)" stroke-width="1.8" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 76 62 C 104 62, 114 75, 142 75" stroke="rgba(${rgb}, 0.65)" stroke-width="1.8" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 76 62 C 104 62, 114 102, 142 102" stroke="rgba(${rgb}, 0.65)" stroke-width="1.8" stroke-dasharray="4 3"/>

        <!-- Connecting flow lines Workers -> Quality Gate -->
        <path class="flow-link" d="M 254 20 C 274 20, 278 62, 292 62" stroke="rgba(34,197,94, 0.7)" stroke-width="1.8" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 254 47 C 274 47, 278 62, 292 62" stroke="rgba(34,197,94, 0.7)" stroke-width="1.8" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 254 75 C 274 75, 278 62, 292 62" stroke="rgba(34,197,94, 0.7)" stroke-width="1.8" stroke-dasharray="4 3"/>
        <path class="flow-link" d="M 254 102 C 274 102, 278 62, 292 62" stroke="rgba(34,197,94, 0.7)" stroke-width="1.8" stroke-dasharray="4 3"/>

        <!-- Orchestrator Node -->
        <circle cx="50" cy="62" r="32" fill="rgba(${rgb}, 0.08)" stroke="rgba(${rgb}, 0.25)" stroke-width="1" stroke-dasharray="4 3"/>
        <circle cx="50" cy="62" r="24" fill="rgba(${rgb}, 0.18)" stroke="${color}" stroke-width="2"/>
        <circle cx="50" cy="62" r="9" fill="${color}" class="pulse-ring"/>
        <circle cx="50" cy="62" r="3" fill="#fff"/>
        <text x="50" y="102" font-size="8.5" fill="var(--text)" font-weight="850" text-anchor="middle" font-family="monospace">ORCHESTRATOR</text>
        <text x="50" y="113" font-size="7.5" fill="${color}" font-weight="700" text-anchor="middle" font-family="monospace">Decomposer &amp; Router</text>

        <!-- 4 Parallel Worker Agents -->
        <g transform="translate(142, 9)">
          <rect width="112" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(${rgb}, 0.45)" stroke-width="1.1"/>
          <text x="56" y="14.5" font-size="9" fill="var(--text)" font-weight="700" text-anchor="middle" font-family="monospace">⚡ Code Gen</text>
        </g>
        <g transform="translate(142, 36)">
          <rect width="112" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(${rgb}, 0.45)" stroke-width="1.1"/>
          <text x="56" y="14.5" font-size="9" fill="var(--text)" font-weight="700" text-anchor="middle" font-family="monospace">🧪 TDD Tests</text>
        </g>
        <g transform="translate(142, 64)">
          <rect width="112" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(${rgb}, 0.45)" stroke-width="1.1"/>
          <text x="56" y="14.5" font-size="9" fill="var(--text)" font-weight="700" text-anchor="middle" font-family="monospace">🔍 AST Audit</text>
        </g>
        <g transform="translate(142, 91)">
          <rect width="112" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(${rgb}, 0.45)" stroke-width="1.1"/>
          <text x="56" y="14.5" font-size="9" fill="var(--text)" font-weight="700" text-anchor="middle" font-family="monospace">🚀 CI / CD Gate</text>
        </g>

        <!-- Quality Gate -->
        <g transform="translate(292, 38)">
          <rect width="128" height="48" rx="8" fill="rgba(34, 197, 94, 0.16)" stroke="#22c55e" stroke-width="2"/>
          <rect x="8" y="6" width="112" height="18" rx="4" fill="rgba(34, 197, 94, 0.25)" stroke="#22c55e" stroke-width="1"/>
          <text x="64" y="18" font-size="8.8" fill="#4ade80" font-weight="900" text-anchor="middle" font-family="monospace">AST &amp; TDD GATE</text>
          <text x="64" y="37" font-size="9.5" fill="#86efac" font-weight="800" text-anchor="middle" font-family="monospace">✓ 100% VERIFIED</text>
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
          <img src="${safe(app.icon)}" alt="${safe(app.name)}" class="dimalina-app-icon" width="32" height="32" loading="lazy" />
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
      <svg viewBox="0 0 570 188" fill="none" xmlns="http://www.w3.org/2000/svg" class="blueprint-svg radar-svg">
        <!-- Center (122, 94), R=66 -->
        <!-- Level 1 (33%): R=22 -->
        <polygon points="122,72 143,87 135,112 109,112 101,87" stroke="rgba(255,255,255,0.08)" stroke-width="1" fill="none"/>
        <!-- Level 2 (66%): R=44 -->
        <polygon points="122,50 164,80 148,130 96,130 80,80" stroke="rgba(255,255,255,0.11)" stroke-width="1" fill="none"/>
        <!-- Level 3 (100%): R=66 -->
        <polygon points="122,28 185,74 161,147 83,147 59,74" stroke="rgba(255,255,255,0.16)" stroke-width="1.3" fill="none"/>

        <!-- 5 Axis Spokes from center (122, 94) to outer vertices -->
        <line x1="122" y1="94" x2="122" y2="28" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="122" y1="94" x2="185" y2="74" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="122" y1="94" x2="161" y2="147" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="122" y1="94" x2="83" y2="147" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="122" y1="94" x2="59" y2="74" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>

        <!-- Generic Codecs Polygon (Zstd/Gzip) -->
        <polygon points="122,59 168,79 133,109 105,116 93,84" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.38)" stroke-width="1.3" stroke-dasharray="3 2"/>

        <!-- LibPolyCodec Glowing Polygon -->
        <polygon points="122,31 178,75 161,147 87,142 66,75" fill="rgba(${rgb}, 0.28)" stroke="${color}" stroke-width="2.4"/>
        <circle cx="122" cy="31" r="3.5" fill="${color}"/>
        <circle cx="178" cy="75" r="3.5" fill="${color}"/>
        <circle cx="161" cy="147" r="3.5" fill="${color}"/>
        <circle cx="87" cy="142" r="3.5" fill="${color}"/>
        <circle cx="66" cy="75" r="3.5" fill="${color}"/>

        <!-- Axis Labels: Collision-Free and Bold -->
        <text x="122" y="16" font-size="9" fill="${color}" font-weight="750" text-anchor="middle" font-family="monospace">${safe(lbl.axis1 || 'Speed (SIMD)')}</text>
        <text x="193" y="78" font-size="9" fill="var(--text)" font-weight="700" text-anchor="start" font-family="monospace">${safe(lbl.axis2 || 'Ratio')}</text>
        <text x="165" y="162" font-size="9" fill="#4ade80" font-weight="750" text-anchor="start" font-family="monospace">${safe(lbl.axis3 || 'Zero-Alloc')}</text>
        <text x="79" y="162" font-size="9" fill="var(--text)" font-weight="700" text-anchor="end" font-family="monospace">${safe(lbl.axis4 || 'UAV / IoT')}</text>
        <text x="51" y="78" font-size="9" fill="var(--text)" font-weight="700" text-anchor="end" font-family="monospace">${safe(lbl.axis5 || 'Security')}</text>

        <!-- Right Side: Comparative Metrics Table -->
        <!-- Legend -->
        <g transform="translate(250, 8)">
          <rect width="11" height="11" rx="2.5" fill="${color}"/>
          <text x="17" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">${safe(lbl.legendLib || 'LibPolyCodec (C++20)')}</text>
          
          <rect x="150" y="1" width="11" height="9" rx="2" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" stroke-dasharray="2 2"/>
          <text x="168" y="9.5" font-size="9.5" fill="var(--muted)" font-family="monospace">${safe(lbl.legendGen || 'Standard (Zstd / Gzip)')}</text>
        </g>

        <!-- Metric 1: Throughput -->
        <g transform="translate(250, 36)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">⚡ Throughput (SIMD)</text>
          <rect x="145" y="1" width="112" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="145" y="1" width="107" height="10" rx="3" fill="${color}"/>
          <text x="266" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">95% (4.2x)</text>
        </g>

        <!-- Metric 2: Compression Ratio -->
        <g transform="translate(250, 64)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">📦 Compression Ratio</text>
          <rect x="145" y="1" width="112" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="145" y="1" width="99" height="10" rx="3" fill="${color}"/>
          <text x="266" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">88% (+28%)</text>
        </g>

        <!-- Metric 3: Memory Determinism -->
        <g transform="translate(250, 92)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">🧠 Memory Determinism</text>
          <rect x="145" y="1" width="112" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="145" y="1" width="112" height="10" rx="3" fill="#4ade80"/>
          <text x="266" y="9.5" font-size="9.5" fill="#4ade80" font-weight="850" font-family="monospace">100% (0B)</text>
        </g>

        <!-- Metric 4: Embedded & UAV -->
        <g transform="translate(250, 120)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">🛸 Embedded &amp; UAV</text>
          <rect x="145" y="1" width="112" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="145" y="1" width="103" height="10" rx="3" fill="${color}"/>
          <text x="266" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">92%</text>
        </g>

        <!-- Metric 5: Data Security -->
        <g transform="translate(250, 148)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">🔒 Positional Entropy</text>
          <rect x="145" y="1" width="112" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="145" y="1" width="101" height="10" rx="3" fill="${color}"/>
          <text x="266" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">90%</text>
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

  const params = new URLSearchParams(window.location.search);
  if (params.has('flip')) {
    const idx = parseInt(params.get('flip'), 10);
    if (!isNaN(idx) && cards[idx]) {
      setTimeout(() => flipCard(cards[idx], true), 50);
    }
  } else if (params.has('flip_all')) {
    setTimeout(() => {
      cards.forEach(c => {
        c.classList.add('is-flipped');
        c.setAttribute('aria-expanded', 'true');
      });
    }, 50);
  }

  const appKicker = $('#approach-kicker');
  if (appKicker) appKicker.textContent = uk ? 'Робочий цикл' : 'Delivery loop';
  const appTitle = $('#approach-title');
  if (appTitle) appTitle.textContent = uk ? 'Як я рухаю технологічний проєкт уперед.' : 'How I move a technical project forward.';
}

