function meuObjeto() {}

console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //todos objetos criados a partir de uma função construtora apontam para o mesmo prototipo

console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo' //qualquer objeto criado a partir da função construtora terá o atributo nome e poderão ser acessados
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}.`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()


//resumo de afirmações verdadeiras: 
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //o atributo existe mas não aponta para nada pois nao existe nada depois de object.prototype