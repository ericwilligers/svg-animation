'use strict';

timing_test(function() {
  var firstPolyfillRect = document.getElementById('firstPolyfillRect');
  var firstNativeRect = document.getElementById('firstNativeRect');
  var secondPolyfillRect = document.getElementById('secondPolyfillRect');
  var secondNativeRect = document.getElementById('secondNativeRect');
  var thirdPolyfillRect = document.getElementById('thirdPolyfillRect');
  var thirdNativeRect = document.getElementById('thirdNativeRect');

  at(0, 'width', 100, firstPolyfillRect, firstNativeRect);
  at(1500, 'width', 100, firstPolyfillRect, firstNativeRect);
  at(2500, 'width', 100, secondPolyfillRect, secondNativeRect);
  at(4000, 'width', 150, thirdPolyfillRect, thirdNativeRect);
  at(5000, 'width', 200, thirdPolyfillRect, thirdNativeRect);
  at(6000, 'width', 250, thirdPolyfillRect, thirdNativeRect);
}, 'multiply by zero');
