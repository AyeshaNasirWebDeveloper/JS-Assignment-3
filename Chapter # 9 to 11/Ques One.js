// Question No.01

// Pakistan's CIty Program

let cityName = prompt("Enter your Pakistan's city name:");
cityName = cityName.toLowerCase();

if (cityName === "karachi") {
    alert(`Welcome to ${cityName.toUpperCase()}, the city of lights!`)
} else if (cityName === "lahore") {
    alert(`Welcome to ${cityName.toUpperCase()}, the heart of Pakistan!`)
} else if (cityName === "islamabad") {
    alert(`Welcome to ${cityName.toUpperCase()}, the capital city of Pakistan!`)
} else if (cityName === "rawalpindi") {
    alert(`Welcome to ${cityName.toUpperCase()}, the twin city of Islamabad!`)
} else if (cityName === "faisalabad") {
    alert(`Welcome to ${cityName.toUpperCase()}, the Manchester of Pakistan!`)
} else if (cityName === "multan") {
    alert(`Welcome to ${cityName.toUpperCase()}, the city of saints!`);
} else if (cityName === "peshawar") {
    alert(`Welcome to ${cityName.toUpperCase()}, the city of flowers!`);
} else if (cityName === "quetta") {
    calert(`Welcome to ${cityName.toUpperCase()}, the fruit garden of Pakistan!`);
} else if (cityName === "gujranwala") {
    alert(`Welcome to ${cityName.toUpperCase()}, the city of wrestlers!`);
} else if (cityName === "hyderabad") {
    alert(`Welcome to ${cityName.toUpperCase()}, the city of biryani!`);
} else {
    alert("Welcome to " + cityName.toUpperCase() + "!");
}