let texto = fetch("informacion.txt");//solicito el recurso 

texto.then(ObjetoResponse => {
             console.log(ObjetoResponse);
             // console.log(ObjetoResponse.text());  Solo llamar una vez a text()!

          return ObjetoResponse.text();

        })

        .then(valor => {
            console.log(valor);
        })