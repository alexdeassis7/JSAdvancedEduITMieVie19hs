var links = document.querySelectorAll("a");
var main = document.querySelector("main");

//console.log("querySelectorAll('a')" + links);

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let id = link.id;
        // let id = e.target.id
        let archivo = id + ".html";

        location.hash = link.id

     /*   let xhr = ajax(archivo);
        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                main.innerHTML = xhr.response
            } else {
                main.innerHTML = "No se logro obtener el contenido del servidor, intente mas tarde ";
            }
        })*/
    })

})

var pagina_de_home = ajax("home.html");

pagina_de_home.addEventListener("load", () => {
    if (pagina_de_home.status === 200) {
        main.innerHTML = pagina_de_home.response;
    }
})

function ajax(url, metodo) {
    let httpMethod = metodo || "GET";
    let xhr = new XMLHttpRequest;
    xhr.open(httpMethod, url);
    xhr.send()
    return xhr;
}


window.addEventListener("hashchange",() => {
    console.log("se dispara event hashchange, cambiaste de url!");
    console.log(location.hash.split("#")[1] + ".html");

    let archivo = location.hash.split("#")[1] + ".html";
    let xhr = ajax(archivo);

    xhr.addEventListener("load", () => {
        main.innerHTML = xhr.response;
    })

})