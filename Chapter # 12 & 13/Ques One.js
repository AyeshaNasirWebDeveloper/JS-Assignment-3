// Chapter # 12 & 13

// Question # 01

// Character Type Checker
// ASCII CODES

// Taking User Input

let userInput = prompt("Please Enter a Character \n It should be a Alphabet");

// Condional Statements

if (userInput.length !== 1) {
    alert("Please Enter a Single Character")
} else {
    let asciiValue = userInput.charCodeAt(0);

    if (asciiValue >= 48 && asciiValue <= 57) {
        alert("The character is a Number")
    } else if (asciiValue >= 65 && asciiValue <= 90) {
        alert("This is an Upper Case Character")
    } else if (asciiValue >= 97 && asciiValue <= 122) {
        alert("This is a Lower Case Character")
    } else {
        alert("The character is neither a number nor a letter.");
    }
}