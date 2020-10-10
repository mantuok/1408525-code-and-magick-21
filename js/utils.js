'use strict';

(function () {
  const invokeIfKeyIs = (key, cb) => (evt) => evt.key === key && cb(evt);
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const getRandomElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];
  const changeElementColor = (arr, element, elementInput, property) => {
    const newColor = getRandomElement(arr);
    element.style = `${property}: ${newColor}`;
    elementInput.value = newColor;
  };
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  window.utils = {
    invokeIfKeyIs,
    getRandomNumber,
    getRandomElement,
    changeElementColor,
    shuffleArray
  };
})();
