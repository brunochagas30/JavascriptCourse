function teste1(num) {
    if (num > 7) //sempre usar chaves na sentença de código como boa prática

        console.log(num)
    console.log("Final")
}

teste1(6)
teste1(8)

function teste2(num2) {
    if (num2 > 7)

    ; //sentença de código vazia que está associada ao if
    //não usar ponto e virgula com as estruturas de controle

    {
        console.log(num2)
    }
}

teste2(6)
teste2(8)