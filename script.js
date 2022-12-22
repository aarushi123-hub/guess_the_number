//global variables
let correctno = getRandomNumber(); 
// Variable to store the list of guesses
let guesslist = [];


window.onload = function () {
  console.log(correctno);
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  //console.log(numberGuess);
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
  console.log(guesslist);
}

function displayResult(numberGuess)
{
  if (numberGuess < correctno) showNumberBelow();
  else if (numberGuess > correctno) showNumberAbove();
  else showYouWon();
}

//computer's work
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}


//Retrieve the dialog based on if the guess is wrong or correct...result id in html
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

// Functionality for playing the whole game

function showYouWon() {
  const text = "Yayyy, you got it!";
  let dialog = getDialog("won", text);
  
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}





//  Initialize a new game by resetting all values and content on the page
//  HINT: reset the correctNumber, guesses, and HTML content

function initGame() {
  correctno = getRandomNumber();
  resetResultContent();
  guesslist = [];
  displayHistory();
}

/*
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

function saveGuessHistory(guess) {
  guesslist.push(guess);
  console.log(guesslist); 
}

function displayHistory() {
  let index = guesslist.length - 1; // TODO
  let list = "<ul class='list-group'>";
  while(index >= 0)
  {
    list += "<ul class='list-group'>" + "you guessed " + guesslist[index] + "</list>";
    index --;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}
