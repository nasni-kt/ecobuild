document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the element once it is visible
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.hidden');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
