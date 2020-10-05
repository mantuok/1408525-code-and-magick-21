'use strict';

(function () {
  const userDialog = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const Key = {
    ESC: `Escape`,
    ENTER: `Enter`
  };
  const openPopup = () => {
    userDialog.classList.remove(`hidden`);
    document.addEventListener(`keydown`, window.utils.invokeIfKeyIs(Key.ESC, closePopup));
  };
  const closePopup = () => {
    userDialog.classList.add(`hidden`);
    document.removeEventListener(`keydown`, window.utils.invokeIfKeyIs(Key.ESC, closePopup));
  };

  setupOpen.addEventListener(`click`, openPopup);
  setupOpen.addEventListener(`keydown`, window.utils.invokeIfKeyIs(Key.ENTER, openPopup));
  setupClose.addEventListener(`click`, closePopup);
  setupClose.addEventListener(`keydown`, window.utils.invokeIfKeyIs(Key.ENTER, closePopup));
})();
