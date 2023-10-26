/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.querySelector("#btn__reset");
const onScreenKeyboard = document.querySelector("#qwerty");
let currentGame = null;

const utils = {
  getAvailableKeys: function () {
    const availableKeys = [];
    document
      .querySelectorAll("#qwerty .key")
      .forEach((keyElement) => availableKeys.push(keyElement.textContent));
    return availableKeys;
  },

  getOnScreenKeyboardKey(keyValue) {
    const allButtons = document.querySelectorAll("#qwerty .key");
    let filteredButton = null;
    allButtons.forEach((button) => {
      if (button.textContent === keyValue) {
        filteredButton = button;
      }
    });
    return filteredButton;
  },
};

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

document.addEventListener("keyup", (event) => {
  const keyValue = event.key;
  if (utils.getAvailableKeys().includes(keyValue)) {
    const onScreeKeyboardButton = utils.getOnScreenKeyboardKey(keyValue);
    if (onScreeKeyboardButton) {
      onScreeKeyboardButton.click();
    }
  }
});
