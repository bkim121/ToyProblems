// Monica wants to buy exactly one keyboard and one USB drive from her favorite electronics store. The store sells  different brands of keyboards and  different brands of USB drives. Monica has exactly  dollars to spend, and she wants to spend as much of it as possible (i.e., the total cost of her purchase must be maximal).

// Given the price lists for the store's keyboards and USB drives, find and print the amount of money Monica will spend. If she doesn't have enough money to buy one keyboard and one USB drive, print -1 instead.

// Note: She will never buy more than one keyboard and one USB drive even if she has the leftover money to do so.

// Input Format

// The first line contains three space-separated integers describing the respective values of  (the amount of money Monica has),  (the number of keyboard brands) and  (the number of USB drive brands).
// The second line contains  space-separated integers denoting the prices of each keyboard brand.
// The third line contains  space-separated integers denoting the prices of each USB drive brand.

// Constraints

// The price of each item is in the inclusive range .
// Output Format

// Print a single integer denoting the amount of money Monica will spend. If she doesn't have enough money to buy one keyboard and one USB drive, print -1 instead.

// Sample Input 0

// 10 2 3
// 3 1
// 5 2 8
// Sample Output 0

// 9

function getMoneySpent(keyboards, drives, s){
  // Complete this function
  var price = -1;
  for (var i = 0; i < keyboards.length; i++){
    for (var j = 0; j < drives.length; j++){
      var current = keyboards[i] + drives[j]
      if ((current >= price) && (current <= s)){
        price = current
      }
    }
  }
  return price
}

console.log(getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 2))
