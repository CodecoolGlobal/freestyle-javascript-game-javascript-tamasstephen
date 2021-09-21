export { createBoard, removeElement, createEndScreen, createTimerElement }

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
                answerFrontDiv.appendChild((answerParagraphsElement));
            }
        }
    }
    return newDiv;
}

function removeElement(el){
    el.remove();
}

function createEndScreen(){
    const div = document.createElement("div");
    div.classList.add("endscreen");
    const divContent = `<p></p><p></p>`;
    div.innerHTML = divContent;
    return div;
}

function createTimerElement(){
    const timerEl = document.createElement('div');
    timerEl.classList.add("timer-wrapper");
    timerEl.innerHTML="<p id='timer'>1<p>";
    return timerEl;
}