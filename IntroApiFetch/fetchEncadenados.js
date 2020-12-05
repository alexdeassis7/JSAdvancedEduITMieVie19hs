let url = "https://jsonplaceholder.typicode.com";

//solicito los usuarios
let primerRequest = fetch(`${url}/users`);

primerRequest.then(valor=>{
    console.log(valor);
    //console.log(valor.json());
    return valor.json();
})
//el then puedo abreviarlo asi :
//.then(valor => valor.json());

    .then(valor => {
        let ArrayDeNombres = valor;
        console.log('Muestro el Array de Nombres:');
        console.log(ArrayDeNombres);
        console.log("Muestro un user en particular");
        console.log(ArrayDeNombres[6]);
        let idAbuscar = ArrayDeNombres[6].id

        return fetch(`${url}/posts?userId=${idAbuscar}`);

    })

    .then(valor => {
        console.log(valor);
        //console.log(valor.json());
        return valor.json()
    })

    .then(valor => {
        console.log("Estos son los posteos obtenidos del usuario");
        console.log(valor);
        let idPosteo = valor[1].id // 62

        return fetch(`${url}/comments?postId=${idPosteo}`);
    })

    .then(valor=>{
        console.log(valor);
        return valor.json();
    })

    .then( valor => {
        console.log("estos son los comentarios que le hicieron al posteo");
        console.log(valor);
    })

    .catch(err=>{
        console.log(err);
    })



