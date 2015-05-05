'use strict';

timing_test(function() {
  var polyfillCircle = document.getElementById('polyfillCircle');
  var nativeCircle = document.getElementById('nativeCircle');

  at(0, 'cx', 200, polyfillCircle, nativeCircle);
  at(500, 'cy', 220, polyfillCircle, nativeCircle);
  at(1000, 'r', 10, polyfillCircle, nativeCircle);
  at(2000, 'cx', 220, polyfillCircle, nativeCircle);
  at(2500, 'cy', 260, polyfillCircle, nativeCircle);
  at(3000, 'r', 110, polyfillCircle, nativeCircle);
  at(4000, 'cx', 240, polyfillCircle, nativeCircle);
  at(4500, 'cy', 300, polyfillCircle, nativeCircle);
  // nativeCircle's r 10 is incorrect - should freeze at 120
  at(5000, 'r', [120, 10], polyfillCircle, nativeCircle);
  at(6000, 'cx', 260, polyfillCircle, nativeCircle);
  at(6500, 'cy', 340, polyfillCircle, nativeCircle);
  at(7000, 'r', 110, polyfillCircle, nativeCircle);
  at(8000, 'cx', 280, polyfillCircle, nativeCircle);
  at(8500, 'cy', 220, polyfillCircle, nativeCircle);
  at(9000, 'r', 110, polyfillCircle, nativeCircle);
  at(10000, 'cx', 300, polyfillCircle, nativeCircle);
  at(10500, 'cy', 260, polyfillCircle, nativeCircle);
  at(11000, 'r', 120, polyfillCircle, nativeCircle);
  at(12000, 'cx', 100, polyfillCircle, nativeCircle); // initial value
  at(12500, 'cy', 300, polyfillCircle, nativeCircle);
  at(13000, 'r', 120, polyfillCircle, nativeCircle); // frozen value
  at(14000, 'cx', 100, polyfillCircle, nativeCircle); // initial value
  at(14500, 'cy', 310, polyfillCircle, nativeCircle); // frozen value
  at(15000, 'r', 120, polyfillCircle, nativeCircle); // frozen value
}, 'begin/end list');
