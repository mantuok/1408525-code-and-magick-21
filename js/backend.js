'use strict';

(function (){
  const Url = {
    DOWNLOAD: `https://21.javascript.pages.academy/code-and-magick/data`
  };

  const load = (onLoad, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.open(`GET`, Url.DOWNLOAD);

    xhr.addEventListener(`load`, function () {
      onLoad(xhr.response);
    });

    xhr.send();
  };

  window.backend = {
    load
  };

})();
