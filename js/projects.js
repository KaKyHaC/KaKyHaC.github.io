document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const details = card.querySelector('.project-details');
        const preview = card.querySelector('.project-preview');
        
        // Обработка кликов на мобильных
        card.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // Закрываем все другие открытые карточки
                projectCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        const otherDetails = otherCard.querySelector('.project-details');
                        const otherPreview = otherCard.querySelector('.project-preview');
                        otherDetails.style.display = 'none';
                        otherPreview.style.display = 'block';
                        otherCard.style.height = 'auto';
                    }
                });
                
                // Переключаем текущую карточку
                if (details.style.display === 'block') {
                    details.style.display = 'none';
                    preview.style.display = 'block';
                    card.style.height = 'auto';
                } else {
                    details.style.display = 'block';
                    preview.style.display = 'none';
                    // Плавно разворачиваем карточку
                    requestAnimationFrame(() => {
                        card.style.height = details.scrollHeight + 'px';
                    });
                }
            }
        });
        
        // Сброс стилей при изменении размера окна
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                details.style.display = '';
                preview.style.display = '';
                card.style.height = '280px';
            }
        });
    });
}); 