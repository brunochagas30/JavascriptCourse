const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //atribui valores em uma unica linha
console.log(n1, n3, n5, n6) //multiplos elementos com uma unica atribuição

/*arrays podem ter outros elementos do tipo array
 */

const [, [, nota]] = [ //não usar na pratica, difícil leitura
    [, 8, 8],
    [9, 6, 8]
]
console.log(nota)
    //array dentro de um array