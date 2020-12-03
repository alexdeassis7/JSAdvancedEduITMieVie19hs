let url = "https://jsonplaceholder.typicode.com"; //API REST
let btn = document.querySelector("button");

//Solucionamos la piramide de la perdicion
btn.addEventListener("click", () => {
    //solicito los users
    ajax({
        metodo: "GET",
        url: `${url}/users`,
        load: primerCallBack,
    })
})

let primerCallBack = respuesta => {
    console.log(respuesta);
    let usuarioNicolas = respuesta[7];
    let idUser = usuarioNicolas.id;

    //solicito los posteos del user
    ajax({
        metodo: "GET",
        url: `${url}/posts?userId=${idUser}`,
        load: segundoCallBack,
    })
}


let segundoCallBack = posteosDeUser => {
    console.log("estos son los posteos del user");

    for (let index = 0; index < posteosDeUser.length; index++) {
        console.log(posteosDeUser[index].title);
    }
    //tercer request aca me traigo los comentarios 
    posteosDeUser.forEach(post => {
        ajax({//callback
            metodo: "GET",
            url: `${url}/comments?postId=${post.id}`,
            load: tecerCallBAck,
        })
    });
}

let tecerCallBAck = comentario => {
    console.log(comentario);
}










//funcion que recibe un objeto con los parametros para ejecutar un ajax 
function ajax(config) {
    let xhr = new XMLHttpRequest
    xhr.open(config.metodo, config.url)

    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            config.load(JSON.parse(xhr.response))
        }
    })
    xhr.send(config.data);

}
