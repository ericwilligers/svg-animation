'use strict';

timing_test(function() {
  var polyfillCircle = document.getElementById('polyfillCircle');
  var nativeCircle = document.getElementById('nativeCircle');

  at(0, 'cx', 300, polyfillCircle, nativeCircle);
  at(1000, 'cy', 275, polyfillCircle, nativeCircle);
  at(2000, 'r', 150, polyfillCircle, nativeCircle);
  at(2000, 'fill-opacity', [0.75, undefined], polyfillCircle, nativeCircle);
  at(3000, 'cx', 225, polyfillCircle, nativeCircle);
  at(3750, 'cy', 206.25, polyfillCircle, nativeCircle);
  at(3750, 'cx', 212.5, polyfillCircle, nativeCircle);
  at(4000, 'cy', 200, polyfillCircle, nativeCircle);
  at(5000, 'r', 100, polyfillCircle, nativeCircle);

}, 'animate circle');
