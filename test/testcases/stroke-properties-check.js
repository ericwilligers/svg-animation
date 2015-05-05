'use strict';

timing_test(function() {
  var polyfillLine = document.getElementById('polyfillLine');
  var nativeLine = document.getElementById('nativeLine');

  at(0, 'color', ['rgba(255, 0, 0, 1)', undefined], polyfillLine, nativeLine);
  at(0, 'stroke', ['currentColor', undefined], polyfillLine, nativeLine);
  at(0, 'stroke-width', [10, undefined], polyfillLine, nativeLine);
  at(0, 'stroke-opacity', [1, undefined], polyfillLine, nativeLine);
  at(0, 'stroke-dashoffset', [0, undefined], polyfillLine, nativeLine);
  at(0, 'stroke-dasharray', ['10, 15, 20, 25, 30, 35', undefined],
     polyfillLine, nativeLine);
  at(0, 'points', ['30, 30, 730, 30, 730, 130, 30, 130',
                   '30 30 730 30 730 130 30 130'],
     polyfillLine, nativeLine);

  at(500, 'stroke', ['none', undefined],
     polyfillLine, nativeLine);

  at(1000, 'stroke', ['rgba(0, 128, 0, 1)', undefined],
     polyfillLine, nativeLine);
  at(1000, 'stroke-width', [15, undefined], polyfillLine, nativeLine);
  at(1000, 'stroke-opacity', [0.6, undefined], polyfillLine, nativeLine);
  at(1000, 'stroke-dashoffset', [50, undefined], polyfillLine, nativeLine);
  at(1000, 'stroke-dasharray', ['10, 15, 20, 30, 20, 40', undefined],
     polyfillLine, nativeLine);
  at(1000, 'points', ['30, 80, 730, 80, 730, 180, 30, 180',
                      '30 80 730 80 730 180 30 180'],
     polyfillLine, nativeLine);

  at(1500, 'stroke', ['rgba(0, 0, 255, 1)', undefined],
     polyfillLine, nativeLine);

  at(2000, 'color', ['rgba(255, 255, 0, 1)', undefined],
     polyfillLine, nativeLine);
  at(2000, 'stroke', ['currentColor', undefined],
     polyfillLine, nativeLine);
  at(2000, 'stroke-width', [20, undefined], polyfillLine, nativeLine);
  at(2000, 'stroke-opacity', [0.2, undefined], polyfillLine, nativeLine);
  at(2000, 'stroke-dashoffset', [100, undefined], polyfillLine, nativeLine);
  at(2000, 'stroke-dasharray', ['10, 15, 20, 35, 10, 45', undefined],
     polyfillLine, nativeLine);
  at(2000, 'points', ['30, 130, 730, 130, 730, 230, 30, 230',
                      '30 130 730 130 730 230 30 230'],
     polyfillLine, nativeLine);
}, 'animate stroke properties');
