function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result = '';

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Invalid input. Please enter valid numbers.';
    } else {
        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'subtract') {
            result = num1 - num2;
        } else if (operation === 'multiply') {
            result = num1 * num2;
        } else if (operation === 'divide') {
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
        } else {
            result = 'Invalid operation';
        }
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}