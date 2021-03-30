/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 

Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/
function mediaAluno(identificacao, nota1, nota2, nota3) {

    let nota1Ajustada = nota1 * 0.4
    let nota2Ajustada = nota2 * 0.3
    let nota3Ajustada = nota3 * 0.3
    let media = ((nota3 + nota2 + nota1) / 3)

    console.log(`Identificação: ${identificacao} , nota 1: ${nota1Ajustada.toFixed(2)}, nota 2: ${nota2Ajustada.toFixed(2)}, nota 3: ${nota3Ajustada.toFixed(2)}. Média: ${media.toFixed(2)}, Status: ${media.toFixed(2) < 5 ? 'Reprovado': 'Aprovado'}`)


}


mediaAluno("Bruno", 2, 3, 5)
mediaAluno("Chagas", 8, 3, 5)