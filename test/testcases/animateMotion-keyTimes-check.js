'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var polyfillRect2 = document.getElementById('polyfillRect2');
  var nativeRect = document.getElementById('nativeRect');
  var nativeRect2 = document.getElementById('nativeRect2');

  // nativeAnimateMotion does not expose the updating transform
  at(0, 'transform',
      'translate(0, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(3000, 'transform',
      'translate(15, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(5000, 'transform',
      'translate(30, 40) rotate(0)',
      polyfillRect2, polyfillRect2);

  at(6000, 'transform',
      'translate(30, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(7500, 'transform',
      'translate(30, 20) rotate(0)',
      polyfillRect, polyfillRect);

  at(9000, 'transform',
      'translate(30, 40) rotate(0)',
      polyfillRect, polyfillRect);

  at(10000, 'transform',
      'translate(60, 80) rotate(0)',
      polyfillRect2, polyfillRect2);

  at(10500, 'transform',
      'translate(63, 40) rotate(0)',
      polyfillRect, polyfillRect);

  at(12000, 'transform',
      'translate(96, 40) rotate(0)',
      polyfillRect, polyfillRect);

}, 'animateMotion keyTimes');
