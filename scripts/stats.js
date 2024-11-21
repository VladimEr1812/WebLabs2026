// Создаем IIFE (Immediately Invoked Function Expression), чтобы скрипт выполнился сразу после загрузки
(function() {
    // Функция для расчета времени загрузки страницы
    function calculateLoadTime() {
        // Получаем время начала загрузки страницы
        const startTime = performance.timing.navigationStart;
        // Получаем текущее время
        const currentTime = new Date().getTime();
        // Вычисляем время загрузки страницы (в миллисекундах)
        const loadTime = currentTime - startTime;
        // Выводим результат в консоль
        console.log('Время загрузки страницы:', loadTime, 'мс');
        // Создаем элемент для вывода времени загрузки на страницу
        const loadTimeElement = document.createElement('div');
        loadTimeElement.textContent = 'Время загрузки страницы: ' + loadTime + ' мс';
        // Добавляем элемент в конец тега <body>
        document.body.appendChild(loadTimeElement);
    }

    // Вызываем функцию calculateLoadTime() после полной загрузки страницы
    window.addEventListener('load', calculateLoadTime);
})();

