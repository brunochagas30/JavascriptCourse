//Transformação no array, mapeando um array para outro do mesmo tamanho
//Objetos para numero, strings, jsons, etc...
//Transformar dados de um array em outro === tamanhos dos 2 arrays
//Map não transforma o array original <-----------
const nums = [1, 2, 3, 4, 5]
    //Map é um for com propósito

let resultado = nums.map(function(e) {
        return e * 2
    })
    //Map pode receber 3 parametros
    //Deve ter um retorno para que não resulte em undefined
console.log(resultado)

//3 funções dentro de um map, sucessivamente

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`


//Transformações sucessivas utilizando o map do Array
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)