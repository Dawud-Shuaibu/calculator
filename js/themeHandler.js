let theme = document.getElementById('theme-select');    // Color modes options menu
let colorMode = localStorage.getItem('colorMode');      // Saved preferred color mode

/* 
    This checks the localStorage to get the prefered color mode selected 
    by user from the last time visit and remain active.
*/
if (colorMode === 'windowDefault') {
    theme.value = 'windowDefault';
} else if (colorMode === 'light') {
    theme.value = 'light';
} else if (colorMode === 'dark') {
    theme.value = 'dark';
}

/*  
    This is to specify which theme to apply when the page loads depending on 
    the color mode value used recently.
*/
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
        } else if (!window.matchMedia('(prefers-color-scheme: dark)').matches && document.body.classList.contains('darkmode')) {
            document.body.classList.remove('darkmode');
        }
    }
    localStorage.setItem('colorMode', 'windowDefault');
})

// When the browser window 'theme' is changed while the page theme is set to 'Window Default'
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (theme.value === 'windowDefault' && document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
    } else if (theme.value === 'windowDefault' && !document.body.classList.contains('darkmode')) {
        document.body.classList.add('darkmode');
    }
})

// When light or dark mode option is selected
theme.addEventListener('change', () => {
    if (theme.value === 'light') {
        document.body.classList.remove('darkmode');
        localStorage.setItem('colorMode', 'light');
    } else if (theme.value === 'dark') {
        document.body.classList.add('darkmode');
        localStorage.setItem('colorMode', 'dark');
    }
})