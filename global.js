// console.log(global)
// Usar com muito cuidado e em exceções
global.minhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
})

//Qualquer outro arquivo do sistema tera acesso ao criado no global