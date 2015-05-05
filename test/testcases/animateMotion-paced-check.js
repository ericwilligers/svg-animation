'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  var polyfillRectRight = document.getElementById('polyfillRectRight');
  var nativeRectRight = document.getElementById('nativeRectRight');

  at(0, 'transform',
      ['translate(0, 0) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(0, 'transform',
      ['translate(0, 0) rotate(0)', undefined],
      polyfillRectRight, nativeRectRight);

  at(15000, 'transform',
      ['translate(15, 0) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(15000, 'transform',
      ['translate(15, 0) rotate(0)', undefined],
      polyfillRectRight, nativeRectRight);

  at(30000, 'transform',
      ['translate(30, 0) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(30000, 'transform',
      ['translate(30, 0) rotate(0)', undefined],
      polyfillRectRight, nativeRectRight);

  at(50000, 'transform',
      ['translate(30, 20) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(50000, 'transform',
      ['translate(30, 20) rotate(0)', undefined],
      polyfillRectRight, nativeRectRight);

  at(70000, 'transform',
      ['translate(30, 40) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(70000, 'transform',
      ['translate(30, 40) rotate(0)', undefined],
      polyfillRectRight, nativeRectRight);

  at(103000, 'transform',
      ['translate(63, 40) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(103000, 'transform',
      ['translate(63, 40) rotate(0)', undefined],
      polyfillRectRight, nativeRectRight);

  at(136000, 'transform',
      ['translate(96, 40) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(136000, 'transform',
      ['translate(96, 40) rotate(0)', undefined],
      polyfillRectRight, nativeRectRight);

}, 'animateMotion paced');
