import './style.css';
import { loadNamespace, getLang, setLang } from './i18n/index.js';
import { $, $$ } from './utils/dom.js';
import { trackSocialClick } from './analytics.js';
import { enrichProject } from './project-data.js';
import { applyCopy } from './modules/copy.js';
import { observeReveals } from './modules/reveals.js';
import { initCvModal } from './modules/cv-modal.js';
import { initSidebar } from './modules/sidebar.js';
import { initTheme } from './modules/theme.js';
import { renderProfile } from './sections/profile.js';
import { renderDirections } from './sections/directions.js';
import {
  initProjectsState,
  setProjects,
  renderProjectFilters,
  renderProjects,
  syncUrl,
  setActiveDomain,
  setActiveCompany,
  setSearchQuery
} from './sections/projects.js';
import { renderExperience, renderTimelineIntro } from './sections/experience.js';
import { renderSkills } from './sections/skills.js';
import { renderResearch } from './sections/research.js';
import { renderEducation } from './sections/education.js';

async function renderAll() {
  const names = ['ui', 'projects', 'experience', 'education', 'research', 'skills', 'skillsDetails'];
  const loaded = await Promise.allSettled(names.map(name => loadNamespace(name)));
  const data = Object.fromEntries(names.map((name, index) => [
    name,
    loaded[index].status === 'fulfilled' ? loaded[index].value : null
  ]));

  loaded.forEach((result, index) => {
    if (result.status === 'rejected') {
      console.error('[Portfolio] Failed to load ' + names[index], result.reason);
    }
  });

  if (data.projects) {
    const projects = data.projects.map(enrichProject).sort((a, b) => b.sortDate - a.sortDate || a.id.localeCompare(b.id));
    setProjects(projects);
  }

  const renderers = [
    ['copy', () => applyCopy()],
    ['profile', () => data.ui && renderProfile(data.ui)],
    ['directions', () => renderDirections()],
    ['filters', () => renderProjectFilters()],
    ['projects', () => renderProjects()],
    ['experience', () => data.experience && renderExperience(data.experience)],
    ['timeline intro', () => data.experience && renderTimelineIntro(data.experience)],
    ['skills', () => data.skills && data.skillsDetails && data.ui && renderSkills(data.skills, data.skillsDetails, data.ui)],
    ['research', () => data.research && renderResearch(data.research)],
    ['education', () => data.education && renderEducation(data.education)]
  ];

  renderers.forEach(([name, render]) => {
    try {
      render();
    } catch (error) {
      console.error('[Portfolio] Failed to render ' + name, error);
    }
  });

  observeReveals();
}

document.addEventListener('DOMContentLoaded', async () => {
  initProjectsState();
  initSidebar();
  initTheme();
  initCvModal();

  $('#lang-toggle')?.addEventListener('click', async () => setLang(getLang() === 'en' ? 'uk' : 'en', renderAll));

  $('#project-search')?.addEventListener('input', e => {
    setSearchQuery(e.target.value);
    syncUrl();
    renderProjects();
  });

  $('#clear-filter-btn')?.addEventListener('click', () => {
    setActiveDomain('all');
    setActiveCompany(null);
    setSearchQuery('');
    const input = $('#project-search');
    if (input) input.value = '';
    sessionStorage.removeItem('portfolioFilters');
    syncUrl();
    renderProjectFilters();
    renderProjects();
  });

  $$('.social-links a').forEach(a => a.addEventListener('click', () => trackSocialClick(a.title.toLowerCase())));
  $('.dialog-close')?.addEventListener('click', () => $('#skill-dialog')?.close());
  $('#skill-dialog')?.addEventListener('click', e => {
    if (e.target === $('#skill-dialog')) $('#skill-dialog')?.close();
  });

  await renderAll();

  const saved = Number(sessionStorage.getItem('portfolioScroll'));
  if (saved) {
    sessionStorage.removeItem('portfolioScroll');
    requestAnimationFrame(() => scrollTo(0, saved));
  } else if (location.hash) {
    const target = $(location.hash);
    if (target) {
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        target.scrollIntoView();
        requestAnimationFrame(() => document.documentElement.style.removeProperty('scroll-behavior'));
      });
    }
  }
});
