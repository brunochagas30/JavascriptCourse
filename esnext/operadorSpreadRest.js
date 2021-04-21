// operador -> ... (rest = Juntar) / (spread (espalhar))

//Usa-se rest como parametro de função

const funcionario = { nome: 'Maria', salario: 1234.90 }
const clone = { ativo: true, ...funcionario } //pçega todos os atributos do funcionario e espalha dentro do objeto chamado de clone

//no final tem ativo e todos os atributos do objeto pai, não alterando no objeto original

console.log(clone, funcionario)

//Usar spread com array

const grupoA = ['Joao', 'Pedro', 'Gloria']

const grupoFinal = ['Maria', 'Rafaela', ...grupoA] //Significa que está espalhando todos os elementos do grupoA no array grupoFinal
    //Em ambos os contextos desse exercicio são spread!!!!
console.log(grupoFinal)