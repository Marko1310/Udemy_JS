'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number❌';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆️ Too High! ⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' 💥You lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too Low! ⬇️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' 💥You lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }
  }

  if (score === 0) {
    document.querySelector();
  }
});

//Reset button-----------------
document.querySelector('.again').addEventListener('click', function () {
  //Assign new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Change backround color
  document.querySelector('body').style.backgroundColor = '#222';
  //Reset the score
  score = 20;
  document.querySelector('.score').textContent = score;
  //Hide the secret number
  document.querySelector('.number').textContent = '?';
  //Remove the guess number
  document.querySelector('.guess').value = '';
  //Reset the message
  document.querySelector('.message').textContent = 'Start guessing...';
});
