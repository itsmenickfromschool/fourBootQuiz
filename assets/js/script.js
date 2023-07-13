var countDown = document.querySelector('.countDown');
var startQuiz = document.querySelector('.startQuiz');
var quizBtn  = document.querySelectorAll('.answerBtn');
var quizBox = document.querySelectorAll('.quizBox');
var startButton = document.querySelector('#start');
var correctIncorrect = document.querySelector('.correctIncorrect');
var question = document.querySelector('#question')
var startingText = 'Hello! This is a Javascript Quiz, press start to begin! You have 60 seconds. If you get a question incorrect you will have 5 seconds removed from the timer.. Good luck!'
var countDown = document.querySelector('.countDown')
var secondsLeft = 60;
const question1 = {
    question: 'question',
    answer1: 'string',
    answer2:'str',
    answerCorrect: 'str',
    answer3: 'str',
};

const question2 = {
    question: 'question',
    answer1: 'string',
    answer2:'str',
    answerCorrect: 'str',
    answer3: 'str',
};

const question3 = {
    question: 'question',
    answer1: 'string',
    answer2:'str',
    answerCorrect: 'str',
    answer3: 'str',
};

const question4 = {
    question: 'question',
    answer1: 'string',
    answer2:'str',
    answerCorrect: 'str',
    answer3: 'str',
};

const question5 = {
    question: 'question',
    answer1: 'string',
    answer2:'str',
    answerCorrect: 'str',
    answer3: 'str',
};

const question6 = {
    question: 'question',
    answer1: 'string',
    answer2:'str',
    answerCorrect: 'str',
    answer3: 'str',
};

const question7 = {
    question: 'question',
    answer1: 'string',
    answer2:'str',
    answerCorrect: 'str',
    answer3: 'str',
};

var questionArray = [question1,question2,question3,question4,question5,question6,question7];







console.log(quizBtn);

//Timer Below!!!

/* I have this following bit of code so far for JS. 
So far I need to get it to work on the load event instead.. Also need to make a new button.*/
window.addEventListener('load', function() {
    for (var i = 0; i < quizBtn.length; i++) {
        quizBtn[i].setAttribute("style", "display: none;");
        
    }
    question.textContent = startingText;
    
});

startButton.addEventListener('click', function(){
    startButton.setAttribute('style', 'display: none;');

    for (var i = 0; i < quizBtn.length; i++) {
        quizBtn[i].setAttribute("style", "display: flex")};
    var questionUsed = Math.floor(Math.random() * questionArray.length);
    console.log(questionUsed);
    

});

var timer = startButton.addEventListener('click', setInterval(function(){
    secondsLeft--;
    countDown.textContent = secondsLeft;

    if (secondsLeft === 0){
        clearInterval(timer);
    }
}, 1000));




// const newQuestion = function() {

// }





  
