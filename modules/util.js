export { util }

const util = {

    clickHandlerWrapper(obj){
        function handleClick (e) {
            obj.answerContainers.forEach(el => el.removeEventListener("click", obj.handleClick));
            const answer = e.currentTarget.querySelector(".answer").textContent
            obj.handleScore(answer);
            obj.checkQuestionsLeft() ? obj.endgame() : obj.provideNewQuestions();
        }
        return handleClick
    },

    wait(ms){
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }

}