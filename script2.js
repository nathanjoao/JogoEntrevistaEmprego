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
    spnQtd.innerHTML = `${currentQuestionIndex + 1} / ${questions.length}`;
    const item = questions[currentQuestionIndex];
    an
}