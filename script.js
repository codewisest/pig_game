'use strict';
// get DOM elements
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const players = document.querySelectorAll('.player');
const playersScore = document.querySelectorAll('[class*="score"');
const dice = document.querySelector('.dice');

// initialise game
function initialiseGame() {
  for (let i = 0; i < playersScore.length; i++) {
    playersScore[i].innerHTML = 0;
    dice.style.display = 'none';
  }
}

initialiseGame();

let randomNumber;
// generate random number 1 to 6
const randomResult = function () {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);
  return randomNumber;
};

// set dice image
function setDiceImage() {
  dice.setAttribute('src', `dice-${randomNumber}.png`);
  dice.style.display = 'block';
}

// switch active player
function toggleActivePlayer() {
  for (let i = 0; i < players.length; i++) {
    players[i].classList.toggle('player--active');
  }
}

// update current player current score
let scoreUpdate = 0;

function updateCurrentScore() {
  const activePlayer = document.querySelector('.player--active');

  const activePlayerCurrentScoreDOM =
    activePlayer.querySelector('.current-score');
  //   let currentScoreDOM = activePlayerCurrentScoreDOM.textContent;
  //   let currentScore = Number(currentScoreDOM);
  scoreUpdate += randomNumber;
  activePlayerCurrentScoreDOM.textContent = scoreUpdate;
  console.log(scoreUpdate);
}

// event handlers
// on dice roll
rollDice.addEventListener('click', function () {
  // generate random number 1 to 6
  randomResult();
  // display corresponding dice image
  setDiceImage();

  // add to current player score
  updateCurrentScore();
});

// on hold
hold.addEventListener('click', function () {
  toggleActivePlayer();
});
