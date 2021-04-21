function esperarPor(tempo= 2000) {
  return new Promise(function(resolve) {
    setTimeout(function(){
      console.log('Executando Promise')
      resolve()
    }, tempo)
  })
}


// esperarPor(2000)
// .then(()=>console.log('Executando Promise 1...'))
// .then(esperarPor)
// .then(()=>console.log('Executando Promise 2...'))
// .then(esperarPor)
// .then(()=>console.log('Executando Promise 3...'))


function retornarValor(){
  return new Promise(resolve => {
    setTimeout(() => resolve(10),5000)
  }) 
}

async function retornarValorRapido(){
  return 20
} 

async function executar(){

  let valor = await retornarValorRapido()

   await esperarPor(1000) // -> executa de forma sincrona, esperando o tempo de linha por linha ! tendo a capacidade de esperar que certo promise seja resolvido sem utilizar o método then
  console.log(`Async/Await ${valor}...`)
   await esperarPor(1000)
 
  console.log(`Async/Await ${valor +1}...`)
   await esperarPor(1000)
 
  console.log(`Async/Await ${valor +2}...`)
   await esperarPor(1000)

   return valor + 3
}



//Desse modo é aguardar através de uma função assincrona
async function executarDeVerdade () {
  const valor = await executar()
  console.log(valor)
}
//Quando vai sair da função assincrona, precisa acessar o valor a partir do .then

executar().then(console.log)

//Asyncs await -> só é aceita no momento diretamente dentro de funções assincronas

//Existe geralmente para executar as funções de modo assincronas,
//sem ter que esperar o tempo necessário do modo