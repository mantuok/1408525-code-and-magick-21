'use strict';

(function () {
  const WIZARD_NUMBER = 4;
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  const setupSimilarList = document.querySelector(`.setup-similar-list`);

  const createWizardArray = (wizards) => window.utils.shuffleArray(wizards).slice(0, 4);

  const renderWizard = (wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    return wizardElement;
  };

  window.backend.load (function (wizards) {
    const fragment = document.createDocumentFragment();
    createWizardArray(wizards).map(renderWizard).forEach((renderedWizard) => fragment.appendChild(renderedWizard));
    setupSimilarList.appendChild(fragment);
  })
})();
