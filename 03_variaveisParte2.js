
/*Objetos*/

const human = {
    name: "Paulo Henrique",
    age: 34,
    weight: 90,
    isAthlete: true,
    walk: function walking() {
        console.log('Eu ando bastante!')
    }
}

// console.log(human.name)
// console.log(human.age)
// console.log(human.walk())

//Concatenar
console.log("O humano " + human.name + " tem a idade " + human.age)

//Interpolar
console.log(`O humano ${human.name} tem a idade ${human.age}`)


//Array
const animals = [
    "Elefante", //0
    "Gato", // 1
    "Leão", // 2
    "Cachorro", // 3
    {
        name: "Moacir",
        age: 2,
        weight: 4
    }
]
//Tamanho 4
console.log(animals.length)
console.log(animals[4].age)

