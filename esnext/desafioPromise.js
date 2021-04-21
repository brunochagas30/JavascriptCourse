const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
  return new Promise (resolve => {
    fs.readFile(caminho, function(_, conteudo) {
      resolve(conteudo.toString)
    })
    console.log('Depois de Ler')
  })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
.then (conteudo => conteudo.split('\n'))
.then(linhas => console.log(linhas[1]))