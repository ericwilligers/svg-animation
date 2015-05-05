'use strict';

timing_test(function() {
  var polyfillRect0 = document.getElementById('polyfillRect0');
  var nativeRect0 = document.getElementById('nativeRect0');

  at(1000, 'height', 100, polyfillRect0, nativeRect0);
  at(1500, 'width', 60, polyfillRect0, nativeRect0);
  at(2500, 'width', 20, polyfillRect0, nativeRect0);
  at(3500, 'width', 60, polyfillRect0, nativeRect0);
  at(4500, 'width', 20, polyfillRect0, nativeRect0);
  at(5500, 'width', 60, polyfillRect0, nativeRect0);
  at(6500, 'width', 20, polyfillRect0, nativeRect0);
  at(7500, 'width', 60, polyfillRect0, nativeRect0);
  at(8500, 'width', 100, polyfillRect0, nativeRect0);
}, 'use may be used recursively');
