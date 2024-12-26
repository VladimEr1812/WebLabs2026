(function() {
    var currentPage = window.location.pathname.split("/").pop();

    var menuItems = document.querySelectorAll('.menu__item');

    menuItems.forEach(function(item) {
        var link = item.querySelector('.menu__link');
        var href = link.getAttribute('href');

        if (href === currentPage) {
            item.classList.add('active');
        }
    });
})();

