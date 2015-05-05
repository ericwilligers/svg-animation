'use strict';

function beginElements() {
  polyfillFirstAnim.beginElement();
  nativeFirstAnim.beginElement();
  polyfillSecondAnim.beginElementAt(3);
  nativeSecondAnim.beginElementAt(3);
  polyfillFirstAnim.beginElementAt(6);
  nativeFirstAnim.beginElementAt(6);
}

function endElements() {
  polyfillSecondAnim.endElement();
  nativeSecondAnim.endElement();
  polyfillFirstAnim.endElementAt(3);
  nativeFirstAnim.endElementAt(3);
}

timing_test(function() {
  var polyfillFirstRect = document.getElementById('polyfillFirstRect');
  var nativeFirstRect = document.getElementById('nativeFirstRect');
  var polyfillSecondRect = document.getElementById('polyfillSecondRect');
  var nativeSecondRect = document.getElementById('nativeSecondRect');

  at(1000, 'width', 100, polyfillFirstRect, nativeFirstRect);
  executeAt(1000, beginElements);
  at(2000, 'transform', undefined, polyfillSecondRect, nativeSecondRect);
  at(3000, 'transform', ['translate(-20, 120)', 'translate(-20 120)'],
      polyfillFirstRect, nativeFirstRect);
  at(5000, 'transform', ['translate(-40, 90)', 'translate(-40 90)'],
      polyfillFirstRect, nativeFirstRect);
  at(6000, 'transform', ['translate(10, -160)', 'translate(10 -160)'],
      polyfillSecondRect, nativeSecondRect);
  executeAt(8000, endElements);
  at(9000, 'transform', ['translate(-20, 120)', 'translate(-20 120)'],
      polyfillFirstRect, nativeFirstRect);
  at(10000, 'transform', '', polyfillSecondRect, nativeSecondRect);
  at(12000, 'transform', '', polyfillSecondRect, nativeSecondRect);
  at(13000, 'transform', ['translate(-40, 90)', 'translate(-40 90)'],
      polyfillFirstRect, nativeFirstRect);
}, 'beginElement');
