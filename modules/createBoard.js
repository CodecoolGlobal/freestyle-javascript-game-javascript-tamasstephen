export { createBoard, removeElement, createEndScreen, createCustomElement, runflipCardAnim, removeEndFieldItems };
import { util } from './util.js';

function createPlayfield() {
    const newDiv = document.createElement('div');
    newDiv.id = 'playfield';
    const newH2 = document.createElement('h2');
    newDiv.appendChild(newH2);
    return newDiv;
}


function createBoard() {
    const newDiv = createPlayfield();
    for (let numberOfQuestions = 4; numberOfQuestions >= 1; numberOfQuestions--) {
        let answerDiv = document.createElement('div');
        answerDiv.classList.add('answer-container');
        newDiv.appendChild(answerDiv);
        const answerFront = createAnswerFront();
        const answerBack = createAnswerBack();
        answerDiv.appendChild(answerFront);
        answerDiv.appendChild(answerBack);
        answerFront.appendChild(createQuestionContainers());
        answerFront.appendChild(createAnswerContainers());
    }
    return newDiv;
}

function createAnswerFront() {
    let answerFrontDiv = document.createElement('div');
    answerFrontDiv.classList.add('answer-front');
    return answerFrontDiv;
}

function createAnswerBack() {
    let answerBackDiv = document.createElement('div');
    answerBackDiv.classList.add('answer-back');
    return answerBackDiv;
}


function createQuestionContainers() {
    let questionNumberParagraphsElement = document.createElement('p');
    questionNumberParagraphsElement.classList.add('question-number');
    return questionNumberParagraphsElement;
}

function createAnswerContainers() {
    let answerParagraphsElement = document.createElement('p');
    answerParagraphsElement.classList.add('answer');
    return answerParagraphsElement;
}


function removeElement(el) {
    el.remove();
}


function createEndScreen(score) {
	const div = document.createElement('div');
	div.classList.add('endscreen');
	const divContent = `<p></p><p></p>`;
	div.innerHTML = divContent;
	setupEndScreen(div, score);
	return div;

}

function createCustomElement(elClass, label = "") {
    const customEl = document.createElement('div');
    customEl.classList.add(`${elClass}-wrapper`);
    label.length > 0
        ? (customEl.innerHTML = `<p>${util.capitalizeFirstLetter("score")}:</p><p id='${elClass}'></p>`)
        : (customEl.innerHTML = `<p id='${elClass}'></p>`);

    return customEl;
}

function setupEndScreen(endScreen, score){
	endScreen.querySelector('p:first-child').textContent = 'Your score is:';
	endScreen.querySelector('p:last-child').textContent = score;
	document.querySelector('.wrapper').appendChild(endScreen);
}

function runflipCardAnim(){
		const cards = document.querySelectorAll(".answer-front");
		const cardsB = document.querySelectorAll(".answer-back");
		handleFlipCardStates(cards, cardsB);
}

function handleFlipCardStates(frontCards, backCards){
	frontCards.forEach(card=>card.classList.add("flipped"));
	backCards.forEach(card=>card.classList.add("flipped"));
	util.wait(600).then(()=>{
		frontCards.forEach(card=>card.classList.remove("flipped"));
		backCards.forEach(card=>card.classList.remove("flipped"));
	})

}

function removeEndFieldItems(){
	document.querySelector('.headline').classList.add('invisible');
	document.querySelector('.score-wrapper').remove();
	document.querySelector('.timer-wrapper').remove();
	document.querySelector('.endscreen').remove()
}