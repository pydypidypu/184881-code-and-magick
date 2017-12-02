'use strict';

/* global Utils */

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Функция генерации случайных данных
var genrRandom = function (array, repeat) {
  var index = Utils.getRandomInt(0, array.length - 1);
  var randomValue = array[index];
  if (!repeat) {
    array.splice(index, 1);
  }

  return randomValue;
};

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var createWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = genrRandom(wizardNames, false) + ' ' + genrRandom(wizardSurnames, false);
  wizardElement.querySelector('.wizard-coat').style.fill = genrRandom(COAT_COLORS, true);
  wizardElement.querySelector('.wizard-eyes').style.fill = genrRandom(EYES_COLORS, true);
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

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  var inputUserName = setup.querySelector('.setup-user-name');
  var focusedElement = document.activeElement;
  if (evt.keyCode === ESC_KEYCODE && focusedElement !== inputUserName) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var changeFill = function (classOfElement, colorArray) {
  var curElement = setup.querySelector(classOfElement);
  curElement.addEventListener('click', function () {
    curElement.style.fill = colorArray[Utils.getRandomInt(0, colorArray.length)];
  });
};

changeFill('.wizard-coat', COAT_COLORS);
changeFill('.wizard-eyes', EYES_COLORS);

var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = FIREBALL_COLORS[Utils.getRandomInt(0, FIREBALL_COLORS.length)];
});
