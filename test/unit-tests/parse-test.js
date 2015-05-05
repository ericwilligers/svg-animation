'use strict';

function matchNonEscapedIndexOf(str, searchValue, expectedIndex) {
  assertEqual(
      window._SmilInJavascriptTestingUtilities._nonEscapedIndexOf(
          str, searchValue),
      expectedIndex);
}

function matchClockValue(valueStr, expectedValue) {
  assertEqual(
      window._SmilInJavascriptTestingUtilities._parseClockValue(valueStr),
      expectedValue);
}

function matchOffsetValue(valueStr, expectedValue) {
  assertEqual(
      window._SmilInJavascriptTestingUtilities._parseOffsetValue(valueStr),
      expectedValue);
}

function matchBeginEndValue(valueStr, expectedValue) {
  assertEqual(
      window._SmilInJavascriptTestingUtilities._parseBeginEndValue(valueStr),
      expectedValue);
}

function matchBeginEnd(isBegin, valueStr, expectedValues) {
  var parseResult = window._SmilInJavascriptTestingUtilities._parseBeginEnd(
      isBegin, valueStr);
  assertEqual(parseResult.length, expectedValues.length);
  for (var index = 0; index < expectedValues.length; ++ index) {
    assertEqual(
        JSON.stringify(parseResult[index]),
        JSON.stringify(expectedValues[index]));
  }
}

describe('parse', function() {
  describe('nonEscapedIndexOf', function() {
    it('should return -1 when searchValue is not found', function() {
      matchNonEscapedIndexOf('foo.begin', '-', -1);
    });
    it('should return -1 when searchValue is always escaped', function() {
      matchNonEscapedIndexOf('f\\-o\\-o.begin', '-', -1);
    });
    it('should return index when searchValue is found', function() {
      matchNonEscapedIndexOf('f-o-o.begin', '-', 1);
      matchNonEscapedIndexOf('f\\-o-o.begin', '-', 4);
      matchNonEscapedIndexOf('f-o\\-o.begin', '-', 1);
    });
  });

  describe('parseClockValue', function() {
    it('should match the supplied clock value', function() {
      matchClockValue('2h', 2 * 60 * 60 * 1000);
      matchClockValue('2min', 2 * 60 * 1000);
      matchClockValue('30', 30 * 1000); // seconds implicitly
      matchClockValue('7650ms', 7650);
      matchClockValue('02:03.250', 2 * 60 * 1000 + 3250);
      matchClockValue('2:03:04.500', 2 * 60 * 60 * 1000 + 3 * 60 * 1000 + 4500);
      matchClockValue('00:06.500', 6500);
      matchClockValue('0:00:07.250', 7250);
    });
    it('should convert indefinite to Infinity', function() {
      matchClockValue('indefinite', Infinity);
    });
  });

  describe('parseOffsetValue', function() {
    it('should accept positive offsets', function() {
      matchOffsetValue('+30', 30 * 1000);
      matchOffsetValue('+02:00', 2 * 60 * 1000);
    });
    it('should accept negative offsets', function() {
      matchOffsetValue('-30', -30 * 1000);
      matchOffsetValue('-02:00', -2 * 60 * 1000);
    });
    it('should accept offsets with no leading sign', function() {
      matchOffsetValue('30', 30 * 1000);
      matchOffsetValue('02:00', 2 * 60 * 1000);
    });
  });

  describe('parseBeginEndValue', function() {
    it('should reject empty values', function() {
      matchBeginEndValue('', undefined);
    });
    it('should accept simple offsets', function() {
      matchBeginEndValue('+02:00', 2 * 60 * 1000);
      matchBeginEndValue('-02:00', -2 * 60 * 1000);
      matchBeginEndValue('02:00', 2 * 60 * 1000);
    });
    it('should convert indefinite to Infinity', function() {
      matchBeginEndValue('indefinite', Infinity);
    });
    it('should reject other offsets', function() {
      matchBeginEndValue('rubbish!', undefined);
    });
  });

  describe('parseBeginEnd', function() {
    it('should default to 0 for begin', function() {
      matchBeginEnd(true, null, [0]);
      matchBeginEnd(true, undefined, [0]);
      matchBeginEnd(true, '', [0]);
      matchBeginEnd(true, 'rubbish!', [0]);
    });
    it('should default to Infinity for end', function() {
      matchBeginEnd(false, null, [Infinity]);
      matchBeginEnd(false, undefined, [Infinity]);
      matchBeginEnd(false, '', [Infinity]);
      matchBeginEnd(false, 'rubbish!', [Infinity]);
    });
    it('should accept a single value', function() {
      matchBeginEnd(true, '+02:00', [2 * 60 * 1000]);
      matchBeginEnd(true, '-02:00', [-2 * 60 * 1000]);
      matchBeginEnd(false, '02:00', [2 * 60 * 1000]);
    });
    it('should accept multiple values', function() {
      matchBeginEnd(true, '1ms;2ms;3ms', [1, 2, 3]);
      matchBeginEnd(false, '4ms;-5ms', [4, -5]);
    });
    it('should accept accessKey', function() {
      matchBeginEnd(true, 'accessKey(1)',
          [{accessKey: '1'.charCodeAt(), offset: 0}]);
      matchBeginEnd(true, 'accessKey(2) + 12ms',
          [{accessKey: '2'.charCodeAt(), offset: 12}]);
      matchBeginEnd(false, 'accessKey(3)-9',
          [{accessKey: '3'.charCodeAt(), offset: -9000}]);
    });
    it('should accept click', function() {
      matchBeginEnd(true, 'foo.click',
          [{id: 'foo', eventKind: 'click', offset: 0}]);
    });
    it('should accept begin end', function() {
      matchBeginEnd(true, 'bar.begin+3s',
          [{id: 'bar', timeSymbol: 'begin', offset: 3000}]);
      matchBeginEnd(true, 'baz.end-4ms',
          [{id: 'baz', timeSymbol: 'end', offset: -4}]);
    });
  });
});
