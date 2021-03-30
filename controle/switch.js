//não suporta intervalos
//Importancia de usar breaks para sair do case
//seleção multipla
//default pode ser em qualquer posição


const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) { //expressão é um valor
        case 10: //n precisa repetir a sentença de código
        case 9:
            console.log('Quadro de Honra')
            break //sai do switch sem executar os de baixo
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6.5)
imprimirResultado(0)
imprimirResultado(11)