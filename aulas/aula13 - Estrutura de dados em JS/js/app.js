// let conteudoPrincipal = document.getElementById('conteudo-principal');

const BuscarCep = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        methods: 'GET'
    }).then(response => response.text())
        .then(dados => console.log(dados));

}


BuscarCep('21511000')



/*
Função utilizada para localizar cep.
Reutulizavel, consigo utilizar em qualquer lugar do programa.
*/

