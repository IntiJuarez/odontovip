document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showNextSlide() {
        slideIndex++;
        if (slideIndex === totalSlides) {
            slideIndex = 0;
        }
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000);

});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    const menuLinks = document.querySelectorAll('.navbar-menu a');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if(window.scrollY >= sectionTop) {
                current = section.getAttribute('id')
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});


