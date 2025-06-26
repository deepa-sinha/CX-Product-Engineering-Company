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
                if (window.innerWidth <= 1000) {
                    mainNavLinks.classList.remove('show');
                    navbarToggler.classList.remove('active');
                }
            });
        });

        const contactButton = mainNavLinks.querySelector('.nav_btn .btn');
        if (contactButton) {
            contactButton.addEventListener('click', function() {
                if (window.innerWidth <= 1000) {
                    mainNavLinks.classList.remove('show');
                    navbarToggler.classList.remove('active');
                }
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeadings = document.querySelectorAll('.product-heading');

    accordionHeadings.forEach(heading => {
        heading.addEventListener('click', () => {
            const accordionProduct = heading.closest('.accordion-products');
            const description = accordionProduct.querySelector('.product-description');
            const svgIcon = heading.querySelector('svg');
            const pathElement = svgIcon.querySelector('path');

            description.classList.toggle('hidden');

            const minusPath = 'M19 12.998H5V10.998H19V12.998Z';
            const plusPath = 'M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z';

            if (svgIcon.classList.contains('plus')) {
                pathElement.setAttribute('d', minusPath);
                svgIcon.classList.remove('plus');
                svgIcon.classList.add('minus');
            } else if (svgIcon.classList.contains('minus')) {
                pathElement.setAttribute('d', plusPath);
                svgIcon.classList.remove('minus');
                svgIcon.classList.add('plus');
            }
        });
    });
});