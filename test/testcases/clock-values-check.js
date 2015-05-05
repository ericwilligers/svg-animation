'use strict';

timing_test(function() {
  var firstPolyfillRect = document.getElementById('firstPolyfillRect');
  var secondPolyfillRect = document.getElementById('secondPolyfillRect');
  var thirdPolyfillRect = document.getElementById('thirdPolyfillRect');
  var fourthPolyfillRect = document.getElementById('fourthPolyfillRect');
  var fifthPolyfillRect = document.getElementById('fifthPolyfillRect');
  var sixthPolyfillRect = document.getElementById('sixthPolyfillRect');
  var seventhPolyfillRect = document.getElementById('seventhPolyfillRect');
  var eighthPolyfillRect = document.getElementById('eighthPolyfillRect');
  var ninthPolyfillRect = document.getElementById('ninthPolyfillRect');
  var tenthPolyfillRect = document.getElementById('tenthPolyfillRect');

  var firstNativeRect = document.getElementById('firstNativeRect');
  var secondNativeRect = document.getElementById('secondNativeRect');
  var thirdNativeRect = document.getElementById('thirdNativeRect');
  var fourthNativeRect = document.getElementById('fourthNativeRect');
  var fifthNativeRect = document.getElementById('fifthNativeRect');
  var sixthNativeRect = document.getElementById('sixthNativeRect');
  var seventhNativeRect = document.getElementById('seventhNativeRect');
  var eighthNativeRect = document.getElementById('eighthNativeRect');
  var ninthNativeRect = document.getElementById('ninthNativeRect');
  var tenthNativeRect = document.getElementById('tenthNativeRect');

  at(1000, 'height', 300, firstPolyfillRect, firstNativeRect);
  at(1000, 'height', 300, secondPolyfillRect, secondNativeRect);
  at(1000, 'height', 300, thirdPolyfillRect, thirdNativeRect);
  at(1000, 'height', 300, fourthPolyfillRect, fourthNativeRect);
  at(1000, 'height', 300, fifthPolyfillRect, fifthNativeRect);
  at(1000, 'height', 300, sixthPolyfillRect, sixthNativeRect);
  at(1000, 'height', 300, seventhPolyfillRect, seventhNativeRect);
  at(1000, 'height', 300, eighthPolyfillRect, eighthNativeRect);
  at(1000, 'height', 100, ninthPolyfillRect, ninthNativeRect);
  at(1000, 'height', 100, tenthPolyfillRect, tenthNativeRect);
}, 'clock values for duration');
