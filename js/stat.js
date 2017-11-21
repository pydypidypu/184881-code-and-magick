'use strict';

var initialX = 100; // Начальная координата тени облака Х px;
var initialY = 10; // Начальная координата тени облака Y px;
var heightRect = 270; // Высота облака px;
var widthRect = 420; // Ширина облака px;
var radius = 10; // Радиус углов облака px;
var fillColor;

var roundedRect = function (ctx) {
  ctx.beginPath();
  ctx.fillStyle = fillColor;
  ctx.moveTo(initialX, initialY + radius);
  ctx.lineTo(initialX, initialY + heightRect - radius);
  ctx.quadraticCurveTo(initialX, initialY + heightRect, initialX + radius, initialY + heightRect);
  ctx.lineTo(initialX + widthRect - radius, initialY + heightRect);
  ctx.quadraticCurveTo(initialX + widthRect, initialY + heightRect, initialX + widthRect, initialY + heightRect - radius);
  ctx.lineTo(initialX + widthRect, initialY + radius);
  ctx.quadraticCurveTo(initialX + widthRect, initialY, initialX + widthRect - radius, initialY);
  ctx.lineTo(initialX + radius, initialY);
  ctx.quadraticCurveTo(initialX, initialY, initialX, initialY + radius);
  ctx.fill();
  ctx.stroke();
};

window.renderStatistics = function (ctx, names, times) {

  fillColor = 'rgba(0, 0, 0, 0.7)'; // Цвет тени облака;
  roundedRect(ctx);

  initialX -= 10; // Начальная координата облака Х px;
  initialY -= 10; // Начальная координата облака Y px;

  fillColor = 'rgba(255, 255, 255, 1)'; // Цвет облака;
  roundedRect(ctx);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', initialX + 110, initialY + 20);
  ctx.fillText('Список результатов:', initialX + 110, initialY + 40);

  var getMaxTime = function () {
    return Math.max.apply(null, times);
  };

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var barHeigth = 150; // Высота гистограммы px;
  var barInitialX = 130; // Начальная координата первой колонки X px;
  var barInitialY = 90; // Начальная координата первой колонки Y px;
  var columnWidth = 40; // Ширина колонки px;
  var indent = 50; // Расстояние между колонками px;
  var colorMe = 'rgba(255, 0, 0, 1)'; // Цвет колонки 'Вы';

  var step = barHeigth / getMaxTime(times); // Шаг колонки гистограммы px;
  var maxBarHeight = step * getMaxTime(times); // Высота максимальной колонки px;

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = colorMe;
    } else {
      ctx.fillStyle = 'rgba(0,0,255, ' + 0.01 * getRandomInt(10, 100) + ')';
    }

    var curBarHeight = step * times[i];
    var curY = barInitialY + (maxBarHeight - curBarHeight);
    ctx.fillRect(barInitialX, curY, columnWidth, curBarHeight);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(names[i], barInitialX, barInitialY + maxBarHeight + 20);
    ctx.fillText(Math.floor(times[i]), barInitialX, curY - 10);
    barInitialX = barInitialX + indent + columnWidth;
  }
};
