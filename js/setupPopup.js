'use strict';

(function () {
  const userDialog = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const Key = {
    ESC: `Escape`,
    ENTER: `Enter`
  };
  let InitialCoords = {
    x: 0,
    y: 0
  };

  const openPopup = () => {
    userDialog.classList.remove(`hidden`);
    InitialCoords.x = userDialog.offsetLeft;
    InitialCoords.y = userDialog.offsetTop;
    document.addEventListener(`keydown`, window.utils.invokeIfKeyIs(Key.ESC, closePopup));
  };
  const closePopup = () => {
    userDialog.classList.add(`hidden`);
    userDialog.style.left = InitialCoords.x + `px`;
    userDialog.style.top = InitialCoords.y + `px`;
    document.removeEventListener(`keydown`, window.utils.invokeIfKeyIs(Key.ESC, closePopup));
  };

  setupOpen.addEventListener(`click`, openPopup);
  setupOpen.addEventListener(`keydown`, window.utils.invokeIfKeyIs(Key.ENTER, openPopup));
  setupClose.addEventListener(`click`, closePopup);
  setupClose.addEventListener(`keydown`, window.utils.invokeIfKeyIs(Key.ENTER, closePopup));
})();
