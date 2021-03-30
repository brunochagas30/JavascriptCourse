/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/



function contagemCedulas(valorSaque) {
    let celula100 = 0
    let celula50 = 0
    let celula10 = 0
    let celula5 = 0
    let celula1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorNota <= valorSaque) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                celula100++
                break
            case 50:
                valorSaque -= 50
                celula50++
                break
            case 10:
                valorSaque -= 10
                celula10++
                break
            case 5:
                valorSaque -= 5
                celula5++
                break
            case 1:
                valorSaque -= 1
                celula1++
                break
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return resultado(celula100, celula50, celula10, celula5, celula1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function resultado(celula100, celula50, celula10, celula5, celula1) {
    let resultado = ''
    if (celula100 > 0) {
        resultado += `${celula100} nota(s) de R$ 100,00. `
    }
    if (celula50 > 0) {
        resultado += `${celula50} nota(s) de R$ 50,00. `
    }

    if (celula10 > 0) {
        resultado += `${celula10} nota(s) de R$ 10,00. `
    }

    if (celula5 > 0) {
        resultado += `${celula5} nota(s) de R$ 5,00. `
    }

    if (celula1 > 0) {
        resultado += `${celula1} nota(s) de R$ 1,00. `
    }
    return resultado
}

console.log(contagemCedulas(2400))
console.log(contagemCedulas(2121))