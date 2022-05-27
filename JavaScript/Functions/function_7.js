//callback function
//funcao que é passada para outra função

function sayMyName(name) {
    console.log('antes de executar a funcao')
    name()
    console.log('depois de executar a funcao')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
