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
    }

}
