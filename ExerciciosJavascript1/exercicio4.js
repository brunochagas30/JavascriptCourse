/*04) Crie uma função que irá receber dois valores,
 o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisao(dividendo, divisor) {
    division = dividendo / divisor
    rest = dividendo % divisor

    return console.log(`O resultado da divisão é: ${division} e o resto é: ${rest}`)
}

divisao(4, 2)