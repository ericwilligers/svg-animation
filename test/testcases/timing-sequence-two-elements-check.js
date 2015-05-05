'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(0, 'width', 100, polyfillRect, nativeRect);
  at(700, 'width', 170, polyfillRect, nativeRect);
  at(1400, 'height', 140, polyfillRect, nativeRect);

}, 'timing-sequence-two-elements');
