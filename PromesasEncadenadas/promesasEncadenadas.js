let promesa = new Promise((resolver, rechazar) => {
    let xhr = new XMLHttpRequest
    xhr.open("GET", "archivo.txt");
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            resolver(xhr.response)
        } else {
            rechazar('Algo en el Request Salio MAL!');
        }
    })
    xhr.send();
})

//Encadenamos los metodos!
promesa.then((valor) => {
    console.log('la promesa uno ya fue resuelta!, y me trajo esto:');
    console.log(valor);
    let div = document.getElementById("caja");
    let parrafo = document.createElement("p");
    parrafo.innerText = valor;
    div.appendChild(parrafo)

    return new Promise((resolver, rechazar) => {
        let xhr = new XMLHttpRequest
        xhr.open("GET", "archivoDos.txt");

        xhr.addEventListener("load", () => {
            if (xhr.status == 200) {
                resolver(xhr.response );
            } else {
                rechazar('Algo en el Request Salio MAL!');
            }
        })

        xhr.send();

    })
})

.then ((valor) => {
    console.log("la promesa dos fue resuelta" );
    console.log(valor);
})

.catch(()=>{
    console.log("Error! , algo fallo realizando el request encadenado!");
})
        // .catch(() => {
        //     let div = document.getElementById("caja");
        //     let parrafo =  document.createElement("p");
        //     parrafo.innerText = "No pudimos traer el archivo.txt";
        //     div.appendChild(parrafo)
        // })
