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
var form = document.querySelector('#form')
var submitContainer = document.querySelector('.submitContainer')
var startingText = 'Hello! This is a Javascript Quiz, press start to begin! You have 60 seconds. If you get a question incorrect you will have 5 seconds removed from the timer.. Good luck!'
var countDown = document.querySelector('.countDown')
var secondsLeft = 60;
var clickedValue = ''
var points = 0
var correctMessage = 'Correct!'
var incorrectMessage = 'Incorrect! -5 seconds!'
var highScores = document.querySelector('.highScoresPage')
var stored = [];
var list = document.querySelector('#list')


// var stored = JSON.parse(localStorage.getItemt("codequiz")) || []
answer1.addEventListener("click",checkAnswer);
answer2.addEventListener("click",checkAnswer);
answer3.addEventListener("click",checkAnswer);
answer4.addEventListener("click",checkAnswer);
submitForm.addEventListener("click", saveUser);

const question1 = {

    question: 'Javascript is a programming language that allows for dynamic pages, it runs most of the web today!',
    answer1: 'True',
    answer2:'The internet is run by elves',
    answer3: 'The internet is all html and css',
    answer4: 'No, the internet is run on Java',
    correct: 'True'
};

const question2 = {
    question: 'In Javascript what would you use to iterate through an array?',
    answer1: 'The array method .splice',
    answer2:'Variables',
    answer3: 'An If/Else statement',
    answer4: 'A for loop',
    correct: 'A for loop',
};

const question3 = {
    question: 'What conditional is used applying code IF something specific (the condition) is satisfied?',
    answer1: 'The foreach array method',
    answer2:'A for loop',
    answer3: 'An If statement',
    answer4: 'document.querySelectorAll',
    correct: 'An If statement',
};

const question4 = {
    question: 'which is the best way to ensure you select an element from the DOM by ID?',
    answer1: 'document.querySelectorAll()',
    answer2:'document.querySelector()',
    answer3: 'document.getElementbyID()',
    answer4: 'select.ID()',
    correct: 'document.getElementbyID()',
};

const question5 = {
    question: 'which declares the variable guacamole and sets it to "yummy"? ',
    answer1: 'var guacamole = "yummy"',
    answer2:'guacamole = yummy',
    answer3: 'set guacamole yummy',
    answer4: 'variable guacamole is yummy',
    correct: 'var guacamole = "yummy"',
};

const question6 = {
    question: 'What is the best way to get good at Javascript?',
    answer1: 'Give up',
    answer2:'Build your own projects that interest you, persevere, and practice You can do this!',
    answer3: 'Watch one long youtube video covering everything',
    answer4: 'ChatGPT',
    correct: 'Build your own projects that interest you, persevere, and practice You can do this!',
};

const question7 = {
    question: 'Javascript has built in functions and methods, which one is NOT one of them?',
    answer1: 'Math.floor(Math.random()',
    answer2:'window.document.createElement()',
    answer3: 'array.push()',
    answer4: 'turnOff.myComputer()',
    correct: 'turnOff.myComputer()',
};

var questionArray = [question1,question2,question3,question4,question5,question6,question7];

var questionUsed = Math.floor(Math.random() * questionArray.length);

function startQuiz(){
    
    if (questionArray == undefined || questionArray.length === 0 || secondsLeft === 0){
        endQuiz();
        console.log(points)
    }
    else {
    questionUsed = Math.floor(Math.random() * questionArray.length);
    question.textContent = (questionArray[questionUsed].question);
    answer1.textContent = (questionArray[questionUsed].answer1);
    answer2.textContent = (questionArray[questionUsed].answer2);
    answer3.textContent = (questionArray[questionUsed].answer3);
    answer4.textContent = (questionArray[questionUsed].answer4);

  
    
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
        correctIncorrect.setAttribute('style', 'color: green;')
        correctIncorrect.textContent = correctMessage
        startQuiz();
    } else {
        secondsLeft = secondsLeft - 5;
        questionArray.splice(questionUsed, 1);
        correctIncorrect.setAttribute('style', 'color: red;')
        correctIncorrect.textContent = incorrectMessage
        startQuiz();
    }
}

function endQuiz(){
   hideQuiz();
   showUser();
   highScores.setAttribute("style", 'display: flex;')
   countDown.setAttribute('style', 'display: none');
}

var clock = function timer(){setInterval(function(){
    secondsLeft--;
    countDown.textContent = secondsLeft;
    if (secondsLeft < 1){
        clearInterval(clock);
        secondsLeft = 1
    }
}, 1000)} 

function saveUser(event){
    stored = JSON.parse(localStorage.getItem("codequiz")) || [];
    console.log(stored);
    stored.push({
        user: document.getElementById("user-name").value,
        score:points+secondsLeft,
    })
    localStorage.setItem("codequiz",JSON.stringify(stored));
    event.preventDefault();
    hideQuiz();
    hideUser();
    showScores();
}

function hideUser(){
    submitContainer.setAttribute('style', 'display:none;');
    submitForm.setAttribute('style', 'display:none;');
    highScores.setAttribute("style", 'display: none;');
}

function showUser(){
    submitContainer.setAttribute('style', 'display: flex;');
    question.textContent = `score: ${points+secondsLeft}`
    question.setAttribute('style', 'display: flex;');
    submitForm.setAttribute('style', 'display: flex;');
}

function showScores(){
    submitContainer.setAttribute('style', 'display: flex;');
    form.setAttribute('style', 'display:none;');
    for (let index = 0; index < stored.length; index++) {
        const user = stored[index].user;
        const score = stored[index].score;
        if (score)
        var highScore = score
        const listItem = document.createElement('li');
        listItem.classList.add('answerBtn',)
        listItem.textContent = user +': '+score;
        list.append(listItem);
        
    }
    highScores.setAttribute('style', 'display: flex;')
    question.textContent = 'Scores saved from localStorage'
    question.setAttribute('style', 'display: flex');
}
