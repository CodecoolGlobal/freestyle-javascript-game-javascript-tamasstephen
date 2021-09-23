import {Game} from "./modules/gameMod.js";
import {validData} from "./modules/gameData.js";
import { Menu } from "./modules/menu.js";

initGame();

function initGame() {
    const menu = new Menu(Game, validData);
    menu.initMenu();
}

