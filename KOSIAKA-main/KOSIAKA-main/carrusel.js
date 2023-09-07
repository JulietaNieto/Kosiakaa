0const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Show the first slide

[currentSlide].classList.add('active');

// Function to show next slide
function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Function to show previous slide
function showPrevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Event listeners for next and previous buttons
document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', showPrevSlide);