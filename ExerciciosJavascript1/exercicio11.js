/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function ano(x) {

    if ((x % 4) == 0 && (x % 100) != 0 || (x % 400) == 0) {
        return true
    } else {
        return false
    }
}

console.log(ano(400))
console.log(ano(500))
console.log(ano(700))
console.log(ano(704))
console.log(ano(716))
console.log(ano(1600))
console.log(ano(1604))
console.log(ano(2020))
console.log(ano(2021))