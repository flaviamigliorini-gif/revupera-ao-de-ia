// Array com dicas de cidadania digital e checagem de fatos
const dicas = [
    "🔍 Sempre verifique a fonte: Veja se portais de notícias confiáveis também estão publicando a mesma informação.",
    "👀 Olhe os detalhes: Em deepfakes de vídeo, preste atenção se os olhos piscam normalmente ou se os movimentos da boca combinam com o som.",
    "📅 Cheque a data da publicação: Muitas notícias falsas são fatos antigos tirados de contexto para enganar o público.",
    "🧠 Não compartilhe por impulso: Se uma notícia te deixou muito irritado ou muito animado, pare e respire antes de repassar.",
    "🤖 Use ferramentas de checagem: Sites como Lupa, Aos Fatos e Fato ou Fake ajudam a desmentir boatos que circulam na internet."
];

// Seleção dos elementos do HTML
const botaoDica = document.getElementById('btn-dica');
const painelDica = document.getElementById('painel-dica');
const textoDica = document.getElementById('texto-dica');

// Evento de clique para mostrar uma dica aleatória
botaoDica.addEventListener('click', () => {
    // Escolhe um índice aleatório do array de dicas
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    
    // Define o texto da dica selecionada
    textoDica.textContent = dicas[indiceAleatorio];
    
    // Remove a classe 'hidden' para tornar o painel visível
    painelDica.classList.remove('hidden');
});
