/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

vetor = [10, 20, 30, 4, 5, 6, 7, 8]

function mediaAritmetica(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma / vetor.length
}

console.log(mediaAritmetica(vetor))