'use strict';

timing_test(function() {
  var polyfillRectLeft = document.getElementById('polyfillRectLeft');
  var polyfillRectMiddle = document.getElementById('polyfillRectMiddle');
  var polyfillRectRight = document.getElementById('polyfillRectRight');
  var nativeRectLeft = document.getElementById('nativeRectLeft');
  var nativeRectMiddle = document.getElementById('nativeRectMiddle');
  var nativeRectRight = document.getElementById('nativeRectRight');

  at(500, 'fill', 'rgba(255, 0, 0, 1)', polyfillRectMiddle, polyfillRectMiddle);
  at(1500, 'fill', 'blue', polyfillRectLeft, nativeRectLeft);
  at(1500, 'fill', 'blue', polyfillRectMiddle, polyfillRectMiddle);
  at(2500, 'fill', 'blue', polyfillRectLeft, nativeRectLeft);
  at(2500, 'fill', 'blue', polyfillRectMiddle, polyfillRectMiddle);
}, 'animate width');
