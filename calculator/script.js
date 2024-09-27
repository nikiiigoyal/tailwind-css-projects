// Add theme toggler functionality
const themeToggler = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
themeToggler.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggler.classList.toggle('active');
    

}
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let currentValue = ""
let operator = ""
let previousValue = ""

function calculate(prev,curr,opera) {
 prev = parseFloat(prev)
 curr = parseFloat(curr)
 switch(opera) {
    case "+": return prev + curr;
    case "-": return prev - curr;
    case "*": return prev * curr;
    case "/": return prev / curr;
    default: return curr;
 }
}
buttons.forEach((button) => {
  button.addEventListener("click",() => {
    const value = button.textContent;
// If it's a number or decimal point, we append it to the current value.
    if (value >= "0" && value <= "9" || value === "."){
        currentValue += value;
        display.textContent = currentValue;
        // If it's an operator, we perform any pending calculation and store the result as the previous value.
    } else if (["+","-","*","/"].includes(value)) {
        if (previousValue && currentValue) {
            previousValue = calculate(previousValue,currentValue,operator)
            display.textContent = previousValue;
        } else if (currentValue) {
            previousValue = currentValue;
        }
        operator = value;
        currentValue = ""
        // If it's the equals sign, we perform the calculation and display the result.
    } else if (value === "=") {
        if (previousValue && currentValue && operator) {
            currentValue = calculate(previousValue,currentValue,operator)
            display.textContent = currentValue;
            previousValue = ""
            operator = ""
        }
        // If it's the clear button (C), we reset everything.
    } else if (value === "C") {
        currentValue = ""
        previousValue = ""
        operator = ""
        display.textContent = "0;"
        // If it's the backspace button (<), we remove the last character from the current input.
    } else if (value === "<") {
        currentValue = currentValue.slice(0,-1)
        display.textContent = currentValue || "0"
    }
  })
});