//Função para transformar um array em um elemento 
//Definido de acordo com o critério
//O resultado de uma função reduce é passado como resposta para a próxuima
//Usa um "elemento acumulador" que passa para a próxima função

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
    //internamente dentro do reduce há um for
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
        console.log(acumulador, atual)
        return acumulador + atual
    }, 0)
    //Depois da callback caso queira adicionar um acumulador, coloca , e o acumulador
console.log(resultado) //Caso queira demonstrar somente o resultado final