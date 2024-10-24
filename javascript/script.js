document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.feature-box');

    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px)';
        window.addEventListener('scroll', () => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.style.transition = 'opacity 0.5s, transform 0.5s';
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    });
});
