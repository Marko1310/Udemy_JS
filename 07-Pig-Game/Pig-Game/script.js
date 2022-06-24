"use strict";

//Define query Selectors
const player1Box = document.querySelector(".player1Box");
const player2Box = document.querySelector(".player2Box");
const diceButton = document.querySelector(".rollDice");
const dicePicture = document.querySelector(".dice");
const images = [
  "/pictures/dice-1.png",
  "/pictures/dice-2.png",
  "/pictures/dice-3.png",
  "/pictures/dice-4.png",
  "/pictures/dice-5.png",
  "/pictures/dice-6.png",
];
let image;

//Define functions

//Click the dice button
diceButton.addEventListener("click", function () {
  //Generate random dice number
  const dice = Math.round(Math.random() * (6 - 1) + 1);

  //Show according picture of a dice
  for (let i = 1; i <= images.length; i++) {
    if (dice === i) {
      image = images[i - 1];
    }
  }
  //Change the dice picture according to the random number
  dicePicture.src = image;
});

//Define the actions when the page is loaded
window.onload = function () {
  player1Box.classList.add("active");
};
