// Query Selectors for elements on the page
var mainBody = document.querySelector(".main");
var timerEl = document.querySelector(".time-left");
var question = document.querySelector("#question");

// buttons
var startButton = document.querySelector("#start");
var nextButton = document.querySelector("#next");
var submitButton = document.querySelector("#done");

// options
var options = document.querySelectorAll("input[type='radio']");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

// current score details
var currentScore = 0;
var currentScoreLabel = document.querySelector("#currentScore");
var scoreBlock = document.querySelector(".score-block");

var highestScore = 0;
var highestScoreLabel = document.querySelector("#highScore");

if (localStorage.hasOwnProperty("Highest Score")) {
    highestScore = localStorage.getItem("Highest Score");
    highestScoreLabel.innerHTML = highestScore;
}

//optionLabels
var option1Label = document.querySelector("#option1 ~ label");
var option2Label = document.querySelector("#option2 ~ label");
var option3Label = document.querySelector("#option3 ~ label");
var option4Label = document.querySelector("#option4 ~ label");



var currentQuestion = -1;
var currentOptions = -1;

//Questions array
var questions = [
    {
        question: "What is JavaScript?",
        options: ["Language", "Database", "Icecream", "Wine"], 
        correctAnswer: "Language"
    },
    {
        question: "Which company developed JavaScript?", 
        options: ["Netscape", "Google", "Facebook", "Twitter"], 
        correctAnswer: "Netscape"
    },
    {
        question: "What is the === operator?",
        options: ["assignment operator", "strict equality operator", "loose equality operator", "inequality operator"],
        correctAnswer: "strict equality operator"
    },
    {
        question: "What does the break statement?",
        options: ["exits from the current program", "skips to the next iteration", "exits from the current loop", "throws a 'break' error"],
        correctAnswer: "exits from the current loop"
    }
]


//start quiz function using start btn, quiz progress starts at 0, 
//initiate timer function, questions and answers function
function startQuiz(){
    // star the timer
    startTimer();

    // hide the start quiz button
    startButton.style.display = "none";

    // hide the 'Clear ScoreBoard' button
    scoreResetButton.style.display = "none";

    // show the next button
    showNextButton();

    // show the current score label
    scoreBlock.style.display = "block";
}

// Function for timer starts at 60sec
function startTimer(){
    let timeRemaining = 30;
    let timeInterval = setInterval(function() {
        if (timeRemaining > 0){
            timeRemaining--;
            timerEl.textContent = timeRemaining;

        } else {
            clearInterval(timeInterval);
            // timerEl.textContent = timeRemaining;
            
                
    alert("Time is up! Try again.");
    location.reload();
            
        }
    }, 1000);

}

//function to show question progress
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showNextQuestion() {
    if (currentQuestion >= 0 && currentOptions >= 0) {
        checkAnswer();
    }

    currentQuestion+=1;
    currentOptions+=1;

    question.innerHTML = questions[currentQuestion].question;
    option1Label.innerHTML = questions[currentOptions].options[0];
    option2Label.innerHTML = questions[currentOptions].options[1];
    option3Label.innerHTML = questions[currentOptions].options[2];
    option4Label.innerHTML = questions[currentOptions].options[3];

    // if this question is the last one:
        // 1. hide the Next button
        // 2. show the Submit button
    if (currentQuestion === questions.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "block";
    }
}

function showNextButton() {
    nextButton.style.display = "block";
    showNextQuestion();
    showOptions();
}

function showOptions() {
    option1.style.display = "block";
    option2.style.display = "block";
    option3.style.display = "block";
    option4.style.display = "block";
}


function submitQuiz() {
    checkAnswer();

    let player = "";
    while (player=="") {
        player = window.prompt("Enter Your Name:", "");
    }

    localStorage.setItem("Player: Score", player + ": " + currentScore);

    if (currentScore > highestScore) {
        highestScore = currentScore;
        localStorage.setItem("Highest Score", highestScore);
    }

    location.reload();
}

// check if the user selected the correct answer
function checkAnswer() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let optionLabelSelector = 'label[for=' + options[i].id + ']';
            let optionLabel = document.querySelector(optionLabelSelector);

            // the answer selected from the radio buttons
            let selectedAnswer = optionLabel.innerHTML;

            if (selectedAnswer === questions[currentOptions].correctAnswer) {
                currentScore+=1;
                currentScoreLabel.innerHTML = currentScore;
            }
            
        }
    }
}

function deleteQuizHistory() {
    localStorage.clear();
    location.reload();
}