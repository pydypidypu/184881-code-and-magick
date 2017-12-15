'use strict';

window.utils = (function () {

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var genrRandom = function (array, repeat) {
    var index = getRandomInt(0, array.length - 1);
    var randomValue = array[index];
    if (!repeat) {
      array.splice(index, 1);
    }

    return randomValue;
  };

  // export to utils functions
  return {
    getRandomInt: getRandomInt,
    genrRandom: genrRandom,
  };
})();
