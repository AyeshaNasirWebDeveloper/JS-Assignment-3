// Taking First number
const firstNumber = +prompt("Enter the first number:");

// Taking Second number
const secondNumber = +prompt("Enter the second number:");

// Taking operation
const operation = prompt("Enter the operation (+, -, *, /, %):");

// Variable declaration
let result;

// Using Condition
if (operation === '+') {
    result = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${result}`)
} else if (operation === '-') {
    result = firstNumber - secondNumber;
    alert(`${firstNumber} - ${secondNumber} = ${result}`)
} else if (operation === '*') {
    result = firstNumber * secondNumber;
    alert(`${firstNumber} x ${secondNumber} = ${result}`)
} else if (operation === '/') {
    if (secondNumber === 0) {
        result = "Cannot divide by zero";
        alert(`${firstNumber} / ${secondNumber} = ${result}`)
        } else {
        result = firstNumber / secondNumber;
        alert(`${firstNumber} / ${secondNumber} = ${result}`)
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${result}`)
} else {
    result = "Invalid operation";
    alert(`${firstNumber} / ${secondNumber} = ${result}`)
}
