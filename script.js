
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

// console.log(answerA);
// console.log(timeEl);
// console.log(quizContainer);
// console.log(mainSubmitBtn);

//=========================================================

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

console.log(Questions[1].c1);

//=========================================================

mainSubmitBtn.addEventListener("click", function loadQuestion() {

    introContainer.style.visibility = "hidden";
    quizContainer.style.visibility = "visibile";

    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        
    })

})