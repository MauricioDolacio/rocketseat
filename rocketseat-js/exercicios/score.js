//Exercicio 1: Score

function getScore(score) {
    let scoreFinal

    if(score >= 90) {
        scoreFinal = 'A'
    } else if(89 >= score && score >= 80) {
        scoreFinal = 'B'
    } else if(79 >= score && score >= 70) {
        scoreFinal = 'C'
    } else if(69 >= score && score >= 60) {
        scoreFinal = 'D'
    } else if(score < 60) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Score Invalida'
    }
    
    return scoreFinal
}

console.log(getScore(100))
console.log(getScore(95))
console.log(getScore(90))
console.log(getScore(85))
console.log(getScore(80))
console.log(getScore(75))
console.log(getScore(70))
console.log(getScore(65))
console.log(getScore(60))
console.log(getScore(59))
