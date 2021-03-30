function area(largura, altura) { //não recomendado o uso, pois gera undefined se nao retornar o valor
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area} m².`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(3, 50, 14)) //pega só 2 primeiros
console.log(area(3, 5))