import './dice-1.png'

'use strict';

const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let scores;
let currentScore;
let activePlayer;
let playing;

const initGame = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scoreEl0.textContent = 0;
    scoreEl1.textContent = 0;
    currentEl0.textContent = 0;
    currentEl1.textContent = 0;
    player0.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--winner', 'player--active');
    diceEl.classList.add('hidden');
}
initGame();

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    if (dice === 1) {
      diceEl.src = new URL('dice-1.png', import.meta.url);
    } else if (dice === 2) {
      diceEl.src = new URL('dice-2.png', import.meta.url);
    } else if (dice === 3) {
      diceEl.src = new URL('dice-3.png', import.meta.url);
    } else if (dice === 4) {
      diceEl.src = new URL('dice-4.png', import.meta.url);
    } else if (dice === 5) {
      diceEl.src = new URL('dice-5.png', import.meta.url);
    } else if (dice === 6) {
      diceEl.src = new URL('dice-6.png', import.meta.url);
    }
    
    diceEl.classList.remove('hidden');


    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent = 0;
      
        if (scores[activePlayer] >= 100) {
          playing = false;
          diceEl.classList.add('hidden');
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        } else {
          switchPlayer();
        }
    }
});

newBtn.addEventListener('click', initGame);