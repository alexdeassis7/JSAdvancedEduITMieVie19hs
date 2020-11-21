

//veamos un ejemplo de consumo de una imagen
let xhr = new XMLHttpRequest;

xhr.open("GET","imagen.png");
xhr.send();//ahora vamos a cargar la pagina 

console.log(xhr); // cuando vemos el objeto en la consola aparece serializado
//deberiamos deserializarlos , js tienen varias apis web que nos permiten 
//hacer este trabajo
// los dos mas conocidos son :
// La API WEB de  blob o la de file , o FileList (es un array de files)

// La API WEB de MediaStream :esta sirve para transmitir audio o video 



let form = document.querySelector("form");

form.addEventListener("submit", e=> {
    e.preventDefault();//cancelo el comportamiento de enviar el form
    //console.dir() es la manera de ver todas las propiedades de un objeto JavaScript 
    //específicado por consola, mediante la cual el desarrollador puede
    // facilmente obtener las propiedades del objeto.
    console.dir(form) //en el inidice cero tengo el primer input 
    console.log(form)
    let valor = form[0].value;
    console.dir("value  :"+valor) 
    //como podemos acceder al arhivo real?
    //desde cualquier input de tipo file podemos acceder a lla propiedad file 
    
    let file = form[0].files;
    console.log( form[0].files)//dentro de este array estaran todos nuestros archivos 


})