let url = "https://jsonplaceholder.typicode.com"; //API REST
let btn = document.querySelector("button");

//Patron  - Piramide de la perdicion
btn.addEventListener("click", () => {
    //solicito los users
    ajax({
        metodo: "GET",
        url: `${url}/users`,
        load: respuesta => { //callBack             
            console.log(respuesta); //mostramos el arrays de Usuarios por consola 
            console.log("mostramos el arrays de Usuarios por consola :");
            var divUsuarios = document.getElementById("usuarios");

            for (let index = 0; index < respuesta.length; index++) {
                //   <p>nombre usuario</p>
                var elementoUser = document.createElement('p');
                elementoUser.innerText = respuesta[index].name;
                divUsuarios.appendChild(elementoUser);
            }

            let usuarioNicolas = respuesta[7];//obtengo el objeto usuario de la posicion 7
            let idUser = usuarioNicolas.id; //obtengo el numero de id del user 

            //hacemos el segundo Request
            ajax({
                metodo: "GET",
                url: `${url}/posts?userId=${idUser}`,
                load: posteosDeUser => {
                    console.log("estos serian los posteos del usuario cuyo id es :" + idUser);

                    var divPosteos = document.getElementById("posteos");

                    for (let index = 0; index < posteosDeUser.length; index++) {
                        console.log(posteosDeUser[index].title);
                        var posteoUser = document.createElement('p');
                        posteoUser.innerText = "Titulo del post :" + posteosDeUser[index].title;
                        divPosteos.appendChild(posteoUser);
                    }
                    //hacemos el tercer Request 
                    posteosDeUser.forEach(post => {
                        ajax({
                            metodo: "GET",
                            url: `${url}/comments?postId=${post.id}`,//post es cada elemto del array de posteos
                            load: comentarios => {

                                var comentariosDePosteos = document.getElementById("comentarios");

                                for (let index = 0; index < comentarios.length; index++) {
                                    console.log(comentarios[index]);
                                     
                                    var comentario = document.createElement('p');
                                    comentario.innerText = comentarios[index].body;
                                    comentariosDePosteos.appendChild(comentario)

                                }
                            }
                        })
                    });

                }
            })




        }
    })
})

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
