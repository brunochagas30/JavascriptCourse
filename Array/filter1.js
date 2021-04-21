//Filtra um array, tendo um subArray com algum critério de filtro

//Não precisa criar um novo array nem testes

//Deixa o código mais legível, portanto, mais semântico

const produtos = [
        { nome: 'Notebook', preco: 2499, fragil: true },
        { nome: 'Ipad Pro', preco: 4199, fragil: true },
        { nome: 'Copo de vidro', preco: 12.49, fragil: true },
        { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
    ]
    //MDN mozilla para checar a documentação e ampliar a linguagem
    //p -> representa cada um dos produtos do array
console.log(produtos.filter(function(p) {
    //aplicar algum tipo de lógica booleana
    //Modifica o array como o nome sugere, ele filtra!
    // return false -> no final os elementos que serão filtrados são excluídos!
    return false
}))


// -------------> Minha resolução
// console.log(produtos.filter(function(p) {
//     return p.preco > 500 && p.fragil == true
// }))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // não necessita colocar ==true pois caso retorne ja simboliza isso

console.log(produtos.filter(caro).filter(fragil))