export {Menu};
import {createBoard} from "./createBoard.js";
import {util} from "./util.js";

class Menu {

    constructor(obj, topics) {
        this.game = obj;
        this.difficultyLevel = {'easy': 30, 'medium': 20, 'hard': 10};
        this.currentDifficulty = 'easy';
        this.topics = topics;
        this.currentTopic = "Misc";
    }

    initMenu() {
        this.createMenuButtons();
        this.makeDifficultyOption();
        this.initDifficulty();
        this.topicButton();
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
        menuQuizButton.addEventListener('click', () => {
            document.querySelector(".buttons").remove();
            document.querySelector(".wrapper").appendChild(createBoard());
            document.querySelector('.headline').classList.remove('invisible');
            const newGame = new this.game(this.topics[this.currentTopic], this.difficultyLevel[this.currentDifficulty]);
            newGame.init();
        });
    }

// creates menu divs
    makeAndChooseDifficultyLevel() {
        const newDiv = document.createElement('div');
        newDiv.classList.add('diff-levels');
        const difficultyLevels = this.difficultyLevel;
        for (const key of Object.keys(difficultyLevels)) {
            const newOptionDiv = document.createElement('div');
            newOptionDiv.classList.add('menuBtn');
            newOptionDiv.innerText = util.capitalizeFirstLetter(key);
            newDiv.appendChild(newOptionDiv);
        }
        document.querySelector(".wrapper").appendChild(newDiv);
    }

//create diff level button
    makeDifficultyOption() {
        const newDiv = document.createElement('div');
        newDiv.classList.add('diff-level');
        newDiv.innerText = util.capitalizeFirstLetter(this.currentDifficulty);
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
                this.currentDifficulty = e.currentTarget.textContent.toLowerCase();
                diffLevelButton.remove();
                this.initMenu();
            });
        }
    }

//create topic option

    topicButton() {
        const topicButton = document.createElement('div');
        topicButton.classList.add('topic-button');
        document.querySelector('.buttons').appendChild(topicButton);
        topicButton.innerText = this.currentTopic;
        topicButton.addEventListener('click', () =>
            this.createTopicButtons());
    }

    createTopicButtons() {
        const topicButtonsDiv = document.createElement('div');
        topicButtonsDiv.classList.add('topic-buttons');
        const topics = this.topics;
        for (const key of Object.keys(topics)) {
            const newOptionDiv = document.createElement('div');
            newOptionDiv.classList.add('topicBtn');
            newOptionDiv.innerText = util.capitalizeFirstLetter(key);
            topicButtonsDiv.appendChild(newOptionDiv);
        }
        document.querySelector(".wrapper").appendChild(topicButtonsDiv);
        const buttonsDiv = document.querySelector('.buttons');
        this.getCurrentTopic();
        buttonsDiv.remove();
    }

    getCurrentTopic() {
        const topicButtons = document.querySelectorAll('.topicBtn');
        const topicMenuButton = document.querySelector('.topic-buttons');
        for (let button of topicButtons) {
            button.addEventListener('click', (e) => {
                this.currentTopic = e.currentTarget.textContent;
                topicMenuButton.remove();
                this.initMenu();
            });
        }
    }
}
