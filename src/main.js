import './style.css'
import { projects } from './projects.js'
import { experience } from './experience.js'
import { getCompanyConfig } from './companies.js'
import { skillsData } from './skills.js'

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
                <div class="bento-item glass ${spanClass}">
                    <i class="${mapping.icon} bento-icon"></i>
                    <h3>${mapping.title}</h3>
                    <div class="tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;
            skillsContainer.insertAdjacentHTML('beforeend', skillHtml);
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
            const tagsHtml = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');
            
            // Map company to CSS colors
            const compConfig = getCompanyConfig(proj.company);
            const dotStyle = `background-color: ${compConfig.color}; box-shadow: 0 0 8px ${compConfig.color}80;`;

            const projHtml = `
                <div class="glass interactive-project fade-in" data-index="${originalIndex}">
                    <div class="proj-header-compact">
                        <div class="proj-title-row">
                            <div class="proj-title-group">
                                <h3>
                                    ${proj.title}
                                    <div class="company-dot tooltip-wrapper" style="${dotStyle}">
                                        <span class="tooltip-text">${compConfig.shortName}</span>
                                    </div>
                                </h3>
                                <span class="proj-role">${proj.role}</span>
                            </div>
                        </div>
                        <p class="proj-date">${proj.date}</p>
                        <div class="compact-tags">
                            ${tagsHtml}
                        </div>
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
            
            let tasksHtml = '';
            if (exp.tasks && exp.tasks.length > 0) {
                tasksHtml = `<ul class="exp-list" style="margin-top: 15px;">
                                ${exp.tasks.map(t => `<li>${t}</li>`).join('')}
                             </ul>`;
            }

            const expHtml = `
                <div class="timeline-item ${sideClass} fade-in" data-company="${exp.company_name}">
                    <div class="timeline-dot tooltip-wrapper" style="${dotStyle}">
                        <span class="tooltip-text">${compConfig.shortName}</span>
                    </div>
                    <div class="timeline-content glass company-border" style="--comp-color: ${compConfig.color}">
                        <div class="exp-header">
                            <div class="exp-title">
                                <h3>${exp.company_name}</h3>
                                <h4>${exp.role}</h4>
                            </div>
                            <span class="exp-date ${currentClass}">${exp.start_date} – ${exp.end_date}</span>
                        </div>
                        ${tasksHtml}
                    </div>
                </div>
            `;
            expContainer.insertAdjacentHTML('beforeend', expHtml);
        });

        // Add click listener to timeline items for filtering
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                const comp = item.getAttribute('data-company');
                renderProjects(comp);
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
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
