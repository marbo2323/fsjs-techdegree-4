/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    // source of phrases: https://www.ef.co.uk/english-resources/english-quotes/famous/
    this.phrases = [
      "Practice makes perfect",
      "All that glitters is not gold",
      "Knowledge is power",
      "May the Force be with you",
      "The truth will set you free",
      "Whatever you are be a good one",
      "You must be the change you wish to see in the world",
      "United we stand, divided we fall",
      "To be or not to be that is the question",
      "The only thing we have to fear is fear itself",
      "The love of money is the root of all evil",
    ].map((phraseText) => new Phrase(phraseText));
    this.activePhrase = null;
    this.maxTries = document.querySelectorAll("#scoreboard li.tries").length;
    this.ovarlay = document.querySelector("#overlay");
    this.gameOwerMessage = document.querySelector("#game-over-message");
    this.scoreboard = document.querySelector("#scoreboard");
    this.liveIcon = "images/liveHeart.png";
    this.lostIcon = "images/lostHeart.png";
  }

  /**
   * Start a new game with a random phrase
   */
  startGame() {
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    this.ovarlay.style.display = "none";
  }

  /**
   * Return a random phrase
   * @returns {string}
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  /**
   * Remove life by changing icon and incrementing the missed property.
   * Calls the gameOver method if there are no lives left.
   */
  removeLife() {
    this.missed++;
    if (this.missed === this.maxTries) {
      this.gameOver();
      return;
    }
    const lives = this.scoreboard.querySelectorAll(
      `li.tries img[src='${this.liveIcon}']`
    );

    if (lives.length > 0) {
      lives[0].src = this.lostIcon;
    }
  }

  /**
   * Displays the result of the game.
   */
  gameOver() {
    const resultMessage =
      this.missed === this.maxTries
        ? "Sorry, but You lost the game!"
        : "You won the game, congratulations!";
    this.gameOwerMessage.textContent = resultMessage;
    this.#resetGameBoard();
    this.ovarlay.style.display = "";
  }

  /**
   * Checks for win.
   * If there are no unrevealed letters, the player wins.
   * @returns {boolean}
   */
  checkForWin() {
    return !this.activePhrase.hasUnrevealedLetters();
  }

  /**
   * Handles clicking on on-screen keyboard buttons.
   * @param {HTMLElement} buttonClicked
   */
  handleInteraction(buttonClicked) {
    const clickedLetter = buttonClicked.textContent;
    if (this.activePhrase.checkLetter(clickedLetter)) {
      this.activePhrase.showMatchedLetter(clickedLetter);
      buttonClicked.className = "chosen";
      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      buttonClicked.className = "wrong";
      this.removeLife();
    }
  }

  // Private method for resetting the gameboard
  #resetGameBoard() {
    // resetting existing phrase
    const phraseContainerList =
      this.activePhrase.phraseCotainer.querySelector("ul");
    phraseContainerList
      .querySelectorAll("li")
      .forEach((listItem) => phraseContainerList.removeChild(listItem));

    // resetting onscreen keyboard
    document
      .querySelectorAll("#qwerty button")
      .forEach((button) => (button.className = "key"));

    // resetting scoreboard
    this.scoreboard
      .querySelectorAll("li.tries img")
      .forEach((liveImage) => (liveImage.src = this.liveIcon));
  }
}
