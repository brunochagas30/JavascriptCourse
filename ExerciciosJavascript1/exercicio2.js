/*2) Os triângulos podem ser classificados em
 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados
de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados.
(Neste exemplo deve-se abstrair as condições matemáticas de 
existência de um triângulo).
*/

function triangle(a, b, c) {
    if (a === b && b === c) {
        return console.log('Triangulo equilátero')
    } else if (a === b || b === c || c === a) {
        return console.log('Triangulo isósceles')
    } else {
        return console.log('Triangulo escaleno')
    }
}

triangle(2, 3, 2)
triangle(2, 2, 2)
triangle(2, 1, 3)