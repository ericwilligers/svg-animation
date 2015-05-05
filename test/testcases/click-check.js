'use strict';

function issueClick(element) {
  var event = new Event('click');
  element.dispatchEvent(event);
}

function issueClicks() {
  var polyfillRectLeft = document.getElementById('polyfillRectLeft');
  var polyfillRectRight = document.getElementById('polyfillRectRight');

  issueClick(polyfillRectRight);
  issueClick(polyfillRectLeft);
}

timing_test(function() {
  var polyfillAnimLeft = document.getElementById('polyfillAnimLeft');
  var polyfillAnimRight = document.getElementById('polyfillAnimRight');

  executeAt(1000, issueClicks);
  eventAt(1000, polyfillAnimLeft, 'begin');
  eventAt(3000, polyfillAnimLeft, 'end');
  eventAt(6000, polyfillAnimRight, 'begin'); // 5 second offset from click
  eventAt(8000, polyfillAnimRight, 'end');

}, 'respond to clicks');
