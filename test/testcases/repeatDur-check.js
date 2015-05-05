'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(0, 'width', 200, polyfillRect, nativeRect);
  at(3000, 'width', 50, polyfillRect, nativeRect);
  at(6000, 'width', 100, polyfillRect, nativeRect);
  at(9000, 'width', 150, polyfillRect, nativeRect);
  at(14000, 'width', 300, polyfillRect, nativeRect);
}, 'repeatDur');
