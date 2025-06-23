document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('mobile-menu-toggler');
    const mainNavLinks = document.getElementById('main-nav-links');

    if (navbarToggler && mainNavLinks) {
        navbarToggler.addEventListener('click', function() {
            mainNavLinks.classList.toggle('show');
            navbarToggler.classList.toggle('active');
        });

        const navListItems = mainNavLinks.querySelectorAll('.flex-center li');
        navListItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNavLinks.classList.remove('show');
                    navbarToggler.classList.remove('active');
                }
            });
        });

        const contactButton = mainNavLinks.querySelector('.nav_btn .btn');
        if (contactButton) {
            contactButton.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNavLinks.classList.remove('show');
                    navbarToggler.classList.remove('active');
                }
            });
        }
    }
});