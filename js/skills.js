document.addEventListener('DOMContentLoaded', () => {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Только для мобильных устройств
            if (window.innerWidth <= 768) {
                // Закрываем все другие категории
                skillCategories.forEach(otherCategory => {
                    if (otherCategory !== category) {
                        otherCategory.classList.remove('active');
                    }
                });
                
                // Переключаем текущую категорию
                category.classList.toggle('active');
            }
        });
    });

    // Сброс стилей при изменении размера окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            skillCategories.forEach(category => {
                category.classList.remove('active');
            });
        }
    });
}); 