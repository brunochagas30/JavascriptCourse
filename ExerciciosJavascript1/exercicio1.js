/*1) Crie uma função que dado dois valores 
(passados como parâmetros) 
mostre no console a soma, subtração,
 multiplicação e divisão desses valores.*/

function calc(x, y) {
    return console.log(`Soma: ${x+y}, Subtração: ${x-y}, multiplicação ${x*y}, divisão: ${(x/y)}`)
}

calc(2, 3)
calc(5, 5)