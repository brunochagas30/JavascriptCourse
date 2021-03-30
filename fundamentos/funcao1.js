//Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //soma com um undefined e retorna um NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //pega somente os dois primeiros

//função com retorno

function soma(a, b = 1) {
    //variável b com padrão
    return a + b //retorna o resultado da função
}

console.log(soma(4, 3))
console.log(soma(2))