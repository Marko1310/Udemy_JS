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

const images = [
  "/pictures/dice-1.png",
  "/pictures/dice-2.png",
  "/pictures/dice-3.png",
  "/pictures/dice-4.png",
  "/pictures/dice-5.png",
  "/pictures/dice-6.png",
];

//Define functions

let currentScore1 = 0;
let totalScore1 = 0;
let currentScore2 = 0;
let totalScore2 = 0;

//Click the dice button
diceButton.addEventListener("click", function () {
  let number = Math.round(Math.random() * (6 - 1) + 1);

  //Show according picture of a dice
  for (let i = 1; i <= images.length; i++) {
    if (number === i) {
      let image = images[i - 1];
      //Change the dice picture according to the random number
      dicePicture.src = image;
    }
  }
  if (number !== 1 && player1Box.classList.contains("active")) {
    currentScore1 += number;
    player1CurrentScore.textContent = currentScore1;
  } else if (number !== 1 && player2Box.classList.contains("active")) {
    currentScore2 += number;
    player2CurrentScore.textContent = currentScore2;
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
  if (player1Box.classList.contains("active")) {
    totalScore1 += currentScore1;
    player1TotalScore.textContent = totalScore1;
    if (totalScore1 > 100) {
      console.log("Player 1 is the winner");
    } else {
      player1Box.classList.remove("active");
      player2Box.classList.add("active");
      currentScore1 = 0;
      player1CurrentScore.textContent = currentScore1;
    }
  } else if (player2Box.classList.contains("active")) {
    totalScore2 += currentScore2;
    player2TotalScore.textContent = totalScore2;
    if (totalScore2 > 100) {
      console.log("Player 2 is the winner");
    } else {
      player2Box.classList.remove("active");
      player1Box.classList.add("active");
      currentScore2 = 0;
      player2CurrentScore.textContent = currentScore2;
    }
  }
});

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
});
