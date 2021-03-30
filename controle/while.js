function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
    //caso a expressão estiver falsa, nunca entra no while
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} //cuidado para n gerar laços infinitos ->verdadeiro/falso

console.log('Até a próxima!')