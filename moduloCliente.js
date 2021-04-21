// Sempre que terminar com cliente, é sinal que usará mais de um arquivo

//Mais ou menos da para ter a noção de como fica a organização dos arquivos do BackEnd
//Metódo para importar os outros arquivos!!!<-----
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

//Importante usar o module exports para não resultar em undefined
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)