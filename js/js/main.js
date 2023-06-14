

/* flickity */

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  wrapAround:true,
  freeScroll: true,
  contain: true,
// disable previous & next buttons and dots
   prevNextButtons: false,
   pageDots: true,
});
/* fin flickiy */

/* cerrar menu */
var menuHamburguesa = document.querySelector(".menu-hamburguesa");
var cajaMenuHamburguesa = document.querySelector(".menu-desplegable-header");
var cierre= document.querySelector('.close');
var cierreCruz= document.querySelector('.closeDos');

console.log(menuHamburguesa)
menuHamburguesa.addEventListener('click', function (){
  cajaMenuHamburguesa.classList.add('visible');
  
});
cierre.addEventListener('click', function(){
  cajaMenuHamburguesa.classList.remove('visible');
});
cierreCruz.addEventListener('click', function(){
  cajaMenuHamburguesa.classList.remove('visible');
});



