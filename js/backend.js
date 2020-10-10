'use strict';

(function (){
  const Url = {
    DOWNLOAD: `https://21.javascript.pages.academy/code-and-magick/data`,
    SAVE: `https://21.javascript.pages.academy/code-and-magick`
  };
  const Method = {
    GET: `GET`,
    POST: `POST`
  }

  const sendRequest = (onLoad, method, URL, data = null) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.open(method, URL);
    xhr.addEventListener(`load`, function () {
      onLoad(xhr.response);
    });
    xhr.send(data);
  }

  const load = (onLoad) => sendRequest(onLoad, Method.GET, Url.DOWNLOAD);

  const save = (onLoad, data) => {
    sendRequest(onLoad, Method.POST, Url.SAVE, data);
  }


  window.backend = {
    load,
    save
  };

})();
