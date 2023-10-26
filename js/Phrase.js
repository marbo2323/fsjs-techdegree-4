/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.phraseCotainer = document.querySelector("#phrase");
  }

  addPhraseToDisplay() {
    const phraseHtml = this.#createPhraseHtml();
    this.phraseCotainer.innerHTML = phraseHtml;
  }

  checkLetter(letter) {
    return this.phrase.split("").includes(letter);
  }

  showMatchedLetter(letter) {
    this.phraseCotainer
      .querySelectorAll(`li.hide.letter.${letter}`)
      .forEach((element) => {
        element.classList.remove("hide");
        element.classList.add("show");
      });
  }

  hasUnrevealedLetters() {
    return this.phraseCotainer.querySelectorAll("li.letter.hide").length > 0;
  }

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
