//Tagged templates - processa o template dentro de uma função

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'aprovado'

console.log(tag `${aluno} está ${situacao}.`)

//Partes irão representar as strings fatiadas sem interpoladas
//Resultando em dois arrays
//Não muito utilizada<-----
//alternando entre parte/valor, tendo no final uma string completa, conseguindo-se reconstruir no final a string original