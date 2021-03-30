const nome = "Rebeca"
const concatenacao = "Olá" + nome + "!"

//template string considera espaços em branco, quebra de linhas, etc//

const template = `Olá
${nome} 
!`

console.log(concatenacao, template)

//expressoes funcionam dentro do template string desde que esteja dentro do ${}

console.log(`1 + 1  = ${1 + 1}`)

//funções dentro de expressões

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up ('Cuidado')}!`)