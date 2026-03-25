/**
 * Intersection Observer for scroll animations
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'fade-in' class
    const fadeElements = document.querySelectorAll('.fade-in');

    // Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Add 'visible' class when element enters viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animating once to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialise observing
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Handle header visual change on scroll
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.7)';
            header.style.boxShadow = 'none';
        }
    });
});
