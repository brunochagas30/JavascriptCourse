console.log(Math.ceil(6.1))

//notação ponto utilizado para acessar atributos

const objeto1 = {}
objeto1.atributo = "bola"

//objeto1["nome"] = "Bola2" maior flexibilidade mas não recomendada por não ser conveniente

console.log(objeto1.atributo)

function Obj(nome) { //this acompanhado de notação ponto fica visível fora do escopo
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}

const objeto2 = new Obj("Cadeira")
const objeto3 = new Obj("Mesa")

console.log(objeto2.nome)
console.log(objeto3.nome)
objeto3.exec()