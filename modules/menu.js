export {createMenuButtons};

function createMenuButtons() {
    const btnDiv = document.createElement("div");
    btnDiv.classList.add('buttons');
    const menuQuizButton = document.createElement('div');
    menuQuizButton.classList.add('menuBtn');
    menuQuizButton.innerText = 'Start game';
    btnDiv.appendChild(menuQuizButton);
    document.querySelector(".wrapper").appendChild(btnDiv);
}
