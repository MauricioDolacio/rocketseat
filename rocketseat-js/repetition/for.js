//For

//para i = 0, até i < 10 faça i++
for(let i = 0; i < 10; i++) { //1 até o 9
    console.log(i)
}

for(let i = 10; i > 0; i--) {
    if(i === 5) { //para quando chega no 5
        break;
    }
    console.log(i)
}

for(let i = 10; i > 0; i--) {
    if(i === 5) { //pula o 5
        continue;
    }
    console.log(i)
}
