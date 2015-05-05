'use strict';

timing_test(function() {
  var polyfillCircle = document.getElementById('polyfillCircle');
  var nativeCircle = document.getElementById('nativeCircle');

  at(10000, 'r', 0, polyfillCircle, nativeCircle);
  at(11000, 'r', [244.53997024186697, 244.584], polyfillCircle, nativeCircle);
  at(12000, 'r', [244.53997024186697, 244.584], polyfillCircle, nativeCircle);
  at(13000, 'r', 0, polyfillCircle, nativeCircle);
  at(13750, 'r', [235.33028545608303, 235.337], polyfillCircle, nativeCircle);
  at(14500, 'r', 250, polyfillCircle, nativeCircle);
  at(15250, 'r', [235.33028545608303, 235.337], polyfillCircle, nativeCircle);
  at(16000, 'r', 0, polyfillCircle, nativeCircle);
  at(16600, 'r', [226.0258529727086, 226.041], polyfillCircle, nativeCircle);
  at(17200, 'r', [248.25649636748614, 248.264], polyfillCircle, nativeCircle);
  at(17800, 'r', [248.25649636748614, 248.264], polyfillCircle, nativeCircle);
  at(18400, 'r', [226.0258529727086, 226.041], polyfillCircle, nativeCircle);
  at(19000, 'r', 0, polyfillCircle, nativeCircle);
}, 'timing keySplines');
