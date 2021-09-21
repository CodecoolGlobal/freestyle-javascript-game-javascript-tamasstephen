export { createBoard, removeElement, createEndScreen, createCustomElement };
import { util } from './util.js';

function createBoard() {
	const newDiv = document.createElement('div');
	newDiv.id = 'playfield';
	const newH2 = document.createElement('h2');
	newDiv.appendChild(newH2);
	for (let numberOfQuestions = 4; numberOfQuestions >= 1; numberOfQuestions--) {
		let answerDiv = document.createElement('div');
		answerDiv.classList.add('answer-container');
		newDiv.appendChild(answerDiv);
		for (let index = 1; index >= 1; index--) {
			let answerBackDiv = document.createElement('div');
			let answerFrontDiv = document.createElement('div');
			answerFrontDiv.classList.add('answer-front');
			answerBackDiv.classList.add('answer-back');
			answerDiv.appendChild(answerFrontDiv);
			answerDiv.appendChild(answerBackDiv);
			for (let index = 1; index >= 1; index--) {
				let questionNumberParagraphsElement = document.createElement('p');
				let answerParagraphsElement = document.createElement('p');
				questionNumberParagraphsElement.classList.add('question-number');
				answerParagraphsElement.classList.add('answer');
				answerFrontDiv.appendChild(questionNumberParagraphsElement);
				answerFrontDiv.appendChild(answerParagraphsElement);
			}
		}
	}
	return newDiv;
}

function removeElement(el) {
	el.remove();
}

function createEndScreen() {
	const div = document.createElement('div');
	div.classList.add('endscreen');
	const divContent = `<p></p><p></p>`;
	div.innerHTML = divContent;
	return div;
}

function createCustomElement(elClass, label = "") {
	const customEl = document.createElement('div');
	customEl.classList.add(`${elClass}-wrapper`);
	label.length > 0
		? (customEl.innerHTML = `<p>${ util.capitalizeFirstLetter("score") }:</p><p id='${elClass}'></p>`)
		: (customEl.innerHTML = `<p id='${elClass}'></p>`);

	return customEl;
}
