let displayValue = ''; // Initialize the display value

// Function to update the display
function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}

// Append number to display
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

// Append operator to display
function appendOperator(operator) {
    if (displayValue === '') return; // Prevent operator as first character
    if (isNaN(displayValue.slice(-1))) {
        displayValue = displayValue.slice(0, -1); // Replace last operator if needed
    }
    displayValue += operator;
    updateDisplay();
}

// Calculate the result
function calculate() {
    try {
        displayValue = eval(displayValue).toString(); // Evaluate the expression
    } catch (error) {
        displayValue = 'Error'; // Display error if calculation fails
    }
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Delete last character
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
