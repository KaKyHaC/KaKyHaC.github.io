import { $, $$, safe } from '../utils/dom.js';
import { getLang } from '../i18n/index.js';
import { trackProjectView } from '../analytics.js';
import { DOMAIN_META, DOMAIN_ORDER, projectUrl } from '../project-data.js';
import { getProjects } from './projects.js';

let activeSkillCategory = null;
let activeSkillDomain = 'all';

export const SKILL_ICONS = {
  programming_languages: 'fas fa-code',
  ai_orchestration_and_agentic_engineering: 'fas fa-robot',
  systems_and_cpp: 'fas fa-microchip',
  modern_web_and_edge: 'fas fa-globe',
  iot_and_embedded: 'fas fa-satellite-dish',
  cybersecurity_and_research: 'fas fa-shield-alt',
  android_core_and_ui: 'fab fa-android',
  architecture_and_design: 'fas fa-sitemap',
  asynchrony_and_networking: 'fas fa-network-wired',
  databases_and_local_storage: 'fas fa-database',
  cloud_and_backend: 'fas fa-cloud',
  dependency_injection: 'fas fa-cube',
  multimedia_hardware_and_camera: 'fas fa-camera',
  testing_and_debugging: 'fas fa-bug',
  monetization_analytics_and_devops: 'fas fa-chart-line',
  inferred_game_dev_and_publishing: 'fas fa-gamepad'
};

export const SKILL_CATEGORY_GROUPS = [
  {
    id: 'core',
    icon: 'fas fa-crown',
    categories: [
      'ai_orchestration_and_agentic_engineering',
      'android_core_and_ui',
      'architecture_and_design',
      'systems_and_cpp'
    ]
  },
  {
    id: 'platforms',
    icon: 'fas fa-layer-group',
    categories: [
      'programming_languages',
      'modern_web_and_edge',
      'iot_and_embedded',
      'cybersecurity_and_research'
    ]
  },
  {
    id: 'foundation',
    icon: 'fas fa-cubes',
    categories: [
      'asynchrony_and_networking',
      'multimedia_hardware_and_camera',
      'databases_and_local_storage',
      'dependency_injection',
      'cloud_and_backend'
    ]
  },
  {
    id: 'quality',
    icon: 'fas fa-rocket',
    categories: [
      'testing_and_debugging',
      'monetization_analytics_and_devops',
      'inferred_game_dev_and_publishing'
    ]
  }
];

export const SKILL_CATEGORY_DOMAINS = {
  ai_orchestration_and_agentic_engineering: ['research', 'web'],
  android_core_and_ui: ['android', 'flutter'],
  architecture_and_design: ['android', 'flutter', 'web', 'embedded'],
  systems_and_cpp: ['embedded', 'research'],
  programming_languages: ['android', 'flutter', 'web', 'iot', 'embedded', 'research'],
  modern_web_and_edge: ['web'],
  iot_and_embedded: ['iot', 'embedded'],
  cybersecurity_and_research: ['research', 'embedded'],
  asynchrony_and_networking: ['android', 'flutter', 'web'],
  multimedia_hardware_and_camera: ['android', 'embedded', 'iot'],
  databases_and_local_storage: ['android', 'flutter', 'web'],
  dependency_injection: ['android', 'flutter'],
  cloud_and_backend: ['android', 'flutter', 'web'],
  testing_and_debugging: ['android', 'flutter', 'web', 'embedded'],
  monetization_analytics_and_devops: ['android', 'flutter', 'web'],
  inferred_game_dev_and_publishing: ['android', 'flutter']
};

export function getProjectsForSkill(skillName, usageText) {
  const projects = getProjects();
  const sEsc = skillName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regExact = new RegExp('(^|[\\s/,+()])' + sEsc + '($|[\\s/,+()])', 'i');
  return projects.filter(p => {
    const hasTech = (p.technologies || []).some(t => regExact.test(t) || t.toLowerCase() === skillName.toLowerCase());
    const hasTag = (p.tags || []).some(t => regExact.test(t) || t.toLowerCase() === skillName.toLowerCase());
    const hasTitle = regExact.test(p.title);
    const pMainTitle = p.title.split('—')[0].trim();
    const hasUsage = usageText && (
      usageText.toLowerCase().includes(pMainTitle.toLowerCase()) ||
      (p.id && usageText.toLowerCase().includes(p.id.toLowerCase()))
    );
    return hasTech || hasTag || hasTitle || hasUsage;
  });
}

export const sanitizeSkillId = str => 'skill-entry-' + String(str).toLowerCase().replace(/[^a-z0-9_-]/g, '-').replace(/-+/g, '-');

export function renderSkills(data, details, ui) {
  const categories = data.skills_profile.categories;
  const uk = getLang() === 'uk';
  const lang = getLang();

  const isCatInDomain = catKey => {
    if (activeSkillDomain === 'all') return true;
    const doms = SKILL_CATEGORY_DOMAINS[catKey] || [];
    return doms.includes(activeSkillDomain);
  };

  const allOrderedCategories = SKILL_CATEGORY_GROUPS.flatMap(g => g.categories);
  const visibleCategories = allOrderedCategories.filter(key => categories[key] && isCatInDomain(key));
  if (!activeSkillCategory || !visibleCategories.includes(activeSkillCategory)) {
    activeSkillCategory = visibleCategories[0] || allOrderedCategories[0];
  }

  const updateSheet = () => {
    const key = activeSkillCategory;
    const items = categories[key] || [];
    const icon = SKILL_ICONS[key] || 'fas fa-code';
    const title = ui.skills[key] || key;
    const catDetails = items.map(skillName => {
      const found = details.find(d => d.category === key && d.skill.toLowerCase() === skillName.toLowerCase());
      return found || { skill: skillName, category: key, description: '', usage: '' };
    });

    const sheet = $('#skills-sheet');
    if (!sheet) return;

    const matchedProjectsMap = new Map();
    const allCategoryProjectsSet = new Set();
    catDetails.forEach(item => {
      const matched = getProjectsForSkill(item.skill, item.usage);
      matchedProjectsMap.set(item.skill, matched);
      matched.forEach(p => allCategoryProjectsSet.add(p.title));
    });

    const overviewCard = `
      <aside class="skills-overview-card" aria-label="${ui.skillsUi?.overviewTitle || (uk ? 'Швидкий огляд розділу' : 'Chapter at a Glance')}">
        <div class="skills-overview-top">
          <div class="skills-overview-kicker">
            <span class="skills-overview-badge"><i class="fas fa-sparkles" aria-hidden="true"></i> ${ui.skillsUi?.overviewTitle || (uk ? 'Швидкий огляд розділу' : 'Chapter at a Glance')}</span>
            <span class="skills-overview-hint"><i class="fas fa-hand-pointer" aria-hidden="true"></i> ${ui.skillsUi?.overviewHint || (uk ? 'Клікніть на навичку для переходу до досьє' : 'Click a skill to jump to details')}</span>
          </div>
          <div class="skills-overview-metrics">
            <div class="skills-metric-pill" title="${ui.skillsUi?.skillsCount || (uk ? 'Навичок у розділі' : 'Skills in chapter')}">
              <strong class="skills-metric-val">${items.length}</strong>
              <span class="skills-metric-lbl">${ui.skillsUi?.skillsUnit || (uk ? 'навичок' : 'skills')}</span>
            </div>
            <div class="skills-metric-pill" title="${ui.skillsUi?.projectsCount || (uk ? 'Задіяно в проєктах' : 'Connected projects')}">
              <strong class="skills-metric-val">${allCategoryProjectsSet.size}</strong>
              <span class="skills-metric-lbl">${ui.skillsUi?.projectsUnit || (uk ? 'проєктів' : 'projects')}</span>
            </div>
          </div>
        </div>
        <div class="skills-overview-badges" role="list">
          ${items.map(skillName => {
            const pCount = (matchedProjectsMap.get(skillName) || []).length;
            const targetId = sanitizeSkillId(skillName);
            return `<button type="button" class="skills-overview-chip" data-target-id="${targetId}" aria-label="${safe(skillName)}: ${pCount} ${ui.skillsUi?.projectsUnit || (uk ? 'проєктів' : 'projects')}">
              <span class="skills-chip-bullet" aria-hidden="true"></span>
              <span class="skills-chip-name">${safe(skillName)}</span>
              ${pCount ? `<span class="skills-chip-count">${pCount}</span>` : ''}
            </button>`;
          }).join('')}
        </div>
      </aside>
    `;

    sheet.innerHTML = `
      <header class="skills-sheet-header">
        <div class="skills-sheet-title-group">
          <div class="skills-sheet-icon"><i class="${icon}" aria-hidden="true"></i></div>
          <div>
            <span class="skills-sheet-eyebrow">${ui.skillsUi?.categoryDossier || (uk ? 'Розділ досьє' : 'Dossier chapter')} · ${items.length} ${ui.skillsUi?.skillsUnit || (uk ? 'компетенцій' : 'skills')}</span>
            <h3 class="skills-sheet-title">${safe(title)}</h3>
          </div>
        </div>
      </header>
      ${overviewCard}
      <div class="skills-entries-list">
        ${catDetails.map(item => {
          const matched = matchedProjectsMap.get(item.skill) || [];
          const initial = matched.slice(0, 3);
          const extra = matched.slice(3);
          const entryId = sanitizeSkillId(item.skill);
          const renderTag = p => `<a href="${projectUrl(p)}" class="skills-project-tag" data-project="${safe(p.title)}"><span>${safe(p.title)}</span> <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`;
          return `<article class="skills-entry" id="${entryId}" tabindex="-1">
            <div class="skills-entry-top">
              <span class="skills-entry-dot" aria-hidden="true"></span>
              <h4 class="skills-entry-name">${safe(item.skill)}</h4>
            </div>
            ${item.description ? `<p class="skills-entry-desc">${safe(item.description)}</p>` : ''}
            ${item.usage ? `<div class="skills-entry-usage">
              <span class="skills-usage-badge"><i class="fas fa-terminal" aria-hidden="true"></i> ${uk ? 'Практичне застосування' : 'Production usage'}</span>
              <p class="skills-usage-text">${safe(item.usage)}</p>
              ${matched.length ? `<div class="skills-usage-projects">
                <span class="skills-usage-projects-label"><i class="fas fa-folder-open" aria-hidden="true"></i> ${uk ? 'Проєкти:' : 'Projects:'}</span>
                <div class="skills-usage-tags">
                  ${initial.map(renderTag).join('')}
                  ${extra.length ? `<span class="skills-extra-projects hidden">${extra.map(renderTag).join('')}</span><button type="button" class="skills-more-projects-btn" aria-label="${uk ? 'Показати більше проєктів' : 'Show more projects'}">+${extra.length} ${uk ? 'ще' : 'more'}</button>` : ''}
                </div>
              </div>` : ''}
            </div>` : ''}
          </article>`;
        }).join('')}
      </div>
    `;

    sheet.scrollTop = 0;

    sheet.querySelectorAll('.skills-overview-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const targetId = chip.dataset.targetId;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const isReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
          targetEl.scrollIntoView({ behavior: isReduced ? 'auto' : 'smooth', block: 'start' });
          targetEl.classList.remove('is-highlighted');
          void targetEl.offsetWidth;
          targetEl.classList.add('is-highlighted');
          setTimeout(() => targetEl.classList.remove('is-highlighted'), 2400);
        }
      });
    });

    sheet.querySelectorAll('.skills-more-projects-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const extra = btn.previousElementSibling;
        if (extra && extra.classList.contains('skills-extra-projects')) {
          extra.classList.remove('hidden');
          btn.remove();
        }
      });
    });

    sheet.querySelectorAll('.skills-project-tag').forEach(a => {
      a.addEventListener('click', () => {
        trackProjectView(a.dataset.project);
        sessionStorage.setItem('portfolioScroll', String(scrollY));
      });
    });
  };

  const renderContainer = () => {
    const domainChipsHtml = DOMAIN_ORDER.map(key => {
      const isActive = key === activeSkillDomain;
      if (key === 'all') {
        return `<button type="button" class="filter-chip filter-chip-all ${isActive ? 'active' : ''}" data-skill-domain="all"><span>${ui.skillsUi?.allDomains || (uk ? 'Усі спеціалізації' : 'All Specializations')}</span></button>`;
      }
      const meta = DOMAIN_META[key] || {};
      const label = meta[lang] || key;
      return `<button type="button" class="filter-chip filter-chip-${key} ${isActive ? 'active' : ''}" data-skill-domain="${key}" aria-label="${safe(label)}" title="${safe(label)}"><i class="${safe(meta.icon || 'fas fa-tag')}" aria-hidden="true"></i><span class="filter-chip-label">${safe(label)}</span></button>`;
    }).join('');

    const currentVisibleKeys = allOrderedCategories.filter(key => categories[key] && isCatInDomain(key));

    const groupsHtml = SKILL_CATEGORY_GROUPS.map(group => {
      const groupCategories = group.categories.filter(key => categories[key] && isCatInDomain(key));
      if (!groupCategories.length) return '';
      const groupTitle = (ui.skillsGroups && ui.skillsGroups[group.id]) || group.id;

      const buttonsHtml = groupCategories.map(key => {
        const items = categories[key] || [];
        const isActive = key === activeSkillCategory;
        const icon = SKILL_ICONS[key] || 'fas fa-code';
        const title = ui.skills[key] || key;
        return `<button type="button" role="tab" class="skills-tab-btn ${isActive ? 'active' : ''}" data-category="${key}" aria-selected="${isActive}">
          <span class="skills-tab-icon"><i class="${icon}" aria-hidden="true"></i></span>
          <span class="skills-tab-title">${safe(title)}</span>
          <span class="skills-tab-count">${items.length}</span>
        </button>`;
      }).join('');

      return `<div class="skills-group">
        <div class="skills-group-header">
          <span class="skills-group-icon"><i class="${group.icon}" aria-hidden="true"></i></span>
          <span class="skills-group-title">${safe(groupTitle)}</span>
          <span class="skills-group-line" aria-hidden="true"></span>
        </div>
        <div class="skills-group-tabs">${buttonsHtml}</div>
      </div>`;
    }).join('');

    const container = $('#skills-container');
    if (!container) return;

    container.innerHTML = `
      <div class="skills-filter-toolbar">
        <div class="filter-row" role="toolbar" aria-label="${ui.skillsUi?.filterDomainAria || (uk ? 'Фільтрація компетенцій за доменом' : 'Filter competencies by technical domain')}">
          ${domainChipsHtml}
        </div>
      </div>
      <div class="skills-notebook">
        <div class="skills-sidebar">
          <div class="skills-sidebar-header">
            <span class="eyebrow">${ui.skillsUi?.totalCategories || (uk ? 'Категорії' : 'Categories')}</span>
            <span class="skills-total-badge" id="skills-total-badge">${currentVisibleKeys.length}</span>
          </div>
          <nav class="skills-tabs" role="tablist" aria-label="${uk ? 'Категорії компетенцій' : 'Competency categories'}">
            ${groupsHtml}
          </nav>
        </div>
        <div class="skills-sheet" id="skills-sheet" role="tabpanel" aria-live="polite"></div>
      </div>
    `;

    updateSheet();

    $$('[data-skill-domain]').forEach(btn => {
      btn.addEventListener('click', () => {
        const nextDomain = btn.dataset.skillDomain;
        if (activeSkillDomain === nextDomain) return;
        activeSkillDomain = nextDomain;

        const nextVisible = allOrderedCategories.filter(key => categories[key] && isCatInDomain(key));
        if (!nextVisible.includes(activeSkillCategory)) {
          activeSkillCategory = nextVisible[0] || allOrderedCategories[0];
        }
        renderContainer();
      });
    });

    $$('.skills-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (activeSkillCategory === btn.dataset.category) return;
        activeSkillCategory = btn.dataset.category;
        $$('.skills-tab-btn').forEach(b => {
          const isCurrent = b.dataset.category === activeSkillCategory;
          b.classList.toggle('active', isCurrent);
          b.setAttribute('aria-selected', String(isCurrent));
        });
        updateSheet();
      });
    });
  };

  renderContainer();
}
