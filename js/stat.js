'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const GAP = 20;
const FONT_GAP = 40;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const COLUMN_GAP = 50;
const Color = {
  RED: `rgba(255, 0, 0, 1)`,
  WHITE: `rgba(255, 255, 255, 1)`,
  BLACK_TRANSPARENT: `rgba(0, 0, 0, 0.7)`,
  BLACK: `rgba(0, 0, 0, 1)`
};
const FONT = {
  SIZE: `16px`,
  FAMILY: `PT Mono`,
};

const renderCloud = function (ctx, xCoordinate, yCoordinate, color) {
  ctx.fillStyle = color;
  ctx.fillRect(xCoordinate, yCoordinate, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderText = function (ctx, text, gapX, gapY) {
  ctx.fillStyle = Color.BLACK;
  ctx.font = `${FONT.SIZE} ${FONT.FAMILY}`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(
      text,
      CLOUD_X + gapX,
      CLOUD_Y + gapY
  );
};

const getBarColor = (name) => (name === `Вы`) ? Color.RED : getRandomBlue();

const getRandomBlue = () => `hsl(240, ${getRandomNumber(0, 100)}%, 50%)`;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getMaxTime = function (arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(
      ctx,
      CLOUD_X + CLOUD_GAP,
      CLOUD_Y + CLOUD_GAP,
      Color.BLACK_TRANSPARENT
  );

  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      Color.WHITE
  );

  renderText(
      ctx,
      `Ура вы победили!`,
      GAP,
      GAP
  );

  renderText(
      ctx,
      `Список результатов:`,
      GAP,
      FONT_GAP
  );

  const maxTime = getMaxTime(times);

  for (let i = 0; i < names.length; i++) {

    const roundedTimes = Math.round(times[i]);

    ctx.fillStyle = getBarColor(names[i]);

    ctx.fillRect(
        CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        CLOUD_Y - ((BAR_HEIGHT * times[i]) / maxTime) + (GAP * 12),
        BAR_WIDTH,
        (BAR_HEIGHT * times[i]) / maxTime
    );

    renderText(
        ctx,
        roundedTimes,
        COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        (GAP * 3.5) + (BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime))
    );

    renderText(
        ctx,
        names[i],
        COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        (GAP * 5) + BAR_HEIGHT
    );
  }
};
