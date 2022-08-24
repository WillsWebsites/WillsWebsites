'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const againMobileBtn = document.querySelector('.again-mobile');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = document.querySelector('.highscore');
let highScoreCounter = 0;
let scoreCounter = 20;

checkBtn.addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        message.textContent = 'Choose a number';
    } else if (randomNumber === guess) {
        message.textContent = 'Correct you win!';
        number.textContent = randomNumber;
        document.body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        checkBtn.disabled = true;
        document.querySelector('.guess').disabled = true;
        if (scoreCounter > highScoreCounter) {
            highScoreCounter = scoreCounter;
            highScore.textContent = highScoreCounter;
        }
    } else if (guess !== randomNumber) {
        if (scoreCounter > 1) {
            message.textContent = guess > randomNumber ? 'Guess Lower' : 'Guess Higher';
            scoreCounter--;
            score.textContent = scoreCounter;
        } else {
            message.textContent = 'You lose';
            score.textContent = 0;
        }
    }
    return guess;
});

const againHandler = function() {
    scoreCounter = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start Guessing...';
    score.textContent = 20;
    number.textContent = '?';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#222222';
    number.style.width = '15rem';
    checkBtn.disabled = false;
    document.querySelector('.guess').disabled = false;
}

againBtn.addEventListener('click', againHandler);
againMobileBtn.addEventListener('click', againHandler);