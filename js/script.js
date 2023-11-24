// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector(".header");
var header_img = document.querySelector("#logoHead");
var logo = document.querySelector(".imagen-spidey");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header_img.classList.remove("oculto");
    logo.classList.add("oculto");
  } else {
    header.classList.remove("sticky");
    header_img.classList.add("oculto");
    logo.classList.remove("oculto");
  }
}

let cambiarMenuElement = document.querySelector(".btn-ham");
let hamMenuElement = document.querySelector("#menu-ham");
let imgHam = document.querySelector(".hambur")

cambiarMenuElement.addEventListener("click", () => {
  for (let i = 0; i < hamMenuElement.children.length; i++) {
    hamMenuElement.children[i].classList.toggle("menu-oculto");
  }
  if(hamMenuElement.children[0].classList.contains("menu-oculto")){
    cambio();
    imgHam.src="imagenes/Group 1.png";
    imgHam.style.width = "50px";
  } else{
    cambio();
    imgHam.src="imagenes/cruz.png";
    imgHam.style.width = "60px";
    
  }
  setTimeout(cambio, 1010);
});

function cambio(){
  imgHam.classList.toggle("cambio");
}

let fondo = document.getElementById("img-ciudad");
let tel_1 = document.querySelector(".telaranias-1");
let peter = document.querySelector(".spider-man");
let gwen = document.querySelector(".ghost-spider");
let tel_2 = document.querySelector(".telaranias-2");
let miles = document.querySelector(".miles-morales");
let duende = document.querySelector(".duende-verde");
let karts = document.querySelector(".imagenes-kart");

window.addEventListener("scroll", function(){  
    let value = window.scrollY;

    fondo.style.left = value * 0.3 + "px";
    tel_1.style.left = - value * 0.1 + "px";
    peter.style.left = - value * 0.1 + "px";
    gwen.style.left = - value * 0.5 + "px";
    tel_2.style.left = value * 0.1 + "px";
    miles.style.right = -value * 0.1 + "px";
    duende.style.transform = "translate(" + 0 + ", " + 0.07 * value + "px" + ")";
    karts.style.transform = "translate(" + 0 + ", " + 0.07 * value + "px" + ")";
})

var miDiv = document.querySelector('.duende-verde');

const posicionInicial = 20; // Ajusta según la posición inicial desde la parte superior
let ultimaPosicionScroll = window.scrollY;

const sectionCards = document.querySelector(".cards-seccion");
let sectionPeter = document.querySelector(".peter-oculto");
let sectionGwen = document.querySelector(".gwen-oculto");
let sectionMiles = document.querySelector(".miles-oculto");

document.addEventListener("scroll", function () {
  const clientHeight = document.documentElement.clientHeight;
  const sectionCardsY = sectionCards.getBoundingClientRect().y;
  const sectionCardsHeight = sectionCards.getBoundingClientRect().height;
  if (clientHeight > sectionCardsY + (sectionCardsHeight * 2) / 15) {
    setTimeout(aniadirPeter,100);
    setTimeout(aniadirGwen, 500);
    setTimeout(aniadirMiles,900);
}});

function aniadirPeter(){
  sectionPeter.classList.add("mostrar-peter");
}

function aniadirGwen(){
  sectionGwen.classList.add("mostrar-gwen");
}

function aniadirMiles(){
  sectionMiles.classList.add("mostrar-miles")
}

let img_1 = document.querySelector(".img-1");
let img_2 = document.querySelector(".img-2");
let img_3 = document.querySelector(".img-3");


img_1.addEventListener("mouseover", () => {
  img_1.classList.add("img-1-agrandar");
  img_2.classList.add("img-correr");
  img_3.classList.add("img-correr");
});
img_1.addEventListener("mouseleave", () => {
  img_1.classList.remove("img-1-agrandar");
  img_2.classList.remove("img-correr");
  img_3.classList.remove("img-correr");
});



img_2.addEventListener("mouseover", () => {
  img_2.classList.add("img-2-agrandar");
  img_3.classList.add("img-correr");
});
img_2.addEventListener("mouseleave", () => {
  img_2.classList.remove("img-2-agrandar");
  img_3.classList.remove("img-correr");
});



img_3.addEventListener("mouseover", () => {
  img_3.classList.add("img-3-agrandar");
});
img_3.addEventListener("mouseleave", () => {
  img_3.classList.remove("img-3-agrandar");
});

let fondoHover = document.querySelector(".spiders-bajo");
let gwenHover = document.querySelector(".gwen")
let peterHover = document.querySelector(".peter")
let milesHover = document.querySelector(".miles")
let foot = document.querySelector(".footer-up");

gwenHover.addEventListener("mouseover", () => {
  fondoHover.classList.add("diagonal-rosa");
  document.getElementById("peter-img").src="imagenes/image 231.png";
  document.getElementById("miles-img").src="imagenes/image 230.png";
  foot.style.top = "185px";
  console.log("hola")
});
gwenHover.addEventListener("mouseleave", () => {
  fondoHover.classList.remove("diagonal-rosa");
  document.getElementById("peter-img").src="imagenes/image 234.png";
  document.getElementById("miles-img").src="imagenes/image 236.png";
  foot.style.top = "400px";
  console.log("chau")
});

peterHover.addEventListener("mouseover", () => {
  fondoHover.classList.add("diagonal-azul");
  document.getElementById("gwen-img").src="imagenes/image 232.png";
  document.getElementById("miles-img").src="imagenes/image 230.png";
  foot.style.top = "185px";
  console.log("hola")
});
peterHover.addEventListener("mouseleave", () => {
  fondoHover.classList.remove("diagonal-azul");
  document.getElementById("gwen-img").src="imagenes/image 229.png";
  document.getElementById("miles-img").src="imagenes/image 236.png";
  foot.style.top = "400px";
  console.log("chau")
});

milesHover.addEventListener("mouseover", () => {
  fondoHover.classList.add("diagonal-oscura");
  document.getElementById("gwen-img").src="imagenes/image 232.png";
  document.getElementById("peter-img").src="imagenes/image 231.png";
  foot.style.top = "185px";
  console.log("hola")
});
milesHover.addEventListener("mouseleave", () => {
  fondoHover.classList.remove("diagonal-oscura");
  document.getElementById("gwen-img").src="imagenes/image 229.png";
  document.getElementById("peter-img").src="imagenes/image 234.png";
  foot.style.top = "400px";
  console.log("chau")
});

//window.getComputedStyle(animacion).getPropertyValue('bottom');


let animacion = document.querySelector(".nada");

function mostrarAnimacion(){
  animacion.classList.toggle("sprite");
}

animacion.addEventListener("mouseover", ()=> {

  let y = window.getComputedStyle(animacion).getPropertyValue('bottom');
  let x = window.getComputedStyle(animacion).getPropertyValue('left');
  animacion.classList.add("caida");
  let c = document.querySelector(".caida");
  c.style.setProperty('--posMax', y);
  c.style.setProperty('--x',x);

  setTimeout(quitarCaida, 2350);
});

function quitarCaida(){
  animacion.classList.remove("caida");
}

function cargarAnimacion() {
  mostrarAnimacion();
  // Llama a cargarAnimacion nuevamente después de un tiempo aleatorio
  setTimeout(cargarAnimacion, 2400);
}

// Llama a cargarAnimacion por primera vez después de un tiempo aleatorio
// setTimeout(cargarAnimacion, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000);
let footer = document.querySelector(".nada");
let ejecutado = false;
document.addEventListener("scroll", function () {
  const clientHeight = document.documentElement.clientHeight;
  const footerY = sectionCards.getBoundingClientRect().y;
  const footerHeight = sectionCards.getBoundingClientRect().height;
  if (!ejecutado && clientHeight > footerY + (footerHeight * 2) / 3) {
    ejecutado = true;
    cargarAnimacion();
}});




let game_1 = document.querySelector(".contenido-0");
let game_2 = document.querySelector(".contenido-1");
let game_3 = document.querySelector(".contenido-2");
let game_4 = document.querySelector(".contenido-3");

window.addEventListener("scroll", () => {
  let seccion = document.querySelector(".datos-juego");
  const seccionY = seccion.getBoundingClientRect().y;
  let value = seccionY
  console.log(value)
  if(value >= -200 && value <= 300){
      game_1.classList.add("mostrar-imagen");
      game_2.classList.remove("mostrar-imagen");
  } else if(value >= -900 && value <= -201){
      game_1.classList.remove("mostrar-imagen")
      game_2.classList.add("mostrar-imagen")
      game_3.classList.remove("mostrar-imagen")
  } else if(value >= -1300 && value <= -901){
    game_2.classList.remove("mostrar-imagen")
    game_3.classList.add("mostrar-imagen")
    game_4.classList.remove("mostrar-imagen")
} else if(value >= -1600 && value <= -1301){
    game_3.classList.remove("mostrar-imagen")
    game_4.classList.add("mostrar-imagen")
}
});