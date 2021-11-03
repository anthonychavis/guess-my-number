'use strict';

// #globelife
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const secretBoxWidth = width =>
  (document.querySelector('.number').style.width = width);
const secretBoxNum = num =>
  (document.querySelector('.number').textContent = num);
const bodyBG = color => {
  document.querySelector('*').style.backgroundColor = color;
  document.querySelector('section').style.backgroundColor = color;
  document.querySelector('.right').style.backgroundColor = color;
  document.querySelector('main').style.backgroundColor = color;
};
const scoreUpdate = score =>
  (document.querySelector('.score').textContent = score);

// guess event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no input
  if (!guess) {
    displayMessage('⛔ No number');

    // guess too high
  } else if (guess > 20) {
    displayMessage('⛔ Invalid input; value out of range!');
    // player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    bodyBG('hsl(337, 91%, 46%)');
    secretBoxWidth('30rem');
    secretBoxNum(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreUpdate(score);
    } else {
      displayMessage('💥 You lost the game!');
      scoreUpdate(0);
    }
  }
});

// play again event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreUpdate(score);
  secretBoxNum('?');
  bodyBG('hsl(308, 38%, 23%)');
  secretBoxWidth('auto');

  document.querySelector('.guess').value = ' ';
});
