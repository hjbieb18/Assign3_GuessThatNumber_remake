var compGuess;
var userGuessLog = [];
var score = 0;
$('#spinner').hide();


    

$(window).load(function newGame(){
    //window.location.reload();  
}


function init() {

    compGuess = Math.floor(Math.random() * 100 + 1);
    // console.log(compGuess);
})


       
// document.getElementById(“myElement”) to $(‘#myElement’)

var userGuessLog = {};
function compareGuess() {

    var userGuess = $('#inputBox').val();
        // console.log(userGuess);
    var userGuess = parseFloat($ ('#guessLog').val());
        // console.log(userGuessLog);
    var userGuessLog = $('#guessLog').innerHTML;
    score++;
    var score = $('#textOutput').innerHTML('#score');

 
    if(userGuess > compGuess) {
        $('#textOutput').innerHTML("Too High");
        $('#inputBox').val("");
    }
    else if (userGuess < compGuess) {
        $('#textOutput').innerHTML("Too Low");
        $('#inputBox').val("");
    }
    else {
        $('#textOutput').innerHTML("You Are Correct");
    }
}
        
    
$('#submit').click(function buttonSpinner() {
    //buttonSpinner() {
    
    $('#spinner').show();
    setTimeout(() => {
      
        $('#spinner').style.hide();
    },3000);
    $('#textOutput').innerHTML('#textOutput');
})
