'use strict';

timing_test(function() {
  var polyfillBall = document.getElementById('polyfillBall');
  var nativeBall = document.getElementById('nativeBall');
  var polyfillShadow = document.getElementById('polyfillShadow');
  var nativeShadow = document.getElementById('nativeShadow');

  at(100, 'rx', [35.983772517900086, 35.9849], polyfillShadow, nativeShadow);
  at(200, 'fill', ['rgba(0, 0, 1, 0.10164830044340054)', undefined],
      polyfillShadow, nativeShadow);
  at(400, 'rx', [34.49138292094703, 34.507], polyfillShadow, nativeShadow);
  at(500, 'fill', ['rgba(0, 0, 20, 0.14181115142136475)', undefined],
      polyfillShadow, nativeShadow);
  at(700, 'rx', [28.5284447763724, 28.6196], polyfillShadow, nativeShadow);
  at(800, 'fill', ['rgba(0, 0, 13, 0.1239734937979505)', undefined],
      polyfillShadow, nativeShadow);
  at(1000, 'rx', [35.77409595660218, 35.7749], polyfillShadow, nativeShadow);
  at(1100, 'fill', ['rgba(0, 0, 0, 0.10047879800483195)', undefined],
      polyfillShadow, nativeShadow);
}, 'bouncing ball');
