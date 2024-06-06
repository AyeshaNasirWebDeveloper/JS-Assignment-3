// Question No. 06

// Mark Sheet Program

// Three Subjects
let engMarks = +prompt("Enter Your English Marks:");
let urduMarks = +prompt("Enter Your Urdu Marks:");
let mathMarks = +prompt("Enter Your Math Marks:");

// Total Marks
let totalMarks = 300;
document.write("<h1>Mark Sheet</h1>")
document.write(`Total Marks : ${totalMarks} <br>`)

// Marks Obtained
let marksObtained = engMarks + urduMarks + mathMarks;
document.write(`Marks Obtained : ${marksObtained} <br>`)

// Obtained Marks
let percentage = (marksObtained / totalMarks) * 100;
document.write(`Percentage : ${percentage.toFixed(2)}% <br>`)

// Computing Grade
if (percentage >= 80 && percentage <= 100) {
    document.write("Grade : A-One <br> Remarks : Excellent");
} else if (percentage >= 70 && percentage <= 79) {
    document.write("Grade : A <br> Remarks : Good");
} else if (percentage >= 60 && percentage <= 69) {
    document.write("Grade : B <br> Remarks : You need to improve");
} else {
    document.write("Grade : F <br> Remarks : Sorry");
}
