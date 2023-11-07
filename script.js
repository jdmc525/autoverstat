let servicio = document.querySelector('.servicio');

servicio.addEventListener('mouseover', function () {
    console.log('Hola');
    this.classList.remove('border-top-bottom');
    this.classList.add('border-left-right');
});


servicio.addEventListener('mouseout', function () {
    this.classList.add('border-top-bottom');
    this.classList.remove('border-left-right');
});