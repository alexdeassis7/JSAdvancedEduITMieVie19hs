/**API FETCH 
 * esta API es un mix entre XMLHTTPRequest  +Promise
 *  +Response + Request + Headers
*/
let texto = fetch("informacion.txt");

console.log(texto);

var response = new Response();
console.log(response);

texto.then( valor => {
    console.log("valor :"); 
    console.log(valor); 

})
