

//Manipulando Arrays
const animals = ['gato', 'cachorro', 'macaco', 'zebra', 'cavalo']
console.log(animals)

//Adicionando items no fim do array
console.log(animals.push('cobra'))
console.log(animals)

//Adicionando items no começo
console.log(animals.unshift('porco'))
console.log(animals)

//Removendo item do fim
console.log(animals.pop())
console.log(animals)

//Removendo item do começo
console.log(animals.shift())
console.log(animals)

//Pegar somente alguns elementos do array
//Não modificar o array
console.log(animals.slice(0, 3))
console.log(animals)

//Remover 1 ou mais itens do Array
// animals.splice(1, 3)
console.log(animals)

//Encontrar a posição do array
let index = animals.indexOf('macaco')
console.log(index)
animals.splice(index, 1)
console.log(animals)