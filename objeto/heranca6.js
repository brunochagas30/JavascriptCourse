function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}
// operador new cria um objeto apontando para um protótipo
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

//criando uma função que simula o operador new
//... -> Array -> operador spread/rest

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype //atributo prototype da função passada
    f.apply(obj, params) //executa a função F
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)