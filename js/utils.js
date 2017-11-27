'use strict';

window.Utils = (function () {

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // export to utils functions
  return {
    getRandomInt: getRandomInt,
  };
})();
