const perguntas = [
    { pergunta: "Quais são suas forças?", tipo: "pessoal" },
    { pergunta: "Quais são suas fraquezas?", tipo: "pessoal" },
    { pergunta: "Por que você está interessado em trabalhar aqui?", tipo: "empresa" },
    { pergunta: "Onde você se vê em cinco anos?", tipo: "futuro" },
    { pergunta: "Por que você quer sair de sua empresa atual?", tipo: "experiencia" },
    { pergunta: "Por que existe um intervalo entre esse seu emprego e outro?", tipo: "experiencia" },
    { pergunta: "Diga algo que só você consegue oferecer.", tipo: "pessoal" },
    { pergunta: "Quais são as três coisas que seu ex-gerente gostaria que você melhorasse?", tipo: "experiencia" },
    { pergunta: "Você está disposto a se mudar por um emprego?", tipo: "experiencia" },
    { pergunta: "Você tem disponibilidade para viajar a trabalho?", tipo: "experiencia" },
    { pergunta: "Conte sobre uma realização sua que te dá orgulho.", tipo: "experiencia" },
    { pergunta: "Conte sobre uma vez que você cometeu um erro.", tipo: "experiencia" },
    { pergunta: "Qual o seu emprego dos sonhos?", tipo: "futuro" },
    { pergunta: "Como você ficou sabendo sobre esta oportunidade?", tipo: "empresa" },
    { pergunta: "O que você pensa em fazer nos seus primeiros 30/60/90 dias nesse novo emprego?", tipo: "empresa" },
    { pergunta: "Conte sobre seu currículo.", tipo: "experiencia" },
    { pergunta: "Me fale sobre sua formação acadêmica.", tipo: "experiencia" },
    { pergunta: "Como você se descreveria?", tipo: "pessoal" },
    { pergunta: "Conte sobre uma ocasião em que você teve de lidar com uma situação complicada.", tipo: "experiencia" },
    { pergunta: "Por que eu devo te contratar?", tipo: "empresa" },
    { pergunta: "Por que você está procurando por outro emprego?", tipo: "experiencia" },
    { pergunta: "Você trabalharia em fins de semana e feriados?", tipo: "experiencia" },
    { pergunta: "Como você lidaria com um cliente irritado?", tipo: "experiencia" },
    { pergunta: "Qual a sua pretensão salarial?", tipo: "empresa" },
    { pergunta: "Conte sobre uma vez em que você foi além do esperado em um projeto.", tipo: "experiencia" },
    { pergunta: "Quem são nossos competidores?", tipo: "empresa" },
    { pergunta: "Qual foi sua maior falha?", tipo: "experiencia" },
    { pergunta: "O que te motiva?", tipo: "pessoal" },
    { pergunta: "Qual a sua disponibilidade?", tipo: "empresa" },
    { pergunta: "Você possui um mentor? Quem é?", tipo: "pessoal" },
    { pergunta: "Conte sobre uma vez em que você discordou de seu chefe.", tipo: "experiencia" },
    { pergunta: "Como você lida com a pressão?", tipo: "experiencia" },
    { pergunta: "Qual o nome do nosso CEO/Presidente?", tipo: "empresa" },
    { pergunta: "Quais seus objetivos de carreira?", tipo: "futuro" },
    { pergunta: "O que faz com que você acorde todos os dias animado?", tipo: "pessoal" },
    { pergunta: "O que seu gestor diria sobre você?", tipo: "experiencia" },
    { pergunta: "Quais são os pontos fortes e fracos do seu chefe?", tipo: "experiencia" },
    { pergunta: "Se eu ligasse para seu chefe agora e lhe perguntasse quais pontos você poderia melhorar profissionalmente, o que ele responderia?", tipo: "experiencia" },
    { pergunta: "Você é um líder ou um seguidor?", tipo: "pessoal" },
    { pergunta: "Qual foi o último livro que você leu por diversão?", tipo: "pessoal" },
    { pergunta: "Conte algo que te irrita sobre seus colegas de trabalho.", tipo: "pessoal" },
    { pergunta: "Quais são seus hobbies?", tipo: "pessoal" },
    { pergunta: "Qual é seu site ou aplicativo favorito?", tipo: "pessoal" },
    { pergunta: "O que te deixa desconfortável?", tipo: "pessoal" },
    { pergunta: "Fale sobre suas experiências de liderança.", tipo: "experiencia" },
    { pergunta: "Como você demitiria alguém?", tipo: "experiencia" },
    { pergunta: "O que você mais gosta e o que te deixa desanimado em trabalhar nessa indústria/setor?", tipo: "experiencia" },
    { pergunta: "Você trabalharia mais de 40 horas por semana?", tipo: "experiencia" },
    { pergunta: "Sobre o que eu ainda não te perguntei?", tipo: "empresa" },
    { pergunta: "Você possui alguma pergunta para fazer a mim?", tipo: "empresa" }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

// Inicia o jogo
function iniciarJogo() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    questionContainer.classList.remove('hidden');
    resultElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    mostrarPergunta();
}

// Mostra a próxima pergunta
function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    questionElement.innerText = perguntaAtual.pergunta;

    // Adiciona opções de resposta
    optionsElement.innerHTML = '';
    ['pessoal', 'futuro', 'experiencia', 'empresa'].forEach(tipo => {
        const button = document.createElement('button');
        button.innerText = tipo;
        button.classList.add('option-button');
        button.addEventListener('click', () => verificarResposta(tipo));
        optionsElement.appendChild(button);
    });
}

// Verifica a resposta do usuário
function verificarResposta(tipoEscolhido) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    if (tipoEscolhido === perguntaAtual.tipo) {
        pontuacao++;
    }

    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// Mostra o resultado final
function mostrarResultado() {
    questionContainer.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}

// Reinicia o jogo
restartButton.addEventListener('click', iniciarJogo);
nextButton.addEventListener('click', mostrarPergunta);

// Inicia o jogo ao carregar a página
window.addEventListener('load', iniciarJogo);
