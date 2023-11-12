/*let servicio = document.querySelector('.servicio');

servicio.addEventListener('mouseover', function () {
    console.log('Hola');
    this.classList.remove('border-top-bottom');
    this.classList.add('border-left-right');
});


servicio.addEventListener('mouseout', function () {
    this.classList.add('border-top-bottom');
    this.classList.remove('border-left-right');
});




/********CARROUSEL**********/

var carousel = document.getElementById('carousel');
var slides = carousel.querySelectorAll('.carousel-slides li');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function prevSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}