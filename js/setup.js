'use strict';

(function () {
  const NAME_LENGTH_MIN = 2;
  const NAME_LENGTH_MAX = 25;
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

  const userDialog = document.querySelector(`.setup`);
  const setupForm = document. querySelector(`.setup-wizard-form`)
  const userNameInput = userDialog.querySelector(`.setup-user-name`);
  const wizardCoat = userDialog.querySelector(`.wizard-coat`);
  const wizardCoatInput = userDialog.querySelector(`[name='coat-color']`);
  const wizardEyes = userDialog.querySelector(`.wizard-eyes`);
  const wizardEyesInput = userDialog.querySelector(`[name='eyes-color']`);
  const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);
  const wizardFireballInput = userDialog.querySelector(`[name='fireball-color']`);

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
    window.utils.changeElementColor(COATS, wizardCoat, wizardCoatInput, `fill`);
  });

  wizardEyes.addEventListener(`click`, function () {
    window.utils.changeElementColor(EYES, wizardEyes, wizardEyesInput, `fill`);
  });

  wizardFireball.addEventListener(`click`, function () {
    window.utils.changeElementColor(FIREBALLS, wizardFireball, wizardFireballInput, `background`);
  });

  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

  setupForm.addEventListener(`submit`, function (evt) {
    window.backend.save(function (response) {
      window.setupPopup.close();
    }, new FormData(setupForm)
    );
    evt.preventDefault();
  });
})();
