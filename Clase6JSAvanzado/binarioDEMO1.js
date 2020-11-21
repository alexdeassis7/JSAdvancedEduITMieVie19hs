//EVENTO DE PROGRESO!
let progreso= document.querySelector("progress");
let p = document.querySelector("p");

//veamos un ejemplo de consumo de una imagen y como decodificarla 
let xhr = new XMLHttpRequest;

//le decimos al objeto xhr como debe mostrar la respuesta 

//tenemos varias opciones para configurar como array buffer, 
//text / json , blob , (file no viene incluida)
xhr.responseType="blob";
xhr.open("GET","fortnite.jpg");




//el problema ahora es que el contenido del blob es inutilizable 
//para eso vamos hacer uso de una api especial que es la api URL


//usamos el evento load y vemos que el request finaliza
xhr.addEventListener("load",()=>{
    if(xhr.status == 200){
        let imagenBlob = xhr.response
        //URL me permite obtener una url de un blob , de un fil , de un media stream 
        //entre otro formatos 
        //necesitamos la url para mostrar la imagen en algun lugar 
        //extraemos la url a traves de esta api 
        let url = URL.createObjectURL(imagenBlob);//este metodo recibe un blob o un file 
        // console.log(url); // esta es una url local , vive en la memoria del browser 
        //y no puede ser usada para compartir contenido si para msotrar contenido 
        //ahora que ya tenemos una url podemos crear una imagen en el DOM
        let img = document.createElement("img");
        img.src = url;
        document.body.appendChild(img);
        //y de esta manera es como comvertimos un archivo binario en un recurso consumible 
        //ahora que pasa si el archivo es pesado ?
        //vamos a ir a network -> y ponemos slow3g! para simular una conexion lenta     

    }
})

//configuramos el evento de progress , este evento se dispara cuando nuestro objeto xhr
//este en ready state 3 tres ,es decir descargando informarcion
xhr.addEventListener("progress",(e)=>{
    console.log(e);//el obj evento de un progreso tiene tambien propiedad especificas para este evento
    //como por eje la propiedad total(total de bytes que ahi que descargar) , loaded (cantidad parcial de desacaga)
    // y lengthComputable(es un boolean que dice si del server viene la cabecera de conten length) , vamos a usar estas propiedad para 
    //decirle al usuario si necesita esperar o cuanto necesita esperar 

    // console.log("descargadooooo....  !");


    if(e.lengthComputable == true){
        let porcentaje = e.loaded * 100 / e.total;
        console.log(porcentaje);
        progreso.value = porcentaje ;
       
        p.innerText = `Se ha descargado el  ${porcentaje} del archivo...`;
      
    }
})

xhr.send();//ahora vamos a cargar la pagina 