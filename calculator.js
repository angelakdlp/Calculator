let display = ""; // Variable to store the display value
let currentNumber = ""; // Variable to store the current number being input

document.addEventListener("DOMContentLoaded", function () {
    const displayElement = document.getElementById("display"); // Reference to the display element
    const buttons = document.querySelectorAll(".button, .operator, .clear"); // Select all buttons

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            handleButtonClick(button.innerText); // Attach click event listener to each button
        });
    });

    // Handle button click events
    function handleButtonClick(value) {
        if (value === 'C') {
            clearDisplay(); // Clear the display if 'C' button is clicked
        } else if (value === '=') {
            calculate(); // Perform calculation if '=' button is clicked
        } else if (isOperator(value)) {
            handleOperator(value); // Handle operators separately
        } else {
            addToDisplay(value); // Add number to the display
        }
    }

    // Add a number to the display
    function addToDisplay(num) {
        currentNumber += num;
        displayElement.value = currentNumber;
    }

    // Clear the display
    function clearDisplay() {
        display = "";
        currentNumber = "";
        displayElement.value = "0";
    }

    // Handle operator button click
    function handleOperator(operator) {
        display += currentNumber + operator;
        currentNumber = "";
        displayElement.value = display;
    }

    // Perform the calculation
    function calculate() {
        if (currentNumber !== "") {
            display += currentNumber;
            const result = eval(display);

            // Check if the result is a finite number
            if (Number.isFinite(result)) {
                display = result.toString();
                currentNumber = "";
                displayElement.value = display;
            } else {
                handleCalculationError();
            }
        }
    }

    // Display an "Error" when an invalid calculation is performed
    function handleCalculationError() {
        display = "Error";
        currentNumber = "";
        displayElement.value = display;
    }

    // Check if the value is an operator
    function isOperator(value) {
        return value === '+' || value === '-' || value === '*' || value === '/';
    }
});
