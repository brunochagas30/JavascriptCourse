//factory 

function criarProduto(produto, preco, desconto) {
    return {
        produto,
        preco,
        desconto
    }
}

console.log(criarProduto('gato', 400, 0.1))
console.log(criarProduto('cachorro', 200, 'nenhum'))