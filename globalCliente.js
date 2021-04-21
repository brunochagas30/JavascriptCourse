require('./global')

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita!'
console.log(minhaApp.nome)

//objeto global passível de ser modificado, não podendo ser abertos para mudanças

//um contorno para isso seria o Object.freeze