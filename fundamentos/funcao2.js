//armazenar uma função em uma variável
//função anonima, sem nome function(x,y)
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
// => substitui o nome function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito, sem chamar return
//função sem chave, uma unica sentença de código, retornando implicitamente

const subtracao = (a, b) => a - b //a-b retorno da função
    //casos de unico parametro n necessita de parenteses.
console.log(subtracao(5, 3))

const imprimir2 = a => console.log(a) //exemplo de unico parametro reduzida

imprimir2("Legal!!!")