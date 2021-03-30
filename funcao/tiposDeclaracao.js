console.log(soma(3, 4)) //na linha 1 ja o interpretador já lê todas as funções

//function declaration
function soma(x, y) {
    return x + y
}

//function expression -> só pode ser chamada após a declaração

const sub = function(x, y) {
    return x - y
}

//named function expression -> só pode ser chamada após a declaração

const mult = function mult(x, y) { //não muito utilizada
    return x * y
}