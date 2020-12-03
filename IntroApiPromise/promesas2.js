//insertamos un ajax dentro de la promesa
let promesa = new Promise((resolver , rechazar)=>{
    let xhr = new XMLHttpRequest

    xhr.open("GET" , "archivoErroneo.txt");
    xhr.addEventListener("load",()=>{
        if(xhr.status == 200){
            resolver(xhr.response)
        }else{
            rechazar('EL request Asincronico Salio MAL!!!!');
        }
    }) 
    xhr.send();
})

console.log(promesa);
//si la promesa se resuelve  correctamente el callback
//que este dentro de then() se va a ejecutar
promesa.then((valorDeLaPromesa) =>{
    console.log("Se logro resolver la promesa!");
    console.log(valorDeLaPromesa);
})

//si la promesa se rechaza el callback
//que este dentro de catch() se va a ejecutar
promesa.catch((valorDeLaPromesa)=>{
    console.log("No se logro resolver la promesa!"); 
    console.log(valorDeLaPromesa);
})
