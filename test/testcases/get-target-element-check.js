'use strict';

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');
  var polyfillAnimation = document.getElementById('polyfillAnimation');
  var nativeAnimation = document.getElementById('nativeAnimation');

  at(1200, 'targetElement',
     [polyfillRect, nativeRect], polyfillAnimation, nativeAnimation);
  at(3200, 'targetElement',
     [polyfillRect, nativeRect], polyfillAnimation, nativeAnimation);
}, 'targetElement');

// FIXME: add test where the element with target id is deleted,
// and replaced by a new element.

// FIXME: add test where the xlink:href attribute is changed.

// FIXME: add test where the xlink:href attribute is deleted.

// FIXME: add test where the xlink:href attribute is added.
