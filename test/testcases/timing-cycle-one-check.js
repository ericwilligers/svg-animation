'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  // The animations never begin
  at(0, 'width', 100, polyfillRect, nativeRect);
  at(100, 'height', 100, polyfillRect, nativeRect);
  at(200, 'width', 100, polyfillRect, nativeRect);
  at(300, 'height', 100, polyfillRect, nativeRect);

}, 'timing-cycle-one');
