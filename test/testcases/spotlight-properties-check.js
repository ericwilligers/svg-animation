'use strict';

timing_test(function() {
  var polyfillSpotLight = document.getElementById('polyfillSpotLight');
  var nativeSpotLight = document.getElementById('nativeSpotLight');
  var polyfillDistantLight = document.getElementById('polyfillDistantLight');
  var nativeDistantLight = document.getElementById('nativeDistantLight');
  var polyfillGaussianBlur = document.getElementById('polyfillGaussianBlur');
  var nativeGaussianBlur = document.getElementById('nativeGaussianBlur');

  at(1000, 'z', 400, polyfillSpotLight, nativeSpotLight);
  at(2000, 'z', 300, polyfillSpotLight, nativeSpotLight);
  at(3000, 'z', 200, polyfillSpotLight, nativeSpotLight);

  at(4000, 'pointsAtX', [60, 660], polyfillSpotLight, nativeSpotLight);
  at(5000, 'pointsAtX', [120, 720], polyfillSpotLight, nativeSpotLight);
  at(6000, 'pointsAtX', [180, 780], polyfillSpotLight, nativeSpotLight);

  at(7000, 'pointsAtY', 60, polyfillSpotLight, nativeSpotLight);
  at(8000, 'pointsAtY', 120, polyfillSpotLight, nativeSpotLight);
  at(9000, 'pointsAtY', 180, polyfillSpotLight, nativeSpotLight);

  at(10000, 'pointsAtZ', 60, polyfillSpotLight, nativeSpotLight);
  at(11000, 'pointsAtZ', 120, polyfillSpotLight, nativeSpotLight);
  at(12000, 'pointsAtZ', 0, polyfillSpotLight, nativeSpotLight);

  at(13000, 'limitingConeAngle', 14, polyfillSpotLight, nativeSpotLight);
  at(14000, 'limitingConeAngle', 16, polyfillSpotLight, nativeSpotLight);

  at(16000, 'elevation', 80, polyfillDistantLight, nativeDistantLight);
  at(17000, 'elevation', 70, polyfillDistantLight, nativeDistantLight);
  at(18000, 'elevation', 60, polyfillDistantLight, nativeDistantLight);
  at(19000, 'azimuth', 45, polyfillDistantLight, nativeDistantLight);
  at(20000, 'azimuth', 90, polyfillDistantLight, nativeDistantLight);

  at(21000, 'stdDeviation', ['7.625, 9.625', '7.625 9.625'],
     polyfillGaussianBlur, nativeGaussianBlur);
  at(22000, 'stdDeviation', ['7.75, 9.75', '7.75 9.75'],
     polyfillGaussianBlur, nativeGaussianBlur);

}, 'animate feSpotLight properties');
