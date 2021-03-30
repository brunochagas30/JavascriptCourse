/*8) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */
function vetores(vetorNumeros) {


    let pares = 0
    let impares = 0

    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }

    }
    console.log(`A quantide de impares é ${impares} e a quantidade de pares é de ${pares}`)
}

let vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 200, 201]
vetores(vetor)