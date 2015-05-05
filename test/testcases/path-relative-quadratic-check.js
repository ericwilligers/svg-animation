'use strict';

timing_test(function() {
  var polyfillPath = document.getElementById('polyfillPath');
  var nativePath = document.getElementById('nativePath');

  at(0, 'd', 'M 100 200 q 120 -180 160 140 t 300 400',
      polyfillPath, nativePath);
  at(3000, 'd', 'M 100 200 q 120 -180 160 140 t 300 400',
      polyfillPath, nativePath);
  at(4000, 'd', 'M 110 210 q 130 -190 185 150 t 260 410',
      polyfillPath, nativePath);
  at(5000, 'd', 'M 120 220 q 140 -200 210 160 t 220 420',
      polyfillPath, nativePath);
  at(6000, 'd', 'M 130 230 q 150 -210 235 170 t 180 430',
      polyfillPath, nativePath);
  at(7000, 'd', 'M 100 200 q 120 -180 160 140 t 300 400',
      polyfillPath, nativePath);
}, 'relative quadratic bezier path attribute');
