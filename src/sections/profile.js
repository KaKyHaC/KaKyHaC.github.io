import { $, $$, safe } from '../utils/dom.js';
import { getLang } from '../i18n/index.js';

function renderScopeIllustration(b, color, rgb) {
  const d = b.diagramLabels || {};
  return `
  <div class="profile-back-visual profile-visual-scope">
    <div class="scope-mobile-hint" aria-hidden="true">
      <i class="fas fa-arrows-alt-h"></i>
      <span>${safe(d.swipeHint || 'Swipe horizontally to explore layers')}</span>
    </div>
    <div class="visual-svg-wrap">
      <svg viewBox="0 0 640 416" fill="none" xmlns="http://www.w3.org/2000/svg" class="blueprint-svg clean-arch-svg">
        <!-- Subtle Blueprint Guidelines -->
        <line x1="14" y1="4" x2="626" y2="4" stroke="rgba(255,255,255,0.03)" stroke-width="0.8"/>
        <line x1="14" y1="122" x2="626" y2="122" stroke="rgba(255,255,255,0.03)" stroke-width="0.8"/>
        <line x1="14" y1="294" x2="626" y2="294" stroke="rgba(255,255,255,0.03)" stroke-width="0.8"/>
        <line x1="14" y1="412" x2="626" y2="412" stroke="rgba(255,255,255,0.03)" stroke-width="0.8"/>

        <!-- TIER 1: MULTI-PLATFORM CLIENT FRONTENDS (y = 6, h = 86, w = 188, gaps = 24) -->
        <!-- 1.1 Mobile Apps -->
        <g transform="translate(14, 6)">
          <rect width="188" height="86" rx="9" fill="rgba(var(--accent-rgb), 0.05)" stroke="rgba(var(--accent-rgb), 0.38)" stroke-width="1.3"/>
          <rect x="8" y="7" width="172" height="22" rx="5" fill="rgba(var(--accent-rgb), 0.14)" stroke="rgba(var(--accent-rgb), 0.32)" stroke-width="0.9"/>
          <text x="94" y="22" font-size="9.3" fill="var(--accent)" font-weight="900" text-anchor="middle" font-family="monospace">${safe(d.mobileHeader || '📱 MOBILE (ANDROID & iOS)')}</text>
          <text x="94" y="46" font-size="10.8" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.mobileTech || 'Jetpack Compose · Flutter')}</text>
          <text x="94" y="63" font-size="9.2" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.mobileSub1 || '60/120 FPS Fluid Runtimes')}</text>
          <text x="94" y="77" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.mobileSub2 || 'Offline-First & Reactive State')}</text>
        </g>

        <!-- 1.2 Desktop Apps -->
        <g transform="translate(226, 6)">
          <rect width="188" height="86" rx="9" fill="rgba(56, 189, 248, 0.04)" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1.3"/>
          <rect x="8" y="7" width="172" height="22" rx="5" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="0.9"/>
          <text x="94" y="22" font-size="9.3" fill="#38bdf8" font-weight="900" text-anchor="middle" font-family="monospace">${safe(d.desktopHeader || '💻 DESKTOP (macOS & WIN)')}</text>
          <text x="94" y="46" font-size="10.8" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.desktopTech || 'Compose Multiplatform · C++')}</text>
          <text x="94" y="63" font-size="9.2" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.desktopSub1 || 'High-Performance Native Tools')}</text>
          <text x="94" y="77" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.desktopSub2 || 'Direct OS & Memory Access')}</text>
        </g>

        <!-- 1.3 Modern Web -->
        <g transform="translate(438, 6)">
          <rect width="188" height="86" rx="9" fill="rgba(34, 197, 94, 0.04)" stroke="rgba(34, 197, 94, 0.35)" stroke-width="1.3"/>
          <rect x="8" y="7" width="172" height="22" rx="5" fill="rgba(34, 197, 94, 0.12)" stroke="rgba(34, 197, 94, 0.3)" stroke-width="0.9"/>
          <text x="94" y="22" font-size="9.3" fill="#4ade80" font-weight="900" text-anchor="middle" font-family="monospace">${safe(d.webHeader || '🌐 MODERN WEB & PORTALS')}</text>
          <text x="94" y="46" font-size="10.8" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.webTech || 'React · Astro · Edge SSR')}</text>
          <text x="94" y="63" font-size="9.2" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.webSub1 || 'SaaS Dashboards & B2B Portals')}</text>
          <text x="94" y="77" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.webSub2 || 'Sub-Second LCP · Zero Layout Shift')}</text>
        </g>

        <!-- Flow Connector 1: Top Frontends to Central Core (y = 92 to 152, generous 60px gap) -->
        <g>
          <path d="M 108 92 L 108 152" stroke="var(--accent)" stroke-width="1.8" stroke-dasharray="3 2" class="flow-link"/>
          <path d="M 320 92 L 320 152" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="3 2" class="flow-link"/>
          <path d="M 532 92 L 532 152" stroke="#4ade80" stroke-width="1.8" stroke-dasharray="3 2" class="flow-link"/>
          <rect x="145" y="110" width="350" height="24" rx="12" fill="rgba(15, 23, 42, 0.96)" stroke="rgba(56, 189, 248, 0.55)" stroke-width="1.1"/>
          <text x="320" y="125.5" font-size="9.3" fill="#38bdf8" font-weight="800" text-anchor="middle" font-family="monospace">${safe(d.flowMvi || '▲▼ UNIFIED MVI STATE & REACTIVE DATA FLOW')}</text>
        </g>

        <!-- TIER 2: HERO CENTER — SHARED BUSINESS CORE & REUSABLE SDKs (y = 152, h = 112, w = 612) -->
        <g transform="translate(14, 152)">
          <rect width="612" height="112" rx="12" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-width="2"/>
          
          <rect x="14" y="9" width="340" height="22" rx="5" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="1"/>
          <text x="184" y="23.5" font-size="10" fill="#38bdf8" font-weight="900" text-anchor="middle" font-family="monospace">${safe(d.coreHeader || '⚡ SHARED BUSINESS CORE & REUSABLE SDKs')}</text>
          
          <rect x="378" y="9" width="220" height="22" rx="5" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" stroke-width="1"/>
          <text x="488" y="23.5" font-size="9.5" fill="#4ade80" font-weight="850" text-anchor="middle" font-family="monospace">${safe(d.coreTruth || '✓ 100% SINGLE SOURCE OF TRUTH')}</text>

          <!-- 3 Internal Sub-Modules with generous 22px gaps -->
          <g transform="translate(14, 44)">
            <rect width="180" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="0.9"/>
            <text x="90" y="19" font-size="10" fill="var(--text)" font-weight="800" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.kmpTitle || 'Pure KMP Domain Engine')}</text>
            <text x="90" y="34" font-size="8.8" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.kmpSub1 || 'Zero Platform / SDK Coupling')}</text>
            <text x="90" y="47" font-size="8.2" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.kmpSub2 || 'Deterministic Business Rules')}</text>
          </g>

          <g transform="translate(216, 44)">
            <rect width="180" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="0.9"/>
            <text x="90" y="19" font-size="10" fill="var(--text)" font-weight="800" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.sdkTitle || 'Cross-Platform Client SDKs')}</text>
            <text x="90" y="34" font-size="8.8" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.sdkSub1 || 'Reusable Across All Frontends')}</text>
            <text x="90" y="47" font-size="8.2" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.sdkSub2 || '2x Faster Feature Turnaround')}</text>
          </g>

          <g transform="translate(418, 44)">
            <rect width="180" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="0.9"/>
            <text x="90" y="19" font-size="10" fill="var(--text)" font-weight="800" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.cppTitle || 'Algorithmic C++20 Core')}</text>
            <text x="90" y="34" font-size="8.8" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.cppSub1 || 'SIMD & Zero-Alloc Memory Pools')}</text>
            <text x="90" y="47" font-size="8.2" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.cppSub2 || 'Maximum Real-Time Throughput')}</text>
          </g>
        </g>

        <!-- Flow Connector 2: Central Core to Backend & Infrastructure (y = 264 to 324, generous 60px gap) -->
        <g>
          <path d="M 108 264 L 108 324" stroke="#a78bfa" stroke-width="1.8" stroke-dasharray="3 2" class="flow-link"/>
          <path d="M 320 264 L 320 324" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="3 2" class="flow-link"/>
          <path d="M 532 264 L 532 324" stroke="#fb7185" stroke-width="1.8" stroke-dasharray="3 2" class="flow-link"/>
          <rect x="105" y="282" width="430" height="24" rx="12" fill="rgba(15, 23, 42, 0.96)" stroke="rgba(255, 255, 255, 0.32)" stroke-width="1.1"/>
          <text x="320" y="297.5" font-size="9.3" fill="var(--text)" font-weight="800" text-anchor="middle" font-family="monospace">${safe(d.flowTransport || '🔒 ENCRYPTED REST · WEBSOCKETS · GRPC · EVENT BUS · HAL')}</text>
        </g>

        <!-- TIER 3: BACKEND, DATA SYNC & SMART HARDWARE (y = 324, h = 86, w = 188, gaps = 24) -->
        <!-- 3.1 Cloud & APIs -->
        <g transform="translate(14, 324)">
          <rect width="188" height="86" rx="9" fill="rgba(168, 85, 247, 0.04)" stroke="rgba(168, 85, 247, 0.35)" stroke-width="1.3"/>
          <rect x="8" y="7" width="172" height="22" rx="5" fill="rgba(168, 85, 247, 0.12)" stroke="rgba(168, 85, 247, 0.3)" stroke-width="0.9"/>
          <text x="94" y="22" font-size="9.3" fill="#c084fc" font-weight="900" text-anchor="middle" font-family="monospace">${safe(d.cloudHeader || '☁️ CLOUD BACKEND & APIs')}</text>
          <text x="94" y="46" font-size="10.8" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.cloudTech || 'Serverless · Ktor · Microservices')}</text>
          <text x="94" y="63" font-size="9.2" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.cloudSub1 || 'High-Load Scalable Architecture')}</text>
          <text x="94" y="77" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.cloudSub2 || 'Distributed Auth & Edge Gateways')}</text>
        </g>

        <!-- 3.2 Offline-First Data & Sync -->
        <g transform="translate(226, 324)">
          <rect width="188" height="86" rx="9" fill="rgba(56, 189, 248, 0.04)" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1.3"/>
          <rect x="8" y="7" width="172" height="22" rx="5" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="0.9"/>
          <text x="94" y="22" font-size="9.3" fill="#38bdf8" font-weight="900" text-anchor="middle" font-family="monospace">${safe(d.dataHeader || '🗄️ OFFLINE-FIRST DATA & SYNC')}</text>
          <text x="94" y="46" font-size="10.8" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.dataTech || 'Room · SQLite · Realtime DB')}</text>
          <text x="94" y="63" font-size="9.2" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.dataSub1 || 'Zero Data Loss Guarantee')}</text>
          <text x="94" y="77" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.dataSub2 || 'Automated Conflict Resolution')}</text>
        </g>

        <!-- 3.3 Smart Hardware & IoT -->
        <g transform="translate(438, 324)">
          <rect width="188" height="86" rx="9" fill="rgba(244, 63, 94, 0.04)" stroke="rgba(244, 63, 94, 0.35)" stroke-width="1.3"/>
          <rect x="8" y="7" width="172" height="22" rx="5" fill="rgba(244, 63, 94, 0.12)" stroke="rgba(244, 63, 94, 0.3)" stroke-width="0.9"/>
          <text x="94" y="22" font-size="9.3" fill="#fb7185" font-weight="900" text-anchor="middle" font-family="monospace">${safe(d.iotHeader || '📡 CONNECTED IOT & EDGE')}</text>
          <text x="94" y="46" font-size="10.8" fill="var(--text)" font-weight="750" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.iotTech || 'ESP32 · BLE 5.0 · LoRaWAN')}</text>
          <text x="94" y="63" font-size="9.2" fill="var(--muted)" font-weight="600" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.iotSub1 || 'Telemetry Sensors & Micro-loops')}</text>
          <text x="94" y="77" font-size="8.5" fill="var(--muted)" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">${safe(d.iotSub2 || 'Hardware Abstraction Layer (HAL)')}</text>
        </g>
      </svg>
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
      <svg viewBox="0 0 650 205" fill="none" xmlns="http://www.w3.org/2000/svg" class="blueprint-svg radar-svg">
        <!-- Center (135, 102), R=72 -->
        <!-- Level 1 (33%): R=24 -->
        <polygon points="135,78 158,95 149,121 121,121 112,95" stroke="rgba(255,255,255,0.08)" stroke-width="1" fill="none"/>
        <!-- Level 2 (66%): R=48 -->
        <polygon points="135,54 181,87 163,141 107,141 89,87" stroke="rgba(255,255,255,0.11)" stroke-width="1" fill="none"/>
        <!-- Level 3 (100%): R=72 -->
        <polygon points="135,30 204,80 177,160 93,160 66,80" stroke="rgba(255,255,255,0.16)" stroke-width="1.3" fill="none"/>

        <!-- 5 Axis Spokes from center (135, 102) to outer vertices -->
        <line x1="135" y1="102" x2="135" y2="30" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="135" y1="102" x2="204" y2="80" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="135" y1="102" x2="177" y2="160" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="135" y1="102" x2="93" y2="160" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <line x1="135" y1="102" x2="66" y2="80" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>

        <!-- Standard Visual Codecs Baseline (JPEG / HEVC Intra) -->
        <polygon points="135,59 183,86 146,117 118,125 90,87" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.38)" stroke-width="1.3" stroke-dasharray="3 2"/>

        <!-- LibPolyCodec High-Performance Polygon -->
        <polygon points="135,33 195,82 177,160 96,155 73,82" fill="rgba(${rgb}, 0.28)" stroke="${color}" stroke-width="2.4"/>
        <circle cx="135" cy="33" r="3.5" fill="${color}"/>
        <circle cx="195" cy="82" r="3.5" fill="${color}"/>
        <circle cx="177" cy="160" r="3.5" fill="${color}"/>
        <circle cx="96" cy="155" r="3.5" fill="${color}"/>
        <circle cx="73" cy="82" r="3.5" fill="${color}"/>

        <!-- Axis Labels: Collision-Free, Centered and Bold -->
        <text x="135" y="18" font-size="9" fill="${color}" font-weight="750" text-anchor="middle" font-family="monospace">${safe(lbl.axis1 || 'Speed (SIMD)')}</text>
        <text x="208" y="83" font-size="9" fill="var(--text)" font-weight="700" text-anchor="start" font-family="monospace">${safe(lbl.axis2 || 'Ratio')}</text>
        <text x="177" y="176" font-size="9" fill="#4ade80" font-weight="750" text-anchor="middle" font-family="monospace">${safe(lbl.axis3 || 'Zero-Alloc')}</text>
        <text x="93" y="176" font-size="9" fill="var(--text)" font-weight="700" text-anchor="middle" font-family="monospace">${safe(lbl.axis4 || 'UAV & Avionics')}</text>
        <text x="60" y="83" font-size="9" fill="var(--text)" font-weight="700" text-anchor="end" font-family="monospace">${safe(lbl.axis5 || 'Reliability')}</text>

        <!-- Right Side: Comparative Metrics Table -->
        <!-- Legend -->
        <g transform="translate(280, 10)">
          <rect width="11" height="11" rx="2.5" fill="${color}"/>
          <text x="17" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">${safe(lbl.legendLib || 'LibPolyCodec (C++20)')}</text>
          
          <rect x="156" y="1" width="11" height="9" rx="2" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" stroke-dasharray="2 2"/>
          <text x="174" y="9.5" font-size="9.5" fill="var(--muted)" font-family="monospace">${safe(lbl.legendGen || 'Standard (JPEG / HEVC Intra)')}</text>
        </g>

        <!-- Metric 1: Throughput -->
        <g transform="translate(280, 38)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">${safe(lbl.metric1Label || '⚡ Throughput (SIMD)')}</text>
          <rect x="140" y="1" width="84" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="140" y="1" width="80" height="10" rx="3" fill="${color}"/>
          <text x="232" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">${safe(lbl.metric1Val || '4.2x (60+ FPS)')}</text>
        </g>

        <!-- Metric 2: Compression Ratio -->
        <g transform="translate(280, 68)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">${safe(lbl.metric2Label || '📦 Compression Ratio')}</text>
          <rect x="140" y="1" width="84" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="140" y="1" width="74" height="10" rx="3" fill="${color}"/>
          <text x="232" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">${safe(lbl.metric2Val || '+28% (Radio Link)')}</text>
        </g>

        <!-- Metric 3: Memory Determinism -->
        <g transform="translate(280, 98)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">${safe(lbl.metric3Label || '🧠 Memory Determinism')}</text>
          <rect x="140" y="1" width="84" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="140" y="1" width="84" height="10" rx="3" fill="#4ade80"/>
          <text x="232" y="9.5" font-size="9.5" fill="#4ade80" font-weight="850" font-family="monospace">${safe(lbl.metric3Val || '0B Heap (Zero-Alloc)')}</text>
        </g>

        <!-- Metric 4: Avionics & UAV -->
        <g transform="translate(280, 128)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">${safe(lbl.metric4Label || '🛸 Avionics & UAV')}</text>
          <rect x="140" y="1" width="84" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="140" y="1" width="77" height="10" rx="3" fill="${color}"/>
          <text x="232" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">${safe(lbl.metric4Val || '64KB Static Pool')}</text>
        </g>

        <!-- Metric 5: Data Security & Reliability -->
        <g transform="translate(280, 158)">
          <text x="0" y="9" font-size="9.5" fill="var(--text)" font-weight="700" font-family="monospace">${safe(lbl.metric5Label || '🔒 Reliability & Safety')}</text>
          <rect x="140" y="1" width="84" height="10" rx="3" fill="rgba(255,255,255,0.06)"/>
          <rect x="140" y="1" width="76" height="10" rx="3" fill="${color}"/>
          <text x="232" y="9.5" font-size="9.5" fill="${color}" font-weight="800" font-family="monospace">${safe(lbl.metric5Val || 'poly::Status / .BAR')}</text>
        </g>
      </svg>
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

