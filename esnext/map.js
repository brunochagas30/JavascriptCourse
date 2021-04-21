const tecnologias = new Map()
tecnologias.set('React', { framework: false })
tecnologias.set('Angular', { framework: true })

console.log(tecnologias.react) // <-- não funciona dessa forma
console.log(tecnologias.get('React').framework)


//Criando um map ja atribuindo os elementos

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
    //Pode excluir elementos dentro do map atrravés da função delete

chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //Quantos elementos estão presentes dentro do Map

//Estrutura chave valor que não aceita repetição nas chaves

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')

//Retorna o valor B pq não se pode ter chaves duplicadas, portanto o a é substituído

console.log(chavesVariadas)

//Aceita todos os tipos de dados desde que não tenha repetição nas chaves, mas aceita repetição nos valores