const produtos = [
    { nome: "Produto 1", descricao: "Descrição do produto 1. Preço: R$XX,XX", imagem: "imagem_produto1.jpg" },
    { nome: "Produto 2", descricao: "Descrição do produto 2. Preço: R$XX,XX", imagem: "imagem_produto2.jpg" },
    { nome: "Produto 2", descricao: "Descrição do produto 2. Preço: R$XX,XX", imagem: "imagem_produto2.jpg" },
    { nome: "Produto 2", descricao: "Descrição do produto 2. Preço: R$XX,XX", imagem: "imagem_produto2.jpg" },
    { nome: "Produto 2", descricao: "Descrição do produto 2. Preço: R$XX,XX", imagem: "imagem_produto2.jpg" }
];

// Função para exibir produtos na página
function exibirProdutos() {
    const produtosContainer = document.getElementById("produtos");

    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;

        const botao = document.createElement("button");
        botao.textContent = "Adicionar ao Carrinho";

        produtoDiv.appendChild(imagem);
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(descricao);
        produtoDiv.appendChild(botao);

        produtosContainer.appendChild(produtoDiv);
    });
}

exibirProdutos();