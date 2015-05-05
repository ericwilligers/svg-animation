'use strict';

function createAnimateMotion(rect, pathId,
    animateMotionTag, mpathTag, delayMPath) {

  var attributes = {
    calcMode: 'linear',
    additive: 'sum',
    accumulate: 'sum',
    dur: '2s',
    repeatCount: '2',
    fill: 'freeze'
  };

  var animateMotion = document.createElementNS(
      'http://www.w3.org/2000/svg', animateMotionTag);
  for (var name in attributes) {
    animateMotion.setAttribute(name, attributes[name]);
  }

  var mpath = document.createElementNS('http://www.w3.org/2000/svg', mpathTag);
  mpath.setAttributeNS(
      'http://www.w3.org/1999/xlink', 'xlink:href', '#' + pathId);

  function appendMPath() {
    animateMotion.appendChild(mpath);
  }

  if (!delayMPath) {
    appendMPath();
  }
  rect.appendChild(animateMotion);
  if (delayMPath) {
    appendMPath();
  }

  if (pathId == 'horizontalPath') {
    // By accessing targetElement on the newly created element,
    // we require this property to work immediately when
    // the animation is added to the document.
    animateMotion.targetElement.setAttribute('width', '80');
  }
}

function addHorizontalAnimations() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  createAnimateMotion(polyfillRect, 'horizontalPath',
      'animateMotion', 'mpath', true);
  createAnimateMotion(nativeRect, 'horizontalPath',
      'nativeAnimateMotion', 'nativeMPath', true);
}

function addVerticalAnimations() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  createAnimateMotion(polyfillRect, 'verticalPath',
      'animateMotion', 'mpath', false);
  createAnimateMotion(nativeRect, 'verticalPath',
      'nativeAnimateMotion', 'nativeMPath', false);
}

timing_test(function() {
  var polyfillRect = document.getElementById('polyfillRect');
  var nativeRect = document.getElementById('nativeRect');

  executeAt(1000, addHorizontalAnimations);
  at(2000, 'width', '80', polyfillRect, nativeRect);
  executeAt(3000, addVerticalAnimations);
  at(8000, 'transform',
     ['translate(400, 0) rotate(0) translate(0, 400) rotate(0)', undefined],
     polyfillRect, nativeRect);
}, 'appendChild');
