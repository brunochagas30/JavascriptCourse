//conceito de içamento da variável (var)
//ocorre dentro da função também
//não trás beneficio nenhum, apenas confunde, boa prática não utilizar

console.log("a = ", a) //retorna o undefined, mas que existe a variável
var a = 2
console.log("a = ", a)

// console.log("b = ", b) retorna erro, pois não foi declarada
let b = 3
console.log("b = ", b)