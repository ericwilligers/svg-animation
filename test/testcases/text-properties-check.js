'use strict';

timing_test(function() {
  var polyfillText = document.getElementById('polyfillText');
  var nativeText = document.getElementById('nativeText');

  at(1000, 'x', ['5, 30, 55', '5 30 55'], polyfillText, nativeText);
  at(1000, 'dy', ['15, 20, 25', '15 20 25'], polyfillText, nativeText);
  at(1000, 'rotate', ['0, -60, 60', '0 -60 60'], polyfillText, nativeText);
}, 'text properties');
