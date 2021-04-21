console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // n recomendado para criar arrays

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //Forma recomendada

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //n muito apropriado

aprovados.push('Abia') //metodo mais apropriado para adição de novos valores no array

console.log(aprovados.length)
aprovados[9] = 'Rafael'

console.log(aprovados.length)
console.log(aprovados[8] === undefined) //existe mas não foi definido

console.log(aprovados)
aprovados.sort() //alteração dentro do array, ordena o mesmo por ordem alfabética, jogando os elementos vazios para o final!
console.log(aprovados)

delete aprovados[1] //coloca undefined na posição do array, não altera o array e suas posições <!> 

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //adiciona, remove e adiciona e remove ao mesmo tempo
console.log(aprovados)