function newGame(){
    window.location.reload(true);
}
var guesses=0;
var compGuess;
var score=0;

function computerGuess(){
    compGuess = Math.floor(Math.random() * 100 + 1);
    console.log(compGuess);
}
function userGuesses(){


}