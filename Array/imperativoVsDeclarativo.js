const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'João', nota: 9.2 }
]

//Imperativo -> COMO é feito é mais importante do que
//deve ser feito -> Passo a Passo com variável toda vida sobrescrita

let total1 = 0
for (var i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo ->Abordagem mais interessante pois:
//Pode ser usada em vários locais diferentes
//
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNotas).reduce(soma)
console.log(total2 / alunos.length)