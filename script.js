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
    display.value = null;
    first_num = null;
    second_num = null;
    display.focus();
})

del.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
    display.focus();
})


one.addEventListener('click', () => {
    display.value += '1';
    display.focus();
})

two.addEventListener('click', () => {
    display.value += '2';
    display.focus();
})

three.addEventListener('click', () => {
    display.value += '3';
    display.focus();
})

four.addEventListener('click', () => {
    display.value += '4';
    display.focus();
})

five.addEventListener('click', () => {
    display.value += '5';
    display.focus();
})

six.addEventListener('click', () => {
    display.value += '6';
    display.focus();
})

seven.addEventListener('click', () => {
    display.value += '7';
    display.focus();
})

eight.addEventListener('click', () => {
    display.value += '8';
    display.focus();
})

nine.addEventListener('click', () => {
    display.value += '9';
    display.focus();
})

zero.addEventListener('click', () => {
    display.value += '0';
    display.focus();
})

deciPoint.addEventListener('click', () => {
    display.value += '.';
    display.focus();
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

add.addEventListener('click', (event) => {
    first_num = parseFloat(display.value);
    operation = 'add';
    state.innerText = first_num + ' +';
    display.value = null;
    display.focus();
})

solve.addEventListener('click', (event) => {
    second_num = parseFloat(display.value);
    if (first_num !== null && second_num !== null && operation !== null) {

        if (operation === 'divide') {
            display.value = first_num / second_num;
            state.innerText += ' ' + second_num + ' = ' + display.value;
        } else if (operation === 'multiply') {
            display.value = first_num * second_num;
            state.innerText += ' ' + second_num + ' = ' + display.value;
        } else if (operation === 'subtract') {
            display.value = first_num - second_num;
            state.innerText += ' ' + second_num + ' = ' + display.value;
        } else if (operation === 'add') {
            display.value = first_num + second_num;
            state.innerText += ' ' + second_num + ' = ' + display.value;
        }
    }
    display.focus();
})

document.addEventListener('keydown', (event) => {
    if (
        event.key !== 'F5' && 
        event.key !== 'Backspace' && 
        event.key !== 'Tab' && 
        event.key !== 'Home' && event.key !== 'End' && 
        event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && 
        event.key !== 'Enter'
    ) {
        event.preventDefault();
    }

    switch (event.key) {
        case 'C', 'c':
            event.preventDefault();
            clear.click();
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
        case 'Enter':
            event.preventDefault();
            solve.click();
    }
})