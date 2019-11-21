/*
1. Generate a number
2. Provide a Input box and Button
3. Logic - check each digit and match
4. Error handling
5. Maximum 10 attempts
6. Winning message
7. Replay
*/

function checkNumber() {
    var answer = document.getElementById("answer").value;
    var attempt = document.getElementById("attempts").value;
    var userInput = document.getElementById("user-input").value;
    var msg = document.getElementById("msg");
    var results = document.getElementById("results");
  
  
    console.log(userInput);
  
  
  
    if(!answer){
      var answer = generateRandomAnswer();
      document.getElementById("answer").value = answer;
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
  
  // main logic
  var correctDigit = 0;
  var html = '<tr><td>' + userInput + '</td><td>'
  
  for(let i=0; i< userInput.length; i++){
    if(userInput[i] == answer[i]){
      //insert tick
      html = html + '<i class="fa fa-check text-success" style="padding: 3px;"></i>';
      correctDigit++;
    } else if (answer.indexOf(userInput[i]) > -1) {
      //show Exchange icon
      html = html + '<i class="fa fa-exchange text-warning" style="padding: 3px;"></i>';
    } else {
      //not found
      html = html + '<i class="fa fa-times text-danger" style="padding: 3px;"></i>';
    }
  }
  html = html + '</td></tr>';
  
  results.innerHTML +=html;  //(results.innerHTML = results + html; )
  
  if (correctDigit === userInput.length) {
    //User is winner
    msg.innerHTML = "<p class='msg-success'>Wooohhooo, You are a born Winner </p>";
    document.getElementById("btn-guess").style = "display:none;";
    document.getElementById("btn-replay").style = "display:block;";
  } else if (attempt >= 10) {
     //Stop user from entering any more Guesses
     msg.innerHTML = "<p class='text-danger'>Sorry, You lost. please play again to win. </p>";
     document.getElementById("btn-guess").style = "display:none;";
     document.getElementById("btn-replay").style = "display:block;";
  } else {
    //show user that Input number is Incorrect.
    msg.innerHTML = "<p class='text-primary'>Incorrect guess. Try again! </p>";
  }
  
  
  }
  
  
  
  function generateRandomAnswer() {
    // below will return a random number of 1000-9999 range
    var num = (Math.floor(Math.random() * 8900)+1000).toString();
    return num;
  }
  
  function validateInput(str) {
    if(str.length==4)
       return true;
    else
      return false;
  }