//Função em JS é first class object
//higher-order function

//criar de forma literal

function fun1() {

}

//armazenar em uma variável
const fun2 = function() {

}

//armazenar em um array
const array = [function(a, b) {
    return a + b
}, fun1, fun2]

console.log(array[0](2, 3))

//armazenar em um atributo de objeto

const obj = {

}

obj.falar = function() {
    return "Opa"
}

console.log(obj.falar())

//passar funções como parametros

function run(fun) {
    fun() //se remover os parenteses n funciona
}

run(function() { console.log('Executando...') })

//Uma função pode retornar ou conter uma função

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3) //resultado de uma função armazenado numa variável
cincoMais(4)