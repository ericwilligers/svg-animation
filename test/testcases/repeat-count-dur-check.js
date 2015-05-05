'use strict';

timing_test(function() {
  var polyfillFirstRect = document.getElementById('polyfillFirstRect');
  var nativeFirstRect = document.getElementById('nativeFirstRect');
  var polyfillSecondRect = document.getElementById('polyfillSecondRect');
  var nativeSecondRect = document.getElementById('nativeSecondRect');

  at(7500, 'width', 175, polyfillFirstRect, nativeFirstRect);
  at(7500, 'width', 175, polyfillSecondRect, nativeSecondRect);
  at(8000, 'width', 300, polyfillFirstRect, nativeFirstRect);
  at(8000, 'width', 300, polyfillSecondRect, nativeSecondRect);
}, 'minimum from repeatCount and repeatDur');
