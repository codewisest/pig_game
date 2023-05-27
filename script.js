'use strict';
// get DOM elements
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const players = document.querySelectorAll('.player');
const playersScore = document.querySelectorAll('[class*="score"');
const dice = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');

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
  // console.log(randomNumber);
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
  // console.log(scoreUpdate);
  return scoreUpdate;
}

function updateTotalScore() {
  const activePlayer = document.querySelector('.player--active');

  let activePlayerTotalScoreDOM = activePlayer.querySelector('.score');
  let activePlayerTotalScore = Number(activePlayerTotalScoreDOM.textContent);
  activePlayerTotalScore = activePlayerTotalScore + scoreUpdate;
  // console.log(activePlayerTotalScore);
  activePlayerTotalScoreDOM.textContent = activePlayerTotalScore;
  return activePlayerTotalScore;
}

// check for winner
function winnerCheck() {
  const activePlayerTotalScore = updateTotalScore();
  console.log(activePlayerTotalScore);
  if (activePlayerTotalScore >= 30) {
    const activePlayer = document.querySelector('.player--active');
    const name = activePlayer.querySelector('.name').textContent;
    alert(`${name} + won!!!`);
    initialiseGame();
  }
}

function clearCurrent() {
  scoreUpdate = 0;
  const activePlayer = document.querySelector('.player--active');
  const activePlayerCurrentScoreDOM =
    activePlayer.querySelector('.current-score');
  activePlayerCurrentScoreDOM.textContent = scoreUpdate;
}

// event handlers
// on dice roll
rollDice.addEventListener('click', function () {
  // generate random number 1 to 6
  const randomNumber = randomResult();
  // display corresponding dice image
  setDiceImage();

  // check if dice rolled is 1
  if (randomNumber !== 1) {
    // add to current player score
    updateCurrentScore();
  } else {
    clearCurrent();
    toggleActivePlayer();
  }
});

// on hold
hold.addEventListener('click', function () {
  updateTotalScore();
  clearCurrent();
  winnerCheck();

  toggleActivePlayer();
});

newGame.addEventListener('click', () => {
  initialiseGame();
});
