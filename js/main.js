import themeHandler from "./theme.js";
import menuHandler from "./menu.js";
import { buttonsInit, operatorsInit, shortcutsSetter } from "./initializer.js";

// Calculator HTML Elements.
const state = document.getElementById('calc-state');
const display = document.getElementById('display');

// Calculation handlers
let firstNum = null;
let secondNum = null;
let calcType = null;
let calcCompleted = false;

// Initiate Calculator components when loaded.
window.onload = () => {
    themeHandler();         // Theme Control/Load
    menuHandler();          // Menu bar Handler

    // Main Calculator Functionalities Init
    buttonsInit();
    operatorsInit();
    shortcutsSetter();
    autoFontSizer();
}

// Reset's the calculator for new operation
function reset() {
    state.innerText = ''; display.innerText = ''; 
    firstNum = null; secondNum = null; calcType = null; 
    calcCompleted = false;
}

// Automatically resizes the calculator fontSize while typing to it.
function autoFontSizer() {
    document.addEventListener('click', () => {
        if (display.innerText.length === 10) { display.style.fontSize = '40px' } 
        else if (display.innerText.length === 14) { display.style.fontSize = '32.5px' } 
        else if (display.innerText.length < 11) { display.style.fontSize = '49px' }
    });
}

// Resize display fontsize when a result is displayed
function oneTimeFontSizer() {
    if (display.innerText.length === 10) { display.style.fontSize = '40px' } 
    else if (display.innerText.length >= 14) { display.style.fontSize = '32.5px' }
}

// Set target operation type and chaining handling
function calcTypeSetter(oprtType) {
    const operator = {
        addition: (a, b) => {return a + b}, 
        subtract: (a, b) => {return a - b}, 
        multiply: (a, b) => {return a * b}, 
        divide: (a, b) => {return b === 0 ? 'Error' : a / b;}
    };
    const symbols = {addition: '+', subtract: '-', multiply: '*', divide: '/'};

    if (firstNum !== null && calcType  !== null) {
        if (calcCompleted === true) display.innerText = ''; 
        else {
            firstNum = operator[calcType](firstNum, Number(display.innerText));
            if (firstNum === 'Error') firstNum = 0;
        }
        state.innerText = `${firstNum} ${symbols[oprtType]} `;
    } else {
        firstNum = Number(display.innerText);
        state.innerText = `${firstNum} ${symbols[oprtType]} `;
    }
    
    display.innerText = '';
    secondNum = null;
    calcType = oprtType;
    calcCompleted = false;
}

// Main solver when the equal button or Enter is clicked
function solver(operType) {
    if (operType === null) return;
    if (secondNum === null) secondNum = Number(display.innerText);
    else firstNum = Number(display.innerText);
    if (display.innerText === '') secondNum = firstNum;
    
    const operator = {
        addition: (a, b) => {return a + b}, 
        subtract: (a, b) => {return a - b}, 
        multiply: (a, b) => {return a * b}, 
        divide: (a, b) => {return b === 0 ? 'Error' : a / b;}
    }
    const symbols = {addition: '+', subtract: '-', multiply: '*', divide: '/'};
    
    const result = operator[operType](firstNum, secondNum);

    state.innerText = `${firstNum} ${symbols[operType]} ${secondNum} = `;

    try {
        switch (result) {
            case 'Error': 
                throw new Error("Can\'t divide by 0");
            break;
            default: 
                const resultString = String(result);
                if (resultString.length > 16) 
                    display.innerText = resultString.slice(0, 16);
                else 
                    display.innerText = resultString;
                oneTimeFontSizer();
            break;
        }
    } catch (error) {
        state.innerText = error;
        display.innerText = '0';
    }

    calcCompleted = true;
    firstNum = Number(display.innerText);
}

export { reset, calcCompleted, display, calcTypeSetter, solver, firstNum, secondNum, calcType };