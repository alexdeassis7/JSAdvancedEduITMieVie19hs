    let form = document.getElementById('form');
    let btn = document.getElementById('btn');
    var inputForm = document.getElementById('input');
/*btn.addEventListener('click' , () =>
{
    console.log('Soy el call Back y acabas de hacer click en el boton para que yo me ejecute!');
})
*/
console.log(inputForm.value);
form.addEventListener('submit', (e) => {
    e.preventDefault(); // cancelo el comportamiento determinado
    let valor = inputForm.value;
    console.log(valor);
    let longitudDelTexto = valor.length;
    if(longitudDelTexto > 5){
        console.log('enviamos su formulario');
    }else{
        alert('debe tener mas de 5 caracteres')
    }
})


//trabajo con elemento que estan fuera de un form !
let input = document.getElementById('inputUno');
let boton = document.getElementById('btn2');

boton.addEventListener('click', () => {
    console.log('presion en click');
    console.log('cumple validacion ?? ' + input.checkValidity());

    if (input.value.length > 1) {
        console.log('el input tiene algo escrito ');
    } else {
        alert('el input NO TIENE NADA  escrito , intenta de nuevo  ');
    }
})
