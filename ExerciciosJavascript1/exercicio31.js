/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/


vetor = [-30, -20, -10, -1, 0, 1, 2.5, 1.5, 0, 1.2, 2]

function getNumber(vetor) {
    let numerosNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            numerosNegativos++
        }
    }
    return numerosNegativos
}

console.log(getNumber(vetor))