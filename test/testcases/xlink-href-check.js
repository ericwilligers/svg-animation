'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(0, 'width', 200, polyfillRect, nativeRect);
  at(1000, 'height', 200, polyfillRect, nativeRect);
  at(2000, 'width', 200, polyfillRect, nativeRect);
  at(3000, 'height', 200, polyfillRect, nativeRect);
}, 'set xlink:href width and height');
