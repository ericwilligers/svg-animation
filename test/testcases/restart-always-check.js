'use strict';

timing_test(function() {
  var polyfillRectLeft = document.getElementById('polyfillRectLeft');
  var polyfillRectCentre = document.getElementById('polyfillRectCentre');
  var polyfillRectRight = document.getElementById('polyfillRectRight');
  var nativeRectLeft = document.getElementById('nativeRectLeft');
  var nativeRectCentre = document.getElementById('nativeRectCentre');
  var nativeRectRight = document.getElementById('nativeRectRight');

  at(1000, 'width', 80, polyfillRectLeft, nativeRectLeft);
  at(1500, 'width', 60, polyfillRectLeft, nativeRectLeft);
  at(1500, 'width', 60, polyfillRectCentre, nativeRectCentre);
  at(2500, 'width', 60, polyfillRectLeft, nativeRectLeft);
  at(2500, 'width', 60, polyfillRectCentre, nativeRectCentre);
  at(3500, 'width', 20, polyfillRectLeft, nativeRectLeft);
  at(3500, 'width', 20, polyfillRectCentre, nativeRectCentre);
  at(4500, 'width', 60, polyfillRectRight, nativeRectRight);
  at(5500, 'width', 60, polyfillRectLeft, nativeRectLeft);
  at(5500, 'width', 60, polyfillRectCentre, nativeRectCentre);
  at(5500, 'width', 20, polyfillRectRight, nativeRectRight);
  at(6000, 'width', 80, polyfillRectRight, nativeRectRight);
  at(6500, 'width', 60, polyfillRectCentre, nativeRectCentre);
  at(7500, 'width', 20, polyfillRectLeft, nativeRectLeft);
  at(7500, 'width', 20, polyfillRectCentre, nativeRectCentre);
  at(8500, 'width', 60, polyfillRectRight, nativeRectRight);
  at(9500, 'width', 20, polyfillRectRight, nativeRectRight);

}, 'restart always');
