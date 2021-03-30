/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

let vetor = [1, 2, 3, 400, 5, 6, 100, 200, 300, 12000000, 3, 1.5, 0.22]

function getNumber(vetorNumeros) {
    let maiorNumero = 1
    let menorNumero = 1
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] > maiorNumero) {
            maiorNumero = vetorNumeros[i]
        } else if (vetorNumeros[i] < menorNumero) {
            menorNumero = vetorNumeros[i]
        }
    }
    console.log(`Maior número: ${maiorNumero}. Menor número ${menorNumero}`)
}

getNumber(vetor)