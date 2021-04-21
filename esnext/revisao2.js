// Arrow Function

//Prioriza mais as funções inline

const soma = (a, b) => a + b
    //return implicito


//funções arrows sempre são anonimas 
//caso coloque um escopo dentro da arrow function é preciso ter o return
console.log(soma(2, 3))

const lexico1 = () => console.log(this === module.exports)
lexico1()

//parametros default

function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

//Operador rest -> parametros variáveis que serão agrupados como array dentro da função

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))