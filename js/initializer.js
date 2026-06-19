import { reset, calcCompleted, display, calcTypeSetter, solver, firstNum, secondNum, calcType } from "./main.js";

const clrAndDel = document.querySelectorAll('#clr-del');
const numericDigits = document.querySelectorAll('#num-digits');
const operators = document.querySelectorAll('#operator');

// All calc buttons initialization, operators excluded.
function buttonsInit() {
    // Clear and Delete buttons Events
    clrAndDel.forEach((button) => {
        button.addEventListener('click', (event) => {
            if (event.target === clrAndDel[0]) {
                reset();
            } else {
                if (calcCompleted === true) 
                    reset();
                else 
                    display.innerText = display.innerText.slice(0, -1);
            }
        });
    });

    // All numeric digits/buttons Event
    numericDigits.forEach((digit) => {
        digit.addEventListener('click', (event) => {
            const digitValue = event.target.getAttribute('value');
            if (display.innerText.length < 16) {
                if (calcCompleted === true) reset();
                switch (digitValue) {
                    case '.': 
                        if (display.innerText === '') 
                            display.innerText += '0.';
                        else if (!display.innerText.includes('.')) 
                            display.innerText += '.';
                    break;
                    default: display.innerText += digitValue; break;
                }
            }
        });
    });
}

// Operators Events
function operatorsInit() {
    operators.forEach((oprt) => {
        oprt.addEventListener('click', (event) => {
            const oprtType = event.target.getAttribute('value');
            switch (oprtType) {
                case '/': calcTypeSetter('divide'); break;
                case '*': calcTypeSetter('multiply'); break;
                case '-': calcTypeSetter('subtract'); break;
                case '+': calcTypeSetter('addition'); break;
            }
        });
    });
}

// Solve (Equal) Event
const solve = document.getElementById('equal');
solve.addEventListener('click', () => {
    solver(calcType);
});

// Keyboard Shortcuts Tags
function shortcutsSetter() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'C': case 'c': event.preventDefault(); clrAndDel[0].click(); break;
            case 'Backspace': event.preventDefault(); clrAndDel[1].click(); break;
            case '1': event.preventDefault(); numericDigits[6].click(); break;
            case '2': event.preventDefault(); numericDigits[7].click(); break;
            case '3': event.preventDefault(); numericDigits[8].click(); break;
            case '4': event.preventDefault(); numericDigits[3].click(); break;
            case '5': event.preventDefault(); numericDigits[4].click(); break;
            case '6': event.preventDefault(); numericDigits[5].click(); break;
            case '7': event.preventDefault(); numericDigits[0].click(); break;
            case '8': event.preventDefault(); numericDigits[1].click(); break;
            case '9': event.preventDefault(); numericDigits[2].click(); break;
            case '0': event.preventDefault(); numericDigits[9].click(); break;
            case '.': event.preventDefault(); numericDigits[10].click(); break;
            case '/': event.preventDefault(); operators[0].click(); break;
            case '*': event.preventDefault(); operators[1].click(); break;
            case '-': event.preventDefault(); operators[2].click(); break;
            case '+': event.preventDefault(); operators[3].click(); break;
            case '=': case 'Enter': event.preventDefault(); solve.click(); break;
        }
    });
}

export { buttonsInit, operatorsInit, shortcutsSetter };