
function toggleTheme() {

    const currentTheme = document.body.getAttribute('class');
    console.log(currentTheme)
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
};