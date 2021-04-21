const fs = require('fs') //modulo file system ja no node


const caminho = __dirname + '/arquivo.json'

//sincrono... -> se for arquivo pesado irá travar esperando ler o arquivo completamente para então fazer a próxima requisição. 
// Não muito interessante para trabalhar com IO
//Tempo de resposta considerável

const conteudo = fs.readFileSync(caminho, 'utf-8') //se atentar ao encoding correto

console.log(conteudo)

//assincrono...

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) //só funciona caso o config seja um objeto
})

//para o método JSON tem um meio mais simples -> Síncrono

const config = require('./arquivo.json')
console.log(config.db)


fs.readdir(__dirname, (err, arquivos) => {
        console.log('Conteúdo da pasta...')
        console.log(arquivos)
    }) //Leitura de uma pasta

//__dirname representa o diretório atual <------------