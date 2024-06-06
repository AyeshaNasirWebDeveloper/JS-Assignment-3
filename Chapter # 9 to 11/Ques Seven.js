// Question # 07

// Number Guessing Program

// Store a secret number
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt from user
let userGuess = +prompt("Guess the secret number (between 1 to 10):");

//Condional Statements
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess. Try again!");
}