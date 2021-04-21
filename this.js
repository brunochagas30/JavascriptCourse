console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports) //aponta para a mesma referencia

function logThis() {
    console.log('Dentro de uma função...') //this não aponta para exports
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //this dentro de uma função aponta para global
    this.perigo = 'Qualquer coisa' // <- cuidado pois aponta para o escopo global
}

logThis()