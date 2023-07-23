/* 
To Do: 
-Finish the display high scores function
-link the view high scores button to that page
-End the timer
-link clear highscores button
-Style the buttons a little?
*/


var countDown = document.querySelector('.countDown');
var quizBtn  = document.querySelectorAll('.answerBtn');
var quizBox = document.querySelectorAll('.quizBox');
var startButton = document.querySelector('#start');
var correctIncorrect = document.querySelector('.correctIncorrect');
var question = document.querySelector('#question');
var answer1 = document.querySelector('#one');
var answer2 = document.querySelector('#two');
var answer3 = document.querySelector('#three');
var answer4 = document.querySelector('#four');
var submitForm = document.querySelector('#save-user')
var submitContainer = document.querySelector('.submitContainer')
var startingText = 'Hello! This is a Javascript Quiz, press start to begin! You have 60 seconds. If you get a question incorrect you will have 5 seconds removed from the timer.. Good luck!'
var countDown = document.querySelector('.countDown')
var secondsLeft = 5;
var clickedValue = ''
var points = 0
var correctMessage = 'Correct!'
var incorrectMessage = 'Incorrect! -2 seconds!'
var highScores = document.querySelector('.highScoresPage')
// var stored = JSON.parse(localStorage.getItemt("codequiz")) || []
answer1.addEventListener("click",checkAnswer);
answer2.addEventListener("click",checkAnswer);
answer3.addEventListener("click",checkAnswer);
answer4.addEventListener("click",checkAnswer);
submitForm.addEventListener("click", saveUser);
const question1 = {

    question: 'question',
    answer1: 'str1',
    answer2:'str2',
    answer3: 'str3',
    answer4: 'str4',
    correct: 'str4'
};

const question2 = {
    question: 'question7',
    answer1: 'str1',
    answer2:'str2',
    answer3: 'str3',
    answer4: 'str4',
    correct: 'str4',
};

const question3 = {
    question: 'question6',
    answer1: 'str1',
    answer2:'str2',
    answer3: 'str3',
    answer4: 'str4',
    correct: 'str4',
};

const question4 = {
    question: 'question1',
    answer1: 'str1',
    answer2:'str2',
    answer3: 'str3',
    answer4: 'str4',
    correct: 'str4',
};

const question5 = {
    question: 'question2',
    answer1: 'str1',
    answer2:'str2',
    answer3: 'str3',
    answer4: 'str4',
    correct: 'str4',
};

const question6 = {
    question: 'question3',
    answer1: 'str1',
    answer2:'str2',
    answer3: 'str3',
    answer4: 'str4',
    correct: 'str4',
};

const question7 = {
    question: 'question4',
    answer1: 'str1',
    answer2:'str2',
    answer3: 'str3',
    answer4: 'str4',
    correct: 'str4',
};

var questionArray = [question1,question2,question3,question4,question5,question6,question7];

var questionUsed = Math.floor(Math.random() * questionArray.length);

function startQuiz(){
    //create safety call if the arr is underfined OR length is < 0 OR is secondsLeft < 0 then end quiz function else {}
    // 1. already accomplished just have to fill in the text

    // I think done? 
    if (questionArray == undefined || questionArray.length === 0 || secondsLeft === 0){
        endQuiz();
        console.log(points)
    }
    else {
    questionUsed = Math.floor(Math.random() * questionArray.length);
   // console.log(questionUsed,questionArray)
    question.textContent = (questionArray[questionUsed].question);
    answer1.textContent = (questionArray[questionUsed].answer1);
    answer2.textContent = (questionArray[questionUsed].answer2);
    answer3.textContent = (questionArray[questionUsed].answer3);
    answer4.textContent = (questionArray[questionUsed].answer4);

    //checkAnswer();
    
}}
function hideQuiz(){
    for (var i = 0; i < quizBtn.length; i++) {
        quizBtn[i].setAttribute("style", "display: none;");
        
    }
    correctIncorrect.setAttribute("style", "display: none;");
    question.setAttribute("style", "display: none");

};
function showQuiz(){
    for (var i = 0; i < quizBtn.length; i++) {
        quizBtn[i].setAttribute("style", "display: flex")};
        correctIncorrect.setAttribute("style", "display: flex;");
        question.setAttribute("style", "display: flex");
        correctIncorrect.textContent = ''
};

window.addEventListener('load', function() {
    question.textContent = startingText;
    hideQuiz();
    hideUser();
    question.setAttribute("style", "display: flex");
    question.textContent = startingText;
    
});

startButton.addEventListener('click', function(){
    startButton.setAttribute('style', 'display: none;');
    clock();
    showQuiz();
    startQuiz();
});

function checkAnswer(event){
    var userAnswer = event.target.textContent
    if(userAnswer === questionArray[questionUsed].correct){
        points += 1;
       questionArray.splice(questionUsed, 1);
        correctIncorrect.textContent = correctMessage
        startQuiz();
    } else {
        secondsLeft = secondsLeft - 2;
        questionArray.splice(questionUsed, 1);
        // Styling
        correctIncorrect.textContent = incorrectMessage
        startQuiz();
    }
}

function endQuiz(){
   hideQuiz();
   showUser();
   highScores.setAttribute("style", 'display: flex;');
}

var clock = function timer(){setInterval(function(){
    secondsLeft--;
    countDown.textContent = secondsLeft;
    if (secondsLeft < 0){
        clearInterval(clock);
        endQuiz();
    }
}, 1000)} 

function stopTimer(){}

function saveUser(event){
    stored = JSON.parse(localStorage.getItem("codequiz")) || [];
    stored.push({
        user: document.getElementById("user-name").value,
        score:points+secondsLeft,
    })
    localStorage.setItem("codequiz",JSON.stringify(stored));
    event.preventDefault();
    hideUser();
    hideQuiz();
    showScores();
}
var stored = JSON.parse(localStorage.getItem("codequiz")) || [];

function hideUser(){
    submitContainer.setAttribute('style', 'display:none;');
    submitForm.setAttribute('style', 'display:none;');
    highScores.setAttribute("style", 'display: none;');
}

function showUser(){
    submitContainer.setAttribute('style', 'display: flex;');
    submitForm.setAttribute('style', 'display: flex;');
}

function showScores(){
    submitForm.setAttribute('style', 'display:none;');
    highScores.appendChild(stored);
}
