var produtoPrincipal = document.getElementById('conteudo-principal')

var bancoDeDados = [
{
        nome: "Produto 1",
        descricao: "É um excelente produto",
        preco: 100
    },
    {
        nome: "Produto 1",
        descricao: "É um excelente produto",
        preco: 100
    },
    {
        nome: "Produto 1",
        descricao: "É um excelente produto",
        preco: 100
    },
    {
        nome: "Produto 1",
        descricao: "É um excelente produto",
        preco: 100
    },
    
]

for(produtos of bancoDeDados){
    var produtoDiv = document.createElement('div')
    produtoDiv.className = 'produto'
    produtoPrincipal.appendChild(produtoDiv)    
}