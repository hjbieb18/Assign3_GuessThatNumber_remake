var compGuess;
var userGuessLog = [];
var score = 0;



function newGame() {
    window.location.reload();
}


    
        
function init() {
    compGuess = Math.floor(Math.random() * 100 + 1);
    console.log(compGuess);
}
        

function compareGuess() {
    var userGuess =" " + document.getElementById('inputBox').value;
    // console.log(userGuess);
    
    userGuessLog.push(userGuess);
    // console.log(userGuessLog);
    document.getElementById('guessLog').innerHTML = userGuessLog;

    score++;
    document.getElementById('score').innerHTML = score;


    if(userGuess > compGuess) {
            document.getElementById('textOutput').innerHTML = 'Too High';
            document.getElementById('inputBox').value = "";
    }
    else if (userGuess < compGuess){
        document.getElementById('textOutput').innerHTML = 'Too Low';
        document.getElementById('inputBox').value = "";
    }
    else {
        document.getElementById('textOutput').innerHTML = 'You Are Correct';
    }
}

function loading(){
    document.getElementsByClassName('buttonload').innerHtml = 
    document.getElementById('submit');

    if(userGuess != compGuess){
        setTimeout(onclick('submit')),3000;
    }
            
            

            
        
}
    