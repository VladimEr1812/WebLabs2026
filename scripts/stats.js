(function() {
    function calculateLoadTime() {
        const startTime = performance.timing.navigationStart;
        const currentTime = new Date().getTime();
        const loadTime = currentTime - startTime;
        console.log('Время загрузки страницы:', loadTime, 'мс');
        const loadTimeElement = document.createElement('div');
        loadTimeElement.textContent = 'Время загрузки страницы: ' + loadTime + ' мс';
        document.body.appendChild(loadTimeElement);
    }

    window.addEventListener('load', calculateLoadTime);
})();

