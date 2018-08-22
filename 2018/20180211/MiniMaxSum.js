// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.


// Input Format

// A single line of five space-separated integers.


// Constraints

// Each integer is in the inclusive range .


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)


// Sample Input

// 1 2 3 4 5


// Sample Output

// 10 14

function miniMaxSum(arr) {
  // Complete this function
  var min = arr.indexOf(Math.min(...arr));
  var max = arr.indexOf(Math.max(...arr));
  var small = 0;
  var big = 0;
  for(var i = 0; i < arr.length; i++){
    if (i !== max){
      small = small + arr[i]
    }
    if (i !== min){
      big = big + arr[i]
    }
  }
  console.log(small + ' ' + big)
}

miniMaxSum([1, 2, 3, 4, 5])