function toggleMode() {
    const themeLink = document.getElementById('themeStyle');
    const toggleIcon = document.getElementById('toggle');

    if (themeStyle.getAttribute('href') === 'css/light.css') {
        themeLink.setAttribute('href', 'css/dark.css');
        toggleIcon.className = 'fa-solid fa-toggle-on';
    } else {
        themeLink.setAttribute('href', 'css/light.css');
        toggleIcon.className = 'fa-solid fa-toggle-on';
    }

}