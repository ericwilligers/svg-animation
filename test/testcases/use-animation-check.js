'use strict';

timing_test(function() {
  var polyfillAnim0 = document.getElementById('polyfillAnim0');
  var polyfillAnim1 = document.getElementById('polyfillAnim1');
  var polyfillAnim2 = document.getElementById('polyfillAnim2');
  var nativeAnim0 = document.getElementById('nativeAnim0');
  var nativeAnim1 = document.getElementById('nativeAnim1');
  var nativeAnim2 = document.getElementById('nativeAnim2');

  eventAt(44000, polyfillAnim0, 'begin');
  eventAt(46000, polyfillAnim1, 'begin');
  eventAt(48000, polyfillAnim2, 'begin');
  eventAt(51000, polyfillAnim0, 'end');
  eventAt(53000, polyfillAnim1, 'end');
  eventAt(55000, polyfillAnim2, 'end');
}, 'use of animations has no effect on events');
