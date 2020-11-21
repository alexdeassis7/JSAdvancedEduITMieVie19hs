var links = document.querySelectorAll("a");
var main = document.querySelector("main");

links.forEach((link) =>{
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        let id = link.id;

        let archivo = id + ".html";
        history.pushState(null , "" , id);
        let xhr = ajax(archivo);

        xhr.addEventListener("load", () =>{
            if(xhr.status === 200){
                main.innerHTML = xhr.response;
            }else{
                main.innerHTML = "No se logro obtener el recurso ! ,Sorry!";
            }
        })
    })
} )
var imagenTraidaPorAjax = ajaxBinario("educacionIT.jpg");

var pagina_de_home = ajax("home.html");


pagina_de_home.addEventListener("load", () => {
    if (pagina_de_home.status === 200) {
        main.innerHTML = pagina_de_home.response;
        history.pushState(null , "" , "home");
    }
})


imagenTraidaPorAjax.addEventListener("load", () => {
    if (imagenTraidaPorAjax.status === 200) {
        let imagenBlob = imagenTraidaPorAjax.response;
        //URL me permite obtener la url de un blob , de un file ,
        //de un medi stream  y otros formatos 
        let url = URL.createObjectURL(imagenBlob)

        console.log("imagenBlob :" + imagenBlob);
        console.log("url :" + url);

        let img = document.createElement("img");
        img.src = url;
        var div = document.getElementById("imagenAjax");
        div.appendChild(img);



    }
})

function ajaxBinario (url){

    let xmlhr = new XMLHttpRequest;
    xmlhr.responseType="blob";
    xmlhr.open("GET",url);
    xmlhr.send();
    return xmlhr;
}

function ajax (url){
    let xhr = new XMLHttpRequest;
    xhr.open("GET", url);
    xhr.send();

    return xhr;
}

window.addEventListener("popstate" , ()=>{
    console.log("se dispara event posState, se detectaron cambios en el historial");

    console.log(location.pathname.split("/")[2]);
    let archivoAbuscar =  location.pathname.split("/")[2] + ".html" ;
    console.log(archivoAbuscar);
    let xhr = ajax(archivoAbuscar);

    xhr.addEventListener("load", ()=>{
        if(xhr.status === 200){
            main.innerHTML = xhr.response;
        }
    })
});