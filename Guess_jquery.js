
console.log(numberPicker());
//var guess= 0;
//var score= 0;
var output = "Submit a number by clicking guess!";
$('#feedback').text(output);



$(function (){
    $('#guess-button').on('click', guessChecker); 
    //score= $('#score-log').html(0); 
    $('#new-game').on('click', newGame);
});

function numberPicker(){
    number= Math.floor(Math.random() * 100 + 1);
    number= Math.floor(number);
    return number;
    
}
var guess= 0;
var score= 0;
scoreCount= 0;

function guessChecker () {
    score= scoreCount;
    guess= parseFloat($('#guess').val());
    output="Submit a number by clicking guess!";
    // userGuessLog={};
    scoreCount = score++;
    score = $('#score-log').html(scoreCount);
    
    if (guess > number){
        output= "Guess is too high.";
        $('#guess').val("");
        score= $('#score-log').html(scoreCount + 1);
    }
    else if(guess < number){
        output= "That guess is too low.";
        $('#guess').val("");
        
        

    }
    else if(guess == number){
        output="Correct guess! Click New Game to play again";
        
    }
    $('#feedback').text(output);
    console.log(guess);
    parseFloat($('#guess-log').text(guess));
}
    
     

function newGame() {
    window.location.reload();
    number = numberPicker();
    guess=0;
    $('#guess').val('');
    $('#feedback').text("Thinking of a new number");

}
