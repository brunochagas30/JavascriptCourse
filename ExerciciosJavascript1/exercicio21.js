/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

let valorBase = 100
const menor10anos = 80
const idade10a30 = 50
const idade30a60 = 95
const idadeAcima60 = 130


function valorConvenio(idadeConveniado) {
    if (idadeConveniado < 10) {
        valorBase += menor10anos
    } else if (idadeConveniado > 10 && idadeConveniado < 30) {
        valorBase += idade10a30
    } else if (idadeConveniado > 30 && idadeConveniado < 60) {
        valorBase += idade30a60
    } else if (idadeConveniado > 60) {
        valorBase += idadeAcima60
    } else {
        console.log("Valor de idade incorreto")
    }
    return valorBase
}

console.log(valorConvenio(35))