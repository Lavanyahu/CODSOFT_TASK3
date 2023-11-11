let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue[displayValue.length - 1] !== operator) {
        displayValue += operator;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}