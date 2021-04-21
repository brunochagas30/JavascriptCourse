const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']

//conteudo do array é mutável

pilotos.pop() // -> remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //tira primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //coloca como primeiro no array]
console.log(pilotos)

//splice pode remover e adicionar elementos como mencionado na outra aula

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // -> remove o 3 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice das chaves

console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //primeiro elemento é aonde começa e o segundo é onde termina, o primeiro é incluso e o end não
console.log(algunsPilotos2)