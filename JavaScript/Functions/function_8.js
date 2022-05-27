/* 
Function constructor

espressao new
criar um novo objeto
this keyword
*/

function Person(nome) {
    this.name = nome
    this.walk = function() {
        return this.name + ' esta andando'
    }
}

const mayk = new Person('Mayk')
const joao = new Person('Joao')

console.log(mayk.walk())
console.log(joao.walk())
