`use strict`;

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

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getWizardName = () => NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, SURNAMES.length)];
const getWizardCloak = () => CLOAKS[getRandomNumber(0, CLOAKS.length)];
const getWIzardEyes = () => EYES[getRandomNumber(0, EYES.length)];

const createWizard = function () {

};
