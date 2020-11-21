//DRAG y DROP 
//nos sirve para comvertir tags en arrastrables 

//veamos la primer version 
//eventos a utilizar : dragenter - dragleave - dragover - drop

let drop = document.getElementById("drop");

//le configuramos evento al div 

//dragenter es parecido a un evento hover , pero se ejecuta cuando el curso este por encima y 
//ademas el cursor  mantenga un recurso en el mismo puntero 
drop.addEventListener("dragenter", (e) => {
    e.preventDefault()
        console.log("estoy adentro del drop ");
})

//este evento se dispara cuando salimos de la zona de dropeo 
drop.addEventListener("dragleave", (e) => {
    e.preventDefault()
    console.log("estoy afuera del drop ");
})



//este evento se dispara cuando salimos de la zona de dropeo 
drop.addEventListener("dragover", (e) => {
    e.preventDefault()
    console.log("estoy encimadel drop ");
})



//este evento se dispara cuando soltamos el recurso que tenemos en el puntero 
drop.addEventListener("drop", (e) => {
    e.preventDefault()
    console.log("Solte el recurso !!");
})

//luego debemos cancelar todo el comportamiento por default!!!
//con e.preventDefault()