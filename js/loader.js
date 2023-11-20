const loader = document.querySelector(".loader-wrapper");
const numero = document.querySelector(".contador");

window.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => { loader.classList.add("loader-hidden");}, 5000);
    let progreso = 0;
    var id = setInterval(contador, 40);
    function contador() {
      if(progreso == 100){
        clearInterval(id);
      }else{
        progreso++;
        numero.innerHTML = progreso  + "%";
        //console.log(progreso);
      }
    }
});
