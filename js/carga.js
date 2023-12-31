"use strict"
//Cuando se carga la página, obtiene los contenidos del index loading,
//va ejecutando un proceso de conteo. Y cuando dicho proceso termina
//redirije al usuario a la página del juego
window.onload = function(){
    var percent = document.querySelector('.percent');
    var progress = document.querySelector('.progress');
    var text = document.querySelector('.text');
    var count = 4;
    var per = 16;
    var loading = setInterval(animate, 50);
    function animate(){
      if(count == 100 && per == 400){
        percent.classList.add("text-blink");
        text.style.display = "block";
        clearInterval(loading);
      }else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
      }
    }
    setTimeout(callBack_func, 5200);
    function callBack_func() {
        document.location.href = "paginaHome.html";
    }
}