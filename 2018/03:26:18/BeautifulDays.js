// Lily likes to play games with integers and their reversals. For some integer , we define  to be the reversal of all digits in . For example, , , and .

// Logan wants to go to the movies with Lily on some day  satisfying , but he knows she only goes to the movies on days she considers to be beautiful. Lily considers a day to be beautiful if the absolute value of the difference between  and  is evenly divisible by .

// Given , , and , count and print the number of beautiful days when Logan and Lily can go to the movies.

// Input Format

// A single line of three space-separated integers describing the respective values of , , and .

// Constraints

// Output Format

// Print the number of beautiful days in the inclusive range between  and .

// Sample Input

// 20 23 6
// Sample Output

// 2

function beautifulDays(i, j, k) {
  // Complete this function
  var count = 0;
  reverse = (y) => {
    var str = y.toString();
    var rev = ''
    for (var w = str.length - 1; w >= 0; w--){
      rev = rev + str[w]
    }
    return Number(rev)
  }
  for (var x = i; x <= j; x++){
    revStr = reverse(x);
    var sub = x - revStr
    if ((sub % k) === 0){
      count++
    }
  }
  return count
}

beautifulDays(20, 23, 6)