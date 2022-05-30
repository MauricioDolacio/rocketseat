//function scope
let subject = 'create video'

function createThink() {
    subject = 'study' //modifica o subject global
}

console.log(createThink(subject)) //sem retorno, portanto undefined
console.log(subject) //subject global modificado
