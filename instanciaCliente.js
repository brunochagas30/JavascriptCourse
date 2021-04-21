const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
const contadorC = require('./instanciaNova')() //Invoca um objeto, retorna a função executada gerando o objeto

const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
    //alterado o valor de B devido a alteração no cache do node

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)
console.log(`O contador D -> ${contadorD.valor} <-não foi alterado devido a não ter sido realizadas alterações na memória cache do node. `)