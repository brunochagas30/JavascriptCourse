const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//callback quando determinado evento outra função é chamada de volta

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//loop, cada um dos elementos percorridos no array