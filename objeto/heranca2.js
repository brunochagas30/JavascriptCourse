//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //Evitar essa manipulação, pois impacta na estrutura toda
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1, filho.attr2, filho.attr3) //procura na cadeia de protótipos
console.log(filho.attr0) //procura na cadeia de protótipos

const carro = {
    velAtual: 0,
    velMax: 200,
    acelarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },

    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing (sobrescreve o atributo do prototype acima)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo} : ${super.status()}` //chama o método do prototipo
    }
}

//estabelecendo a relação de protótipo entre dois objetos

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelarMais(100)
console.log(volvo.status())

ferrari.acelarMais(300)
console.log(ferrari.status())