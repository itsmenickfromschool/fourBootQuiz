var countDown = document.querySelector('.countDown');
var startQuiz = document.querySelector('.startQuiz');
var quizBtn  = document.querySelectorAll('.btn');
var quizBox = document.querySelectorAll('.quizBox');

console.log(quizBtn);

//Timer Below!!!

/* I have this following bit of code so far for JS. 
So far I need to get it to work on the load event instead.. Also need to make a new button.*/
window.addEventListener('load', function() {
    for (var i = 0; i < quizBtn.length; i++) {
        console.log(i);
        quizBtn[i].setAttribute("style", "display: none;");
    }
    var startButton = document.createElement('btn');
    startButton.setAttribute('class','.startButton');
    quizBox.appendChild(startButton);

   
});



    // var quizBtn = document.querySelectorAll('.btn'); 
    // quizBtn.setAttribute('style', 'color: blue;');
    // This function will load my quiz */
