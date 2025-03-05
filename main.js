const questions = [
    {
        question: "What is the Full Form of CSS?",
        answers: [

            { text: "Cascading style system", correct: false },
            { text: "Cascading style sheets", correct: true },
            { text: "Cascading system sheets", correct: false },
            { text: "Cascading system style", correct: false },
        ]
    },

    {

        question: "What is the Full Form of HTML?",
        answers: [

            { text: "HyperText Markdown Language", correct: false },
            { text: "HyperText Markup List", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText Markdown list", correct: false },
        ]
    },

    {

        question: "What is the Full Form of JS?",
        answers: [

            { text: "JavaScript", correct: true },
            { text: "JavaSchema", correct: false },
            { text: "JavaSpring", correct: false },
            { text: "JavaSpringBoot", correct: false },
        ]
    },

    {

        question: "What is the Full Form of TS?",
        answers: [

            { text: "TypeSchema", correct: false },
            { text: "TypeScript", correct: true },
            { text: "TypeSpring", correct: false },
            { text: "TypeString", correct: false },
        ]

    }
];


const questionElements = document.getElementById('question');
const answerButtons = document.getElementById('answer_buttons');
const nextButton = document.getElementById('next-btn');

let currQuestionIdx = 0;
let score = 0;
function startQuiz(){
    currQuestionIdx = 0;
    score =0;
    nextButton.innerHTML = 'Next';
    showQuestions();
}

function showQuestions(){
    resetState();
    let currQuestion =  questions[currQuestionIdx];
    let questionNO = currQuestionIdx +1;
    questionElements.innerHTML = questionNO + ". " + currQuestion.question;

    currQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
        button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){

    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");

    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    });
    nextButton.style.display = "block";
}

function showScore(){
     resetState();
     questionElements.innerHTML = `You Scored ${score} out of ${questions.length} !`;
     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "block";
}


function handleNextButton(){
    currQuestionIdx++;
    if(currQuestionIdx < questions.length){
        showQuestions();
    }

    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currQuestionIdx < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

