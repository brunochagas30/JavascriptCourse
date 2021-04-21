//usando a notação literal

const obj1 = {}

console.log(obj1)

console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

//funções construtoras

function Produto(nome, preco, desc) {
    this.nome = nome //visivel para fora do objeto, não encapsulada
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) //escopo apenas dentro da função, não alteravel pra fora do objeto
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//função factory -> padrão de projeto

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7800.00, 4)
const f2 = criarFuncionario('Maria', 11400.00, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna objeto...

const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)