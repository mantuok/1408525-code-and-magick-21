'use strict';

const NAME_LENGTH_MIN = 2;
const NAME_LENGTH_MAX = 25;
const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COATS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALLS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARD_NUMBER = 4;

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const setupSimilarList = document.querySelector(`.setup-similar-list`);
const userDialog = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = userDialog.querySelector(`.setup-close`);
const userNameInput = userDialog.querySelector(`.setup-user-name`);
const wizardCoat = userDialog.querySelector(`.wizard-coat`);
const wizardCoatInput = userDialog.querySelector(`[name='coat-color']`);
const wizardEyes = userDialog.querySelector(`.wizard-eyes`);
const wizardEyesInput = userDialog.querySelector(`[name='eyes-color']`);
const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);
const wizardFireballInput = userDialog.querySelector(`[name='fireball-color']`);
const Key = {
  ESC: `Escape`,
  ENTER: `Enter`
};

const invokeIfKeyIs = (key, cb) => (evt) => evt.key === key && cb(evt);

const openPopup = () => {
  userDialog.classList.remove(`hidden`);
  document.addEventListener(`keydown`, invokeIfKeyIs(Key.ESC, closePopup));
};

const closePopup = () => {
  userDialog.classList.add(`hidden`);
  document.removeEventListener(`keydown`, invokeIfKeyIs(Key.ESC, closePopup));
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const changeElementColor = (arr, element, elementInput, property) => {
  const newColor = getRandomElement(arr);
  element.style = `${property}: ${newColor}`;
  elementInput.value = newColor;
};

const getRandomElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const createWizard = () => ({
  name: getRandomElement(NAMES) + ` ` + getRandomElement(SURNAMES),
  coatColor: getRandomElement(COATS),
  eyeColor: getRandomElement(EYES)
});

const createWizardArray = () => {
  const wizards = [];

  for (let i = 0; i < WIZARD_NUMBER; i++) {
    wizards.push(createWizard());
  }

  return wizards;
};

const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyeColor;
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;

  return wizardElement;
};

const renderWizards = () => {
  const fragment = document.createDocumentFragment();
  createWizardArray().map(renderWizard).forEach((renderedWizard) => fragment.appendChild(renderedWizard));
  setupSimilarList.appendChild(fragment);
};

setupOpen.addEventListener(`click`, openPopup);

setupOpen.addEventListener(`keydown`, invokeIfKeyIs(Key.ENTER, openPopup));

setupClose.addEventListener(`click`, closePopup);

setupClose.addEventListener(`keydown`, invokeIfKeyIs(Key.ENTER, closePopup));

userNameInput.addEventListener(`input`, function () {
  const valueLength = userNameInput.value.length;

  if (valueLength < NAME_LENGTH_MIN) {
    userNameInput.setCustomValidity(`Необходимо ввести еще ` + (NAME_LENGTH_MIN - valueLength) + ` сим.`);
  } else if (valueLength > NAME_LENGTH_MAX) {
    userNameInput.setCustomValidity(`Необходимо удалить лишние ` + (valueLength - NAME_LENGTH_MAX) + ` сим.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

wizardCoat.addEventListener(`click`, function () {
  changeElementColor(COATS, wizardCoat, wizardCoatInput, `fill`);
});

wizardEyes.addEventListener(`click`, function () {
  changeElementColor(EYES, wizardEyes, wizardEyesInput, `fill`);
});

wizardFireball.addEventListener(`click`, function () {
  changeElementColor(FIREBALLS, wizardFireball, wizardFireballInput, `background`);
});

renderWizards();

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
