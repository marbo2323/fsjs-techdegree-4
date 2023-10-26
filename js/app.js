/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.querySelector("#btn__reset");
const onScreenKeyboard = document.querySelector("#qwerty");
let currentGame = null;

startGameButton.addEventListener("click", () => {
  currentGame = new Game();
  currentGame.startGame();
});

onScreenKeyboard.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const buttonClicked = event.target;
    currentGame.handleInteraction(buttonClicked);
  }
});
