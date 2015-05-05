'use strict';

timing_test(function() {
  var polyfillTextPath = document.getElementById('polyfillTextPath');
  var nativeTextPath = document.getElementById('nativeTextPath');

  at(0, 'startOffset', 40, polyfillTextPath, nativeTextPath);
}, 'set textPath attributes');
