`use strict`;

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];

const WIZARDS = [];

const getWizardName = () => NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, SURNAMES.length)];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(getWizardName());
