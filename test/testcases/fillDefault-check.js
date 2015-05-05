'use strict';

timing_test(function() {
  var polyfillRectFF = document.getElementById('polyfillRectFF');
  var nativeRectFF = document.getElementById('nativeRectFF');
  var polyfillRectFR = document.getElementById('polyfillRectFR');
  var nativeRectFR = document.getElementById('nativeRectFR');
  var polyfillRectFD = document.getElementById('polyfillRectFD');
  var nativeRectFD = document.getElementById('nativeRectFD');
  var polyfillRectFU = document.getElementById('polyfillRectFU');
  var nativeRectFU = document.getElementById('nativeRectFU');

  var polyfillRectRF = document.getElementById('polyfillRectRF');
  var nativeRectRF = document.getElementById('nativeRectRF');
  var polyfillRectRR = document.getElementById('polyfillRectRR');
  var nativeRectRR = document.getElementById('nativeRectRR');
  var polyfillRectRD = document.getElementById('polyfillRectRD');
  var nativeRectRD = document.getElementById('nativeRectRD');
  var polyfillRectRU = document.getElementById('polyfillRectRU');
  var nativeRectRU = document.getElementById('nativeRectRU');

  var polyfillRectIF = document.getElementById('polyfillRectIF');
  var nativeRectIF = document.getElementById('nativeRectIF');
  var polyfillRectIR = document.getElementById('polyfillRectIR');
  var nativeRectIR = document.getElementById('nativeRectIR');
  var polyfillRectID = document.getElementById('polyfillRectID');
  var nativeRectID = document.getElementById('nativeRectID');
  var polyfillRectIU = document.getElementById('polyfillRectIU');
  var nativeRectIU = document.getElementById('nativeRectIU');
  var polyfillRectIAF = document.getElementById('polyfillRectIAF');
  var nativeRectIAF = document.getElementById('nativeRectIAF');

  var polyfillRectUF = document.getElementById('polyfillRectUF');
  var nativeRectUF = document.getElementById('nativeRectUF');
  var polyfillRectUR = document.getElementById('polyfillRectUR');
  var nativeRectUR = document.getElementById('nativeRectUR');
  var polyfillRectUD = document.getElementById('polyfillRectUD');
  var nativeRectUD = document.getElementById('nativeRectUD');
  var polyfillRectUU = document.getElementById('polyfillRectUU');
  var nativeRectUU = document.getElementById('nativeRectUU');
  var polyfillRectUAF = document.getElementById('polyfillRectUAF');
  var nativeRectUAF = document.getElementById('nativeRectUAF');

  at(4000, 'width', 30, polyfillRectFF, nativeRectFF);
  at(4000, 'width', 10, polyfillRectFR, nativeRectFR);
  // We respect fillDafault, native Chrome does not.
  at(4000, 'width', [30, 10], polyfillRectFD, nativeRectFD);
  at(4000, 'width', [30, 10], polyfillRectFU, nativeRectFU);

  at(4000, 'width', 30, polyfillRectRF, nativeRectRF);
  at(4000, 'width', 10, polyfillRectRR, nativeRectRR);
  at(4000, 'width', 10, polyfillRectRD, nativeRectRD);
  at(4000, 'width', 10, polyfillRectRU, nativeRectRU);

  at(4000, 'width', 30, polyfillRectIF, nativeRectIF);
  at(4000, 'width', 10, polyfillRectIR, nativeRectIR);
  at(4000, 'width', 10, polyfillRectID, nativeRectID);
  at(4000, 'width', 10, polyfillRectIU, nativeRectIU);
  at(4000, 'width', 30, polyfillRectIAF, nativeRectIAF);

  at(4000, 'width', 30, polyfillRectUF, nativeRectUF);
  at(4000, 'width', 10, polyfillRectUR, nativeRectUR);
  at(4000, 'width', 10, polyfillRectUD, nativeRectUD);
  at(4000, 'width', 10, polyfillRectUU, nativeRectUU);
  at(4000, 'width', 30, polyfillRectUAF, nativeRectUAF);

}, 'fillDefault');
