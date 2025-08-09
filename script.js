const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

// Handle number & operator clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.getAttribute("data-value");
    display.value = currentInput;
  });
});

// Handle clear
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Handle equals
equalsBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString(); // Math logic
    display.value = currentInput;
  } catch {
    display.value = "Error";
  }
});
