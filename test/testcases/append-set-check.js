'use strict';

function createSet(rect, setTag, attributeName, to) {
  var attributes = {
    attributeType: 'XML',
    attributeName: attributeName,
    to: to
  };

  var setElement = document.createElementNS(
      'http://www.w3.org/2000/svg', setTag);
  for (var name in attributes) {
    setElement.setAttribute(name, attributes[name]);
  }
  rect.appendChild(setElement);

  // By accessing targetElement on the newly created element,
  // we force DOM mutations to be observed, otherwise they
  // would not be noticed until an event was received by the
  // mutation observer.
  setElement.targetElement.setAttribute('stroke-width', '4');
}

function addSetHeight() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  createSet(polyfillRect, 'set', 'height', '200');
  createSet(nativeRect, 'nativeSet', 'height', '200');
}

function addSetWidth() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  createSet(polyfillRect, 'set', 'width', '300');
  createSet(nativeRect, 'nativeSet', 'width', '300');
}

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  executeAt(1000, addSetHeight);
  at(1000, 'height', 200, polyfillRect, nativeRect);
  at(1000, 'stroke-width', 4, polyfillRect, nativeRect);
  executeAt(2000, addSetWidth);
  at(2000, 'width', 300, polyfillRect, nativeRect);
}, 'append set');
