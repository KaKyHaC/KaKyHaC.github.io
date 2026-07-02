import './style.css'
import { projects } from './projects.js'

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

    // 2. Render Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projects.forEach((proj, index) => {
            const tagsHtml = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');
            
            // Map company to CSS class
            let companyClass = 'company-solo';
            if (proj.company === 'CHI Software') companyClass = 'company-chi';
            if (proj.company === 'Megogo') companyClass = 'company-megogo';
            if (proj.company === 'Nitrix Studio') companyClass = 'company-nitrix';
            if (proj.company === 'IT Company') companyClass = 'company-it';

            const projHtml = `
                <div class="glass interactive-project fade-in" data-index="${index}">
                    <div class="proj-header-compact">
                        <div class="proj-title-row">
                            <div class="proj-title-group">
                                <h3>
                                    ${proj.title}
                                    <div class="company-dot ${companyClass} tooltip-wrapper">
                                        <span class="tooltip-text">${proj.company}</span>
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

        // Modal Logic
        const modal = document.getElementById('project-modal');
        const modalClose = document.getElementById('modal-close');
        
        // Modal DOM elements
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
            const interactiveProjects = document.querySelectorAll('.interactive-project');
            interactiveProjects.forEach(projCard => {
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
                    
                    // Company dot
                    let cClass = 'company-solo';
                    if (p.company === 'CHI Software') cClass = 'company-chi';
                    if (p.company === 'Megogo') cClass = 'company-megogo';
                    if (p.company === 'Nitrix Studio') cClass = 'company-nitrix';
                    if (p.company === 'IT Company') cClass = 'company-it';
                    
                    mCompanyDot.className = `company-dot tooltip-wrapper ${cClass}`;
                    mCompanyTooltip.textContent = p.company;

                    // Reset modal scroll position
                    const modalContainer = modal.querySelector('.modal-container');
                    if (modalContainer) {
                        modalContainer.scrollTop = 0;
                    }

                    // Show modal
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                });
            });

            const closeModal = () => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            };

            modalClose.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
    }

    // 3. Scroll-driven Animations (Fade In)
    // Re-query fadeElements because we just injected new project HTML
    const fadeElements = document.querySelectorAll('.bento-item, .experience-card, .interactive-project');
    
    // Initial setup: add fade-in class to all elements we want to animate
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
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
