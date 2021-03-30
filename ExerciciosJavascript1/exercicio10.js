/*0) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function number(x) {
    if ((x % 3) == 0) {
        return true
    } else {
        return false
    }
}

console.log(number(4))
console.log(number(6))
console.log(number(666))