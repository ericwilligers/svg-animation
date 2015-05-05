'use strict';

timing_test(function() {
  var polyfillPath = document.getElementById('polyfillPath');
  var nativePath = document.getElementById('nativePath');

  at(0, 'd', 'm 50 0 L 50 50 L 80 90 A 50 50 0 1 0 50 0',
      polyfillPath, nativePath);
  at(1000, 'd', 'm 50 0 L 50 50 L 80 90 A 50 50 0 1 0 50 0',
      polyfillPath, nativePath);
  at(2000, 'd', 'm 50 0 L 50 50 L 82.5 87.5 A 50 50 15 1 0 42.5 2.5',
      polyfillPath, nativePath);
  at(3000, 'd', 'm 50 0 L 50 50 L 85 85 A 50 50 30 0 1 35 5',
      polyfillPath, nativePath);
  at(4000, 'd', 'm 50 0 L 50 50 L 87.5 82.5 A 50 50 45 0 1 27.5 7.5',
      polyfillPath, nativePath);
  at(5000, 'd', 'm 50 0 L 50 50 L 80 90 A 50 50 0 1 0 50 0',
      polyfillPath, nativePath);
}, 'arc path attribute');
