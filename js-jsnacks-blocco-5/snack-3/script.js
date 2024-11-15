const numbers = [2, 8, 4, 7, 2, 87];

const numbersPlusOne = [];

numbers.forEach((curNumber, i) => {
    curNumber = (curNumber + 1);
    return numbersPlusOne.push(curNumber);
});

console.log(numbersPlusOne)

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]