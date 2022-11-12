//Declarar

let name = "Paulo"
console.log(name)

var ano = 2022
console.log(ano)

//Globais
// Hoisting -> var
    console.log('Variavel name existe aqui?', name)

{ //Scopo (bloco de código)
    //Local
    var name = "Paulo"
}

console.log('Variavel name existe aqui?', name)


//Locais
let name = "Paulo"
console.log('Meu nome chegou aqui?', name)

{ //Scopo (bloco de código)
    //Local
    let name = "Jenifer"
    console.log('Meu nome chegou aqui?', name)
}

console.log('Meu nome chegou aqui?', name)
