let progreso = document.querySelector("progress");
let p = document.querySelector("p");

let xhr = new XMLHttpRequest;

xhr.responseType="blob";

//xhr.open("GET","fortnite.jpg");
xhr.open("GET","imagen.png");

xhr.addEventListener("load" , () => {
   
    if(xhr.status == 200){
        let imagenBlob = xhr.response;
        //URL me permite obtener la url de un blob , de un file ,
        //de un medi stream  y otros formatos 
        let url = URL.createObjectURL(imagenBlob)

        console.log("imagenBlob :" + imagenBlob);
        console.log("url :" + url);

        let img = document.createElement("img");
        img.src = url;
        document.body.appendChild(img);

    }
})

xhr.addEventListener("progress" , (e) =>{
    console.log(e);
    console.log("estamos descagando la imagen!");

    if(e.lengthComputable == true){
        let porcentaje = e.loaded * 100 / e.total;
        console.log(porcentaje);
        progreso.value = porcentaje;
        p.innerText = `Se descargo el  ${porcentaje} % de la imagen `;

    }
})



xhr.send();