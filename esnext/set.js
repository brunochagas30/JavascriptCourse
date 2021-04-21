//Estrutura não indexada e que não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //Como é repetido vai ser ignorado

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //case sensitive
console.log(times.has('Vasco'))

times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) //remove as repetições do Array
console.log(nomesSet)