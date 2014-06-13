'use strict';

function populate(display, sourcecode) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      document.getElementById(sourcecode).textContent = xhr.responseText;
    }
  }
  xhr.open('GET', document.getElementById(display).src, true);
  xhr.send(null);
}
