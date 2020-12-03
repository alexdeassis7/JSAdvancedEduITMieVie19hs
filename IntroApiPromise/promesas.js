let promesa = new Promise(()=>{

});

console.log(promesa);

//una promesa puede tener vairos estados posibles esos son:
/*1)Pending 
  2)fulfilled o Resolved -> 
  3)rejected  
*/
let promesaDos = new Promise((resolver, rechazar)=>{
    //ejecuto el resolver o fulfilled
    resolver()
});
console.log(promesaDos);


let promesaTres = new Promise ((resolver, rechazar)=>{
    //ejecuto el resolver o fulfilled
    resolver(1)
});
console.log(promesaTres);


let promesaCuatro = new Promise ((resolver, rechazar)=>{
    //ejecuto el resolver o fulfilled
    resolver(1)
    rechazar(2)
});
console.log(promesaCuatro);

let promesaCinco = new Promise ((resolver, rechazar)=>{
    //ejecuto el resolver o fulfilled
    rechazar(2)
    resolver(1)  
});
console.log(promesaCinco);



const promise3 = new Promise((resolve , reject)=>{
        //genero un numero aleatorio
        const number = Math.floor(Math.random()* 10);

        setTimeout(
            ()=> number > 5 ? resolve(number) : reject('pepe'),
            1000
        )
});


promise3.then(number => console.log(number));


promise3.catch(error => console.log(error));



// var ternario;
// if(10>5){
//      ternario = 'true';
// }else{
//      ternario = 'false';
// }

// var ternario = (10>5) ? "true" : "false";