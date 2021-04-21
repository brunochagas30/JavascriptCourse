let a = 1
console.log(a)

let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) //Caso se desejar ter mais de um valor retornado na promessa, utilizar arrays ou objetos
})

const primeiroElemento = arrayOuString => arrayOuString[0]


const primeiraLetra = string => string[0]


const letraMinuscula = letra => letra.toLowerCase()

//Metódo mais semantico, pois cada função tem sua própria originalidade, não misturando com .then!!!!

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)