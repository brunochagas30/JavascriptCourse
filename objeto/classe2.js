//Como funciona a herança em classe? 

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //Definindo que outra classe tem como protótipo outra
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //Referenciando a superclasse (protótipo)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho

console.log(filho)