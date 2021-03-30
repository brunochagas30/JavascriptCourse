function Cardapio(codigo, quantidade) {
    let preco = 0
    let nome = ""
    switch (codigo) {
        case 100:
            nome = "Cachorro(s) Quente"
            preco = 3.00 * quantidade
            console.log(`Pedido: ${nome}, Quantidade: ${quantidade}, Valor: R$ ${preco}`)
            break
        case 200:
            nome = "Hamburguer(es) Simples"
            preco = 4.00 * quantidade
            console.log(`Pedido: ${nome}, Quantidade: ${quantidade}, Valor: R$ ${preco}`)
            break
        case 300:
            nome = "Cheeseburguer"
            preco = 5.50 * quantidade
            console.log(`Pedido: ${nome}, Quantidade: ${quantidade}, Valor: R$ ${preco}`)
            break
        case 400:
            nome = "Bauru"
            preco = 7.50 * quantidade
            console.log(`Pedido: ${nome}, Quantidade: ${quantidade}, Valor: R$ ${preco}`)
            break
        case 500:
            nome = "Refrigerante"
            preco = 3.50 * quantidade
            console.log(`Pedido: ${nome}, Quantidade: ${quantidade}, Valor: R$ ${preco}`)
            break
        case 600:
            nome = "Refrigerante"
            preco = 3.50 * quantidade
            console.log(`Pedido: ${nome}, Quantidade: ${quantidade}, Valor: R$ ${preco}`)
            break

        default:
            console.log("O produto não existe")
    }
}

Cardapio(200, 2)
Cardapio(600, 1)
Cardapio(100, 4)
Cardapio(2002, 2)