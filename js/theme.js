function themeHandler() {
    const theme = document.getElementById('theme-select');    // Select options element
    const browserTheme = window.matchMedia('(prefers-color-scheme: light)');
    const htmlBody = document.body.classList;
    
    // Get the saved color theme from storage and apply it.
    const colorMode = localStorage.getItem('colorMode');      // Saved preferred color mode
    switch (colorMode) {
        case 'light': 
            theme.value = 'light';
            if (htmlBody.contains('darkmode')) htmlBody.remove('darkmode');
        break;
        case 'dark': 
            theme.value = 'dark';
            if (!htmlBody.contains('darkmode')) htmlBody.add('darkmode');
        break;
        default: 
            theme.value = 'windowDefault';
            if (browserTheme.matches && htmlBody.contains('darkmode')) 
                htmlBody.remove('darkmode');
            else if (!browserTheme.matches && !htmlBody.contains('darkmode')) 
                htmlBody.add('darkmode');
            localStorage.setItem('colorMode', 'windowDefault');         // In-case for first time visit
        break;
    }
    
    // Manually toggling between theme options.
    theme.addEventListener('change', () => {
        if (theme.value === 'windowDefault') {
            if (browserTheme.matches && htmlBody.contains('darkmode')) 
                htmlBody.remove('darkmode');
            else if (!browserTheme.matches && !htmlBody.contains('darkmode')) 
                htmlBody.add('darkmode');
            localStorage.setItem('colorMode', 'windowDefault');
        }
        // Manual Light and Dark Modes toggling
        if (theme.value === 'light') {
            htmlBody.remove('darkmode');
            localStorage.setItem('colorMode', 'light');
        } else if (theme.value === 'dark') {
            htmlBody.add('darkmode');
            localStorage.setItem('colorMode', 'dark');
        }
    });

    // Automatically switch theme if the browser default is changed while the page theme is on 'Window Default'.
    browserTheme.addEventListener('change', () => {
        if (theme.value === 'windowDefault') {
            if (browserTheme.matches && htmlBody.contains('darkmode')) 
                htmlBody.remove('darkmode');
            else if (!browserTheme.matches && !htmlBody.contains('darkmode')) 
                document.body.classList.add('darkmode');
        }
    });
}

export default themeHandler;