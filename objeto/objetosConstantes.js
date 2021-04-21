// pessoa -> 123 (Endereço de memória) -> {...} <- pode ser alterado

const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'

console.log(pessoa)


//pessoa -> 456 -> {...} -> Da erro pq é uma constante 
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //congela o objeto pessoa -> não mexe mais

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })

pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)