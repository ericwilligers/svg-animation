'use strict';

function createSet(id, href) {
  var picture = document.getElementById('picture');

  var set = document.createElementNS(
      'http://www.w3.org/2000/svg', 'set');
  set.id = id;

  set.setAttributeNS(
      'http://www.w3.org/1999/xlink', 'xlink:href', href);

  var attributes = {
    attributeName: 'transform',
    to: 'scale(0.5)'
  };

  for (var name in attributes) {
    set.setAttribute(name, attributes[name]);
  }

  picture.appendChild(set);
}

function createTargets() {
  createSet('polyfillSet', '#polyfillDivBottom');
  createSet('nativeSet', '#nativeDivBottom');
}

timing_test(function() {
  executeAt(1000, createTargets);

  at(2000, 'transform', undefined, 'polyfillDivTop', 'nativeDivTop');
  at(2000, 'css-transform', 'none', 'polyfillDivTop', 'nativeDivTop');

  at(3000, 'transform', undefined, 'polyfillDivBottom', 'nativeDivBottom');
  at(3000, 'css-transform', 'none', 'polyfillDivBottom', 'nativeDivBottom');
}, 'skip non-SVG target');
