'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number');
// document.querySelector('.score');
// document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// reset
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

// button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
        // if player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        // change color to green when win
        document.querySelector('body').style.backgroundColor = '#60b347';
        // change the width
        document.querySelector('.number').style.width = '30rem';
        // display the number
        document.querySelector('.number').textContent = secretNumber;
        // highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // guess to high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
        // guess to low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});