
var introContainer = document.getElementById("welcome");
var quizContainer = document.getElementById("quiz-container");
var mainSubmitBtn = document.getElementById("submit");
var timeEl = document.getElementById("timer");
var quizQuestion = document.getElementById("choice-question");
var answerA = document.getElementById("choice-a");
var answerB = document.getElementById("choice-b");
var answerC = document.getElementById("choice-c");
var answerD = document.getElementById("choice-d");
var gameOverContainer = document.getElementById("end-game");
var timeInterval;
var timeLeft;
var objQuestion;
var correctAnswer;
var currentQuestionIndex = 0;
var highScores = JSON.parse(localStorage.getItem("highScores"))
var highScore = localStorage.getItem('highScore');

var questions = [{
    q: "What is the name of Rhaenyra's Dragon?",
    a: "Syrax",
    c1: "Caraxes",
    c2: "Syrax",
    c3: "Seasmoke",
    c4: "Dreamfyre",
}, {
    q: "Who's just like, the absolute worst?",
    a: "Alicent Hightower",
    c1: "Lucerys Valaryon",
    c2: "Viserys Targaryen",
    c3: "Rhaenyra Targaryen",
    c4: "Alicent Hightower",
}, {
    q: "What is the name of the Throne the king sits on top?",
    a: "Iron Throne",
    c1: "Iron Throne",
    c2: "Salt Throne",
    c3: "The Knight throne",
    c4: "The Dreadfort",
}];

mainSubmitBtn.addEventListener("click", function () {

    introContainer.style.display = "none";
    quizContainer.style.display = "block";

    timeLeft = 60;
    timeInterval = setInterval(function () {
        timeEl.textContent = timeLeft + " seconds remain";
        timeLeft--;

        if (timeLeft < 0) {
            timeEl.textContent = "";
            clearInterval(timeInterval);
            gameDone();
        }
    }, 1000);

    setQuestions(0);

});

function setQuestions(i) {
    objQuestion = questions[i];

    if (!objQuestion) {
        gameDone();
        return;
    }

    correctAnswer = objQuestion.a;
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    const button4 = document.createElement("button");

    quizQuestion.textContent = objQuestion.q;
    button1.textContent = objQuestion.c1;
    button2.textContent = objQuestion.c2;
    button3.textContent = objQuestion.c3;
    button4.textContent = objQuestion.c4;

    document.querySelector(".buttons").innerHTML = "";
    document.querySelector(".buttons").append(button1);
    document.querySelector(".buttons").append(button2);
    document.querySelector(".buttons").append(button3);
    document.querySelector(".buttons").append(button4);

    // Remove previous event listener before adding a new one
    document
        .querySelector(".buttons")
        .removeEventListener("click", buttonClickHandler);
    document
        .querySelector(".buttons")
        .addEventListener("click", buttonClickHandler);

    function buttonClickHandler(event) {
        if (event.target.matches("button")) {
            if (event.target.textContent === correctAnswer) {
                console.log("yay");
                setQuestions(i + 1);
            } else {
                console.log("boo");
                timeLeft -= 5;
                if (timeLeft <= 0) {
                    timeLeft = 0;
                    gameDone();
                } else {
                    setQuestions(i + 1);
                }
            }
            event.stopImmediatePropagation();
            currentQuestionIndex++;
            setQuestions(currentQuestionIndex);
        }
    }
}

function checkCorrectAnswer(chosenAnswer) {
    if (chosenAnswer === correctAnswer) {
        console.log("Correct answer!");
    } else {
        timeLeft -= 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        console.log("Game over");
        gameDone();
    } else {
        setQuestions(currentQuestionIndex);
    }
}

function gameDone() {
    clearInterval(timeInterval);
    introContainer.style.display = "none";
    quizContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    var finalScore = timeLeft;
    var gameOverMessage = "YOU DIED! Your final score is: " + finalScore;
    gameOverMessage += "<br>High Score: " + highScore;
    gameOverContainer.textContent = gameOverMessage;
    if (finalScore > highScore) {
        localStorage.setItem('highScore', finalScore);
        var saveBtn = document.getElementById("saveBtn");
        
    }
}


setQuestions(0);