document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    
    // Função para aplicar a preferência de tema ativa
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem('site-theme');
        
        // Se houver configuração salva, aplica; caso contrário, verifica preferência do sistema
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark-mode');
        }
    };

    // Gerenciador do evento de clique
    themeButton.addEventListener('click', () => {
        // Alterna a classe no elemento <body>
        document.body.classList.toggle('dark-mode');
        
        // Define o estado no armazenamento local de acordo com a presença da classe
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('site-theme', 'dark');
        } else {
            localStorage.setItem('site-theme', 'light');
        }
    });

    // Executa a inicialização
    initializeTheme();
});
