// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

// Note: Before each iteration you must determine the current shortest stick.


// Input Format
// The first line contains a single integer .
// The next line contains  space-separated integers: a0, a1,...an-1, where  represents the length of the  stick in array arr.


// Output Format
// For each operation, print the number of sticks that are cut, on separate lines.


// Sample Input
// 6
// 5 4 4 2 2 8


// Sample Output

// 6
// 4
// 2
// 1


function cutTheSticks(arr) {

  // Complete this function

  var answer = [];

  smallest = (array) => {
    var small = array[0];
    for (var i = 1; i < array.length; i++){
      if (array[i] < small){
        small = array[i]
      }
    }
    return small
  }

  helper = (ar) => {
    answer.push(ar.length);
    var cut = smallest(ar)
    var count = 0;
    var newAr = [];
    for (var j = 0; j < ar.length; j++){
      if ((ar[j] - cut) > 0){
        newAr.push(ar[j] - cut)
      }
    }
    if (newAr.length > 0){
      helper(newAr)
    }
  }

  helper(arr)

  return answer

}

console.log(cutTheSticks([ 5, 4, 4, 2, 2, 8 ]))