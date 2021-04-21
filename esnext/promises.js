//Promessa -> Quer ter algum tipo de processamento assincrono
// -> Ser resolvida || -> Rejeitada

//Representando a ideia de assincrono
//Resolve -> Parametro que sera chamado quando a promessa for atendida

function falarDepoisDe(segundos, frase) {
    return new Promise(resolve => {
        setTimeout(() => {
                resolve(frase)
            }, segundos * 1000) //Segundos necessários após o timeOut -> Situação de sucesso. settimeout simulando um delay !< 
    })
}


//Quando retorna a promise, ela tem a função then que pode ser encadeada quantas vezes quiser
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))

//Promises aceitam um único parametro -> Devido ao resolve
//Se passar mais de um parametro o outro é ignorado

//Caso fosse chamado o reject traria um erro, sendo necessario chamar a função .catch