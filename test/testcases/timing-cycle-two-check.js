'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  // The width and height animations never begin.
  // The y animation begins and never ends.
  at(0, 'width', 100, polyfillRect, nativeRect);
  at(100, 'height', 100, polyfillRect, nativeRect);
  at(200, 'y', 200, polyfillRect, nativeRect);
  at(300, 'width', 100, polyfillRect, nativeRect);

}, 'timing-cycle-two');
