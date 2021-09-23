import { util } from './util.js';
import { createEndScreen, removeElement, createCustomElement, runflipCardAnim } from './createBoard.js';
import { Menu } from './menu.js';
import { validData } from './gameData.js';
export { Game };

class Game {
	constructor(gameData, timer = 20) {
		this.gameData = util.copyArray(gameData);
		this.totalQuestionNumber = this.gameData.length;
		this.timeLimit = timer;
		this.rightAnswer = null;
		this.score = 0;
		this.h2 = null;
		this.answerContainers = null;
		this.handleClick = util.clickHandlerWrapper(this);
		this.counter = null;
	}

	handleScore(answer) {
		answer === this.rightAnswer ? (this.score += 100) : (this.score -= 50);
		document.querySelector('#score').textContent = this.score;
		return answer === this.rightAnswer;
	}

	provideNewQuestions() {
		const currentData = this.gameData.shift();
		this.h2.textContent = currentData.question;
		this.fillAnswers(currentData.answers);
		this.answerContainers.forEach((container) => container.addEventListener('click', this.handleClick));
		this.counter = this.startCounter();
		this.setStatusbar();
	}

	fillAnswers(answers) {
		let i = 0;
		for (const container of this.answerContainers) {
			container.querySelector('.answer').textContent = answers[i].answer;
			container.querySelector('.question-number').textContent = i + 1;
			this.saveRightAnswer(answers[i]);
			i++;
		}
	}

	setStatusbar() {
		const statusBar = document.querySelector('.status-inner');
		const precentToAdd = 1 / this.totalQuestionNumber * 100;
		const startPercentage = Number(statusBar.style.width.replace('%', ''));
		const currentLength = this.totalQuestionNumber - this.gameData.length;
		document.querySelector('#text-status').textContent = `Questions: ${currentLength}/${this.totalQuestionNumber}`;
		statusBar.style.width = String(startPercentage + precentToAdd) + '%';
	}

	saveRightAnswer(answer) {
		if (answer.right) this.rightAnswer = answer.answer;
	}

	checkQuestionsLeft() {
		return this.gameData.length === 0;
	}

	endgame() {
		const elementToRemove = document.querySelector('#playfield');
		const gameEndFunc = util.endGameHandlerWrap(Menu, Game, validData);
		elementToRemove.classList.add('close');
		util.wait(800).then(() => {
			removeElement(elementToRemove);
			const endScreen = createEndScreen(this.score);
			endScreen.addEventListener('click', gameEndFunc);
		});
	}

	startCounter(currentTime = 0) {
		return setInterval(() => {
			currentTime += 1;
			if (currentTime >= this.timeLimit) {
				clearInterval(this.counter);
				this.endgame();
			}
			document.querySelector('#timer').textContent = this.timeLimit - currentTime;
		}, 1000);
	}

	highlightAnswers(answer, container) {
		const isRight = answer === this.rightAnswer;
		const innerAnswer = container.querySelector('.answer-front');
		isRight ? innerAnswer.classList.add('right') : innerAnswer.classList.add('err');
		util.wait(500).then(() => {
			isRight ? innerAnswer.classList.remove('right') : innerAnswer.classList.remove('err');
			runflipCardAnim();
		});
	}

	initElements() {
		document.querySelector('.status-inner').style.width = '1%';
		document.body.appendChild(createCustomElement('timer'));
		document.body.appendChild(createCustomElement('score', 'score'));
		document.querySelector('#score').textContent = this.score;
		document.querySelector('#timer').textContent = this.timeLimit;
	}

	init() {
		this.h2 = document.querySelector('#playfield > h2');
		this.answerContainers = document.querySelectorAll('.answer-container');
		this.initElements();
		this.provideNewQuestions();
	}
}
