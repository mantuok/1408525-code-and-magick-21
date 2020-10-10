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
  };
  const errorHandler = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 10; margin: 0 auto; padding: 50px; text-align: center; color: red; background-color: blue`;
    node.style.position = `absolute`;
    node.style.top = 0;
    node.style.left = 0;
    node.style.fontSize = `24px`;
    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.utils = {
    invokeIfKeyIs,
    getRandomNumber,
    getRandomElement,
    changeElementColor,
    shuffleArray,
    errorHandler
  };
})();
