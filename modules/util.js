import { removeEndFieldItems } from "./createBoard.js";
export { util }

const util = {

    clickHandlerWrapper(obj){
        function handleClick (e) {
            clearInterval(obj.counter);
            obj.answerContainers.forEach(el => el.removeEventListener("click", obj.handleClick));
            const answer = e.currentTarget.querySelector(".answer").textContent
            obj.handleScore(answer);
            obj.highlightAnswers(answer, this);
            util.wait(1000).then(()=>{
                obj.checkQuestionsLeft() ? obj.endgame() : obj.provideNewQuestions();
            })
        }
        return handleClick
    },

    wait(ms){
        return new Promise((resolve)=>setTimeout(resolve, ms));
    },

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
    
    copyArray(arr) {
        const newArr = [];
        for(const el of arr){
            newArr.push(el);
        }
        return newArr;
    },

    endGameHandlerWrap(menuObj, gameObj, validData){
        function executeGameEnd(){
            removeEndFieldItems(); 
            const menu = new menuObj(gameObj, validData);
            menu.initMenu();
        }
        return executeGameEnd;
    }
}
