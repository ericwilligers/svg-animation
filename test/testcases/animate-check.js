'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(0, 'width', 200, polyfillRect, nativeRect);
  at(1500, 'width', 50, polyfillRect, nativeRect);
  // Chrome's native SMIL doesn't animate fill-opacity
  at(2000, 'fill-opacity', [0.25, undefined], polyfillRect, nativeRect);
  at(2500, 'width', 150, polyfillRect, nativeRect);
  at(2500, 'fill-opacity', [0.625, undefined], polyfillRect, nativeRect);
  at(3000, 'fill-opacity', [1, undefined], polyfillRect, nativeRect);
}, 'animate width and opacity');
