'use strict';

(function () {
  const Url = {
    DOWNLOAD: `https://21.javascript.pages.academy/code-and-magick/data`,
    SAVE: `https://21.javascript.pages.academy/code-and-magick`
  };
  const Method = {
    GET: `GET`,
    POST: `POST`
  };
  const StatusCode = {
    OK: 200
  };

  const TIMEOUT_MS = 1000;

  const sendRequest = (onLoad, onError, method, URL, data = null) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.addEventListener(`load`, function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }
    });
    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });
    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + ` мс`);
    });
    xhr.timeout = TIMEOUT_MS;

    xhr.open(method, URL);
    xhr.send(data);
  };

  const load = (onLoad, onError) => sendRequest(onLoad, onError, Method.GET, Url.DOWNLOAD);

  const save = (onLoad, onError, data) => {
    sendRequest(onLoad, onError, Method.POST, Url.SAVE, data);
  };

  window.backend = {
    load,
    save
  };

})();
