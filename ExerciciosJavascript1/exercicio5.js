/* 5) Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 
e retorne R$0,30 (observe a vírgula e o ponto).
*/

function money(valor) {
    valor = console.log(`O valor é de: $ ${valor.toFixed(2)}`)

}

money(0.300000000000000000004)
money(Math.PI)