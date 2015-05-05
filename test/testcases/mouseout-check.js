'use strict';

function issueMouseout(element) {
  var event = new Event('mouseout');
  element.dispatchEvent(event);
}

function issueClicks() {
  var polyfillRectLeft = document.getElementById('polyfillRectLeft');
  var polyfillRectRight = document.getElementById('polyfillRectRight');

  issueMouseout(polyfillRectRight);
  issueMouseout(polyfillRectLeft);
}

timing_test(function() {
  var polyfillAnimLeft = document.getElementById('polyfillAnimLeft');
  var polyfillAnimRight = document.getElementById('polyfillAnimRight');

  executeAt(1000, issueClicks);
  eventAt(1000, polyfillAnimLeft, 'begin');
  eventAt(3000, polyfillAnimLeft, 'end');
  eventAt(6000, polyfillAnimRight, 'begin'); // 5 second offset from mouseout
  eventAt(8000, polyfillAnimRight, 'end');

}, 'respond to mouseouts');
