// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints.

// Note: A square integer is an integer which is the square of an integer, e.g. .


// Input Format

// The first line contains , the number of test cases.
// Each of the next  lines contains two space-separated integers denoting  and , the starting and ending integers in the ranges.


// Output Format

// For each test case, print the number of square integers in the range on a new line.



// Sample Input

// 2
// 3 9
// 17 24


// Sample Output

// 2
// 0

function squares(a, b) {
  // Complete this function
  console.log(a, b)
  var bottom = Math.ceil(Math.sqrt(a))
  var top = Math.floor(Math.sqrt(b))
  return (top - bottom + 1)
}

console.log(squares(3, 9))

console.log(squares(17, 24))