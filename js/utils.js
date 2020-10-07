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

  window.utils = {
    invokeIfKeyIs,
    getRandomNumber,
    getRandomElement,
    changeElementColor
  };
})();
