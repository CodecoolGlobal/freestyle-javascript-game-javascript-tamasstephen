export { util }

const util = {

    clickHandlerWrapper(obj){
        function handleClick (e) {
            obj.answerContainers.forEach(el => el.removeEventListener("click", obj.handleClick));
            const answer = e.currentTarget.querySelector(".answer").textContent
            obj.handleScore(answer);
            obj.provideNewQuestions();
        }
        return handleClick
    },

}