const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(6.8)
imprimirResultado(8.8)
imprimirResultado('epa') //cuidado pois realiza a comparação