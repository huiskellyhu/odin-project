function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

document.addEventListener('DOMContentLoaded', () => {
    let firstNum = '';
    let secNum = '';
    let operator;

    let choseOperator = false;

    const result = document.getElementById('result');

    const numbersContainer = document.getElementById('numbers');
    numbersContainer.addEventListener('click', (event) => {
        const value = event.target.dataset.number;

        if (!value) return;

        if(!choseOperator){
            firstNum += value;
            console.log("First Number:", firstNum);
            result.textContent += value;
        } else {
            secNum += value;
            console.log("Sec Number:", secNum);
            result.textContent += value;
        }
    });

    const operatorSelect = document.getElementById('operators');
    operatorSelect.addEventListener('click', (event) => {
        const op = event.target.textContent.trim();
        if (!['+', '-', 'x', '/'].includes(op)) return;

        operator = op;
        choseOperator = true;
        console.log("Chose operator:", operator);
        result.textContent += op;
    })
});