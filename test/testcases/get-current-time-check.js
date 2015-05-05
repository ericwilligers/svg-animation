'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');
  var polyfillAnimation = document.getElementById('polyfillAnimation');
  var nativeAnimation = document.getElementById('nativeAnimation');

  at(0, 'currentTime', 0, polyfillAnimation, nativeAnimation);
  at(1800, 'currentTime', 1.8, polyfillAnimation, nativeAnimation);
  at(3800, 'currentTime', 3.8, polyfillAnimation, nativeAnimation);
}, 'getCurrentTime');
