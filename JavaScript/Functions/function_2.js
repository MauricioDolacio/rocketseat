//function expression / anonymous
//função sem retornar, retorna undefined
const sum = function(number1, number2) { //parametros
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
