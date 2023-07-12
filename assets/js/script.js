var countDown = document.querySelector('.countDown');
var startQuiz = document.querySelector('.startQuiz');
var quizBtn  = document.querySelectorAll('.btn');

console.log(quizBtn);

//Timer Below!!!
document.addEventListener('click', function() {
    for (var i = 0; i < quizBtn.length; i++) {
        console.log(i);
        quizBtn[i].setAttribute("style", "display: none;");
    }});


    // var quizBtn = document.querySelectorAll('.btn'); 
    // quizBtn.setAttribute('style', 'color: blue;');
    // This function will load my quiz */
