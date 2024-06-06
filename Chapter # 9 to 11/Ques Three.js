// Question Node. 03

// Signal Light Program
let colorInput = prompt("Enter Traffic Signal Light Colors: \nRed \nYellow \nGreen ");
colorInput = colorInput.charAt(0).toUpperCase() + colorInput.slice(1).toLowerCase();
if (colorInput == "Red") {
    alert("Must Stop")
}else if (colorInput === "Yellow") {
    alert("Ready to Move")
} else if (colorInput === "Green") {
    alert("Move Now")
} else{
    alert("This is not a Signal Light Color! \nTry Again!")
}