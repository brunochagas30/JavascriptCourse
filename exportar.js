console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 //a visível fora do arquivo
exports.b = 2 //b visível fora do arquivo
module.exports.c = 3 //''

exports = null
console.log(module.exports)

//mesmo atribuindo nulo para a variável, não é perdido as variáveis

exports = {
    nome: 'Teste'
}

//Não é retornado pq quem retorna é o module.exports
console.log(module.exports)

module.exports = { publico: true } //novo objeto para ser exportado deve ter obrigatoriamente o module.exports, caso contrário não i´ra ser retornado