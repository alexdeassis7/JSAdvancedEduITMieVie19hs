///Drag & Drop 
//nos sirve para comvertir tags en algo arrastrable 

//eventos a utilizar 
//dragenter - dragleave -dragover - drop

let drop = document.getElementById("drop");

// le configuro eventos al div 

//dragenter , paraecido al event hover , 
drop.addEventListener("dragenter", (e) => {
    e.preventDefault();
   console.log("estoy adentro del drop con un recurso en el puntero"); 
});


drop.addEventListener("dragleave", (e) => {
    e.preventDefault();
    console.log("estoy afuera del drop "); 
 });

 
drop.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("estoy encima del drop "); 
 });
 
drop.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("solte el recurso en la zona de drop"); 
 });