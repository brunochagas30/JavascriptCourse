function soma() {
    let soma = 0
    for (i in arguments) { //array interno disponivel para todas as funções
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3, 4.4))
console.log(soma(1.1, 2.2, 3.3, "Teste"))