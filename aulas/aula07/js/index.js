<<<<<<< HEAD
var bancoDeDados =
    [
        {
            nome: "Bolu de murangu",
            descricao: "Melhor bolo do mundo",
            preco: "R$" + 200,
            imagem: "https://img.freepik.com/vetores-gratis/astronauta-bonito-pendurado-na-ilustracao-do-icone-do-vetor-dos-desenhos-animados-da-estrela-icone-da-tecnologia-da-ciencia-isolado_138676-8535.jpg?w=740&t=st=1717539471~exp=1717540071~hmac=eab979e0e9f2d30ef20820e88566331642487d126049dd5acec7b5ac182fcf3c"
        },
        {
            nome: "Bolo de chocolate",
            descricao: "Bolo tooooop",
            preco: "R$" + 100,
            imagem: "https://via.placeholder.com/150"

        },
        {
            nome: "Bolo de cenoura com chocolate",
            descricao: "Hmmmm bolinho de cenoura.",
            preco: "R$" + 200,
            imagem: "https://via.placeholder.com/150"

        },
        {
            nome: "Bolo de cenoura com chocolate",
            descricao: "Hmmmm bolinho de cenoura.",
            preco: "R$" + 200,
            imagem: "https://via.placeholder.com/150"

        }
    ]

    var conteudoPrincipal = document.getElementById ('conteudo-principal') // Seleciona o elemento a partir de seu id.
    
    for(var produto of bancoDeDados){
        var conteudoProduto = document.createElement('div'); // Dentro do body, com o id, cria elementos div baseados no array.
        conteudoProduto.className = "conteudo-produto"; // Coloca uma classe nos itens div criados
        conteudoPrincipal.appendChild(conteudoProduto); // Adicona os elementos ao pai. 

        var imagem = document.createElement('img');
        imagem.src = produto.imagem;
        conteudoProduto.appendChild(imagem);

        var nomeProduto = document.createElement('h2')
        nomeProduto.textContent = produto.nome
        conteudoProduto.appendChild(nomeProduto)
        nomeProduto.className = 'nome-produto'

        var descricaoProduto = document.createElement('p')
        descricaoProduto.textContent = produto.descricao;
        descricaoProduto.className = "descricao-produto"
        conteudoProduto.appendChild(descricaoProduto)

        var precoProduto = document.createElement('p')
        precoProduto.textContent = produto.preco;
        conteudoProduto.appendChild(precoProduto)

        var botoes = document.createElement('div')
        botoes.className = "bts"
        
        var botaoComprar = 


    }



=======
var bancoDeDados = [
    {
        nome: 'Bolo de Murangu',
        descricao: 'O melhor bolo do mundo',
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Bolo de Murangu',
        descricao: 'O melhor bolo do mundo',
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Bolo de Murangu',
        descricao: 'O melhor bolo do mundo',
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Bolo de Murangu',
        descricao: 'O melhor bolo do mundo',
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },


] //Dados armazenados nos banco de dados.

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (produto of bancoDeDados) {
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"
    

    var imagem = document.createElement('img')
    imagem.src = produto.imagem; //Adiciona a imagem do banco de dados. 
    conteudoProduto.appendChild(imagem)
 
    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome;
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao;
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = document.createElement('p')
    precoProduto.textContent = produto.preco;
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = 'Comprar'
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoDetalhes.textContent = 'Detalhes'
    botoes.appendChild(botaoDetalhes);

    conteudoProduto.appendChild(botoes)

    conteudoPrincipal.appendChild(conteudoProduto)

}
>>>>>>> 0f867d4 (aula09)

