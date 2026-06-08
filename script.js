// Mudar cores do tema ao clicar no botão
const button = document.getElementById('changeTheme');

button.addEventListener('click', () => {
    const root = document.documentElement;
    const currentPrimary = getComputedStyle(root).getPropertyValue('--primary-color').trim();

    if(currentPrimary === '#6a0dad') {
        // Tema alternativo (inverso)
        root.style.setProperty('--primary-color', '#ffffff');
        root.style.setProperty('--secondary-color', '#6a0dad');
        root.style.setProperty('--accent-color', '#b19cd9');
    } else {
        // Tema padrão
        root.style.setProperty('--primary-color', '#6a0dad');
        root.style.setProperty('--secondary-color', '#ffffff');
        root.style.setProperty('--accent-color', '#9b59b6');
    }
});