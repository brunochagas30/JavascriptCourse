//Parte de tratamento de erro dentro do Async/Await

function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator + min);
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdeNumeros).fill()) {
      //cuidado com a localização do local do await, por exemplo, não utilizar no push, fica juntamente da função que retorna a Promise

      //trabalhar mutabilidade dentro de um escopo restrito é aceitável em JavaScript

      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    if (tentativas > 10) {
      throw "Não deu certo!";
    } else {
      return gerarMegaSena(qtdeNumeros, tentativas + 1);
    }
  }
}

gerarMegaSena(8).then(console.log).catch(console.log);
