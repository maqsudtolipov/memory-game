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

const grid = document.getElementById('grid');

// create game board
const createBoard = function () {
  for (let i = 0; i < gameData.length; i++) {
    const card = `<div class="card"><ion-icon name="${gameData[i].name}"></ion-icon></div>`;
    grid.insertAdjacentHTML('beforeend', card);
    // grid[i].addEventListener('click', flipCard);
  }
};

createBoard();

const cardsEls = document.querySelectorAll('.card');

cardsEls.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('card--flip');
  });
});

// flip card
// function flipCard() {
//   console.log('flip card');
// }
