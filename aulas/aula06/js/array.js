var nome = "Fulano";
var nomes = ["Miguel", "Matheus", "Monica"]; //Variavel composta

// console.log(nomes);

// nomes.push("Davi"); // Adiciona item no array
// var idades = new Array; 

nomes.push("Davi", "Fulano", "Ciclano")
console.log(nome.length); // Tamanho do Array

nomes.pop(); // remove o ultimo nome do array;
console.log(nomes.length);

nomes.reverse(); //Inverte o Array
console.log(nomes);

nomes.shift(); // remove o primeiro nome
console.log(nomes);

nomes.sort(); //ordena o array
console.log(nomes);

nomes.push("Fulano");
console.log(nomes)

var posicaoFulano = nomes.indexOf("Fulano"); // Pega o indice de um item, baseando-se no seu valor.
console.log(nomes + posicaoFulano)

nomes.splice(posicaoFulano, 1);
nomes[posicaoFulano] = "disdoai"
console.log(nomes + " " + posicaoFulano)