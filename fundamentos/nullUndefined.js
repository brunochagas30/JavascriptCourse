let valor //não inicializada

console.log(valor) //retorna undefined pq não foi atribuida

//is not defined != undefined

valor = null //não aponta para nenhum endereço de memória, ausência de valor
console.log(valor)

/*não é legal atribuir undefined, deixar pra própria IDE atribuir isso
 *o padrão para zerar variáveis é null
 */

// console.log(valor.toString()) -> aponta para problemas, ter cuidado com acessar variáveis com null/undefined

//ideal é sempre ter um valor padrão para esse erro não ocorrer

const produto = {}
console.log(produto.preco)
    /*retorna undefined pq o preço não 
     *existe dentro do produto
     */
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
    //para tirar o objeto: //delete produto.preco
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) //retorna falso para n entrar em determina lógica
console.log(produto)