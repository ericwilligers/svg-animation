'use strict';

function populateSource(display, sourcecode) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      document.getElementById(sourcecode).textContent = xhr.responseText;
    }
  }
  xhr.open('GET', document.getElementById(display).src, true);
  xhr.send(null);
}

function populate() {
  var name = window.location.search.replace('?name=', '');
  document.getElementById('display_svg').src = 'svg/'+name+'.svg';
  document.getElementById('display_web').src = 'web/'+name+'.html';

  populateSource('display_svg', 'sourcecode_svg');
  populateSource('display_web', 'sourcecode_web');
}

window.onload = populate;
