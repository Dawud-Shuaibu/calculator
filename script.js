let theme = document.getElementById('theme-select');
let colorMode = localStorage.getItem('colorMode');

if (colorMode === 'windowDefault') {
    theme.value = 'windowDefault';
} else if (colorMode === 'light') {
    theme.value = 'light';
} else if (colorMode === 'dark') {
    theme.value = 'dark';
}

// This is to specify which theme to apply when the page loads for the first time
window.addEventListener('load', () => {
    if (theme.value === 'windowDefault' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('darkmode');
    } else if (theme.value === 'windowDefault' && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (document.body.classList.contains('darkmode')) {
            document.body.classList.remove('darkmode');
        }
    } else if (theme.value === 'light' && document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
    } else if (theme.value === 'dark' && !document.body.classList.contains('darkmode')) {
        document.body.classList.add('darkmode');
    }
})

// When window default theme option is selected
theme.addEventListener('change', () => {
    if (theme.value === 'windowDefault') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches && !document.body.classList.contains('darkmode')) {
            document.body.classList.add('darkmode');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches && document.body.classList.contains('darkmode')) {
            return;
        } else if (!window.matchMedia('(prefers-color-scheme: dark)').matches && document.body.classList.contains('darkmode')) {
            document.body.classList.remove('darkmode');
        } else if (!window.matchMedia('(prefers-color-scheme: dark)').matches && !document.body.classList.contains('darkmode')) {
            return;
        }
    }
    localStorage.setItem('colorMode', 'windowDefault');
})

// When the browser window theme is changed
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (theme.value === 'windowDefault' && document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
        localStorage.setItem('colorMode', 'windowDefault');
    } else if (theme.value === 'windowDefault' && !document.body.classList.contains('darkmode')) {
        document.body.classList.add('darkmode');
        localStorage.setItem('colorMode', 'windowDefault');
    }
})

// When light or dark mode option is selected
theme.addEventListener('change', () => {
    if (theme.value === 'light' && document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
        localStorage.setItem('colorMode', 'light');
    } else if (theme.value === 'dark' && !document.body.classList.contains('darkmode')) {
        document.body.classList.add('darkmode');
        localStorage.setItem('colorMode', 'dark');
    }
})

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
let first_num = null;
let second_num = null;
let operation = null;

window.addEventListener('load', () => {
    display.focus();
})

clear.addEventListener('click', () => {
    state.innerText = '';
    display.value = '';
    first_num = null;
    second_num = null;
    display.focus();
})

del.addEventListener('click', () => {
    if (first_num !== null && second_num !== null && operation !== null) {
        state.innerText = '';
        display.value = '';
        operation = null;
        first_num = null;
        second_num = null;
    } else {
        display.value = display.value.slice(0, -1);
    }

    // Automatic font increasing during the characters length reduction
    switch (display.value.length) {
        case 15: 
            display.style.fontSize = '30px';
        break;
        case 14: 
            display.style.fontSize = '32px';
        break
        case 13: 
            display.style.fontSize = '35px';
        break;
        case 12: 
            display.style.fontSize = '38px';
        break;
        case 11: 
            display.style.fontSize = '42px';
        break;
        case 10: 
            display.style.fontSize = '46px';
        break;
        default: 
            display.style.fontSize = '50px';
    }
    display.focus();
})

// Automatic font decreasing when the characters length increases
function autoFontDecrease() {
    switch (display.value.length) {
        case 10:
            display.style.fontSize = '46px';
        break;
        case 11:
            display.style.fontSize = '42px';
        break;
        case 12:
            display.style.fontSize = '38px';
        break;
        case 13:
            display.style.fontSize = '35px';
        break;
        case 14:
            display.style.fontSize = '32px';
        break;
        case 15:
            display.style.fontSize = '30px';
        break;
        case 16:
            display.style.fontSize = '29px';
    }
}

one.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '1';
        display.focus();
        autoFontDecrease();
    }
})

two.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '2';
        display.focus();
        autoFontDecrease();
    }
})

three.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '3';
        display.focus();
        autoFontDecrease();
    }
})

four.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '4';
        display.focus();
        autoFontDecrease();
    }
})

five.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '5';
        display.focus();
        autoFontDecrease();
    }
})

six.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '6';
        display.focus();
        autoFontDecrease();
    }
})

seven.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '7';
        display.focus();
        autoFontDecrease();
    }
})

eight.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '8';
        display.focus();
        autoFontDecrease();
    }
})

nine.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '9';
        display.focus();
        autoFontDecrease();
    }
})

zero.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '0';
        display.focus();
        autoFontDecrease();
    }
})

deciPoint.addEventListener('click', () => {
    if (display.value.length < 16) {
        display.value += '.';
        display.focus();
        autoFontDecrease();
    }
})

divide.addEventListener('click', () => {
    first_num = parseFloat(display.value);
    operation = 'divide';
    state.innerText = first_num + ' /';
    display.value = null;
    display.focus();
})

multiply.addEventListener('click', () => {
    first_num = parseFloat(display.value);
    operation = 'multiply';
    state.innerText = first_num + ' *';
    display.value = null;
    display.focus();
})

subtract.addEventListener('click', () => {
    first_num = parseFloat(display.value);
    operation = 'subtract';
    state.innerText = first_num + ' -';
    display.value = null;
    display.focus();
})

add.addEventListener('click', () => {
    first_num = parseFloat(display.value);
    operation = 'add';
    state.innerText = first_num + ' +';
    display.value = null;
    display.focus();
})

solve.addEventListener('click', () => {
    second_num = parseFloat(display.value);
    if (first_num !== null && second_num !== null && operation !== null) {
        if (operation === 'divide') {
            display.value = first_num / second_num;
            state.innerText = first_num + ' / ' + second_num;
        } else if (operation === 'multiply') {
            display.value = first_num * second_num;
            state.innerText = first_num + ' * ' + second_num;
        } else if (operation === 'subtract') {
            display.value = first_num - second_num;
            state.innerText = first_num + ' - ' + second_num;
        } else if (operation === 'add') {
            display.value = first_num + second_num;
            state.innerText = second_num + ' + ' + first_num;
        }
    }
    switch (display.value.length) {
        case 16:
            display.style.fontSize = '29px';
        break;
        case 15:
            display.style.fontSize = '30px';
        break;
        case 14:
            display.style.fontSize = '32px';
        break;
        case 13:
            display.style.fontSize = '35px';
        break;
        case 12:
            display.style.fontSize = '38px';
        break;
        case 11:
            display.style.fontSize = '42px';
        break;
        case 10: 
            display.style.fontSize = '46px';
        break;
        default: 
            display.style.fontSize = '50px';
    }
    display.focus();
})

document.addEventListener('keydown', (event) => {
    if (
        event.key !== 'F5' && 
        event.key !== 'Tab' && 
        event.key !== 'Home' && event.key !== 'End' && 
        event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && 
        event.key !== 'Ctrl'
    ) {
        event.preventDefault();
    }
    switch (event.key) {
        case 'C': 
            event.preventDefault();
            clear.click();
        break;
        case 'c': 
            event.preventDefault();
            clear.click();
        break;
        case 'Backspace': 
            event.preventDefault();
            del.click();
        break;
        case '1': 
            event.preventDefault();
            one.click();
        break;
        case '2': 
            event.preventDefault();
            two.click();
        break;
        case '3': 
            event.preventDefault();
            three.click();
        break;
        case '4': 
            event.preventDefault();
            four.click();
        break;
        case '5': 
            event.preventDefault();
            five.click();
        break;
        case '6': 
            event.preventDefault();
            six.click();
        break;
        case '7': 
            event.preventDefault();
            seven.click();
        break;
        case '8': 
            event.preventDefault();
            eight.click();
        break;
        case '9': 
            event.preventDefault();
            nine.click();
        break;
        case '0': 
            event.preventDefault();
            zero.click();
        break;
        case '.': 
            event.preventDefault();
            deciPoint.click();
        break;
        case '/': 
            event.preventDefault();
            divide.click();
        break;
        case '*': 
            event.preventDefault();
            multiply.click();
        break;
        case '-': 
            event.preventDefault();
            subtract.click();
        break;
        case '+': 
            event.preventDefault();
            add.click();
        break;
        case '=': 
            event.preventDefault();
            solve.click();
        break;
        case 'Enter': 
            event.preventDefault();
            solve.click();
    }
})