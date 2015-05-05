'use strict';

timing_test(function() {
  var firstPolyfillRect = document.getElementById('firstPolyfillRect');
  var firstNativeRect = document.getElementById('firstNativeRect');
  var secondPolyfillRect = document.getElementById('secondPolyfillRect');
  var secondNativeRect = document.getElementById('secondNativeRect');
  var thirdPolyfillRect = document.getElementById('thirdPolyfillRect');
  var thirdNativeRect = document.getElementById('thirdNativeRect');
  var fourthPolyfillRect = document.getElementById('fourthPolyfillRect');
  var fourthNativeRect = document.getElementById('fourthNativeRect');
  var fifthPolyfillRect = document.getElementById('fifthPolyfillRect');
  var fifthNativeRect = document.getElementById('fifthNativeRect');

  at(0, 'width', 100, firstPolyfillRect, firstNativeRect);
  at(1000, 'width', 200, firstPolyfillRect, firstNativeRect);
  at(2000, 'width', 100, firstPolyfillRect, firstNativeRect);
  at(3000, 'width', 200, secondPolyfillRect, secondNativeRect);
  at(4000, 'width', 100, secondPolyfillRect, secondNativeRect);
  at(5000, 'width', 200, thirdPolyfillRect, thirdNativeRect);
  at(6000, 'width', 100, thirdPolyfillRect, thirdNativeRect);
  at(7000, 'width', 200, fourthPolyfillRect, fourthNativeRect);
  at(8000, 'width', 100, fourthPolyfillRect, fourthNativeRect);
  at(9000, 'width', 200, fifthPolyfillRect, fifthNativeRect);
  at(10000, 'width', 100, fifthPolyfillRect, fifthNativeRect);
  at(11000, 'width', 200, firstPolyfillRect, firstNativeRect);
  at(12000, 'width', 100, firstPolyfillRect, firstNativeRect);
  at(13000, 'width', 200, secondPolyfillRect, secondNativeRect);
  at(14000, 'width', 100, secondPolyfillRect, secondNativeRect);
  at(15000, 'width', 200, thirdPolyfillRect, thirdNativeRect);
  at(16000, 'width', 100, thirdPolyfillRect, thirdNativeRect);
  at(17000, 'width', 200, fourthPolyfillRect, fourthNativeRect);
  at(18000, 'width', 100, fourthPolyfillRect, fourthNativeRect);
  at(19000, 'width', 200, fifthPolyfillRect, fifthNativeRect);
  at(20000, 'width', 100, fifthPolyfillRect, fifthNativeRect);
}, 'sync-base dependencies');
