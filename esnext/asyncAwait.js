// Trabalhando a função de forma mais síncrona
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {

            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Objetivo -> Simplificar o uso de promises...
//A Palavra await só vai funcionar em funções marcadas com async
//Função só vai pro próximo passo depois que foi executada

let obterAlunos = async() => {
    const ta = await getTurma('A') //Invés de chamar o then apenas retorna usando o await 
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}

//Quando se tem uma função async, retorna um objeto AsyncFunction, portanto deve-se usar o then após de chamar a função. 

//Caso tire o async para de funcionar a função do await, resultando em um erro no node

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))