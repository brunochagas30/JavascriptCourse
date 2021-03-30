/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 == taxa2) {
            return console.log('As crianças terão a mesma altura')
        } else if (taxa1 < taxa2) {
            return console.log("A criança 1 não alcançará a criança 2")
        } else if (taxa1 > taxa2) {
            return console.log("A criança 2 não alcançará a criança 1")
        }
    } else if (altura1 > altura2) {
        if (taxa1 >= taxa2) {
            return console.log('A criança 2 não alcançará a criança 1')
        } else {
            return calcularTempo(altura2, taxa2, altura1, taxa1)
        }
    } else if (altura2 > altura1) {
        if (taxa1 <= taxa2) {
            return 'A criança 1 não alcançará a criança 2'
        } else {
            return calcularTempo(altura1, taxa1, altura2, taxa2)
        }
    }
}

function calcularTempo(alturaMenor, taxaMenor, alturaMaior, taxaMaior) {
    let anos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        anos++
    }
    console.log(`Irá levar ${anos} anos para a criança menor alcançar a maior`)
    return anos
}

calcularCrescimento(100, 1.5, 120, 1)
calcularCrescimento(100, 1.5, 100, 1)
calcularCrescimento(100, 1.0, 100, 1)
calcularCrescimento(95, 2.0, 100, 1.5)