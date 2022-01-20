'use strict';
// memory game

const gameData = [
  {
    name: 'rose',
  },
  {
    name: 'rose',
  },
  {
    name: 'heart',
  },
  {
    name: 'heart',
  },
  {
    name: 'game-controller',
  },
  {
    name: 'game-controller',
  },
  {
    name: 'balloon',
  },
  {
    name: 'balloon',
  },
  {
    name: 'bulb',
  },
  {
    name: 'bulb',
  },
  {
    name: 'color-palette',
  },
  {
    name: 'color-palette',
  },
  {
    name: 'hammer',
  },
  {
    name: 'hammer',
  },
  {
    name: 'snow',
  },
  {
    name: 'snow',
  },
];

gameData.sort(() => Math.random() - 0.5);

const grid = document.getElementById('grid');

// create game board
const createBoard = function () {
  for (let i = 0; i < gameData.length; i++) {
    gameData[i].id = i;
    const card = `<div class="card" data-id="${i}"><ion-icon name="${gameData[i].name}"></ion-icon></div>`;
    grid.insertAdjacentHTML('beforeend', card);
    // grid[i].addEventListener('click', flipCard);
  }
};

createBoard();

const cards = document.querySelectorAll('.card');
let cardsChosen = [];
let cardsWon = 0;

function checkForMatch() {
  if (cardsChosen[0].name === cardsChosen[1].name) {
    // alert('You found a match!');
    cards[cardsChosen[0].id].removeEventListener('click', flipCard);
    cards[cardsChosen[1].id].removeEventListener('click', flipCard);
    cardsWon += 2;
  } else {
    cards[cardsChosen[0].id].classList.remove('card--flip');
    cards[cardsChosen[1].id].classList.remove('card--flip');
  }
  cardsChosen = [];
  if (cardsWon === gameData.length) {
    alert('You found them all!');
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  this.classList.add('card--flip');
  cardsChosen.push({ id: cardId, name: gameData[cardId].name });
  console.log(cardId);
  if (cardsChosen.length === 2) {
    window.addEventListener
    setTimeout(checkForMatch, 300);
    // checkForMatch();
  }
}

cards.forEach(card => {
  card.addEventListener('click', flipCard);
});
