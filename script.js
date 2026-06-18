document.addEventListener("DOMContentLoaded", function() {
    
    // Captura os elementos do HTML
    const botaoAnalisar = document.getElementById("analisar-btn");
    const inputNoticia = document.getElementById("noticia-input");
    const divResultado = document.getElementById("resultado-analise");

    // Função que analisa o texto digitado pelo aluno
    botaoAnalisar.addEventListener("click", function() {
        const texto = inputNoticia.value.trim().toLowerCase();

        // Validação se o campo estiver vazio
        if (texto === "") {
            divResultado.style.display = "block";
            divResultado.style.backgroundColor = "#fee2e2"; // fundo vermelho claro
            divResultado.style.color = "#991b1b";
            divResultado.style.borderLeft = "5px solid #ef4444";
            divResultado.innerHTML = "Por favor, digite alguma notícia ou assunto para analisar.";
            return;
        }

        // Palavras-chave suspeitas comuns em Fake News e Clickbaits
        const termosSuspeitos = [
            "urgente", "repassar", "repassed", "olha o que aconteceu", 
            "clique aqui", "meu deus", "milagre", "secreto", 
            "escondido", "cura", "cancelou as aulas", "vazou"
        ];

        let eSuspeito = false;

        // Verifica se o texto contém palavras suspeitas ou pontuação exagerada (!!!)
        for (let termo of termosSuspeitos) {
            if (texto.includes(termo) || texto.includes("!!!") || texto.includes("???")) {
                eSuspeito = true;
                break;
            }
        }

        // Exibe o resultado com base na análise simulada
        divResultado.style.display = "block";

        if (eSuspeito) {
            divResultado.style.backgroundColor = "#fef3c7"; // fundo amarelo (alerta)
            divResultado.style.color = "#92400e";
            divResultado.style.borderLeft = "5px solid #f59e0b";
            divResultado.innerHTML = `
                ⚠️ <strong>ALERTA DE SUSPEITA!</strong><br>
                Esta notícia possui termos alarmistas, sensacionalistas ou uso excessivo de pontuação. 
                Mídias manipuladas por IA e Fake News adoram usar títulos chocantes para chamar atenção. 
                <strong>Recomendação:</strong> Não compartilhe! Busque em sites de checagem confiáveis.
            `;
        } else {
            divResultado.style.backgroundColor = "#dcfce7"; // fundo verde (ok)
            divResultado.style.color = "#166534";
            divResultado.style.borderLeft = "5px solid #22c55e";
            divResultado.innerHTML = `
                ✓ <strong>ANÁLISE INICIAL CONCLUÍDA</strong><br>
                O título parece neutro, mas lembre-se: Deepfakes e áudios falsos gerados por IA podem parecer muito reais. 
                <strong>Próximo passo:</strong> Mesmo parecendo segura, sempre verifique se a notícia foi postada em algum veículo oficial de comunicação antes de repassar.
            `;
        }
    });
});
