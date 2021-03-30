//estrategia 1 para gerar valor padrão

function soma1(a, b, c) { //estratégia muito utilizada ainda hoje
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c //casos de variáveis dentro de uma função
}
console.log(soma1())
console.log(soma1(), soma1(3))
console.log(soma1(0), soma1(0), soma1(0))


//estrategia 2, 3 e 4 para gerar valores padrões

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //mais segura delas, observar dentro do ()
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do es2015, recomendada utilizar esta!
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))