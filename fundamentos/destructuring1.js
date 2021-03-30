//novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa //operador de desestruturação
//tire de dentro do objeto o atributo nome e idade (objeto = pessoa)
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //extrai do objeto e cria novas variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //retorna undefined se n vier nada
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, CEP } } = pessoa //extrai olhando dentro do endereço
console.log(logradouro, numero, CEP)

// const { conta: { ag, num } } = pessoa
// console.log(ag, num) //tentando acessar algo que não é um objeto/não existe