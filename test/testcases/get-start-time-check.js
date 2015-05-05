'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');
  var polyfillAnimation = document.getElementById('polyfillAnimation');
  var nativeAnimation = document.getElementById('nativeAnimation');

  at(1600, 'startTime', 0, polyfillAnimation, nativeAnimation);
}, 'getStartTime');

// FIXME: add test where the animation has not started yet.

// FIXME: add test where the animation has completed.
