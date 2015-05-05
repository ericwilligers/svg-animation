/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function assertLess(a, b) {
  // We use ! < instead of >= so that tests using undefined fail
  if (!(a < b)) {
    throw ('assertLess failed: ' + a + ' >= ' + b);
  }
}
function assertEqual(a, b) {
  if (a !== b) {
    throw ('assertEqual failed: ' + a + ' !== ' + b);
  }
}

function timing_test_impl(callback, desc) {
  console.log('RUNNING: ' + desc);
  var svgFragmentList = document.querySelectorAll('svg');

  var expectationList = [];
  var expectationIndex = -1;

  var numExpectationMatches = 0;

  // Control debug logging.
  var verbose = false;

  function setTime(millis) {
    for (var fragmentIndex = 0;
         fragmentIndex < svgFragmentList.length;
         ++fragmentIndex) {
      svgFragmentList[fragmentIndex].pauseAnimations();
      svgFragmentList[fragmentIndex].setCurrentTime(millis / 1000);
    }
    document.timeline._freezeClockForTesting(millis);
  }

  function currentExpectation(requiredProperty) {
    if (expectationIndex === expectationList.length) {
      throw new Error('Expectation ' + requiredProperty +
          ' late and unexpected');
    }
    var expectation = expectationList[expectationIndex];
    if (!expectation.hasOwnProperty(requiredProperty)) {
      throw new Error('Expectation ' + requiredProperty + ' unexpected');
    }
    return expectation;
  }

  function readAttribute(element, propertyName) {
    if (typeof element == 'string' || element instanceof String) {
      // Specifying elements by id is useful when they may not initially exist.
      element = document.getElementById(element);
    }

    if (!element) {
      throw new Error('No such element');
    }

    var attribute;
    switch (propertyName) {
      case 'targetElement':
        return element.targetElement;
      case 'simpleDuration':
        return element.getSimpleDuration();
      case 'startTime':
        return element.getStartTime();
      case 'currentTime':
        return element.getCurrentTime();
      case 'css-transform':
        return getComputedStyle(element).transform;
      default:
        // FIXME: getAttribute(expectation.propertyName) does not return
        // animated value for polyfillAnimatedElement but does for
        // nativeAnimatedElement.
        attribute = element.attributes[propertyName];
        if (attribute) {
          return attribute.value;
        } else {
          // This occurs with transform of SVG native elements.
          return undefined;
        }
    }
  }

  function roughlyEqual(first, second) {
    return Math.abs(first - second) < 1E-6;
  }

  function match(observedValue, expectedValue) {
    if (typeof expectedValue === 'number') {
      return roughlyEqual(observedValue, expectedValue);
    }
    return observedValue === expectedValue;
  }

  function verifyExpectation() {
    var expectation = currentExpectation('propertyName');
    var expectedValue = expectation.expectedValue;

    var polyfillAnimatedValue = readAttribute(
        expectation.polyfillAnimatedElement, expectation.propertyName);
    var nativeAnimatedValue = readAttribute(
        expectation.nativeAnimatedElement, expectation.propertyName);

    var matched;
    if (Array.isArray(expectedValue)) {
      matched = match(polyfillAnimatedValue, expectedValue[0]) &&
                match(nativeAnimatedValue, expectedValue[1]);
    } else {
      matched = match(polyfillAnimatedValue, expectedValue) &&
                match(nativeAnimatedValue, expectedValue);
    }

    if (verbose || !matched) {
      console.log(expectation.millis + 'ms ' + expectation.propertyName +
          ' expected=' + expectedValue +
          ' ' + expectation.polyfillAnimatedElement.id +
          '=' + polyfillAnimatedValue +
          ' ' + expectation.nativeAnimatedElement.id +
          '=' + nativeAnimatedValue + '.');
    }

    if (matched) {
      ++numExpectationMatches;
    }
    scheduleNext();
  }

  function executeCommand() {
    var expectation = currentExpectation('command');
    expectation.command();
    ++numExpectationMatches;
    scheduleNext();
  }

  function verifyEventExpectation(eventType, e) {
    var expectation = currentExpectation('eventType');
    var matched = true;

    function assert(condition, message) {
      if (!condition) {
        console.log('Unexpected ' + message);
        matched = false;
      } else if (verbose) {
        console.log('Matched ' + message);
      }
    }

    assert(e.target === expectation.polyfillAnimationElement, 'event target');
    assert(eventType === expectation.eventType, 'event type');
    assert(e.view === document.defaultView, 'event view');
    assert(e.detail.toString() === '0', 'event detail');

    if (matched) {
      ++numExpectationMatches;
    }
    scheduleNext();
  }

  function observeDummyMutation() {
    var dummyNode =
        document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var mutationObserver = new MutationObserver(function() {
      var expectation = currentExpectation('observeMutations');

      mutationObserver.disconnect();
      document.body.removeChild(dummyNode);

      ++numExpectationMatches;
      scheduleNext();
    });
    mutationObserver.observe(document, {
      childList: true,
      subtree: true
    });
    document.body.appendChild(dummyNode);
  }

  function scheduleNext() {
    ++expectationIndex;
    if (expectationIndex < expectationList.length) {
      var expectation = expectationList[expectationIndex];
      setTime(expectation.millis);

      if (expectation.propertyName) {
        window.requestAnimationFrame(verifyExpectation);
        return;
      }
      if (expectation.command) {
        window.requestAnimationFrame(executeCommand);
        return;
      }
      if (expectation.eventType) {
        // we wait for an event instead of a RAF
        if (verbose) {
          console.log('Waiting for ' + expectation.eventType + ' event on ' +
              expectation.polyfillAnimationElement.id);
        }
        return;
      }
      if (expectation.observeMutations) {
        observeDummyMutation();
        return;
      }
      throw new Error('Expectation is poorly formed');

    } else if (numExpectationMatches === expectationList.length) {
      console.log('PASSED: ' + desc);
    } else {
      console.log('FAILED: ' + desc);
    }
  }

  function registerEventListener(polyfillAnimationElement, eventType) {
    polyfillAnimationElement.addEventListener(eventType, function(e) {
      if (verbose) {
        console.log('Received ' + eventType + ' event on ' +
            polyfillAnimationElement.id);
      }
      verifyEventExpectation(eventType, e);
    });
  }

  var original_at = window.at;
  var original_executeAt = window.executeAt;
  var original_eventAt = window.eventAt;
  var original_observeMutationsAt = window.observeMutationsAt;
  window.at = function(millis, propertyName, expectedValue,
                       polyfillAnimatedElement, nativeAnimatedElement) {
    expectationList.push({
      millis: millis,
      propertyName: propertyName,
      expectedValue: expectedValue,
      polyfillAnimatedElement: polyfillAnimatedElement,
      nativeAnimatedElement: nativeAnimatedElement
    });
  };
  window.executeAt = function(millis, command) {
    expectationList.push({
      millis: millis,
      command: command
    });
  };
  window.eventAt = function(millis, polyfillAnimationElement, eventType) {
    // We register event listeners the first time we are passed a given
    // polyfillAnimationElement.

    if (!polyfillAnimationElement.harnessListenersAdded) {
      registerEventListener(polyfillAnimationElement, 'begin');
      registerEventListener(polyfillAnimationElement, 'end');

      // Add JavaScript property to the polyfillAnimationElement,
      // to record that we have registed event listeners.
      polyfillAnimationElement.harnessListenersAdded = true;
    }
    expectationList.push({
      millis: millis,
      eventType: eventType,
      polyfillAnimationElement: polyfillAnimationElement
    });
  };
  window.observeMutationsAt = function(millis) {
    expectationList.push({
      millis: millis,
      observeMutations: true
    });
  };
  callback();
  window.at = original_at;
  window.executeAt = original_executeAt;
  window.eventAt = original_eventAt;
  window.observeMutationsAt = original_observeMutationsAt;

  scheduleNext();
}

// FIXME: support a sequence of timing tests.
// For now, timing_test may only be called once.
function timing_test(callback, desc) {
  window.addEventListener('load', function() {
    timing_test_impl(callback, desc);
  });
}
