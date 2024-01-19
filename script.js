function updateCircle(color, number) {
    var circle = document.getElementById("myCircle");
    circle.style.backgroundColor = color;
    circle.textContent = number;
}

// Example usage
updateCircle("#ff0000", 5);  // Sets the circle's color to red and number to 5
