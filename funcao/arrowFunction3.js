let comparacomThis = function(param) {
    console.log(this === param)
}

comparacomThis(global)

const obj = {}
comparacomThis = comparacomThis.bind(obj)


comparacomThis(global)
comparacomThis(obj)

let comparacomThisArrow = param => console.log(this === param)
comparacomThisArrow(global)
comparacomThisArrow(module.exports)

comparacomThisArrow = comparacomThisArrow.bind(obj)

comparacomThisArrow(obj)

comparacomThisArrow(module.exports) //continua sendo apontado para arrow function, mesmo com bind nao força a mudança de contexto