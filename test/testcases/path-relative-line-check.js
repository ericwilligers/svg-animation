'use strict';

timing_test(function() {
  var polyfillPath = document.getElementById('polyfillPath');
  var nativePath = document.getElementById('nativePath');

  at(0, 'd', [
      'm 10 20 h 110 v 120 l 90 40 z',
      'm 10 20 h 110 v 120 l 90 40 Z'], polyfillPath, nativePath);
  at(1000, 'd', 'm 30 40 h 130 v 140 l 110 60 Z', polyfillPath, nativePath);
  at(2000, 'd', 'm 50 60 h 150 v 160 l 130 80 Z', polyfillPath, nativePath);
  at(3000, 'd', 'm 70 80 h 170 v 180 l 150 100 Z', polyfillPath, nativePath);
  at(4000, 'd', 'm 90 100 h 190 v 200 l 170 120 Z', polyfillPath, nativePath);
}, 'relative line path attribute');
