let xhr = new XMLHttpRequest;

xhr.open("GET","fortnite.jpg");

xhr.send();

console.log(xhr); // cuando vemos el objeto en la consola aparece serializado

//API WEB mas conocidas para deserializar el contenido 
//blob y file , o fileList (un array de files)

//La API WEB de MediaStream : la usamos para transmitir Audio / video 

let form = document.querySelector("form");

form.addEventListener("submit", e => {
    //cancelo el comportamiento de enviar el form 
    e.preventDefault();
    console.dir(form)
    console.log(form)

    let valor = form[0].value;
    console.dir("value : " + valor);

    let file = form[0].files;
    console.log("file : " + file); 

})