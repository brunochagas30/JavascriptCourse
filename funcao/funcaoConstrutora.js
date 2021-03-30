function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado, pertence somente ao escopo
    let velocidadeAtual = 0

    //metodo publico, a partir do this
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico dentro da função construtora
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

//instanciar a nova função 
const uno = new Carro

uno.acelerar()

console.log(uno.getVelocidadeAtual())


//passando novos parametros 
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)