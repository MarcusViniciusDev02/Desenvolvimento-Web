let conteudoPrincipal = document.getElementById('conteudo-principal') // Seleciona o elemento a partir de seu id.



let dados = [
    {
        nome: "Produto ",

        descricao: "Descrição do Produto: 1",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 2",
        descricao: "Descrição do Produto: 2",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 3",
        descricao: "Descrição do Produto: 3",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto: 4",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 5",
        descricao: "Descrição do Produto: 5",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 6",
        descricao: "Descrição do Produto: 6",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 7",
        descricao: "Descrição do Produto: 7",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 8",
        descricao: "Descrição do Produto: 8",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },



]


for (let dado of dados) {
    let boxProduto = document.createElement('div'); // Dentro do body, com o id, cria elementos div baseados no array.
    boxProduto.className = "box"; // Coloca uma classe nos itens div criados
    conteudoPrincipal.appendChild(boxProduto); // Adicona os elementos ao pai. 

    let imagem = document.createElement('img');
    imagem.src = dado.imagem;
    boxProduto.appendChild(imagem);

    let nomeProduto = document.createElement('h2')
    nomeProduto.textContent = dado.nome
    boxProduto.appendChild(nomeProduto)
    nomeProduto.className = 'nome-produto'

    let descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = dado.descricao;
    descricaoProduto.className = "descricao-produto"
    boxProduto.appendChild(descricaoProduto)

    let precoProduto = document.createElement('p')
    precoProduto.textContent = dado.preco;
    boxProduto.appendChild(precoProduto)

    let botoes = document.createElement('div')
    botoes.className = "botoes"
    boxProduto.appendChild(botoes)

    let botaoComprar = document.createElement('button')
    botaoComprar.textContent = 'Comprar'
    botaoComprar.className = "botao-comprar"
    botoes.appendChild(botaoComprar)

    let saibaMais = document.createElement('button')
    saibaMais.textContent = 'Saiba Mais'
    saibaMais.className = "saiba-mais"

    botoes.appendChild(saibaMais)




}