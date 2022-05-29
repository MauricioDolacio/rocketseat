//Switch

function calculate(n1, operator, n2) {
    let result

    switch(operator) {
        case '+':
            result = n1 + n2
            break
        case '-':
            result = n1 - n2
            break
        case '*':
            result = n1 * n2
            break
        case '/':
            result = n1 / n2
            break
        default:
            console.log('Não Implementado')
            break
    }
    return result
}

console.log(calculate(4, '-', 8))
