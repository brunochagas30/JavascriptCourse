console.log(typeof Object)
console.log(typeof new Object()) //construtor praticamente, podendo omitir os parenteses

const cliente = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)

class produto {} //classe é um detalhe de sintaxe mas cria uma função

//instanciar a função para criar seus próprios objetos

console.log(typeof produto)
console.log(typeof new produto())