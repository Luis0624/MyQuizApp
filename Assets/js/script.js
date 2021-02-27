//global variables
var timeRemaining; // Time left
var timeInterval; //time interval
var quizProgress; // What question youre currently on
var answerChoice; // A choice from array 0-3
var finalScore; // The final score for the game
var nameSubmit; // The name when submitting a score

// Query Selectors for elements on the page
var mainBody = document.querySelector(".main");
var timerEl = document.querySelector(".time-left");
var QuestionEl = document.querySelector(".questions");
var ansChoiceEl = document.querySelectorAll(".ans-choice");
var startButtonEl = document.querySelector(".start-button");
// var answerValidityEl = document.querySelector(".answer-validity");

//Questions array
var questions = [
    {
        title: "Question 1?",
        options: ["option1 for Q1", "option2 for Q1", "option3 for Q1", "option4 for Q1"], 
        correctAnswer: "Answer is option1"
    },
    {
        title: "Question 2?", 
        options: ["option1 for Q2", "option2 for Q2", "option3 for Q2", "option4 for Q2"], 
        correctAnswer: "Answer is option2"
    },
    {
        Title: "Question 3?",
        options: ["option1 for Q3", "option2 for Q3", "option3 for Q3", "option4 for Q3"],
        correctAnswer: "Answer is option3"
    },
    {
        Title: "Question 4",
        options: ["option1 for Q4", "option2 for Q4", "option3 for Q4", "option4 for Q4"],
        correctAnswer: "Answer is option4"
    },
    {
        Title: "Question 5",
        options: ["option1 for Q5", "option2 for Q5", "option3 for Q5", "option4 for Q5"],
        correctAnswer: "Answer is option4"
    },
]


//start quiz function using start btn, quiz progress starts at 0, 
//initiate timer function, questions and answers function
function startQuiz(){
    quizProgress()
    startTimer()
    showQuestionsAndAnswers()
}

// Function for timer starts at 60sec
function startTimer(){
    timeRemaining = 60;
    timeInterval = setInterval(function() {
        if (timeRemaining > 0){
            timeRemaining--;
            timerEl.textContent = timeRemaining;
        } else {
            clearInterval(timeInterval);
            // timerEl.textContent = timeRemaining;
            
        }
    }, 1000);
}
//function to show question progress
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

