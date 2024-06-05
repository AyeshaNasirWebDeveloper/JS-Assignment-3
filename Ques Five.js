// Question # 05

// Password Checker

let correctPassword = "Pass123";
let userPassword = prompt("Enter your password:");

// Condional Statement For Passwword Checking

if (!userPassword) {
    // Check user has entered a password
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    // Check both passwords are same
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password. \nTry Again");
}
