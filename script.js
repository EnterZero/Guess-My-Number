'use strict';

// secret number
let number = Math.trunc(Math.random() * 20) + 1;

// score
let score = 20;
let highscore = 0;

// dry
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// guess
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('❌ No number');
    } else if (guess === number) {
        displayMessage('✔ Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? '🔽 Lower' : '🔼 Higher');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost. Try again!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// reset
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
