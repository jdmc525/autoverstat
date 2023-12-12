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
/*
var carousel = document.getElementById('carousel');
var slides = carousel.querySelectorAll('.carousel-slides li');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}*/


let images = document.querySelectorAll('.carousel-slides li');
let currentImage = 0;

function changeImage() {
 images[currentImage].style.opacity = 0;
 currentImage = (currentImage + 1) % images.length;
 images[currentImage].style.opacity = 1;
}

setInterval(changeImage, 3000);




/*MENU PHONE*/

var menuPhone = document.querySelector('.menuPhone');
var menuPhoneHeader = document.querySelector('.menuPhoneHeader');


menuPhone.addEventListener('click', togglePhoneMenu);


function togglePhoneMenu() {
    menuPhoneHeader.classList.toggle('hidden')
}



