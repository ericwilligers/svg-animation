'use strict';

function createPriorityQueue(scheduleTimes) {
  var result = new window._SmilInJavascriptTestingUtilities._priorityQueue();
  for (var index = 0; index < scheduleTimes.length; ++index) {
    result.insert({scheduleTime: scheduleTimes[index]});
  }
  return result;
}

function verifyValidPriorityQueue(queue, expectedLength, expectedEarliest) {
  assertEqual(queue.heap.length - 1, expectedLength); // ignore leading null
  assertEqual(queue.earliestScheduleTime(), expectedEarliest);
  for (var index = 1; index <= expectedLength; ++ index) {
    assertEqual(queue.heap[index].heapIndex, index);
    if (index > 1) {
      var parentIndex = (index - index % 2) / 2;
      // our test populates the queue with distinct values
      assertLess(queue.heap[parentIndex].scheduleTime,
                 queue.heap[index].scheduleTime);
    }
  }
}

function exerciseInsertionIntoPriorityQueue(scheduleTimes) {
  var queue = createPriorityQueue(scheduleTimes);
  verifyValidPriorityQueue(queue, scheduleTimes.length, 10);
}

function exerciseRemovalFromPriorityQueue(scheduleTimes) {
  for (var index = 1; index <= scheduleTimes.length; ++index) {
    var queue = createPriorityQueue(scheduleTimes);
    queue.remove(queue.heap[index]);
    // If we removed the earliest entry, the new earliest is 20
    verifyValidPriorityQueue(queue, scheduleTimes.length - 1,
        (index === 1) ? 20 : 10);
    queue.extractFirst(25);
    // If we removed the two earliest entries, the new earliest is 30
    verifyValidPriorityQueue(queue, scheduleTimes.length - 2,
        (index <= 2) ? 30 : 20);
  }
}

function exerciseFullRemovalFromPriorityQueue(scheduleTimes) {
  var queue = createPriorityQueue(scheduleTimes);
  for (var index = 1; index <= scheduleTimes.length; ++index) {
    verifyValidPriorityQueue(queue, scheduleTimes.length + 1 - index,
                             index * 10);
    assertEqual(null, queue.extractFirst(index * 10 - 1));
    var current = queue.extractFirst(index * 10);
    assertEqual(current.scheduleTime, index * 10);
  }
  assertEqual(null, queue.extractFirst(Infinity));
}


describe('PriorityQueue', function() {

  // Forms the heap
  //      10
  //   20    30
  // 40  50
  var smallSchedule = [40, 30, 10, 20, 50];

  // Forms the heap
  //       10
  //   20      60
  // 40  30  80  70
  // 50
  var mediumSchedule = [40, 30, 70, 10, 20, 80, 60, 50];
  // Note that if we remove the 80 or 70 first, 50 replaces
  // the removed value and then swaps places with the 60.

  describe('insertion', function() {
    it('should maintain small heap as entries are added', function() {
      exerciseInsertionIntoPriorityQueue(smallSchedule);
    });
    it('should maintain medium heap as entries are added', function() {
      exerciseInsertionIntoPriorityQueue(mediumSchedule);
    });
  });
  describe('removal', function() {
    it('should maintain small heap as entries are removed', function() {
      exerciseRemovalFromPriorityQueue(smallSchedule);
    });
    it('should maintain medium heap as entries are removed', function() {
      exerciseRemovalFromPriorityQueue(mediumSchedule);
    });
  });
  describe('full-removal', function() {
    it('should maintain small heap as all entries are removed', function() {
      exerciseFullRemovalFromPriorityQueue(smallSchedule);
    });
    it('should maintain medium heap as all entries are removed', function() {
      exerciseFullRemovalFromPriorityQueue(mediumSchedule);
    });
  });
});
