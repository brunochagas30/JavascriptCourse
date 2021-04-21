const aprovados = ['Aldo', 'Agatha', 'Bruno', 'Raquel']

//funções tradicionais com dois parametros, sendo que o indice é sempre passado como o segundo parametro
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) //unico parametro recebendo apenas o nome

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//Ainda há um terceiro parametro, que é o próprio Array

//Pode-se suprir parametros

//parametros não utilizados aparecem como undefined