'use strict';

timing_test(function() {
  var polyfillPath = document.getElementById('polyfillPath');
  var nativePath = document.getElementById('nativePath');

  at(0, 'd', 'm 50 0 L 50 50 L 80 90 a 40 30 0 1 0 -30 -40',
      polyfillPath, nativePath);
  at(1000, 'd', 'm 50 0 L 50 50 L 80 90 a 40 30 0 1 0 -30 -40',
      polyfillPath, nativePath);
  at(2000, 'd', 'm 50 0 L 50 50 L 82.5 87.5 a 40 30 15 1 0 -37.5 -50',
      polyfillPath, nativePath);
  at(3000, 'd', 'm 50 0 L 50 50 L 85 85 a 40 30 30 0 1 -45 -60',
      polyfillPath, nativePath);
  at(4000, 'd', 'm 50 0 L 50 50 L 87.5 82.5 a 40 30 45 0 1 -52.5 -70',
      polyfillPath, nativePath);
  at(5000, 'd', 'm 50 0 L 50 50 L 80 90 a 40 30 0 1 0 -30 -40',
      polyfillPath, nativePath);
}, 'relative arc path attribute');
