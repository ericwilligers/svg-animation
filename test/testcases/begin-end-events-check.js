'use strict';

timing_test(function() {
  var polyfillAnim = document.getElementById('polyfillAnim');
  var nativeAnim = document.getElementById('nativeAnim');

  function requentEnd() {
    polyfillAnim.endElement();
  }

  executeAt(32000, requentEnd); // NOOP
  eventAt(36000, polyfillAnim, 'begin');
  eventAt(40000, polyfillAnim, 'end');
  eventAt(44000, polyfillAnim, 'begin');
  eventAt(48000, polyfillAnim, 'end');
  eventAt(48000, polyfillAnim, 'begin');
  eventAt(52000, polyfillAnim, 'end');
  executeAt(60000, requentEnd); // NOOP

}, 'begin and end events');
