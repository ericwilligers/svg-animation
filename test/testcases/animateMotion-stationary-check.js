'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(1000, 'width', 100, polyfillRect, nativeRect);

  at(1000, 'transform',
      ['translate(0, 0) rotate(0)', undefined],
      polyfillRect, nativeRect);

  // crbug.com/321022 - nativeRect is incorrectly at (0, 0) from 3000 until 5000
  at(4000, 'transform',
      ['translate(100, 100) rotate(0)', undefined],
      polyfillRect, nativeRect);

  at(6000, 'transform',
      ['translate(50, 50) rotate(0)', undefined],
      polyfillRect, nativeRect);

  at(8000, 'transform',
      ['translate(0, 0) rotate(0)', undefined],
      polyfillRect, nativeRect);

}, 'animate stationary instead of reverting to initial position');
