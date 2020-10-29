// function (){}

const saludo= function(){
    console.log('hola mundo Function');
}

saludo();

setTimeout(function(){
    console.log('Hola pasaron 5 segundos');
} , 5000);


var producto = function(a ,b ){
    return a * b;
}

var resultado = producto(3 ,6);
console.log('resultado : ' + resultado);

var miFuncion = new Function("a","b","return a*b");

var resultado2 = miFuncion(30 , 10);
console.log('resultado2 : ' + resultado2);

//anonimas autoimvocadas
(function(){
    console.log('soy una anonima autoimvocada!!');
}());


//funcion tradicional
function sumarCien(a){
    return a + 100 ;
}
/*1. Elimina la palabra fuction y el nombre y coloca la flecha entre el 
argumenteo y el corchete*/

a => a + 100;

// Demostracion Function Flecha

const materiales = [
    'cemento',
    'arena',
    'ladrillo',
    'hierro'
];

console.log( materiales.map(material => material.length ));

var numbers = [ 1 , 5 , 10 , 15 ];

var dobles = numbers.map( (x) =>  x * 2 );
console.log(dobles);

// For Each
const array1 = [ 'a' , 'b' , 'c' , 'd' , 'e'];
array1.forEach( elemento => console.log(elemento));

function logArrayElementos (element , index){
    console.log("a["+ index +"] = " + element);
}

[2, 5 , , 9].forEach(logArrayElementos);