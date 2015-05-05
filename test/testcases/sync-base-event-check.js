'use strict';

timing_test(function() {
  var firstPolyfillRect = document.getElementById('firstPolyfillRect');
  var firstNativeRect = document.getElementById('firstNativeRect');
  var secondPolyfillRect = document.getElementById('secondPolyfillRect');
  var thirdPolyfillRect = document.getElementById('thirdPolyfillRect');
  var fourthPolyfillRect = document.getElementById('fourthPolyfillRect');
  var fifthPolyfillRect = document.getElementById('fifthPolyfillRect');

  var firstPolyfillAnim = document.getElementById('firstPolyfillAnim');
  var secondPolyfillAnim = document.getElementById('secondPolyfillAnim');
  var thirdPolyfillAnim = document.getElementById('thirdPolyfillAnim');
  var fourthPolyfillAnim = document.getElementById('fourthPolyfillAnim');
  var fifthPolyfillAnim = document.getElementById('fifthPolyfillAnim');

  eventAt(30000, firstPolyfillAnim, 'begin');
  at(31000, 'width', 200, firstPolyfillRect, firstNativeRect);
  at(31500, 'width', 150, firstPolyfillRect, firstNativeRect);
  eventAt(32000, firstPolyfillAnim, 'end');

  eventAt(33000, secondPolyfillAnim, 'begin');
  // The polyfill and native animations drift out of time.
  at(34000, 'width', 200, secondPolyfillRect, secondPolyfillRect);
  at(34500, 'width', 150, secondPolyfillRect, secondPolyfillRect);
  eventAt(35000, secondPolyfillAnim, 'end');

  eventAt(36000, thirdPolyfillAnim, 'begin');
  at(37000, 'width', 200, thirdPolyfillRect, thirdPolyfillRect);
  at(37500, 'width', 150, thirdPolyfillRect, thirdPolyfillRect);
  eventAt(38000, thirdPolyfillAnim, 'end');

  eventAt(39000, fourthPolyfillAnim, 'begin');
  at(40000, 'width', 200, fourthPolyfillRect, fourthPolyfillRect);
  at(40500, 'width', 150, fourthPolyfillRect, fourthPolyfillRect);
  eventAt(41000, fourthPolyfillAnim, 'end');

  eventAt(42000, fifthPolyfillAnim, 'begin');
  at(43000, 'width', 200, fifthPolyfillRect, fifthPolyfillRect);
  at(43500, 'width', 150, fifthPolyfillRect, fifthPolyfillRect);
  eventAt(44000, fifthPolyfillAnim, 'end');

  eventAt(45000, firstPolyfillAnim, 'begin');
  at(46000, 'width', 200, firstPolyfillRect, firstPolyfillRect);
  at(46500, 'width', 150, firstPolyfillRect, firstPolyfillRect);
  eventAt(47000, firstPolyfillAnim, 'end');

  eventAt(48000, secondPolyfillAnim, 'begin');
  at(49000, 'width', 200, secondPolyfillRect, secondPolyfillRect);
  at(49500, 'width', 150, secondPolyfillRect, secondPolyfillRect);
  eventAt(50000, secondPolyfillAnim, 'end');

  eventAt(51000, thirdPolyfillAnim, 'begin');
  at(52000, 'width', 200, thirdPolyfillRect, thirdPolyfillRect);
  at(52500, 'width', 150, thirdPolyfillRect, thirdPolyfillRect);
  eventAt(53000, thirdPolyfillAnim, 'end');

  eventAt(54000, fourthPolyfillAnim, 'begin');
  at(55000, 'width', 200, fourthPolyfillRect, fourthPolyfillRect);
  at(55500, 'width', 150, fourthPolyfillRect, fourthPolyfillRect);
  eventAt(56000, fourthPolyfillAnim, 'end');

  eventAt(57000, fifthPolyfillAnim, 'begin');
  at(58000, 'width', 200, fifthPolyfillRect, fifthPolyfillRect);
  at(58500, 'width', 150, fifthPolyfillRect, fifthPolyfillRect);
  eventAt(59000, fifthPolyfillAnim, 'end');

}, 'sync-base dependencies using begin events');
