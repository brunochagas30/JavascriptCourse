const escola = "Cod3r"

console.log(escola.charAt(4)) //inicia pelo 0
console.log(escola.charCodeAt(3)) //retorna o valor em código HTML
console.log(escola.indexOf(3)) //indice associado ao digito 3

console.log(escola.substring(1)) //imprime a partir do indice
console.log(escola.substring(0, 3)) //limita do 0 ao 3

console.log("Escola ".concat(escola).concat("!")) //concatena
console.log("Escola " + (escola) + ("!")) //concatena
console.log(escola.replace(/\d/, "e")) //expressão regular substituindo todos os digitos dentro do texto

console.log("Ana,Maria,Pedro".split(",")) //string -> Array (separador)