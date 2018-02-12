// Colleen is having a birthday! She will have a cake with one candle for each year of her age. When she blows out the candles, she’ll only be able to blow out the tallest ones.

// Find and print the number of candles she can successfully blow out.


// Input Format

// The first line contains a single integer, , denoting the number of candles on the cake.
// The second line contains  space-separated integers, where each integer  describes the height of candle .


// Constraints


// Output Format

// Print the number of candles the can be blown out on a new line.


// Sample Input

// 4
// 3 2 1 3


// Sample Output

// 2

function birthdayCakeCandles(n, ar) {
  // Complete this function
  var count = 0;
  var max = Math.max(...ar)
  for (var i = 0; i < n; i++){
    if (max === ar[i]){
      count++;
    }
  }
  return count
}
