// Question No.02

//Gender Program
let gender = prompt("Enter your Gender");
gender = gender.toLowerCase();

if (gender === "male") {
    alert("Good Morning Sir!")
} else if( gender === "female"){
    alert("Good Morning Ma'am!")
} else {
    alert("Good Morning " + gender)
}