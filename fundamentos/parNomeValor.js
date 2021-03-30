//par nome/valor

const nome = "valor" //contexto léxico 1 -> local físico que a váriavel foi denifido, neste caso no nível do arquivo

function funcao() {
    const nome = "valorr" //contexto léxico -> definido dentro da função
    return nome //n gera conflito com o acima, por != de contexto
}

//Objetos são grupos aninhados de pares nome/valor

const objeto = {
    valor: "teste",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua 1",
        numero: 123
    }
}

console.log(nome)
console.log(funcao())
console.log(objeto)