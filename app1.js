// Function to generate and apply random background color
function changeColor() {
  // Generate random hex color (like #a3b9f2)
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
  // Apply to body background
  document.body.style.backgroundColor = randomColor;
}

// Get button and add click event listener
document.getElementById("colorButton").addEventListener("click", changeColor);
