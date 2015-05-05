'use strict';

timing_test(function() {
  var polyfillPath = document.getElementById('polyfillPath');
  var nativePath = document.getElementById('nativePath');

  at(0, 'd', 'M 10 20 H 110 V 120 L 90 40 Z', polyfillPath, nativePath);
  at(1000, 'd', 'M 30 40 H 130 V 140 L 110 60 Z', polyfillPath, nativePath);
  at(2000, 'd', 'M 50 60 H 150 V 160 L 130 80 Z', polyfillPath, nativePath);
  at(3000, 'd', 'M 70 80 H 170 V 180 L 150 100 Z', polyfillPath, nativePath);
  at(4000, 'd', 'M 90 100 H 190 V 200 L 170 120 Z', polyfillPath, nativePath);
}, 'line path attribute');
