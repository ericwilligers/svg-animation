'use strict';

timing_test(function() {
  var polyfillDisplacementMap =
      document.getElementById('polyfillDisplacementMap');
  var nativeDisplacementMap = document.getElementById('nativeDisplacementMap');
  var polyfillComposite = document.getElementById('polyfillComposite');
  var nativeComposite = document.getElementById('nativeComposite');

  at(0, 'scale', 10, polyfillDisplacementMap, nativeDisplacementMap);
  at(1000, 'k1', 0.0125, polyfillComposite, nativeComposite);
  at(2000, 'k2', 0.1, polyfillComposite, nativeComposite);
  at(3000, 'k3', 0.85, polyfillComposite, nativeComposite);
  at(4000, 'k4', 0.2, polyfillComposite, nativeComposite);
  at(5000, 'scale', 20, polyfillDisplacementMap, nativeDisplacementMap);
  at(6000, 'k1', 0.075, polyfillComposite, nativeComposite);
  at(6000, 'k2', 0.3, polyfillComposite, nativeComposite);
  at(8000, 'k3', 0.6, polyfillComposite, nativeComposite);
  at(9000, 'k4', 0.1375, polyfillComposite, nativeComposite);
}, 'animate composite');
