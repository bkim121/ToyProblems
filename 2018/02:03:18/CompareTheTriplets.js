// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

// We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

// Your task is to find their comparison points by comparing  with ,  with , and  with .

// If , then Alice is awarded  point.
// If , then Bob is awarded  point.
// If , then neither person receives a point.
// Comparison points is the total points a person earned.

// Given  and , can you compare the two challenges and print their respective comparison points?

// Input Format

// The first line contains  space-separated integers, , , and , describing the respective values in triplet .
// The second line contains  space-separated integers, , , and , describing the respective values in triplet .

// Constraints

// Output Format

// Print two space-separated integers denoting the respective comparison points earned by Alice and Bob.

// Sample Input

// 5 6 7
// 3 6 10
// Sample Output

// 1 1

function solve(a0, a1, a2, b0, b1, b2){
  // Complete this function
  var a = 0;
  var b = 0;
  for (var i = 0; i < 3; i++){
    if (arguments[i] > arguments[i+3]){
      a++
    } else if (arguments[i] < arguments[i+3]){
      b++
    }
  }
  return [a, b]
}

console.log(solve(5,6,7,3,6,10))