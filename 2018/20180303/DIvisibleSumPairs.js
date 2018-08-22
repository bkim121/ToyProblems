// You are given an array of  integers, , and a positive integer, . Find and print the number of pairs where  and  +  is divisible by .


// Input Format

// The first line contains  space-separated integers,  and .
// The second line contains  space-separated integers describing the values of .


// Output Format

// Print the number of  pairs where  and  +  is evenly divisible by .


// Sample Input

// 6 3
// 1 3 2 6 1 2


// Sample Output

//  5



function divisibleSumPairs(n, k, ar) {
    // Complete this function
  var answer = 0;
  for (var i = 0; i < ar.length - 1; i++){
    for (var j = i + 1; j < ar.length; j++){
      if ((ar[i] + ar[j]) % k === 0){
        answer++;
      }
    }
  }
  return answer;
}


console.log(divisibleSumPairs(6, 3, [ 1, 3, 2, 6, 1, 2 ]))