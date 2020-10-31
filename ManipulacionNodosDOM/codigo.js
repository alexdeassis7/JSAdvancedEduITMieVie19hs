
var nuevoElemento = document.createElement("p");

var nuevoTexto = document.createTextNode("Alex De Assis");
//nodoPadre.appendChild(nodoHijo);
nuevoElemento.appendChild(nuevoTexto);
//agregamos un id a un elemento del DOM
nuevoElemento.id = "miNuevoElemento";

function debajo() {
    //Inserta elemento al final 
    var doc = document.getElementById("cuadro")
    doc.appendChild(nuevoElemento);
}

function reemplazar() {
    //buscamos el elemneto que queremos reemplazar
    var primero = document.getElementById("primero");
    //valido que exista el nodo "primero"
    if (primero != null) {
        // accedemos al elemento padre del elemento que vamos a reemplazar
        //y lo guardamos en una variable
        var padre = primero.parentNode;
        //padre.replaceChild(nuevoElemento , elementoAreemplazar)
        padre.replaceChild(nuevoElemento, primero)
    }
}

function suprimir(){
    //removemos un elemento del dom
    var tercero = document.getElementById("tercero");
    if(tercero != null){
        tercero.parentNode.removeChild(tercero);
    }
}
//Cambiamos un nodo de sitio 
function cambiar(){
var segundo =document.getElementById("segundo");

var padre = segundo.parentNode;

padre.removeChild(segundo);
padre.appendChild(segundo);

}

function restaurar(){
    //location.reload();
    var lugar = document.getElementById("cuadro");
    lugar.innerHTML =`<h4 id= "primero">Jose</h4>
    <h4 id= "segundo">Marcelo</h4>
    <h4 id= "tercero">Martin</h4>`
 
    //"<h4 id='primero'>Jose</h4><h4 id='segundo'>Marcelo</h4> <h4 id='tercero'>Martin</h4>"
}