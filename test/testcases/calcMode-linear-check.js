'use strict';

timing_test(function() {
  var polyfillFlood = document.getElementById('polyfillFlood');
  var nativeFlood = document.getElementById('nativeFlood');
  var polyfillDiffuse = document.getElementById('polyfillDiffuse');
  var nativeDiffuse = document.getElementById('nativeDiffuse');

  at(11500, 'flood-color', ['rgba(40, 30, 0, 1)', undefined],
     polyfillFlood, nativeFlood);
  at(11500, 'flood-opacity', [0.55, undefined],
     polyfillFlood, nativeFlood);
  at(11500, 'lighting-color', ['rgba(15, 20, 60, 1)', undefined],
     polyfillDiffuse, nativeDiffuse);

  at(23000, 'flood-color', ['rgba(0, 0, 0, 1)', undefined],
     polyfillFlood, nativeFlood);
  at(23000, 'flood-opacity', [0.5, undefined],
     polyfillFlood, nativeFlood);
  at(23000, 'lighting-color', ['rgba(0, 0, 0, 1)', undefined],
     polyfillDiffuse, nativeDiffuse);
}, 'calcMode linear');
