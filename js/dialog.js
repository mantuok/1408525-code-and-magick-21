'use strict';

(function () {
  const userDialog = document.querySelector(`.setup`);
  const dialogHandle = userDialog.querySelector(`.upload`);

  dialogHandle.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      dragged = true;

      const move = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.left = (userDialog.offsetLeft - move.x) + `px`;
      userDialog.style.top = (userDialog.offsetTop - move.y) + `px`;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefaul = (clickEvt) => {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefaul);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefaul);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
