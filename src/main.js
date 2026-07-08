import './style.css'
import { getCompanyConfig } from './companies.js'
import {
    trackSocialClick,
    trackNavigationClick,
    trackThemeSwitch,
    trackProjectView,
    trackProjectLinkClick
} from './analytics.js'
import { loadNamespace, getLang, setLang, getSupportedLangs } from './i18n/index.js'

// ─── Global state ────────────────────────────────────────────────────────────
let projectsData = [];
let currentFilter = null;

// Intersection observer for fade-in elements (initialized once)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { root: null, rootMargin: '0px', threshold: 0.1 });

// ─── Theme ───────────────────────────────────────────────────────────────────
function initTheme() {
    const themeToggles = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
    const themeIcons = document.querySelectorAll('#theme-icon, #mobile-theme-icon');

    if (document.documentElement.getAttribute('data-theme') === 'light') {
        themeIcons.forEach(icon => {
            if (icon) icon.classList.replace('fa-sun', 'fa-moon');
        });
    }

    themeToggles.forEach(toggle => {
        if (toggle) {
            toggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                if (newTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    themeIcons.forEach(icon => icon && icon.classList.replace('fa-sun', 'fa-moon'));
                    trackThemeSwitch('light');
                } else {
                    document.documentElement.removeAttribute('data-theme');
                    localStorage.setItem('theme', 'dark');
                    themeIcons.forEach(icon => icon && icon.classList.replace('fa-moon', 'fa-sun'));
                    trackThemeSwitch('dark');
                }
            });
        }
    });
}

// ─── Mobile menu ─────────────────────────────────────────────────────────────
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');

    const closeMenu = () => {
        if (hamburger) hamburger.classList.remove('active');
        if (sidebar) sidebar.classList.remove('menu-open');
        if (mobileOverlay) mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('menu-open');
            if (mobileOverlay) mobileOverlay.classList.toggle('active');
            
            if (sidebar.classList.contains('menu-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMenu);
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetSection = e.currentTarget.getAttribute('href').replace('#', '');
            trackNavigationClick(targetSection);
            closeMenu();
        });
    });

    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const title = e.currentTarget.getAttribute('title');
            if (title) trackSocialClick(title.toLowerCase());
        });
    });
}

// ─── Language Switcher ───────────────────────────────────────────────────────
function initLangSwitcher() {
    const langToggles = document.querySelectorAll('#lang-toggle, #mobile-lang-toggle');

    const updateBtnText = () => {
        const text = getLang() === 'uk' ? 'EN' : 'UA';
        langToggles.forEach(toggle => {
            if (toggle) toggle.textContent = text;
        });
    };

    updateBtnText();

    langToggles.forEach(toggle => {
        if (toggle) {
            toggle.addEventListener('click', async () => {
                const nextLang = getLang() === 'en' ? 'uk' : 'en';
                await setLang(nextLang, renderAll);
                updateBtnText();
            });
        }
    });
}

// ─── Apply static UI strings ─────────────────────────────────────────────────
function applyUI(ui) {
    // meta
    document.documentElement.lang = ui.meta.lang;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = ui.meta.description;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = ui.meta.ogTitle;

    // Profile sidebar
    const el = id => document.getElementById(id);
    setText(el('profile-role'), ui.profile.role);
    setText(el('profile-tagline'), ui.profile.tagline);

    // Nav links
    setText(el('nav-about'), ui.nav.about);
    setText(el('nav-skills'), ui.nav.skills);
    setText(el('nav-experience'), ui.nav.experience);
    setText(el('nav-projects'), ui.nav.projects);
    setText(el('nav-education'), ui.nav.education);
    setText(el('nav-research'), ui.nav.research);

    // Section titles
    setText(el('section-title-about'), ui.sections.about);
    setText(el('section-title-skills'), ui.sections.skills);
    setText(el('section-title-experience'), ui.sections.experience);
    setText(el('section-title-projects'), ui.sections.projects);
    setText(el('section-title-education'), ui.sections.education);
    setText(el('section-title-research'), ui.sections.research);

    // About bento content
    setHTML(el('about-title-1'), ui.about.title1);
    setHTML(el('about-bio-1'), ui.about.bio1);
    setHTML(el('about-bio-2'), ui.about.bio2);
    setHTML(el('about-bio-3'), ui.about.bio3);
    setHTML(el('about-title-2'), ui.about.title2);
    setHTML(el('about-leadership-1'), ui.about.leadership1);
    setHTML(el('about-leadership-2'), ui.about.leadership2);
    setHTML(el('about-title-3'), ui.about.title3);
    setHTML(el('about-research-1'), ui.about.research1);
    setHTML(el('about-research-2'), ui.about.research2);

    // Clear filter button
    const clearBtn = el('clear-filter-btn');
    if (clearBtn) {
        const clearIcon = clearBtn.querySelector('i');
        clearBtn.innerHTML = '';
        if (clearIcon) clearBtn.appendChild(clearIcon);
        clearBtn.appendChild(document.createTextNode(' ' + ui.projects.clearFilter));
    }

    // Research section title (inline, before badges)
    setText(el('section-title-research'), ui.sections.research);

    // Store for use in modals
    window._ui = ui;
}

function setText(el, text) {
    if (el && text !== undefined) el.textContent = text;
}

function setHTML(el, html) {
    if (el && html !== undefined) el.innerHTML = html;
}

// ─── Skills ──────────────────────────────────────────────────────────────────
function renderSkills(skills, skillsDetails, ui) {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    const skillsMapping = {
        programming_languages:          { key: 'programming_languages',          icon: 'fas fa-code',          span: 1 },
        android_core_and_ui:            { key: 'android_core_and_ui',            icon: 'fab fa-android',       span: 1 },
        architecture_and_design:        { key: 'architecture_and_design',        icon: 'fas fa-sitemap',       span: 1 },
        asynchrony_and_networking:      { key: 'asynchrony_and_networking',      icon: 'fas fa-network-wired', span: 1 },
        databases_and_local_storage:    { key: 'databases_and_local_storage',    icon: 'fas fa-database',      span: 1 },
        cloud_and_backend:              { key: 'cloud_and_backend',              icon: 'fas fa-cloud',         span: 1 },
        dependency_injection:           { key: 'dependency_injection',           icon: 'fas fa-syringe',       span: 1 },
        multimedia_hardware_and_camera: { key: 'multimedia_hardware_and_camera', icon: 'fas fa-camera',        span: 1 },
        testing_and_debugging:          { key: 'testing_and_debugging',          icon: 'fas fa-bug',           span: 1 },
        monetization_analytics_and_devops: { key: 'monetization_analytics_and_devops', icon: 'fas fa-chart-line', span: 1 },
        inferred_game_dev_and_publishing:  { key: 'inferred_game_dev_and_publishing',  icon: 'fas fa-gamepad',    span: 2 },
        inferred_ai_and_automation:        { key: 'inferred_ai_and_automation',        icon: 'fas fa-robot',      span: 2 },
    };

    const categories = skills.skills_profile.categories;
    skillsContainer.innerHTML = '';

    Object.keys(categories).forEach(key => {
        const mapping = skillsMapping[key];
        if (!mapping) return;
        const title = ui.skills[key] || key;
        const tagsHtml = categories[key].map(s => `<span class="tag">${s}</span>`).join('');
        const spanClass = mapping.span === 2 ? 'span-2' : '';

        skillsContainer.insertAdjacentHTML('beforeend', `
            <div class="bento-item glass ${spanClass} skill-card"
                 data-category="${key}"
                 data-title="${title}"
                 data-icon="${mapping.icon}">
                <div class="bento-header">
                    <i class="${mapping.icon} bento-icon"></i>
                    <h3>${title}</h3>
                </div>
                <div class="tags">${tagsHtml}</div>
            </div>
        `);
    });

    initSkillModal(skillsDetails);
}

function initSkillModal(skillsDetails) {
    const skillModal = document.getElementById('skill-category-modal');
    const skillModalClose = document.getElementById('skill-modal-close');
    const skillModalIcon = document.getElementById('skill-modal-icon');
    const skillModalTitle = document.getElementById('skill-modal-category-title');
    const skillModalList = document.getElementById('skill-modal-list');

    if (!skillModal) return;

    const closeSkillModal = () => {
        skillModal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    // Remove old listeners by cloning
    const newClose = skillModalClose.cloneNode(true);
    skillModalClose.parentNode.replaceChild(newClose, skillModalClose);
    newClose.addEventListener('click', closeSkillModal);
    skillModal.addEventListener('click', e => { if (e.target === skillModal) closeSkillModal(); });

    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-category');
            const title = card.getAttribute('data-title');
            const icon = card.getAttribute('data-icon');

            skillModalIcon.className = `${icon} bento-icon`;
            skillModalTitle.textContent = title;

            const categorySkills = skillsDetails.filter(s => s.category === key);
            skillModalList.innerHTML = categorySkills.map((s, i) => `
                <div class="skill-modal-item${i > 0 ? ' skill-modal-divider' : ''}">
                    <p class="skill-modal-name">${s.skill}</p>
                    <p class="skill-modal-desc">${s.description}</p>
                    <p class="skill-modal-usage"><span class="skill-usage-icon">💻</span>${s.usage}</p>
                </div>
            `).join('');

            skillModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            skillModalList.scrollTop = 0;
        });
    });
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function renderProjects(filterCompany = null) {
    const projectsContainer = document.getElementById('projects-container');
    const filterLabel = document.getElementById('projects-filter-label');
    const clearFilterBtn = document.getElementById('clear-filter-btn');
    if (!projectsContainer) return;

    currentFilter = filterCompany;
    projectsContainer.innerHTML = '';

    if (filterCompany) {
        filterLabel.textContent = `(${getCompanyConfig(filterCompany).shortName})`;
        filterLabel.classList.remove('hidden');
        clearFilterBtn.classList.remove('hidden');
    } else {
        filterLabel.classList.add('hidden');
        clearFilterBtn.classList.add('hidden');
    }

    const filtered = filterCompany
        ? projectsData.filter(p =>
            p.company === filterCompany ||
            (filterCompany === 'DᎥᗰᗩᒪᎥᑎᗩ' && p.company === 'Solo Project')
          )
        : projectsData;

    filtered.forEach(proj => {
        const originalIndex = projectsData.indexOf(proj);
        const tagsHtml = proj.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('');
        const compConfig = getCompanyConfig(proj.company);

        projectsContainer.insertAdjacentHTML('beforeend', `
            <div class="glass interactive-project fade-in" data-index="${originalIndex}"
                 style="--comp-color: ${compConfig.color}; border-top: 4px solid var(--comp-color);">
                <div class="proj-card-header">
                    ${proj.icon
                        ? `<img src="${proj.icon}" class="proj-mini-icon" alt="${proj.title} icon">`
                        : `<div class="proj-mini-placeholder" style="background: ${proj.imageColor}">
                               <span class="proj-mini-letter">${proj.imagePlaceholder}</span>
                           </div>`
                    }
                    <h3 class="proj-card-title">${proj.title}</h3>
                </div>
                <p class="proj-short-desc">${proj.description}</p>
                <div class="compact-tags">${tagsHtml}</div>
            </div>
        `);
    });

    initProjectModal();
}

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const modalClose = document.getElementById('modal-close');
    const mImage = document.getElementById('modal-image');
    const mLetter = document.getElementById('modal-letter');
    const mTitle = document.getElementById('modal-title');
    const mRole = document.getElementById('modal-role');
    const mDate = document.getElementById('modal-date');
    const mDesc = document.getElementById('modal-desc');
    const mTasks = document.getElementById('modal-tasks');
    const mTechs = document.getElementById('modal-techs');
    const mCompanyDot = document.getElementById('modal-company-dot');
    const mCompanyTooltip = document.getElementById('modal-company-tooltip');
    const mLinkBtn = document.getElementById('modal-link-btn');

    const ui = window._ui || {};

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    // Clone to remove stale event listeners
    const newClose = modalClose.cloneNode(true);
    modalClose.parentNode.replaceChild(newClose, modalClose);
    newClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

    if (mLinkBtn) {
        mLinkBtn.addEventListener('click', () => {
            if (mTitle.textContent && mLinkBtn.href) {
                trackProjectLinkClick(mTitle.textContent, mLinkBtn.href);
            }
        });
    }

    document.querySelectorAll('.interactive-project').forEach(card => {
        observer.observe(card);

        card.addEventListener('click', () => {
            const idx = card.getAttribute('data-index');
            const p = projectsData[idx];
            trackProjectView(p.title);

            if (p.banner) {
                mImage.style.background = `url(${p.banner}) center/cover no-repeat`;
                mLetter.textContent = '';
            } else if (p.icon) {
                mImage.style.background = `url(${p.icon}) center/contain no-repeat ${p.imageColor}`;
                mLetter.textContent = '';
            } else {
                mImage.style.background = p.imageColor;
                mLetter.textContent = p.imagePlaceholder;
            }

            if (p.playStoreLink) {
                mLinkBtn.href = p.playStoreLink;
                mLinkBtn.innerHTML = `<i class="fab fa-google-play"></i> ${ui.projects?.googlePlay || 'Google Play'}`;
                mLinkBtn.classList.remove('hidden');
            } else if (p.githubLink) {
                mLinkBtn.href = p.githubLink;
                mLinkBtn.innerHTML = `<i class="fab fa-github"></i> ${ui.projects?.github || 'GitHub'}`;
                mLinkBtn.classList.remove('hidden');
            } else {
                mLinkBtn.href = '#';
                mLinkBtn.classList.add('hidden');
            }

            mTitle.textContent = p.title;
            mRole.textContent = p.role;
            mDate.textContent = p.date;
            mDesc.textContent = p.description;

            // Update modal subheadings
            const achievementsHeading = document.querySelector('.proj-subheading:first-of-type');
            const technologiesHeading = document.querySelectorAll('.proj-subheading')[1];
            if (achievementsHeading) achievementsHeading.textContent = ui.projects?.keyAchievements || 'Key Achievements';
            if (technologiesHeading) technologiesHeading.textContent = ui.projects?.technologies || 'Technologies';

            mTasks.innerHTML = p.tasks.map(t => `<li>${t}</li>`).join('');
            mTechs.innerHTML = p.technologies.map(t => `<span class="tag">${t}</span>`).join('');

            const cConfig = getCompanyConfig(p.company);
            mCompanyDot.className = 'company-dot tooltip-wrapper';
            mCompanyDot.style.backgroundColor = cConfig.color;
            mCompanyDot.style.boxShadow = `0 0 8px ${cConfig.color}80`;
            mCompanyTooltip.textContent = cConfig.shortName;

            const modalContainer = modal.querySelector('.modal-container');
            if (modalContainer) modalContainer.scrollTop = 0;

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });
}

// ─── Experience ───────────────────────────────────────────────────────────────
function renderExperience(experience, ui) {
    const expContainer = document.getElementById('experience-timeline');
    if (!expContainer) return;
    expContainer.innerHTML = '';

    experience.forEach((exp, index) => {
        const sideClass = index % 2 === 0 ? 'left' : 'right';
        const compConfig = getCompanyConfig(exp.company_name);
        const currentClass = exp.is_current ? 'current' : '';
        const iconClass = compConfig.icon || 'fas fa-building';
        const dateSide = sideClass === 'left' ? 'right' : 'left';
        const projectsBtnLabel = ui.experience?.projectsBtn || 'Projects';

        const tasksHtml = (exp.tasks?.length > 0)
            ? exp.tasks.map(t => `<li>${t}</li>`).join('')
            : '';

        const iconHtml = compConfig.logoImg
            ? `<img src="${compConfig.logoImg}" alt="${exp.company_name} logo" class="exp-company-logo"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <i class="${iconClass}" style="color: ${compConfig.color}; display:none;"></i>`
            : `<i class="${iconClass}" style="color: ${compConfig.color};"></i>`;

        expContainer.insertAdjacentHTML('beforeend', `
            <div class="timeline-item ${sideClass} fade-in" data-company="${exp.company_name}">
                <div class="exp-date-outside ${dateSide} ${currentClass}" style="--comp-color: ${compConfig.color}">
                    ${exp.start_date} – ${exp.end_date}
                </div>
                <div class="timeline-dot" style="background-color: ${compConfig.color}; box-shadow: 0 0 10px ${compConfig.color}80;"></div>
                <div class="timeline-content glass company-border" style="--comp-color: ${compConfig.color}">
                    <div class="exp-header">
                        <div class="exp-icon-wrap" style="background: ${compConfig.color}20; border: 1px solid ${compConfig.color}40;">
                            ${iconHtml}
                        </div>
                        <div class="exp-title">
                            <h3>${exp.company_name}</h3>
                            <h4>${exp.role}</h4>
                        </div>
                        <div class="exp-chevron"><i class="fas fa-chevron-down"></i></div>
                    </div>
                    <div class="exp-tasks-wrapper">
                        <div class="exp-tasks-inner">
                            <ul class="exp-list">${tasksHtml}</ul>
                            <button class="exp-filter-btn" data-company="${exp.company_name}">
                                <i class="fas fa-layer-group"></i> ${projectsBtnLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

    initExperienceAccordion();
}

function initExperienceAccordion() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', e => {
            if (e.target.closest('.exp-filter-btn')) return;
            if (item.classList.contains('expanded')) {
                item.classList.remove('expanded');
            } else {
                timelineItems.forEach(other => other.classList.remove('expanded'));
                item.classList.add('expanded');
            }
        });

        const filterBtn = item.querySelector('.exp-filter-btn');
        if (filterBtn) {
            filterBtn.addEventListener('click', e => {
                e.stopPropagation();
                const comp = item.getAttribute('data-company');
                renderProjects(comp);
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    });
}

// ─── Education ────────────────────────────────────────────────────────────────
function renderEducation(educationProfile, ui) {
    const eduTimelineContainer = document.getElementById('education-timeline');
    if (!eduTimelineContainer || !educationProfile) return;

    let eduHtml = '';
    const researchFocusLabel = ui.education?.researchFocus || 'Research Focus:';

    if (educationProfile.higher_education?.degrees) {
        eduHtml += `<div class="edu-group higher-edu-group"><div class="edu-line-left"></div>`;

        educationProfile.higher_education.degrees.forEach(deg => {
            const compColor = '#00d2ff';
            eduHtml += `
                <div class="edu-item left fade-in">
                    <div class="timeline-dot" style="background-color: ${compColor}; box-shadow: 0 0 10px ${compColor}80;"></div>
                    <div class="timeline-content glass edu-card left-card" style="--comp-color: ${compColor}">
                        <div class="exp-header" style="cursor: default;">
                            <div class="exp-title">
                                <h3>${deg.level}</h3>
                                <h4>${deg.specialty}${deg.educational_program ? ` (${deg.educational_program})` : ''}</h4>
                            </div>
                            <div class="exp-header-right">
                                <span class="exp-date">${deg.start_year} – ${deg.end_year}</span>
                            </div>
                        </div>
                        <div class="edu-details">
                            <p>${deg.graduation_details}${deg.diploma_id ? ` (ID: ${deg.diploma_id})` : ''}</p>
                            ${deg.research_focus
                                ? `<p style="margin-top: 6px;"><strong>${researchFocusLabel}</strong> ${deg.research_focus}</p>`
                                : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        eduHtml += `</div>`;
    }

    if (educationProfile.secondary_education?.certificates) {
        eduHtml += `<div class="edu-connector fade-in"></div>`;
        eduHtml += `<div class="edu-group secondary-edu-group"><div class="edu-line-right"></div>`;

        educationProfile.secondary_education.certificates.forEach(cert => {
            const compColor = '#00a8cc';
            eduHtml += `
                <div class="edu-item right fade-in">
                    <div class="timeline-dot" style="background-color: ${compColor}; box-shadow: 0 0 10px ${compColor}80;"></div>
                    <div class="timeline-content glass edu-card right-card" style="--comp-color: ${compColor}">
                        <div class="exp-header" style="cursor: default;">
                            <div class="exp-title">
                                <h3>${cert.level}${cert.achievements ? ` (${cert.achievements})` : ''}</h3>
                            </div>
                            <div class="exp-header-right">
                                <span class="exp-date">${cert.graduation_year}</span>
                            </div>
                        </div>
                        <div class="edu-details">
                            <p>${cert.graduation_details}${cert.certificate_id ? ` (ID: ${cert.certificate_id})` : ''}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        eduHtml += `</div>`;
    }

    eduTimelineContainer.innerHTML = eduHtml;
}

// ─── Research ─────────────────────────────────────────────────────────────────
function renderResearch(researchData, ui) {
    const researchContainer = document.getElementById('research-container');
    const academicProfilesContainer = document.getElementById('academic-profiles');
    if (!researchContainer || !researchData) return;

    const data = researchData;

    // Academic profile badges
    if (data.academic_profiles && academicProfilesContainer) {
        academicProfilesContainer.innerHTML = Object.entries(data.academic_profiles).map(([key, url]) => {
            const name = key.replace('_', ' ');
            let iconClass = 'fas fa-link';
            if (key.toLowerCase().includes('orcid')) iconClass = 'fab fa-orcid';
            else if (key.toLowerCase().includes('scopus')) iconClass = 'fas fa-book-open';
            else if (key.toLowerCase().includes('scholar')) iconClass = 'fas fa-graduation-cap';
            return `<a href="${url}" target="_blank" class="tag" style="text-decoration: none; display: inline-flex; align-items: center; gap: 5px; background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-color); padding: 5px 10px; border-radius: 6px;"><i class="${iconClass}"></i> ${name}</a>`;
        }).join('');
    }

    let researchHtml = '';

    // Patents
    if (data.patents?.length > 0) {
        const patentsHtml = data.patents.map(p => `
            <div style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 15px;">
                <h4 style="margin: 0 0 5px 0;">${p.title}</h4>
                <p style="font-size: 0.9em; color: var(--text-secondary); margin: 0 0 5px 0;"><strong>${p.patent_number}</strong> | ${p.issue_date}</p>
                <p style="font-size: 0.9em; margin: 0 0 8px 0;"><em>${p.authors.join(', ')}</em></p>
                <p style="font-size: 0.85em; color: var(--text-secondary); margin: 0; line-height: 1.5;">${p.description}</p>
            </div>
        `).join('');
        researchHtml += `
            <div class="bento-item glass span-2 fade-in">
                <div class="bento-header"><i class="fas fa-certificate bento-icon"></i><h3>${ui.research?.patents || 'Patents'}</h3></div>
                <div>${patentsHtml}</div>
            </div>
        `;
    }

    // Publications
    if (data.scientific_publications?.length > 0) {
        const pubsHtml = data.scientific_publications.map(p => `
            <div style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 15px;">
                <h4 style="margin: 0 0 5px 0;">${p.title}</h4>
                <p style="font-size: 0.9em; margin: 0 0 5px 0;"><em>${p.authors.join(', ')}</em></p>
                <p style="font-size: 0.85em; color: var(--text-secondary); margin: 0;">${p.journal} (${p.year})</p>
                <div style="margin-top: 8px; display: flex; gap: 5px; flex-wrap: wrap;">
                    <span class="tag" style="font-size: 0.75em; padding: 2px 8px;">${p.indexing}</span>
                    ${p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" class="tag" style="font-size: 0.75em; padding: 2px 8px; text-decoration: none;"><i class="fas fa-external-link-alt"></i> DOI</a>` : ''}
                </div>
            </div>
        `).join('');
        researchHtml += `
            <div class="bento-item glass span-2 fade-in">
                <div class="bento-header"><i class="fas fa-book bento-icon"></i><h3>${ui.research?.publications || 'Scientific Publications'}</h3></div>
                <div>${pubsHtml}</div>
            </div>
        `;
    }

    // Conferences
    if (data.conference_proceedings?.length > 0) {
        const confsHtml = data.conference_proceedings.map(c => `
            <div style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 15px;">
                <h4 style="margin: 0 0 5px 0;">${c.title}</h4>
                <p style="font-size: 0.9em; margin: 0 0 5px 0;"><em>${c.authors.join(', ')}</em></p>
                <p style="font-size: 0.85em; color: var(--text-secondary); margin: 0;">${c.conference} (${c.year})</p>
                ${c.doi ? `<div style="margin-top: 8px;"><a href="https://doi.org/${c.doi}" target="_blank" class="tag" style="font-size: 0.75em; padding: 2px 8px; text-decoration: none;"><i class="fas fa-external-link-alt"></i> DOI</a></div>` : ''}
            </div>
        `).join('');
        researchHtml += `
            <div class="bento-item glass fade-in">
                <div class="bento-header"><i class="fas fa-users bento-icon"></i><h3>${ui.research?.conferences || 'Conference Proceedings'}</h3></div>
                <div>${confsHtml}</div>
            </div>
        `;
    }

    // Awards & Activities
    let awardsHtml = '';
    if (data.awards_and_honors?.length > 0) {
        awardsHtml += data.awards_and_honors.map(a => `
            <div style="margin-bottom: 12px;">
                <h4 style="margin: 0 0 3px 0;">${a.title}</h4>
                ${a.date ? `<p style="font-size: 0.85em; color: var(--text-secondary); margin: 0 0 3px 0;">${a.date}</p>` : ''}
                ${a.description ? `<p style="font-size: 0.85em; margin: 0;">${a.description}</p>` : ''}
            </div>
        `).join('');
    }
    if (data.academic_activities?.length > 0) {
        if (awardsHtml !== '') awardsHtml += '<hr style="border-color: var(--border-color); margin: 15px 0;">';
        awardsHtml += data.academic_activities.map(a => `
            <div style="margin-bottom: 12px;">
                <h4 style="margin: 0 0 3px 0;">${a.role}</h4>
                <p style="font-size: 0.85em; margin: 0 0 3px 0;">${a.event}</p>
                <p style="font-size: 0.85em; color: var(--text-secondary); margin: 0;">${a.date}</p>
            </div>
        `).join('');
    }
    if (awardsHtml !== '') {
        researchHtml += `
            <div class="bento-item glass fade-in">
                <div class="bento-header"><i class="fas fa-trophy bento-icon"></i><h3>${ui.research?.awards || 'Awards & Activities'}</h3></div>
                <div>${awardsHtml}</div>
            </div>
        `;
    }

    researchContainer.innerHTML = researchHtml;
}

// ─── Scroll animations ────────────────────────────────────────────────────────
function initScrollAnimations() {
    document.querySelectorAll('.bento-item, .experience-card, .timeline-item, .edu-item, .timeline-badge, .edu-connector').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ─── Active nav link ──────────────────────────────────────────────────────────
function initActiveNavLink() {
    const sections = document.querySelectorAll('.section-block');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateActiveLink = () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= (section.offsetTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    };

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// ─── Clear filter button ──────────────────────────────────────────────────────
function initClearFilter() {
    const clearFilterBtn = document.getElementById('clear-filter-btn');
    if (clearFilterBtn) {
        clearFilterBtn.addEventListener('click', () => renderProjects(null));
    }
}

// ─── Escape key for modals ────────────────────────────────────────────────────
function initEscapeKey() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.getElementById('project-modal')?.classList.add('hidden');
            document.getElementById('skill-category-modal')?.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
}

// ─── renderAll: load all namespaces and re-render ─────────────────────────────
export async function renderAll() {
    // Load all namespaces in parallel (cached after first load)
    const [ui, projects, experience, education, research, skills, skillsDetails] = await Promise.all([
        loadNamespace('ui'),
        loadNamespace('projects'),
        loadNamespace('experience'),
        loadNamespace('education'),
        loadNamespace('research'),
        loadNamespace('skills'),
        loadNamespace('skillsDetails'),
    ]);

    // Update global projects reference
    projectsData = projects;

    // Apply static UI strings
    applyUI(ui);

    // Re-render all dynamic sections
    renderSkills(skills, skillsDetails, ui);
    renderProjects(currentFilter);
    renderExperience(experience, ui);
    renderEducation(education, ui);
    renderResearch(research, ui);

    // Re-run scroll animations for new DOM elements
    initScrollAnimations();
}

// ─── Entry point ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initMobileMenu();
    initLangSwitcher();
    initClearFilter();
    initEscapeKey();
    initActiveNavLink();

    await renderAll();
});
