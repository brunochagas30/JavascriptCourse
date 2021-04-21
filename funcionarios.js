const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const apenasMulheres = f => f.genero === 'F'
const paisOrigem = f => f.pais === 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(paisOrigem)
        .filter(apenasMulheres)
        .reduce(menorSalario)
    console.log(func)
})

//requisição em cima da url obtendo o conteúdo do arquivo