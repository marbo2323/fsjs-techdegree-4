/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.querySelector("#btn__reset");
const onScreenKeyboard = document.querySelector("#qwerty");
let currentGame = null;

/**
 * This object contains functions, that are used in several places in this app
 */
const utils = {
  /**
   * Returns the array of keys available on the on-screen keyboard
   * @returns {Array<string>}
   */
  getAvailableKeys: function () {
    const availableKeys = [];
    document
      .querySelectorAll("#qwerty .key")
      .forEach((keyElement) => availableKeys.push(keyElement.textContent));
    return availableKeys;
  },

  /**
   * Returns the on-screen button HTML element by its text content
   * @param {string} keyValue
   * @returns {HTMLElement}
   */
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

// Add event listener for Start Game button
startGameButton.addEventListener("click", () => {
  currentGame = new Game();
  currentGame.startGame();
});

// Add event listener for on-screen keyboard
onScreenKeyboard.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const buttonClicked = event.target;
    currentGame.handleInteraction(buttonClicked);
  }
});

// Add event listener for external keyboard
document.addEventListener("keyup", (event) => {
  const keyValue = event.key;
  if (utils.getAvailableKeys().includes(keyValue)) {
    const onScreeKeyboardButton = utils.getOnScreenKeyboardKey(keyValue);
    if (onScreeKeyboardButton) {
      currentGame.handleInteraction(onScreeKeyboardButton);
    }
  }
});
