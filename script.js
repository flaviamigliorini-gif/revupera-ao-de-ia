// Array contendo diretrizes completas sobre imunidade digital
const diretrizesSeguranca = [
    "🔍 Cruzamento de Fontes: Não confie em mídias de autoria desconhecida. Busque a mesma informação em pelo menos dois veículos de imprensa tradicionais e reconhecidos.",
    "👀 Avaliação de Simetria Craniana: Ao desconfiar de uma imagem de rosto, amplie e analise as orelhas e os brincos. Os algoritmos de IA ainda falham severamente na renderização simétrica de acessórios.",
    "📅 Contextualização Histórica: Muitas ondas de desinformação utilizam vídeos reais, porém gravados anos atrás em cenários completamente diferentes. Use mecanismos de busca reversa de imagens.",
    "🧠 Controle de Engajamento Emocional: Se o conteúdo visual desperta ira imediata, pânico ou senso de urgência absurdo, pare. É o gatilho perfeito usado por arquiteturas de fake news para viralização rápida.",
    "🤖 Análise de Ruído de Fundo: Em áudios clonados por IA, o tom de voz pode parecer idêntico, mas costuma haver ausência de respiração natural e cortes abruptos nas transições de frequência."
];

// Captura dos elementos do DOM
const botaoDiretriz = document.getElementById('btn-dica');
const painelDiretriz = document.getElementById('painel-dica');
const textoDiretriz = document.getElementById('texto-dica');

// Execução da lógica interativa
botaoDiretriz.addEventListener('click', () => {
    // Escolha aleatória sem repetição idêntica imediata
    const index = Math.floor(Math.random() * diretrizesSeguranca.length);
    
    textoDiretriz.innerHTML = `<strong>Diretriz Recomendada:</strong> ${diretrizesSeguranca[index]}`;
    
    // Apresenta o painel removendo o elemento oculto do CSS
    painelDiretriz.classList.remove('hidden');
});
