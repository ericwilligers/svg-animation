'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  // FIXME: understand why native animation is always reporting fill as green
  at(0, 'fill', ['rgba(0, 0, 0, 1)', 'green'], polyfillRect, nativeRect);
  at(500, 'fill', ['rgba(64, 0, 0, 1)', 'green'], polyfillRect, nativeRect);
  at(1000, 'fill', ['rgba(128, 0, 0, 1)', 'green'], polyfillRect, nativeRect);
  at(1500, 'fill', ['rgba(191, 0, 0, 1)', 'green'], polyfillRect, nativeRect);
  at(2500, 'fill', 'green', polyfillRect, nativeRect);
}, 'animate fill');
