/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.phraseCotainer = document.querySelector("#phrase");
  }

  /**
   * This method adds the phrase to the gameboard
   */
  addPhraseToDisplay() {
    const phraseHtml = this.#createPhraseHtml();
    this.phraseCotainer.innerHTML = phraseHtml;
  }

  /**
   * This method checks if a letter is in the phrase
   * @param {string} letter
   * @returns {boolean}
   *
   */
  checkLetter(letter) {
    return this.phrase.split("").includes(letter);
  }

  /**
   * This method reveals the matching letter on the board
   * @param {string} letter
   */
  showMatchedLetter(letter) {
    this.phraseCotainer
      .querySelectorAll(`li.hide.letter.${letter}`)
      .forEach((element) => {
        element.classList.remove("hide");
        element.classList.add("show");
      });
  }

  /**
   * This method checks if there are unrevealed letters
   * @returns {boolean}
   */
  hasUnrevealedLetters() {
    return this.phraseCotainer.querySelectorAll("li.letter.hide").length > 0;
  }

  /**
   * Private method for generating HTML content for a list of phrases
   */
  #createPhraseHtml() {
    const phraseHtml = (items = "") => `<ul>${items}</ul>`;
    const availableKeys = utils.getAvailableKeys();
    if (this.phrase) {
      const listItemsHtml = this.phrase
        .split("")
        .map((letter) => {
          return availableKeys.includes(letter)
            ? `<li class="hide letter ${letter}">${letter}</li>`
            : `<li class="space"></li>`;
        })
        .reduce((items, item) => (items += item));

      return phraseHtml(listItemsHtml);
    }
    return phraseHtml();
  }
}
