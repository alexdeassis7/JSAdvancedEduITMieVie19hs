function multiplicar( num1 ,num2){
    return num1 * num2
}

var enunciado = document.getElementById('titulo');

console.log('enuciado : ' +  enunciado);

document.getElementById("caja").innerHTML = "alex";

var enum2 = document.querySelector('h2') ;

enum2.innerHTML = "me seleccionaron y modificaron con un query selector";

document.getElementById('contenedor').innerHTML = multiplicar(4,3);
document.getElementById('contenedorDos').innerHTML = multiplicar(10,3);

var arreglo = ['juan', 'liliana' , 'tomas' , 20 , 50 ];

document.getElementById("cajita").innerHTML = arreglo