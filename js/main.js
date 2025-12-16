// Calculator HTML Elements.
let state = document.getElementById('calc-state');
let display = document.getElementById('display');
let clear = document.getElementById('clear');
let del = document.getElementById('delete');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let deciPoint = document.getElementById('point');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let subtract = document.getElementById('subtract');
let add = document.getElementById('add');
let solve = document.getElementById('equal');

/* 
    Calculation handlers: these are used for collecting the data user input 
    to the calculator for any calculations.
*/
let first_num = null;
let second_num = null;
let operation = null;
let calcCompleted = null;

// Focus on the calculator input when page loads.
window.addEventListener('load', () => {display.focus();})

// Automatically resizes the calculator font while increasing and decreasing numbers and while displaying results.
function autoFontSize() {
    switch (display.innerHTML.length) {
        case 17: display.style.fontSize = '27.5px'; break;
        case 16: display.style.fontSize = '29px'; break;
        case 15: display.style.fontSize = '30px'; break;
        case 14: display.style.fontSize = '32px'; break;
        case 13: display.style.fontSize = '35px'; break;
        case 12: display.style.fontSize = '38px'; break;
        case 11: display.style.fontSize = '42px'; break;
        case 10: display.style.fontSize = '46px'; break;
        default: display.style.fontSize = '50px';
    }
}

/* 
    When clear button or it's shortcut (C or c) is clicked or pressed, the ongoing 
    calculation will be erased and reset.
*/
clear.addEventListener('click', () => {
    state.innerText = ''; display.innerHTML = '';
    first_num = null; second_num = null; operation = null;
    autoFontSize();
    display.focus();
})

/*
    Normally, this slice only one character from the display value, but when a calculation 
    is successfully processed and the result is displayed on the calculator, it resets 
    the calculator to be ready for the next new calculation.
*/
del.addEventListener('click', () => {
    if (calcCompleted === 'yes') {
        state.innerText = ''; display.innerHTML = '';
        first_num = null; second_num = null; operation = null;
    } else {display.innerHTML = display.innerHTML.slice(-0, -1);}
    autoFontSize();
    display.focus();
})

/* 
    This condition below is used to reset the calculator when user tries to enter any new number 
    after a complete processed calculation. It's inside any number button event listerners.
*/
function reset(modifier) {
    if (calcCompleted === 'yes') {
        state.innerText = ''; display.innerHTML = modifier;
        first_num = null; second_num = null; operation = null;
        calcCompleted = 'no';
    }
}

/* 
    Numeric buttons (0-9), when one key or button is down, it will automatically 
    add it's value to the calculator display.
*/
one.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '1';}
    reset('1'); autoFontSize();
    display.focus();
})

two.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '2';}
    reset('2'); autoFontSize();
    display.focus();
})

three.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '3';}
    reset('3'); autoFontSize();
    display.focus();
})

four.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '4';}
    reset('4'); autoFontSize();
    display.focus();
})

five.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '5';}
    reset('5'); autoFontSize();
    display.focus();
})

six.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '6';}
    reset('6'); autoFontSize();
    display.focus();
})

seven.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '7';}
    reset('7'); autoFontSize();
    display.focus();
})

eight.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '8';}
    reset('8'); autoFontSize();
    display.focus();
})

nine.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '9';}
    reset('9'); autoFontSize();
    display.focus();
})

zero.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {display.innerHTML += '0';}
    reset('0'); autoFontSize();
    display.focus();
})

deciPoint.addEventListener('click', () => {
    if (display.innerHTML.length < 16) {
        // Add '0.' when display is empty and only '.' when it contains some value.
        if (!display.innerHTML.includes('.')) display.innerHTML += display.innerHTML ? '.' : '0.';
    }
    if (first_num !== null && second_num !== null && display.innerHTML !== '') {
        state.innerText = ''; first_num = null; second_num = null; operation = null;
    }
    autoFontSize();
    display.focus();
})

/* When any arithmetic operator button is clicked or pressed from the keyboard */
// Division Operation
divide.addEventListener('click', () => {
    if (isNaN(parseFloat(display.innerHTML))) {
        if (first_num !== null && operation !== 'divide') {
            state.innerText = first_num + ' /';
        }
    } else if (first_num === null) {
        first_num = parseFloat(display.innerHTML);
        state.innerText = first_num + ' /'; display.innerHTML = '';
    // Bellow code allows chain calculation (e.g 100 / 2 + 25 - 50 * 4)
    } else if (first_num !== null && operation === 'divide') {
        first_num = first_num / parseFloat(display.innerHTML);
        state.innerText = first_num + ' /'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'multiply') {
        first_num = first_num * parseFloat(display.innerHTML);
        state.innerText = first_num + ' /'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'subtract') {
        first_num = first_num - parseFloat(display.innerHTML);
        state.innerText = first_num + ' /'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'add') {
        first_num = first_num + parseFloat(display.innerHTML);
        state.innerText = first_num + ' /'; display.innerHTML = '';
    // After a processed calculation
    } else if (first_num !== null && second_num !== null) {
        first_num = parseFloat(display.innerHTML);
        state.innerText = first_num + ' /'; display.innerHTML = '';
    }
    operation = 'divide'; second_num = null; calcCompleted = 'no';
    display.focus();
})

// Multiplication Operation
multiply.addEventListener('click', () => {
    if (isNaN(parseFloat(display.innerHTML))) {
        if (first_num !== null && operation !== 'multiply') {
            state.innerText = first_num + ' *';
        }
    } else if (first_num === null) {
        first_num = parseFloat(display.innerHTML);
        state.innerText = first_num + ' *'; display.innerHTML = '';
    // Bellow code allows chain calculation (e.g 100 / 2 + 25 - 50 * 4)
    } else if (first_num !== null && operation === 'multiply') {
        first_num = first_num * parseFloat(display.innerHTML);
        state.innerText = first_num + ' *'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'divide') {
        if (display.innerHTML !== '0') {
            first_num = first_num / parseFloat(display.innerHTML);
            state.innerText = first_num + ' *'; display.innerHTML = '';
        } else {
            state.innerText = 'Syntax Error'; display.innerHTML = '';
        }
    } else if (first_num !== null && operation === 'subtract') {
        first_num = first_num - parseFloat(display.innerHTML);
        state.innerText = first_num + ' *'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'add') {
        first_num = first_num + parseFloat(display.innerHTML);
        state.innerText = first_num + ' *'; display.innerHTML = '';
    // After a processed calculation
    } else if (first_num !== null && second_num !== null) {
        first_num = parseFloat(display.innerHTML);
        state.innerText = first_num + ' *'; display.innerHTML = '';
    }
    operation = 'multiply'; second_num = null; calcCompleted = 'no';
    display.focus();
})

// Subtraction Operation
subtract.addEventListener('click', () => {
    if (isNaN(parseFloat(display.innerHTML))) {
        if (first_num !== null && operation !== 'subtract') {
            state.innerText = first_num + ' -';
        }
    } else if (first_num === null) {
        first_num = parseFloat(display.innerHTML);        
        state.innerText = first_num + ' -'; display.innerHTML = '';
    // Bellow code allows chain calculation (e.g 100 / 2 + 25 - 50 * 4)
    } else if (first_num !== null && operation === 'subtract') {
        first_num = first_num - parseFloat(display.innerHTML);
        state.innerText = first_num + ' -'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'divide') {
        if (display.innerHTML !== '0') {
            first_num = first_num / parseFloat(display.innerHTML);
            state.innerText = first_num + ' -'; display.innerHTML = '';
        } else {
            state.innerText = 'Syntax Error'; display.innerHTML = '';
        }
    } else if (first_num !== null && operation === 'multiply') {
        first_num = first_num * parseFloat(display.innerHTML);
        state.innerText = first_num + ' -'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'add') {
        first_num = first_num + parseFloat(display.innerHTML);
        state.innerText = first_num + ' -'; display.innerHTML = '';
    // After a processed calculation
    } else if (first_num !== null && second_num !== null) {
        first_num = parseFloat(display.innerHTML);
        state.innerText = first_num + ' -'; display.innerHTML = '';
    }
    operation = 'subtract'; second_num = null; calcCompleted = 'no';
    display.focus();
})

// Addition Operation
add.addEventListener('click', () => {
    if (isNaN(parseFloat(display.innerHTML))) {
        if (first_num !== null && operation !== 'add') {
            state.innerText = first_num + ' +';
        }
    } else if (first_num === null) {
        first_num = parseFloat(display.innerHTML);        
        state.innerText = first_num + ' +'; display.innerHTML = '';
    // Bellow code allows chain calculation (e.g 100 / 2 + 25 - 50 * 4)
    } else if (first_num !== null && operation === 'add') {
        first_num = first_num + parseFloat(display.innerHTML);
        state.innerText = first_num + ' +'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'divide') {
        if (display.innerHTML !== '0') {
            first_num = first_num / parseFloat(display.innerHTML);
            state.innerText = first_num + ' +'; display.innerHTML = '';
        } else {
            state.innerText = 'Syntax Error'; display.innerHTML = '';
        }
    } else if (first_num !== null && operation === 'multiply') {
        first_num = first_num * parseFloat(display.innerHTML);
        state.innerText = first_num + ' +'; display.innerHTML = '';
    } else if (first_num !== null && operation === 'subtract') {
        first_num = first_num - parseFloat(display.innerHTML);
        state.innerText = first_num + ' +'; display.innerHTML = '';
    // After a processed calculation
    } else if (first_num !== null && second_num !== null) {
        first_num = parseFloat(display.innerHTML);
        state.innerText = first_num + ' +'; display.innerHTML = '';
    }
    operation = 'add'; second_num = null; calcCompleted = 'no';
    display.focus();
})

/* 
    This function returns 'Cannot divide by (0)' if any number is divided by "0", 'Syntax Error' 
    if '0s' are compared to be divided. When "=" is clicked or pressed and the display value  
    is 'Not a Number' or empty, It also return 'Syntax Error'. Then resets the calculator.
*/
function wrongSyntaxHandler() {
    // Infinity (e.g, 10 / 0)
    if (operation === 'divide' && second_num === 0) {
        state.innerText = 'Cannot divide by (0)'; display.innerHTML = '';
    }
    // 0 by 0 comaparison (e.g, 0 / 0)
    if (first_num === 0 && operation === 'divide' && second_num === 0) {
        state.innerText = 'Syntax Error'; display.innerHTML = '';
    }
    // NaN (Not a Number)
    if (isNaN(parseFloat(display.innerHTML))) {
        state.innerText = 'Invalid value'; display.innerHTML = '';
    }

    first_num = null; second_num = null; operation = null;
}

/* 
    This function checks if the result length of the calculator exceeds '16' digits and automatically 
    remove the remaining digits after the first '16' digits on the left to right direction. 
    If a decimal point '.' is included somewhere between numbers in the first '16' digits, 
    it will also be displayed with the '16' digits.
*/
function resultLengthLimiter() {
    if (display.innerHTML.length > 16) display.innerHTML = display.innerHTML.slice(0, 17);
}

/* 
    The main solving processes of calculations, when 'Enter' key is pressed, it clicks the 
    solve or equals button in the calculator which can also be clicked through the UI and it 
    process the numbers that were entered by the user and display the result showing what 
    kind of calculation and the numbers are done at the top of the result.
*/
solve.addEventListener('click', () => {
    if (second_num === null) {
        second_num = parseFloat(display.innerHTML);
        switch (operation) {
            case 'divide': 
                state.innerText += ' ' + second_num;
                display.innerHTML = first_num / second_num;
            break;
            case 'multiply': 
                state.innerText += ' ' + second_num;
                display.innerHTML = first_num * second_num;
            break;
            case 'subtract': 
                state.innerText += ' ' + second_num;
                display.innerHTML = first_num - second_num;
            break;
            case 'add': 
                state.innerText += ' ' + second_num;
                display.innerHTML = first_num + second_num;
        }
    } else if (calcCont === true) {        // Continuesly generating accurate results
        switch (operation) {
            case 'divide': 
                first_num = parseFloat(display.innerHTML);
                state.innerText = first_num + ' / ' + second_num;
                display.innerHTML = first_num / second_num;
            break;
            case 'multiply': 
                first_num = parseFloat(display.innerHTML);
                state.innerText = first_num + ' * ' + second_num;
                display.innerHTML = first_num * second_num;
            break;
            case 'subtract': 
                first_num = parseFloat(display.innerHTML);
                state.innerText = first_num + ' - ' + second_num;
                display.innerHTML = first_num - second_num;
            break;
            case 'add': 
                first_num = parseFloat(display.innerHTML);
                state.innerText = first_num + ' + ' + second_num;
                display.innerHTML = first_num + second_num;
        }
    }
    
    calcCompleted = 'yes';
    autoFontSize(); resultLengthLimiter(); wrongSyntaxHandler();
    display.focus();
});

/* 
    Below are the key tags and their set events to perform 
    when pressed, and other allowed browser shortcuts.
*/
document.addEventListener('keydown', (event) => {
    if (
        event.key !== 'F5' && 
        event.key !== 'Tab' && 
        event.key !== 'Home' && event.key !== 'End' && 
        event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && 
        event.key !== 'Ctrl'
    ) event.preventDefault();     // If key is not listed in the statement above, it's default-event will be prevented

    switch (event.key) {
        case 'C': case 'c': event.preventDefault(); clear.click(); break;
        case 'Backspace': event.preventDefault(); del.click(); break;
        case '1': event.preventDefault(); one.click(); break;
        case '2': event.preventDefault(); two.click(); break;
        case '3': event.preventDefault(); three.click(); break;
        case '4': event.preventDefault(); four.click(); break;
        case '5': event.preventDefault(); five.click(); break;
        case '6': event.preventDefault(); six.click(); break;
        case '7': event.preventDefault(); seven.click(); break;
        case '8': event.preventDefault(); eight.click(); break;
        case '9': event.preventDefault(); nine.click(); break;
        case '0': event.preventDefault(); zero.click(); break;
        case '.': event.preventDefault(); deciPoint.click(); break;
        case '/': event.preventDefault(); divide.click(); break;
        case '*': event.preventDefault(); multiply.click(); break;
        case '-': event.preventDefault(); subtract.click(); break;
        case '+': event.preventDefault(); add.click(); break;
        case '=': event.preventDefault(); solve.click(); break;
        case 'Enter': event.preventDefault(); solve.click();
    }
})