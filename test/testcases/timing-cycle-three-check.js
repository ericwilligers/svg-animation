'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  // The cycle propagates forwards
  at(0, 'width', 100, polyfillRect, nativeRect);
  at(1000, 'height', 300, polyfillRect, nativeRect);
  at(2000, 'width', 160, polyfillRect, nativeRect);
  at(3000, 'height', 130, polyfillRect, nativeRect);
  at(3500, 'width', 300, polyfillRect, nativeRect);
  at(4000, 'width', 100, polyfillRect, nativeRect);
  at(5000, 'height', 300, polyfillRect, nativeRect);
  at(6000, 'width', 160, polyfillRect, nativeRect);
  at(7000, 'height', 130, polyfillRect, nativeRect);
  at(7500, 'width', 300, polyfillRect, nativeRect);
  at(8000, 'width', 100, polyfillRect, nativeRect);
}, 'timing-cycle-three');
