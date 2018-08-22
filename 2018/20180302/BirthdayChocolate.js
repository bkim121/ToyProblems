// Lily has a chocolate bar consisting of a row of  squares where each square has an integer written on it. She wants to share it with Ron for his birthday, which falls on month  and day . Lily wants to give Ron a piece of chocolate only if it contains  consecutive squares whose integers sum to .

// Given , , and the sequence of integers written on each square of Lily's chocolate bar, how many different ways can Lily break off a piece of chocolate to give to Ron?

// For example, if ,  and the chocolate bar contains  squares with the integers  written on them from left to right, the following diagram shows two ways to break off a piece:


// Input Format

// The first line contains an integer denoting  (the number of squares in the chocolate bar).
// The second line contains  space-separated integers describing the respective values of  (the numbers written on each consecutive square of chocolate).
// The third line contains two space-separated integers describing the respective values of  (Ron's birth day) and (Ron's birth month).


// Output Format

// Print an integer denoting the total number of ways that Lily can give a piece of chocolate to Ron.


// Sample Input 0

// 5
// 1 2 1 3 2
// 3 2


// Sample Output 0

// 2



function solve(n, s, d, m){
  // Complete this function
  var answer = 0;
  for (var i = 0; i < s.length - m + 1; i++){
    var sum = 0;
    for (var j = i; j < i + m; j++) {
      sum = sum + s[j]
    }
    if (sum === d){
      answer = answer + 1;
    }
  }
  return answer
}


solve(5, [ 1, 2, 1, 3, 2 ], 3, 2)
