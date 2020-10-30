console.log("Hola mundo EduIt");
console.log('constructores de variables JS');
console.log(' LET / VAR / CONST ');
var foo = 123;
if(true){
    var foo = 456;
}
console.log('VAR foo: ' + foo); 
let foo2 = 123 ;
if(true){
    let foo2 = 456 ; 
}
console.log('LET foo2: ' + foo2);
const foo3 = 123;
console.log('const foo3 '  + foo3);
// foo3 = 889; no esta permitido modificar el valor
// JavaScriptObjectNotation -> JSON
const foo4 = { 
              bar : 123,
              nombre : 'alex'
              };

// foo4 = { bar: 456 } no esta permitido modificar el objects
console.log('JSON' + foo4.bar); 
foo4.bar = 5569 ;
console.log('JSON con variable modificada ' + foo4.bar); 

console.log('Sintaxis de punto y de Corchete');
const obj = { x:10 , y:20 , 0:true };

//notacion corchete 
//indice numerico 
console.log(' obj[0] ' + obj[0]);

//indice String 
console.log(' obj[x] ' + obj["x"]);
console.log(' obj[y] ' + obj["y"]);

//indice variable 
const indice = "x";
console.log(obj[indice]);

//NOTACION DE PUNTO
console.log('NOTACION DE PUNTO');
//indice numerico 
// obj.0 ;  NO PERMITIDO!!!

//indice String 
console.log('obj.x = ' + obj.x);

//indice variable 
const index = "x";
console.log(obj.index);
