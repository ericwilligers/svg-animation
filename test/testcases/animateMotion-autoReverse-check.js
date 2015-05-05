'use strict';

timing_test(function() {
  var polyfillForwards = document.getElementById('polyfillForwards');
  var polyfillBackwards = document.getElementById('polyfillBackwards');
  var nativeForwards = document.getElementById('nativeForwards');
  var nativeBackwards = document.getElementById('nativeBackwards');

  at(0, 'transform',
      ['translate(100, 700) ' +
       'rotate(81.87608710023423)', undefined],
      polyfillForwards, nativeForwards);
  at(1000, 'transform',
      ['translate(325.6376953125, 602.1029052734375) ' +
       'rotate(127.35662192852043)', undefined],
      polyfillBackwards, nativeBackwards);
  at(2000, 'transform',
      ['translate(342.12249755859375, 497.4693298339844) ' +
       'rotate(-58.10590660892704)', undefined],
      polyfillForwards, nativeForwards);
  at(3000, 'transform',
      ['translate(509.8045349121094, 330.6245422363281) ' +
       'rotate(125.15013659963918)', undefined],
      polyfillBackwards, nativeBackwards);
  at(4000, 'transform',
      ['translate(515.7870483398438, 217.8354949951172) ' +
       'rotate(-52.378094708887936)', undefined],
      polyfillForwards, nativeForwards);
  at(5000, 'transform',
      ['translate(745.2967529296875, 109.2613525390625) ' +
       'rotate(161.37120442680765)', undefined],
      polyfillBackwards, nativeBackwards);
  at(6000, 'transform',
      ['translate(627.4202880859375, 172.5797119140625) ' +
       'rotate(135)', undefined], polyfillForwards,
      nativeForwards);
  at(7000, 'transform',
      ['translate(607.3983154296875, 292.6017150878906) ' +
       'rotate(315)', undefined], polyfillBackwards,
      nativeBackwards);
  at(8000, 'transform',
      ['translate(394.5208435058594, 405.4791564941406) ' +
       'rotate(135)', undefined], polyfillForwards,
      nativeForwards);
  at(9000, 'transform',
      ['translate(375.39190673828125, 524.6080932617188) ' +
       'rotate(315)', undefined], polyfillBackwards,
      nativeBackwards);
  at(10000, 'transform',
      ['translate(161.62142944335938, 638.3785400390625) ' +
       'rotate(135)', undefined], polyfillForwards,
      nativeForwards);
  at(11000, 'transform',
      ['translate(241.10150146484375, 631.2932739257812) ' +
       'rotate(121.63603599862758)', undefined],
      polyfillBackwards, nativeBackwards);
  at(12000, 'transform',
      ['translate(233.18544006347656, 497.939453125) ' +
       'rotate(-50.99931178700786)', undefined],
      polyfillForwards, nativeForwards);
  at(13000, 'transform',
      ['translate(422.3974914550781, 487.8026428222656) ' +
       'rotate(283.55842772575784)', undefined],
      polyfillBackwards, nativeBackwards);
  at(14000, 'transform',
      ['translate(243.4203643798828, 629.0626220703125) ' +
       'rotate(133.02506598911802)', undefined],
      polyfillForwards, nativeForwards);
}, 'auto reverse');
