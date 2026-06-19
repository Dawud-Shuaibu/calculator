function menuHandler() {
    // Menu and About "div(s)"
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');

    // Menu buttons events
    document.addEventListener('click', (event) => {
        const tar = event.target;
        const menuButton = tar.closest('.menu-button');
        const closeMenuBtn = tar.closest('.close-menu-btn');
        const aboutButton = tar.closest('.about-btn');
        const backButton = tar.closest('.back-btn');

        if (menuButton) { menu.style.height = '100vh'; } 
        else if (closeMenuBtn) { menu.style.height = '0'; } 
        else if (aboutButton) { about.style.height = '100vh' } 
        else if (backButton) { about.style.height = '0' }
    });

    // Auto close Menu when "Esc" key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (about.style.height === '100vh') about.style.height = '0'; 
            else menu.style.height = '0'; 
        }
    });
}

export default menuHandler;