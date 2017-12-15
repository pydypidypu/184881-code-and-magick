'use strict';

(function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var createWizard = function () {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = window.utils.genrRandom(wizardNames, false) + ' ' + window.utils.genrRandom(wizardSurnames, false);
    wizardElement.querySelector('.wizard-coat').style.fill = window.utils.genrRandom(COAT_COLORS, true);
    wizardElement.querySelector('.wizard-eyes').style.fill = window.utils.genrRandom(EYES_COLORS, true);
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var fillWizards = function (countWizards) {
    for (var i = 0; i < countWizards; i++) {
      fragment.appendChild(createWizard());
    }
    similarListElement.appendChild(fragment);
  };

  var countWizards = 4;
  fillWizards(countWizards);

  var changeFill = function (classOfElement, colorArray) {
    var curElement = userDialog.querySelector(classOfElement);
    curElement.addEventListener('click', function () {
      curElement.style.fill = colorArray[window.utils.getRandomInt(0, colorArray.length)];
    });
  };

  changeFill('.wizard-coat', COAT_COLORS);
  changeFill('.wizard-eyes', EYES_COLORS);

  var setupFireballWrap = userDialog.querySelector('.setup-fireball-wrap');

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.background = FIREBALL_COLORS[window.utils.getRandomInt(0, FIREBALL_COLORS.length)];
  });

})();
