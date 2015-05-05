'use strict';

timing_test(function() {
  var polyfillPath = document.getElementById('polyfillPath');
  var nativePath = document.getElementById('nativePath');

  at(0, 'd', 'm 100 200 C 100 200 250 100 250 200 S 400 300 400 200',
      polyfillPath, nativePath);
  at(3000, 'd', 'm 100 200 C 100 200 250 100 250 200 S 400 300 400 200',
      polyfillPath, nativePath);
  at(4000, 'd', 'm 125 250 C 125 250 275 150 275 250 S 425 350 425 250',
      polyfillPath, nativePath);
  at(5000, 'd', 'm 150 300 C 150 300 300 200 300 300 S 450 400 450 300',
      polyfillPath, nativePath);
  at(6000, 'd', 'm 175 350 C 175 350 325 250 325 350 S 475 450 475 350',
      polyfillPath, nativePath);
  at(7000, 'd', 'm 100 200 C 100 200 250 100 250 200 S 400 300 400 200',
      polyfillPath, nativePath);
}, 'cubic bezier path attribute');
