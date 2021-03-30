//IIFE -> Immediately invoked Function Expression

(function() { //ajuda a fugir do escopo global
    //as variaveis ficarão somente nesse escopo
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()