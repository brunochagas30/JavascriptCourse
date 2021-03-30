/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console*/

vetorInteiro = [1, 2, 3, 4]
vetorString = ['um', 'dois', 'três', 'quatro']
vetorDouble = [1.1, 2.1, 3.1, 4.4]

function uniaoVetores() {
    vetorResultado = []
    for (let i = 0; i < arguments.length; i++) {
        vetorResultado = vetorResultado.concat(arguments[i])
    }
    return vetorResultado
}

console.log(uniaoVetores(vetorInteiro, vetorString))
console.log(uniaoVetores(vetorInteiro, vetorDouble))