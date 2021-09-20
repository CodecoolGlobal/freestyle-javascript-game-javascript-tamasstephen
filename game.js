initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}

new class Game {
    constructor(gameData, timer=20){
        this.gameData = gameData;
        this.timeLimit = this.timeLimit;
        this.rightAnswer = this.rightAnswer;
    }
}

// creates the playfield with an h2 and 4 answer-containers that include an answer-inner and an answer-outer div
// the anser-inner div contains two <p>'s the first contains the number of the question the second has the class
// answer and is empty, the function returns the board
function createBoard(){

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
            {answer: "Survivor", right: true},
            {answer: "The King's men", right: false},
            {answer: "Alone in the dark", right: false},
            {answer: "Dark temptation"}
        ]
    }
]