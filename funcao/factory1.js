//factory simples
//função que retorna um novo objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
console.log(criarPessoa('Pedro', 'Paulo'))