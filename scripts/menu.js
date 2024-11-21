(function() {
    // Получаем текущую страницу из URL
    var currentPage = window.location.pathname.split("/").pop();

    // Получаем все элементы списка меню
    var menuItems = document.querySelectorAll('.menu__item');

    // Перебираем каждый элемент списка меню
    menuItems.forEach(function(item) {
        // Получаем ссылку внутри элемента списка
        var link = item.querySelector('.menu__link');
        // Получаем значение атрибута 'href' ссылки
        var href = link.getAttribute('href');

        // Если значение атрибута 'href' совпадает с текущей страницей
        if (href === currentPage) {
            // Добавляем класс 'active' к элементу списка
            item.classList.add('active');
        }
    });
})();

