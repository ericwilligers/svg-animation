'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  at(1000, 'transform', ['translate(120, 80) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(2000, 'transform', ['translate(210, 70) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(3000, 'transform', ['translate(30, 90) rotate(0)', undefined],
      polyfillRect, nativeRect);
  at(4000, 'transform', ['translate(120, 80) rotate(0)', undefined],
      polyfillRect, nativeRect);

}, 'orphan mpath does not prevent unrelated animation');
