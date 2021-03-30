const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO(orientado objeto)

const falarDePessoa = pessoa.falar.bind(pessoa) //amarração do objeto

falarDePessoa()