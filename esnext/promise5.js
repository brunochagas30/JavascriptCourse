function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try{
      con.log('tempo') 
      if(Math.random() < chanceErro){
      reject('Ocorreu um erro')
    } else {
      resolve(valor)
    } 
  }
    catch(e){
      reject(e)
    }
  })
}

funcionarOuNao('Testando...', 0.9)
.then(v => console.log(`Valor: ${v}`))
.then(
  v=> console.log(v),
  err => console.log(`Erro esp. ${err}`) //Se o erro foi tratado dentro do then, não chama o catch
)
.then(() => console.log('Quase fim'))
//O tratamento do erro pode acontecer tyanto na chamada da função como também nos thens
.catch(err => console.log(`Erro geral: ${err}`)) //Depois do catch não há mais dados
.then(()=> console.log('Fim!'))

//Normalmente o catch para tratamento de erros vem no fim!