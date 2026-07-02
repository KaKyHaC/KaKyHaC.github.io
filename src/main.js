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
        projects.forEach(proj => {
            const tasksHtml = proj.tasks.map(t => `<li>${t}</li>`).join('');
            const tagsHtml = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');
            
            const projHtml = `
                <div class="project-bento glass span-2 interactive-project fade-in">
                    <!-- Compact Header -->
                    <div class="proj-header-compact">
                        <div class="proj-title-group">
                            <h3>${proj.title}</h3>
                            <span class="proj-role">${proj.role} (${proj.date})</span>
                        </div>
                        <div class="proj-toggle-icon">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    
                    <!-- Detailed View -->
                    <div class="proj-details">
                        <div class="proj-media-placeholder" style="background: ${proj.imageColor}">
                            <span class="media-letter">${proj.imagePlaceholder}</span>
                        </div>
                        <p class="proj-desc">${proj.description}</p>
                        
                        <h4 class="proj-subheading">Key Tasks & Achievements</h4>
                        <ul class="proj-tasks">
                            ${tasksHtml}
                        </ul>
                        
                        <div class="tags">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', projHtml);
        });

        // Add Accordion logic
        const interactiveProjects = document.querySelectorAll('.interactive-project');
        interactiveProjects.forEach(proj => {
            const header = proj.querySelector('.proj-header-compact');
            header.addEventListener('click', () => {
                const wasActive = proj.classList.contains('active');
                
                // Optional: Close all other projects
                // interactiveProjects.forEach(p => p.classList.remove('active'));
                
                if (!wasActive) {
                    proj.classList.add('active');
                } else {
                    proj.classList.remove('active');
                }
            });
        });
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
