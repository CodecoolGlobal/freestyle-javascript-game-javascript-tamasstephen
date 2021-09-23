export {createBoard, removeElement, createEndScreen, createCustomElement};
import {util} from './util.js';

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
        ? (customEl.innerHTML = `<p>${util.capitalizeFirstLetter("score")}:</p><p id='${elClass}'></p>`)
        : (customEl.innerHTML = `<p id='${elClass}'></p>`);

    return customEl;
}
