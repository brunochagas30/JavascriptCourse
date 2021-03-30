class Pessoa {
    constructor(nome) {
            this.nome = nome
        }
        //da problemas no contexto lexico do browser
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Joao')

p2.falar()