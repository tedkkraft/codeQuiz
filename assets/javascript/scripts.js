var questionSet = [{
    question: "A JavaScript string is zero or more characters written inside...",
    answers: ["Brackets", "Parentheses", "Quotes", "Semicolons"],
    correctAnswer: "Quotes"
}, {
    question: "JavaScript arrays are used to store multiple ______ in a single variable.",
    answers: ["Numbers", "Characters", "Functions", "Values"],
    correctAnswer: "Values"
}, {
    question: "Comments in Javascript start with...",
    answers: ["//", "/*", "-m", "<--"],
    correctAnswer: "//"
}, {
    question: "When identifying variables in JavaScript with unique names, names can begin with letters, digits, underscores, or a dollar sign.",
    answers: ["True", "False"],
    correctAnswer: "False"
}, {
    question: "Which of the following examples properly defines a function?",
    answers: ["function newFunction()", "function = newFunction()", "var = newFunction;", ".newFunction()"],
    correctAnswer: "function newFunction()"
}, {
    question: "The code to be executed by a function is placed inside...",
    answers: ["Brackets", "Curly brackets", "Quotes", "Parentheses"],
    correctAnswer: "Curly brackets"
}, {

}];


var button = document.querySelector("#button");
var quizQuestion = document.querySelector("#question");
var quizAnswers = document.querySelector("#answers");
var timer = document.querySelector("#timer");
var secondsLeft = 30;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time remaining:" + secondsLeft + "seconds";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Out of time!");
      }
  
    }, 1000);
  }
  

button.addEventListener("click", function(){

    for (var i = 0; i < questionSet.length; i++) {
console.log (questionSet.length);
    }
})