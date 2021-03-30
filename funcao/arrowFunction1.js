let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

//mais reduzida ainda, muito utilizada por ser muito especificada
//ajuda a ter um código mais funcional

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'olá' //preferível usar a forma padrão
ola = _ => 'olá' //possui sim o parametro
console.log(ola())