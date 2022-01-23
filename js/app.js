"use strict";

const gameData = [
  {
    name: "rose",
  },
  {
    name: "rose",
  },
  {
    name: "heart",
  },
  {
    name: "heart",
  },
  {
    name: "game-controller",
  },
  {
    name: "game-controller",
  },
  {
    name: "balloon",
  },
  {
    name: "balloon",
  },
  {
    name: "bulb",
  },
  {
    name: "bulb",
  },
  {
    name: "color-palette",
  },
  {
    name: "color-palette",
  },
  {
    name: "hammer",
  },
  {
    name: "hammer",
  },
  {
    name: "snow",
  },
  {
    name: "snow",
  },
];

gameData.sort(() => Math.random() - 0.5);

const grid = document.getElementById("grid");

// create game board
const createBoard = function () {
  for (let i = 0; i < gameData.length; i++) {
    gameData[i].id = i;
    const card = `
    <div class="card" data-id="${i}"><ion-icon name="${gameData[i].name}"></ion-icon></div>
    `;
    grid.insertAdjacentHTML("beforeend", card);
  }
};

createBoard();
