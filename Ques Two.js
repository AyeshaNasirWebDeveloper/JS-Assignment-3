// Question # 02

let firstNumber = +prompt("Enter the first Integer");
let secondNumber = +prompt("Enter the second Integer");

if (firstNumber === secondNumber) {
    alert("Both Integers are Equal")
} else { // Using Ternary Operators ?:
    let largeNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
    alert(`The larger integer is: ${largeNumber}`);
} 

//else if (firstNumber > secondNumber) {
//     alert(`${firstNumber} is Larger integer`)
// } else {
//     alert(`${secondNumber} is Larger Integer`);
// }