document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu Toggle
    const menuTrigger = document.getElementById('menu-trigger');
    const nav = document.querySelector('.nav');

    if (menuTrigger && nav) {
        menuTrigger.addEventListener('click', () => {
            menuTrigger.classList.toggle('active');
            nav.classList.toggle('active');

            // Add custom style for mobile nav visibility
            if (nav.classList.contains('active')) {
                nav.style.display = 'block';
                nav.style.position = 'absolute';
                nav.style.top = '80px';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = '#fff';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';

                // Change list layout for mobile
                const list = nav.querySelector('.nav-list');
                if (list) {
                    list.style.display = 'flex';
                    list.style.flexDirection = 'column';
                    list.style.alignItems = 'center';
                    list.style.gap = '20px';
                }
            } else {
                nav.style.display = '';
                nav.style.position = '';
                const list = nav.querySelector('.nav-list');
                if (list) {
                    list.style.display = '';
                    list.style.flexDirection = '';
                }
            }
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (nav && nav.classList.contains('active')) {
                menuTrigger.click();
            }

            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                const headerHeight = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Scroll Effect (Optional: Add shadow/transparency change)
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

});
