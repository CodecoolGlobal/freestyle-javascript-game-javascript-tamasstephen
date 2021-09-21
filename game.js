import { Game } from "./modules/gameMod.js"
import { createBoard } from "./modules/createBoard.js";
import { dummyData } from "./modules/gameData.js"

initGame();

function initGame() {
    const board = createBoard();
    document.querySelector(".wrapper").appendChild(board);
    const game = new Game(dummyData, 5) 
    game.init(); 
}
