document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-up');

    function checkPosition() {
        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position - windowHeight <= 0) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // On page load
});
