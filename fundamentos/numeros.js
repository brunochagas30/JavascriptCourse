const peso1 = 1.0
const peso2 = Number('2.0') //converte string em número
console.log(Number.isInteger(peso1)) //teste de numero inteiro peso1

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //retorna o valor com x casas decimais
console.log(media.toString(2)) //transforma em binário
console.log(typeof media)
console.log(typeof Number)

//ponto funciona como o operador dando função a variável