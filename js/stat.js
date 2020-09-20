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
const colors = {
  RED: 'rgba(255, 0, 0, 1)',
  WHITE: 'rgba(255, 255, 255, 1)',
  BLACK_TRANSPARENT: 'rgba(0, 0, 0, 0.7)',
  BLACK: 'rgba(0, 0, 0, 1)'
};
const font = {
  SIZE: '16px',
  FAMILY: 'PT Mono',
};
const saturation = {
  MIN: 0,
  MAX: 100
};

const createCloud = function (ctx, xCoordinate, yCoordinate, color) {
  ctx.fillStyle = color;
  ctx.fillRect(xCoordinate, yCoordinate, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const styleText = function (ctx) {
  ctx.fillStyle = colors.BLACK;
  ctx.font = `${font.SIZE} ${font.FAMILY}`;
  ctx.textBaseline = 'hanging';
}

const colorBar = function (ctx, name) {
  let blueColor = getRandomBlue();
  ctx.fillStyle = (name === 'Вы') ? colors.RED : blueColor;
};

const getRandomBlue = function () {
  let randomSaturation = Math.floor(Math.random() * (saturation.MAX - saturation.MIN)) + saturation.MIN;
  let randomBlue = `hsl(240, ${randomSaturation}%, 50%)`;
  return randomBlue;
}

const getMaxTime = function (arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function (ctx, names, times) {

  createCloud(
    ctx,
    CLOUD_X + CLOUD_Y,
    CLOUD_Y + CLOUD_GAP,
    colors.BLACK_TRANSPARENT
  );

  createCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    colors.WHITE
  );

  styleText(ctx);

  ctx.fillText(
    'Ура вы победили!',
    CLOUD_X + GAP,
    CLOUD_Y + GAP
  );

  ctx.fillText(
    'Список результатов:',
    CLOUD_X + GAP,
    CLOUD_Y + FONT_GAP
  );

  for (let i = 0; i < names.length; i++) {

    const roundedTimes = Math.round(times[i]);

    colorBar(ctx, names[i]);

    let maxTime = getMaxTime(times);

    ctx.fillRect(
      CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH ) * i,
      CLOUD_Y - ((BAR_HEIGHT * times[i]) / maxTime) + (GAP * 12),
      BAR_WIDTH,
      (BAR_HEIGHT * times[i]) / maxTime
    );

    styleText(ctx);

    ctx.fillText (
      roundedTimes,
      CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH ) * i,
      CLOUD_Y + ( GAP * 3.5 ) + (BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime) )
    );

    ctx.fillText (
      names[i],
      CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH ) * i,
      CLOUD_Y + ( GAP * 5  ) + BAR_HEIGHT
    );
  };
};
