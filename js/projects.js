document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (card) { // Проверяем существование элемента
            card.addEventListener('click', function() {
                // Проверяем, что ширина экрана соответствует мобильной версии
                if (window.innerWidth <= 768) {
                    this.classList.toggle('active');
                }
            });
        }
    });
}); 