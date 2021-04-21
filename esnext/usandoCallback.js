// Nenhum recurso novo do JavaScript, apenas um código gerando um tipo de desconforto, motivando a utilização de promise ao invés de callback

//SEM PROMISE!!!!

const http = require('http') // Próprio módulo interno do Node

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        //resposta tras uma string de dados, necessitando concatenar 
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })

        //Função apenas para entender o motivo do exemplo, não flexível

    })
}

let nomes = []
getTurma('A', alunos => {
    // console.log(alunos) //Teste para ver se ta funcionando a função
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
    })
    getTurma('C', alunos => {
        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
        console.log(nomes)
    })
})



//Famoso callback hell