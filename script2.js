const spnQt = document.getElementById('spnQtd');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

import questions from "./questions";

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(){
    spnQt.innerHTML = `${currentQuestionIndex + 1} / ${questions.length}`;
    const item = questions[currentQuestionIndex];
    optionsElement.innerHTML = "";
    questionElement.innerHTML = item.questionElement;

    item.optionsElement.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">
                ${answer.option}
        `;

        optionsElement.appendChild(div);
    });
    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextButton)
    })
}

loadQuestion();