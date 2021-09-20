class Game {
    constructor(gameData, timer=20){
        this.gameData = gameData;
        this.timeLimit = this.timeLimit;
        this.rightAnswer = this.rightAnswer;
        this.score = 0;
        this.h2 = null;
        this.answerContainers = null;
        this.handleClick = util.clickHandlerWrapper(this);
    }


    handleScore(answer){
        answer === this.rightAnswer ? this.score += 100 : this.score -= 50;
    }

    provideNewQuestions(){
        const currentData = this.gameData.shift();
        this.h2.textContent = currentData.question;
        this.fillAnswers(currentData.answers);
        this.answerContainers.forEach(container => container.addEventListener('click', this.handleClick));
    }

    fillAnswers(answers){
        let i = 0; 
        for (const container of this.answerContainers) {
            container.querySelector(".answer").textContent = answers[i].answer;
            container.querySelector(".question-number").textContent = i + 1;
            this.saveRightAnswer(answers[i]);
            i++;
       }
    }

    saveRightAnswer(answer){
        if (answer.right){
            this.rightAnswer = answer.answer;
            console.log(this.rightAnswer);
        }
    }

    init(){
        this.h2 = document.querySelector("#playfield > h2");
        this.answerContainers = document.querySelectorAll(".answer-container");
        this.provideNewQuestions()
    }

}


function initGame() {
    const board = createBoard();
    console.log(board);
    document.querySelector(".wrapper").appendChild(board);
    const game = new Game(dummyData, 30) 
    game.init(); 
    //document.querySelector(".wrapper").appendChild(board);
    // Your game can start here, but define separate functions, don't write everything in here :)

}

// creates the playfield with an h2 and 4 answer-containers that include an answer-inner and an answer-outer div
// the anser-inner div contains two <p>'s the first contains the number of the question the second has the class
// answer and is empty, the function returns the board

function createBoard() {
    const newDiv = document.createElement('div');
    newDiv.id = 'playfield';
    const newH2 = document.createElement('h2');
    // let htmlDiv = document.querySelector(".wrapper").appendChild(newDiv);
    newDiv.appendChild(newH2);
    for (let numberOfQuestions = 4; numberOfQuestions >= 1; numberOfQuestions--) {
        let answerDiv = document.createElement('div');
        answerDiv.classList.add('answer-container');
        newDiv.appendChild(answerDiv);
        console.log(answerDiv);
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
    // console.log(newDiv);
    // console.log(newH2);
    // console.log(htmlDiv);
    return newDiv;
}

const util = {

    clickHandlerWrapper(obj){
        function handleClick (e) {
            console.log(e);
            obj.answerContainers.forEach(el => el.removeEventListener("click", obj.handleClick));
            const answer = e.currentTarget.querySelector(".answer").textContent
            obj.handleScore(answer);
            console.log(obj.score);
            obj.provideNewQuestions();
        }
        return handleClick
    },

}

const dummyData = [
    {
        question: "What is the name of David Hasselhoff's hit from 2015?",
        answers: [
            {answer: "True Survivor", right: true},
            {answer: "I've been looking for freedom", right: false},
            {answer: "Jump in my car", right: false},
            {answer: "The Hoff"}
        ]
    },
    {
        question: "What is the name of the infamous Uwe Boll movie from 2005?",
        answers: [
            {answer: "Survivor", right: false},
            {answer: "The King's men", right: false},
            {answer: "Alone in the dark", right: true},
            {answer: "Dark temptation"}
        ]
    }
]


initGame();
