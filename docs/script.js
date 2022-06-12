document.querySelectorAll(".table-input").forEach(el => {
    el.addEventListener("click", e => {
    console.log(el);
      if((e.target).classList.contains("table-input")){
        console.log("si");
      }  
      e.classList.add("selected");
      const id = e.target.getAttribute("id");
      /*console.log(e.target);*/
    });
});

function select(){
    var tabla_disponibles = document.getElementById('tabla-disponibles');
}

var tabla = document.querySelectorAll(".table-input")
//console.log(tabla)

function validar(){

}


function consultar(){
    var tabla_disponibles = document.getElementById('tabla-disponibles');
    tabla_disponibles.style.display = 'block';
}


var btn_reservar = document.getElementById('btn-reservar');
var c_terminos = document.getElementById('cTERMINOS');

c_terminos.addEventListener('click', function() {
    if(c_terminos.checked) {
        btn_reservar.style.display = 'block';
    } else {
        btn_reservar.style.display = 'none';
    }
});







/*var abrirVentana = document.querySelector("#abrir-ventana");
var cerrarVentana = document.querySelector("#cerrar-ventana");
var ventanaTerminar = document.querySelector("#ventana-terminar");
var message = document.querySelector('.contenido-ventana');

abrirVentana.addEventListener("click", function(){
    ventanaTerminar.showModal();
})

cerrarVentana.addEventListener("click", function(){
    ventanaTerminar.close();
})*/