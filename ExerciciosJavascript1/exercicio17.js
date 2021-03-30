const aumento = function(plano, salario) {
    switch (plano) {
        case "A":
            console.log(`Seu novo salário é de R$ ${salario*1.1}`)
            break
        case "B":
            console.log(`Seu novo salário é de R$ ${salario*1.15}`)
            break
        case "C":
            console.log(`Seu novo salário é de R$ ${salario*1.20}`)
            break
        default:
            console.log("Plano inválido")
    }
}

aumento("A", 2200)
aumento("B", 2200)
aumento("C", 2200)
aumento("D", 2200)