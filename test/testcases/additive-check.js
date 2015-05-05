'use strict';

timing_test(function() {
  var polyfillRect1 = document.getElementById('polyfillRect1');
  var polyfillRect2 = document.getElementById('polyfillRect2');
  var polyfillRect3 = document.getElementById('polyfillRect3');
  var nativeRect1 = document.getElementById('nativeRect1');
  var nativeRect2 = document.getElementById('nativeRect2');
  var nativeRect3 = document.getElementById('nativeRect3');

  at(0, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(0, 0) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(0, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(130, 0) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(0, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(260, 0) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(500, 'transform',
      ['translate(0.000007868049578974023, 20) rotate(0) ' +
       'translate(10, -10) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(130.00001525878906, 20) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(260, 20) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(1000, 'transform',
      ['translate(0.000006993822353251744, 40) rotate(0) ' +
       'translate(0, 0) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(1000, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(130, 40) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(1000, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(260, 40) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(1500, 'transform',
      ['translate(0.000006119594218034763, 60) rotate(0) ' +
       'translate(10, -10) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(1500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(130, 60) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(1500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(260, 60) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(2000, 'transform',
      ['translate(0.000005245366537565133, 80) rotate(0) ' +
       'translate(0, 0) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(2000, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(130, 80) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(2000, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(260, 80) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(2500, 'transform',
      ['translate(0.000004371138857095502, 100) rotate(0) ' +
       'translate(10, -10) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(2500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(130, 100) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(2500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(260, 100) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(3000, 'transform',
      ['translate(0.000003496911176625872, 120) rotate(0) ' +
       'translate(0, 0) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(3000, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(130, 120) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(3000, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(260, 120) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(3500, 'transform',
      ['translate(0.0000026226832687825663, 140) rotate(0) ' +
       'translate(10, -10) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(3500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(130, 140) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(3500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(260, 140) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(4000, 'transform',
      ['translate(0.000001748455588312936, 160) rotate(0) ' +
       'translate(0, 0) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(4000, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(130, 160) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(4000, 'transform',
      ['translate(0, 0) rotate(0) ' +
       'translate(260, 160) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

  at(4500, 'transform',
      ['translate(8.74227794156468e-7, 180) rotate(0) ' +
       'translate(10, -10) rotate(0)', undefined],
      polyfillRect1, nativeRect1);
  at(4500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(130, 180) rotate(0)', undefined],
      polyfillRect2, nativeRect2);
  at(4500, 'transform',
      ['translate(10, -10) rotate(0) ' +
       'translate(260, 180) rotate(0)', undefined],
      polyfillRect3, nativeRect3);

}, 'additive motion');
