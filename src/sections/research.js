import { $, $$, safe } from '../utils/dom.js';
import { copy } from '../modules/copy.js';
import { getLang } from '../i18n/index.js';

let activeResearchYear = '2026';
let activeResearchPublisher = 'all';
let researchSearchQuery = '';

export function getApaCitation(p) {
  const authorsStr = (p.authors || []).join(', ');
  const titleStr = p.title.endsWith('.') ? p.title : p.title + '.';
  const sourceStr = p.source ? `${p.source}${p.details ? ', ' + p.details : ''}.` : '';
  const doiStr = p.doi ? ` https://doi.org/${p.doi}` : '';
  return `${authorsStr} (${p.year}). ${titleStr} ${sourceStr}${doiStr}`.trim();
}

export function renderResearch(data) {
  const uk = getLang() === 'uk';
  const c = copy();
  const rl = c.researchHub || {};
  const profileIcons = { Scopus: 'fas fa-graduation-cap', ORCID: 'fas fa-id-card', Google_Scholar: 'fas fa-search' };

  const profilesEl = $('#academic-profiles');
  if (profilesEl) {
    profilesEl.innerHTML = Object.entries(data.academic_profiles || {}).map(([name, url]) => {
      const icon = profileIcons[name] || 'fas fa-external-link-alt';
      const label = name.replace('_', ' ');
      return `<a href="${url}" target="_blank" rel="noopener" class="academic-profile-link"><i class="${icon}" aria-hidden="true"></i> <span>${safe(label)}</span> ↗</a>`;
    }).join('');
  }

  const container = $('#research-container');
  if (!container) return;

  const diss = data.dissertation || {};
  const patent = (data.patents || [])[0] || {};
  const monograph = (data.monographs || [])[0] || {};
  const allPubs = data.publications || [];
  const awards = data.awards_and_honors || [];

  const recentYears = ['2026', '2025', '2024', '2023', '2022', '2021'];
  const olderPubsCount = allPubs.filter(p => p.year <= 2020).length;
  const yearChips = [
    ...recentYears.map(yr => ({
      id: yr,
      label: yr,
      count: allPubs.filter(p => String(p.year) === yr).length
    })),
    {
      id: '2014-2020',
      label: '2014–2020',
      count: olderPubsCount
    },
    {
      id: 'all',
      label: rl.allYears || 'All years',
      count: allPubs.length
    }
  ];

  const publisherCounts = {
    all: allPubs.length,
    IEEE: allPubs.filter(p => p.publisher === 'IEEE').length,
    Springer: allPubs.filter(p => p.publisher === 'Springer').length,
    Journal: allPubs.filter(p => p.type === 'Journal').length
  };

  const renderPubsList = () => {
    const listEl = $('#research-pubs-list');
    const countEl = $('#research-count-label');
    if (!listEl) return;

    let filtered = allPubs.filter(p => {
      if (activeResearchYear !== 'all') {
        if (activeResearchYear === '2014-2020') {
          if (p.year > 2020) return false;
        } else if (String(p.year) !== String(activeResearchYear)) {
          return false;
        }
      }
      if (activeResearchPublisher !== 'all') {
        if (activeResearchPublisher === 'IEEE' && p.publisher !== 'IEEE') return false;
        if (activeResearchPublisher === 'Springer' && p.publisher !== 'Springer') return false;
        if (activeResearchPublisher === 'Journal' && p.type !== 'Journal') return false;
      }
      if (researchSearchQuery) {
        const q = researchSearchQuery.toLowerCase();
        const text = [p.title, p.source, p.details, ...(p.authors || []), String(p.year)].join(' ').toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    if (countEl) countEl.textContent = `${filtered.length} / ${allPubs.length}`;

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="research-empty-state"><i class="fas fa-search" aria-hidden="true"></i><p>${safe(rl.empty || 'No publications match your search criteria.')}</p></div>`;
      return;
    }

    const renderLedgerRow = (p, showYearBadge = true) => {
      const pubClass = p.publisher === 'IEEE' ? 'pub-badge-ieee' : p.publisher === 'Springer' ? 'pub-badge-springer' : 'pub-badge-journal';
      const pubIcon = p.publisher === 'IEEE' ? 'fas fa-microchip' : p.publisher === 'Springer' ? 'fas fa-book' : 'fas fa-scroll';
      const citation = getApaCitation(p);
      const authorsPreview = (p.authors || []).map(a => {
        const isMe = /Barannik D|Бараннік Д|Баранник Д/i.test(a);
        return isMe ? `<strong class="pub-author-me">${safe(a)}</strong>` : `<span>${safe(a)}</span>`;
      }).join(', ');

      return `
        <article class="ledger-item" data-id="${p.id}">
          <div class="ledger-row" role="button" tabindex="0" aria-expanded="false" aria-controls="ledger-drawer-${p.id}">
            <div class="ledger-col-meta">
              <span class="ledger-id">#${p.id}</span>
              ${showYearBadge ? `<span class="ledger-year-pill">${p.year}</span>` : ''}
              <span class="pub-badge ${pubClass}"><i class="${pubIcon}" aria-hidden="true"></i> ${safe(p.publisher)}</span>
            </div>
            <div class="ledger-col-main">
              <h4 class="ledger-title">${safe(p.title)}</h4>
              <div class="ledger-authors-preview">${authorsPreview}</div>
            </div>
            <div class="ledger-col-actions">
              ${p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener" class="ledger-doi-pill" title="DOI: ${safe(p.doi)}" onclick="event.stopPropagation()"><span>DOI</span> <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>` : ''}
              <span class="ledger-expand-icon" aria-hidden="true"><i class="fas fa-chevron-down"></i></span>
            </div>
          </div>
          <div id="ledger-drawer-${p.id}" class="ledger-drawer" hidden>
            <div class="ledger-drawer-content">
              <div class="ledger-detail-row">
                <span class="ledger-detail-label"><i class="fas fa-users" aria-hidden="true"></i> ${uk ? 'Співавтори:' : 'Authors:'}</span>
                <p class="ledger-detail-value">${authorsPreview}</p>
              </div>
              <div class="ledger-detail-row">
                <span class="ledger-detail-label"><i class="fas fa-bookmark" aria-hidden="true"></i> ${uk ? 'Видання:' : 'Venue:'}</span>
                <p class="ledger-detail-value"><em>${safe(p.source)}</em>${p.details ? ', ' + safe(p.details) : ''}</p>
              </div>
              <div class="ledger-drawer-actions">
                <button type="button" class="ledger-copy-citation-btn" data-citation="${safe(citation)}">
                  <i class="fas fa-quote-right" aria-hidden="true"></i> <span>${safe(rl.copyCitation || 'Copy citation')}</span>
                </button>
                ${p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener" class="ledger-doi-drawer-btn"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> <span>${safe(rl.viewDoi || 'Open DOI')} (${safe(p.doi)})</span></a>` : ''}
              </div>
            </div>
          </div>
        </article>
      `;
    };

    if (activeResearchYear === 'all' && !researchSearchQuery) {
      let html = '';
      recentYears.forEach(yr => {
        const yrPubs = filtered.filter(p => String(p.year) === yr);
        if (!yrPubs.length) return;
        html += `
          <div class="ledger-year-divider">
            <div class="ledger-year-divider-inner">
              <span class="ledger-year-heading">${yr}</span>
              <span class="ledger-year-count">${yrPubs.length} ${safe(rl.publications || 'publications')}</span>
            </div>
          </div>
          ${yrPubs.map(p => renderLedgerRow(p, false)).join('')}
        `;
      });
      const olderPubs = filtered.filter(p => p.year <= 2020);
      if (olderPubs.length) {
        html += `
          <div class="ledger-year-divider">
            <div class="ledger-year-divider-inner">
              <span class="ledger-year-heading">2014–2020</span>
              <span class="ledger-year-count">${olderPubs.length} ${safe(rl.publications || 'publications')} · ${uk ? 'Ранні наукові праці' : 'Foundational Research'}</span>
            </div>
          </div>
          ${olderPubs.map(p => renderLedgerRow(p, true)).join('')}
        `;
      }
      listEl.innerHTML = html;
    } else {
      const showYearBadge = activeResearchYear === '2014-2020' || Boolean(researchSearchQuery);
      listEl.innerHTML = filtered.map(p => renderLedgerRow(p, showYearBadge)).join('');
    }

    listEl.querySelectorAll('.ledger-row').forEach(row => {
      const item = row.closest('.ledger-item');
      const drawer = item?.querySelector('.ledger-drawer');
      const toggle = () => {
        const isExpanded = row.getAttribute('aria-expanded') === 'true';
        row.setAttribute('aria-expanded', String(!isExpanded));
        row.classList.toggle('is-expanded', !isExpanded);
        if (drawer) drawer.hidden = isExpanded;
      };
      row.addEventListener('click', e => {
        if (e.target.closest('a')) return;
        toggle();
      });
      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });

    listEl.querySelectorAll('.ledger-copy-citation-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        const citation = btn.dataset.citation;
        try {
          await navigator.clipboard.writeText(citation);
          const span = btn.querySelector('span');
          if (span) {
            const orig = span.textContent;
            span.textContent = rl.copied || 'Copied!';
            btn.classList.add('is-copied');
            setTimeout(() => {
              span.textContent = orig;
              btn.classList.remove('is-copied');
            }, 2000);
          }
        } catch (err) {
          console.error(err);
        }
      });
    });
  };

  container.innerHTML = `
    <div class="research-flagships-heading">
      <span class="eyebrow">${safe(rl.coreMilestones || 'Core Research Milestones')}</span>
      <div class="research-metrics-ribbon">
        <span><i class="fas fa-graduation-cap"></i> <strong>PhD</strong> 2025</span>
        <span><i class="fas fa-certificate"></i> <strong>1</strong> ${uk ? 'Патент' : 'Patent'}</span>
        <span><i class="fas fa-book"></i> <strong>1</strong> ${uk ? 'Монографія' : 'Monograph'}</span>
        <span><i class="fas fa-file-alt"></i> <strong>68</strong> ${uk ? 'Публікацій' : 'Publications'}</span>
      </div>
    </div>
    <div class="research-flagships-grid">
      <article class="flagship-card flagship-phd reveal">
        <div class="flagship-header">
          <div class="flagship-icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
          <span class="flagship-badge">${safe(rl.phdBadge || 'PhD Dissertation')} · 2025</span>
        </div>
        <h3 class="flagship-title">${safe(diss.title)}</h3>
        <p class="flagship-institution"><i class="fas fa-university" aria-hidden="true"></i> ${safe(diss.institution)}</p>
        <p class="flagship-specialty">${safe(diss.specialty)}</p>
        <p class="flagship-desc">${safe(diss.description)}</p>
      </article>

      <article class="flagship-card flagship-patent reveal">
        <div class="flagship-header">
          <div class="flagship-icon"><i class="fas fa-award" aria-hidden="true"></i></div>
          <span class="flagship-badge">${safe(rl.patentBadge || 'Utility Model Patent')} · ${patent.year || ''}</span>
        </div>
        <h3 class="flagship-title">${safe(patent.title)}</h3>
        <p class="flagship-patent-num"><i class="fas fa-stamp" aria-hidden="true"></i> <strong>${safe(patent.patent_number)}</strong> (${safe(patent.issue_date)})</p>
        <p class="flagship-desc">${safe(patent.description)}</p>
        <div class="flagship-project-link">
          <a href="/projects/libpolycodec/" class="skills-project-tag">
            <i class="fas fa-microchip" aria-hidden="true"></i> <span>LibPolyCodec Case Study</span> <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </article>

      <article class="flagship-card flagship-monograph reveal">
        <div class="flagship-header">
          <div class="flagship-icon"><i class="fas fa-book" aria-hidden="true"></i></div>
          <span class="flagship-badge">${safe(rl.monographBadge || 'Academic Monograph')} · ${monograph.year || ''}</span>
        </div>
        <h3 class="flagship-title">${safe(monograph.title)}</h3>
        <p class="flagship-publisher"><i class="fas fa-building" aria-hidden="true"></i> ${safe(monograph.publisher)}</p>
        <p class="flagship-authors">${safe((monograph.authors || []).join(', '))}</p>
        <p class="flagship-desc">${safe(monograph.description)}</p>
      </article>
    </div>

    <div class="research-archive-block reveal">
      <div class="research-archive-header">
        <div>
          <span class="eyebrow">${uk ? 'Реєстр наукових праць' : 'Scientific Works Registry'}</span>
          <h3 class="research-archive-title">${safe(rl.archiveTitle || 'Scientific Publications Archive')}</h3>
          <p class="research-archive-subtitle">${safe(rl.archiveSubtitle || '68 peer-reviewed publications across 12 years of research.')}</p>
        </div>
        <div class="research-archive-count-badge">
          <i class="fas fa-file-alt"></i> <span id="research-count-label">11 / 68</span>
        </div>
      </div>

      <div class="research-toolbar">
        <label class="research-search">
          <i class="fas fa-search" aria-hidden="true"></i>
          <input type="search" id="research-search-input" placeholder="${safe(rl.searchPlaceholder || 'Search publications, topics, authors, or venues…')}" value="${safe(researchSearchQuery)}" autocomplete="off">
        </label>
        <div class="research-filter-pills">
          <div class="research-years-pills" role="tablist" aria-label="${uk ? 'Фільтр за роками' : 'Filter by year'}">
            ${yearChips.map(chip => {
              const isActive = activeResearchYear === chip.id;
              return `<button type="button" class="research-chip ${isActive ? 'active' : ''}" data-year="${chip.id}"><span>${chip.label}</span> <span class="research-chip-count">${chip.count}</span></button>`;
            }).join('')}
          </div>
          <div class="research-publisher-pills" role="tablist" aria-label="${uk ? 'Фільтр видавництв' : 'Filter by publisher'}">
            ${['all', 'IEEE', 'Springer', 'Journal'].map(pub => {
              const label = pub === 'all' ? (rl.allPublishers || 'All venues') : pub;
              const count = publisherCounts[pub] || 0;
              const isActive = activeResearchPublisher === pub;
              return `<button type="button" class="research-chip ${isActive ? 'active' : ''}" data-pub="${pub}"><span>${label}</span> <span class="research-chip-count">${count}</span></button>`;
            }).join('')}
          </div>
        </div>
      </div>

      <div id="research-pubs-list" class="research-pubs-list" aria-live="polite"></div>
    </div>

    ${awards.length ? `
    <div class="research-awards-block reveal">
      <span class="eyebrow">${safe(rl.awardsTitle || 'Academic Honors & Activities')}</span>
      <div class="research-awards-grid">
        ${awards.map(a => `
          <div class="research-award-card">
            <div class="research-award-top">
              <span class="research-award-role"><i class="fas fa-medal"></i> ${safe(a.role)}</span>
              <span class="research-award-year">${a.year || ''}</span>
            </div>
            <h4 class="research-award-title">${safe(a.title)}</h4>
            ${a.description ? `<p class="research-award-desc">${safe(a.description)}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </div>` : ''}
  `;

  renderPubsList();

  const searchInput = $('#research-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      researchSearchQuery = e.target.value.trim();
      renderPubsList();
    });
  }

  $$('.research-years-pills .research-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeResearchYear = btn.dataset.year;
      $$('.research-years-pills .research-chip').forEach(b => b.classList.toggle('active', b.dataset.year === activeResearchYear));
      renderPubsList();
    });
  });

  $$('.research-publisher-pills .research-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeResearchPublisher = btn.dataset.pub;
      $$('.research-publisher-pills .research-chip').forEach(b => b.classList.toggle('active', b.dataset.pub === activeResearchPublisher));
      renderPubsList();
    });
  });
}
