'use strict';
// get DOM elements
const rollDice = document.querySelector('.btn--roll');
const players = document.querySelectorAll('.player');
const playersScore = document.querySelectorAll('[class*="score"');
const activePlayer = document.querySelector('.player--active');

// initialise game
function initialiseGame() {
  for (let i = 0; i < playersScore.length; i++) {
    playersScore[i].innerHTML = 0;
  }
}

initialiseGame();

// event handlers
// on dice roll
rollDice.addEventListener('click', function () {
  // generate random number 1 to 6
  // display corresponding dice image
  // add to current player score
});
