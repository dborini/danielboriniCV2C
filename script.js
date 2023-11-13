/*Juego preguntados en "juego.html*/

const questions = [
    {
        question: "¿En qué universidad desempeño mis estudios?",
        answers: [
            { text: "UBA", correct: false},
            { text: "UADE", correct: true},
            { text: "UCA", correct: false},
            { text: "ITBA", correct: false},
        ]
    },
    {
        question: "¿En cuál de los siguientes voluntariados forme parte?",
        answers: [
            { text: "Caritas", correct: false},
            { text: "Niños Exploradores", correct: false},
            { text: "Techo", correct: true},
            { text: "Greenpeace", correct: false},
        ]
    },
    {
        question: "¿En cuál lenguaje de programación poseo conocimientos?",
        answers: [
            { text: "Python", correct: true},
            { text: "C++", correct: false},
            { text: "COBOL", correct: false},
            { text: "PHP", correct: false},
        ]
    },
    {
        question: "¿Cuál de las siguientes carreras es aquella en la cual me estoy formando?",
        answers: [
            { text: "Lic. en Gestión de Tecnología de la Información", correct: true},
            { text: "Ingeniería Industrial", correct: false},
            { text: "Ingeniería Informática", correct: false},
            { text: "Tecnicatura en Desarrollo de Videojuegos", correct: false},
        ]
    },
    {
        question: "¿Bachiller en qué me formé durante mi formación secundaria?",
        answers: [
            { text: "Ciencias Exactas", correct: false},
            { text: "Economía y administración", correct: false},
            { text: "Botánica y ciencias naturales", correct: false},
            { text: "Comunicación Social", correct: true},
        ]
    },
    {
        question: "Además de la licenciatura, ¿qué otra carrera estoy estudiando?",
        answers: [
            { text: "Análisis de Sistemas", correct: false},
            { text: "Periodismo Deportivo", correct: false},
            { text: "Piloto Privado de Avión", correct: true},
            { text: "Diseño gráfico", correct: false},
        ]
    },
    {
        question: "¿En cuál de los siguientes idiomas poseo conocimientos?",
        answers: [
            { text: "Portugués", correct: false},
            { text: "Inglés", correct: true},
            { text: "Francés", correct: false},
            { text: "Italiano", correct: false},
        ]
    },
    {
        question: "¿En cuál de los siguientes softwares no poseo formación?",
        answers: [
            { text: "Adobe Photoshop", correct: false},
            { text: "Adobe Illustrator", correct: true},
            { text: "AutoCAD", correct: false},
            { text: "SolidWorks", correct: false},
        ]
    },
    {
        question: "¿Cómo es mi nombre completo?",
        answers: [
            { text: "Daniel Augusto Borini", correct: true},
            { text: "Daniel Alcides Borini", correct: false},
            { text: "Daniel Agustin Borini", correct: false},
            { text: "Daniel Alberto Borini", correct: false},
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
    nextButton.innerHTML = "Siguiente";
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
    questionElement.innerHTML = `Usted respondió correctamente ${score} preguntas de ${questions.length}`;
    nextButton.innerHTML = "Jugar de nuevo";
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