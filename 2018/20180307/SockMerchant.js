// John works at a clothing store and he's going through a pile of socks to find the number of matching pairs. More specifically, he has a pile of  loose socks where each sock  is labeled with an integer, , denoting its color. He wants to sell as many socks as possible, but his customers will only buy them in matching pairs. Two socks,  and , are a single matching pair if they have the same color ().

// Given  and the color of each sock, how many pairs of socks can John sell?


// Input Format

// The first line contains an integer, , denoting the number of socks.
// The second line contains  space-separated integers describing the respective values of .


// Output Format

// Print the total number of matching pairs of socks that John can sell.


// Sample Input

// 9
// 10 20 20 10 10 30 50 10 20


// Sample Output

// 3


function sockMerchant(n, ar) {
  // Complete this function
  var obj = {}
  for (var i = 0; i < ar.length; i++){
    if (obj[ar[i]] === undefined) {
      obj[ar[i]] = 1;
    } else {
      obj[ar[i]] = obj[ar[i]] + 1;
    }
  }
  var socks = 0;
  for (var x in obj){
    socks = socks + Math.floor(obj[x] / 2);
  }
  return socks
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))