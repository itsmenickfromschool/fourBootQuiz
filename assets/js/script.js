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
var startingText = 'Hello! This is a Javascript Quiz, press start to begin! You have 60 seconds. If you get a question incorrect you will have 5 seconds removed from the timer.. Good luck!'
var countDown = document.querySelector('.countDown')
var secondsLeft = 60;
var clickedValue = ''
var points = 0
var correctMessage = 'Correct!'
var incorrectMessage = 'Incorrect! -2 seconds!'
answer1.addEventListener("click",checkAnswer)
answer2.addEventListener("click",checkAnswer)
answer3.addEventListener("click",checkAnswer)
answer4.addEventListener("click",checkAnswer)
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
};



//Timer Below!!!

/* I have this following bit of code so far for JS. 
So far I need to get it to work on the load event instead.. Also need to make a new button.*/
window.addEventListener('load', function() {
    question.textContent = startingText;
    hideQuiz();
    question.setAttribute("style", "display: flex");
    question.textContent = startingText;
    
});

startButton.addEventListener('click', function(){
    startButton.setAttribute('style', 'display: none;');
    timer();
    showQuiz();
    startQuiz();
    
    

});

// for (var i = 0; i < quizBtn.length; i++) {
//     quizBtn[i].addEventListener('click', function(){
//         clickedValue = Event.target;
//     });

function checkAnswer(event){
    // //run the function called chek Answer where you pass in the questionUsed Number
    // //if else statement if (user clickedvalue == questionArray[questionUsed].correct){increase point, pop out the usedQuestion item in Arr and call start Quiz again}
    // document.querySelector(".answerBtn").addEventListener('click', function(){
    //     clickedValue = Event.target;
    // });
   // console.log("Evt",event.target.textContent,questionArray[questionUsed])
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


}
//with local storage i take users name from input and put them in local storage
//on highscores page i pull from user input and put it in a list on the page

function timer(){setInterval(function(){
    secondsLeft--;
    countDown.textContent = secondsLeft;

    if (secondsLeft < 0){
        clearInterval(timer);
        endQuiz();
    }
}, 1000)} 



/*
var stored = JSON.parse(localStorage.getItemt("codequiz")) || []
stored.push({
    user: document.getElementById("user-name").value,
    score:points+timeleft
})

localStorage.setItem("codequiz",JSON.stringify(stored))
*/