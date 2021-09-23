export { Menu };
import { createBoard } from "./createBoard.js"

class Menu{

    constructor(obj, topics){
        this.game = obj;
        this.difficultyLevel = {'easy': 30, 'medium': 20, 'hard': 10};
        this.currentDifficulty = 'easy';
        this.topics = topics;
        this.currentTopic = topics[0];
    }

initMenu() {
    this.createMenuButtons();
    this.makeDifficultyOption();
    this.initDifficulty();
    console.log(this.topics);
    const menuBtn = document.querySelector('.menuBtn');
    menuBtn.addEventListener("click", this.game.initGame);
}

//creates start game button
createMenuButtons() {
    const btnDiv = document.createElement("div");
    btnDiv.classList.add('buttons');
    const menuQuizButton = document.createElement('div');
    menuQuizButton.classList.add('menuBtn');
    menuQuizButton.innerText = 'Start game';
    btnDiv.appendChild(menuQuizButton);
    document.querySelector(".wrapper").appendChild(btnDiv);
    menuQuizButton.addEventListener('click', ()=>{
       document.querySelector(".buttons").remove();
       document.querySelector(".wrapper").appendChild(createBoard());
       const newGame = new this.game(this.topics, this.difficultyLevel[this.currentDifficulty]);
       newGame.init();
    })
}

// creates menu divs
makeAndChooseDifficultyLevel() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('diff-levels');
    const difficultyLevels = this.difficultyLevel;
    for (const key of Object.keys(difficultyLevels)) {
        const newOptionDiv = document.createElement('div');
        newOptionDiv.classList.add('menuBtn');
        newOptionDiv.innerText = key;
        newDiv.appendChild(newOptionDiv);
    }
    document.querySelector(".wrapper").appendChild(newDiv);
}

//create diff level button
makeDifficultyOption() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('diff-level');
    newDiv.innerText = 'Difficulty Level';
    document.querySelector(".buttons").appendChild(newDiv);
}

//remvoves the main menu, replaces it with diff levels
initDifficulty() {
    const diffLevelButton = document.querySelector('.diff-level');
    const buttonsDiv = document.querySelector('.buttons');
    diffLevelButton.addEventListener('click', () => {
        buttonsDiv.remove();
        this.makeAndChooseDifficultyLevel();
        this.getDifficultyLevel();
    });
}

//removes the diff menu, returns the main menu
getDifficultyLevel() {
    const difficultyMenuButtons = document.querySelectorAll('.menuBtn');
    const diffLevelButton = document.querySelector('.diff-levels');
    for (let button of difficultyMenuButtons) {
        button.addEventListener('click', (e) => {
            console.log(this);
            this.currentDifficulty = e.currentTarget.textContent;
            diffLevelButton.remove();
            this.initMenu();
        });
    }
}
}
