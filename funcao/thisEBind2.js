function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
            self.idade++
                console.log(self.idade)
        } /*.bind(this)*/ , 1000) //a cada x milisegundos a função vai ser repetida
}

new Pessoa