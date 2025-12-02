const OPERATORS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '/': (a, b) => a / b
};

function operate(op, a, b){
    return OPERATORS[op]?.(a, b);
}

document.addEventListener('DOMContentLoaded', () => {
    let firstNum = "0";
    let secNum = '';
    let operator = null;
    let choseOperator = false;
    let pressedEqual = false;

    const result = document.getElementById('result');

    const resetAll = () => {
        firstNum = "0";
        secNum = '';
        operator = null;
        choseOperator = false;
        result.textContent = "0";
    }


    // handles numbers
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.addEventListener('click', (event) => {
        const value = event.target.dataset.number;

        if (!value) return;
        
        // no operator chosen, modify firstNum
        // operator chosen, modify secNum
        if(!choseOperator){
            // handle leading '0'
            if(firstNum == "0" || pressedEqual){
                firstNum = '';
                result.textContent = '';
            }
            firstNum += value;
            result.textContent += value;
        } else {
            secNum += value;
            result.textContent += value;
        }
    });

    // handles operators
    const operatorSelect = document.getElementById('operators');
    operatorSelect.addEventListener('click', (event) => {
        const op = event.target.textContent.trim();
        if (!['+', '-', 'x', '/', '=', 'C/E'].includes(op)) return;

        // clear
        if (op === 'C/E'){
            return resetAll();
        }
    
        // '=' without both numbers
        if (op === '=' && (firstNum === '' || secNum === '')){
            return;
        }
        
        // if firstNum && secNum -- condense first and proceed
        if (choseOperator && secNum != ''){
            firstNum = operate(operator, Number(firstNum), Number(secNum));
            secNum = '';
            result.textContent = firstNum;
        } else if (operator != null){
            return; // handles multiple operator selection
        }
        
        // general handling for operator
        operator = op;
        
        // display new operation if not '=', don't allow condense
        if(op === '='){
            choseOperator = false;
            pressedEqual = true;
            operator = null;
        } else {
            choseOperator = true;
            pressedEqual = false;
            result.textContent += op;
        }
    })
});