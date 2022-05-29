//If and Else

let temp = 37.3
let highTemperature = temp >= 37.5
let mediumTemperature = temp <= 37.5 && temp >= 37

if(highTemperature) {
    console.log('Febre Alta')
} else if(mediumTemperature) {
    console.log('Febre Moderada')
} else {
    console.log('Saudavel')
}
