//Gerar um numero entre dois numeros
function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]
  } //Invertendo as variaveis através de destructuring
  return new Promise( resolve => {
    setTimeout(function(){
      const fator = max - min+ 1
      const aleatorio = parseInt(Math.random () *fator + min)
      resolve(aleatorio)
    }, tempo)
   
  })
}

//metodo de realizar um paralelismo -> estratégia de promises
function gerarVariosNumeros(){
  return Promise.all([
    gerarNumerosEntre(1,60,1000),
    gerarNumerosEntre(1,60,500),
    gerarNumerosEntre(1,60,50),
    gerarNumerosEntre(1,60,150),
    gerarNumerosEntre(1,60,100),
    gerarNumerosEntre(1,60,10)
  ])
}

console.time('Promise')
gerarVariosNumeros()
.then(numeros=>console.log(numeros))
.then (() => {
  console.timeLog('Promise')
console.timeEnd('Promise')
})

