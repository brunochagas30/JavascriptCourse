//Metodo alternativo da função <!>
//Classe pode trazer certa familiaridade de outras linguagens

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { //...->aceita qualquer tipo de variável!
            lancamentos.forEach(l => this.lancamentos.push(l)) //percorrendo cada elemento do array e pushando para o objeto
        }
        // l -> lançamento corrente
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)

contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario)