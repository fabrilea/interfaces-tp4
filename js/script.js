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
    duende.style.transform = "translate(" + 0 + ", " + 0.05 * value + "px" + ")";
    karts.style.transform = "translate(" + 0 + ", " + 0.05 * value + "px" + ")";
})

const sectionCards = document.querySelector(".cards-seccion");
let sectionPeter = document.querySelector(".peter-oculto");
let sectionGwen = document.querySelector(".gwen-oculto");
let sectionMiles = document.querySelector(".miles-oculto");

document.addEventListener("scroll", function () {
  const clientHeight = document.documentElement.clientHeight;
  const sectionCardsY = sectionCards.getBoundingClientRect().y;
  const sectionCardsHeight = sectionCards.getBoundingClientRect().height;
  if (clientHeight > sectionCardsY + (sectionCardsHeight * 2) / 3) {
    sectionPeter.classList.add("mostrar-peter");
    sectionGwen.classList.add("mostrar-gwen");
    sectionMiles.classList.add("mostrar-miles");
  }
  });