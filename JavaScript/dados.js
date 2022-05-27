// Tipos de dados
/* 
- Strings
Permite "" '' e ``
É possivel considerar `` como string format de Python
*/

console.log('Hello World')
console.log(`Calculo: ${1 + 1}`)
console.log(`
É possivel separar com as crases
`)

/* 
- Numbers
inteiros, float, NaN (Not a Number), Infinity (Case Sensitive não esqueça)
*/

console.log(12)
console.log(Infinity)
console.log(13.44)

/* 
- Boolean
true, false
*/

console.log(true)
console.log(false)

/* 
- undefined
algo que não existe

- null
algo que existe porem esta vazio
*/

console.log(null === undefined)

/* 
- Objeto
Propriedades / Atributos
Funcionalidades / Métodos

{ propriedade: "valor" }
*/

console.log({
    //Atributos
    name: "Mayk",
    idade: 36,
    //Método
    andar: function() {
        console.log('andar')
    }
})

/* 
- Array (Vetores)
lista de dados
*/

console.log([
    "Leite",
    "Ovos",
    2,
    3
])

/*
Tipos de dados:
Primitive:
Não é um objetivo, e seu valor nao muda

- String
- Number
- Boolean
- undefined
- Symbol
- BigInt

Structural:
São os Objetos
- Object
-- Array
-- Map
-- Set
-- Date
-- ***

- Function

Structural Primitive
É um objeto "novo"
- Null
*/