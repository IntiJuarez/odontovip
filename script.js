
document.addEventListener('DOMContentLoaded', () => {

    let slideIndex = 0;
    const slides = document.querySelector('.slide');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showNextSlide() {
        slideIndex++;
        if (slideIndex === totalSlides) {
            slideIndex = 0;
        }
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(showNextSlide,3000);

});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});


