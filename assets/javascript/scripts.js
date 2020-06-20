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


var start = document.querySelector("#start");
var quizQuestion = document.querySelector("#question");
var quizAnswers = document.querySelector("#answers");
var timer = document.querySelector("#timer");
var secondsLeft = 60;


// ----- TIMER ----- //
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time remaining: " + secondsLeft + " seconds";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Out of time!");
      }
    }, 1000);
  }
  
// ----- ON CLICK EVENTS ----- //

// WHEN start button is clicked...
// ...start the timer
start.addEventListener("click", function(){
    setTime();

    //...serve questions in order to #question div, and answers to answers div.
    for (var i = 0; i < questionSet.length; i++) {
        quizQuestion.text(questionSet[i].question)
        quizAnswers.innerHTML("<ul>" + <li></li>) //pondering over how to serve up a set of answers vs just one question...

    // ...hide the start button


    //WHEN an answer is selected..

        //...check whether the chosen answer is correct or incorrect.

        //...store whether the answer is correct or inncorrect.

        //...alert the user whether the answer is correct or incorrect (IF incorrect, subract 5 seconds from secondsLeft)

        //...serve up the next question and answer set.


     //IF there are no questions left to serve up OR IF secondsLeft = 0...

        //Hide all elements in #subContainer

        //Display total score/number of correct answers

        //Display High Scores...store score on High Scores

        //Display "Try Again" button



 }
})