'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

// Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //FIX
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ هچی ات ننویستا !');
  } else if (guess === secretNumber) {
    displayMessage('🎉 همشیه زانتت !!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#519d53';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '8rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '📈 سک بازه کمترینی بگو!'
          : '📉 سک کمه گیشترینی بگو!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 تو باخت! ترا کلام گپت!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.guess').value = '';
  //   document.querySelector('input').textContent = '0';  // Fix clear input number
  document.querySelector('body').style.backgroundColor = '#202124';
  displayMessage('نوکین شماره حدس بجن...! 🤔');
});
