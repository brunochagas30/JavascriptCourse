/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

let vetor = [0, 1, 2, 3, 10, 11, 19, 16, 17, 12, 15, 18, 20, 23, 25, 28, 30, 40]

function contaNumero(vetorNumeros) {
    let numerosIntervalo = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20 ? numerosIntervalo++ : ''
    }
    console.log(numerosIntervalo)
}

contaNumero(vetor)