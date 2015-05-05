'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(0, 'transform',
     ['scale(1)', 'scale(1 1)'], polyfillRect, nativeRect);
  at(500, 'transform',
     ['scale(1.5)', 'scale(1.5 1.5)'], polyfillRect, nativeRect);
  at(1000, 'transform',
     ['scale(2)', 'scale(2 2)'], polyfillRect, nativeRect);
  at(1500, 'transform',
     ['scale(2.5)', 'scale(2.5 2.5)'], polyfillRect, nativeRect);

  at(2500, 'transform',
     ['scale(2.75, 3.25)', 'scale(2.75 3.25)'], polyfillRect, nativeRect);
  at(3000, 'transform',
     ['scale(2.5, 3.5)', 'scale(2.5 3.5)'], polyfillRect, nativeRect);
  at(3500, 'transform',
     ['scale(2.25, 3.75)', 'scale(2.25 3.75)'], polyfillRect, nativeRect);

  at(4000, 'transform',
    ['translate(100, 0)', 'translate(100 0)'], polyfillRect, nativeRect);
  at(4500, 'transform',
     ['translate(150, 0)', 'translate(150 0)'], polyfillRect, nativeRect);
  at(5000, 'transform',
     ['translate(200, 0)', 'translate(200 0)'], polyfillRect, nativeRect);
  at(5500, 'transform',
     ['translate(250, 0)', 'translate(250 0)'], polyfillRect, nativeRect);

  at(6500, 'transform',
     ['translate(275, 325)', 'translate(275 325)'], polyfillRect, nativeRect);
  at(7000, 'transform',
     ['translate(250, 350)', 'translate(250 350)'], polyfillRect, nativeRect);
  at(7500, 'transform',
     ['translate(225, 375)', 'translate(225 375)'], polyfillRect, nativeRect);

  at(8000, 'transform',
     'rotate(0)', polyfillRect, nativeRect);
  at(8500, 'transform',
     'rotate(10)', polyfillRect, nativeRect);
  at(9000, 'transform',
     'rotate(20)', polyfillRect, nativeRect);
  at(9500, 'transform',
     'rotate(30)', polyfillRect, nativeRect);

  // FIXME: polyfill should output with no commas: <rotate-angle> <cx> <cy>
  at(10500, 'transform',
     ['rotate(30,100,50)', 'rotate(30 100 50)'], polyfillRect, nativeRect);
  at(11000, 'transform',
     ['rotate(20,200,100)', 'rotate(20 200 100)'], polyfillRect, nativeRect);
  at(11500, 'transform',
     ['rotate(10,300,150)', 'rotate(10 300 150)'], polyfillRect, nativeRect);

  at(12000, 'transform',
    'skewX(0)', polyfillRect, nativeRect);
  at(12500, 'transform',
     'skewX(10)', polyfillRect, nativeRect);
  at(13000, 'transform',
     'skewX(20)', polyfillRect, nativeRect);
  at(13500, 'transform',
     'skewX(30)', polyfillRect, nativeRect);

  at(14500, 'transform',
     'skewY(-30)', polyfillRect, nativeRect);
  at(15000, 'transform',
     'skewY(-20)', polyfillRect, nativeRect);
  at(15500, 'transform',
     'skewY(-10)', polyfillRect, nativeRect);

  at(16500, 'transform', '', polyfillRect, nativeRect);

}, 'animateTransform');
