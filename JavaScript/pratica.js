//variaveis

//declaração
var nome

//assignment or atribuição de valores
nome = "Mike"
console.log(typeof nome)

//agrupamento de declarações
let age, isHuman
age = 18
isHuman = true

//multiplos argumentos na função
//escrita do texto + variaveis. Concatenando Valores
console.log(nome + ' tem ' + age + ' anos.')

//interpolando valores com template literals
console.log(`${nome} tem ${age} anos.`)


//Objects
const person = {
    nome: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.nome} tem ${person.age} anos.`)

//Arrays
const animals = [
    'Lion',
    'Monkey',
    {
        nome: 'Cat',
        age: 3
    }
]

console.log(animals.length)
console.log(animals[2].nome)