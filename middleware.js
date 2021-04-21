//Middleware pattern (chain of responsability)

//ctx => contexto, passa de um mw para outro
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1' //só para marcar que passou por este passo
    next() //chamado próximo passo
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1)) //verificando se o indice é menor que o comprimento do array passado
    }
    execPasso(0) //Quando n for chaamdo, para a execução naquele ponto
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) //pode trocar a ordem dos passos, e suprimir outros passos. Mas como o passo 3 não chama o next, caso ele seja chamado primeiro, interrompe a execução da function
console.log(ctx)