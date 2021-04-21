const schedule = require('node-schedule')

//executando de 5 em 5 segundos as 21h de qualquer dia do mes de qualquer mes  num sabado 
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 6', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

//regra de recorrencia com os valores que se deseja 
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)] //de segunda a sabado
regra.hour = 21
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

//flexibilidade bem grande ao usar o Node para tarefas agendadas