document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            const offsetPixels = 100;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offsetPixels;

            // Close the mobile menu if open
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.nav-links');
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');

            // Scroll to the target position with smooth behavior
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Update the navigation bar color based on scroll position
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('white');
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('white');
        } else {
            navbar.classList.remove('white');
        }
    });

    // Toggle mobile menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

 
    const options = {
        threshold: 0.4
    };


    observer.observe(education);
    observer.observe(work);
});
