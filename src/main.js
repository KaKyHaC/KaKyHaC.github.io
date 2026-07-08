import './style.css'
import { projects } from './projects.js'
import { experience } from './experience.js'
import { getCompanyConfig } from './companies.js'
import { skillsData } from './skills.js'
import { skillsDetails } from './skillsDetails.js'
import { educationProfile } from './education.js'
import { scientificProfile } from './research.js'
import {
    trackSocialClick,
    trackNavigationClick,
    trackThemeSwitch,
    trackProjectView,
    trackProjectLinkClick
} from './analytics.js'
document.addEventListener('DOMContentLoaded', () => {
    // 0. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check initial theme state
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            if (newTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                trackThemeSwitch('light');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                trackThemeSwitch('dark');
            }
        });
    }

    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetSection = e.currentTarget.getAttribute('href').replace('#', '');
            trackNavigationClick(targetSection);
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                sidebar.classList.remove('menu-open');
            }
        });
    });

    // 1.2 Social Links tracking
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const title = e.currentTarget.getAttribute('title');
            if (title) {
                trackSocialClick(title.toLowerCase());
            }
        });
    });

    // 1.5 Render Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        const skillsMapping = {
            programming_languages: { title: 'Languages', icon: 'fas fa-code', span: 1 },
            android_core_and_ui: { title: 'Android & UI', icon: 'fab fa-android', span: 1 },
            architecture_and_design: { title: 'Architecture', icon: 'fas fa-sitemap', span: 1 },
            asynchrony_and_networking: { title: 'Network & Async', icon: 'fas fa-network-wired', span: 1 },
            databases_and_local_storage: { title: 'Storage', icon: 'fas fa-database', span: 1 },
            cloud_and_backend: { title: 'Cloud & Backend', icon: 'fas fa-cloud', span: 1 },
            dependency_injection: { title: 'DI', icon: 'fas fa-syringe', span: 1 },
            multimedia_hardware_and_camera: { title: 'Media & Hardware', icon: 'fas fa-camera', span: 1 },
            testing_and_debugging: { title: 'Testing & Debugging', icon: 'fas fa-bug', span: 1 },
            monetization_analytics_and_devops: { title: 'DevOps & Growth', icon: 'fas fa-chart-line', span: 1 },
            inferred_game_dev_and_publishing: { title: 'Game Dev & Publishing', icon: 'fas fa-gamepad', span: 2 },
            inferred_ai_and_automation: { title: 'AI & Automation', icon: 'fas fa-robot', span: 2 }
        };

        const categories = skillsData.skills_profile.categories;
        Object.keys(categories).forEach(key => {
            const mapping = skillsMapping[key];
            if (!mapping) return;

            const tagsHtml = categories[key].map(skill => `<span class="tag">${skill}</span>`).join('');
            const spanClass = mapping.span === 2 ? 'span-2' : '';

            const skillHtml = `
                <div class="bento-item glass ${spanClass} skill-card" data-category="${key}" data-title="${mapping.title}" data-icon="${mapping.icon}">
                    <div class="bento-header">
                        <i class="${mapping.icon} bento-icon"></i>
                        <h3>${mapping.title}</h3>
                    </div>
                    <div class="tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;
            skillsContainer.insertAdjacentHTML('beforeend', skillHtml);
        });

        // --- Skill Category Modal ---
        const skillModal = document.getElementById('skill-category-modal');
        const skillModalClose = document.getElementById('skill-modal-close');
        const skillModalIcon = document.getElementById('skill-modal-icon');
        const skillModalTitle = document.getElementById('skill-modal-category-title');
        const skillModalList = document.getElementById('skill-modal-list');

        const closeSkillModal = () => {
            skillModal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        if (skillModal) {
            skillModalClose.addEventListener('click', closeSkillModal);
            skillModal.addEventListener('click', (e) => {
                if (e.target === skillModal) closeSkillModal();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeSkillModal();
            });
        }

        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', () => {
                const key = card.getAttribute('data-category');
                const title = card.getAttribute('data-title');
                const icon = card.getAttribute('data-icon');

                // Populate header
                skillModalIcon.className = `${icon} bento-icon`;
                skillModalTitle.textContent = title;

                // Get skills for this category
                const categorySkills = skillsDetails.filter(s => s.category === key);

                // Render skill items
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

    // 2. Render Projects
    const projectsContainer = document.getElementById('projects-container');
    const filterLabel = document.getElementById('projects-filter-label');
    const clearFilterBtn = document.getElementById('clear-filter-btn');

    // Global observer for fade-in elements
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Modal Logic Setup (DOM elements only queried once)
    const modal = document.getElementById('project-modal');
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

    if (modal) {
        const closeModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        };
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    if (mLinkBtn) {
        mLinkBtn.addEventListener('click', () => {
            if (mTitle.textContent && mLinkBtn.href) {
                trackProjectLinkClick(mTitle.textContent, mLinkBtn.href);
            }
        });
    }

    const renderProjects = (filterCompany) => {
        if (!projectsContainer) return;
        projectsContainer.innerHTML = '';

        if (filterCompany) {
            filterLabel.textContent = `(${getCompanyConfig(filterCompany).shortName})`;
            filterLabel.classList.remove('hidden');
            clearFilterBtn.classList.remove('hidden');
        } else {
            filterLabel.classList.add('hidden');
            clearFilterBtn.classList.add('hidden');
        }

        const filteredProjects = filterCompany 
            ? projects.filter(p => p.company === filterCompany || (filterCompany === 'DᎥᗰᗩᒪᎥᑎᗩ' && p.company === 'Solo Project')) 
            : projects;

        filteredProjects.forEach((proj) => {
            const originalIndex = projects.indexOf(proj);
            const tagsHtml = proj.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('');
            
            // Map company to CSS colors
            const compConfig = getCompanyConfig(proj.company);

            const projHtml = `
                <div class="glass interactive-project fade-in" data-index="${originalIndex}" style="--comp-color: ${compConfig.color}; border-top: 4px solid var(--comp-color);">
                    <div class="proj-card-header">
                        ${proj.icon 
                            ? `<img src="${proj.icon}" class="proj-mini-icon" alt="${proj.title} icon">` 
                            : `<div class="proj-mini-placeholder" style="background: ${proj.imageColor}">
                                   <span class="proj-mini-letter">${proj.imagePlaceholder}</span>
                               </div>`
                        }
                        <h3 class="proj-card-title">
                            ${proj.title}
                        </h3>
                    </div>
                    <p class="proj-short-desc">${proj.description}</p>
                    <div class="compact-tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', projHtml);
        });

        // Re-attach modal listeners
        if (modal) {
            const interactiveProjects = document.querySelectorAll('.interactive-project');
            interactiveProjects.forEach(projCard => {
                // Ensure the fade-in triggers
                observer.observe(projCard);
                
                projCard.addEventListener('click', () => {
                    const idx = projCard.getAttribute('data-index');
                    const p = projects[idx];
                    
                    trackProjectView(p.title);

                    // Populate modal
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
                        mLinkBtn.innerHTML = '<i class="fab fa-google-play"></i> Google Play';
                        mLinkBtn.classList.remove('hidden');
                    } else if (p.githubLink) {
                        mLinkBtn.href = p.githubLink;
                        mLinkBtn.innerHTML = '<i class="fab fa-github"></i> GitHub';
                        mLinkBtn.classList.remove('hidden');
                    } else {
                        mLinkBtn.href = '#';
                        mLinkBtn.classList.add('hidden');
                    }

                    mTitle.textContent = p.title;
                    mRole.textContent = p.role;
                    mDate.textContent = p.date;
                    mDesc.textContent = p.description;
                    
                    mTasks.innerHTML = p.tasks.map(t => `<li>${t}</li>`).join('');
                    mTechs.innerHTML = p.technologies.map(t => `<span class="tag">${t}</span>`).join('');
                    
                    const cConfig = getCompanyConfig(p.company);
                    mCompanyDot.className = `company-dot tooltip-wrapper`;
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
    };

    if (clearFilterBtn) {
        clearFilterBtn.addEventListener('click', () => {
            renderProjects(null);
        });
    }

    // Initial render
    renderProjects(null);

    // 2.5 Render Experience Timeline
    const expContainer = document.getElementById('experience-timeline');
    if (expContainer) {
        experience.forEach((exp, index) => {
            const sideClass = index % 2 === 0 ? 'left' : 'right';
            const compConfig = getCompanyConfig(exp.company_name);
            const currentClass = exp.is_current ? 'current' : '';
            const iconClass = compConfig.icon || 'fas fa-building';
            
            const tasksHtml = (exp.tasks && exp.tasks.length > 0)
                ? exp.tasks.map(t => `<li>${t}</li>`).join('')
                : '';

            // Date floats on the OPPOSITE side of the card
            const dateSide = sideClass === 'left' ? 'right' : 'left';

            // Use image logo if available, else fallback to FA icon
            const iconHtml = compConfig.logoImg
                ? `<img src="${compConfig.logoImg}" alt="${exp.company_name} logo" class="exp-company-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                   <i class="${iconClass}" style="color: ${compConfig.color}; display:none;"></i>`
                : `<i class="${iconClass}" style="color: ${compConfig.color};"></i>`;

            const expHtml = `
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
                                    <i class="fas fa-layer-group"></i> Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            expContainer.insertAdjacentHTML('beforeend', expHtml);
        });

        // --- Accordion: click to expand/collapse on all devices ---
        const timelineItems = document.querySelectorAll('.timeline-item');

        const expandItem = (item) => {
            timelineItems.forEach(other => {
                if (other !== item) other.classList.remove('expanded');
            });
            item.classList.add('expanded');
        };

        const collapseItem = (item) => {
            item.classList.remove('expanded');
        };

        timelineItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.closest('.exp-filter-btn')) return;
                item.classList.contains('expanded') ? collapseItem(item) : expandItem(item);
            });

            // → Projects filter button
            const filterBtn = item.querySelector('.exp-filter-btn');
            if (filterBtn) {
                filterBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const comp = item.getAttribute('data-company');
                    renderProjects(comp);
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            }
        });
    }

    const eduTimelineContainer = document.getElementById('education-timeline');
    if (eduTimelineContainer && educationProfile) {
        let eduHtml = '';
        
        if (educationProfile.higher_education && educationProfile.higher_education.degrees) {
            eduHtml += `
                <div class="edu-group higher-edu-group">
                    <div class="edu-line-left"></div>
            `;
            
            educationProfile.higher_education.degrees.forEach((deg) => {
                const compColor = '#00d2ff'; // A nice blue for education

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
                                ${deg.research_focus ? `<p style="margin-top: 6px;"><strong>Research Focus:</strong> ${deg.research_focus}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            });
            eduHtml += `</div>`; // end higher-edu-group
        }

        if (educationProfile.secondary_education && educationProfile.secondary_education.certificates) {
            // Add connector
            eduHtml += `<div class="edu-connector fade-in"></div>`;
            
            eduHtml += `
                <div class="edu-group secondary-edu-group">
                    <div class="edu-line-right"></div>
            `;
            
            educationProfile.secondary_education.certificates.forEach((cert) => {
                const compColor = '#00a8cc'; 
                eduHtml += `
                    <div class="edu-item right fade-in">
                        <div class="timeline-dot" style="background-color: ${compColor}; box-shadow: 0 0 10px ${compColor}80;"></div>
                        <div class="timeline-content glass edu-card right-card" style="--comp-color: ${compColor}">
                            <div class="exp-header" style="cursor: default;">
                                <div class="exp-title">
                                    <h3>${cert.level}${cert.achievements ? ` (with ${cert.achievements})` : ''}</h3>
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
            eduHtml += `</div>`; // end secondary-edu-group
        }
        eduTimelineContainer.innerHTML = eduHtml;
    }



    // 2.8 Render Research & Publications
    const researchContainer = document.getElementById('research-container');
    const academicProfilesContainer = document.getElementById('academic-profiles');

    if (researchContainer && scientificProfile && scientificProfile.scientific_profile) {
        const data = scientificProfile.scientific_profile;

        // Render Academic Profiles (Badges)
        if (data.academic_profiles && academicProfilesContainer) {
            const profilesHtml = Object.entries(data.academic_profiles).map(([key, url]) => {
                const name = key.replace('_', ' ');
                let iconClass = 'fas fa-link';
                if (key.toLowerCase().includes('orcid')) iconClass = 'fab fa-orcid';
                else if (key.toLowerCase().includes('scopus')) iconClass = 'fas fa-book-open';
                else if (key.toLowerCase().includes('scholar')) iconClass = 'fas fa-graduation-cap';
                return `<a href="${url}" target="_blank" class="tag" style="text-decoration: none; display: inline-flex; align-items: center; gap: 5px; background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-color); padding: 5px 10px; border-radius: 6px;"><i class="${iconClass}"></i> ${name}</a>`;
            }).join('');
            academicProfilesContainer.innerHTML = profilesHtml;
        }

        let researchHtml = '';

        // Patents
        if (data.patents && data.patents.length > 0) {
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
                    <div class="bento-header">
                        <i class="fas fa-certificate bento-icon"></i>
                        <h3>Patents</h3>
                    </div>
                    <div>${patentsHtml}</div>
                </div>
            `;
        }

        // Publications
        if (data.scientific_publications && data.scientific_publications.length > 0) {
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
                    <div class="bento-header">
                        <i class="fas fa-book bento-icon"></i>
                        <h3>Scientific Publications</h3>
                    </div>
                    <div>${pubsHtml}</div>
                </div>
            `;
        }

        // Conferences
        if (data.conference_proceedings && data.conference_proceedings.length > 0) {
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
                    <div class="bento-header">
                        <i class="fas fa-users bento-icon"></i>
                        <h3>Conference Proceedings</h3>
                    </div>
                    <div>${confsHtml}</div>
                </div>
            `;
        }

        // Awards & Activities
        let awardsHtml = '';
        if (data.awards_and_honors && data.awards_and_honors.length > 0) {
            awardsHtml += data.awards_and_honors.map(a => `
                <div style="margin-bottom: 12px;">
                    <h4 style="margin: 0 0 3px 0;">${a.title}</h4>
                    ${a.date ? `<p style="font-size: 0.85em; color: var(--text-secondary); margin: 0 0 3px 0;">${a.date}</p>` : ''}
                    ${a.description ? `<p style="font-size: 0.85em; margin: 0;">${a.description}</p>` : ''}
                </div>
            `).join('');
        }
        
        if (data.academic_activities && data.academic_activities.length > 0) {
            if (awardsHtml !== '') {
                awardsHtml += '<hr style="border-color: var(--border-color); margin: 15px 0;">';
            }
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
                    <div class="bento-header">
                        <i class="fas fa-trophy bento-icon"></i>
                        <h3>Awards & Activities</h3>
                    </div>
                    <div>${awardsHtml}</div>
                </div>
            `;
        }

        researchContainer.innerHTML = researchHtml;
    }

    // 3. Scroll-driven Animations (Fade In)
    const fadeElements = document.querySelectorAll('.bento-item, .experience-card, .timeline-item, .edu-item, .timeline-badge, .edu-connector');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 4. Active Nav Link on Scroll
    const sections = document.querySelectorAll('.section-block');
    
    const updateActiveLink = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
    // Call once to set initial state
    updateActiveLink();
});
