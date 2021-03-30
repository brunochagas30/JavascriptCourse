/*Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira 
o regime de juros simples 
e a segundaretornará o valor da aplicação sob o regime 
de juros compostos.*/

function jurosSimples(ci, tj, ta) {
    return console.log(`O montante em juros simples é de R$ ${ci+(ci*tj*ta)}`)
}

jurosSimples(2000, 0.1, 2)

function jurosCompostos(ci2, tj2, ta2) {
    let montante = (ci2 * ((1 + tj2) ** ta2))
    return console.log(`O montante em juros compostos é de R$ ${montante.toFixed(2)}`)
}

jurosCompostos(2000, 0.1, 2)