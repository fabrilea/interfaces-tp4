// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector(".header");
var header_img = document.querySelector(".header-img");
var logo = document.querySelector(".imagen-spidey");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header_img.classList.add("achicarse");
    logo.classList.add("imagen-sticky");
  } else {
    header.classList.remove("sticky");
    header_img.classList.remove("achicarse");
    logo.classList.remove("imagen-sticky");
  }
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
    // duende.scrollTop = duende.scrollTop/2;
    karts.style.transform = "translate(" + 0 + ", " + 0.05 * value + "px" + ")";
})

var miDiv = document.querySelector('.duende-verde');

window.addEventListener('scroll', function() {
    // Si deseas realizar la acción después de un cierto tiempo, puedes usar setTimeout
    setTimeout(function() {
        // Obtén el desplazamiento vertical
        var scrollY = window.scrollY;

        // Calcula la nueva posición del div 
        var nuevaPosicion = scrollY * 0.089 + 'px';

        // Aplica la nueva posición al div
        miDiv.style.transform = "translate(" + 0 + ", " + nuevaPosicion + ")";
        miDiv.style.transition = "smooth";
    }, 5000); // 500 milisegundos de retardo
});


const sectionCards = document.querySelector(".cards-seccion");
let sectionPeter = document.querySelector(".peter-oculto");
let sectionGwen = document.querySelector(".gwen-oculto");
let sectionMiles = document.querySelector(".miles-oculto");

document.addEventListener("scroll", function () {
  const clientHeight = document.documentElement.clientHeight;
  const sectionCardsY = sectionCards.getBoundingClientRect().y;
  const sectionCardsHeight = sectionCards.getBoundingClientRect().height;
  if (clientHeight > sectionCardsY + (sectionCardsHeight * 2) / 3) {
    setTimeout(aniadirPeter,
                100);
    setTimeout(aniadirGwen,
                1000);
    setTimeout(aniadirMiles,
                1900);
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
  console.log("hola")
});
img_1.addEventListener("mouseleave", () => {
  img_1.classList.remove("img-1-agrandar");
  console.log("chau")
});



img_2.addEventListener("mouseover", () => {
  img_2.classList.add("img-2-agrandar");
  console.log("hola")
});
img_2.addEventListener("mouseleave", () => {
  img_2.classList.remove("img-2-agrandar");
  console.log("chau")
});



img_3.addEventListener("mouseover", () => {
  img_3.classList.add("img-1-agrandar");
  console.log("hola")
});
img_3.addEventListener("mouseleave", () => {
  img_3.classList.remove("img-1-agrandar");
  console.log("chau")
});
