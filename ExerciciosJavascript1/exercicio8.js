/*8) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

let stringPontuacoes = ("44, 55, 32, 21, 70, 80, 28, 15")

function avaliaPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdeQuebraRecord = 0
    let piorJogo = 1
    let pontuacaoMaxima = pontuacoes[0]
    let pontuacaoMinima = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > pontuacaoMaxima) {
            pontuacaoMaxima = pontuacoes[i]
            qtdeQuebraRecord++
        } else if (pontuacoes[i] < pontuacaoMinima) {
            pontuacaoMinima = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [qtdeQuebraRecord, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))