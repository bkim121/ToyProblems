// MedianStream

// Here is a more complicated, extensive coding challenge. You'll face many challenges of this stature during the interview process. At times you'll be given a problem where the time provided will not be sufficient to construct an ideal solution for, so what will you do? This problem may or may not provide you with the opportunity to experience this sort of interviewing situation.

// This one is heaps of fun...

// Here's a resource which may help:
// http://eloquentjavascript.net/1st_edition/appendix2.html

// Given a stream of unordered integers, find the median of the stream any time we want it.
// We will be asked to find the median multiple times, so the peekMedian function should have optimal time complexity.

// Note: The median is the middle number of a sorted set. , or the average of the two middle numbers in an even set (when the set is .

// [1, 4, 8]
// Median is 4 (middle number)

// [1, 3, 7, 8]
// Median is 5 (average of two middle numbers)



var MedianStream = function () {
  // TODO: Implement!
  this.array = [];
};

MedianStream.prototype = {
  insert: function (num) {
    this.array.push(num)
    if (this.array.length > 1){
      var newNum = this.array[this.array.length - 1]
      var middle = this.array[Math.floor(this.array.length / 2)]
      if (middle > newNum){
        this.array[Math.floor(this.array.length / 2)] = num;
        this.array[this.array.length - 1] = middle
      }

    }
  },
  peekMedian: function () {
    if (this.array.length % 2 === 1){
      return this.array[Math.floor(this.array.length / 2)];
    } else {
      var average = (this.array[(this.array.length / 2)] + this.array[(this.array.length / 2) - 1])
      return average / 2
    }
  },
  size: function () {
    return this.array.length;
  }
};

var mStream = new MedianStream();
mStream.insert(1);
mStream.insert(3);
mStream.insert(2);
mStream.peekMedian();
// mStream.size();