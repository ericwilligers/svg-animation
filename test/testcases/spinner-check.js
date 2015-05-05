'use strict';

timing_test(function() {
  var polyfillLeft = document.getElementById('polyfillLeft');
  var polyfillRight = document.getElementById('polyfillRight');
  var nativeLeft = document.getElementById('nativeLeft');
  var nativeRight = document.getElementById('nativeRight');

  at(0, 'd', [
      'M60 60L81 4A60 60 1 1 1 60 0z',
      'M 60 60 L 81 4 A 60 60 1 1 1 60 0 Z'],
      polyfillLeft, nativeLeft);
  at(1000, 'd', [
      'M 60 60 L 110.66666666666666 28.22222222222222 A 60 60 1 1 1 60 0 Z',
      'M 60 60 L 110.667 28.2222 A 60 60 1 1 1 60 0 Z'],
      polyfillRight, nativeRight);
  at(2000, 'd', [
      'M 60 60 L 119.88888888888889 65.55555555555554 A 60 60 1 1 1 60 0 Z',
      'M 60 60 L 119.889 65.5556 A 60 60 1 1 1 60 0 Z'],
      polyfillLeft, nativeLeft);
  at(3000, 'd', [
      'M 60 60 L 103.33333333333334 101 A 60 60 1 1 1 60 0 Z',
      'M 60 60 L 103.333 101 A 60 60 1 1 1 60 0 Z'],
      polyfillRight, nativeRight);
  at(10000, 'd', [
      'M60 60L81 4A60 60 1 1 1 60 0z',
      'M 60 60 L 81 4 A 60 60 1 1 1 60 0 Z'],
      polyfillLeft, nativeLeft);
  at(11000, 'd', [
      'M60 60L60 0A60 60 1 0 1 60 0z',
      'M 60 60 L 60 0 A 60 60 1 0 1 60 0 Z'],
      polyfillRight, nativeRight);
}, 'rotating path interpolation');
