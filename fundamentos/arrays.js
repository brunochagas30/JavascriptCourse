/*estrutura indexada, similar a vetores, começando com index 0
 *heterogeneo
 *cresce e diminui, sem tamanho fixo
 */

const valores = [7.7, 8.9, 6.3, 9.2] //array literal com 4 posições
console.log(valores[0], valores[3])
console.log(valores[4]) //retorna undefined mas não da erro

//inserindo elementos no array
valores[4] = 10
console.log(valores)
console.log(valores.length) //tamanho do array, elementos

//função push

valores.push({ id: 3 }, false, null, 'teste')
    //não é boa pratica misturar dados dentro de um array
    //É melhor criar um array para cada tipo de dado
console.log(valores)

//função pop tira o ultimo valor do array
console.log(valores.pop())
delete valores[0] //deleta elementos do array
console.log(valores)

console.log(typeof valores) //array são objetos