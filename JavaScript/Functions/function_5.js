//function hoisting
sayMyName()

//O JS estará guardando esta função na memoria antes de executar o codigo em cascata, portanto funcionará
function sayMyName() {
    console.log('Mayk')
}

//Essa função nao irá sofrer hoisting
// var sayMyName = function() {
//     console.log('Mayk')
// }
