//criar um objeto, transformar para JSON
//JSON é um formato de dados, inter-operabilidade entre sistemas não carrega nada específico de um sistema --> formato textual e simples!

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj)) //A função foi excluída do JSON

// console.log(JSON.parse("{a:1,b:2,c:3}")) -> não é um formato válido JSON

// console.log(JSON.parse("{'a':1, 'b': 2, 'c': 3}")) -> ainda não é um formato válido! todos os atributos do JSON deve ser delimitado por aspas duplas
console.log(JSON.parse('{"a":1, "b":2, "c": 3}'))
console.log(JSON.parse('{"a":1, "b": "string", "c": true, "d": {}, "e": []}'))

//atributos e strings no JSON delimitados por aspas duplas!

//Local para testar o formato JSON -> Jsonlint.com