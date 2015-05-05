'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  // nativeAnimateMotion does not expose the updating transform
  at(0, 'transform',
      'translate(0, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(2500, 'transform',
      'translate(5, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(5000, 'transform',
      'translate(10, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(6500, 'transform',
      'translate(15, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(8000, 'transform',
      'translate(30, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(8500, 'transform',
      'translate(40, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(9000, 'transform',
      'translate(50, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(9500, 'transform',
      'translate(75, 0) rotate(0)',
      polyfillRect, polyfillRect);

  at(10000, 'transform',
      'translate(0, 0) rotate(0)',
      polyfillRect, polyfillRect);
}, 'animateMotion keyPoints');
