let menu = document.getElementById('menu');
let closeMenuButton = document.getElementById('close-menu-btn');
let aboutButton = document.getElementById('about');
let backButton = document.getElementById('back-btn');
let menuButton = document.getElementById('menu-button');
let about = document.getElementById('about-content');

menuButton.addEventListener('click', () => {
    menu.style.height = '100vh';
})

closeMenuButton.addEventListener('click', () => {
    menu.style.height = '0';
})

aboutButton.addEventListener('click', () => {
    about.style.height = '100vh';
})

backButton.addEventListener('click', () => {
    about.style.height = '0';
})

document.addEventListener('keydown', () => {
    if (about.style.height === '100vh') {
        about.style.height = '0';
    } else {
        menu.style.height = '0';
    }
})