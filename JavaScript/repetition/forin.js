//For..in

let person = {
    name: 'John',
    age: 30,
    weight: 80.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
