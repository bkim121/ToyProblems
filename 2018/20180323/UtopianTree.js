// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after growth cycles?


// Input Format

// The first line contains an integer, , the number of test cases.
//  subsequent lines each contain an integer, , denoting the number of cycles for that test case.


// Output Format

// For each test case, print the height of the Utopian Tree after  cycles. Each height must be printed on a new line.

// Sample Input

// 3
// 0
// 1
// 4
// Sample Output

// 1
// 2
// 7



function utopianTree(n) {
  // Complete this function
  if (n === 0){
    return 1;
  } else {
    var year = 1;
    for (var i = 1; i <= n; i++){
      if ((i % 2) !== 0){
        year = year * 2
      } else {
        year++;
      }
    }
    return year
  }
}

console.log(utopianTree(4))