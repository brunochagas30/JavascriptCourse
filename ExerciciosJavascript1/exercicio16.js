/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

const calculadora = function(operador) {
    let a = 2
    let b = 3
    switch (operador) {
        case "+":
            console.log(a + b)
            break
        case "-":
            console.log(a - b)
            break
        case "*":
            console.log(a * b)
            break
        case "/":
            console.log(a / b)
            break
        default:
            console.log("operação não suportada")
    }
}

calculadora("+")
calculadora("/")
calculadora("*")
calculadora("-")
calculadora("x")