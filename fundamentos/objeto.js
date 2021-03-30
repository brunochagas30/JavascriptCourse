const prod1 = {} //chaves determinam que é um objeto
prod1.nome = "Celular Ultra Mega"
    /*.nome é criado dinamicamente dentro do objeto
     *sempre é uma combinação de chave + valor
     *pode ter objeto dentro de outros objetos
     *grupos de pares chave valor
     */
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40 //evitar atributos com espaço

console.log(prod1) //coleção de pares chave, valor

const prod2 = //criação literal dentro do objeto
    {
        nome: "Camisa polo",
        preco: 79.90,
        obj: { //unico dentro da coleção prod2
            blabla: 1,
            obj: { //unico dentro do obj
                blabla: 2
            }
        }
    }

//exemplo de um objeto JSON (formato de comunicação entre sistemas)
// '{"nome": "Camisa Polo", "preco" :79,90}' precisa usar o validator json 
//objeto é uma coisa, JSON é outra (texto)
console.log(prod2)