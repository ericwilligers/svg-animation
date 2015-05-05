'use strict';

timing_test(function() {
  var polyfillEllipse = document.getElementById('polyfillEllipse');
  var nativeEllipse = document.getElementById('nativeEllipse');
  var polyfillAnimRX = document.getElementById('polyfillAnimRX');
  var nativeAnimRX = document.getElementById('nativeAnimRX');
  var polyfillAnimRY = document.getElementById('polyfillAnimRY');
  var nativeAnimRY = document.getElementById('nativeAnimRY');

  at(2000, 'rx', 5, polyfillEllipse, nativeEllipse);
  at(3000, 'ry', 5, polyfillEllipse, nativeEllipse);
  eventAt(5000, polyfillAnimRY, 'begin');
  at(7000, 'rx', 30, polyfillEllipse, nativeEllipse);
  at(8000, 'ry', 60, polyfillEllipse, nativeEllipse);
  eventAt(10000, polyfillAnimRY, 'end');
  at(12000, 'rx', 5, polyfillEllipse, nativeEllipse);
  at(13000, 'ry', 5, polyfillEllipse, nativeEllipse);

}, 'onbegin and onend');
