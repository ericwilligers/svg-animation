'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  // FIXME: enable width tests when Polyfill implements support for begin time
  // (width animation should begin after 2s, not immediately)
  at(0, 'x', 100, polyfillRect, nativeRect);
  at(500, 'height', 125, polyfillRect, nativeRect);
  // at(1000, 'width', 100, polyfillRect, nativeRect);
  at(1500, 'x', 175, polyfillRect, nativeRect);
  at(2000, 'height', 200, polyfillRect, nativeRect);
  // at(2500, 'width', 125, polyfillRect, nativeRect);
  at(3000, 'x', 200, polyfillRect, nativeRect);
  at(3500, 'height', 200, polyfillRect, nativeRect);
  at(4000, 'width', 200, polyfillRect, nativeRect);

}, 'freeze animated values');
