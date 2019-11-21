function newGame(){
    window.location.reload(true);
}
function compGuess(){
    compGuess= Math.floor(Math.random() * 100 + 1);

}

function checkNumber() {
    var attempt = document.getElementById("score").value;
    var userInput = document.getElementById("user input").value;
    var results = document.getElementById("results");

    console.log(userInput);

    if(!answer){
        var answer = generateRandomAnswer();
        document.getElementById("score").value = answer;
      }
    
      console.log(answer);
    
      if (!attempt) {
        attempt = 0;
      }
    
      if(!validateInput(userInput)){
         //display an error message
         msg.innerHTML = "<p class='text-danger'>Number should be 4-digit long</p>";
         return;
      }
      else {
        msg.innerHTML = "";
        attempt++;
        document.getElementById("attempts").value = attempt;
      }




}