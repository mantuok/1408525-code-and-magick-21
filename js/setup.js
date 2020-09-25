'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const CLOAKS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_NUMBER = 4;

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const setupSimilarList = document.querySelector(`.setup-similar-list`);
const userDialog = document.querySelector(`.setup`);

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const createWizard = () => ({
    name: getRandomElement(NAMES) + ` ` + getRandomElement(SURNAMES),
    coatColor: getRandomElement(CLOAKS),
    eyeColor: getRandomElement(EYES)
});

const createWizardArray = () => {
  const wizards = [];

  for (let i = 0; i < WIZARD_NUMBER; i++) {
    wizards.push(createWizard());
  }

  return wizards;
}

const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyeColor;
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;

  return wizardElement;
};

const renderWizards = () => {
  const fragment = document.createDocumentFragment();
  createWizardArray().map(renderWizard).forEach(renderedWizard => fragment.appendChild(renderedWizard));
  setupSimilarList.appendChild(fragment);
}

renderWizards();

userDialog.classList.remove(`hidden`);
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
