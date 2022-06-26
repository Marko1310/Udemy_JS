"use strict";

//Define query Selectors
const player1Box = document.querySelector(".player1Box");
const player2Box = document.querySelector(".player2Box");
const diceButton = document.querySelector(".rollDice");
const dicePicture = document.querySelector(".dice");
const holdButton = document.querySelector(".hold");
const newGameButton = document.querySelector(".newGame");
let player1CurrentScore = document.getElementById("currentScore1");
let player2CurrentScore = document.getElementById("currentScore2");
let player1TotalScore = document.querySelector(".player1TotalScore");
let player2TotalScore = document.querySelector(".player2TotalScore");

//Define scores
let currentScore1 = 0;
let totalScore1 = 0;
let currentScore2 = 0;
let totalScore2 = 0;

//Click the dice button
diceButton.addEventListener("click", function () {
  let number = Math.round(Math.random() * (6 - 1) + 1);
  //Show according picture
  dicePicture.src = `/pictures/dice-${number}.png`;
  dicePicture.classList.remove("hidden");

  //If number is not equal to 1 and Player 1 is active: add points to Player 1
  if (number !== 1 && player1Box.classList.contains("active")) {
    currentScore1 += number;
    player1CurrentScore.textContent = currentScore1;

    //If number is not equal to 1 and Player 2 is active: add points to Player 2
  } else if (number !== 1 && player2Box.classList.contains("active")) {
    currentScore2 += number;
    player2CurrentScore.textContent = currentScore2;

    //If number is equal to 1: change player
  } else if (number === 1) {
    if (player1Box.classList.contains("active")) {
      currentScore1 = 0;
      player1CurrentScore.textContent = currentScore1;
      player1Box.classList.remove("active");
      player2Box.classList.add("active");
    } else if (player2Box.classList.contains("active")) {
      currentScore2 = 0;
      player2CurrentScore.textContent = currentScore2;
      player2Box.classList.remove("active");
      player1Box.classList.add("active");
    }
  }
});

holdButton.addEventListener("click", function () {
  //If Player 1 is active: add to total score of Player 1
  if (player1Box.classList.contains("active")) {
    totalScore1 += currentScore1;
    player1TotalScore.textContent = totalScore1;
    //If Total score is >= 100, Player 1 wins ---- Implement change of DOM
    if (totalScore1 >= 100) {
      player1Box.classList.add("winnerBox");
      document.getElementById("1").classList.add("winnerPlayer");
      diceButton.disabled = true;
      holdButton.disabled = true;
    } else {
      player1Box.classList.remove("active");
      player2Box.classList.add("active");
      currentScore1 = 0;
      player1CurrentScore.textContent = currentScore1;
    }

    //If Player 2 is active: add to total score of Player 2
  } else if (player2Box.classList.contains("active")) {
    totalScore2 += currentScore2;
    player2TotalScore.textContent = totalScore2;
    //If Total score is >= 100, Player 2 wins ---- Implement change of DOM
    if (totalScore2 >= 100) {
      player2Box.classList.add("winnerBox");
      document.getElementById("2").classList.add("winnerPlayer");
      diceButton.disabled = true;
      holdButton.disabled = true;
    } else {
      player2Box.classList.remove("active");
      player1Box.classList.add("active");
      currentScore2 = 0;
      player2CurrentScore.textContent = currentScore2;
    }
  }
});

//New game button: restart everything
newGameButton.addEventListener("click", function () {
  player1Box.classList.add("active");
  player2Box.classList.remove("active");
  currentScore1 = 0;
  currentScore2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  player1CurrentScore.textContent = currentScore1;
  player2CurrentScore.textContent = currentScore2;
  player1TotalScore.textContent = totalScore1;
  player2TotalScore.textContent = totalScore2;
  dicePicture.classList.add("hidden");
  diceButton.disabled = false;
  holdButton.disabled = false;
  player1Box.classList.remove("winnerBox");
  player2Box.classList.remove("winnerBox");
  document.getElementById("1").classList.remove("winnerPlayer");
  document.getElementById("2").classList.removve("winnerPlayer");
});
