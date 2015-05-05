'use strict';

timing_test(function() {
  var polyfillPath = document.getElementById('polyfillPath');
  var nativePath = document.getElementById('nativePath');

  at(0, 'd', 'M 100 200 Q 120 180 160 140 T 300 400',
      polyfillPath, nativePath);
  at(3000, 'd', 'M 100 200 Q 120 180 160 140 T 300 400',
      polyfillPath, nativePath);
  at(4000, 'd', 'M 110 210 Q 130 190 185 150 T 310 410',
      polyfillPath, nativePath);
  at(5000, 'd', 'M 120 220 Q 140 200 210 160 T 320 420',
      polyfillPath, nativePath);
  at(6000, 'd', 'M 130 230 Q 150 210 235 170 T 330 430',
      polyfillPath, nativePath);
  at(7000, 'd', 'M 100 200 Q 120 180 160 140 T 300 400',
      polyfillPath, nativePath);
}, 'quadratic bezier path attribute');
