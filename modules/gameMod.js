import { util } from './util.js';
import { createEndScreen, removeElement } from './createBoard.js';
export { Game };

class Game {
	constructor(gameData, timer = 20) {
		this.gameData = gameData;
		this.totalQuestionNumber = this.gameData.length;
		this.timeLimit = timer;
		this.rightAnswer = this.rightAnswer;
		this.score = 0;
		this.h2 = null;
		this.answerContainers = null;
		this.handleClick = util.clickHandlerWrapper(this);
		this.counter = null;
	}

	handleScore(answer) {
		answer === this.rightAnswer ? (this.score += 100) : (this.score -= 50);
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
		statusBar.style.width = String(startPercentage + precentToAdd) + "%";
	}

	saveRightAnswer(answer) {
		if (answer.right) {
			this.rightAnswer = answer.answer;
		}
	}

	checkQuestionsLeft() {
		return this.gameData.length === 0 ? true : false;
	}

	endgame() {
		const elementToRemove = document.querySelector('#playfield');
		removeElement(elementToRemove);
		const endScreen = createEndScreen();
		endScreen.querySelector('p:first-child').textContent = 'Your score is:';
		endScreen.querySelector('p:last-child').textContent = this.score;
		document.querySelector('.wrapper').appendChild(endScreen);
	}

	startCounter(currentTime = 1){
		return setInterval(()=>{
			console.log(currentTime);
			if(currentTime >= this.timeLimit){
				console.log(this);
				clearInterval(this.counter);
			}
			currentTime += 1;
		}, 1000)
	}


	init() {
		this.h2 = document.querySelector('#playfield > h2');
		this.answerContainers = document.querySelectorAll('.answer-container');
		document.querySelector('.status-inner').style.width = '1%';
		this.provideNewQuestions();
	}
}
