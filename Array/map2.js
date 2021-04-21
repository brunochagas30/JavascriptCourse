const carrinho = [
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 13.90}',
    '{"nome": "Kit de Lapis", "Preco": 41.22}',
    '{"nome": "Caneta", "Preco": 7.50 }'
]

//Retornar um array apenas com os preços


const paraObjeto = json => JSON.parse(json) //Transformando em objeto
const apenasPreco = produto => produto.Preco // <- Case Sensitive, extraindo apenas o preço do objeto criado acima

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)