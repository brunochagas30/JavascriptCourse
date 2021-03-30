function Pessoa(nome) {

    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


// class Pessoa {
//   constructor(nome) {
//           this.nome = nome
//       }
//       //da problemas no contexto lexico do browser
//   falar() {
//       console.log(`Meu nome é ${this.nome}`)
//   }
// }