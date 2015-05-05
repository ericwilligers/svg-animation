'use strict';

function createInstanceTimeList(scheduleTimes) {
  var result = new window._SmilInJavascriptTestingUtilities._instanceTimeList();
  for (var index = 0; index < scheduleTimes.length; ++index) {
    result.insert({scheduleTime: scheduleTimes[index]});
  }
  return result;
}

function verifyValidInstanceTimeList(list, expectedLength, expectedEarliest) {
  assertEqual(list.entries.length, expectedLength);
  assertEqual(list.earliestScheduleTime(), expectedEarliest);
  for (var index = 1; index < expectedLength; ++ index) {
    assertLess(list.entries[index - 1].scheduleTime,
               list.entries[index].scheduleTime);
  }
}

function exerciseInsertionIntoInstanceTimeList(scheduleTimes) {
  var list = createInstanceTimeList(scheduleTimes);
  verifyValidInstanceTimeList(list, scheduleTimes.length, 10);
}

function exerciseRemovalFromInstanceTimeList(scheduleTimes) {
  for (var index = 0; index < scheduleTimes.length; ++index) {
    var list = createInstanceTimeList(scheduleTimes);
    list.remove(list.entries[index]);
    // If we removed the earliest entry, the new earliest is 20
    verifyValidInstanceTimeList(list, scheduleTimes.length - 1,
        (index === 0) ? 20 : 10);
    list.extractFirst(25);
    // If we removed the two earliest entries, the new earliest is 30
    verifyValidInstanceTimeList(list, scheduleTimes.length - 2,
        (index <= 1) ? 30 : 20);
  }
}

function exerciseFullRemovalFromInstanceTimeList(scheduleTimes) {
  var list = createInstanceTimeList(scheduleTimes);
  for (var index = 1; index <= scheduleTimes.length; ++index) {
    verifyValidInstanceTimeList(list, scheduleTimes.length + 1 - index,
        index * 10);
    assertEqual(null, list.extractFirst(index * 10 - 1));
    var current = list.extractFirst(index * 10);
    assertEqual(current.scheduleTime, index * 10);
  }
  assertEqual(null, list.extractFirst(Infinity));
}


describe('InstanceTimeList', function() {

  // Forms the sequence
  // 10 20 30 40 50
  var smallSchedule = [40, 30, 10, 20, 50];

  // Forms the sequence
  // 10 20 30 40 50 60 70 80
  var mediumSchedule = [40, 30, 70, 10, 20, 80, 60, 50];

  describe('insertion', function() {
    it('should maintain small heap as entries are added', function() {
      exerciseInsertionIntoInstanceTimeList(smallSchedule);
    });
    it('should maintain medium heap as entries are added', function() {
      exerciseInsertionIntoInstanceTimeList(mediumSchedule);
    });
  });
  describe('removal', function() {
    it('should maintain small heap as entries are removed', function() {
      exerciseRemovalFromInstanceTimeList(smallSchedule);
    });
    it('should maintain medium heap as entries are removed', function() {
      exerciseRemovalFromInstanceTimeList(mediumSchedule);
    });
  });
  describe('full-removal', function() {
    it('should maintain small heap as all entries are removed', function() {
      exerciseFullRemovalFromInstanceTimeList(smallSchedule);
    });
    it('should maintain medium heap as all entries are removed', function() {
      exerciseFullRemovalFromInstanceTimeList(mediumSchedule);
    });
  });
});
