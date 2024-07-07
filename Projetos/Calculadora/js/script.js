let calculadora = document.getElementById('calculadora');
let numeroDigitado = ''
let resultado = document.getElementById('result')

for(let i = 0; i < 10; i++){
    let botao = document.createElement('button');
    botao.textContent = i;
    botao.value = i;
    botao.id = `btn-${i}`;
    
    if(i % 2 == 0){
        botao.className = 'botao-par btn';
        
    }else{
        botao.className = 'botao-impar btn'
    }
    
    botao.addEventListener('click', (evento) => {
        numeroDigitado += evento.target.value
        resultado.textContent = numeroDigitado;
    })


    
    calculadora.appendChild(botao);
}



let criarBotao = (id, valor) => {
    let botao = document.createElement('button')
    botao.id = id
    botao.className = "btn btn-calculo"
    botao.value = valor
    botao.textContent = valor
    calculadora.appendChild(botao)
}

criarBotao('btn-ponto', '.')
criarBotao('btn-soma', '+')
criarBotao('btn-sub', '-')
criarBotao('btn-multi', '*')
criarBotao('btn-div', '/')
criarBotao('btn-result','=')

document.getElementById('btn-ponto').addEventListener('click', evento =>{
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})
document.getElementById('btn-soma').addEventListener('click', evento =>{
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})
document.getElementById('btn-sub').addEventListener('click', evento =>{
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})
document.getElementById('btn-multi').addEventListener('click', evento =>{
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})
document.getElementById('btn-div').addEventListener('click', evento =>{
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})
document.getElementById('btn-result').addEventListener('click', evento =>{
  resultado.textContent = eval(numeroDigitado)
})
document.getElementById('limpar').addEventListener('click', () =>{
    numeroDigitado = ''
    resultado.textContent = ''
})