'use strict';

timing_test(function() {
  var polyfillColorMatrix = document.getElementById('polyfillColorMatrix');
  var nativeColorMatrix = document.getElementById('nativeColorMatrix');

  at(0, 'values',
     ['1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20',
      '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20'],
     polyfillColorMatrix, nativeColorMatrix);
  at(1000, 'values',
     ['2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21',
      '2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21'],
     polyfillColorMatrix, nativeColorMatrix);

}, 'animate values matrix');
