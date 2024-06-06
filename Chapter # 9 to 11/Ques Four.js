// Question Node. 04

// Fuel Checker
let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("Your car has sufficient fuel.");
}
