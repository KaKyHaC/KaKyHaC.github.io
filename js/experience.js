document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        item.addEventListener('click', () => {
            // Только для мобильных устройств
            if (window.innerWidth <= 768) {
                // Закрываем все другие карточки
                experienceItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Переключаем текущую карточку
                item.classList.toggle('active');
            }
        });
    });

    // Сброс стилей при изменении размера окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            experienceItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}); 