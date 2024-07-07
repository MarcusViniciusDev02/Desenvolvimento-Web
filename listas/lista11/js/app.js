let numero1 = document.getElementById('num1');
let numero2 = document.getElementById('num2');
let resultado = document.getElementById('resultado');
let botao = document.getElementById('botao-calc');
const taxaIr = 0.15;

botao.addEventListener('click', () => {
    resultado.value = calcularIr(numero1.value, taxaIr);
    numero2.value = calcularPorcentagem(numero1.value, taxaIr)
    });

let calcularIr = (numero1, taxaIr) => {
    return  Number(numero1) - (Number(numero1) * taxaIr);
}

let calcularPorcentagem = (numero1, taxaIr) => {
    return (Number(numero1) * taxaIr)
}

