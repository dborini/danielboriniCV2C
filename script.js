/*Juego preguntados en "juego.html*/

const questions = [
    {
        question: "Cuál es la capital de Argentina?",
        answers: [
            { text: "Lima", correct: false},
            { text: "CABA", correct: true},
            { text: "Santiago", correct: false},
            { text: "Washington", correct: false},
        ]
    },
    {
        question: "Cuál es la capital de Bolivia?",
        answers: [
            { text: "Ottawa", correct: false},
            { text: "Sao Paulo", correct: false},
            { text: "La Paz", correct: true},
            { text: "Wellington", correct: false},
        ]
    },
    {
        question: "Cuál es la capital de Japón?",
        answers: [
            { text: "Tokio", correct: true},
            { text: "Beijing", correct: false},
            { text: "Seul", correct: false},
            { text: "Ankara", correct: false},
        ]
    },
    {
        question: "Cuál es la capital de Perú?",
        answers: [
            { text: "Lima", correct: true},
            { text: "Quito", correct: false},
            { text: "Bogota", correct: false},
            { text: "Montevideo", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();

/*Alerta SPAM JavaScript en "experiencia.html"*/
function redirigir() {
    window.location.href = "juego.html";
}

/*Mostrar el mensaje "spam"*/
function mostrarSpam() {
    const spamMessage = document.getElementById('spam-message');
    spamMessage.style.display = 'block';

    /*Temporizador para cerrar el popup del spam posterior a 14 segundos*/
    setTimeout(() => {
        spamMessage.style.display = 'none';
    }, 14000); // 14 segundos
}