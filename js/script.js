// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Обработка карточек проектов
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (card) {
            card.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    this.classList.toggle('active');
                }
            });
        }
    });
});

// Обработка сворачивания карточек навыков
document.addEventListener('DOMContentLoaded', function() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    function handleSkillCategories() {
        if (window.innerWidth <= 768) {
            // Сначала удаляем все обработчики
            skillCategories.forEach(category => {
                category.removeEventListener('click', handleClick);
            });
            
            // Затем добавляем новые
            skillCategories.forEach(category => {
                category.addEventListener('click', handleClick);
                // По умолчанию скрываем списки
                const list = category.querySelector('ul');
                if (list) {
                    list.style.display = 'none';
                }
            });
        } else {
            // На десктопе показываем все списки
            skillCategories.forEach(category => {
                const list = category.querySelector('ul');
                if (list) {
                    list.style.display = 'block';
                }
            });
        }
    }

    function handleClick(event) {
        if (event.target.tagName !== 'A') {
            event.preventDefault();
            
            // Закрываем все категории кроме текущей
            skillCategories.forEach(category => {
                if (category !== this) {
                    category.classList.remove('active');
                    const list = category.querySelector('ul');
                    if (list) {
                        list.style.display = 'none';
                    }
                }
            });

            // Переключаем текущую категорию
            this.classList.toggle('active');
            const list = this.querySelector('ul');
            if (list) {
                list.style.display = list.style.display === 'none' ? 'block' : 'none';
            }
        }
    }

    // Инициализация при загрузке
    handleSkillCategories();

    // Обработка изменения размера окна
    window.addEventListener('resize', handleSkillCategories);
}); 