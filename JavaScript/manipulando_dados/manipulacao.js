//Manipulacao de String e Numbers

let string = '123'
console.log(Number(string))

let number = 321
console.log(String(number))

//Contando Caracteres
let word = 'Paralelepipedo'
console.log(word.length)
let number2 = 1234
console.log(String(number2).length)

//Casas Decimais
let number3 = 43.3298932
console.log(number3.toFixed(2).replace('.', ',')) 
//toFixed exibe 2 casas decimais e replace troca . por ,

//Maisculas e Minusculas
let word2 = "Hello World!"
console.log(word2.toLowerCase())
console.log(word2.toUpperCase())

//Verificar se uma palavra contém
let phrase = 'Eu quero viver o amor!'
console.log(phrase.includes('amor'))

//Separando Strings
let myArray = phrase.split(' ')
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore.toLowerCase())

//Criar Array com Construtor
let myArray2 = new Array(10)
console.log(myArray2)

//Contar elementos de uma Array
let myArray3 = ['a', {type: 'array'}, function() { return 'alo'}]
console.log(myArray3.length)
console.log(myArray3[2]())

//Strings para Arrays
let word3 = 'manipulacao'
console.log(Array.from(word3))

//Manipulando Arrays
let techs = ['html', 'css', 'js']
techs.pop() //remove o ultimo elemento
techs.shift() //remove o primeiro elemento
techs.push('node.js') //insere no final
techs.unshift('sql') //insere no inicio
console.log(techs)
let index = techs.indexOf('css') //pega a posição do css
console.log(index)
console.log(techs.slice(1, 2)) //exibe elementos inseridos do inicio ao fim
techs.splice(1, 1) //remove os elementos do inicio, e o segundo valor é a quantidade de elementos em seguida do inicial que serao removidos
