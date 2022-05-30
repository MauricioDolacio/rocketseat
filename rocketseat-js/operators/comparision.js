//Comparing Operator

//recebe
let one = 1
let two = 2

//igual
console.log(two == 1) //false
console.log(one == '1') //true

//diferente
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != '1') //false

//estritamente igual (compara valor e o tipo do dado)
console.log(one === '1') //false
console.log(one === 1) //true

//estritamente diferente (compara valor e o tipo do dado)
console.log(two !== '2') //true
console.log(two !== 2) //false

//maior que
console.log(one > two)

//maior igual a
console.log(one >= 1)
console.log(two >= 1)

//menor que
console.log(one < two)

//menor igual a
console.log(one <= two)
console.log(one <= 1)
