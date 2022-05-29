// Throw

function sayMyName(name = '') {
    if(name === '') {
        throw 'Nome obrigatorio'
    }

    console.log(name)
}

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('depois do erro')