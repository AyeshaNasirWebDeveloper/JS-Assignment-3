// Question # 10

// Temperature Checker Program

// Taking input
let tempChecker = +prompt("Enter your city Temperature between 10 to 50");

// Temperature Condition
if (tempChecker > 40 && tempChecker <= 50) {
    alert("It is too hot outside.")
} else if (tempChecker > 30 && tempChecker <= 40) {
    alert("The Weather today is Normal.")
} else if (tempChecker > 20 && tempChecker <= 30) {
    alert("Today’s Weather is cool.")
} else if (tempChecker > 10 && tempChecker <= 20) {
    alert("OMG! Today’s weather is so Cool.")
} else{
    alert("Opps! \nTry Again")
}