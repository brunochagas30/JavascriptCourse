//For of intera em cima de valores.
//Interessante para interar em cima de map, array, string, objeto, etc

for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])


//Percorrendo um map com o let Of
for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//utilizando um, destructuring

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}


//Percorrendo um set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}

//Existe talvez outras alternativas possivelmente mais interessantes