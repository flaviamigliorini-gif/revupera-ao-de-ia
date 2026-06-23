// Seleciona o botão de alternar tema
const themeToggleBtn = document.getElementById('theme-toggle');

// Verifica se o usuário já tem uma preferência salva no navegador
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Adiciona o evento de clique para alternar o tema
themeToggleBtn.addEventListener('click', () => {
    // Verifica o tema atual
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
