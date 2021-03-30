/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function jurosCompostos(mes, capital) {
    let taxa = 0.05
    let valorDevedor = (capital * ((1 + taxa) ** mes)) - capital
    if (mes > 12 || mes <= 0) {
        return console.log("tempo selecionado inválido")
    }
    return console.log(`O valor a ser pago é de ${valorDevedor.toFixed(2)}`)
}
jurosCompostos(1, 2500)