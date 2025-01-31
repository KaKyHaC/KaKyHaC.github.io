function copyToClipboard(text) {
    // Создаем временный элемент input
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    // Выбираем текст
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Для мобильных устройств
    
    // Копируем текст
    try {
        document.execCommand('copy');
        showNotification('Copied to clipboard!');
    } catch (err) {
        showNotification('Failed to copy');
    }
    
    // Удаляем временный элемент
    document.body.removeChild(tempInput);
}

function showNotification(message) {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Добавляем на страницу
    document.body.appendChild(notification);
    
    // Удаляем через 2 секунды
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
} 