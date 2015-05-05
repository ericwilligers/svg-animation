'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(0 * 2000, 'width', 100, polyfillRect, nativeRect);
  at(0.2 * 2000, 'width', 50, polyfillRect, nativeRect);
  at(0.4 * 2000, 'width', 0, polyfillRect, nativeRect);
  at(0.45 * 2000, 'width', 25, polyfillRect, nativeRect);
  at(0.5 * 2000, 'width', 50, polyfillRect, nativeRect);
  at(0.55 * 2000, 'width', 25, polyfillRect, nativeRect);
  at(0.6 * 2000, 'width', 0, polyfillRect, nativeRect);
  at(0.8 * 2000, 'width', 50, polyfillRect, nativeRect);
  at(1 * 2000, 'width', 100, polyfillRect, nativeRect);

}, 'keyTimes width');
