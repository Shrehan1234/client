document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeInUp');
                } else {
                    entry.target.classList.remove('animate__fadeInUp');
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
});
