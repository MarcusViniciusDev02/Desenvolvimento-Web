let nomes = ["Fulano", "Ciclano", "Beltrano", "Orlando"]

// for (var n of nomes){ //foreach do javascript
//     console.log(n);
// }
var contador = 0;

while(true){
    console.log(nomes[contador])
    contador++

    if(contador == 2){
        break;
    }   
}

