'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');
  var polyfillAnimation = document.getElementById('polyfillAnimation');
  var nativeAnimation = document.getElementById('nativeAnimation');

  at(1400, 'simpleDuration', 3, polyfillAnimation, nativeAnimation);
  at(3400, 'simpleDuration', 3, polyfillAnimation, nativeAnimation);
}, 'getSimpleDuration');

// FIXME: Add test where dur has changed.
