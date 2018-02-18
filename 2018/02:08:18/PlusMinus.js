// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.


// Input Format

// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers describing an array of numbers .


// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeroes in the array compared to its size.


// Sample Input

// 6
// -4 3 -9 0 4 1

// Sample Output
// 0.500000
// 0.333333
// 0.166667


function plusMinus(arr) {
    // Complete this function
  var array = [0, 0, 0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      array[0]++;
    } else if (arr[i] < 0){
      array[1]++;
    } else {
      array[2]++;
    }
  }
  for (var x = 0; x < array.length; x++){
    array[x] = (array[x] / arr.length).toFixed(6);
  }
  return array
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))