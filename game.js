import {Game} from "./modules/gameMod.js";
import {createBoard, removeElement} from "./modules/createBoard.js";
import {dummyData} from "./modules/gameData.js";
import {createMenuButtons} from "./modules/menu.js";

// initGame();

function initGame() {
    const board = createBoard();
    const elementToRemove = document.querySelector('.menuBtn');
    document.querySelector(".wrapper").appendChild(board);
    removeElement(elementToRemove);
    const game = new Game(dummyData, 6000);
    game.init();
}


function initMenu() {
    createMenuButtons();
    makeDifficultyOption();
    initDifficulty();
    const menuBtn = document.querySelector('.menuBtn');
    menuBtn.addEventListener("click", initGame);
}

initMenu();

function makeAndChooseDifficultyLevel() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('diff-levels');
    const difficultyLevels = {easy: 30, medium: 20, hard: 10};
    for (const key of Object.keys(difficultyLevels)) {
        const newOptionDiv = document.createElement('div');
        newOptionDiv.classList.add('menuBtn');
        newOptionDiv.innerText = key;
        newDiv.appendChild(newOptionDiv);
    }
    document.querySelector(".wrapper").appendChild(newDiv);
}

function makeDifficultyOption() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('diff-level');
    newDiv.innerText = 'Difficulty Level';
    document.querySelector(".buttons").appendChild(newDiv);
}

function initDifficulty() {
    const diffLevelButton = document.querySelector('.diff-level');
    const buttonsDiv = document.querySelector('.buttons');
    diffLevelButton.addEventListener('click', () => {
        removeElement(buttonsDiv);
        makeAndChooseDifficultyLevel();
        getDifficultyLevel();
    });
}


function getDifficultyLevel() {
    const difficultyMenuButtons = document.querySelectorAll('.menuBtn');
    const diffLevelButton = document.querySelector('.diff-levels');
    for (let button of difficultyMenuButtons) {
        button.addEventListener('click', () => {
            removeElement(diffLevelButton);
            initMenu();
        });
    }
}





