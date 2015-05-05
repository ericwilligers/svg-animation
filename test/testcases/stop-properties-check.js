'use strict';

timing_test(function() {
  var polyfillStop = document.getElementById('polyfillStop');
  var nativeStop = document.getElementById('nativeStop');

  // first animate: offset is 0.25 .. 0.3 during 0s .. 3s
  at(0, 'offset', 0.25, polyfillStop, nativeStop);
  at(1500, 'offset', 0.275, polyfillStop, nativeStop);

  // first set: stop-color is blue from 2s onwards
  at(2500, 'stop-color', ['rgba(0, 0, 128, 1)', '#0F0'],
     polyfillStop, nativeStop);

  // first animate: offset is 0.3 .. 0.5 during 3s .. 4s
  at(3000, 'offset', 0.3, polyfillStop, nativeStop);
  at(3500, 'offset', 0.4, polyfillStop, nativeStop);

  // second animate: offset is 0.5 .. 0.7 during 4s .. 5s
  at(4000, 'offset', 0.5, polyfillStop, nativeStop);
  at(4500, 'offset', 0.6, polyfillStop, nativeStop);

  // second set: offset is 0.75 from 5s onwards
  at(5000, 'offset', 0.75, polyfillStop, nativeStop);
  at(6000, 'offset', 0.75, polyfillStop, nativeStop);

  // third set: stop-opacity is 0.5 from 8s onwards
  at(8000, 'stop-opacity', [0.5, undefined], polyfillStop, nativeStop);

}, 'stop properties');
