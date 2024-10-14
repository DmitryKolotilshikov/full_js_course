const generateRandomNumber = () => Math.ceil(Math.random() * 6);

const container = document.querySelector("[data-container]");
const gameInfo = document.querySelector("[data-game-info]");
const actionBtn = document.querySelector("[data-action-btn]");

actionBtn.addEventListener("click", () => {
    render();
})

const render = () => {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();

    container.innerHTML = "";

    container.insertAdjacentHTML("beforeend", `
        <svg class="dice dice-red">
          <use href="sprites.svg#dice-${player1}-icon"></use>
        </svg>
    `)
    container.insertAdjacentHTML("beforeend", `
        <svg class="dice dice-blue">
          <use href="sprites.svg#dice-${player2}-icon"></use>
        </svg>
    `)

    if (player1 === player2) {
        gameInfo.textContent = "НИЧЬЯ!";
        gameInfo.style.color = "#000";
    }
    else if (player1 > player2) {
        gameInfo.textContent = "Победил игрок 1";
        gameInfo.style.color = "#E98B8B";
    }
    else {
        gameInfo.textContent = "Победил игрок 2";
        gameInfo.style.color = "#449fcc";
    }
}

render();