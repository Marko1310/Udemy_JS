"use strict";

//Define query Selectors
const player1Box = document.querySelector(".player1Box");
const player2Box = document.querySelector(".player2Box");
const diceButton = document.querySelector(".rollDice");
const dicePicture = document.querySelector(".dice");
const holdButton = document.querySelector(".hold");
const newGameButton = document.querySelector(".newGame");
const player1Name = document.getElementById("1");
const player2Name = document.getElementById("2");
let player1CurrentScore = document.querySelector(".currentScore1");
let player2CurrentScore = document.querySelector(".currentScore2");
let player1TotalScore = document.querySelector(".player1TotalScore");
let player2TotalScore = document.querySelector(".player2TotalScore");

//Define variables
let activePlayer, scores, currentScore, totalScore;

// Define initialization function
const init = function () {
  player1Box.classList.add("active");
  player2Box.classList.remove("active");
  activePlayer = 1;
  scores = [0, 0];
  currentScore = 0;
  totalScore = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1TotalScore.textContent = 0;
  player2TotalScore.textContent = 0;
  dicePicture.classList.add("hidden");
  diceButton.disabled = false;
  holdButton.disabled = false;
  player1Box.classList.remove("winnerBox");
  player2Box.classList.remove("winnerBox");
  document.getElementById("1").classList.remove("winnerPlayer");
  document.getElementById("2").classList.remove("winnerPlayer");
  player1Name.textContent = `PLAYER 1`;
  player2Name.textContent = `PLAYER 2`;
};

// Call the function when starting the game
init();

//Click the dice button
diceButton.addEventListener("click", function () {
  let number = Math.round(Math.random() * (6 - 1) + 1);
  //Show according picture
  dicePicture.src = `/pictures/dice-${number}.png`;
  dicePicture.classList.remove("hidden");

  //If number is not equal to 1: add points to active Player
  if (number !== 1) {
    currentScore += number;
    document.querySelector(`.currentScore${activePlayer}`).textContent =
      currentScore;

    //If number is equal to 1: change player and set the current score to 0
  } else if (number === 1) {
    currentScore = 0;
    document.querySelector(`.currentScore${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1Box.classList.toggle("active");
    player2Box.classList.toggle("active");
  }
});

//Hold Button
holdButton.addEventListener("click", function () {
  // Add current score to the active player
  scores[activePlayer - 1] += currentScore;
  // If score >= 100: add classe to the winning player and change the name of the title, and disable hold and dice buttons
  if (scores[activePlayer - 1] >= 100) {
    document
      .querySelector(`.player${activePlayer}Box`)
      .classList.add("winnerBox");
    document.getElementById(`${activePlayer}`).classList.add("winnerPlayer");
    document.getElementById(
      `${activePlayer}`
    ).textContent = `PLAYER ${activePlayer} WINS!`;
    document.querySelector(`.player${activePlayer}TotalScore`).textContent =
      scores[activePlayer - 1];
    diceButton.disabled = true;
    holdButton.disabled = true;
    // Else add the value of the current score to the players total score and then change the player, and reset the value of current score
  } else {
    document.querySelector(`.player${activePlayer}TotalScore`).textContent =
      scores[activePlayer - 1];
    currentScore = 0;
    document.querySelector(`.currentScore${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1Box.classList.toggle("active");
    player2Box.classList.toggle("active");
    currentScore = 0;
  }
});

//New game button: restart everything, call init function
newGameButton.addEventListener("click", init);
