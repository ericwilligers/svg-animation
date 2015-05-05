'use strict';

timing_test(function() {
  var polyfillPath = document.getElementById('polyfillPath');
  var nativePath = document.getElementById('nativePath');

  at(0, 'd', 'M 100 200 c 100 200 250 100 250 200 s 400 300 400 200',
      polyfillPath, nativePath);
  at(3000, 'd', 'M 100 200 c 100 200 250 100 250 200 s 400 300 400 200',
      polyfillPath, nativePath);
  at(4000, 'd', 'M 125 250 c 125 250 275 150 275 250 s 425 350 425 250',
      polyfillPath, nativePath);
  at(5000, 'd', 'M 150 300 c 150 300 300 200 300 300 s 450 400 450 300',
      polyfillPath, nativePath);
  at(6000, 'd', 'M 175 350 c 175 350 325 250 325 350 s 475 450 475 350',
      polyfillPath, nativePath);
  at(7000, 'd', 'M 100 200 c 100 200 250 100 250 200 s 400 300 400 200',
      polyfillPath, nativePath);
}, 'relative cubic bezier path attribute');
