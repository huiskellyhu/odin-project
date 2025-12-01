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

function operate(op, a, b){
    switch (op){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
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
        if (!['+', '-', 'x', '/', '=', 'C/E'].includes(op)) return;

        // if select '=' without firstNum && secNum -- do nothing
        if (op === '=' && (firstNum === '' || secNum === '')){
            return;
        }

        if (op === 'C/E'){
            firstNum = '';
            secNum = ''
            operator = '';
            choseOperator = false;
            result.textContent = "Result: ";
            return;
        }

        // if no operator previously chosen -- set to true and proceed
        if(!choseOperator){
            choseOperator = true;
        
        // if firstNum && secNum -- condense first and proceed
        } else if (secNum != ''){
            firstNum = operate(operator, Number(firstNum), Number(secNum));
            secNum = '';
            console.log('cleared');
            result.textContent = "Result: " + firstNum;
    
        // if secNum == '' -- do nothing
        } else {
            return;
        }
        
        // general handling for operator
        operator = op;
        console.log("Chose operator:", operator);
        
        // display new operation if not '=', don't allow condense
        if(op != '='){
            result.textContent += op;
        } else {
            choseOperator = false;
        }
    })
});