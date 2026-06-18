// Dados do Quiz
const perguntasQuiz = [
    {
        pergunta: "Se você receber um vídeo chocante de uma figura pública dizendo algo absurdo, o que deve fazer primeiro?",
        alternativas: [
            "Compartilhar imediatamente nos grupos da escola.",
            "Procurar em sites de notícias confiáveis para ver se o fato é real.",
            "Ignorar e não contar para ninguém."
        ],
        correta: 1
    },
    {
        pergunta: "Qual dessas alternativas indica um sinal comum de um vídeo feito por IA (Deepfake)?",
        alternativas: [
            "O vídeo tem alta resolução e áudio perfeito.",
            "O piscar de olhos parece não natural e há pequenas falhas borradas ao redor do rosto.",
            "O vídeo foi gravado em um ambiente aberto."
        ],
        correta: 1
    },
    {
        pergunta: "O que caracteriza a prática da Cidadania Digital?",
        alternativas: [
            "Navegar na internet de forma ética, crítica, segura e responsável.",
            "Usar a internet apenas para jogar e assistir vídeos o dia todo.",
            "Acreditar em tudo o que é postado nas redes sociais."
        ],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const elementoPergunta = document.getElementById("pergunta");
const elementoAlternativas = document.getElementById("alternativas");
const elementoResultado = document.getElementById("resultado");

// Função para carregar a pergunta na tela
function carregarPergunta() {
    if (perguntaAtual < perguntasQuiz.length) {
        let q = perguntasQuiz[perguntaAtual];
        elementoPergunta.textContent = q.pergunta;
        elementoAlternativas.innerHTML = "";
        
        q.alternativas.forEach((opcao, index) => {
            let botao = document.createElement("button");
            botao.textContent = opcao;
            botao.classList.add("quiz-btn");
            botao.onclick = () => verificarResposta(index);
            elementoAlternativas.appendChild(botao);
        });
    } else {
        mostrarResultadoFinal();
    }
}

// Função para validar a resposta do aluno
function verificarResposta(indiceSelecionado) {
    if (indiceSelecionado === perguntasQuiz[perguntaAtual].correta) {
        pontuacao++;
    }
    perguntaAtual++;
    carregarPergunta();
}

// Função para exibir o resultado ao término do quiz
function mostrarResultadoFinal() {
    elementoPergunta.classList.add("hidden");
    elementoAlternativas.classList.add("hidden");
    elementoResultado.classList.remove("hidden");
    
    elementoResultado.innerHTML = `
        <p>Você completou o desafio!</p>
        <p>Acertos: ${pontuacao} de ${perguntasQuiz.length}</p>
        <p style="margin-top:15px; font-size:1rem; font-weight:normal;">
            ${pontuacao === perguntasQuiz.length ? "Parabéns! Você é um cidadão digital exemplar!" : "Continue estudando e prestando atenção nas mídias que consome!"}
        </p>
    `;
}

// Inicializa o quiz ao carregar a página
window.onload = carregarPergunta;
