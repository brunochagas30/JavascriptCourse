//Object.preventExtensions -> previne extensão do objeto, pode excluir, mas não adicionar novos objetos

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) //testa se o objeto é extensível ou não

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal -> sela o objeto, n permitindo exclusão e nem adição de atributos, porém, é possível alterar os atributos existentes

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
console.log(`Antes do selo nome: ${pessoa.nome} e idade: ${pessoa.idade}`)
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.nome = 'Arthur'
pessoa.idade = 29
console.log(pessoa)

//Há também o object freeze que ja foi explicado em outra aula!!!