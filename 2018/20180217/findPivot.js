// findPivot

// I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet.
// In other words, this is an alphabetically ordered array that has been "rotated." Write a function that returns the index of the pivot, or null if there is no pivot (meaning the entire list of words is in alphabetical order).

// For example:
// ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']
// // returns 3

// Remember the rules of how to answer technical prompts. Try and go from a working naive solution to a working ideal solution.

var findPivot = function (array, start, end) {
  // TODO: Implement
  for(var i = 0; i < array.length; i++){
      if (array[i] > array[i + 1]){
        return i+ 1
      }
  }
  return null
};

// var findPivot = function (array, start, end) {
//   var first = start || 0;
//   var last = array.length - 1;
//   if (array[Math.min(array.length / 2) - 2] < array[Math.min(array.length / 2) - 1]){
//     console.log(array[Math.min(array.length / 2) - 1])
//   }
// }

console.log(findPivot(['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']))