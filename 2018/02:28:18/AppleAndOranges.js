// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Sam’s two children, Larry and Rob, decide to play a game in which they each climb a tree and throw fruit at their (Sam’s) house. Each fruit that lands on the house scores one point for the one who threw it. Larry climbs the tree on the left (the apple), and Rob climbs the one on the right (the orange).

// We’ll use the following diagram to describe the challenge:

// For simplicity, we’ll assume all of the landmarks are on a number line. Larry climbs the apple tree at point , and Rob climbs the orange tree at point . Sam’s house stands between points  and . Values increase from left to right.

// You will be given a list of distances the fruits are thrown. Negative distances indicate travel left and positive distances, travel right. Your task will be to calculate the scores for Larry and Rob and report them each on a separate line.


// Input Format

// The first line contains two space-separated integers denoting the respective values of  and .
// The second line contains two space-separated integers denoting the respective values of  and .
// The third line contains two space-separated integers denoting the respective values of  and .
// The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
// The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .


// Output Format

// Print two lines of output:

// On the first line, print the number of apples that fall on Sam's house.
// On the second line, print the number of oranges that fall on Sam's house.


// Sample Input

// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6


// Sample Output

// 1 1

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Complete this function
  var answer = [0, 0];
  for (var i = 0; i < apples.length; i++) {
    var distance = apples[i] + a;
    if ((distance >= s) && (distance <= t)) {
      answer[0] = answer[0] + 1;
    }
  }
  for (var j = 0; j < oranges.length; j++) {
    var distance = oranges[j] + b;
    if ((distance >= s) && (distance <= t)) {
      answer[1] = answer[1] + 1;
    }
  }
  console.log(answer[0])
  console.log(answer[1])
}

countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ])



