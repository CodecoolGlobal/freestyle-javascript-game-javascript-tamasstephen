import {Game} from "./modules/gameMod.js";
import {validData} from "./modules/gameData.js";
import { Menu } from "./modules/menu.js";

initGame();

function initGame() {
    // const board = createBoard();
    // document.querySelector(".wrapper").appendChild(board);
    const menu = new Menu(Game, validData);
    //elementToRemove.remove();
    //const game = new Game(dummyData, 6000);
    //game.init();
    menu.initMenu();
    //const elementToRemove = document.querySelector('.buttons');

}

