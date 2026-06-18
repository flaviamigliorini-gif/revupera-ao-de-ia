document.addEventListener("DOMContentLoaded", () => {
    const botaoAnalisar = document.getElementById("analisar-btn");
    const inputNoticia = document.getElementById("noticia-input");
    const divResultado = document.getElementById("resultado-analise");

    // Lista de termos comumente associados a desinformação caça-cliques (clickbait)
    const termosSuspeitos = [
        "urgente", "repassar", "olha o que aconteceu", "clique aqui", 
        "meu deus", "milagre", "secreto", "escondido", "cura", 
        "cancelou as aulas", "vazou", "bomba", "farsa"
    ];

    botaoAnalisar.addEventListener("click", () => {
        const texto = inputNoticia.value.trim().toLowerCase();

        // 1. Validação de campo vazio
        if (!texto) {
            exibirResultado(
                "Por favor, digite alguma notícia ou frase para analisar.",
                "var(--danger)",
                "var(--danger-bg)"
            );
            return;
        }

        // 2. Processamento da análise por expressões regulares ou busca de termos
        const contemTermosSuspeitos = termosSuspeitos.some(termo => texto.includes(termo));
        const contemPontuacaoExagerada = /(!{2,}|\?{2,})/.test(texto); // Detecta "!!" ou "??"

        // 3. Exibição da resposta estruturada
        if (contemTermosSuspeitos || contemPontuacaoExagerada) {
            exibirResultado(
                `⚠️ <strong>ALERTA DE SUSPEITA!</strong><br><br>
                Esta mensagem contém elementos típicos de desinformação automatizada (termos alarmistas ou pontuação excessiva). 
                Formatos gerados para viralizar no ambiente escolar costumam apelar para o emocional.<br>
                <strong>Recomendação:</strong> Não repasse antes de pesquisar em uma fonte oficial de notícias.`,
                "var(--warning)",
                "var(--warning-bg)"
            );
        } else {
            exibirResultado(
                `✓ <strong>ESTRUTURA FORMAL ACEITÁVEL</strong><br><br>
                O texto não apresenta os gatilhos comuns de pânico ou clickbait.<br>
                <strong>Atenção:</strong> Lembre-se que conteúdos gerados por IA (áudios e deepfakes) podem imitar perfeitamente canais sérios. Continue exercitando sua cidadania digital e cheque os fatos.`,
                "var(--success)",
                "var(--success-bg)"
            );
        }
    });

    // Função auxiliar para padronizar e suavizar a inserção de estilo dinâmico
    function exibirResultado(mensagem, corTexto, corFundo) {
        divResultado.style.display = "block";
        divResultado.style.color = corTexto;
        divResultado.style.backgroundColor = corFundo;
        divResultado.style.borderLeft = `5px solid ${corTexto}`;
        divResultado.innerHTML = mensagem;
    }
});
