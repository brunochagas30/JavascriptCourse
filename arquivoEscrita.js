const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//transformar o objeto num texto para então salvar no disco

fs.writeFile(__dirname + '/arquivoGerado.Json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})