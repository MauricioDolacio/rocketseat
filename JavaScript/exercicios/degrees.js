//Exercicio 3: Celcius to Fahrenheit

//recebe string em celcius ou fahrenheit
//transforma de uma unicade para outra

function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    let updatedDegree;
    let formula;
    let degreeSign;

    if(!celciusExists && !fahrenheitExists) {     
        throw new Error('Grau não identificado')

    } else if(fahrenheitExists) {
        updatedDegree = Number(degree.toUpperCase().replace('F', ''));
        formula = fahrenheit => (fahrenheit - 32) * 5/9
        degreeSign = 'C'

    } else {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = celcius => celcius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10c'))
} catch(error) {
    console.log(error.message)
}
