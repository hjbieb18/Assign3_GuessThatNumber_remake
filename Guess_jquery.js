var number= Math.floor(Math.random() * 100 + 1);
number= numberPicker();
console.log(numberPicker());
var guess= 0;
var output = "Submit a number by clicking guess!";
$('#feedback').text(output);



$(function (){
    $('#guess-button').on('click', guessChecker);
    $('#new-game').on('click', newGame);
});

function numberPicker(){
    number= Math.floor(Math.random() * 100 + 1);
    number= Math.floor(number);
    return number;
    
}

function guessChecker () {
    guess= $('#guess').val();
    output="Submit a number by clicking guess!";
    

    if (guess > number){
        output= "Guess is too high.";
    }
    else if(guess < number){
        output.on= "That guess is too low.";
    }
    else if(guess == number){
        output="Correct guess! Click New Game to play again";
    }
    $('#feedback').text(output);
    console.log(guess);
    $('#guess-log').text(guess);
     
}
function newGame() {
    window.location.reload();
    number = numberPicker();
    guess=0;
    $('#guess').val('');
    $('#feedback').text("Thinking of a new number");

}