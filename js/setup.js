'use strict';

/* global Utils */

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Функция генерации случайных данных
var genrRandom = function (array) {
  var index = Utils.getRandomInt(0, array.length - 1);
  var randomValue = array[index];
  array.splice(index, 1);
  return randomValue;
};

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = genrRandom(WIZARD_NAMES) + ' ' + genrRandom(WIZARD_SURNAMES);
  wizardElement.querySelector('.wizard-coat').style.fill = genrRandom(coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = genrRandom(eyesColor);
  return wizardElement;
};

var fragment = document.createDocumentFragment();

var fiilWizards = function (countWizards) {
  for (var i = 0; i < countWizards; i++) {
    fragment.appendChild(createWizard());
  }

  similarListElement.appendChild(fragment);
};

var countWizards = 4;
fiilWizards(countWizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
