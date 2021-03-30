let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 3 //verdadeiro
    //transformaçao via negação (!not !!volta original)
console.log(!true) // uma negação inverte a lógica
console.log(!!isAtivo) //duas negações retorna a lógica

console.log("Os verdadeiros...") //todos os numeros inteiros (-0) são true
console.log(!!3)
console.log(!!-1)
console.log(!!" ") //espaço em branco na string
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //atribuição -> resolve pra true

console.log("Os falsos...")
console.log(!!0)
console.log(!!"") //string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar")
console.log(!!("" || null || 0 || " ")) //função ou 

let nome = ""

console.log(nome || "Desconhecido")