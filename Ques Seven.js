// Question No 07
// Clock Program

let clockTime = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

if (clockTime >= 0 && clockTime < 1200) {
    alert("Good Morning!")
} else if (clockTime >= 1200 && clockTime < 1700) {
    alert("Good Afternoon!")
} else if (clockTime >= 1700 && clockTime < 2100) {
    alert("Good Evening")
} else if (clockTime >= 2100 && clockTime < 2359) {
    alert("Good Night")
} else {
    alert("It is not a time! \nPlease Enter a valid Time")
}