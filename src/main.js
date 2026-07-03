import './style.css'
import { projects } from './projects.js'
import { experience } from './experience.js'
import { getCompanyConfig } from './companies.js'
import { skillsData } from './skills.js'
import { skillsDetails } from './skillsDetails.js'

document.addEventListener('DOMContentLoaded', () => {
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
        link.addEventListener('click', () => {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                sidebar.classList.remove('menu-open');
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
                        <div class="proj-mini-placeholder" style="background: ${proj.imageColor}">
                            <span class="proj-mini-letter">${proj.imagePlaceholder}</span>
                        </div>
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

                    // Populate modal
                    mImage.style.background = p.imageColor;
                    mLetter.textContent = p.imagePlaceholder;
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
            const dotStyle = `background-color: ${compConfig.color}; box-shadow: 0 0 8px ${compConfig.color}80;`;
            const currentClass = exp.is_current ? 'current' : '';
            
            const tasksHtml = (exp.tasks && exp.tasks.length > 0)
                ? exp.tasks.map(t => `<li>${t}</li>`).join('')
                : '';

            const expHtml = `
                <div class="timeline-item ${sideClass} fade-in" data-company="${exp.company_name}">
                    <div class="timeline-content glass company-border" style="--comp-color: ${compConfig.color}">
                        <div class="exp-header">
                            <div class="exp-title">
                                <h3>${exp.company_name}</h3>
                                <h4>${exp.role}</h4>
                            </div>
                            <div class="exp-header-right">
                                <span class="exp-date ${currentClass}">${exp.start_date} – ${exp.end_date}</span>
                                <div class="exp-chevron"><i class="fas fa-chevron-down"></i></div>
                            </div>
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

    // 3. Scroll-driven Animations (Fade In)
    const fadeElements = document.querySelectorAll('.bento-item, .experience-card, .timeline-item');
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
