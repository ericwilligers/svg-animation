'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(0, 'width', 200, polyfillRect, nativeRect);
  at(1000, 'rx', 20, polyfillRect, nativeRect);
  at(2000, 'ry', 10, polyfillRect, nativeRect);
  at(10000, 'width', 200, polyfillRect, nativeRect);
}, 'set width');
