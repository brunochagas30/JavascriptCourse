const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break //interrompe e sai do laço corrente (for nesse caso)
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue //interrompe a condição corrente e vai para a próxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: //não usar esse tipo de estrutura, lembra a era do go-to, desorganizado e de dificil manutenção. Ideal é quebrar em pequenas funções e em pequenas responsabilidades, sem necessidade de usar estruturas de desvios de fluxos doidas
    for (a in nums) {
        for (b in nums) {
            if (a == 2 && b == 3) {
                break externo
            }
            console.log(`Par = ${a},${b}`)
        }
    }