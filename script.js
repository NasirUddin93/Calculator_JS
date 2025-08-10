const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

// List of functions
const scientificFunctions = ["sin", "cos", "tan", "sqrt", "log", "ln"];

// Degrees → radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Button click handler
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    // If scientific function → apply instantly
    if (scientificFunctions.includes(value)) {
      if (currentInput) {
        let num = eval(currentInput); // calculate current input first
        switch (value) {
          case "sin": currentInput = Math.sin(toRadians(num)).toString(); break;
          case "cos": currentInput = Math.cos(toRadians(num)).toString(); break;
          case "tan": currentInput = Math.tan(toRadians(num)).toString(); break;
          case "sqrt": currentInput = Math.sqrt(num).toString(); break;
          case "log": currentInput = Math.log10(num).toString(); break;
          case "ln": currentInput = Math.log(num).toString(); break;
        }
        display.value = currentInput;
      }
    } else {
      // For numbers/operators → append to input
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Clear button
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Equals button
equalsBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch {
    display.value = "Error";
  }
});
