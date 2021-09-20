export { createBoard }

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