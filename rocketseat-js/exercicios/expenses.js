//Exercicio 2: Expenses

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450]
}

function calculateBalance(incomes_array, expenses_array) {
    let total = 0;
    for(let income of incomes_array) {
        total += income
    }
    for(let expense of expenses_array) {
        total -= expense
    }
    console.log(`Seu saldo é ${total.toFixed(2)}`)
}

calculateBalance(family.incomes, family.expenses)
